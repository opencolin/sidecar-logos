#!/usr/bin/env python3
"""Build prompts-v3.json: 500 Sidecar logo prompts with NO motorcycles.

The brand name 'sidecar' here refers to the cloud-native sidecar pattern:
a helper container running alongside a primary container. Product gives
every Docker container a real static public IP via WireGuard.

Visual metaphors used (none involve motorcycles, bikes, or wheels):
  - Two boxes/containers side-by-side (the sidecar pattern itself)
  - Docker container as cube/box
  - IP address labels / license-plate-style tags / luggage tags (no bike)
  - WireGuard tunnel / pipe / encrypted channel
  - Globe with region pins / world map
  - Padlock / shield / key (security)
  - Terminal / CLI / YAML / code
  - Network topology / nodes & edges
  - Mail / envelope / packet
  - Pure typography wordmarks
  - Abstract geometric forms
"""
import json
from pathlib import Path

OUT = Path(__file__).parent / "prompts-v3.json"

BRAND_NOTES = (
    "Logo for 'sidecar' — a WireGuard relay that gives every Docker container "
    "a real, static public IP. The brand name refers to the cloud-native "
    "sidecar pattern (a helper container running alongside a primary container). "
    "Developer-first, technical, irreverent.\n\n"
    "HARD CONSTRAINTS:\n"
    "1. NO motorcycle, NO bicycle, NO scooter, NO motorcycle sidecar carriage. "
    "Absolutely no vehicles with wheels.\n"
    "2. The ONLY text in the image is the single word 'sidecar' in lowercase. "
    "No taglines, no version strings, no slogans, no domain names.\n"
    "3. Square 1:1 logo on a clean background that matches the chosen style."
)

