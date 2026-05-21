// Vercel serverless function — Spawn 20 AI variations when a logo is upvoted.
//
// Generates via Qwen-Image-Edit on Tailscale Funnel (free, instruction-based,
// ~12s/edit, server-side serialized). Each result is uploaded to Supabase
// Storage and a castle_edits row is inserted IMMEDIATELY as it finishes.
// Clients subscribed to Supabase Realtime see cards appear progressively.
//
// Body: { logoId, imageUrl, sessionId, parentLabel? }

import { createClient } from '@supabase/supabase-js';

export const config = { maxDuration: 300 };

const SUPABASE_URL = 'https://mrnccntqmkxjazznejfc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmNjbnRxbWt4amF6em5lamZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA3NTksImV4cCI6MjA5MDc3Njc1OX0.T6oFTtYiFTsx6ojuogpZFXAS7tN5-dPzwvmY5V2xFGI';
const STORAGE_BUCKET = 'edit-images';
const QWEN_ENDPOINT = 'https://wildolga.tail7a71df.ts.net:8443/edit';

// 10 same-subject variations
const PERTURBATIONS = [
  { tag: 'var:darker',    prompt: 'Shift the color palette darker and moodier. Keep the same subject, same composition, same wordmark "sidecar" unchanged.' },
  { tag: 'var:lighter',   prompt: 'Shift the palette lighter, pastel, airy. Keep the subject and composition unchanged. Keep the wordmark "sidecar".' },
  { tag: 'var:minimal',   prompt: 'Strip non-essential detail. Reduce to essential geometric forms. Keep the subject recognizable and the wordmark "sidecar".' },
  { tag: 'var:detailed',  prompt: 'Add tasteful detail, finer linework, additional flourishes. Same subject, same wordmark "sidecar".' },
  { tag: 'var:geometric', prompt: 'Reinterpret using strictly geometric primitives — circles, squares, triangles. Same subject, same wordmark "sidecar".' },
  { tag: 'var:organic',   prompt: 'Reinterpret with softer organic hand-drawn curves. Same subject, same wordmark "sidecar".' },
  { tag: 'var:accent',    prompt: 'Swap in a single bold accent color complementary to the original. Same subject and composition. Same wordmark "sidecar".' },
  { tag: 'var:texture',   prompt: 'Add subtle paper grain or halftone texture. Same subject and composition. Same wordmark "sidecar".' },
  { tag: 'var:inverted',  prompt: 'Invert the palette (light becomes dark and vice versa). Same subject. Same wordmark "sidecar".' },
  { tag: 'var:rotated',   prompt: 'Render the subject from a slightly different angle or mirrored framing. Same style, same wordmark "sidecar".' },
];

// 10 creative-riff prompts — same style reference, entirely new subject
const RIFF_PREFIX =
  'Completely replace the subject. Match the reference image only for ' +
  'palette, line weight, typography style, and overall mood — but change ' +
  'WHAT it depicts. Keep the wordmark "sidecar" (lowercase). ' +
  'No motorcycle, no bicycle, no wheels. New subject: ';

const CREATIVE_RIFFS = [
  { tag: 'riff:two-cubes',     prompt: RIFF_PREFIX + 'two cubes side by side, one large primary cube with a smaller helper cube docked to its edge (Docker sidecar pattern).' },
  { tag: 'riff:rj45',          prompt: RIFF_PREFIX + 'a single RJ45 ethernet plug head-on with gold pins visible inside the clear housing.' },
  { tag: 'riff:container-ship',prompt: RIFF_PREFIX + 'a stylized container ship laden with stacked shipping containers, side profile.' },
  { tag: 'riff:padlock',       prompt: RIFF_PREFIX + 'a clean minimalist padlock with subtle hex-lattice texture (WireGuard encryption).' },
  { tag: 'riff:globe-pins',    prompt: RIFF_PREFIX + 'a stylized globe with five small region pins marking regions.' },
  { tag: 'riff:terminal',      prompt: RIFF_PREFIX + 'a small terminal window with a "$" prompt and the wordmark "sidecar" beside it.' },
  { tag: 'riff:whale',         prompt: RIFF_PREFIX + 'a Docker-style whale silhouette carrying stacked shipping containers on its back.' },
  { tag: 'riff:network-mesh',  prompt: RIFF_PREFIX + 'a network topology graph of nodes connected by thin lines.' },
  { tag: 'riff:monogram-s',    prompt: RIFF_PREFIX + 'a bold geometric letter S monogram inscribed inside a hexagon or shield.' },
  { tag: 'riff:ip-tag',        prompt: RIFF_PREFIX + 'a luggage-tag-style label showing the IP address "203.0.113.42" in clean monospace, hanging from a loop.' },
];

