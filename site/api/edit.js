// Vercel serverless function — AI edit a sidecar logo via Vercel AI Gateway.
// Auth uses OIDC token automatically provisioned by Vercel.
// Returns the generated image as a base64 data URL. No Supabase persistence.

import { generateText } from 'ai';

export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt, imageUrl } = req.body || {};
  if (!prompt || !imageUrl) {
    return res.status(400).json({ error: 'Missing prompt or imageUrl' });
  }

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
          { type: 'text', text: prompt },
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
