import 'dotenv/config';
import { generateText } from 'ai';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const REPO_ROOT = join(import.meta.dirname, '..');
const PROMPTS_FILE = join(import.meta.dirname, 'prompts-v2.json');
const OUTPUT_DIR = join(REPO_ROOT, 'logos-v2');
const MODEL = 'google/gemini-3.1-flash-image-preview';

interface PromptEntry {
  id: number;
  slug: string;
  theme: string;
  style: string;
  prompt: string;
}

async function generateOne(entry: PromptEntry): Promise<'done' | 'skip' | 'error'> {
  const outputPath = join(OUTPUT_DIR, `${entry.slug}.png`);
  if (existsSync(outputPath)) {
    console.log(`[skip] ${entry.slug}`);
    return 'skip';
  }

  console.log(`[gen]  ${entry.slug}`);
  try {
    const result = await generateText({
      model: MODEL,
      messages: [
        { role: 'user', content: [{ type: 'text', text: entry.prompt }] },
      ],
    });

    const imageFile = result.files?.find((f) => f.mediaType?.startsWith('image/'));
    if (!imageFile) {
      console.error(`[fail] ${entry.slug}: no image. Text: ${result.text?.slice(0, 120)}`);
      return 'error';
    }

    const bytes = imageFile.uint8Array ?? Buffer.from(imageFile.base64, 'base64');
    await writeFile(outputPath, bytes);
    console.log(`[done] ${entry.slug} (${bytes.length} bytes)`);
    return 'done';
  } catch (err) {
    console.error(`[error] ${entry.slug}:`, err instanceof Error ? err.message : err);
    return 'error';
  }
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const raw = await readFile(PROMPTS_FILE, 'utf8');
  const allPrompts: PromptEntry[] = JSON.parse(raw);

  const args = process.argv.slice(2);
  let prompts = allPrompts;
  if (args.length > 0) {
    if (args[0].includes('-')) {
      const [lo, hi] = args[0].split('-').map(Number);
      prompts = allPrompts.filter((p) => p.id >= lo && p.id <= hi);
    } else {
      const ids = new Set(args.map(Number));
      prompts = allPrompts.filter((p) => ids.has(p.id));
    }
  }

  console.log(`Generating ${prompts.length} prompts (${prompts[0]?.id}..${prompts[prompts.length - 1]?.id})`);

  const concurrency = Number(process.env.CONCURRENCY ?? 10);
  let cursor = 0;
  const stats = { done: 0, skip: 0, error: 0 };

  await Promise.all(
    Array.from({ length: Math.min(concurrency, prompts.length) }, async () => {
      while (cursor < prompts.length) {
        const p = prompts[cursor++];
        const r = await generateOne(p);
        stats[r]++;
      }
    }),
  );

  console.log(`\nSummary: done=${stats.done} skip=${stats.skip} error=${stats.error}`);
}

main();