const ALL_PROMPTS = [...PERTURBATIONS, ...CREATIVE_RIFFS];

async function fetchSourceBytes(url) {
  if (url.startsWith('data:')) {
    const [, b64] = url.split(',');
    return Buffer.from(b64, 'base64');
  }
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Source image fetch ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

async function qwenEdit(sourceBytes, promptText) {
  const formData = new FormData();
  formData.append('prompt', promptText);
  formData.append('images', new Blob([sourceBytes], { type: 'image/png' }), 'source.png');

  const res = await fetch(QWEN_ENDPOINT, { method: 'POST', body: formData });
  if (!res.ok) {
    throw new Error(`Qwen ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

async function processOne(sb, sourceBytes, p, parentLogoId, sessionId, sourceImageUrl) {
  // Insert pending row first so we get a UUID for filename
  const { data: row, error: insertErr } = await sb
    .from('castle_edits')
    .insert({
      parent_logo_id: typeof parentLogoId === 'number' ? parentLogoId : null,
      session_id: sessionId,
      prompt: p.tag,
      source_image_url: sourceImageUrl.startsWith('data:') ? '[data-url]' : sourceImageUrl,
      status: 'processing',
      image_data_url: null,
      up_votes: 0,
      down_votes: 0,
    })
    .select('id')
    .single();
  if (insertErr) throw insertErr;
  const jobId = row.id;

  try {
    const pngBytes = await qwenEdit(sourceBytes, p.prompt);

    const { error: uploadErr } = await sb.storage
      .from(STORAGE_BUCKET)
      .upload(`spawn_${jobId}.png`, pngBytes, { contentType: 'image/png', upsert: true });
    if (uploadErr) throw uploadErr;

    const { data: urlData } = sb.storage.from(STORAGE_BUCKET).getPublicUrl(`spawn_${jobId}.png`);
    const publicUrl = urlData.publicUrl;

    // This UPDATE flips status='processing' → status='done' AND sets image_data_url.
    // Clients subscribed to Realtime UPDATE on castle_edits will see the new card NOW.
    const { error: updateErr } = await sb
      .from('castle_edits')
      .update({ status: 'done', image_data_url: publicUrl, error_msg: null })
      .eq('id', jobId);
    if (updateErr) throw updateErr;

    return { tag: p.tag, status: 'done', id: jobId, image_data_url: publicUrl };
  } catch (err) {
    await sb.from('castle_edits')
      .update({ status: 'error', error_msg: String(err.message || err).slice(0, 300) })
      .eq('id', jobId);
    return { tag: p.tag, status: 'error', id: jobId, error: String(err.message || err).slice(0, 200) };
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { logoId, imageUrl, sessionId } = req.body || {};
  if (!logoId || !imageUrl || !sessionId) {
    return res.status(400).json({ error: 'Missing logoId, imageUrl, or sessionId' });
  }

  const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

  let sourceBytes;
  try {
    sourceBytes = await fetchSourceBytes(imageUrl);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }

  // Fire all 20 in parallel from our side; Qwen serializes them server-side
  // (one job at a time), but each completion writes to Supabase immediately.
  // Clients subscribed to Realtime see cards land progressively over ~4 min.
  const settled = await Promise.allSettled(
    ALL_PROMPTS.map(p => processOne(sb, sourceBytes, p, logoId, sessionId, imageUrl))
  );

  const results = settled.map((s, i) =>
    s.status === 'fulfilled' ? s.value : { tag: ALL_PROMPTS[i].tag, status: 'error', error: String(s.reason).slice(0, 200) }
  );
  const done = results.filter(r => r.status === 'done');
  return res.status(200).json({
    parentLogoId: logoId,
    spawned: done.length,
    failed: results.length - done.length,
    edits: done,
  });
}
