#!/usr/bin/env python3
"""Build prompts-v4.json: 500 ethernet-port variations for Sidecar.

Reference: v3 #146 (rj45-jack × scandi-minimal) was a clean Scandi-minimal
RJ45 plug at the front of a green cable, 'sidecar' wordmark below. The user
loved it. This batch generates 500 variations:
  - 10 ethernet-port sub-themes (different compositions / framings)
  - × 50 visual styles (same style library as v3)
  - = exactly 500

No motorcycles, no wheels. Only text in image is 'sidecar' (lowercase).
"""
import json
from pathlib import Path

OUT = Path(__file__).parent / "prompts-v4.json"

BRAND_NOTES = (
    "Logo for 'sidecar' — a WireGuard relay that gives every Docker container "
    "a real, static public IP. The brand name comes from the cloud-native "
    "sidecar pattern (a helper container alongside the primary container).\n\n"
    "HARD CONSTRAINTS:\n"
    "1. NO motorcycle, NO bicycle, NO wheels. No vehicles of any kind.\n"
    "2. The ONLY text in the image is the word 'sidecar' (lowercase). "
    "No taglines, version numbers, slogans, or domain names.\n"
    "3. The image must clearly feature an Ethernet/RJ45 connector as its "
    "primary visual element.\n"
    "4. Square 1:1 logo on a clean background matching the style."
)

# Ten ethernet-port compositions. Each gets all 50 styles.
SUB_THEMES = [
    ("rj45-front",
     "a single RJ45 ethernet plug viewed head-on, the gold pins visible inside "
     "the clear housing, the clip on top, a thick cable extending behind it. "
     "Clean, centered, the primary mark of the logo."),

    ("rj45-side-cable",
     "an RJ45 ethernet plug shown from a three-quarter angle with the cable "
     "extending out behind it in a graceful curve. The plug is the focal "
     "point, the cable suggests connection."),

    ("rj45-handshake",
     "two RJ45 ethernet plugs facing each other about to connect — handshake "
     "metaphor. Each plug shows its gold pins. A small spark or light flash "
     "may appear between them suggesting connection."),

    ("rj45-plug-socket",
     "an RJ45 plug entering an RJ45 wall socket / keystone jack. The plug is "
     "in motion toward the socket. Status LED on the socket glows."),

    ("rj45-with-cube",
     "an RJ45 plug positioned next to a small isometric cube (the 'sidecar' "
     "container companion). The plug and cube are clearly paired, the "
     "metaphor being a container plugged into a real network port."),

    ("rj45-patch-panel",
     "a row of multiple RJ45 jacks in a server-rack patch panel layout. One "
     "of the jacks is highlighted with a status LED and a single cable plugged in."),

    ("rj45-emerging",
     "a single RJ45 plug emerging from a circular badge / portal at the center "
     "of the logo, cable trailing behind. The badge frames the plug as the hero element."),

    ("rj45-stylized-monogram",
     "an RJ45 plug stylized into the shape of the letter S — the cable forms "
     "the curves of the S, the plug body anchors one end. Geometric, abstract logotype."),

    ("rj45-coiled-cable",
     "a coiled ethernet cable with a single RJ45 plug end visible at the top "
     "of the coil. Tight neat coil, plug pointing toward the viewer."),

    ("rj45-cable-data",
     "an RJ45 plug at the source of a thick ethernet cable with small abstract "
     "data dots / packets traveling along its length toward the right edge. "
     "Conveys the cable as a conduit for traffic."),
]

