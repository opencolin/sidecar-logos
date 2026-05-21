#!/usr/bin/env python3
"""Build prompts-v2.json: 500 on-brand Sidecar logo prompts.

Sidecar = WireGuard relay that gives every Docker container a real, static
public IP. Tagline: "Every container, addressable." Developer-first, technical,
irreverent. Visual brand spans:
  - V1 dark terminal, green on black, Geist Mono
  - V2 brutalist newspaper, black on cream, Instrument Serif
  - V3 warm marketing with aurora gradient animation
  - V4 refined editorial, Inter Tight, IPv6-native framing
"""
import json
from pathlib import Path

OUT = Path(__file__).parent / "prompts-v2.json"

BRAND_NOTES = (
    "Logo for 'sidecar' — a WireGuard relay that assigns real static public IP "
    "addresses to Docker containers (every container, addressable). "
    "Developer-first, technical, irreverent. "
    "The only text in the image is the word 'sidecar' in lowercase "
    "(no taglines, no version numbers, no extra strings). "
    "Square 1:1 logo on a clean background that matches the chosen style."
)

# Theme phrases — each describes the visual subject.
# Each is paired with its short slug for filenames.
THEMES = [
    ("bike-classic",
     "vintage motorcycle with attached single-wheel sidecar carriage, side view"),
    ("bike-modern",
     "modern sport motorcycle with low-slung futuristic sidecar pod, side view"),
    ("bike-scooter",
     "Vespa-style scooter pulling a small sidecar, side view"),
    ("bike-cafe-racer",
     "cafe racer motorcycle with minimalist sidecar, side view"),
    ("bike-cruiser",
     "American cruiser motorcycle with chrome sidecar, side view"),
    ("bike-russian",
     "Ural-style military motorcycle with utilitarian sidecar, side view"),
    ("bike-iso",
     "isometric motorcycle with sidecar at a 30-degree angle"),
    ("bike-front",
     "front-on view of motorcycle with sidecar, two-lamp headlights"),
    ("bike-rear",
     "rear three-quarter view of motorcycle pulling its sidecar away"),
    ("bike-silhouette",
     "pure silhouette of motorcycle-with-sidecar, no internal detail"),

    ("docker-bike",
     "motorcycle whose sidecar is a shipping container (Docker container metaphor), side view"),
    ("docker-bike-stacked",
     "motorcycle pulling a stack of small shipping containers riding on a sidecar chassis"),
    ("docker-whale-bike",
     "the Docker whale wearing a leather jacket riding a motorcycle with sidecar"),
    ("docker-whale-sidecar",
     "the Docker whale character sitting inside a motorcycle's sidecar, helmet on"),
    ("docker-cube-bike",
     "blue Docker-style cube container traveling in the sidecar carriage of a motorcycle"),

    ("ip-tag",
     "a luggage-tag-style IP address label '203.0.113.42' dangling from a motorcycle handlebar"),
    ("ip-license",
     "motorcycle sidecar with a license plate that reads '203.0.113.42'"),
    ("ipv6-license",
     "motorcycle sidecar with a license plate showing an IPv6 address like '2001:db8::1'"),
    ("ip-balloon",
     "a motorcycle sidecar carrying a balloon-shaped IP address tag floating above it"),
    ("ip-flag",
     "motorcycle with sidecar flying a small flag stamped with an IP address"),

    ("tunnel-pipe",
     "abstract curving WireGuard tunnel with a motorcycle and sidecar driving through it"),
    ("tunnel-wormhole",
     "a wormhole / portal with a motorcycle-and-sidecar emerging from it"),
    ("tunnel-pipes",
     "geometric pipe network with a motorcycle delivering packets through them"),
    ("tunnel-route",
     "abstract dotted route line between two points with a sidecar bike traveling along"),

    ("network-graph",
     "a network topology graph (nodes and edges) with a motorcycle-with-sidecar at the center"),
    ("network-mesh",
     "honeycomb mesh network pattern with a single sidecar icon at its core"),
    ("network-radar",
     "radar sweep dial with a motorcycle-with-sidecar at the origin and pings on the perimeter"),

    ("globe-bike",
     "a stylized globe with a motorcycle-and-sidecar wrapping around its equator"),
    ("globe-pins",
     "globe with five region pins (NYC, FRA, SIN, etc.) and a motorcycle-with-sidecar above"),
    ("globe-orbit",
     "motorcycle-with-sidecar orbiting a small planet earth"),
    ("globe-flat-map",
     "flat world map with a motorcycle-with-sidecar overlay and 5 region dots"),

    ("padlock-bike",
     "a padlock whose shackle is shaped like a motorcycle with sidecar"),
    ("shield-bike",
     "shield emblem with a motorcycle-and-sidecar silhouette inside"),
    ("key-bike",
     "an ornate key whose teeth form a motorcycle-with-sidecar profile"),

    ("terminal-window",
     "macOS terminal window showing a green '$ sidecar.enable=true' prompt with a tiny ASCII motorcycle"),
    ("terminal-ascii",
     "ASCII-art motorcycle-with-sidecar rendered in green monospace on black"),
    ("terminal-cursor",
     "blinking terminal cursor next to the word 'sidecar' on a black background"),
    ("yaml-snippet",
     "a Docker compose YAML snippet with the highlighted line 'sidecar.enable: true'"),
    ("cli-prompt",
     "minimal '$ sidecar' terminal prompt rendered as a logo, no other text"),

    ("monogram-s",
     "monogram letter S styled as a serpentine motorcycle exhaust pipe"),
    ("monogram-s-shield",
     "letter S inscribed inside a shield, with two tiny wheels at the bottom suggesting a sidecar"),

    ("hexagon-logo",
     "hexagonal badge with a clean motorcycle-with-sidecar mark inside"),
    ("circle-logo",
     "circular badge with the motorcycle-with-sidecar mark and the word 'sidecar' arched around"),
    ("square-logo",
     "square app icon mark with rounded corners and motorcycle-with-sidecar inside"),

    ("container-wheels",
     "shipping container with motorcycle wheels added underneath, treating the container as the sidecar body"),
    ("cargo-bike",
     "cargo bike where the front cargo box is a Docker container, side view"),
    ("delivery-truck",
     "small delivery van with a motorcycle's sidecar profile, side view"),

    ("packet-flow",
     "abstract data packets flowing along a curved path forming the silhouette of a motorcycle"),
    ("data-stream",
     "stream of binary 1s and 0s composing the shape of a motorcycle-with-sidecar"),
    ("ones-zeros",
     "the words 'sidecar' built out of tiny 1s and 0s in a monospace grid"),

    ("highway-icon",
     "stylized highway shield (US-Route style) with a motorcycle-and-sidecar in place of the number"),
    ("route-marker",
     "European-style route marker sign with a small motorcycle-with-sidecar pictogram"),

    ("stamp-passport",
     "passport entry stamp rubber-stamped with a motorcycle-with-sidecar icon"),
    ("wax-seal",
     "deep red wax seal embossed with a motorcycle-with-sidecar"),

    ("patch-embroidered",
     "embroidered patch (motorcycle club style) with a sidecar motif"),
    ("decal-sticker",
     "die-cut vinyl decal of a motorcycle-with-sidecar with white border"),

    ("antenna-bike",
     "motorcycle-with-sidecar with a tall radio antenna sending wireless signal arcs"),
    ("beacon",
     "lighthouse beacon broadcasting concentric arcs, with a motorcycle-with-sidecar at its base"),
    ("plug-socket",
     "an Ethernet RJ45 plug and socket forming the silhouette of a motorcycle-with-sidecar"),

    ("origami",
     "origami paper folded into a motorcycle-with-sidecar shape"),
    ("paper-cut",
     "layered paper-cut illustration of a motorcycle-with-sidecar"),

    ("pixel-art",
     "8-bit pixel art motorcycle-with-sidecar"),
    ("vector-flat",
     "ultra-flat vector motorcycle-with-sidecar, no shading, single fill color"),
    ("line-art",
     "single-line continuous line drawing of a motorcycle-with-sidecar"),
    ("blueprint",
     "engineering blueprint of a motorcycle-with-sidecar, white linework on blue paper"),
    ("schematic",
     "schematic-style technical diagram of a motorcycle-with-sidecar with measurement callouts"),

    ("low-poly",
     "low-poly geometric motorcycle-with-sidecar, faceted triangles"),
    ("3d-render",
     "stylized 3D render of a motorcycle-with-sidecar, clay material, studio lighting"),
    ("chrome-3d",
     "chrome 3D motorcycle-with-sidecar on a reflective surface"),
    ("metallic-3d",
     "brushed-steel 3D motorcycle-with-sidecar"),

    ("graffiti",
     "spray-paint graffiti of the word 'sidecar' with a small motorcycle stencil"),
    ("stencil",
     "single-color spray-paint stencil of a motorcycle-with-sidecar"),

    ("retro-80s",
     "retro 1980s synthwave motorcycle-with-sidecar on a grid horizon"),
    ("retro-70s",
     "1970s muscle-car aesthetic motorcycle-with-sidecar, burnt orange and brown"),
    ("retro-90s",
     "1990s skater zine cut-and-paste collage motorcycle-with-sidecar"),
    ("retro-50s",
     "1950s diner sign motorcycle-with-sidecar in neon outline"),

    ("hand-drawn",
     "hand-drawn cartoon motorcycle-with-sidecar, slightly wobbly lines"),
    ("watercolor",
     "soft watercolor motorcycle-with-sidecar with bleeding edges"),
    ("ink-wash",
     "Japanese ink-wash motorcycle-with-sidecar, sumi-e style"),
    ("charcoal",
     "charcoal sketch motorcycle-with-sidecar with smudge marks"),

    ("aurora-bike",
     "motorcycle-with-sidecar silhouetted against an aurora-gradient background (purple→pink→orange)"),
    ("aurora-mono",
     "monochrome motorcycle-with-sidecar on a soft aurora-lit horizon"),

    ("brutalist-poster",
     "brutalist Swiss poster of the word 'sidecar' set in giant serif, with a small motorcycle mark"),
    ("brutalist-newspaper",
     "brutalist newspaper layout with the word 'sidecar' as a headline above a small motorcycle illustration"),

    ("editorial-clean",
     "refined editorial logo: 'sidecar' in elegant sans-serif with a tiny precise motorcycle pictogram"),
    ("editorial-serif",
     "refined editorial logo: 'sidecar' in a high-contrast serif typeface, no other decoration"),

    ("neon-tube",
     "neon tube sign motorcycle-with-sidecar glowing pink and cyan against dark brick"),
    ("neon-electric",
     "electric-blue neon outline motorcycle-with-sidecar on black"),

    ("dot-matrix",
     "dot-matrix-printer style motorcycle-with-sidecar"),
    ("halftone",
     "halftone-dotted comic-book motorcycle-with-sidecar"),

    ("crest",
     "old-world crest with two motorcycles flanking a sidecar carriage, banner across reading 'sidecar'"),
    ("emblem",
     "circular automotive-style emblem with a motorcycle-with-sidecar in the center"),
    ("club-badge",
     "motorcycle-club back-patch design with a sidecar at the center"),

    ("topology-tree",
     "tree-of-nodes diagram with each leaf being a tiny container icon and the trunk a motorcycle-with-sidecar"),
    ("topology-star",
     "star topology diagram with a motorcycle-with-sidecar at the hub"),
    ("topology-ring",
     "ring topology diagram with a motorcycle-with-sidecar at the top of the ring"),

    ("constellation",
     "constellation of stars forming the outline of a motorcycle-with-sidecar"),
    ("star-trail",
     "long-exposure star-trail spiral with a motorcycle-with-sidecar at the bottom"),

    ("sidecar-icon-only",
     "ONLY the sidecar carriage (without the motorcycle), styled as a clean badge"),
    ("sidecar-empty",
     "an empty motorcycle sidecar with a question mark above where a passenger would sit"),
    ("sidecar-cargo",
     "a motorcycle sidecar loaded with stacked boxes labeled with IP addresses"),

    ("road-trip",
     "long winding road from foreground to horizon with a motorcycle-and-sidecar on it"),
    ("city-skyline",
     "city skyline backdrop with a motorcycle-with-sidecar in the foreground"),
    ("mountain",
     "mountain pass scene with a motorcycle-with-sidecar driving up the switchbacks"),

    ("postage-stamp",
     "vintage postage stamp featuring a motorcycle-with-sidecar illustration and 'sidecar' as the country name"),
    ("currency-note",
     "fragment of a currency note design featuring a motorcycle-with-sidecar engraving"),
    ("etching",
     "fine intaglio engraving style motorcycle-with-sidecar"),

    ("typography-only",
     "pure typography logo: the word 'sidecar' set in a custom logotype, no illustration"),
    ("ligature",
     "the word 'sidecar' with a custom ligature where 'd' and 'c' merge into a small wheel"),
    ("split-color-text",
     "the word 'sidecar' split horizontally into two contrasting colors"),
    ("outline-text",
     "the word 'sidecar' as a hollow outline, no fill, set in geometric sans"),
    ("3d-text",
     "the word 'sidecar' rendered as chunky 3D extruded lettering"),

    ("brand-icon-tag",
     "the word 'sidecar' on a luggage tag attached to a motorcycle handlebar"),
    ("sticker-pack",
     "a pile of overlapping stickers, each a sidecar variant, captured as a single mark"),

    ("data-center",
     "a row of server-rack containers shaped like sidecar carriages"),
    ("server-rack",
     "stylized server rack where one of the rack units has been replaced with a motorcycle sidecar"),

    ("packet-envelope",
     "a paper envelope being delivered by a motorcycle-with-sidecar, the envelope labeled 'packet'"),
    ("mailbag",
     "motorcycle-with-sidecar overflowing with packet-shaped letters"),

    ("compass-bike",
     "old-world compass rose with a motorcycle-with-sidecar in the center pointing toward N"),
    ("anchor-bike",
     "nautical anchor where the crossbar is a motorcycle and the stock is a sidecar"),

    ("speedometer",
     "vintage speedometer dial with a motorcycle-with-sidecar in the center"),
    ("tachometer",
     "tachometer gauge with 'sidecar' as the dial label and a small motorcycle pointer"),

    ("typographic-sidecar",
     "the word 'sidecar' where the 'i' is a tiny motorcycle and the 'd' wheel becomes the sidecar wheel"),
    ("hidden-bike",
     "an abstract mark that on closer look reveals a motorcycle-with-sidecar in its negative space"),
    ("negative-space",
     "a single solid shape whose negative space carves out a motorcycle-with-sidecar"),

    ("origin-marker",
     "a glowing origin point with concentric rings, a small motorcycle-with-sidecar at the center"),
    ("ping-marker",
     "a stylized ping circle expanding outward from a sidecar bike icon"),

    ("speed-lines",
     "motorcycle-with-sidecar leaving dynamic speed lines behind it"),
    ("burnout",
     "motorcycle-with-sidecar with tire-smoke burnout effect"),

    ("art-deco",
     "art deco motorcycle-with-sidecar in symmetrical geometric forms"),
    ("art-nouveau",
     "art nouveau motorcycle-with-sidecar with organic vine flourishes"),
    ("bauhaus",
     "Bauhaus geometric primaries motorcycle-with-sidecar"),
    ("memphis",
     "Memphis design motorcycle-with-sidecar with squiggles and dots"),
    ("vaporwave",
     "vaporwave aesthetic motorcycle-with-sidecar with palm trees and a sunset grid"),

    ("matrix-rain",
     "matrix-rain green code falling behind a motorcycle-with-sidecar silhouette"),
    ("circuit-board",
     "motorcycle-with-sidecar built out of PCB traces and components"),

    ("rubber-stamp",
     "rubber stamp imprint of a motorcycle-with-sidecar, ink slightly smudged"),
    ("logo-mark-mono",
     "ultra-minimal one-color logo mark of a motorcycle-with-sidecar, suitable for embossing"),

    ("favicon-style",
     "tight favicon-style square logo of a motorcycle-with-sidecar, optimized for 32x32 legibility"),

    ("character-mascot",
     "friendly cartoon mascot motorcycle-with-sidecar character with eyes and a smile"),
    ("mascot-wave",
     "friendly mascot motorcycle-with-sidecar waving hello"),

    ("retro-arcade",
     "1980s arcade game pixel motorcycle-with-sidecar on a scanline CRT background"),
    ("game-boy",
     "Game Boy four-shade green motorcycle-with-sidecar pixel art"),

    ("medieval-shield",
     "medieval coat-of-arms shield with a motorcycle-with-sidecar in heraldic style"),
    ("heraldic",
     "heraldic crest with crossed wrenches and a sidecar at center"),

    ("anatomy-callouts",
     "exploded anatomical diagram of a motorcycle-with-sidecar with labeled parts (in tasteful greeking, not real letters)"),
    ("xray",
     "x-ray view of a motorcycle-with-sidecar revealing inner mechanical detail"),

    ("japanese-poster",
     "Japanese 1970s motorcycle racing poster with sidecar and bold kanji-style brushwork (but no real kanji)"),
    ("italian-poster",
     "Italian futurist-style motorcycle-with-sidecar poster"),

    ("racing-team",
     "racing team graphic: motorcycle-with-sidecar with bold racing stripes and a number plate"),
    ("rally-livery",
     "rally-livery motorcycle-with-sidecar plastered with sponsor decals (all decals greeking, not real text)"),

    ("polaroid",
     "Polaroid photo frame showing a faded image of a motorcycle-with-sidecar"),
    ("instant-camera",
     "instant-camera-style snapshot of a motorcycle-with-sidecar from above"),

    ("bento-grid",
     "a bento-grid layout where one cell is a motorcycle-with-sidecar and another is the word 'sidecar'"),
    ("magazine-cover",
     "magazine cover layout with the word 'sidecar' as the masthead and a motorcycle-with-sidecar photo below"),

    ("zine-cover",
     "DIY zine cover with cut-paper motorcycle-with-sidecar and stark photocopy aesthetic"),
    ("punk-poster",
     "1970s punk-rock gig poster motorcycle-with-sidecar in ransom-note typography"),

    ("infrastructure-icon",
     "minimal infrastructure-as-code style icon: a rectangle (container) attached to a smaller rectangle (sidecar)"),
    ("k8s-style",
     "Kubernetes-inspired hexagonal icon with a motorcycle-with-sidecar inside"),

    ("dns-tree",
     "DNS hierarchical tree with the root being a motorcycle-with-sidecar"),
    ("router-flow",
     "router box with antennae and a motorcycle-with-sidecar leaving from one port"),

    ("ipv4-puzzle",
     "puzzle pieces forming a motorcycle-with-sidecar, with one piece labeled '203.0.113.42'"),
    ("ipv6-flow",
     "an IPv6 address string flowing diagonally with a motorcycle-with-sidecar surfing it"),

    ("quantum-shield",
     "post-quantum encryption shield with a motorcycle-with-sidecar inside"),
    ("lattice",
     "abstract lattice/cryptography lattice pattern with a small motorcycle-with-sidecar at center"),

    ("regions-five",
     "five small motorcycle-with-sidecar icons arranged around a center dot, representing 5 regions"),
    ("globe-mesh",
     "wireframe globe mesh with a motorcycle-with-sidecar circling it"),

    ("fade-in-out",
     "motorcycle-with-sidecar fading in/out as a metaphor for ephemeral container lifecycles"),
    ("container-orchestra",
     "a conductor with a motorcycle-with-sidecar baton in front of a Docker-container orchestra"),

    ("portal-icon",
     "round portal/gateway icon with a tiny motorcycle-with-sidecar emerging"),
    ("flap-board",
     "split-flap mechanical display showing the word 'SIDECAR' mid-flip"),
    ("dot-display",
     "old-school LED dot-matrix train station sign showing 'SIDECAR' in amber"),
]

