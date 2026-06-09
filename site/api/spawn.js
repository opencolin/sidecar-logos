// Vercel serverless function — Spawn 20 AI variations when an image is upvoted.
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

// 10 same-subject variations — preserve any existing text/captions in the
// source. Works equally well for memes and logos.
const PERTURBATIONS = [
  { tag: 'var:darker',    prompt: 'Shift the color palette darker and moodier. Keep the same subject, same composition, and preserve any existing text/captions exactly.' },
  { tag: 'var:lighter',   prompt: 'Shift the palette lighter, brighter, more vibrant. Keep the subject, composition, and any existing text/captions intact.' },
  { tag: 'var:minimal',   prompt: 'Strip non-essential detail. Reduce to essential geometric forms. Keep the subject recognizable and preserve any text exactly.' },
  { tag: 'var:detailed',  prompt: 'Add tasteful detail, finer linework, additional flourishes. Same subject and any text intact.' },
  { tag: 'var:geometric', prompt: 'Reinterpret the subject using strictly geometric primitives — circles, squares, triangles. Preserve any existing text.' },
  { tag: 'var:organic',   prompt: 'Reinterpret with softer organic hand-drawn curves. Same subject, preserve text.' },
  { tag: 'var:accent',    prompt: 'Swap in a single bold accent color complementary to the original. Same subject, same composition, same text.' },
  { tag: 'var:deepfried', prompt: 'Deep-fry the image: heavy JPEG artifacts, oversaturated reds and yellows, blown-out contrast, slight noise. Keep the subject and text recognizable.' },
  { tag: 'var:inverted',  prompt: 'Invert the palette (light becomes dark and vice versa). Same subject and text.' },
  { tag: 'var:framed',    prompt: 'Render the subject from a slightly different angle or with mirrored/zoomed-in framing. Same overall style and text.' },
];

// 10 creative-riff prompts — use the upvoted image as a STYLE reference only
// (palette, line weight, typography, mood) but generate an entirely new subject.
// Mix of meme templates and abstract pictograms.
const RIFF_PREFIX =
  'Completely replace the subject. Match the reference image only for ' +
  'palette, line weight, typography style, and overall mood — but change ' +
  'WHAT it depicts. New subject: ';

const CREATIVE_RIFFS = [
  { tag: 'riff:drake',          prompt: RIFF_PREFIX + 'Classic Drake meme format with two stacked panels showing Drake rejecting one option and approving another. Bold Impact-font white captions with black outline.' },
  { tag: 'riff:two-buttons',    prompt: RIFF_PREFIX + 'The "Two Buttons" meme: a person sweating profusely as they debate pressing one of two red buttons. White Impact-font labels with black outline.' },
  { tag: 'riff:this-is-fine',   prompt: RIFF_PREFIX + 'The "This is Fine" meme: a small cartoon dog calmly sitting at a table while the room burns around it. Bold caption at top.' },
  { tag: 'riff:galaxy-brain',   prompt: RIFF_PREFIX + 'The "Galaxy Brain" / "Expanding Brain" meme: four stacked panels of a brain progressively glowing brighter into a cosmic universe-brain.' },
  { tag: 'riff:woman-cat',      prompt: RIFF_PREFIX + 'The "Woman Yelling at Cat" meme: left panel of a blonde woman pointing aggressively, right panel of a confused white cat at a dinner table.' },
  { tag: 'riff:distracted',     prompt: RIFF_PREFIX + 'The "Distracted Boyfriend" meme: a man walking with his girlfriend turns to stare at another woman walking by.' },
  { tag: 'riff:minimal-logo',   prompt: RIFF_PREFIX + 'A clean minimalist abstract logo mark — geometric shapes (circles, squares, hexagons) suggesting a brand identity.' },
  { tag: 'riff:emoji-mark',     prompt: RIFF_PREFIX + 'A single playful emoji-style face or pictogram, slightly chunky, bold outlines.' },
  { tag: 'riff:meme-caption',   prompt: RIFF_PREFIX + 'A bold Impact-font meme caption arranged top-and-bottom over a photographic stock-image scene.' },
  { tag: 'riff:vintage-poster', prompt: RIFF_PREFIX + 'A retro mid-century travel-poster-style illustration of a place or activity, bold geometry, restricted palette.' },
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
