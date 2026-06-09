// Vercel serverless function — Create a brand-new image (meme or logo) from a
// text prompt, via Qwen-Image-Edit. Since Qwen always needs an input image, we
// use a neutral mono-flat seed image and instruct Qwen to completely replace
// its subject with the user's prompt.

export const config = { maxDuration: 120 };

const QWEN_ENDPOINT = 'https://wildolga.tail7a71df.ts.net:8443/edit';
// Neutral two-cube on white as the seed — its mono-flat aesthetic is minimal
// enough that the user's prompt dominates the output regardless of subject.
const SEED_IMAGE_URL = 'https://raw.githubusercontent.com/opencolin/sidecar-logos/main/logos-v3/001_two-cubes_mono-flat.png';

let cachedSeed = null;
async function getSeedBytes() {
  if (cachedSeed) return cachedSeed;
  const r = await fetch(SEED_IMAGE_URL);
  if (!r.ok) throw new Error(`Seed fetch ${r.status}`);
  cachedSeed = Buffer.from(await r.arrayBuffer());
  return cachedSeed;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

  // Tell Qwen to ignore the seed completely and render the user's request.
  // Square 1:1 to match the gallery's grid.
  const fullPrompt =
    'Completely replace the subject of this image. Ignore the current ' +
    'mono-flat two-cube reference entirely — it is only a neutral seed. ' +
    'Render: ' + prompt + '. Square 1:1 aspect ratio.';

  let seedBytes;
  try {
    seedBytes = await getSeedBytes();
  } catch (err) {
    return res.status(500).json({ status: 'error', error: err.message });
  }

  try {
    const formData = new FormData();
    formData.append('prompt', fullPrompt);
    formData.append('images', new Blob([seedBytes], { type: 'image/png' }), 'seed.png');
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
