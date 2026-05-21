// Vercel serverless function — Spawn 10 AI variations of a logo on upvote.
//
// Body: { logoId: number, imageUrl: string, sessionId: string, parentLabel?: string }
// Generates 10 img2img variations in parallel via Vercel AI Gateway (OIDC auth),
// uploads each to Supabase Storage bucket 'edit-images', inserts a row in
// castle_edits for each, and returns the inserted rows.
//
// Variations: 10 style/composition perturbations of the source image.

import { generateText } from 'ai';
import { createClient } from '@supabase/supabase-js';

export const config = { maxDuration: 300 };

const SUPABASE_URL = 'https://mrnccntqmkxjazznejfc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmNjbnRxbWt4amF6em5lamZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA3NTksImV4cCI6MjA5MDc3Njc1OX0.T6oFTtYiFTsx6ojuogpZFXAS7tN5-dPzwvmY5V2xFGI';
const STORAGE_BUCKET = 'edit-images';
const MODEL = 'google/gemini-3.1-flash-image-preview';

// Ten distinct perturbation directions. Each takes the same input image and
// produces a sibling design with a specific transformation.
// VARIATIONS (10): same subject, same composition, perturbed.
const PERTURBATIONS = [
  { tag: 'var:darker',     prompt: 'Generate a sibling logo to this one. Same subject, same composition. Shift the color palette darker and moodier. Keep the wordmark "sidecar" (lowercase) if present, change nothing else about it.' },
  { tag: 'var:lighter',    prompt: 'Generate a sibling logo to this one. Same subject, same composition. Shift the palette lighter, pastel, airy. Keep the wordmark "sidecar" (lowercase) if present.' },
  { tag: 'var:minimal',    prompt: 'Generate a more minimal version of this logo. Strip non-essential detail. Reduce to its most essential geometric forms. Keep the wordmark "sidecar" (lowercase).' },
  { tag: 'var:detailed',   prompt: 'Generate a more detailed, ornate version of this logo. Add tasteful detail, finer linework, additional flourishes. Keep the wordmark "sidecar" (lowercase).' },
  { tag: 'var:geometric',  prompt: 'Reinterpret this logo using strictly geometric primitives (circles, squares, triangles). Same subject, same wordmark "sidecar" (lowercase).' },
  { tag: 'var:organic',    prompt: 'Reinterpret this logo with softer, organic, hand-drawn curves. Same subject, same wordmark "sidecar" (lowercase).' },
  { tag: 'var:accent',     prompt: 'Generate a sibling of this logo with a single bold accent color swapped in (pick a complementary color to the original). Same subject and composition. Same wordmark "sidecar" (lowercase).' },
  { tag: 'var:texture',    prompt: 'Generate a sibling of this logo with added subtle texture (grain, halftone, or paper). Same subject and composition. Same wordmark "sidecar" (lowercase).' },
  { tag: 'var:inverted',   prompt: 'Generate an inverted-palette version of this logo (negative-space inversion, light becomes dark and vice versa). Same subject. Same wordmark "sidecar" (lowercase).' },
  { tag: 'var:rotated',    prompt: 'Generate a sibling with the subject in a slightly different pose/angle (rotated, mirrored, or different framing). Same style and wordmark "sidecar" (lowercase).' },
];

// CREATIVE RIFFS (10): use the upvoted image as a STYLE/AESTHETIC reference
// only — palette, line weight, typography, mood. Subject is entirely different.
// Pulls from Sidecar's brand vocabulary: container patterns, networking, IP,
// WireGuard, terminal, etc. No motorcycles, no wheels.
const RIFF_PREFIX =
  'Use the provided image only as a STYLE and AESTHETIC reference — match its ' +
  'color palette, line weight, typography, lighting, and overall mood. ' +
  'But invent an ENTIRELY NEW SUBJECT and composition. ' +
  'The new logo is for "sidecar" — a WireGuard relay that gives every Docker container ' +
  'a real, static public IP. Brand name = the cloud-native sidecar pattern ' +
  '(a helper container alongside a primary container). ' +
  'HARD CONSTRAINTS: no motorcycle, no bicycle, no wheels of any kind. ' +
  'The only text in the image is the single word "sidecar" (lowercase). ' +
  'Square 1:1 logo, centered, on a background matching the reference style.\n\nNew subject: ';