# Same 50 styles as v3.
STYLES = [
    ("mono-flat", "Flat single-color vector. Pure black on white background. Clean geometric lines. No gradients."),
    ("dark-terminal", "Dark terminal aesthetic. Phosphor green (#00ff66) on near-black. Geist Mono / monospace typography. Subtle CRT scanline texture."),
    ("brutalist-paper", "Brutalist newspaper print. Pure black ink on warm cream/oat-milk paper. Instrument Serif typography. High-contrast slab-cut composition. No gradients."),
    ("aurora-warm", "Warm aurora gradient background (deep purple → magenta → coral) with the mark in cream or white. Polished, marketing-grade."),
    ("editorial-mono", "Refined editorial style. Inter Tight or similar geometric sans. Restrained monochrome palette with one accent color. Generous whitespace."),
    ("neon-pink-cyan", "Neon glow. Hot pink and cyan tube lighting on a deep navy/black background. Slight bloom."),
    ("synthwave", "Synthwave 1985 aesthetic. Magenta/cyan grid horizon. Sunset orb. Chrome reflections."),
    ("vintage-cream", "Vintage cream and burgundy. Aged-paper texture. Letterpress ink weight."),
    ("blueprint-cyan", "Blueprint paper aesthetic. White linework on cyan-blue background. Drafted line weights and measurement ticks."),
    ("isometric-pastel", "Isometric flat illustration with pastel palette: mint, peach, lavender, sky-blue."),
    ("cyberpunk-magenta", "Cyberpunk. Magenta and electric-blue on charcoal. Glitch fragments and chromatic aberration."),
    ("riso-print", "Risograph print look. Two spot colors (fluoro pink + cobalt blue) with paper texture and slight misregistration."),
    ("paper-cut-layered", "Layered paper-cut style in five tones of warm beige with crisp shadows."),
    ("watercolor-soft", "Soft watercolor wash. Indigo and ochre bleeding edges. Visible paper grain."),
    ("ink-sumi", "Sumi-e ink wash. Confident black brushstrokes on washi paper."),
    ("etching-engraved", "Intaglio etching. Fine crosshatched linework. Sepia ink on bone paper."),
    ("retro-orange-brown", "1970s palette: burnt orange, mustard yellow, warm brown, cream."),
    ("retro-pixel", "8-bit pixel art with a restricted NES-style palette."),
    ("y2k-chrome", "Y2K chrome aesthetic. Liquid mercury with rainbow specular highlights on a black gradient."),
    ("memphis-pop", "Memphis design. Black squiggles, mint dots, red triangles, on cream."),
    ("bauhaus-primary", "Bauhaus geometric primaries. Pure red, blue, yellow on white. Strict circle/square/triangle composition."),
    ("art-deco-gold", "Art Deco. Gold linework on deep emerald or navy. Symmetrical fan motifs."),
    ("art-nouveau-vine", "Art Nouveau. Organic curvilinear forms. Olive green and dusty rose."),
    ("swiss-grid", "Swiss International Style. Helvetica-style grotesque. Strict grid alignment. Two-color (red + black)."),
    ("punk-photocopy", "Punk-rock photocopy. High-contrast black and white. Cut-and-paste collage texture."),
    ("zine-collage", "Cut-and-paste zine collage. Layered photocopy fragments and marker accents."),
    ("vaporwave-gradient", "Vaporwave gradient (pink → cyan → purple). Marble columns optional. Soft glow."),
    ("matrix-green", "Matrix code-rain aesthetic. Cascading green characters on black."),
    ("graph-paper", "Engineering graph paper background with pencil sketch overlay."),
    ("holographic", "Holographic iridescent foil with prismatic shimmer on soft gray."),
    ("chrome-3d-render", "Cinematic 3D render. Chrome surfaces. Three-point studio lighting."),
    ("clay-3d-render", "Clay 3D render. Matte off-white material. Soft sunlight rim light."),
    ("photoreal-product", "Photorealistic studio product photograph of the subject on a seamless backdrop."),
    ("flat-duotone-mint", "Duotone flat illustration. Mint green and deep navy only. No gradients."),
    ("flat-duotone-coral", "Duotone flat illustration. Coral and forest-green only. No gradients."),
    ("flat-duotone-yellow", "Duotone flat illustration. Mustard yellow and aubergine purple only."),
    ("minimal-line", "Single-stroke 2px line illustration. Black on white. No fills."),
    ("minimal-line-thick", "Chunky 8px round-cap line illustration. Black on white."),
    ("scrappy-handdrawn", "Hand-drawn marker illustration with slightly wobbly lines on white. Friendly, indie."),
    ("crayon", "Crayon-on-paper texture. Slightly waxy strokes. Childlike but adult composition."),
    ("embroidery", "Embroidered patch look. Visible stitch texture. Cream felt with navy and red thread."),
    ("denim-patch", "Denim back-patch. Indigo denim ground with chain-stitch outlines."),
    ("graffiti-spray", "Spray-paint graffiti with paint drips. Cobalt and white on concrete wall texture."),
    ("postage-vintage", "Vintage postage stamp design with serrated edges and faded ink."),
    ("mid-century", "Mid-century modern. Olive, mustard, teal, brick. Atomic-age curves."),
    ("scandi-minimal", "Scandinavian minimalism. Off-white background. Soft sage and clay-red accents."),
    ("japanese-modern", "Modern Japanese poster style. Vermilion + ink black + bone. Asymmetric composition."),
    ("mexican-folk", "Mexican folk art otomi-inspired. Saturated fuchsia, turquoise, marigold."),
    ("nordic-runic", "Nordic runic carving aesthetic. Slate gray stone with chiseled bone-white linework."),
    ("typewriter-mono", "Typewriter aesthetic. Courier monospace. Ink-on-paper imperfection. Sepia tones."),
]

assert len(SUB_THEMES) * len(STYLES) == 500, f"got {len(SUB_THEMES)*len(STYLES)} combos"

prompts = []
for theme_slug, theme_text in SUB_THEMES:
    for style_slug, style_text in STYLES:
        n = len(prompts) + 1
        full = (
            f"{BRAND_NOTES}\n\n"
            f"Subject: {theme_text}\n\n"
            f"Style: {style_text}\n\n"
            f"Centered balanced logo composition. The word 'sidecar' "
            f"(lowercase only) appears in the typography appropriate to the style."
        )
        prompts.append({
            "id": n,
            "slug": f"{n:03d}_{theme_slug}_{style_slug}",
            "theme": theme_slug,
            "style": style_slug,
            "prompt": full,
        })

OUT.write_text(json.dumps(prompts, indent=2))
print(f"Wrote {len(prompts)} prompts to {OUT}")
print(f"Sub-themes: {len(SUB_THEMES)}, Styles: {len(STYLES)}")
