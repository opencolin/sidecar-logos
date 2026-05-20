# Sidecar Logos

A collection of 472 unique sidecar logo designs for the **Sidecar** startup, plus a voting site to pick the favorite.

Each logo is a style-matched companion to one of the 472 castle logos in [opencolin/365-castle-logos](https://github.com/opencolin/365-castle-logos) — same style families, same numbering, motorcycle-with-sidecar in place of the castle.

## Layout

| Path | What |
|------|------|
| `logos/` | 472 PNG logos (1024×1024) — filenames mirror the castle source |
| `site/` | The voting site — Vercel-deployable static + serverless |
| `gen/` | The img2img generator script that produced the logos |

## Voting Site

Lives at `site/`. A static gallery with vote, search, sort, AI-edit, AI-create, and "mint as transparent PNG" features. Runs as a Vercel project with serverless functions powered by the Vercel AI Gateway.

### Local dev

```bash
cd site
npm install
vercel dev
```

### Deploy

```bash
cd site
vercel --prod
```

Requires the Vercel project to have the AI Gateway enabled (OIDC handles auth automatically — no Gemini API key needed).

## Regenerating Logos

```bash
cd gen
npm install
vercel link            # connects to a Vercel project for OIDC
vercel env pull .env.local
npx tsx generate.ts castle_001_minimalist_black_white.png castle_002_...
```

The script accepts castle filenames and writes matching `sidecar_*.png` files into `../logos/`. Existing files are skipped, so it's safe to re-run.

## License

Free to use for any purpose.