# Visual treatments (style + color combo).
# Each is a paragraph that gets appended to the theme.
STYLES = [
    ("mono-flat",
     "Flat single-color vector. Pure black on white background. Clean geometric lines. No gradients, no shadows."),
    ("dark-terminal",
     "Dark terminal aesthetic. Phosphor green (#00ff66) on near-black background. Geist Mono / monospace style typography. Subtle CRT scanline texture okay."),
    ("brutalist-paper",
     "Brutalist newspaper print. Pure black ink on warm cream/oat-milk paper. Instrument Serif typography. High-contrast, slab-cut composition, no gradients."),
    ("aurora-warm",
     "Warm aurora gradient background (deep purple → magenta → coral), with the mark in soft cream or white. Polished, marketing-grade."),
    ("editorial-mono",
     "Refined editorial style. Inter Tight or similar geometric sans. Restrained monochrome palette (one accent color max). Generous whitespace."),
    ("neon-pink-cyan",
     "Neon glow. Hot pink and cyan tube lighting on a deep navy/black background. Slight bloom."),
    ("synthwave",
     "Synthwave 1985: magenta/cyan grid horizon, sunset orb behind, soft chrome reflections."),
    ("vintage-cream",
     "Vintage cream and burgundy. Aged-paper texture. Letterpress-style ink weight."),
    ("blueprint-cyan",
     "Blueprint paper aesthetic. White linework on cyan-blue background. Drafted line weights and measurement ticks."),
    ("isometric-pastel",
     "Isometric flat illustration. Pastel palette (mint, peach, lavender, sky)."),
    ("cyberpunk-magenta",
     "Cyberpunk. Magenta and electric-blue palette on charcoal. Glitch fragments and chromatic aberration."),
    ("riso-print",
     "Risograph print look. Two-spot-color (fluoro pink + cobalt blue) with paper texture and slight misregistration."),
    ("paper-cut-layered",
     "Layered paper-cut style. Five tones of warm beige with crisp shadows between layers."),
    ("watercolor-soft",
     "Soft watercolor wash. Indigo and ochre bleeding edges. Visible paper grain."),
    ("ink-sumi",
     "Sumi-e ink wash. Black brushstrokes on washi paper. Confident gestural lines."),
    ("etching-engraved",
     "Intaglio etching. Fine crosshatched linework. Sepia ink on bone-colored paper."),
    ("retro-orange-brown",
     "1970s palette: burnt orange, mustard yellow, warm brown, cream."),
    ("retro-pixel",
     "8-bit pixel art. 4-color CGA palette (black/white/cyan/magenta) or NES-style restricted palette."),
    ("y2k-chrome",
     "Y2K chrome aesthetic. Liquid-mercury chrome with rainbow specular highlights on a black gradient."),
    ("memphis-pop",
     "Memphis design. Black squiggles, mint dots, red triangles, on cream background."),
    ("bauhaus-primary",
     "Bauhaus geometric primaries. Pure red, blue, yellow on white. Strict circle/square/triangle composition."),
    ("art-deco-gold",
     "Art Deco. Gold linework on deep emerald or navy. Symmetrical fan motifs."),
    ("art-nouveau-vine",
     "Art Nouveau. Organic curvilinear forms. Olive green and dusty rose palette."),
    ("swiss-grid",
     "Swiss International Style. Helvetica-style grotesque type. Strict grid alignment. Two-color (red + black)."),
    ("punk-photocopy",
     "Punk-rock photocopy. High-contrast black and white. Cut-and-paste collage texture."),
    ("zine-collage",
     "Cut-and-paste zine collage. Layered photocopy fragments and hand-written marker accents."),
    ("vaporwave-gradient",
     "Vaporwave gradient (pink → cyan → purple). Marble columns and palm silhouettes optional. Soft glow."),
    ("matrix-green",
     "Matrix code-rain aesthetic. Cascading green characters on black. Geist Mono."),
    ("graph-paper",
     "Engineering graph paper background, pencil sketch overlay."),
    ("holographic",
     "Holographic iridescent foil with prismatic pink/teal/lavender shimmer on a soft gray base."),
    ("chrome-3d-render",
     "Cinematic 3D render. Chrome motorcycle parts. Soft three-point studio lighting on a neutral seamless backdrop."),
    ("clay-3d-render",
     "Clay 3D render. Matte off-white material. Soft sunlight rim light."),
    ("photoreal-bike",
     "Photorealistic studio photograph of a metal model of the subject, on a seamless background."),
    ("flat-duotone-mint",
     "Duotone flat illustration. Mint green and deep navy only. No gradients."),
    ("flat-duotone-coral",
     "Duotone flat illustration. Coral and forest-green only. No gradients."),
    ("flat-duotone-yellow",
     "Duotone flat illustration. Mustard yellow and aubergine purple only."),
    ("minimal-line",
     "Single-stroke line illustration. 2px black lines on white. No fills."),
    ("minimal-line-thick",
     "Thick chunky line illustration. 8px round-cap black lines on white."),
    ("scrappy-handdrawn",
     "Hand-drawn marker illustration with slightly wobbly lines on white. Friendly, imperfect, indie."),
    ("crayon",
     "Crayon-on-paper texture. Slightly waxy strokes. Toddler-art energy but executed with adult composition."),
    ("embroidery",
     "Embroidered patch look. Visible stitch texture. Cream felt background, navy and red thread."),
    ("denim-patch",
     "Denim jacket back-patch. Indigo denim ground with chain-stitch outlines."),
    ("graffiti-spray",
     "Spray-paint graffiti with paint drips. Cobalt and white on a concrete wall texture."),
    ("postage-vintage",
     "Vintage postage stamp design with serrated edges and faded ink."),
    ("mid-century",
     "Mid-century modern. Olive, mustard, teal, brick. Atomic-age curves."),
    ("scandi-minimal",
     "Scandinavian minimalism. Off-white background. Soft sage and clay-red accents."),
    ("japanese-modern",
     "Modern Japanese poster style. Restrained palette (vermilion + ink black + bone). Clean asymmetric composition."),
    ("mexican-folk",
     "Mexican folk art (otomi-inspired). Rich saturated palette of fuchsia, turquoise, marigold."),
    ("nordic-runic",
     "Nordic runic carving aesthetic. Slate gray stone texture with chiseled bone-white linework."),
    ("typewriter-mono",
     "Typewriter aesthetic. Smith Corona / Courier monospace. Ink-on-paper imperfection. Sepia tones."),
]

