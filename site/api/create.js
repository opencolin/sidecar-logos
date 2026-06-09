// Vercel serverless function — Create a brand-new image (meme or logo) from a
// text prompt via Vercel AI Gateway → google/gemini-3.1-flash-image-preview.
// Persists to Supabase Storage + castle_edits with the requested kind so the
// new card appears in everyone's gallery (filtered by Memes/Logos mode).

import { generateText } from 'ai';
import { createClient } from '@supabase/supabase-js';

export const config = { maxDuration: 60 };

const SUPABASE_URL = 'https://mrnccntqmkxjazznejfc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmNjbnRxbWt4amF6em5lamZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA3NTksImV4cCI6MjA5MDc3Njc1OX0.T6oFTtYiFTsx6ojuogpZFXAS7tN5-dPzwvmY5V2xFGI';
const STORAGE_BUCKET = 'edit-images';
const MODEL = 'google/gemini-3.1-flash-image-preview';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt, sessionId, kind: rawKind } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });
  const kind = rawKind === 'meme' ? 'meme' : 'logo';

  const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

  // Insert a processing row first so we have a UUID for the storage filename.
  const { data: row, error: insertErr } = await sb
    .from('castle_edits')
    .insert({
      parent_logo_id: null,
      session_id: sessionId || 'anon',
      prompt: `create:${kind}`,
      source_image_url: null,
      status: 'processing',
      image_data_url: null,
      up_votes: 0,
      down_votes: 0,
      kind,
    })
    .select('id')
    .single();
  if (insertErr) {
    return res.status(500).json({ status: 'error', error: insertErr.message });
  }
  const jobId = row.id;

  try {
    const result = await generateText({
      model: MODEL,
      messages: [{
        role: 'user',
        content: [{ type: 'text', text: prompt + '\n\nSquare 1:1 aspect ratio.' }],
      }],
    });
    const file = result.files?.find(f => f.mediaType?.startsWith('image/'));
    if (!file) {
      const msg = result.text?.slice(0, 200) || 'No image returned';
      await sb.from('castle_edits').update({ status: 'error', error_msg: msg }).eq('id', jobId);
      return res.status(200).json({ status: 'error', error: msg });
    }

    const bytes = file.uint8Array ?? Buffer.from(file.base64, 'base64');
    const mime = file.mediaType || 'image/png';
    const ext = mime === 'image/jpeg' ? 'jpg' : 'png';
    const filename = `create_${jobId}.${ext}`;

    const { error: uploadErr } = await sb.storage
      .from(STORAGE_BUCKET)
      .upload(filename, bytes, { contentType: mime, upsert: true });
    if (uploadErr) {
      await sb.from('castle_edits').update({ status: 'error', error_msg: uploadErr.message }).eq('id', jobId);
      return res.status(500).json({ status: 'error', error: uploadErr.message });
    }

    const { data: urlData } = sb.storage.from(STORAGE_BUCKET).getPublicUrl(filename);
    const publicUrl = urlData.publicUrl;

    const { error: updateErr } = await sb
      .from('castle_edits')
      .update({ status: 'done', image_data_url: publicUrl, error_msg: null })
      .eq('id', jobId);
    if (updateErr) {
      return res.status(500).json({ status: 'error', error: updateErr.message });
    }

    return res.status(200).json({
      status: 'done',
      jobId,
      kind,
      imageDataUrl: publicUrl,
    });
  } catch (err) {
    const msg = err.message?.slice(0, 300) || 'AI Gateway error';
    await sb.from('castle_edits').update({ status: 'error', error_msg: msg }).eq('id', jobId).catch(() => {});
    return res.status(200).json({ status: 'error', error: msg });
  }
}