const CREATIVE_RIFFS = [
  { tag: 'riff:two-cubes',     prompt: RIFF_PREFIX + 'two cubes side by side — one large primary cube and one smaller "sidecar" cube docked to its edge, abstract container pattern.' },
  { tag: 'riff:rj45',          prompt: RIFF_PREFIX + 'a single RJ45 ethernet plug, head-on view, gold pins visible inside the clear housing, cable extending behind.' },
  { tag: 'riff:container-ship',prompt: RIFF_PREFIX + 'a stylized container ship laden with stacked shipping containers, side profile.' },
  { tag: 'riff:padlock',       prompt: RIFF_PREFIX + 'a clean minimalist padlock, WireGuard/encryption metaphor, with subtle hex-lattice texture suggesting post-quantum crypto.' },
  { tag: 'riff:globe-pins',    prompt: RIFF_PREFIX + 'a globe with five small region pins, clean flat geometric illustration.' },
  { tag: 'riff:terminal',      prompt: RIFF_PREFIX + 'a tiny terminal-window pictogram with a "$" prompt and the word "sidecar" beside it, monospace.' },
  { tag: 'riff:whale',         prompt: RIFF_PREFIX + 'a stylized whale silhouette carrying stacked shipping containers on its back (Docker metaphor).' },
  { tag: 'riff:network-mesh',  prompt: RIFF_PREFIX + 'a network topology graph: small nodes connected by thin lines, abstract mesh.' },
  { tag: 'riff:monogram-s',    prompt: RIFF_PREFIX + 'a bold geometric letter S monogram, inscribed inside a hexagon or shield, no other decoration.' },
  { tag: 'riff:ip-tag',        prompt: RIFF_PREFIX + 'a luggage-tag-style label showing the IP address "203.0.113.42" in clean monospace, hanging from a loop.' },
];

const ALL_PROMPTS = [...PERTURBATIONS, ...CREATIVE_RIFFS];

async function fetchAsBase64(url) {
  if (url.startsWith('data:')) {
    const [header, b64] = url.split(',');
    const m = header.match(/data:([^;]+)/);
    return { bytes: Buffer.from(b64, 'base64'), mime: m ? m[1] : 'image/png' };
  }
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Source image fetch ${r.status}`);
  return { bytes: Buffer.from(await r.arrayBuffer()), mime: 'image/png' };
}

async function generateOne(sourceBytes, sourceMime, perturbation) {
  const result = await generateText({
    model: MODEL,
    messages: [{
      role: 'user',
      content: [
        { type: 'image', image: sourceBytes, mediaType: sourceMime },
        { type: 'text', text: perturbation.prompt },
      ],
    }],
  });
  const file = result.files?.find(f => f.mediaType?.startsWith('image/'));
  if (!file) {
    throw new Error(result.text?.slice(0, 120) || 'no image returned');
  }
  return {
    bytes: file.uint8Array ?? Buffer.from(file.base64, 'base64'),
    mime: file.mediaType || 'image/png',
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { logoId, imageUrl, sessionId, parentLabel } = req.body || {};
  if (!logoId || !imageUrl || !sessionId) {
    return res.status(400).json({ error: 'Missing logoId, imageUrl, or sessionId' });
  }

  const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

  // 1. Fetch source image once
  let source;
  try {
    source = await fetchAsBase64(imageUrl);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }

  // 2. Generate all 20 in parallel (10 variations + 10 creative riffs).
  // settle independently so partial failures don't block successful generations.
  const settled = await Promise.allSettled(
    ALL_PROMPTS.map(p => generateOne(source.bytes, source.mime, p))
  );

  // 3. For each successful generation, upload + insert castle_edits row
  const results = await Promise.all(
    settled.map(async (s, i) => {
      const p = ALL_PROMPTS[i];
      if (s.status !== 'fulfilled') {
        return { tag: p.tag, status: 'error', error: String(s.reason).slice(0, 200) };
      }
      try {
        // Insert castle_edits row first so we get a UUID for storage filename
        const { data: row, error: insertErr } = await sb
          .from('castle_edits')
          .insert({
            parent_logo_id: typeof logoId === 'number' ? logoId : null,
            session_id: sessionId,
            prompt: `${p.tag}: ${p.prompt.slice(0, 80)}…`,
            source_image_url: imageUrl.startsWith('data:') ? '[data-url]' : imageUrl,
            status: 'processing',
            image_data_url: null,
            up_votes: 0,
            down_votes: 0,
          })
          .select('id')
          .single();
        if (insertErr) throw insertErr;

        const jobId = row.id;
        const ext = s.value.mime === 'image/jpeg' ? 'jpg' : 'png';
        const filename = `spawn_${jobId}.${ext}`;

        const { error: uploadErr } = await sb.storage
          .from(STORAGE_BUCKET)
          .upload(filename, s.value.bytes, { contentType: s.value.mime, upsert: true });
        if (uploadErr) throw uploadErr;

        const { data: urlData } = sb.storage.from(STORAGE_BUCKET).getPublicUrl(filename);
        const publicUrl = urlData.publicUrl;

        const { error: updateErr } = await sb
          .from('castle_edits')
          .update({ status: 'done', image_data_url: publicUrl, error_msg: null })
          .eq('id', jobId);
        if (updateErr) throw updateErr;

        return { tag: p.tag, status: 'done', id: jobId, image_data_url: publicUrl };
      } catch (err) {
        return { tag: p.tag, status: 'error', error: err.message?.slice(0, 200) };
      }
    })
  );

  const done = results.filter(r => r.status === 'done');
  return res.status(200).json({
    parentLogoId: logoId,
    spawned: done.length,
    failed: results.length - done.length,
    edits: done,
  });
}