# Build the cross matrix carefully so we get exactly 500.
# 150 themes × deterministic style picks per theme.
# Each theme gets approx ceil(500/len(THEMES)) styles, picked round-robin to keep style spread even.

prompts = []
style_idx = 0
seen = set()

# Each theme generates multiple style variants. Loop over the matrix until we have 500.
limit = 500
i = 0
while len(prompts) < limit:
    theme_slug, theme_text = THEMES[i % len(THEMES)]
    style_slug, style_text = STYLES[style_idx % len(STYLES)]
    style_idx += 1
    i += 1

    key = (theme_slug, style_slug)
    if key in seen:
        continue
    seen.add(key)

    full = (
        f"{BRAND_NOTES}\n\n"
        f"Subject: {theme_text}.\n\n"
        f"Style: {style_text}\n\n"
        f"Final composition is a centered, balanced logo mark. "
        f"The single word 'sidecar' (lowercase) appears in the typography matching the style. "
        f"No other text, no taglines, no version numbers."
    )

    n = len(prompts) + 1
    prompts.append({
        "id": n,
        "slug": f"{n:03d}_{theme_slug}_{style_slug}",
        "theme": theme_slug,
        "style": style_slug,
        "prompt": full,
    })

assert len(prompts) == limit, f"got {len(prompts)} prompts, wanted {limit}"

OUT.write_text(json.dumps(prompts, indent=2))
print(f"Wrote {len(prompts)} prompts to {OUT}")
print(f"Unique themes used: {len({p['theme'] for p in prompts})}/{len(THEMES)}")
print(f"Unique styles used: {len({p['style'] for p in prompts})}/{len(STYLES)}")