# 165 non-motorcycle themes that express the Sidecar brand.
THEMES = [
    # ===== Two-container "sidecar pattern" (the actual cloud-native metaphor) =====
    ("two-cubes",
     "two solid cubes arranged side-by-side — one large primary cube and one smaller 'sidecar' cube docked to its right side, sharing an edge"),
    ("cube-plus-helper",
     "a primary cube with a smaller helper cube attached to its side via a short connector line, abstract pictogram"),
    ("nested-boxes",
     "two nested rectangular boxes: a large outer container with a smaller inner companion box"),
    ("docked-pair",
     "two box icons connected by a docking port symbol, conveying the sidecar-container pattern"),
    ("buddy-boxes",
     "two friendly box characters side by side, one slightly smaller (the 'sidecar' buddy)"),
    ("yin-yang-cubes",
     "two interlocking cube halves echoing a yin-yang relationship, abstract"),
    ("container-with-pod",
     "isometric shipping container with a small auxiliary pod attached to its long side"),
    ("twin-cubes-iso",
     "isometric pair of cubes, one main and one auxiliary, on a soft ground shadow"),
    ("primary-sidecar-split",
     "a single rounded rectangle split vertically into a wide left portion and a narrow right 'sidecar' portion"),
    ("stack-and-helper",
     "a tall stack of three containers with a small helper container attached to the middle one"),
    ("k8s-pod-pair",
     "a Kubernetes-style hexagonal pod outline containing two cubes (main + sidecar)"),
    ("dotted-attached",
     "a primary square solid-filled, with a smaller secondary square attached via dotted-outline showing optional helper"),
    ("twin-modules",
     "two interlocking puzzle-piece modules, abstract software pattern"),
    ("plus-plug",
     "a primary square with a small 'sidecar' square attached via a plug-and-socket connector"),
    ("co-pair-icon",
     "two minimal squares of unequal size touching at one edge, set inside a thin circular boundary"),
    ("inline-helper",
     "abstract pictogram of a main module with a smaller helper module sliding into its side track"),
    ("twin-pills",
     "two pill-shaped capsule modules side by side, one shorter"),
    ("companion-square",
     "a square with a tiny labeled companion square clipped to its right edge, conveying companionship"),
    ("paired-rounded",
     "two rounded squares of different sizes, gently leaning into each other"),
    ("container-helper-iso",
     "isometric view of one container with a smaller helper module bolted to its side"),

    # ===== Docker / container themes =====
    ("docker-whale",
     "a stylized whale silhouette carrying stacked shipping containers on its back, geometric"),
    ("whale-with-pup",
     "a large whale with a smaller whale calf swimming alongside, abstract pictogram"),
    ("shipping-container",
     "a single shipping container in three-quarter view, corrugated walls, abstract logo"),
    ("container-stack",
     "neatly stacked shipping containers forming a pyramid, geometric flat illustration"),
    ("container-ship",
     "a freighter ship laden with stacked containers, side profile silhouette"),
    ("container-port",
     "shipping-port crane lifting a container, abstract pictogram"),
    ("box-on-pallet",
     "a wooden pallet with a single shipping-container box on top"),
    ("crate-mark",
     "a wooden crate marked with the wordmark 'sidecar' stenciled on one side"),
    ("cargo-hold",
     "a cross-section of a ship's cargo hold filled with stacked containers"),
    ("docker-cube-stack",
     "stack of three glossy blue cubes, the topmost smaller (sidecar)"),

    # ===== IP address themes (no motorcycle license plates) =====
    ("ip-card",
     "a clean business card-style label showing the text '203.0.113.42' in a monospace font, centered"),
    ("ip-tag-luggage",
     "a luggage-tag-style label with '203.0.113.42' written on it, hanging from a thin loop"),
    ("ipv6-card",
     "a card-style label showing the IPv6 address '2001:db8::1' in clean mono type"),
    ("ip-fingerprint",
     "a stylized fingerprint pattern whose ridges spell out an IP address in tiny digits"),
    ("dotted-quad",
     "the dotted-quad address '203.0.113.42' rendered as a logo, with four boxes joined by dots"),
    ("ip-passport",
     "a passport-style icon stamped with an IP address as the visa number"),
    ("ip-receipt",
     "a tiny printed receipt showing an IP address in faded mono, designed as a logo mark"),
    ("ip-coin",
     "a circular coin/medallion embossed with an IP address"),
    ("ip-stamp",
     "an ink-stamped IP address with slightly smudged edges"),
    ("ip-barcode",
     "a barcode whose digits underneath read as a dotted-quad IP address"),

    # ===== WireGuard / encrypted tunnel =====
    ("padlock-minimal",
     "a clean minimalist padlock icon, two-tone, geometric"),
    ("shield-mark",
     "a heraldic shield silhouette with a stylized 'S' inside"),
    ("key-skeleton",
     "a stylized skeleton key with intricate bow forming a small lattice (post-quantum hint)"),
    ("dual-keys",
     "two crossed keys, public/private key metaphor"),
    ("tunnel-cylinder",
     "a translucent cylindrical tunnel with abstract data dots flowing through"),
    ("tunnel-arch",
     "a stone-arch tunnel entrance viewed head-on with light at the far end"),
    ("tunnel-fiber",
     "a glowing fiber-optic cable bent into a loop"),
    ("vpn-link",
     "two endpoints connected by a thick encrypted link with a small lock icon at the midpoint"),
    ("lock-and-arrow",
     "a padlock combined with a directional arrow conveying secure forwarding"),
    ("post-quantum-lattice",
     "a hexagonal lattice mesh suggesting post-quantum cryptography, a single dot highlighted at center"),
    ("handshake-icon",
     "an abstract WireGuard handshake: two hex-shaped nodes shaking hands with a key motif"),
    ("vault-door",
     "a circular bank-vault door icon with a small 'S' on the dial"),
    ("padlock-shackle-s",
     "a padlock whose shackle is shaped like a stylized letter S"),
    ("shield-lattice",
     "a shield filled with a fine hex-lattice texture"),
    ("encrypted-envelope",
     "an envelope with a wax seal in the shape of a padlock"),

    # ===== Globe / regions / map =====
    ("globe-pins",
     "a stylized globe with five small pins marking regions, clean flat illustration"),
    ("globe-orbit-dots",
     "a globe encircled by a thin orbit ring dotted with five glowing nodes"),
    ("flat-map-pins",
     "a flat world-map silhouette with five small region pins marked"),
    ("globe-wireframe",
     "a wireframe globe with thin meridian and parallel lines, no continents"),
    ("globe-half",
     "a half-globe silhouette with a horizon line and a sun rising behind it"),
    ("compass-rose",
     "a four-point compass rose with the letter S at the north"),
    ("map-pin",
     "a single map-pin/teardrop marker with a hex pattern inside"),
    ("five-region-map",
     "five small circles arranged like continents on a flat world map background"),
    ("globe-cube",
     "a cubic globe (Earth on a cube) with continents wrapped onto its faces"),
    ("network-globe-mesh",
     "a globe overlaid with a fine triangulated mesh, abstract"),

    # ===== Terminal / CLI / code =====
    ("terminal-prompt",
     "a tiny mock-terminal window showing only a green prompt '$' and the word 'sidecar', monospace"),
    ("yaml-snippet",
     "a YAML configuration snippet showing the line 'sidecar.enable: true' in a code window"),
    ("compose-tag",
     "a Docker Compose-style label tag reading 'sidecar.enable=true' in monospace, presented as a logo"),
    ("brackets-mono",
     "an opening and closing pair of square brackets [ ] with the word sidecar between, monospace"),
    ("curly-braces",
     "opening and closing curly braces { } framing the word sidecar"),
    ("greater-than-prompt",
     "a single chevron '>' prompt symbol with the word sidecar"),
    ("ascii-block",
     "the word 'sidecar' rendered in ASCII-block art using # and = characters"),
    ("blinking-cursor",
     "a thick monospace block cursor with the word sidecar trailing"),
    ("code-comment",
     "a slash-slash code comment '// sidecar' rendered in monospace"),
    ("docker-file-icon",
     "a stylized Dockerfile icon (whale + document) with a label 'sidecar'"),
    ("hashbang",
     "a shebang line '#!/sidecar' rendered in clean monospace"),
    ("pipe-operator",
     "a vertical bar pipe '|' between the words 'app' and 'sidecar', shell pipe metaphor (only 'sidecar' visible large)"),
    ("env-var",
     "a stylized environment variable 'SIDECAR_IP=…' rendered as a logo (where … is just dots, not real text)"),
    ("terminal-output",
     "a terminal window showing one line of output: the word 'sidecar' with a tiny cursor"),
    ("git-branch",
     "a git-style branch graph icon with one branch labeled 'sidecar'"),

    # ===== Network topology =====
    ("nodes-edges",
     "a network graph of dots connected by thin lines, abstract topology"),
    ("hub-spoke",
     "a hub-and-spoke topology diagram with a central node and 5 satellites"),
    ("mesh-grid",
     "a fine triangulated mesh pattern, abstract"),
    ("star-topology",
     "five outer nodes connected to a single central node"),
    ("ring-topology",
     "a ring of nodes connected in a circle"),
    ("tree-topology",
     "a downward branching tree of nodes"),
    ("flow-arrow",
     "an abstract arrow that branches into a primary path and a sidecar path"),
    ("packet-stream",
     "abstract data packets (small squares) flowing along a thick line"),
    ("traffic-light-cluster",
     "three traffic-light dots (red, yellow, green) arranged as a status cluster"),
    ("subnet-grid",
     "a 4x4 grid of small squares representing a subnet"),

    # ===== Mail / packet metaphors =====
    ("envelope",
     "a clean envelope icon with a small lock seal"),
    ("paper-airplane",
     "a paper airplane mid-flight, abstract"),
    ("parcel-tag",
     "a brown parcel package with a shipping label"),
    ("carrier-pigeon",
     "a stylized carrier pigeon with a small scroll tied to its leg, geometric flat illustration"),
    ("mailbox",
     "an American-style mailbox with a raised flag"),
    ("postal-stamp",
     "a vintage postage stamp design centered on the wordmark 'sidecar'"),
    ("postal-seal",
     "a circular postal-style seal with the wordmark 'sidecar' arched around"),
    ("data-packet",
     "a square envelope-shaped 'data packet' with a small protocol header strip"),

    # ===== Pure wordmarks / typography (lots of these) =====
    ("wordmark-mono",
     "the word 'sidecar' set in clean monospace (Geist Mono / IBM Plex Mono style), no other elements"),
    ("wordmark-serif",
     "the word 'sidecar' set in a high-contrast serif (Instrument Serif / Playfair style)"),
    ("wordmark-grotesk",
     "the word 'sidecar' set in a modern geometric grotesk (Inter / Söhne style)"),
    ("wordmark-condensed",
     "the word 'sidecar' set in a tall narrow condensed sans"),
    ("wordmark-rounded",
     "the word 'sidecar' set in a rounded geometric sans, friendly"),
    ("wordmark-slab",
     "the word 'sidecar' set in a chunky slab serif"),
    ("wordmark-italic",
     "the word 'sidecar' set in an elegant italic"),
    ("wordmark-outline",
     "the word 'sidecar' as hollow outlined letters"),
    ("wordmark-shadow",
     "the word 'sidecar' with a hard offset drop shadow"),
    ("wordmark-3d-extrude",
     "the word 'sidecar' rendered as 3D extruded chunky lettering"),
    ("wordmark-stencil",
     "the word 'sidecar' in a stencil typeface (Allerta Stencil style)"),
    ("wordmark-blackletter",
     "the word 'sidecar' in a clean modern blackletter"),
    ("wordmark-ligature",
     "the word 'sidecar' with a custom ligature joining 'd' and 'e'"),
    ("wordmark-dot-i",
     "the word 'sidecar' where the dot on the 'i' is replaced with a small cube"),
    ("wordmark-split",
     "the word 'sidecar' split horizontally into two contrasting color bands"),
    ("wordmark-circle",
     "the word 'sidecar' set inside a perfect circle, the letters following the curve"),
    ("wordmark-circle-rect",
     "the word 'sidecar' inside a rounded rectangle plaque"),
    ("wordmark-underline",
     "the word 'sidecar' with a thick underline accent in a contrasting color"),
    ("wordmark-period",
     "the word 'sidecar.' with a confident terminal period accent"),
    ("wordmark-bracketed",
     "the word '[sidecar]' presented in square brackets, monospace"),
    ("wordmark-tag",
     "the word '#sidecar' rendered as a hashtag in geometric sans"),
    ("wordmark-domain",
     "the word 'sidecar' followed by a stylized period-network suffix dot, presented as a tight logotype"),

    # ===== Monogram / letter S =====
    ("monogram-s-solid",
     "a single bold geometric 'S' letterform, filled, with crisp counter shapes"),
    ("monogram-s-line",
     "a single-stroke continuous 'S' letterform"),
    ("monogram-s-cube",
     "the letter S composed from two cubes stacked diagonally"),
    ("monogram-s-circle",
     "the letter S inside a perfect circle badge"),
    ("monogram-s-hex",
     "the letter S inside a hexagon badge"),
    ("monogram-s-shield",
     "the letter S inside a heraldic shield"),
    ("monogram-s-square",
     "the letter S inside a soft square app-icon mark"),
    ("monogram-s-tunnel",
     "the letter S drawn as if it were a curved pipe/tunnel with a small dot of light at one end"),
    ("monogram-s-pixel",
     "the letter S in pixel-art, 8x8 grid"),
    ("monogram-s-mono",
     "the letter S in a perfectly monospaced character box"),

    # ===== Abstract / geometric =====
    ("abstract-arc",
     "a single bold curved arc with a small dot at one end"),
    ("abstract-spiral",
     "a tight geometric spiral, single color"),
    ("abstract-loop",
     "a continuous loop ribbon"),
    ("abstract-arrow",
     "a thick block arrow pointing right with a small companion arrow underneath"),
    ("abstract-circle-square",
     "a circle and a square overlapping at one edge"),
    ("abstract-triangle-square",
     "a triangle and a square sharing a side"),
    ("abstract-three-bars",
     "three horizontal bars of decreasing length, like a signal strength indicator"),
    ("abstract-stack",
     "three stacked horizontal rectangles, the top one offset to the right"),
    ("abstract-hex-grid",
     "a hexagonal grid with one cell highlighted"),
    ("abstract-pin-dots",
     "five connected dots forming a constellation, abstract"),

    # ===== Servers / infrastructure =====
    ("server-rack",
     "an open server rack with several thin servers stacked, side view, abstract pictogram"),
    ("blade-server",
     "a single blade-server slot icon with status LEDs"),
    ("cloud-icon",
     "a stylized cloud shape with a small cube docked alongside"),
    ("cloud-plus-pod",
     "a cloud icon with a small pod attached to one side"),
    ("server-tower",
     "a tower server side view with one cable extending out"),
    ("rj45-jack",
     "an RJ45 ethernet jack icon, clean pictogram"),
    ("ethernet-cable",
     "two ethernet plugs facing each other, abstract"),
    ("modem-router",
     "a small router box with two antennae"),
    ("port-icon",
     "a single network port with a small status dot"),
    ("rack-unit-iso",
     "isometric single rack-unit (1U) server"),

    # ===== Bauhaus / Memphis / abstract design movements =====
    ("primary-composition",
     "a Bauhaus-inspired composition of pure primary colors and geometric shapes — red square, blue circle, yellow triangle — arranged into an abstract logo"),
    ("memphis-composition",
     "a Memphis-design composition with squiggles, dots, and a small bauhaus square"),

    # ===== Beacon / lighthouse / signal =====
    ("lighthouse",
     "a tall stylized lighthouse silhouette with three concentric light rings emanating"),
    ("beacon-rings",
     "concentric expanding rings emanating from a central dot"),
    ("antenna-mast",
     "a thin antenna mast with signal arcs on either side"),
    ("wifi-symbol",
     "a wifi-style arc symbol but with a small cube at the origin"),
    ("radar-sweep",
     "a circular radar dial with a sweep line and a few blips"),
    ("ping-marker",
     "a single map-pin emanating a single ping ring"),

    # ===== Plug / socket / connector =====
    ("plug-socket-pair",
     "a power plug and socket facing each other, abstract icon"),
    ("usb-c",
     "a USB-C connector silhouette"),
    ("jack-connector",
     "a 3.5mm jack and socket pair"),
    ("rj45-pair",
     "two RJ45 plugs facing each other"),
    ("dock-port",
     "a docking station port with a small device sliding in"),

    # ===== Tags / labels =====
    ("luggage-tag",
     "a clean rectangular luggage tag with a loop, blank with just the wordmark"),
    ("badge-circle",
     "a circular enamel pin badge with the wordmark 'sidecar'"),
    ("hang-tag",
     "a clothing hang-tag with a string and the wordmark"),
    ("sticker-die-cut",
     "a die-cut vinyl sticker with the wordmark, slight white border"),
    ("name-tag",
     "an event 'Hello, my name is' style name tag where the name reads 'sidecar'"),
    ("file-folder-tab",
     "a manila folder tab with the wordmark printed on it"),

    # ===== Stamps / seals =====
    ("wax-seal",
     "a wax seal stamp impression in deep maroon, embossed with a stylized S"),
    ("ink-stamp",
     "a rubber-stamp ink impression of the wordmark, slightly smudged"),
    ("notarized-stamp",
     "a circular notary-style stamp with the wordmark arched around"),
    ("postmark",
     "a circular postmark ring with the wordmark in the center"),

    # ===== Punctuation / glyphs =====
    ("ampersand",
     "a large ornamental ampersand with the wordmark beside it, conveying companionship (& sidecar)"),
    ("plus-sign",
     "a large plus sign with a small cube on one arm"),
    ("at-sign",
     "a large @ symbol with a small cube at its center"),
    ("equals-sign",
     "two parallel horizontal bars (equals sign) as the central mark"),
    ("hash-tag",
     "a clean hash symbol # styled as the central mark"),

    # ===== Container in motion (without vehicles) =====
    ("container-floating",
     "a single container floating on water with concentric ripples"),
    ("container-rocket",
     "a stylized rocket-shaped container with a flame underneath"),
    ("container-balloon",
     "a container suspended below a hot-air balloon canopy"),
    ("container-parachute",
     "a container descending under a single parachute"),
    ("container-conveyor",
     "a container traveling along a conveyor belt"),

    # ===== Crests / emblems =====
    ("crest-shield",
     "a heraldic crest shield with two cubes flanking a central pillar"),
    ("ribbon-banner",
     "a horizontal ribbon banner with the wordmark across it"),
    ("laurel-wreath",
     "a laurel wreath surrounding a small central cube"),
    ("medal-pin",
     "a military-style enamel medal pin with the wordmark"),

    # ===== Pop / playful =====
    ("speech-bubble",
     "a round speech bubble with the wordmark inside"),
    ("checkmark-badge",
     "a circular badge with a thick checkmark inside"),
    ("heart-cube",
     "a heart icon with a small cube inside"),
    ("smile-cube",
     "a cube with two friendly dot-eyes and a small smile"),

    # ===== Bento / grid composition =====
    ("bento-grid-2x2",
     "a 2x2 bento grid where one cell is the wordmark and others are small abstract motifs"),
    ("bento-grid-3x1",
     "a 1x3 horizontal bento layout with sidecar-related abstract marks"),
    ("magazine-cover",
     "a brutalist magazine-cover-style layout with 'sidecar' as the masthead and an abstract central mark"),

    # ===== Pixel / retro =====
    ("pixel-cube",
     "an 8-bit pixel-art primary cube with a smaller helper cube next to it"),
    ("crt-monitor",
     "a 1980s CRT monitor displaying the wordmark in green phosphor"),
    ("led-segment",
     "the wordmark 'sidecar' rendered in 7-segment LED display style"),
    ("split-flap",
     "a split-flap mechanical display showing the word 'SIDECAR' mid-flip"),

    # ===== Quantum / lattice =====
    ("hex-lattice",
     "a fine hexagonal lattice pattern with a single cell highlighted"),
    ("crystalline",
     "a crystalline polyhedron with multiple faces, geometric"),
    ("particle-field",
     "a field of small particles with a single highlighted node at the center"),

    # ===== Misc concrete pictograms =====
    ("brick-wall",
     "a small brick-wall section with one brick highlighted, abstract"),
    ("railway-coupler",
     "a stylized railway coupler joining two abstract cargo boxes"),
    ("bento-box",
     "a Japanese bento box with multiple compartments, one slightly highlighted"),
    ("subway-tile",
     "white subway-tile pattern with one tile in accent color"),
    ("apartment-window",
     "a window with two panes side by side, one slightly larger"),
]

# 50 visual styles (same as v2, with a few additions tuned for non-vehicle subjects)
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
    ("photoreal-bike", "Photorealistic studio photograph of a 3D model of the subject on a seamless backdrop."),
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

prompts = []
seen = set()
style_idx = 0
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
        f"Final composition is a centered balanced logo mark. "
        f"The single word 'sidecar' (lowercase) appears in the typography of the style. "
        f"Repeat: NO motorcycle, NO bicycle, NO sidecar carriage, NO wheels of any kind."
    )

    n = len(prompts) + 1
    prompts.append({
        "id": n,
        "slug": f"{n:03d}_{theme_slug}_{style_slug}",
        "theme": theme_slug,
        "style": style_slug,
        "prompt": full,
    })

assert len(prompts) == limit, f"got {len(prompts)}"
OUT.write_text(json.dumps(prompts, indent=2))
print(f"Wrote {len(prompts)} prompts to {OUT}")
print(f"Themes used: {len({p['theme'] for p in prompts})}/{len(THEMES)}")
print(f"Styles used: {len({p['style'] for p in prompts})}/{len(STYLES)}")
