// Vercel serverless function — Mint Icon via Qwen-Image-Edit.
// Removes background from a logo, returns transparent PNG as base64 data URL.

export const config = { maxDuration: 120 };

const QWEN_ENDPOINT = 'https://wildolga.tail7a71df.ts.net:8443/edit';

const MINT_PROMPT =
  'Remove the background completely, make it fully transparent. ' +
  'Keep only the sidecar logo graphic — every line, color, and shape of ' +
  'the foreground stays intact. Do not change colors or composition. ' +
  'Do not add a new background. Output: clean PNG with transparent background.';

async function fetchSourceBytes(url) {
  if (url.startsWith('data:')) {
    const [, b64] = url.split(',');
    return Buffer.from(b64, 'base64');
  }
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Source fetch ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { imageUrl } = req.body || {};
  if (!imageUrl) return res.status(400).json({ error: 'Missing imageUrl' });

  let sourceBytes;
  try {
    sourceBytes = await fetchSourceBytes(imageUrl);
  } catch (err) {
    return res.status(400).json({ status: 'error', error: err.message });
  }

  try {
    const formData = new FormData();
    formData.append('prompt', MINT_PROMPT);
    formData.append('images', new Blob([sourceBytes], { type: 'image/png' }), 'source.png');
    const qwen = await fetch(QWEN_ENDPOINT, { method: 'POST', body: formData });
    if (!qwen.ok) {
      const text = (await qwen.text()).slice(0, 200);
      return res.status(200).json({ status: 'error', error: `Qwen ${qwen.status}: ${text}` });
    }
    const pngBytes = Buffer.from(await qwen.arrayBuffer());
    const b64 = pngBytes.toString('base64');
    return res.status(200).json({ status: 'done', imageDataUrl: `data:image/png;base64,${b64}` });
  } catch (err) {
    return res.status(200).json({ status: 'error', error: err.message?.slice(0, 300) || 'Qwen request failed' });
  }
}
