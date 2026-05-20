// Vercel serverless function — Mint Icon: remove background, return clean transparent PNG.
// Uses Vercel AI Gateway. Returns image as base64 data URL.

import { generateText } from 'ai';

export const config = { maxDuration: 60 };

const MINT_PROMPT = `Remove the background completely, making it fully transparent.
Keep only the sidecar logo graphic — all motorcycle, sidecar, text, and decorative details.
Do NOT add any new background color or fill.
Output a clean PNG with a transparent background suitable for use as an app icon or sticker.
Do not change the colors, style, or design of the sidecar illustration itself.`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { imageUrl } = req.body || {};
  if (!imageUrl) return res.status(400).json({ error: 'Missing imageUrl' });

  let imageBytes, imageMime = 'image/png';
  try {
    if (imageUrl.startsWith('data:')) {
      const [header, b64] = imageUrl.split(',');
      const m = header.match(/data:([^;]+)/);
      if (m) imageMime = m[1];
      imageBytes = Buffer.from(b64, 'base64');
    } else {
      const r = await fetch(imageUrl);
      if (!r.ok) throw new Error(`fetch ${r.status}`);
      imageBytes = Buffer.from(await r.arrayBuffer());
    }
  } catch (err) {
    return res.status(400).json({ status: 'error', error: `Image fetch: ${err.message}` });
  }

  try {
    const result = await generateText({
      model: 'google/gemini-3.1-flash-image-preview',
      messages: [{
        role: 'user',
        content: [
          { type: 'image', image: imageBytes, mediaType: imageMime },
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
