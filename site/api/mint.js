// Vercel serverless function — Mint Icon via Vercel AI Gateway
// (google/gemini-3.1-flash-image-preview). Removes background from an image,
// returns transparent PNG as base64 data URL.

import { generateText } from 'ai';

export const config = { maxDuration: 60 };

const MODEL = 'google/gemini-3.1-flash-image-preview';

const MINT_PROMPT =
  'Remove the background completely, make it fully transparent. ' +
  'Keep only the foreground graphic — every line, color, and shape stays intact. ' +
  'Do not change colors or composition. Do not add a new background. ' +
  'Output: clean PNG with transparent background.';

async function fetchSourceBytes(url) {
  if (url.startsWith('data:')) {
    const [header, b64] = url.split(',');
    const m = header.match(/data:([^;]+)/);
    return { bytes: Buffer.from(b64, 'base64'), mime: m ? m[1] : 'image/png' };
  }
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Source fetch ${r.status}`);
  return { bytes: Buffer.from(await r.arrayBuffer()), mime: 'image/png' };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { imageUrl } = req.body || {};
  if (!imageUrl) return res.status(400).json({ error: 'Missing imageUrl' });

  let source;
  try {
    source = await fetchSourceBytes(imageUrl);
  } catch (err) {
    return res.status(400).json({ status: 'error', error: err.message });
  }

  try {
    const result = await generateText({
      model: MODEL,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', image: source.bytes, mediaType: source.mime },
          { type: 'text', text: MINT_PROMPT },
        ],
      }],
    });
    const file = result.files?.find(f => f.mediaType?.startsWith('image/'));
    if (!file) {
      return res.status(200).json({ status: 'error', error: result.text?.slice(0, 200) || 'No image returned' });
    }
    const b64 = file.base64 ?? Buffer.from(file.uint8Array).toString('base64');
    return res.status(200).json({ status: 'done', imageDataUrl: `data:${file.mediaType};base64,${b64}` });
  } catch (err) {
    return res.status(200).json({ status: 'error', error: err.message?.slice(0, 300) || 'AI Gateway error' });
  }
}
