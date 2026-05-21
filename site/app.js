const LOGOS = [
  { id: 1, file: "sidecar_001_minimalist_black_white.png", label: "Minimalist Black White" },
  { id: 2, file: "sidecar_002_minimalist_navy.png", label: "Minimalist Navy" },
  { id: 3, file: "sidecar_003_geometric_charcoal.png", label: "Geometric Charcoal" },
  { id: 4, file: "sidecar_004_neon_cyan_purple.png", label: "Neon Cyan Purple" },
  { id: 5, file: "sidecar_005_neon_gradient_pink_blue.png", label: "Neon Gradient Pink Blue" },
  { id: 6, file: "sidecar_006_pastel_lavender_mint.png", label: "Pastel Lavender Mint" },
  { id: 7, file: "sidecar_007_pastel_peach_rose.png", label: "Pastel Peach Rose" },
  { id: 8, file: "sidecar_008_pastel_sky_blue.png", label: "Pastel Sky Blue" },
  { id: 9, file: "sidecar_009_shield_castle_blue.png", label: "Shield Blue" },
  { id: 10, file: "sidecar_010_shield_castle_green.png", label: "Shield Green" },
  { id: 11, file: "sidecar_011_line_art_emerald.png", label: "Line Art Emerald" },
  { id: 12, file: "sidecar_012_flat_orange.png", label: "Flat Orange" },
  { id: 13, file: "sidecar_013_flat_burgundy.png", label: "Flat Burgundy" },
  { id: 14, file: "sidecar_014_flat_gold.png", label: "Flat Gold" },
  { id: 15, file: "sidecar_015_flat_teal.png", label: "Flat Teal" },
  { id: 16, file: "sidecar_016_duotone_coral_navy.png", label: "Duotone Coral Navy" },
  { id: 17, file: "sidecar_017_duotone_yellow_purple.png", label: "Duotone Yellow Purple" },
  { id: 18, file: "sidecar_018_duotone_lime_pink.png", label: "Duotone Lime Pink" },
  { id: 19, file: "sidecar_019_gradient_blue_indigo.png", label: "Gradient Blue Indigo" },
  { id: 20, file: "sidecar_020_gradient_sunset.png", label: "Gradient Sunset" },
  { id: 21, file: "sidecar_021_gradient_green_teal.png", label: "Gradient Green Teal" },
  { id: 22, file: "sidecar_022_gradient_pink_gold.png", label: "Gradient Pink Gold" },
  { id: 23, file: "sidecar_023_ultra_minimal_lines.png", label: "Ultra Minimal Lines" },
  { id: 24, file: "sidecar_024_isometric_blue_gray.png", label: "Isometric Blue Gray" },
  { id: 25, file: "sidecar_025_isometric_purple.png", label: "Isometric Purple" },
  { id: 26, file: "sidecar_026_badge_circle_navy.png", label: "Badge Circle Navy" },
  { id: 27, file: "sidecar_027_badge_circle_green.png", label: "Badge Circle Green" },
  { id: 28, file: "sidecar_028_hexagon_blue.png", label: "Hexagon Blue" },
  { id: 29, file: "sidecar_029_diamond_purple.png", label: "Diamond Purple" },
  { id: 30, file: "sidecar_030_app_icon_blue.png", label: "App Icon Blue" },
  { id: 31, file: "sidecar_031_app_icon_dark_cyan.png", label: "App Icon Dark Cyan" },
  { id: 32, file: "sidecar_032_app_icon_purple_gradient.png", label: "App Icon Purple Gradient" },
  { id: 33, file: "sidecar_033_app_icon_coral.png", label: "App Icon Coral" },
  { id: 34, file: "sidecar_034_app_icon_green.png", label: "App Icon Green" },
  { id: 35, file: "sidecar_035_dot_grid_navy.png", label: "Dot Grid Navy" },
  { id: 36, file: "sidecar_036_earthy_terracotta.png", label: "Earthy Terracotta" },
  { id: 37, file: "sidecar_037_slate_gray.png", label: "Slate Gray" },
  { id: 38, file: "sidecar_038_watercolor_blue_purple.png", label: "Watercolor Blue Purple" },
  { id: 39, file: "sidecar_039_watercolor_amber.png", label: "Watercolor Amber" },
  { id: 40, file: "sidecar_040_outline_orange.png", label: "Outline Orange" },
  { id: 41, file: "sidecar_041_outline_neon_green_black.png", label: "Outline Neon Green Black" },
  { id: 42, file: "sidecar_042_retro_70s_earthy.png", label: "Retro 70s Earthy" },
  { id: 43, file: "sidecar_043_retro_80s_arcade.png", label: "Retro 80s Arcade" },
  { id: 44, file: "sidecar_044_retro_90s_cartoon.png", label: "Retro 90s Cartoon" },
  { id: 45, file: "sidecar_045_medieval_manuscript.png", label: "Medieval Manuscript" },
  { id: 46, file: "sidecar_046_japanese_brushstroke.png", label: "Japanese Brushstroke" },
  { id: 47, file: "sidecar_047_swiss_modernist.png", label: "Swiss Modernist" },
  { id: 48, file: "sidecar_048_deconstructed_abstract.png", label: "Deconstructed Abstract" },
  { id: 49, file: "sidecar_049_negative_space.png", label: "Negative Space" },
  { id: 50, file: "sidecar_050_origami_blue.png", label: "Origami Blue" },
  { id: 51, file: "sidecar_051_lowpoly_purple_pink.png", label: "Lowpoly Purple Pink" },
  { id: 52, file: "sidecar_052_lowpoly_teal.png", label: "Lowpoly Teal" },
  { id: 53, file: "sidecar_053_circuit_board_tech.png", label: "Circuit Board Tech" },
  { id: 54, file: "sidecar_054_binary_code_navy.png", label: "Binary Code Navy" },
  { id: 55, file: "sidecar_055_cartoon_primary_colors.png", label: "Cartoon Primary Colors" },
  { id: 56, file: "sidecar_056_chibi_kawaii.png", label: "Chibi Kawaii" },
  { id: 57, file: "sidecar_057_illustrated_storybook.png", label: "Illustrated Storybook" },
  { id: 58, file: "sidecar_058_sandcastle_bucket.png", label: "Sandcastle Bucket" },
  { id: 59, file: "sidecar_059_sandbox_wooden_box.png", label: "Sandbox Wooden Box" },
  { id: 60, file: "sidecar_060_cloud_castle.png", label: "Cloud" },
  { id: 61, file: "sidecar_061_castle_vault_safe.png", label: "Vault Safe" },
  { id: 62, file: "sidecar_062_castle_phone_app.png", label: "Phone App" },
  { id: 63, file: "sidecar_063_castle_bubble_shield.png", label: "Bubble Shield" },
  { id: 64, file: "sidecar_064_castle_data_blocks.png", label: "Data Blocks" },
  { id: 65, file: "sidecar_065_castle_mountain.png", label: "Mountain" },
  { id: 66, file: "sidecar_066_castle_reflection.png", label: "Reflection" },
  { id: 67, file: "sidecar_067_castle_letter_C.png", label: "Letter C" },
  { id: 68, file: "sidecar_068_castle_sunrise.png", label: "Sunrise" },
  { id: 69, file: "sidecar_069_castle_crown_royal.png", label: "Crown Royal" },
  { id: 70, file: "sidecar_070_castle_lightning.png", label: "Lightning" },
  { id: 71, file: "sidecar_071_castle_stars_magic.png", label: "Stars Magic" },
  { id: 72, file: "sidecar_072_castle_rocket.png", label: "Rocket" },
  { id: 73, file: "sidecar_073_castle_tree_eco.png", label: "Tree Eco" },
  { id: 74, file: "sidecar_074_castle_lock.png", label: "Lock" },
  { id: 75, file: "sidecar_075_castle_fingerprint.png", label: "Fingerprint" },
  { id: 76, file: "sidecar_076_rose_gold.png", label: "Rose Gold" },
  { id: 77, file: "sidecar_077_chrome_metallic.png", label: "Chrome Metallic" },
  { id: 78, file: "sidecar_078_matte_black.png", label: "Matte Black" },
  { id: 79, file: "sidecar_079_lilac_cream_premium.png", label: "Lilac Cream Premium" },
  { id: 80, file: "sidecar_080_cyberpunk_yellow_green.png", label: "Cyberpunk Yellow Green" },
  { id: 81, file: "sidecar_081_dark_gold_enterprise.png", label: "Dark Gold Enterprise" },
  { id: 82, file: "sidecar_082_dark_silver_enterprise.png", label: "Dark Silver Enterprise" },
  { id: 83, file: "sidecar_083_dark_mode_white.png", label: "Dark Mode White" },
  { id: 84, file: "sidecar_084_dark_purple_lavender.png", label: "Dark Purple Lavender" },
  { id: 85, file: "sidecar_085_dark_wine_rose_gold.png", label: "Dark Wine Rose Gold" },
  { id: 86, file: "sidecar_086_bold_stamp_black.png", label: "Bold Stamp Black" },
  { id: 87, file: "sidecar_087_rubber_stamp_navy.png", label: "Rubber Stamp Navy" },
  { id: 88, file: "sidecar_088_engraved_etching.png", label: "Engraved Etching" },
  { id: 89, file: "sidecar_089_letterpress_green.png", label: "Letterpress Green" },
  { id: 90, file: "sidecar_090_woodblock_print.png", label: "Woodblock Print" },
  { id: 91, file: "sidecar_091_stencil_spray.png", label: "Stencil Spray" },
  { id: 92, file: "sidecar_092_sticker_style_blue.png", label: "Sticker Style Blue" },
  { id: 93, file: "sidecar_093_enamel_pin.png", label: "Enamel Pin" },
  { id: 94, file: "sidecar_094_vintage_travel_stamp.png", label: "Vintage Travel Stamp" },
  { id: 95, file: "sidecar_095_embossed_gold_cream.png", label: "Embossed Gold Cream" },
  { id: 96, file: "sidecar_096_neon_sign_photo.png", label: "Neon Sign Photo" },
  { id: 97, file: "sidecar_097_pixel_art_16bit.png", label: "Pixel Art 16bit" },
  { id: 98, file: "sidecar_098_pixel_8bit_nes.png", label: "Pixel 8bit Nes" },
  { id: 99, file: "sidecar_099_voxel_3d.png", label: "Voxel 3d" },
  { id: 100, file: "sidecar_100_3d_marble_white.png", label: "3d Marble White" },
  { id: 101, file: "sidecar_101_3d_matte_gray.png", label: "3d Matte Gray" },
  { id: 102, file: "sidecar_102_3d_glass_crystal.png", label: "3d Glass Crystal" },
  { id: 103, file: "sidecar_103_3d_gold_metallic.png", label: "3d Gold Metallic" },
  { id: 104, file: "sidecar_104_abstract_geometric_mark.png", label: "Abstract Geometric Mark" },
  { id: 105, file: "sidecar_105_abstract_arch_towers.png", label: "Abstract Arch Towers" },
  { id: 106, file: "sidecar_106_abstract_three_towers.png", label: "Abstract Three Towers" },
  { id: 107, file: "sidecar_107_ai_neural_castle.png", label: "Ai Neural" },
  { id: 108, file: "sidecar_108_holographic_iridescent.png", label: "Holographic Iridescent" },
  { id: 109, file: "sidecar_109_castle_dna_biotech.png", label: "Dna Biotech" },
  { id: 110, file: "sidecar_110_castle_cloud_servers.png", label: "Cloud Servers" },
  { id: 111, file: "sidecar_111_illustrated_moat_drawbridge.png", label: "Illustrated Moat Drawbridge" },
  { id: 112, file: "sidecar_112_castle_hot_air_balloon.png", label: "Hot Air Balloon" },
  { id: 113, file: "sidecar_113_castle_garden_flowers.png", label: "Garden Flowers" },
  { id: 114, file: "sidecar_114_castle_rainbow.png", label: "Rainbow" },
  { id: 115, file: "sidecar_115_castle_snow_globe.png", label: "Snow Globe" },
  { id: 116, file: "sidecar_116_castle_birdseye_plan.png", label: "Birdseye Plan" },
  { id: 117, file: "sidecar_117_castle_tessellation.png", label: "Tessellation" },
  { id: 118, file: "sidecar_118_golden_ratio_castle.png", label: "Golden Ratio" },
  { id: 119, file: "sidecar_119_zen_enso_castle.png", label: "Zen Enso" },
  { id: 120, file: "sidecar_120_ghost_translucent.png", label: "Ghost Translucent" },
  { id: 121, file: "sidecar_121_castle_confetti_party.png", label: "Confetti Party" },
  { id: 122, file: "sidecar_122_castle_cliff_panoramic.png", label: "Cliff Panoramic" },
  { id: 123, file: "sidecar_123_castle_keyhole.png", label: "Keyhole" },
  { id: 124, file: "sidecar_124_castle_lock_hybrid.png", label: "Lock Hybrid" },
  { id: 125, file: "sidecar_125_heraldic_crest_red_gold.png", label: "Heraldic Crest Red Gold" },
  { id: 126, file: "sidecar_126_celtic_knotwork.png", label: "Celtic Knotwork" },
  { id: 127, file: "sidecar_127_castle_compass.png", label: "Compass" },
  { id: 128, file: "sidecar_128_castle_anchor_nautical.png", label: "Anchor Nautical" },
  { id: 129, file: "sidecar_129_castle_constellation.png", label: "Constellation" },
  { id: 130, file: "sidecar_130_typographic_castle.png", label: "Typographic" },
  { id: 131, file: "sidecar_131_stacked_wordmark_navy.png", label: "Stacked Wordmark Navy" },
  { id: 132, file: "sidecar_132_horizontal_monospace.png", label: "Horizontal Monospace" },
  { id: 133, file: "sidecar_133_wordmark_A_tower.png", label: "Wordmark A Tower" },
  { id: 134, file: "sidecar_134_wordmark_fortress_O_gate.png", label: "Wordmark Fortress O Gate" },
  { id: 135, file: "sidecar_135_icon_type_integration.png", label: "Icon Type Integration" },
  { id: 136, file: "sidecar_136_castle_speech_bubble.png", label: "Speech Bubble" },
  { id: 137, file: "sidecar_137_castle_map_pin.png", label: "Map Pin" },
  { id: 138, file: "sidecar_138_stained_glass.png", label: "Stained Glass" },
  { id: 139, file: "sidecar_139_art_nouveau.png", label: "Art Nouveau" },
  { id: 140, file: "sidecar_140_constructivist_soviet.png", label: "Constructivist Soviet" },
  { id: 141, file: "sidecar_141_bauhaus_primary.png", label: "Bauhaus Primary" },
  { id: 142, file: "sidecar_142_art_deco_gold_black.png", label: "Art Deco Gold Black" },
  { id: 143, file: "sidecar_143_pop_art_halftone.png", label: "Pop Art Halftone" },
  { id: 144, file: "sidecar_144_scandinavian_nordic.png", label: "Scandinavian Nordic" },
  { id: 145, file: "sidecar_145_folk_art_mexican.png", label: "Folk Art Mexican" },
  { id: 146, file: "sidecar_146_mughal_miniature.png", label: "Mughal Miniature" },
  { id: 147, file: "sidecar_147_ukiyo_e_woodblock.png", label: "Ukiyo E Woodblock" },
  { id: 148, file: "sidecar_148_patriotic_usa.png", label: "Patriotic Usa" },
  { id: 149, file: "sidecar_149_moonlit_gothic.png", label: "Moonlit Gothic" },
  { id: 150, file: "sidecar_150_autumn_fall.png", label: "Autumn Fall" },
  { id: 151, file: "sidecar_151_miami_vice_retro.png", label: "Miami Vice Retro" },
  { id: 152, file: "sidecar_152_vaporwave.png", label: "Vaporwave" },
  { id: 153, file: "sidecar_153_cottagecore.png", label: "Cottagecore" },
  { id: 154, file: "sidecar_154_dark_academia.png", label: "Dark Academia" },
  { id: 155, file: "sidecar_155_solarpunk_eco.png", label: "Solarpunk Eco" },
  { id: 156, file: "sidecar_156_brutalist_concrete.png", label: "Brutalist Concrete" },
  { id: 157, file: "sidecar_157_deconstructivist.png", label: "Deconstructivist" },
  { id: 158, file: "sidecar_158_memphis_postmodern.png", label: "Memphis Postmodern" },
  { id: 159, file: "sidecar_159_psychedelic_60s.png", label: "Psychedelic 60s" },
  { id: 160, file: "sidecar_160_steampunk_brass.png", label: "Steampunk Brass" },
  { id: 161, file: "sidecar_161_gaming_esports_purple.png", label: "Gaming Esports Purple" },
  { id: 162, file: "sidecar_162_sports_team_navy.png", label: "Sports Team Navy" },
  { id: 163, file: "sidecar_163_education_graduation.png", label: "Education Graduation" },
  { id: 164, file: "sidecar_164_healthcare_medical.png", label: "Healthcare Medical" },
  { id: 165, file: "sidecar_165_real_estate_luxury.png", label: "Real Estate Luxury" },
  { id: 166, file: "sidecar_166_restaurant_bistro.png", label: "Restaurant Bistro" },
  { id: 167, file: "sidecar_167_travel_tourism.png", label: "Travel Tourism" },
  { id: 168, file: "sidecar_168_music_entertainment.png", label: "Music Entertainment" },
  { id: 169, file: "sidecar_169_finance_banking.png", label: "Finance Banking" },
  { id: 170, file: "sidecar_170_nonprofit_charity.png", label: "Nonprofit Charity" },
  { id: 171, file: "sidecar_171_castle_wifi.png", label: "Wifi" },
  { id: 172, file: "sidecar_172_castle_bluetooth.png", label: "Bluetooth" },
  { id: 173, file: "sidecar_173_castle_checkmark.png", label: "Checkmark" },
  { id: 174, file: "sidecar_174_castle_progress_spinner.png", label: "Progress Spinner" },
  { id: 175, file: "sidecar_175_castle_shield_plus.png", label: "Shield Plus" },
  { id: 176, file: "sidecar_176_castle_play_button.png", label: "Play Button" },
  { id: 177, file: "sidecar_177_castle_settings_gear.png", label: "Settings Gear" },
  { id: 178, file: "sidecar_178_castle_api_plugin.png", label: "Api Plugin" },
  { id: 179, file: "sidecar_179_castle_terminal.png", label: "Terminal" },
  { id: 180, file: "sidecar_180_notion_style_warm.png", label: "Notion Style Warm" },
  { id: 181, file: "sidecar_181_linear_style_purple.png", label: "Linear Style Purple" },
  { id: 182, file: "sidecar_182_stripe_style_blue.png", label: "Stripe Style Blue" },
  { id: 183, file: "sidecar_183_vercel_style_black.png", label: "Vercel Style Black" },
  { id: 184, file: "sidecar_184_figma_style_colorful.png", label: "Figma Style Colorful" },
  { id: 185, file: "sidecar_185_duolingo_style_green.png", label: "Duolingo Style Green" },
  { id: 186, file: "sidecar_186_slack_style_multicolor.png", label: "Slack Style Multicolor" },
  { id: 187, file: "sidecar_187_discord_style_blurple.png", label: "Discord Style Blurple" },
  { id: 188, file: "sidecar_188_github_style_dark.png", label: "Github Style Dark" },
  { id: 189, file: "sidecar_189_apple_style_minimal.png", label: "Apple Style Minimal" },
  { id: 190, file: "sidecar_190_google_style_four_colors.png", label: "Google Style Four Colors" },
  { id: 191, file: "sidecar_191_spring_cherry_blossom.png", label: "Spring Cherry Blossom" },
  { id: 192, file: "sidecar_192_summer_tropical.png", label: "Summer Tropical" },
  { id: 193, file: "sidecar_193_winter_ice_crystal.png", label: "Winter Ice Crystal" },
  { id: 194, file: "sidecar_194_rainy_cozy.png", label: "Rainy Cozy" },
  { id: 195, file: "sidecar_195_desert_moroccan.png", label: "Desert Moroccan" },
  { id: 196, file: "sidecar_196_jungle_emerald.png", label: "Jungle Emerald" },
  { id: 197, file: "sidecar_197_arctic_polar.png", label: "Arctic Polar" },
  { id: 198, file: "sidecar_198_volcano_island.png", label: "Volcano Island" },
  { id: 199, file: "sidecar_199_underwater_marine.png", label: "Underwater Marine" },
  { id: 200, file: "sidecar_200_sky_floating_castle.png", label: "Sky Floating" },
  { id: 201, file: "sidecar_201_mars_castle.png", label: "Mars" },
  { id: 202, file: "sidecar_202_space_station_orbit.png", label: "Space Station Orbit" },
  { id: 203, file: "sidecar_203_metaverse_digital.png", label: "Metaverse Digital" },
  { id: 204, file: "sidecar_204_ar_hologram.png", label: "Ar Hologram" },
  { id: 205, file: "sidecar_205_time_lapse_motion.png", label: "Time Lapse Motion" },
  { id: 206, file: "sidecar_206_castle_books.png", label: "Books" },
  { id: 207, file: "sidecar_207_castle_puzzle_pieces.png", label: "Puzzle Pieces" },
  { id: 208, file: "sidecar_208_castle_pencil_sketch.png", label: "Pencil Sketch" },
  { id: 209, file: "sidecar_209_castle_coins_wealth.png", label: "Coins Wealth" },
  { id: 210, file: "sidecar_210_castle_smartphones.png", label: "Smartphones" },
  { id: 211, file: "sidecar_211_1bit_mac_icon.png", label: "1bit Mac Icon" },
  { id: 212, file: "sidecar_212_windows95_style.png", label: "Windows95 Style" },
  { id: 213, file: "sidecar_213_embroidery_patch.png", label: "Embroidery Patch" },
  { id: 214, file: "sidecar_214_tattoo_flash.png", label: "Tattoo Flash" },
  { id: 215, file: "sidecar_215_graffiti_brick.png", label: "Graffiti Brick" },
  { id: 216, file: "sidecar_216_neon_art_installation.png", label: "Neon Art Installation" },
  { id: 217, file: "sidecar_217_fortune_strip.png", label: "Fortune Strip" },
  { id: 218, file: "sidecar_218_wood_carved.png", label: "Wood Carved" },
  { id: 219, file: "sidecar_219_ceramic_delft.png", label: "Ceramic Delft" },
  { id: 220, file: "sidecar_220_wax_seal.png", label: "Wax Seal" },
  { id: 221, file: "sidecar_221_ice_cream_castle.png", label: "Ice Cream" },
  { id: 222, file: "sidecar_222_lego_bricks.png", label: "Lego Bricks" },
  { id: 223, file: "sidecar_223_shipping_containers.png", label: "Shipping Containers" },
  { id: 224, file: "sidecar_224_server_racks.png", label: "Server Racks" },
  { id: 225, file: "sidecar_225_social_media_icons.png", label: "Social Media Icons" },
  { id: 226, file: "sidecar_226_castle_owl.png", label: "Owl" },
  { id: 227, file: "sidecar_227_castle_dragon.png", label: "Dragon" },
  { id: 228, file: "sidecar_228_castle_chess_knight.png", label: "Chess Knight" },
  { id: 229, file: "sidecar_229_rook_chess_piece.png", label: "Rook Chess Piece" },
  { id: 230, file: "sidecar_230_flag_pole.png", label: "Flag Pole" },
  { id: 231, file: "sidecar_231_house_castle_hybrid.png", label: "House Hybrid" },
  { id: 232, file: "sidecar_232_castle_heart_gateway.png", label: "Heart Gateway" },
  { id: 233, file: "sidecar_233_castle_open_book.png", label: "Open Book" },
  { id: 234, file: "sidecar_234_castle_magnifying_glass.png", label: "Magnifying Glass" },
  { id: 235, file: "sidecar_235_castle_torch.png", label: "Torch" },
  { id: 236, file: "sidecar_236_castle_infinity.png", label: "Infinity" },
  { id: 237, file: "sidecar_237_castle_diamond_gem.png", label: "Diamond Gem" },
  { id: 238, file: "sidecar_238_castle_globe.png", label: "Globe" },
  { id: 239, file: "sidecar_239_castle_trophy.png", label: "Trophy" },
  { id: 240, file: "sidecar_240_castle_laurel_wreath.png", label: "Laurel Wreath" },
  { id: 241, file: "sidecar_241_castle_shield_center.png", label: "Shield Center" },
  { id: 242, file: "sidecar_242_castle_biometric.png", label: "Biometric" },
  { id: 243, file: "sidecar_243_castle_qr_code.png", label: "Qr Code" },
  { id: 244, file: "sidecar_244_castle_padlock.png", label: "Padlock" },
  { id: 245, file: "sidecar_245_castle_eye.png", label: "Eye" },
  { id: 246, file: "sidecar_246_castle_camera.png", label: "Camera" },
  { id: 247, file: "sidecar_247_castle_microphone.png", label: "Microphone" },
  { id: 248, file: "sidecar_248_castle_headphones.png", label: "Headphones" },
  { id: 249, file: "sidecar_249_castle_paintbrush.png", label: "Paintbrush" },
  { id: 250, file: "sidecar_250_castle_keyboard.png", label: "Keyboard" },
  { id: 251, file: "sidecar_251_crystal_gem_castle.png", label: "Crystal Gem" },
  { id: 252, file: "sidecar_252_stone_texture_realistic.png", label: "Stone Texture Realistic" },
  { id: 253, file: "sidecar_253_chalk_blackboard.png", label: "Chalk Blackboard" },
  { id: 254, file: "sidecar_254_graph_paper_blueprint.png", label: "Graph Paper Blueprint" },
  { id: 255, file: "sidecar_255_blueprint_technical.png", label: "Blueprint Technical" },
  { id: 256, file: "sidecar_256_architectural_elevation.png", label: "Architectural Elevation" },
  { id: 257, file: "sidecar_257_silhouette_amber_wellness.png", label: "Silhouette Amber Wellness" },
  { id: 258, file: "sidecar_258_zen_garden.png", label: "Zen Garden" },
  { id: 259, file: "sidecar_259_castle_in_bottle.png", label: "In Bottle" },
  { id: 260, file: "sidecar_260_long_shadow_blue.png", label: "Long Shadow Blue" },
  { id: 261, file: "sidecar_261_material_design_style.png", label: "Material Design Style" },
  { id: 262, file: "sidecar_262_neumorphism_soft.png", label: "Neumorphism Soft" },
  { id: 263, file: "sidecar_263_glassmorphism_frosted.png", label: "Glassmorphism Frosted" },
  { id: 264, file: "sidecar_264_claymorphism_puffy.png", label: "Claymorphism Puffy" },
  { id: 265, file: "sidecar_265_ascii_art.png", label: "Ascii Art" },
  { id: 266, file: "sidecar_266_wireframe_3d.png", label: "Wireframe 3d" },
  { id: 267, file: "sidecar_267_exploded_view.png", label: "Exploded View" },
  { id: 268, file: "sidecar_268_thermal_infrared.png", label: "Thermal Infrared" },
  { id: 269, file: "sidecar_269_sonar_radar.png", label: "Sonar Radar" },
  { id: 270, file: "sidecar_270_golden_hour_glow.png", label: "Golden Hour Glow" },
  { id: 271, file: "sidecar_271_dusk_twilight.png", label: "Dusk Twilight" },
  { id: 272, file: "sidecar_272_storm_lightning_dramatic.png", label: "Storm Lightning Dramatic" },
  { id: 273, file: "sidecar_273_foggy_mysterious.png", label: "Foggy Mysterious" },
  { id: 274, file: "sidecar_274_aurora_borealis.png", label: "Aurora Borealis" },
  { id: 275, file: "sidecar_275_mosaic_tile.png", label: "Mosaic Tile" },
  { id: 276, file: "sidecar_276_pointillist_dots.png", label: "Pointillist Dots" },
  { id: 277, file: "sidecar_277_crosshatch_pen_ink.png", label: "Crosshatch Pen Ink" },
  { id: 278, file: "sidecar_278_impasto_acrylic.png", label: "Impasto Acrylic" },
  { id: 279, file: "sidecar_279_oil_painting_classical.png", label: "Oil Painting Classical" },
  { id: 280, file: "sidecar_280_chinese_ink_wash.png", label: "Chinese Ink Wash" },
  { id: 281, file: "sidecar_281_favicon_tiny.png", label: "Favicon Tiny" },
  { id: 282, file: "sidecar_282_avatar_circular.png", label: "Avatar Circular" },
  { id: 283, file: "sidecar_283_dark_mode_oled.png", label: "Dark Mode Oled" },
  { id: 284, file: "sidecar_284_light_mode_clean.png", label: "Light Mode Clean" },
  { id: 285, file: "sidecar_285_print_ready_cmyk.png", label: "Print Ready Cmyk" },
  { id: 286, file: "sidecar_286_knockout_outline_white.png", label: "Knockout Outline White" },
  { id: 287, file: "sidecar_287_watermark_transparent.png", label: "Watermark Transparent" },
  { id: 288, file: "sidecar_288_billboard_bold.png", label: "Billboard Bold" },
  { id: 289, file: "sidecar_289_business_card_tiny.png", label: "Business Card Tiny" },
  { id: 290, file: "sidecar_290_full_color_brand.png", label: "Full Color Brand" },
  { id: 291, file: "sidecar_291_amazon_style_orange.png", label: "Amazon Style Orange" },
  { id: 292, file: "sidecar_292_netflix_style_red.png", label: "Netflix Style Red" },
  { id: 293, file: "sidecar_293_spotify_style_green.png", label: "Spotify Style Green" },
  { id: 294, file: "sidecar_294_twitter_x_style_clean.png", label: "Twitter X Style Clean" },
  { id: 295, file: "sidecar_295_meta_style_blue.png", label: "Meta Style Blue" },
  { id: 296, file: "sidecar_296_tiktok_style_offset.png", label: "Tiktok Style Offset" },
  { id: 297, file: "sidecar_297_airbnb_style_coral.png", label: "Airbnb Style Coral" },
  { id: 298, file: "sidecar_298_uber_style_black.png", label: "Uber Style Black" },
  { id: 299, file: "sidecar_299_dropbox_style_blue.png", label: "Dropbox Style Blue" },
  { id: 300, file: "sidecar_300_adobe_style_red.png", label: "Adobe Style Red" },
  { id: 301, file: "sidecar_301_asymmetric_dynamic.png", label: "Asymmetric Dynamic" },
  { id: 302, file: "sidecar_302_maze_castle.png", label: "Maze" },
  { id: 303, file: "sidecar_303_negative_space_circle.png", label: "Negative Space Circle" },
  { id: 304, file: "sidecar_304_abstract_battlements.png", label: "Abstract Battlements" },
  { id: 305, file: "sidecar_305_motion_speed_lines.png", label: "Motion Speed Lines" },
  { id: 306, file: "sidecar_306_globe_tower_dome.png", label: "Globe Tower Dome" },
  { id: 307, file: "sidecar_307_under_construction.png", label: "Under Construction" },
  { id: 308, file: "sidecar_308_exploding_burst.png", label: "Exploding Burst" },
  { id: 309, file: "sidecar_309_data_chart_castle.png", label: "Data Chart" },
  { id: 310, file: "sidecar_310_bar_graph_towers.png", label: "Bar Graph Towers" },
  { id: 311, file: "sidecar_311_origami_crane_style.png", label: "Origami Crane Style" },
  { id: 312, file: "sidecar_312_castle_sprout_growth.png", label: "Sprout Growth" },
  { id: 313, file: "sidecar_313_materializing_particles.png", label: "Materializing Particles" },
  { id: 314, file: "sidecar_314_skeleton_loading.png", label: "Skeleton Loading" },
  { id: 315, file: "sidecar_315_qr_castle_code.png", label: "Qr Code" },
  { id: 316, file: "sidecar_316_multicolor_data_towers.png", label: "Multicolor Data Towers" },
  { id: 317, file: "sidecar_317_rising_from_phone.png", label: "Rising From Phone" },
  { id: 318, file: "sidecar_318_shadow_only.png", label: "Shadow Only" },
  { id: 319, file: "sidecar_319_inverted_castle.png", label: "Inverted" },
  { id: 320, file: "sidecar_320_electric_sparks.png", label: "Electric Sparks" },
  { id: 321, file: "sidecar_321_mandala_symmetry.png", label: "Mandala Symmetry" },
  { id: 322, file: "sidecar_322_handwritten_script.png", label: "Handwritten Script" },
  { id: 323, file: "sidecar_323_binary_matrix.png", label: "Binary Matrix" },
  { id: 324, file: "sidecar_324_music_notation_walls.png", label: "Music Notation Walls" },
  { id: 325, file: "sidecar_325_periodic_table_castle.png", label: "Periodic Table" },
  { id: 326, file: "sidecar_326_ultramarine_single.png", label: "Ultramarine Single" },
  { id: 327, file: "sidecar_327_forest_green_single.png", label: "Forest Green Single" },
  { id: 328, file: "sidecar_328_coral_red_single.png", label: "Coral Red Single" },
  { id: 329, file: "sidecar_329_sunshine_yellow_single.png", label: "Sunshine Yellow Single" },
  { id: 330, file: "sidecar_330_plum_purple_single.png", label: "Plum Purple Single" },
  { id: 331, file: "sidecar_331_charcoal_black_single.png", label: "Charcoal Black Single" },
  { id: 332, file: "sidecar_332_white_on_gray.png", label: "White On Gray" },
  { id: 333, file: "sidecar_333_torn_paper_reveal.png", label: "Torn Paper Reveal" },
  { id: 334, file: "sidecar_334_paper_collage.png", label: "Paper Collage" },
  { id: 335, file: "sidecar_335_halftone_offset_print.png", label: "Halftone Offset Print" },
  { id: 336, file: "sidecar_336_podcast_microphone.png", label: "Podcast Microphone" },
  { id: 337, file: "sidecar_337_newsletter_email.png", label: "Newsletter Email" },
  { id: 338, file: "sidecar_338_web3_crypto.png", label: "Web3 Crypto" },
  { id: 339, file: "sidecar_339_mental_health_calm.png", label: "Mental Health Calm" },
  { id: 340, file: "sidecar_340_kids_learning.png", label: "Kids Learning" },
  { id: 341, file: "sidecar_341_seniors_accessible.png", label: "Seniors Accessible" },
  { id: 342, file: "sidecar_342_accessibility_inclusive.png", label: "Accessibility Inclusive" },
  { id: 343, file: "sidecar_343_colorblind_safe.png", label: "Colorblind Safe" },
  { id: 344, file: "sidecar_344_low_vision_bold.png", label: "Low Vision Bold" },
  { id: 345, file: "sidecar_345_dual_mode_grayscale.png", label: "Dual Mode Grayscale" },
  { id: 346, file: "sidecar_346_pride_rainbow_gradient.png", label: "Pride Rainbow Gradient" },
  { id: 347, file: "sidecar_347_micro_icon_16px.png", label: "Micro Icon 16px" },
  { id: 348, file: "sidecar_348_icon_32px.png", label: "Icon 32px" },
  { id: 349, file: "sidecar_349_app_store_512px.png", label: "App Store 512px" },
  { id: 350, file: "sidecar_350_launch_sparkle.png", label: "Launch Sparkle" },
  { id: 351, file: "sidecar_351_brand_lockup.png", label: "Brand Lockup" },
  { id: 352, file: "sidecar_352_monospace_text_logo.png", label: "Monospace Text Logo" },
  { id: 353, file: "sidecar_353_anthropomorphic_face.png", label: "Anthropomorphic Face" },
  { id: 354, file: "sidecar_354_spinner_loading.png", label: "Spinner Loading" },
  { id: 355, file: "sidecar_355_heartbeat_ekg.png", label: "Heartbeat Ekg" },
  { id: 356, file: "sidecar_356_ultra_wide_horizontal.png", label: "Ultra Wide Horizontal" },
  { id: 357, file: "sidecar_357_tall_vertical_portrait.png", label: "Tall Vertical Portrait" },
  { id: 358, file: "sidecar_358_perspective_3quarter.png", label: "Perspective 3quarter" },
  { id: 359, file: "sidecar_359_extreme_close_zoom.png", label: "Extreme Close Zoom" },
  { id: 360, file: "sidecar_360_overhead_birdseye.png", label: "Overhead Birdseye" },
  { id: 361, file: "sidecar_361_film_grain_analog.png", label: "Film Grain Analog" },
  { id: 362, file: "sidecar_362_hero_final.png", label: "Hero Final" },
  { id: 363, file: "sidecar_363_celebration_365.png", label: "Celebration 365" },
  { id: 364, file: "sidecar_364_hybrid_synthesis.png", label: "Hybrid Synthesis" },
  { id: 365, file: "sidecar_365_the_perfect_final.png", label: "The Perfect Final" },
  { id: 366, file: "sidecar_366_sandbox_neon_cyan.png", label: "Sandbox Neon Cyan" },
  { id: 367, file: "sidecar_367_sandbox_desert_sand.png", label: "Sandbox Desert Sand" },
  { id: 368, file: "sidecar_368_sandbox_secure_green.png", label: "Sandbox Secure Green" },
  { id: 369, file: "sidecar_369_sandbox_cloud_sky.png", label: "Sandbox Cloud Sky" },
  { id: 370, file: "sidecar_370_sandbox_pixel_retro.png", label: "Sandbox Pixel Retro" },
  { id: 371, file: "sidecar_371_sandbox_shield_gold.png", label: "Sandbox Shield Gold" },
  { id: 372, file: "sidecar_372_sandbox_holographic.png", label: "Sandbox Holographic" },
  { id: 373, file: "sidecar_373_sandbox_line_mono.png", label: "Sandbox Line Mono" },
  { id: 374, file: "sidecar_374_sandbox_vaporwave.png", label: "Sandbox Vaporwave" },
  { id: 375, file: "sidecar_375_sandbox_isometric_pastel.png", label: "Sandbox Isometric Pastel" },
  { id: 376, file: "sidecar_376_sandbox_glitch.png", label: "Sandbox Glitch" },
  { id: 377, file: "sidecar_377_sandbox_circuit.png", label: "Sandbox Circuit Board" },
  { id: 378, file: "sidecar_378_sandbox_watercolor.png", label: "Sandbox Watercolor" },
  { id: 379, file: "sidecar_379_sandbox_hexagon_space.png", label: "Sandbox Hexagon Space" },
  { id: 380, file: "sidecar_380_sandbox_duotone_coral_teal.png", label: "Sandbox Duotone Coral Teal" },
  { id: 381, file: "sidecar_381_sandbox_sandcastle_beach.png", label: "Sandbox Sandcastle Beach" },
  { id: 382, file: "sidecar_382_sandbox_stencil_graffiti.png", label: "Sandbox Stencil Graffiti" },
  { id: 383, file: "sidecar_383_sandbox_minimal_purple.png", label: "Sandbox Minimal Purple" },
  { id: 384, file: "sidecar_384_sandbox_puzzle_pieces.png", label: "Sandbox Puzzle Pieces" },
  { id: 385, file: "sidecar_385_sandbox_chrome_laser.png", label: "Sandbox Chrome Laser" },
  { id: 386, file: "sidecar_386_sandbox_kawaii_mascot.png", label: "Sandbox Kawaii Mascot" },
  { id: 387, file: "sidecar_387_sandbox_viking_longship.png", label: "Sandbox Viking Longship" },
  { id: 388, file: "sidecar_388_sandbox_galaxy_fill.png", label: "Sandbox Galaxy Fill" },
  { id: 389, file: "sidecar_389_sandbox_vintage_badge.png", label: "Sandbox Vintage Badge" },
  { id: 390, file: "sidecar_390_sandbox_fire_flame.png", label: "Sandbox Fire Flame" },
  { id: 391, file: "sidecar_391_sandbox_chalk_blackboard.png", label: "Sandbox Chalk Blackboard" },
  { id: 392, file: "sidecar_392_sandbox_ui_windows.png", label: "Sandbox UI Windows" },
  { id: 393, file: "sidecar_393_sandbox_lowpoly_3d.png", label: "Sandbox Low-Poly 3D" },
  { id: 394, file: "sidecar_394_sandbox_golden_sunrise.png", label: "Sandbox Golden Sunrise" },
  { id: 395, file: "sidecar_395_sandbox_typographic_se.png", label: "Sandbox Typographic SE" },
  { id: 396, file: "sidecar_396_sw_sith_red.png", label: "SW Sith Red" },
  { id: 397, file: "sidecar_397_sw_jedi_temple.png", label: "SW Jedi Temple" },
  { id: 398, file: "sidecar_398_sw_imperial_grey.png", label: "SW Imperial Grey" },
  { id: 399, file: "sidecar_399_sw_naboo_amber.png", label: "SW Naboo Amber" },
  { id: 400, file: "sidecar_400_sw_rebel_orange.png", label: "SW Rebel Orange" },
  { id: 401, file: "sidecar_401_sw_mandalorian_steel.png", label: "SW Mandalorian Steel" },
  { id: 402, file: "sidecar_402_sw_death_star_charcoal.png", label: "SW Death Star Charcoal" },
  { id: 403, file: "sidecar_403_sw_tatooine_sienna.png", label: "SW Tatooine Sienna" },
  { id: 404, file: "sidecar_404_sw_coruscant_cobalt.png", label: "SW Coruscant Cobalt" },
  { id: 405, file: "sidecar_405_sw_dagobah_teal.png", label: "SW Dagobah Teal" },
  { id: 406, file: "sidecar_406_sw_hoth_ice_blue.png", label: "SW Hoth Ice Blue" },
  { id: 407, file: "sidecar_407_sw_endor_brown.png", label: "SW Endor Brown" },
  { id: 408, file: "sidecar_408_sw_bounty_purple.png", label: "SW Bounty Hunter Purple" },
  { id: 409, file: "sidecar_409_sw_mon_cala_teal.png", label: "SW Mon Calamari Teal" },
  { id: 410, file: "sidecar_410_sw_mustafar_lava.png", label: "SW Mustafar Lava" },
  { id: 411, file: "sidecar_411_sw_sith_eternal_purple.png", label: "SW Sith Eternal Purple" },
  { id: 412, file: "sidecar_412_sw_cloud_city_pink.png", label: "SW Cloud City Pink" },
  { id: 413, file: "sidecar_413_sw_kashyyyk_jade.png", label: "SW Kashyyyk Jade" },
  { id: 414, file: "sidecar_414_sw_republic_indigo.png", label: "SW Republic Indigo" },
  { id: 415, file: "sidecar_415_sw_droid_factory_copper.png", label: "SW Droid Factory Copper" },
  { id: 416, file: "sidecar_416_sw_tatooine_sand.png", label: "SW Tatooine Sand" },
  { id: 417, file: "sidecar_417_dune_arrakis_spice.png", label: "Dune Arrakis Spice" },
  { id: 418, file: "sidecar_418_dune_atreides_blue.png", label: "Dune Atreides Blue" },
  { id: 419, file: "sidecar_419_dune_harkonnen_black.png", label: "Dune Harkonnen Black" },
  { id: 420, file: "sidecar_420_dune_fremen_sietch.png", label: "Dune Fremen Sietch" },
  { id: 421, file: "sidecar_421_dune_emperor_silver.png", label: "Dune Emperor Silver" },
  { id: 422, file: "sidecar_422_dune_bene_gesserit_violet.png", label: "Dune Bene Gesserit Violet" },
  { id: 423, file: "sidecar_423_dune_guild_teal.png", label: "Dune Guild Navigator Teal" },
  { id: 424, file: "sidecar_424_dune_sandworm_russet.png", label: "Dune Sandworm Russet" },
  { id: 425, file: "sidecar_425_dune_spice_gold.png", label: "Dune Spice Gold" },
  { id: 426, file: "sidecar_426_dune_tleilaxu_green.png", label: "Dune Tleilaxu Green" },
  { id: 427, file: "sidecar_427_dune_ixian_chrome.png", label: "Dune Ixian Chrome" },
  { id: 428, file: "sidecar_428_dune_muaddib_crimson.png", label: "Dune Muaddib Crimson" },
  { id: 429, file: "sidecar_429_dune_chani_rose.png", label: "Dune Chani Rose" },
  { id: 430, file: "sidecar_430_dune_god_emperor_ivory.png", label: "Dune God Emperor Ivory" },
  { id: 431, file: "sidecar_431_moat_classic_navy.png", label: "Moat Classic Navy" },
  { id: 432, file: "sidecar_432_moat_drawbridge_up_crimson.png", label: "Moat Drawbridge Up Crimson" },
  { id: 433, file: "sidecar_433_moat_swan_sage.png", label: "Moat Swan Sage" },
  { id: 434, file: "sidecar_434_moat_aerial_teal.png", label: "Moat Aerial Teal" },
  { id: 435, file: "sidecar_435_moat_croc_amber.png", label: "Moat Croc Amber" },
  { id: 436, file: "sidecar_436_moat_reflection_purple.png", label: "Moat Reflection Purple" },
  { id: 437, file: "sidecar_437_moat_siege_charcoal.png", label: "Moat Siege Charcoal" },
  { id: 438, file: "sidecar_438_moat_lily_emerald.png", label: "Moat Lily Emerald" },
  { id: 439, file: "sidecar_439_moat_minimal_slate.png", label: "Moat Minimal Slate" },
  { id: 440, file: "sidecar_440_moat_heraldic_burgundy.png", label: "Moat Heraldic Burgundy" },
  { id: 441, file: "sidecar_441_got_winterfell_grey.png", label: "GoT Winterfell" },
  { id: 442, file: "sidecar_442_got_red_keep_crimson.png", label: "GoT Red Keep" },
  { id: 443, file: "sidecar_443_got_eyrie_blue.png", label: "GoT The Eyrie" },
  { id: 444, file: "sidecar_444_got_dragonstone_charcoal.png", label: "GoT Dragonstone" },
  { id: 445, file: "sidecar_445_got_casterly_rock_gold.png", label: "GoT Casterly Rock" },
  { id: 446, file: "sidecar_446_got_harrenhal_black.png", label: "GoT Harrenhal" },
  { id: 447, file: "sidecar_447_got_storms_end_teal.png", label: "GoT Storm's End" },
  { id: 448, file: "sidecar_448_got_highgarden_green.png", label: "GoT Highgarden" },
  { id: 449, file: "sidecar_449_got_the_wall_ice.png", label: "GoT The Wall" },
  { id: 450, file: "sidecar_450_got_pyke_slate.png", label: "GoT Pyke" },
  { id: 451, file: "sidecar_451_got_sunspear_amber.png", label: "GoT Sunspear" },
  { id: 452, file: "sidecar_452_got_twins_violet.png", label: "GoT The Twins" },
  { id: 453, file: "sidecar_453_fairy_cinderella_blue.png", label: "Fairy Tale: Cinderella" },
  { id: 454, file: "sidecar_454_fairy_sleeping_beauty_pink.png", label: "Fairy Tale: Sleeping Beauty" },
  { id: 455, file: "sidecar_455_fairy_beast_castle_purple.png", label: "Fairy Tale: Beast's" },
  { id: 456, file: "sidecar_456_fairy_snow_white_red.png", label: "Fairy Tale: Snow White" },
  { id: 457, file: "sidecar_457_fairy_rapunzel_gold.png", label: "Fairy Tale: Rapunzel's Tower" },
  { id: 458, file: "sidecar_458_fairy_elsa_ice_palace_cyan.png", label: "Fairy Tale: Ice Crystal Palace" },
  { id: 459, file: "sidecar_459_fairy_atlantica_seagreen.png", label: "Fairy Tale: Atlantica" },
  { id: 460, file: "sidecar_460_fairy_agrabah_gold.png", label: "Fairy Tale: Palace of Agrabah" },
  { id: 461, file: "sidecar_461_fairy_gingerbread_red.png", label: "Fairy Tale: Gingerbread" },
  { id: 462, file: "sidecar_462_fairy_maleficent_violet.png", label: "Fairy Tale: Maleficent's" },
  { id: 463, file: "sidecar_463_fairy_beanstalk_giant_green.png", label: "Fairy Tale: Giant's Sky" },
  { id: 464, file: "sidecar_464_fairy_mulan_imperial_red.png", label: "Fairy Tale: Imperial Palace" },
  { id: 465, file: "sidecar_465_fairy_frog_prince_teal.png", label: "Fairy Tale: Bayou Palace" },
  { id: 466, file: "sidecar_466_fairy_three_pigs_brick.png", label: "Fairy Tale: Brick" },
  { id: 467, file: "sidecar_467_fairy_puss_boots_copper.png", label: "Fairy Tale: Marquis" },
  { id: 468, file: "sidecar_468_fairy_thumbelina_lavender.png", label: "Fairy Tale: Thumbelina's Kingdom" },
  { id: 469, file: "sidecar_469_fairy_snow_queen_silver.png", label: "Fairy Tale: Snow Queen's Fortress" },
  { id: 470, file: "sidecar_470_fairy_ali_baba_amber.png", label: "Fairy Tale: Ali Baba's Cave" },
  { id: 471, file: "sidecar_471_fairy_camelot_royal_blue.png", label: "Fairy Tale: Camelot" },
  { id: 472, file: "sidecar_472_fairy_emerald_city_green.png", label: "Fairy Tale: Emerald City" },
  // ===== V2 LOGOS (product-aware, generated from prompts-v2.json) =====
  { id: 1001, file: "001_bike-classic_mono-flat.png", label: "Bike Classic · Mono Flat", dir: "logos-v2" },
  { id: 1002, file: "002_bike-modern_dark-terminal.png", label: "Bike Modern · Dark Terminal", dir: "logos-v2" },
  { id: 1003, file: "003_bike-scooter_brutalist-paper.png", label: "Bike Scooter · Brutalist Paper", dir: "logos-v2" },
  { id: 1004, file: "004_bike-cafe-racer_aurora-warm.png", label: "Bike Cafe Racer · Aurora Warm", dir: "logos-v2" },
  { id: 1005, file: "005_bike-cruiser_editorial-mono.png", label: "Bike Cruiser · Editorial Mono", dir: "logos-v2" },
  { id: 1006, file: "006_bike-russian_neon-pink-cyan.png", label: "Bike Russian · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1007, file: "007_bike-iso_synthwave.png", label: "Bike Iso · Synthwave", dir: "logos-v2" },
  { id: 1008, file: "008_bike-front_vintage-cream.png", label: "Bike Front · Vintage Cream", dir: "logos-v2" },
  { id: 1009, file: "009_bike-rear_blueprint-cyan.png", label: "Bike Rear · Blueprint Cyan", dir: "logos-v2" },
  { id: 1010, file: "010_bike-silhouette_isometric-pastel.png", label: "Bike Silhouette · Isometric Pastel", dir: "logos-v2" },
  { id: 1011, file: "011_docker-bike_cyberpunk-magenta.png", label: "Docker Bike · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1012, file: "012_docker-bike-stacked_riso-print.png", label: "Docker Bike Stacked · Riso Print", dir: "logos-v2" },
  { id: 1013, file: "013_docker-whale-bike_paper-cut-layered.png", label: "Docker Whale Bike · Paper Cut Layered", dir: "logos-v2" },
  { id: 1014, file: "014_docker-whale-sidecar_watercolor-soft.png", label: "Docker Whale Sidecar · Watercolor Soft", dir: "logos-v2" },
  { id: 1015, file: "015_docker-cube-bike_ink-sumi.png", label: "Docker Cube Bike · Ink Sumi", dir: "logos-v2" },
  { id: 1016, file: "016_ip-tag_etching-engraved.png", label: "Ip Tag · Etching Engraved", dir: "logos-v2" },
  { id: 1017, file: "017_ip-license_retro-orange-brown.png", label: "Ip License · Retro Orange Brown", dir: "logos-v2" },
  { id: 1018, file: "018_ipv6-license_retro-pixel.png", label: "Ipv6 License · Retro Pixel", dir: "logos-v2" },
  { id: 1019, file: "019_ip-balloon_y2k-chrome.png", label: "Ip Balloon · Y2k Chrome", dir: "logos-v2" },
  { id: 1020, file: "020_ip-flag_memphis-pop.png", label: "Ip Flag · Memphis Pop", dir: "logos-v2" },
  { id: 1021, file: "021_tunnel-pipe_bauhaus-primary.png", label: "Tunnel Pipe · Bauhaus Primary", dir: "logos-v2" },
  { id: 1022, file: "022_tunnel-wormhole_art-deco-gold.png", label: "Tunnel Wormhole · Art Deco Gold", dir: "logos-v2" },
  { id: 1023, file: "023_tunnel-pipes_art-nouveau-vine.png", label: "Tunnel Pipes · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1024, file: "024_tunnel-route_swiss-grid.png", label: "Tunnel Route · Swiss Grid", dir: "logos-v2" },
  { id: 1025, file: "025_network-graph_punk-photocopy.png", label: "Network Graph · Punk Photocopy", dir: "logos-v2" },
  { id: 1026, file: "026_network-mesh_zine-collage.png", label: "Network Mesh · Zine Collage", dir: "logos-v2" },
  { id: 1027, file: "027_network-radar_vaporwave-gradient.png", label: "Network Radar · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1028, file: "028_globe-bike_matrix-green.png", label: "Globe Bike · Matrix Green", dir: "logos-v2" },
  { id: 1029, file: "029_globe-pins_graph-paper.png", label: "Globe Pins · Graph Paper", dir: "logos-v2" },
  { id: 1030, file: "030_globe-orbit_holographic.png", label: "Globe Orbit · Holographic", dir: "logos-v2" },
  { id: 1031, file: "031_globe-flat-map_chrome-3d-render.png", label: "Globe Flat Map · Chrome 3d Render", dir: "logos-v2" },
  { id: 1032, file: "032_padlock-bike_clay-3d-render.png", label: "Padlock Bike · Clay 3d Render", dir: "logos-v2" },
  { id: 1033, file: "033_shield-bike_photoreal-bike.png", label: "Shield Bike · Photoreal Bike", dir: "logos-v2" },
  { id: 1034, file: "034_key-bike_flat-duotone-mint.png", label: "Key Bike · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1035, file: "035_terminal-window_flat-duotone-coral.png", label: "Terminal Window · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1036, file: "036_terminal-ascii_flat-duotone-yellow.png", label: "Terminal Ascii · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1037, file: "037_terminal-cursor_minimal-line.png", label: "Terminal Cursor · Minimal Line", dir: "logos-v2" },
  { id: 1038, file: "038_yaml-snippet_minimal-line-thick.png", label: "Yaml Snippet · Minimal Line Thick", dir: "logos-v2" },
  { id: 1039, file: "039_cli-prompt_scrappy-handdrawn.png", label: "Cli Prompt · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1040, file: "040_monogram-s_crayon.png", label: "Monogram S · Crayon", dir: "logos-v2" },
  { id: 1041, file: "041_monogram-s-shield_embroidery.png", label: "Monogram S Shield · Embroidery", dir: "logos-v2" },
  { id: 1042, file: "042_hexagon-logo_denim-patch.png", label: "Hexagon Logo · Denim Patch", dir: "logos-v2" },
  { id: 1043, file: "043_circle-logo_graffiti-spray.png", label: "Circle Logo · Graffiti Spray", dir: "logos-v2" },
  { id: 1044, file: "044_square-logo_postage-vintage.png", label: "Square Logo · Postage Vintage", dir: "logos-v2" },
  { id: 1045, file: "045_container-wheels_mid-century.png", label: "Container Wheels · Mid Century", dir: "logos-v2" },
  { id: 1046, file: "046_cargo-bike_scandi-minimal.png", label: "Cargo Bike · Scandi Minimal", dir: "logos-v2" },
  { id: 1047, file: "047_delivery-truck_japanese-modern.png", label: "Delivery Truck · Japanese Modern", dir: "logos-v2" },
  { id: 1048, file: "048_packet-flow_mexican-folk.png", label: "Packet Flow · Mexican Folk", dir: "logos-v2" },
  { id: 1049, file: "049_data-stream_nordic-runic.png", label: "Data Stream · Nordic Runic", dir: "logos-v2" },
  { id: 1050, file: "050_ones-zeros_typewriter-mono.png", label: "Ones Zeros · Typewriter Mono", dir: "logos-v2" },
  { id: 1051, file: "051_highway-icon_mono-flat.png", label: "Highway Icon · Mono Flat", dir: "logos-v2" },
  { id: 1052, file: "052_route-marker_dark-terminal.png", label: "Route Marker · Dark Terminal", dir: "logos-v2" },
  { id: 1053, file: "053_stamp-passport_brutalist-paper.png", label: "Stamp Passport · Brutalist Paper", dir: "logos-v2" },
  { id: 1054, file: "054_wax-seal_aurora-warm.png", label: "Wax Seal · Aurora Warm", dir: "logos-v2" },
  { id: 1055, file: "055_patch-embroidered_editorial-mono.png", label: "Patch Embroidered · Editorial Mono", dir: "logos-v2" },
  { id: 1056, file: "056_decal-sticker_neon-pink-cyan.png", label: "Decal Sticker · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1057, file: "057_antenna-bike_synthwave.png", label: "Antenna Bike · Synthwave", dir: "logos-v2" },
  { id: 1058, file: "058_beacon_vintage-cream.png", label: "Beacon · Vintage Cream", dir: "logos-v2" },
  { id: 1059, file: "059_plug-socket_blueprint-cyan.png", label: "Plug Socket · Blueprint Cyan", dir: "logos-v2" },
  { id: 1060, file: "060_origami_isometric-pastel.png", label: "Origami · Isometric Pastel", dir: "logos-v2" },
  { id: 1061, file: "061_paper-cut_cyberpunk-magenta.png", label: "Paper Cut · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1062, file: "062_pixel-art_riso-print.png", label: "Pixel Art · Riso Print", dir: "logos-v2" },
  { id: 1063, file: "063_vector-flat_paper-cut-layered.png", label: "Vector Flat · Paper Cut Layered", dir: "logos-v2" },
  { id: 1064, file: "064_line-art_watercolor-soft.png", label: "Line Art · Watercolor Soft", dir: "logos-v2" },
  { id: 1065, file: "065_blueprint_ink-sumi.png", label: "Blueprint · Ink Sumi", dir: "logos-v2" },
  { id: 1066, file: "066_schematic_etching-engraved.png", label: "Schematic · Etching Engraved", dir: "logos-v2" },
  { id: 1067, file: "067_low-poly_retro-orange-brown.png", label: "Low Poly · Retro Orange Brown", dir: "logos-v2" },
  { id: 1068, file: "068_3d-render_retro-pixel.png", label: "3d Render · Retro Pixel", dir: "logos-v2" },
  { id: 1069, file: "069_chrome-3d_y2k-chrome.png", label: "Chrome 3d · Y2k Chrome", dir: "logos-v2" },
  { id: 1070, file: "070_metallic-3d_memphis-pop.png", label: "Metallic 3d · Memphis Pop", dir: "logos-v2" },
  { id: 1071, file: "071_graffiti_bauhaus-primary.png", label: "Graffiti · Bauhaus Primary", dir: "logos-v2" },
  { id: 1072, file: "072_stencil_art-deco-gold.png", label: "Stencil · Art Deco Gold", dir: "logos-v2" },
  { id: 1073, file: "073_retro-80s_art-nouveau-vine.png", label: "Retro 80s · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1074, file: "074_retro-70s_swiss-grid.png", label: "Retro 70s · Swiss Grid", dir: "logos-v2" },
  { id: 1075, file: "075_retro-90s_punk-photocopy.png", label: "Retro 90s · Punk Photocopy", dir: "logos-v2" },
  { id: 1076, file: "076_retro-50s_zine-collage.png", label: "Retro 50s · Zine Collage", dir: "logos-v2" },
  { id: 1077, file: "077_hand-drawn_vaporwave-gradient.png", label: "Hand Drawn · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1078, file: "078_watercolor_matrix-green.png", label: "Watercolor · Matrix Green", dir: "logos-v2" },
  { id: 1079, file: "079_ink-wash_graph-paper.png", label: "Ink Wash · Graph Paper", dir: "logos-v2" },
  { id: 1080, file: "080_charcoal_holographic.png", label: "Charcoal · Holographic", dir: "logos-v2" },
  { id: 1081, file: "081_aurora-bike_chrome-3d-render.png", label: "Aurora Bike · Chrome 3d Render", dir: "logos-v2" },
  { id: 1082, file: "082_aurora-mono_clay-3d-render.png", label: "Aurora Mono · Clay 3d Render", dir: "logos-v2" },
  { id: 1083, file: "083_brutalist-poster_photoreal-bike.png", label: "Brutalist Poster · Photoreal Bike", dir: "logos-v2" },
  { id: 1084, file: "084_brutalist-newspaper_flat-duotone-mint.png", label: "Brutalist Newspaper · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1085, file: "085_editorial-clean_flat-duotone-coral.png", label: "Editorial Clean · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1086, file: "086_editorial-serif_flat-duotone-yellow.png", label: "Editorial Serif · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1087, file: "087_neon-tube_minimal-line.png", label: "Neon Tube · Minimal Line", dir: "logos-v2" },
  { id: 1088, file: "088_neon-electric_minimal-line-thick.png", label: "Neon Electric · Minimal Line Thick", dir: "logos-v2" },
  { id: 1089, file: "089_dot-matrix_scrappy-handdrawn.png", label: "Dot Matrix · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1090, file: "090_halftone_crayon.png", label: "Halftone · Crayon", dir: "logos-v2" },
  { id: 1091, file: "091_crest_embroidery.png", label: "Crest · Embroidery", dir: "logos-v2" },
  { id: 1092, file: "092_emblem_denim-patch.png", label: "Emblem · Denim Patch", dir: "logos-v2" },
  { id: 1093, file: "093_club-badge_graffiti-spray.png", label: "Club Badge · Graffiti Spray", dir: "logos-v2" },
  { id: 1094, file: "094_topology-tree_postage-vintage.png", label: "Topology Tree · Postage Vintage", dir: "logos-v2" },
  { id: 1095, file: "095_topology-star_mid-century.png", label: "Topology Star · Mid Century", dir: "logos-v2" },
  { id: 1096, file: "096_topology-ring_scandi-minimal.png", label: "Topology Ring · Scandi Minimal", dir: "logos-v2" },
  { id: 1097, file: "097_constellation_japanese-modern.png", label: "Constellation · Japanese Modern", dir: "logos-v2" },
  { id: 1098, file: "098_star-trail_mexican-folk.png", label: "Star Trail · Mexican Folk", dir: "logos-v2" },
  { id: 1099, file: "099_sidecar-icon-only_nordic-runic.png", label: "Sidecar Icon Only · Nordic Runic", dir: "logos-v2" },
  { id: 1100, file: "100_sidecar-empty_typewriter-mono.png", label: "Sidecar Empty · Typewriter Mono", dir: "logos-v2" },
  { id: 1101, file: "101_sidecar-cargo_mono-flat.png", label: "Sidecar Cargo · Mono Flat", dir: "logos-v2" },
  { id: 1102, file: "102_road-trip_dark-terminal.png", label: "Road Trip · Dark Terminal", dir: "logos-v2" },
  { id: 1103, file: "103_city-skyline_brutalist-paper.png", label: "City Skyline · Brutalist Paper", dir: "logos-v2" },
  { id: 1104, file: "104_mountain_aurora-warm.png", label: "Mountain · Aurora Warm", dir: "logos-v2" },
  { id: 1105, file: "105_postage-stamp_editorial-mono.png", label: "Postage Stamp · Editorial Mono", dir: "logos-v2" },
  { id: 1106, file: "106_currency-note_neon-pink-cyan.png", label: "Currency Note · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1107, file: "107_etching_synthwave.png", label: "Etching · Synthwave", dir: "logos-v2" },
  { id: 1108, file: "108_typography-only_vintage-cream.png", label: "Typography Only · Vintage Cream", dir: "logos-v2" },
  { id: 1109, file: "109_ligature_blueprint-cyan.png", label: "Ligature · Blueprint Cyan", dir: "logos-v2" },
  { id: 1110, file: "110_split-color-text_isometric-pastel.png", label: "Split Color Text · Isometric Pastel", dir: "logos-v2" },
  { id: 1111, file: "111_outline-text_cyberpunk-magenta.png", label: "Outline Text · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1112, file: "112_3d-text_riso-print.png", label: "3d Text · Riso Print", dir: "logos-v2" },
  { id: 1113, file: "113_brand-icon-tag_paper-cut-layered.png", label: "Brand Icon Tag · Paper Cut Layered", dir: "logos-v2" },
  { id: 1114, file: "114_sticker-pack_watercolor-soft.png", label: "Sticker Pack · Watercolor Soft", dir: "logos-v2" },
  { id: 1115, file: "115_data-center_ink-sumi.png", label: "Data Center · Ink Sumi", dir: "logos-v2" },
  { id: 1116, file: "116_server-rack_etching-engraved.png", label: "Server Rack · Etching Engraved", dir: "logos-v2" },
  { id: 1117, file: "117_packet-envelope_retro-orange-brown.png", label: "Packet Envelope · Retro Orange Brown", dir: "logos-v2" },
  { id: 1118, file: "118_mailbag_retro-pixel.png", label: "Mailbag · Retro Pixel", dir: "logos-v2" },
  { id: 1119, file: "119_compass-bike_y2k-chrome.png", label: "Compass Bike · Y2k Chrome", dir: "logos-v2" },
  { id: 1120, file: "120_anchor-bike_memphis-pop.png", label: "Anchor Bike · Memphis Pop", dir: "logos-v2" },
  { id: 1121, file: "121_speedometer_bauhaus-primary.png", label: "Speedometer · Bauhaus Primary", dir: "logos-v2" },
  { id: 1122, file: "122_tachometer_art-deco-gold.png", label: "Tachometer · Art Deco Gold", dir: "logos-v2" },
  { id: 1123, file: "123_typographic-sidecar_art-nouveau-vine.png", label: "Typographic Sidecar · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1124, file: "124_hidden-bike_swiss-grid.png", label: "Hidden Bike · Swiss Grid", dir: "logos-v2" },
  { id: 1125, file: "125_negative-space_punk-photocopy.png", label: "Negative Space · Punk Photocopy", dir: "logos-v2" },
  { id: 1126, file: "126_origin-marker_zine-collage.png", label: "Origin Marker · Zine Collage", dir: "logos-v2" },
  { id: 1127, file: "127_ping-marker_vaporwave-gradient.png", label: "Ping Marker · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1128, file: "128_speed-lines_matrix-green.png", label: "Speed Lines · Matrix Green", dir: "logos-v2" },
  { id: 1129, file: "129_burnout_graph-paper.png", label: "Burnout · Graph Paper", dir: "logos-v2" },
  { id: 1130, file: "130_art-deco_holographic.png", label: "Art Deco · Holographic", dir: "logos-v2" },
  { id: 1131, file: "131_art-nouveau_chrome-3d-render.png", label: "Art Nouveau · Chrome 3d Render", dir: "logos-v2" },
  { id: 1132, file: "132_bauhaus_clay-3d-render.png", label: "Bauhaus · Clay 3d Render", dir: "logos-v2" },
  { id: 1133, file: "133_memphis_photoreal-bike.png", label: "Memphis · Photoreal Bike", dir: "logos-v2" },
  { id: 1134, file: "134_vaporwave_flat-duotone-mint.png", label: "Vaporwave · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1135, file: "135_matrix-rain_flat-duotone-coral.png", label: "Matrix Rain · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1136, file: "136_circuit-board_flat-duotone-yellow.png", label: "Circuit Board · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1137, file: "137_rubber-stamp_minimal-line.png", label: "Rubber Stamp · Minimal Line", dir: "logos-v2" },
  { id: 1138, file: "138_logo-mark-mono_minimal-line-thick.png", label: "Logo Mark Mono · Minimal Line Thick", dir: "logos-v2" },
  { id: 1139, file: "139_favicon-style_scrappy-handdrawn.png", label: "Favicon Style · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1140, file: "140_character-mascot_crayon.png", label: "Character Mascot · Crayon", dir: "logos-v2" },
  { id: 1141, file: "141_mascot-wave_embroidery.png", label: "Mascot Wave · Embroidery", dir: "logos-v2" },
  { id: 1142, file: "142_retro-arcade_denim-patch.png", label: "Retro Arcade · Denim Patch", dir: "logos-v2" },
  { id: 1143, file: "143_game-boy_graffiti-spray.png", label: "Game Boy · Graffiti Spray", dir: "logos-v2" },
  { id: 1144, file: "144_medieval-shield_postage-vintage.png", label: "Medieval Shield · Postage Vintage", dir: "logos-v2" },
  { id: 1145, file: "145_heraldic_mid-century.png", label: "Heraldic · Mid Century", dir: "logos-v2" },
  { id: 1146, file: "146_anatomy-callouts_scandi-minimal.png", label: "Anatomy Callouts · Scandi Minimal", dir: "logos-v2" },
  { id: 1147, file: "147_xray_japanese-modern.png", label: "Xray · Japanese Modern", dir: "logos-v2" },
  { id: 1148, file: "148_japanese-poster_mexican-folk.png", label: "Japanese Poster · Mexican Folk", dir: "logos-v2" },
  { id: 1149, file: "149_italian-poster_nordic-runic.png", label: "Italian Poster · Nordic Runic", dir: "logos-v2" },
  { id: 1150, file: "150_racing-team_typewriter-mono.png", label: "Racing Team · Typewriter Mono", dir: "logos-v2" },
  { id: 1151, file: "151_rally-livery_mono-flat.png", label: "Rally Livery · Mono Flat", dir: "logos-v2" },
  { id: 1152, file: "152_polaroid_dark-terminal.png", label: "Polaroid · Dark Terminal", dir: "logos-v2" },
  { id: 1153, file: "153_instant-camera_brutalist-paper.png", label: "Instant Camera · Brutalist Paper", dir: "logos-v2" },
  { id: 1154, file: "154_bento-grid_aurora-warm.png", label: "Bento Grid · Aurora Warm", dir: "logos-v2" },
  { id: 1155, file: "155_magazine-cover_editorial-mono.png", label: "Magazine Cover · Editorial Mono", dir: "logos-v2" },
  { id: 1156, file: "156_zine-cover_neon-pink-cyan.png", label: "Zine Cover · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1157, file: "157_punk-poster_synthwave.png", label: "Punk Poster · Synthwave", dir: "logos-v2" },
  { id: 1158, file: "158_infrastructure-icon_vintage-cream.png", label: "Infrastructure Icon · Vintage Cream", dir: "logos-v2" },
  { id: 1159, file: "159_k8s-style_blueprint-cyan.png", label: "K8s Style · Blueprint Cyan", dir: "logos-v2" },
  { id: 1160, file: "160_dns-tree_isometric-pastel.png", label: "Dns Tree · Isometric Pastel", dir: "logos-v2" },
  { id: 1161, file: "161_router-flow_cyberpunk-magenta.png", label: "Router Flow · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1162, file: "162_ipv4-puzzle_riso-print.png", label: "Ipv4 Puzzle · Riso Print", dir: "logos-v2" },
  { id: 1163, file: "163_ipv6-flow_paper-cut-layered.png", label: "Ipv6 Flow · Paper Cut Layered", dir: "logos-v2" },
  { id: 1164, file: "164_quantum-shield_watercolor-soft.png", label: "Quantum Shield · Watercolor Soft", dir: "logos-v2" },
  { id: 1165, file: "165_lattice_ink-sumi.png", label: "Lattice · Ink Sumi", dir: "logos-v2" },
  { id: 1166, file: "166_regions-five_etching-engraved.png", label: "Regions Five · Etching Engraved", dir: "logos-v2" },
  { id: 1167, file: "167_globe-mesh_retro-orange-brown.png", label: "Globe Mesh · Retro Orange Brown", dir: "logos-v2" },
  { id: 1168, file: "168_fade-in-out_retro-pixel.png", label: "Fade In Out · Retro Pixel", dir: "logos-v2" },
  { id: 1169, file: "169_container-orchestra_y2k-chrome.png", label: "Container Orchestra · Y2k Chrome", dir: "logos-v2" },
  { id: 1170, file: "170_portal-icon_memphis-pop.png", label: "Portal Icon · Memphis Pop", dir: "logos-v2" },
  { id: 1171, file: "171_flap-board_bauhaus-primary.png", label: "Flap Board · Bauhaus Primary", dir: "logos-v2" },
  { id: 1172, file: "172_dot-display_art-deco-gold.png", label: "Dot Display · Art Deco Gold", dir: "logos-v2" },
  { id: 1173, file: "173_bike-classic_art-nouveau-vine.png", label: "Bike Classic · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1174, file: "174_bike-modern_swiss-grid.png", label: "Bike Modern · Swiss Grid", dir: "logos-v2" },
  { id: 1175, file: "175_bike-scooter_punk-photocopy.png", label: "Bike Scooter · Punk Photocopy", dir: "logos-v2" },
  { id: 1176, file: "176_bike-cafe-racer_zine-collage.png", label: "Bike Cafe Racer · Zine Collage", dir: "logos-v2" },
  { id: 1177, file: "177_bike-cruiser_vaporwave-gradient.png", label: "Bike Cruiser · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1178, file: "178_bike-russian_matrix-green.png", label: "Bike Russian · Matrix Green", dir: "logos-v2" },
  { id: 1179, file: "179_bike-iso_graph-paper.png", label: "Bike Iso · Graph Paper", dir: "logos-v2" },
  { id: 1180, file: "180_bike-front_holographic.png", label: "Bike Front · Holographic", dir: "logos-v2" },
  { id: 1181, file: "181_bike-rear_chrome-3d-render.png", label: "Bike Rear · Chrome 3d Render", dir: "logos-v2" },
  { id: 1182, file: "182_bike-silhouette_clay-3d-render.png", label: "Bike Silhouette · Clay 3d Render", dir: "logos-v2" },
  { id: 1183, file: "183_docker-bike_photoreal-bike.png", label: "Docker Bike · Photoreal Bike", dir: "logos-v2" },
  { id: 1184, file: "184_docker-bike-stacked_flat-duotone-mint.png", label: "Docker Bike Stacked · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1185, file: "185_docker-whale-bike_flat-duotone-coral.png", label: "Docker Whale Bike · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1186, file: "186_docker-whale-sidecar_flat-duotone-yellow.png", label: "Docker Whale Sidecar · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1187, file: "187_docker-cube-bike_minimal-line.png", label: "Docker Cube Bike · Minimal Line", dir: "logos-v2" },
  { id: 1188, file: "188_ip-tag_minimal-line-thick.png", label: "Ip Tag · Minimal Line Thick", dir: "logos-v2" },
  { id: 1189, file: "189_ip-license_scrappy-handdrawn.png", label: "Ip License · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1190, file: "190_ipv6-license_crayon.png", label: "Ipv6 License · Crayon", dir: "logos-v2" },
  { id: 1191, file: "191_ip-balloon_embroidery.png", label: "Ip Balloon · Embroidery", dir: "logos-v2" },
  { id: 1192, file: "192_ip-flag_denim-patch.png", label: "Ip Flag · Denim Patch", dir: "logos-v2" },
  { id: 1193, file: "193_tunnel-pipe_graffiti-spray.png", label: "Tunnel Pipe · Graffiti Spray", dir: "logos-v2" },
  { id: 1194, file: "194_tunnel-wormhole_postage-vintage.png", label: "Tunnel Wormhole · Postage Vintage", dir: "logos-v2" },
  { id: 1195, file: "195_tunnel-pipes_mid-century.png", label: "Tunnel Pipes · Mid Century", dir: "logos-v2" },
  { id: 1196, file: "196_tunnel-route_scandi-minimal.png", label: "Tunnel Route · Scandi Minimal", dir: "logos-v2" },
  { id: 1197, file: "197_network-graph_japanese-modern.png", label: "Network Graph · Japanese Modern", dir: "logos-v2" },
  { id: 1198, file: "198_network-mesh_mexican-folk.png", label: "Network Mesh · Mexican Folk", dir: "logos-v2" },
  { id: 1199, file: "199_network-radar_nordic-runic.png", label: "Network Radar · Nordic Runic", dir: "logos-v2" },
  { id: 1200, file: "200_globe-bike_typewriter-mono.png", label: "Globe Bike · Typewriter Mono", dir: "logos-v2" },
  { id: 1201, file: "201_globe-pins_mono-flat.png", label: "Globe Pins · Mono Flat", dir: "logos-v2" },
  { id: 1202, file: "202_globe-orbit_dark-terminal.png", label: "Globe Orbit · Dark Terminal", dir: "logos-v2" },
  { id: 1203, file: "203_globe-flat-map_brutalist-paper.png", label: "Globe Flat Map · Brutalist Paper", dir: "logos-v2" },
  { id: 1204, file: "204_padlock-bike_aurora-warm.png", label: "Padlock Bike · Aurora Warm", dir: "logos-v2" },
  { id: 1205, file: "205_shield-bike_editorial-mono.png", label: "Shield Bike · Editorial Mono", dir: "logos-v2" },
  { id: 1206, file: "206_key-bike_neon-pink-cyan.png", label: "Key Bike · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1207, file: "207_terminal-window_synthwave.png", label: "Terminal Window · Synthwave", dir: "logos-v2" },
  { id: 1208, file: "208_terminal-ascii_vintage-cream.png", label: "Terminal Ascii · Vintage Cream", dir: "logos-v2" },
  { id: 1209, file: "209_terminal-cursor_blueprint-cyan.png", label: "Terminal Cursor · Blueprint Cyan", dir: "logos-v2" },
  { id: 1210, file: "210_yaml-snippet_isometric-pastel.png", label: "Yaml Snippet · Isometric Pastel", dir: "logos-v2" },
  { id: 1211, file: "211_cli-prompt_cyberpunk-magenta.png", label: "Cli Prompt · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1212, file: "212_monogram-s_riso-print.png", label: "Monogram S · Riso Print", dir: "logos-v2" },
  { id: 1213, file: "213_monogram-s-shield_paper-cut-layered.png", label: "Monogram S Shield · Paper Cut Layered", dir: "logos-v2" },
  { id: 1214, file: "214_hexagon-logo_watercolor-soft.png", label: "Hexagon Logo · Watercolor Soft", dir: "logos-v2" },
  { id: 1215, file: "215_circle-logo_ink-sumi.png", label: "Circle Logo · Ink Sumi", dir: "logos-v2" },
  { id: 1216, file: "216_square-logo_etching-engraved.png", label: "Square Logo · Etching Engraved", dir: "logos-v2" },
  { id: 1217, file: "217_container-wheels_retro-orange-brown.png", label: "Container Wheels · Retro Orange Brown", dir: "logos-v2" },
  { id: 1218, file: "218_cargo-bike_retro-pixel.png", label: "Cargo Bike · Retro Pixel", dir: "logos-v2" },
  { id: 1219, file: "219_delivery-truck_y2k-chrome.png", label: "Delivery Truck · Y2k Chrome", dir: "logos-v2" },
  { id: 1220, file: "220_packet-flow_memphis-pop.png", label: "Packet Flow · Memphis Pop", dir: "logos-v2" },
  { id: 1221, file: "221_data-stream_bauhaus-primary.png", label: "Data Stream · Bauhaus Primary", dir: "logos-v2" },
  { id: 1222, file: "222_ones-zeros_art-deco-gold.png", label: "Ones Zeros · Art Deco Gold", dir: "logos-v2" },
  { id: 1223, file: "223_highway-icon_art-nouveau-vine.png", label: "Highway Icon · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1224, file: "224_route-marker_swiss-grid.png", label: "Route Marker · Swiss Grid", dir: "logos-v2" },
  { id: 1225, file: "225_stamp-passport_punk-photocopy.png", label: "Stamp Passport · Punk Photocopy", dir: "logos-v2" },
  { id: 1226, file: "226_wax-seal_zine-collage.png", label: "Wax Seal · Zine Collage", dir: "logos-v2" },
  { id: 1227, file: "227_patch-embroidered_vaporwave-gradient.png", label: "Patch Embroidered · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1228, file: "228_decal-sticker_matrix-green.png", label: "Decal Sticker · Matrix Green", dir: "logos-v2" },
  { id: 1229, file: "229_antenna-bike_graph-paper.png", label: "Antenna Bike · Graph Paper", dir: "logos-v2" },
  { id: 1230, file: "230_beacon_holographic.png", label: "Beacon · Holographic", dir: "logos-v2" },
  { id: 1231, file: "231_plug-socket_chrome-3d-render.png", label: "Plug Socket · Chrome 3d Render", dir: "logos-v2" },
  { id: 1232, file: "232_origami_clay-3d-render.png", label: "Origami · Clay 3d Render", dir: "logos-v2" },
  { id: 1233, file: "233_paper-cut_photoreal-bike.png", label: "Paper Cut · Photoreal Bike", dir: "logos-v2" },
  { id: 1234, file: "234_pixel-art_flat-duotone-mint.png", label: "Pixel Art · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1235, file: "235_vector-flat_flat-duotone-coral.png", label: "Vector Flat · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1236, file: "236_line-art_flat-duotone-yellow.png", label: "Line Art · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1237, file: "237_blueprint_minimal-line.png", label: "Blueprint · Minimal Line", dir: "logos-v2" },
  { id: 1238, file: "238_schematic_minimal-line-thick.png", label: "Schematic · Minimal Line Thick", dir: "logos-v2" },
  { id: 1239, file: "239_low-poly_scrappy-handdrawn.png", label: "Low Poly · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1240, file: "240_3d-render_crayon.png", label: "3d Render · Crayon", dir: "logos-v2" },
  { id: 1241, file: "241_chrome-3d_embroidery.png", label: "Chrome 3d · Embroidery", dir: "logos-v2" },
  { id: 1242, file: "242_metallic-3d_denim-patch.png", label: "Metallic 3d · Denim Patch", dir: "logos-v2" },
  { id: 1243, file: "243_graffiti_graffiti-spray.png", label: "Graffiti · Graffiti Spray", dir: "logos-v2" },
  { id: 1244, file: "244_stencil_postage-vintage.png", label: "Stencil · Postage Vintage", dir: "logos-v2" },
  { id: 1245, file: "245_retro-80s_mid-century.png", label: "Retro 80s · Mid Century", dir: "logos-v2" },
  { id: 1246, file: "246_retro-70s_scandi-minimal.png", label: "Retro 70s · Scandi Minimal", dir: "logos-v2" },
  { id: 1247, file: "247_retro-90s_japanese-modern.png", label: "Retro 90s · Japanese Modern", dir: "logos-v2" },
  { id: 1248, file: "248_retro-50s_mexican-folk.png", label: "Retro 50s · Mexican Folk", dir: "logos-v2" },
  { id: 1249, file: "249_hand-drawn_nordic-runic.png", label: "Hand Drawn · Nordic Runic", dir: "logos-v2" },
  { id: 1250, file: "250_watercolor_typewriter-mono.png", label: "Watercolor · Typewriter Mono", dir: "logos-v2" },
  { id: 1251, file: "251_ink-wash_mono-flat.png", label: "Ink Wash · Mono Flat", dir: "logos-v2" },
  { id: 1252, file: "252_charcoal_dark-terminal.png", label: "Charcoal · Dark Terminal", dir: "logos-v2" },
  { id: 1253, file: "253_aurora-bike_brutalist-paper.png", label: "Aurora Bike · Brutalist Paper", dir: "logos-v2" },
  { id: 1254, file: "254_aurora-mono_aurora-warm.png", label: "Aurora Mono · Aurora Warm", dir: "logos-v2" },
  { id: 1255, file: "255_brutalist-poster_editorial-mono.png", label: "Brutalist Poster · Editorial Mono", dir: "logos-v2" },
  { id: 1256, file: "256_brutalist-newspaper_neon-pink-cyan.png", label: "Brutalist Newspaper · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1257, file: "257_editorial-clean_synthwave.png", label: "Editorial Clean · Synthwave", dir: "logos-v2" },
  { id: 1258, file: "258_editorial-serif_vintage-cream.png", label: "Editorial Serif · Vintage Cream", dir: "logos-v2" },
  { id: 1259, file: "259_neon-tube_blueprint-cyan.png", label: "Neon Tube · Blueprint Cyan", dir: "logos-v2" },
  { id: 1260, file: "260_neon-electric_isometric-pastel.png", label: "Neon Electric · Isometric Pastel", dir: "logos-v2" },
  { id: 1261, file: "261_dot-matrix_cyberpunk-magenta.png", label: "Dot Matrix · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1262, file: "262_halftone_riso-print.png", label: "Halftone · Riso Print", dir: "logos-v2" },
  { id: 1263, file: "263_crest_paper-cut-layered.png", label: "Crest · Paper Cut Layered", dir: "logos-v2" },
  { id: 1264, file: "264_emblem_watercolor-soft.png", label: "Emblem · Watercolor Soft", dir: "logos-v2" },
  { id: 1265, file: "265_club-badge_ink-sumi.png", label: "Club Badge · Ink Sumi", dir: "logos-v2" },
  { id: 1266, file: "266_topology-tree_etching-engraved.png", label: "Topology Tree · Etching Engraved", dir: "logos-v2" },
  { id: 1267, file: "267_topology-star_retro-orange-brown.png", label: "Topology Star · Retro Orange Brown", dir: "logos-v2" },
  { id: 1268, file: "268_topology-ring_retro-pixel.png", label: "Topology Ring · Retro Pixel", dir: "logos-v2" },
  { id: 1269, file: "269_constellation_y2k-chrome.png", label: "Constellation · Y2k Chrome", dir: "logos-v2" },
  { id: 1270, file: "270_star-trail_memphis-pop.png", label: "Star Trail · Memphis Pop", dir: "logos-v2" },
  { id: 1271, file: "271_sidecar-icon-only_bauhaus-primary.png", label: "Sidecar Icon Only · Bauhaus Primary", dir: "logos-v2" },
  { id: 1272, file: "272_sidecar-empty_art-deco-gold.png", label: "Sidecar Empty · Art Deco Gold", dir: "logos-v2" },
  { id: 1273, file: "273_sidecar-cargo_art-nouveau-vine.png", label: "Sidecar Cargo · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1274, file: "274_road-trip_swiss-grid.png", label: "Road Trip · Swiss Grid", dir: "logos-v2" },
  { id: 1275, file: "275_city-skyline_punk-photocopy.png", label: "City Skyline · Punk Photocopy", dir: "logos-v2" },
  { id: 1276, file: "276_mountain_zine-collage.png", label: "Mountain · Zine Collage", dir: "logos-v2" },
  { id: 1277, file: "277_postage-stamp_vaporwave-gradient.png", label: "Postage Stamp · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1278, file: "278_currency-note_matrix-green.png", label: "Currency Note · Matrix Green", dir: "logos-v2" },
  { id: 1279, file: "279_etching_graph-paper.png", label: "Etching · Graph Paper", dir: "logos-v2" },
  { id: 1280, file: "280_typography-only_holographic.png", label: "Typography Only · Holographic", dir: "logos-v2" },
  { id: 1281, file: "281_ligature_chrome-3d-render.png", label: "Ligature · Chrome 3d Render", dir: "logos-v2" },
  { id: 1282, file: "282_split-color-text_clay-3d-render.png", label: "Split Color Text · Clay 3d Render", dir: "logos-v2" },
  { id: 1283, file: "283_outline-text_photoreal-bike.png", label: "Outline Text · Photoreal Bike", dir: "logos-v2" },
  { id: 1284, file: "284_3d-text_flat-duotone-mint.png", label: "3d Text · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1285, file: "285_brand-icon-tag_flat-duotone-coral.png", label: "Brand Icon Tag · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1286, file: "286_sticker-pack_flat-duotone-yellow.png", label: "Sticker Pack · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1287, file: "287_data-center_minimal-line.png", label: "Data Center · Minimal Line", dir: "logos-v2" },
  { id: 1288, file: "288_server-rack_minimal-line-thick.png", label: "Server Rack · Minimal Line Thick", dir: "logos-v2" },
  { id: 1289, file: "289_packet-envelope_scrappy-handdrawn.png", label: "Packet Envelope · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1290, file: "290_mailbag_crayon.png", label: "Mailbag · Crayon", dir: "logos-v2" },
  { id: 1291, file: "291_compass-bike_embroidery.png", label: "Compass Bike · Embroidery", dir: "logos-v2" },
  { id: 1292, file: "292_anchor-bike_denim-patch.png", label: "Anchor Bike · Denim Patch", dir: "logos-v2" },
  { id: 1293, file: "293_speedometer_graffiti-spray.png", label: "Speedometer · Graffiti Spray", dir: "logos-v2" },
  { id: 1294, file: "294_tachometer_postage-vintage.png", label: "Tachometer · Postage Vintage", dir: "logos-v2" },
  { id: 1295, file: "295_typographic-sidecar_mid-century.png", label: "Typographic Sidecar · Mid Century", dir: "logos-v2" },
  { id: 1296, file: "296_hidden-bike_scandi-minimal.png", label: "Hidden Bike · Scandi Minimal", dir: "logos-v2" },
  { id: 1297, file: "297_negative-space_japanese-modern.png", label: "Negative Space · Japanese Modern", dir: "logos-v2" },
  { id: 1298, file: "298_origin-marker_mexican-folk.png", label: "Origin Marker · Mexican Folk", dir: "logos-v2" },
  { id: 1299, file: "299_ping-marker_nordic-runic.png", label: "Ping Marker · Nordic Runic", dir: "logos-v2" },
  { id: 1300, file: "300_speed-lines_typewriter-mono.png", label: "Speed Lines · Typewriter Mono", dir: "logos-v2" },
  { id: 1301, file: "301_burnout_mono-flat.png", label: "Burnout · Mono Flat", dir: "logos-v2" },
  { id: 1302, file: "302_art-deco_dark-terminal.png", label: "Art Deco · Dark Terminal", dir: "logos-v2" },
  { id: 1303, file: "303_art-nouveau_brutalist-paper.png", label: "Art Nouveau · Brutalist Paper", dir: "logos-v2" },
  { id: 1304, file: "304_bauhaus_aurora-warm.png", label: "Bauhaus · Aurora Warm", dir: "logos-v2" },
  { id: 1305, file: "305_memphis_editorial-mono.png", label: "Memphis · Editorial Mono", dir: "logos-v2" },
  { id: 1306, file: "306_vaporwave_neon-pink-cyan.png", label: "Vaporwave · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1307, file: "307_matrix-rain_synthwave.png", label: "Matrix Rain · Synthwave", dir: "logos-v2" },
  { id: 1308, file: "308_circuit-board_vintage-cream.png", label: "Circuit Board · Vintage Cream", dir: "logos-v2" },
  { id: 1309, file: "309_rubber-stamp_blueprint-cyan.png", label: "Rubber Stamp · Blueprint Cyan", dir: "logos-v2" },
  { id: 1310, file: "310_logo-mark-mono_isometric-pastel.png", label: "Logo Mark Mono · Isometric Pastel", dir: "logos-v2" },
  { id: 1311, file: "311_favicon-style_cyberpunk-magenta.png", label: "Favicon Style · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1312, file: "312_character-mascot_riso-print.png", label: "Character Mascot · Riso Print", dir: "logos-v2" },
  { id: 1313, file: "313_mascot-wave_paper-cut-layered.png", label: "Mascot Wave · Paper Cut Layered", dir: "logos-v2" },
  { id: 1314, file: "314_retro-arcade_watercolor-soft.png", label: "Retro Arcade · Watercolor Soft", dir: "logos-v2" },
  { id: 1315, file: "315_game-boy_ink-sumi.png", label: "Game Boy · Ink Sumi", dir: "logos-v2" },
  { id: 1316, file: "316_medieval-shield_etching-engraved.png", label: "Medieval Shield · Etching Engraved", dir: "logos-v2" },
  { id: 1317, file: "317_heraldic_retro-orange-brown.png", label: "Heraldic · Retro Orange Brown", dir: "logos-v2" },
  { id: 1318, file: "318_anatomy-callouts_retro-pixel.png", label: "Anatomy Callouts · Retro Pixel", dir: "logos-v2" },
  { id: 1319, file: "319_xray_y2k-chrome.png", label: "Xray · Y2k Chrome", dir: "logos-v2" },
  { id: 1320, file: "320_japanese-poster_memphis-pop.png", label: "Japanese Poster · Memphis Pop", dir: "logos-v2" },
  { id: 1321, file: "321_italian-poster_bauhaus-primary.png", label: "Italian Poster · Bauhaus Primary", dir: "logos-v2" },
  { id: 1322, file: "322_racing-team_art-deco-gold.png", label: "Racing Team · Art Deco Gold", dir: "logos-v2" },
  { id: 1323, file: "323_rally-livery_art-nouveau-vine.png", label: "Rally Livery · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1324, file: "324_polaroid_swiss-grid.png", label: "Polaroid · Swiss Grid", dir: "logos-v2" },
  { id: 1325, file: "325_instant-camera_punk-photocopy.png", label: "Instant Camera · Punk Photocopy", dir: "logos-v2" },
  { id: 1326, file: "326_bento-grid_zine-collage.png", label: "Bento Grid · Zine Collage", dir: "logos-v2" },
  { id: 1327, file: "327_magazine-cover_vaporwave-gradient.png", label: "Magazine Cover · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1328, file: "328_zine-cover_matrix-green.png", label: "Zine Cover · Matrix Green", dir: "logos-v2" },
  { id: 1329, file: "329_punk-poster_graph-paper.png", label: "Punk Poster · Graph Paper", dir: "logos-v2" },
  { id: 1330, file: "330_infrastructure-icon_holographic.png", label: "Infrastructure Icon · Holographic", dir: "logos-v2" },
  { id: 1331, file: "331_k8s-style_chrome-3d-render.png", label: "K8s Style · Chrome 3d Render", dir: "logos-v2" },
  { id: 1332, file: "332_dns-tree_clay-3d-render.png", label: "Dns Tree · Clay 3d Render", dir: "logos-v2" },
  { id: 1333, file: "333_router-flow_photoreal-bike.png", label: "Router Flow · Photoreal Bike", dir: "logos-v2" },
  { id: 1334, file: "334_ipv4-puzzle_flat-duotone-mint.png", label: "Ipv4 Puzzle · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1335, file: "335_ipv6-flow_flat-duotone-coral.png", label: "Ipv6 Flow · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1336, file: "336_quantum-shield_flat-duotone-yellow.png", label: "Quantum Shield · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1337, file: "337_lattice_minimal-line.png", label: "Lattice · Minimal Line", dir: "logos-v2" },
  { id: 1338, file: "338_regions-five_minimal-line-thick.png", label: "Regions Five · Minimal Line Thick", dir: "logos-v2" },
  { id: 1339, file: "339_globe-mesh_scrappy-handdrawn.png", label: "Globe Mesh · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1340, file: "340_fade-in-out_crayon.png", label: "Fade In Out · Crayon", dir: "logos-v2" },
  { id: 1341, file: "341_container-orchestra_embroidery.png", label: "Container Orchestra · Embroidery", dir: "logos-v2" },
  { id: 1342, file: "342_portal-icon_denim-patch.png", label: "Portal Icon · Denim Patch", dir: "logos-v2" },
  { id: 1343, file: "343_flap-board_graffiti-spray.png", label: "Flap Board · Graffiti Spray", dir: "logos-v2" },
  { id: 1344, file: "344_dot-display_postage-vintage.png", label: "Dot Display · Postage Vintage", dir: "logos-v2" },
  { id: 1345, file: "345_bike-classic_mid-century.png", label: "Bike Classic · Mid Century", dir: "logos-v2" },
  { id: 1346, file: "346_bike-modern_scandi-minimal.png", label: "Bike Modern · Scandi Minimal", dir: "logos-v2" },
  { id: 1347, file: "347_bike-scooter_japanese-modern.png", label: "Bike Scooter · Japanese Modern", dir: "logos-v2" },
  { id: 1348, file: "348_bike-cafe-racer_mexican-folk.png", label: "Bike Cafe Racer · Mexican Folk", dir: "logos-v2" },
  { id: 1349, file: "349_bike-cruiser_nordic-runic.png", label: "Bike Cruiser · Nordic Runic", dir: "logos-v2" },
  { id: 1350, file: "350_bike-russian_typewriter-mono.png", label: "Bike Russian · Typewriter Mono", dir: "logos-v2" },
  { id: 1351, file: "351_bike-iso_mono-flat.png", label: "Bike Iso · Mono Flat", dir: "logos-v2" },
  { id: 1352, file: "352_bike-front_dark-terminal.png", label: "Bike Front · Dark Terminal", dir: "logos-v2" },
  { id: 1353, file: "353_bike-rear_brutalist-paper.png", label: "Bike Rear · Brutalist Paper", dir: "logos-v2" },
  { id: 1354, file: "354_bike-silhouette_aurora-warm.png", label: "Bike Silhouette · Aurora Warm", dir: "logos-v2" },
  { id: 1355, file: "355_docker-bike_editorial-mono.png", label: "Docker Bike · Editorial Mono", dir: "logos-v2" },
  { id: 1356, file: "356_docker-bike-stacked_neon-pink-cyan.png", label: "Docker Bike Stacked · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1357, file: "357_docker-whale-bike_synthwave.png", label: "Docker Whale Bike · Synthwave", dir: "logos-v2" },
  { id: 1358, file: "358_docker-whale-sidecar_vintage-cream.png", label: "Docker Whale Sidecar · Vintage Cream", dir: "logos-v2" },
  { id: 1359, file: "359_docker-cube-bike_blueprint-cyan.png", label: "Docker Cube Bike · Blueprint Cyan", dir: "logos-v2" },
  { id: 1360, file: "360_ip-tag_isometric-pastel.png", label: "Ip Tag · Isometric Pastel", dir: "logos-v2" },
  { id: 1361, file: "361_ip-license_cyberpunk-magenta.png", label: "Ip License · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1362, file: "362_ipv6-license_riso-print.png", label: "Ipv6 License · Riso Print", dir: "logos-v2" },
  { id: 1363, file: "363_ip-balloon_paper-cut-layered.png", label: "Ip Balloon · Paper Cut Layered", dir: "logos-v2" },
  { id: 1364, file: "364_ip-flag_watercolor-soft.png", label: "Ip Flag · Watercolor Soft", dir: "logos-v2" },
  { id: 1365, file: "365_tunnel-pipe_ink-sumi.png", label: "Tunnel Pipe · Ink Sumi", dir: "logos-v2" },
  { id: 1366, file: "366_tunnel-wormhole_etching-engraved.png", label: "Tunnel Wormhole · Etching Engraved", dir: "logos-v2" },
  { id: 1367, file: "367_tunnel-pipes_retro-orange-brown.png", label: "Tunnel Pipes · Retro Orange Brown", dir: "logos-v2" },
  { id: 1368, file: "368_tunnel-route_retro-pixel.png", label: "Tunnel Route · Retro Pixel", dir: "logos-v2" },
  { id: 1369, file: "369_network-graph_y2k-chrome.png", label: "Network Graph · Y2k Chrome", dir: "logos-v2" },
  { id: 1370, file: "370_network-mesh_memphis-pop.png", label: "Network Mesh · Memphis Pop", dir: "logos-v2" },
  { id: 1371, file: "371_network-radar_bauhaus-primary.png", label: "Network Radar · Bauhaus Primary", dir: "logos-v2" },
  { id: 1372, file: "372_globe-bike_art-deco-gold.png", label: "Globe Bike · Art Deco Gold", dir: "logos-v2" },
  { id: 1373, file: "373_globe-pins_art-nouveau-vine.png", label: "Globe Pins · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1374, file: "374_globe-orbit_swiss-grid.png", label: "Globe Orbit · Swiss Grid", dir: "logos-v2" },
  { id: 1375, file: "375_globe-flat-map_punk-photocopy.png", label: "Globe Flat Map · Punk Photocopy", dir: "logos-v2" },
  { id: 1376, file: "376_padlock-bike_zine-collage.png", label: "Padlock Bike · Zine Collage", dir: "logos-v2" },
  { id: 1377, file: "377_shield-bike_vaporwave-gradient.png", label: "Shield Bike · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1378, file: "378_key-bike_matrix-green.png", label: "Key Bike · Matrix Green", dir: "logos-v2" },
  { id: 1379, file: "379_terminal-window_graph-paper.png", label: "Terminal Window · Graph Paper", dir: "logos-v2" },
  { id: 1380, file: "380_terminal-ascii_holographic.png", label: "Terminal Ascii · Holographic", dir: "logos-v2" },
  { id: 1381, file: "381_terminal-cursor_chrome-3d-render.png", label: "Terminal Cursor · Chrome 3d Render", dir: "logos-v2" },
  { id: 1382, file: "382_yaml-snippet_clay-3d-render.png", label: "Yaml Snippet · Clay 3d Render", dir: "logos-v2" },
  { id: 1383, file: "383_cli-prompt_photoreal-bike.png", label: "Cli Prompt · Photoreal Bike", dir: "logos-v2" },
  { id: 1384, file: "384_monogram-s_flat-duotone-mint.png", label: "Monogram S · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1385, file: "385_monogram-s-shield_flat-duotone-coral.png", label: "Monogram S Shield · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1386, file: "386_hexagon-logo_flat-duotone-yellow.png", label: "Hexagon Logo · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1387, file: "387_circle-logo_minimal-line.png", label: "Circle Logo · Minimal Line", dir: "logos-v2" },
  { id: 1388, file: "388_square-logo_minimal-line-thick.png", label: "Square Logo · Minimal Line Thick", dir: "logos-v2" },
  { id: 1389, file: "389_container-wheels_scrappy-handdrawn.png", label: "Container Wheels · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1390, file: "390_cargo-bike_crayon.png", label: "Cargo Bike · Crayon", dir: "logos-v2" },
  { id: 1391, file: "391_delivery-truck_embroidery.png", label: "Delivery Truck · Embroidery", dir: "logos-v2" },
  { id: 1392, file: "392_packet-flow_denim-patch.png", label: "Packet Flow · Denim Patch", dir: "logos-v2" },
  { id: 1393, file: "393_data-stream_graffiti-spray.png", label: "Data Stream · Graffiti Spray", dir: "logos-v2" },
  { id: 1394, file: "394_ones-zeros_postage-vintage.png", label: "Ones Zeros · Postage Vintage", dir: "logos-v2" },
  { id: 1395, file: "395_highway-icon_mid-century.png", label: "Highway Icon · Mid Century", dir: "logos-v2" },
  { id: 1396, file: "396_route-marker_scandi-minimal.png", label: "Route Marker · Scandi Minimal", dir: "logos-v2" },
  { id: 1397, file: "397_stamp-passport_japanese-modern.png", label: "Stamp Passport · Japanese Modern", dir: "logos-v2" },
  { id: 1398, file: "398_wax-seal_mexican-folk.png", label: "Wax Seal · Mexican Folk", dir: "logos-v2" },
  { id: 1399, file: "399_patch-embroidered_nordic-runic.png", label: "Patch Embroidered · Nordic Runic", dir: "logos-v2" },
  { id: 1400, file: "400_decal-sticker_typewriter-mono.png", label: "Decal Sticker · Typewriter Mono", dir: "logos-v2" },
  { id: 1401, file: "401_antenna-bike_mono-flat.png", label: "Antenna Bike · Mono Flat", dir: "logos-v2" },
  { id: 1402, file: "402_beacon_dark-terminal.png", label: "Beacon · Dark Terminal", dir: "logos-v2" },
  { id: 1403, file: "403_plug-socket_brutalist-paper.png", label: "Plug Socket · Brutalist Paper", dir: "logos-v2" },
  { id: 1404, file: "404_origami_aurora-warm.png", label: "Origami · Aurora Warm", dir: "logos-v2" },
  { id: 1405, file: "405_paper-cut_editorial-mono.png", label: "Paper Cut · Editorial Mono", dir: "logos-v2" },
  { id: 1406, file: "406_pixel-art_neon-pink-cyan.png", label: "Pixel Art · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1407, file: "407_vector-flat_synthwave.png", label: "Vector Flat · Synthwave", dir: "logos-v2" },
  { id: 1408, file: "408_line-art_vintage-cream.png", label: "Line Art · Vintage Cream", dir: "logos-v2" },
  { id: 1409, file: "409_blueprint_blueprint-cyan.png", label: "Blueprint · Blueprint Cyan", dir: "logos-v2" },
  { id: 1410, file: "410_schematic_isometric-pastel.png", label: "Schematic · Isometric Pastel", dir: "logos-v2" },
  { id: 1411, file: "411_low-poly_cyberpunk-magenta.png", label: "Low Poly · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1412, file: "412_3d-render_riso-print.png", label: "3d Render · Riso Print", dir: "logos-v2" },
  { id: 1413, file: "413_chrome-3d_paper-cut-layered.png", label: "Chrome 3d · Paper Cut Layered", dir: "logos-v2" },
  { id: 1414, file: "414_metallic-3d_watercolor-soft.png", label: "Metallic 3d · Watercolor Soft", dir: "logos-v2" },
  { id: 1415, file: "415_graffiti_ink-sumi.png", label: "Graffiti · Ink Sumi", dir: "logos-v2" },
  { id: 1416, file: "416_stencil_etching-engraved.png", label: "Stencil · Etching Engraved", dir: "logos-v2" },
  { id: 1417, file: "417_retro-80s_retro-orange-brown.png", label: "Retro 80s · Retro Orange Brown", dir: "logos-v2" },
  { id: 1418, file: "418_retro-70s_retro-pixel.png", label: "Retro 70s · Retro Pixel", dir: "logos-v2" },
  { id: 1419, file: "419_retro-90s_y2k-chrome.png", label: "Retro 90s · Y2k Chrome", dir: "logos-v2" },
  { id: 1420, file: "420_retro-50s_memphis-pop.png", label: "Retro 50s · Memphis Pop", dir: "logos-v2" },
  { id: 1421, file: "421_hand-drawn_bauhaus-primary.png", label: "Hand Drawn · Bauhaus Primary", dir: "logos-v2" },
  { id: 1422, file: "422_watercolor_art-deco-gold.png", label: "Watercolor · Art Deco Gold", dir: "logos-v2" },
  { id: 1423, file: "423_ink-wash_art-nouveau-vine.png", label: "Ink Wash · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1424, file: "424_charcoal_swiss-grid.png", label: "Charcoal · Swiss Grid", dir: "logos-v2" },
  { id: 1425, file: "425_aurora-bike_punk-photocopy.png", label: "Aurora Bike · Punk Photocopy", dir: "logos-v2" },
  { id: 1426, file: "426_aurora-mono_zine-collage.png", label: "Aurora Mono · Zine Collage", dir: "logos-v2" },
  { id: 1427, file: "427_brutalist-poster_vaporwave-gradient.png", label: "Brutalist Poster · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1428, file: "428_brutalist-newspaper_matrix-green.png", label: "Brutalist Newspaper · Matrix Green", dir: "logos-v2" },
  { id: 1429, file: "429_editorial-clean_graph-paper.png", label: "Editorial Clean · Graph Paper", dir: "logos-v2" },
  { id: 1430, file: "430_editorial-serif_holographic.png", label: "Editorial Serif · Holographic", dir: "logos-v2" },
  { id: 1431, file: "431_neon-tube_chrome-3d-render.png", label: "Neon Tube · Chrome 3d Render", dir: "logos-v2" },
  { id: 1432, file: "432_neon-electric_clay-3d-render.png", label: "Neon Electric · Clay 3d Render", dir: "logos-v2" },
  { id: 1433, file: "433_dot-matrix_photoreal-bike.png", label: "Dot Matrix · Photoreal Bike", dir: "logos-v2" },
  { id: 1434, file: "434_halftone_flat-duotone-mint.png", label: "Halftone · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1435, file: "435_crest_flat-duotone-coral.png", label: "Crest · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1436, file: "436_emblem_flat-duotone-yellow.png", label: "Emblem · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1437, file: "437_club-badge_minimal-line.png", label: "Club Badge · Minimal Line", dir: "logos-v2" },
  { id: 1438, file: "438_topology-tree_minimal-line-thick.png", label: "Topology Tree · Minimal Line Thick", dir: "logos-v2" },
  { id: 1439, file: "439_topology-star_scrappy-handdrawn.png", label: "Topology Star · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1440, file: "440_topology-ring_crayon.png", label: "Topology Ring · Crayon", dir: "logos-v2" },
  { id: 1441, file: "441_constellation_embroidery.png", label: "Constellation · Embroidery", dir: "logos-v2" },
  { id: 1442, file: "442_star-trail_denim-patch.png", label: "Star Trail · Denim Patch", dir: "logos-v2" },
  { id: 1443, file: "443_sidecar-icon-only_graffiti-spray.png", label: "Sidecar Icon Only · Graffiti Spray", dir: "logos-v2" },
  { id: 1444, file: "444_sidecar-empty_postage-vintage.png", label: "Sidecar Empty · Postage Vintage", dir: "logos-v2" },
  { id: 1445, file: "445_sidecar-cargo_mid-century.png", label: "Sidecar Cargo · Mid Century", dir: "logos-v2" },
  { id: 1446, file: "446_road-trip_scandi-minimal.png", label: "Road Trip · Scandi Minimal", dir: "logos-v2" },
  { id: 1447, file: "447_city-skyline_japanese-modern.png", label: "City Skyline · Japanese Modern", dir: "logos-v2" },
  { id: 1448, file: "448_mountain_mexican-folk.png", label: "Mountain · Mexican Folk", dir: "logos-v2" },
  { id: 1449, file: "449_postage-stamp_nordic-runic.png", label: "Postage Stamp · Nordic Runic", dir: "logos-v2" },
  { id: 1450, file: "450_currency-note_typewriter-mono.png", label: "Currency Note · Typewriter Mono", dir: "logos-v2" },
  { id: 1451, file: "451_etching_mono-flat.png", label: "Etching · Mono Flat", dir: "logos-v2" },
  { id: 1452, file: "452_typography-only_dark-terminal.png", label: "Typography Only · Dark Terminal", dir: "logos-v2" },
  { id: 1453, file: "453_ligature_brutalist-paper.png", label: "Ligature · Brutalist Paper", dir: "logos-v2" },
  { id: 1454, file: "454_split-color-text_aurora-warm.png", label: "Split Color Text · Aurora Warm", dir: "logos-v2" },
  { id: 1455, file: "455_outline-text_editorial-mono.png", label: "Outline Text · Editorial Mono", dir: "logos-v2" },
  { id: 1456, file: "456_3d-text_neon-pink-cyan.png", label: "3d Text · Neon Pink Cyan", dir: "logos-v2" },
  { id: 1457, file: "457_brand-icon-tag_synthwave.png", label: "Brand Icon Tag · Synthwave", dir: "logos-v2" },
  { id: 1458, file: "458_sticker-pack_vintage-cream.png", label: "Sticker Pack · Vintage Cream", dir: "logos-v2" },
  { id: 1459, file: "459_data-center_blueprint-cyan.png", label: "Data Center · Blueprint Cyan", dir: "logos-v2" },
  { id: 1460, file: "460_server-rack_isometric-pastel.png", label: "Server Rack · Isometric Pastel", dir: "logos-v2" },
  { id: 1461, file: "461_packet-envelope_cyberpunk-magenta.png", label: "Packet Envelope · Cyberpunk Magenta", dir: "logos-v2" },
  { id: 1462, file: "462_mailbag_riso-print.png", label: "Mailbag · Riso Print", dir: "logos-v2" },
  { id: 1463, file: "463_compass-bike_paper-cut-layered.png", label: "Compass Bike · Paper Cut Layered", dir: "logos-v2" },
  { id: 1464, file: "464_anchor-bike_watercolor-soft.png", label: "Anchor Bike · Watercolor Soft", dir: "logos-v2" },
  { id: 1465, file: "465_speedometer_ink-sumi.png", label: "Speedometer · Ink Sumi", dir: "logos-v2" },
  { id: 1466, file: "466_tachometer_etching-engraved.png", label: "Tachometer · Etching Engraved", dir: "logos-v2" },
  { id: 1467, file: "467_typographic-sidecar_retro-orange-brown.png", label: "Typographic Sidecar · Retro Orange Brown", dir: "logos-v2" },
  { id: 1468, file: "468_hidden-bike_retro-pixel.png", label: "Hidden Bike · Retro Pixel", dir: "logos-v2" },
  { id: 1469, file: "469_negative-space_y2k-chrome.png", label: "Negative Space · Y2k Chrome", dir: "logos-v2" },
  { id: 1470, file: "470_origin-marker_memphis-pop.png", label: "Origin Marker · Memphis Pop", dir: "logos-v2" },
  { id: 1471, file: "471_ping-marker_bauhaus-primary.png", label: "Ping Marker · Bauhaus Primary", dir: "logos-v2" },
  { id: 1472, file: "472_speed-lines_art-deco-gold.png", label: "Speed Lines · Art Deco Gold", dir: "logos-v2" },
  { id: 1473, file: "473_burnout_art-nouveau-vine.png", label: "Burnout · Art Nouveau Vine", dir: "logos-v2" },
  { id: 1474, file: "474_art-deco_swiss-grid.png", label: "Art Deco · Swiss Grid", dir: "logos-v2" },
  { id: 1475, file: "475_art-nouveau_punk-photocopy.png", label: "Art Nouveau · Punk Photocopy", dir: "logos-v2" },
  { id: 1476, file: "476_bauhaus_zine-collage.png", label: "Bauhaus · Zine Collage", dir: "logos-v2" },
  { id: 1477, file: "477_memphis_vaporwave-gradient.png", label: "Memphis · Vaporwave Gradient", dir: "logos-v2" },
  { id: 1478, file: "478_vaporwave_matrix-green.png", label: "Vaporwave · Matrix Green", dir: "logos-v2" },
  { id: 1479, file: "479_matrix-rain_graph-paper.png", label: "Matrix Rain · Graph Paper", dir: "logos-v2" },
  { id: 1480, file: "480_circuit-board_holographic.png", label: "Circuit Board · Holographic", dir: "logos-v2" },
  { id: 1481, file: "481_rubber-stamp_chrome-3d-render.png", label: "Rubber Stamp · Chrome 3d Render", dir: "logos-v2" },
  { id: 1482, file: "482_logo-mark-mono_clay-3d-render.png", label: "Logo Mark Mono · Clay 3d Render", dir: "logos-v2" },
  { id: 1483, file: "483_favicon-style_photoreal-bike.png", label: "Favicon Style · Photoreal Bike", dir: "logos-v2" },
  { id: 1484, file: "484_character-mascot_flat-duotone-mint.png", label: "Character Mascot · Flat Duotone Mint", dir: "logos-v2" },
  { id: 1485, file: "485_mascot-wave_flat-duotone-coral.png", label: "Mascot Wave · Flat Duotone Coral", dir: "logos-v2" },
  { id: 1486, file: "486_retro-arcade_flat-duotone-yellow.png", label: "Retro Arcade · Flat Duotone Yellow", dir: "logos-v2" },
  { id: 1487, file: "487_game-boy_minimal-line.png", label: "Game Boy · Minimal Line", dir: "logos-v2" },
  { id: 1488, file: "488_medieval-shield_minimal-line-thick.png", label: "Medieval Shield · Minimal Line Thick", dir: "logos-v2" },
  { id: 1489, file: "489_heraldic_scrappy-handdrawn.png", label: "Heraldic · Scrappy Handdrawn", dir: "logos-v2" },
  { id: 1490, file: "490_anatomy-callouts_crayon.png", label: "Anatomy Callouts · Crayon", dir: "logos-v2" },
  { id: 1491, file: "491_xray_embroidery.png", label: "Xray · Embroidery", dir: "logos-v2" },
  { id: 1492, file: "492_japanese-poster_denim-patch.png", label: "Japanese Poster · Denim Patch", dir: "logos-v2" },
  { id: 1493, file: "493_italian-poster_graffiti-spray.png", label: "Italian Poster · Graffiti Spray", dir: "logos-v2" },
  { id: 1494, file: "494_racing-team_postage-vintage.png", label: "Racing Team · Postage Vintage", dir: "logos-v2" },
  { id: 1495, file: "495_rally-livery_mid-century.png", label: "Rally Livery · Mid Century", dir: "logos-v2" },
  { id: 1496, file: "496_polaroid_scandi-minimal.png", label: "Polaroid · Scandi Minimal", dir: "logos-v2" },
  { id: 1497, file: "497_instant-camera_japanese-modern.png", label: "Instant Camera · Japanese Modern", dir: "logos-v2" },
  { id: 1498, file: "498_bento-grid_mexican-folk.png", label: "Bento Grid · Mexican Folk", dir: "logos-v2" },
  { id: 1499, file: "499_magazine-cover_nordic-runic.png", label: "Magazine Cover · Nordic Runic", dir: "logos-v2" },
  { id: 1500, file: "500_zine-cover_typewriter-mono.png", label: "Zine Cover · Typewriter Mono", dir: "logos-v2" },
  // ===== V3 LOGOS (no-motorcycle set, from prompts-v3.json) =====
  { id: 1501, file: "001_two-cubes_mono-flat.png", label: "Two Cubes · Mono Flat", dir: "logos-v3" },
  { id: 1502, file: "002_cube-plus-helper_dark-terminal.png", label: "Cube Plus Helper · Dark Terminal", dir: "logos-v3" },
  { id: 1503, file: "003_nested-boxes_brutalist-paper.png", label: "Nested Boxes · Brutalist Paper", dir: "logos-v3" },
  { id: 1504, file: "004_docked-pair_aurora-warm.png", label: "Docked Pair · Aurora Warm", dir: "logos-v3" },
  { id: 1505, file: "005_buddy-boxes_editorial-mono.png", label: "Buddy Boxes · Editorial Mono", dir: "logos-v3" },
  { id: 1506, file: "006_yin-yang-cubes_neon-pink-cyan.png", label: "Yin Yang Cubes · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1507, file: "007_container-with-pod_synthwave.png", label: "Container With Pod · Synthwave", dir: "logos-v3" },
  { id: 1508, file: "008_twin-cubes-iso_vintage-cream.png", label: "Twin Cubes Iso · Vintage Cream", dir: "logos-v3" },
  { id: 1509, file: "009_primary-sidecar-split_blueprint-cyan.png", label: "Primary Sidecar Split · Blueprint Cyan", dir: "logos-v3" },
  { id: 1510, file: "010_stack-and-helper_isometric-pastel.png", label: "Stack And Helper · Isometric Pastel", dir: "logos-v3" },
  { id: 1511, file: "011_k8s-pod-pair_cyberpunk-magenta.png", label: "K8s Pod Pair · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1512, file: "012_dotted-attached_riso-print.png", label: "Dotted Attached · Riso Print", dir: "logos-v3" },
  { id: 1513, file: "013_twin-modules_paper-cut-layered.png", label: "Twin Modules · Paper Cut Layered", dir: "logos-v3" },
  { id: 1514, file: "014_plus-plug_watercolor-soft.png", label: "Plus Plug · Watercolor Soft", dir: "logos-v3" },
  { id: 1515, file: "015_co-pair-icon_ink-sumi.png", label: "Co Pair Icon · Ink Sumi", dir: "logos-v3" },
  { id: 1516, file: "016_inline-helper_etching-engraved.png", label: "Inline Helper · Etching Engraved", dir: "logos-v3" },
  { id: 1517, file: "017_twin-pills_retro-orange-brown.png", label: "Twin Pills · Retro Orange Brown", dir: "logos-v3" },
  { id: 1518, file: "018_companion-square_retro-pixel.png", label: "Companion Square · Retro Pixel", dir: "logos-v3" },
  { id: 1519, file: "019_paired-rounded_y2k-chrome.png", label: "Paired Rounded · Y2k Chrome", dir: "logos-v3" },
  { id: 1520, file: "020_container-helper-iso_memphis-pop.png", label: "Container Helper Iso · Memphis Pop", dir: "logos-v3" },
  { id: 1521, file: "021_docker-whale_bauhaus-primary.png", label: "Docker Whale · Bauhaus Primary", dir: "logos-v3" },
  { id: 1522, file: "022_whale-with-pup_art-deco-gold.png", label: "Whale With Pup · Art Deco Gold", dir: "logos-v3" },
  { id: 1523, file: "023_shipping-container_art-nouveau-vine.png", label: "Shipping Container · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1524, file: "024_container-stack_swiss-grid.png", label: "Container Stack · Swiss Grid", dir: "logos-v3" },
  { id: 1525, file: "025_container-ship_punk-photocopy.png", label: "Container Ship · Punk Photocopy", dir: "logos-v3" },
  { id: 1526, file: "026_container-port_zine-collage.png", label: "Container Port · Zine Collage", dir: "logos-v3" },
  { id: 1527, file: "027_box-on-pallet_vaporwave-gradient.png", label: "Box On Pallet · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1528, file: "028_crate-mark_matrix-green.png", label: "Crate Mark · Matrix Green", dir: "logos-v3" },
  { id: 1529, file: "029_cargo-hold_graph-paper.png", label: "Cargo Hold · Graph Paper", dir: "logos-v3" },
  { id: 1530, file: "030_docker-cube-stack_holographic.png", label: "Docker Cube Stack · Holographic", dir: "logos-v3" },
  { id: 1531, file: "031_ip-card_chrome-3d-render.png", label: "Ip Card · Chrome 3d Render", dir: "logos-v3" },
  { id: 1532, file: "032_ip-tag-luggage_clay-3d-render.png", label: "Ip Tag Luggage · Clay 3d Render", dir: "logos-v3" },
  { id: 1533, file: "033_ipv6-card_photoreal-bike.png", label: "Ipv6 Card · Photoreal Bike", dir: "logos-v3" },
  { id: 1534, file: "034_ip-fingerprint_flat-duotone-mint.png", label: "Ip Fingerprint · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1535, file: "035_dotted-quad_flat-duotone-coral.png", label: "Dotted Quad · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1536, file: "036_ip-passport_flat-duotone-yellow.png", label: "Ip Passport · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1537, file: "037_ip-receipt_minimal-line.png", label: "Ip Receipt · Minimal Line", dir: "logos-v3" },
  { id: 1538, file: "038_ip-coin_minimal-line-thick.png", label: "Ip Coin · Minimal Line Thick", dir: "logos-v3" },
  { id: 1539, file: "039_ip-stamp_scrappy-handdrawn.png", label: "Ip Stamp · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1540, file: "040_ip-barcode_crayon.png", label: "Ip Barcode · Crayon", dir: "logos-v3" },
  { id: 1541, file: "041_padlock-minimal_embroidery.png", label: "Padlock Minimal · Embroidery", dir: "logos-v3" },
  { id: 1542, file: "042_shield-mark_denim-patch.png", label: "Shield Mark · Denim Patch", dir: "logos-v3" },
  { id: 1543, file: "043_key-skeleton_graffiti-spray.png", label: "Key Skeleton · Graffiti Spray", dir: "logos-v3" },
  { id: 1544, file: "044_dual-keys_postage-vintage.png", label: "Dual Keys · Postage Vintage", dir: "logos-v3" },
  { id: 1545, file: "045_tunnel-cylinder_mid-century.png", label: "Tunnel Cylinder · Mid Century", dir: "logos-v3" },
  { id: 1546, file: "046_tunnel-arch_scandi-minimal.png", label: "Tunnel Arch · Scandi Minimal", dir: "logos-v3" },
  { id: 1547, file: "047_tunnel-fiber_japanese-modern.png", label: "Tunnel Fiber · Japanese Modern", dir: "logos-v3" },
  { id: 1548, file: "048_vpn-link_mexican-folk.png", label: "Vpn Link · Mexican Folk", dir: "logos-v3" },
  { id: 1549, file: "049_lock-and-arrow_nordic-runic.png", label: "Lock And Arrow · Nordic Runic", dir: "logos-v3" },
  { id: 1550, file: "050_post-quantum-lattice_typewriter-mono.png", label: "Post Quantum Lattice · Typewriter Mono", dir: "logos-v3" },
  { id: 1551, file: "051_handshake-icon_mono-flat.png", label: "Handshake Icon · Mono Flat", dir: "logos-v3" },
  { id: 1552, file: "052_vault-door_dark-terminal.png", label: "Vault Door · Dark Terminal", dir: "logos-v3" },
  { id: 1553, file: "053_padlock-shackle-s_brutalist-paper.png", label: "Padlock Shackle S · Brutalist Paper", dir: "logos-v3" },
  { id: 1554, file: "054_shield-lattice_aurora-warm.png", label: "Shield Lattice · Aurora Warm", dir: "logos-v3" },
  { id: 1555, file: "055_encrypted-envelope_editorial-mono.png", label: "Encrypted Envelope · Editorial Mono", dir: "logos-v3" },
  { id: 1556, file: "056_globe-pins_neon-pink-cyan.png", label: "Globe Pins · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1557, file: "057_globe-orbit-dots_synthwave.png", label: "Globe Orbit Dots · Synthwave", dir: "logos-v3" },
  { id: 1558, file: "058_flat-map-pins_vintage-cream.png", label: "Flat Map Pins · Vintage Cream", dir: "logos-v3" },
  { id: 1559, file: "059_globe-wireframe_blueprint-cyan.png", label: "Globe Wireframe · Blueprint Cyan", dir: "logos-v3" },
  { id: 1560, file: "060_globe-half_isometric-pastel.png", label: "Globe Half · Isometric Pastel", dir: "logos-v3" },
  { id: 1561, file: "061_compass-rose_cyberpunk-magenta.png", label: "Compass Rose · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1562, file: "062_map-pin_riso-print.png", label: "Map Pin · Riso Print", dir: "logos-v3" },
  { id: 1563, file: "063_five-region-map_paper-cut-layered.png", label: "Five Region Map · Paper Cut Layered", dir: "logos-v3" },
  { id: 1564, file: "064_globe-cube_watercolor-soft.png", label: "Globe Cube · Watercolor Soft", dir: "logos-v3" },
  { id: 1565, file: "065_network-globe-mesh_ink-sumi.png", label: "Network Globe Mesh · Ink Sumi", dir: "logos-v3" },
  { id: 1566, file: "066_terminal-prompt_etching-engraved.png", label: "Terminal Prompt · Etching Engraved", dir: "logos-v3" },
  { id: 1567, file: "067_yaml-snippet_retro-orange-brown.png", label: "Yaml Snippet · Retro Orange Brown", dir: "logos-v3" },
  { id: 1568, file: "068_compose-tag_retro-pixel.png", label: "Compose Tag · Retro Pixel", dir: "logos-v3" },
  { id: 1569, file: "069_brackets-mono_y2k-chrome.png", label: "Brackets Mono · Y2k Chrome", dir: "logos-v3" },
  { id: 1570, file: "070_curly-braces_memphis-pop.png", label: "Curly Braces · Memphis Pop", dir: "logos-v3" },
  { id: 1571, file: "071_greater-than-prompt_bauhaus-primary.png", label: "Greater Than Prompt · Bauhaus Primary", dir: "logos-v3" },
  { id: 1572, file: "072_ascii-block_art-deco-gold.png", label: "Ascii Block · Art Deco Gold", dir: "logos-v3" },
  { id: 1573, file: "073_blinking-cursor_art-nouveau-vine.png", label: "Blinking Cursor · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1574, file: "074_code-comment_swiss-grid.png", label: "Code Comment · Swiss Grid", dir: "logos-v3" },
  { id: 1575, file: "075_docker-file-icon_punk-photocopy.png", label: "Docker File Icon · Punk Photocopy", dir: "logos-v3" },
  { id: 1576, file: "076_hashbang_zine-collage.png", label: "Hashbang · Zine Collage", dir: "logos-v3" },
  { id: 1577, file: "077_pipe-operator_vaporwave-gradient.png", label: "Pipe Operator · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1578, file: "078_env-var_matrix-green.png", label: "Env Var · Matrix Green", dir: "logos-v3" },
  { id: 1579, file: "079_terminal-output_graph-paper.png", label: "Terminal Output · Graph Paper", dir: "logos-v3" },
  { id: 1580, file: "080_git-branch_holographic.png", label: "Git Branch · Holographic", dir: "logos-v3" },
  { id: 1581, file: "081_nodes-edges_chrome-3d-render.png", label: "Nodes Edges · Chrome 3d Render", dir: "logos-v3" },
  { id: 1582, file: "082_hub-spoke_clay-3d-render.png", label: "Hub Spoke · Clay 3d Render", dir: "logos-v3" },
  { id: 1583, file: "083_mesh-grid_photoreal-bike.png", label: "Mesh Grid · Photoreal Bike", dir: "logos-v3" },
  { id: 1584, file: "084_star-topology_flat-duotone-mint.png", label: "Star Topology · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1585, file: "085_ring-topology_flat-duotone-coral.png", label: "Ring Topology · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1586, file: "086_tree-topology_flat-duotone-yellow.png", label: "Tree Topology · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1587, file: "087_flow-arrow_minimal-line.png", label: "Flow Arrow · Minimal Line", dir: "logos-v3" },
  { id: 1588, file: "088_packet-stream_minimal-line-thick.png", label: "Packet Stream · Minimal Line Thick", dir: "logos-v3" },
  { id: 1589, file: "089_traffic-light-cluster_scrappy-handdrawn.png", label: "Traffic Light Cluster · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1590, file: "090_subnet-grid_crayon.png", label: "Subnet Grid · Crayon", dir: "logos-v3" },
  { id: 1591, file: "091_envelope_embroidery.png", label: "Envelope · Embroidery", dir: "logos-v3" },
  { id: 1592, file: "092_paper-airplane_denim-patch.png", label: "Paper Airplane · Denim Patch", dir: "logos-v3" },
  { id: 1593, file: "093_parcel-tag_graffiti-spray.png", label: "Parcel Tag · Graffiti Spray", dir: "logos-v3" },
  { id: 1594, file: "094_carrier-pigeon_postage-vintage.png", label: "Carrier Pigeon · Postage Vintage", dir: "logos-v3" },
  { id: 1595, file: "095_mailbox_mid-century.png", label: "Mailbox · Mid Century", dir: "logos-v3" },
  { id: 1596, file: "096_postal-stamp_scandi-minimal.png", label: "Postal Stamp · Scandi Minimal", dir: "logos-v3" },
  { id: 1597, file: "097_postal-seal_japanese-modern.png", label: "Postal Seal · Japanese Modern", dir: "logos-v3" },
  { id: 1598, file: "098_data-packet_mexican-folk.png", label: "Data Packet · Mexican Folk", dir: "logos-v3" },
  { id: 1599, file: "099_wordmark-mono_nordic-runic.png", label: "Wordmark Mono · Nordic Runic", dir: "logos-v3" },
  { id: 1600, file: "100_wordmark-serif_typewriter-mono.png", label: "Wordmark Serif · Typewriter Mono", dir: "logos-v3" },
  { id: 1601, file: "101_wordmark-grotesk_mono-flat.png", label: "Wordmark Grotesk · Mono Flat", dir: "logos-v3" },
  { id: 1602, file: "102_wordmark-condensed_dark-terminal.png", label: "Wordmark Condensed · Dark Terminal", dir: "logos-v3" },
  { id: 1603, file: "103_wordmark-rounded_brutalist-paper.png", label: "Wordmark Rounded · Brutalist Paper", dir: "logos-v3" },
  { id: 1604, file: "104_wordmark-slab_aurora-warm.png", label: "Wordmark Slab · Aurora Warm", dir: "logos-v3" },
  { id: 1605, file: "105_wordmark-italic_editorial-mono.png", label: "Wordmark Italic · Editorial Mono", dir: "logos-v3" },
  { id: 1606, file: "106_wordmark-outline_neon-pink-cyan.png", label: "Wordmark Outline · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1607, file: "107_wordmark-shadow_synthwave.png", label: "Wordmark Shadow · Synthwave", dir: "logos-v3" },
  { id: 1608, file: "108_wordmark-3d-extrude_vintage-cream.png", label: "Wordmark 3d Extrude · Vintage Cream", dir: "logos-v3" },
  { id: 1609, file: "109_wordmark-stencil_blueprint-cyan.png", label: "Wordmark Stencil · Blueprint Cyan", dir: "logos-v3" },
  { id: 1610, file: "110_wordmark-blackletter_isometric-pastel.png", label: "Wordmark Blackletter · Isometric Pastel", dir: "logos-v3" },
  { id: 1611, file: "111_wordmark-ligature_cyberpunk-magenta.png", label: "Wordmark Ligature · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1612, file: "112_wordmark-dot-i_riso-print.png", label: "Wordmark Dot I · Riso Print", dir: "logos-v3" },
  { id: 1613, file: "113_wordmark-split_paper-cut-layered.png", label: "Wordmark Split · Paper Cut Layered", dir: "logos-v3" },
  { id: 1614, file: "114_wordmark-circle_watercolor-soft.png", label: "Wordmark Circle · Watercolor Soft", dir: "logos-v3" },
  { id: 1615, file: "115_wordmark-circle-rect_ink-sumi.png", label: "Wordmark Circle Rect · Ink Sumi", dir: "logos-v3" },
  { id: 1616, file: "116_wordmark-underline_etching-engraved.png", label: "Wordmark Underline · Etching Engraved", dir: "logos-v3" },
  { id: 1617, file: "117_wordmark-period_retro-orange-brown.png", label: "Wordmark Period · Retro Orange Brown", dir: "logos-v3" },
  { id: 1618, file: "118_wordmark-bracketed_retro-pixel.png", label: "Wordmark Bracketed · Retro Pixel", dir: "logos-v3" },
  { id: 1619, file: "119_wordmark-tag_y2k-chrome.png", label: "Wordmark Tag · Y2k Chrome", dir: "logos-v3" },
  { id: 1620, file: "120_wordmark-domain_memphis-pop.png", label: "Wordmark Domain · Memphis Pop", dir: "logos-v3" },
  { id: 1621, file: "121_monogram-s-solid_bauhaus-primary.png", label: "Monogram S Solid · Bauhaus Primary", dir: "logos-v3" },
  { id: 1622, file: "122_monogram-s-line_art-deco-gold.png", label: "Monogram S Line · Art Deco Gold", dir: "logos-v3" },
  { id: 1623, file: "123_monogram-s-cube_art-nouveau-vine.png", label: "Monogram S Cube · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1624, file: "124_monogram-s-circle_swiss-grid.png", label: "Monogram S Circle · Swiss Grid", dir: "logos-v3" },
  { id: 1625, file: "125_monogram-s-hex_punk-photocopy.png", label: "Monogram S Hex · Punk Photocopy", dir: "logos-v3" },
  { id: 1626, file: "126_monogram-s-shield_zine-collage.png", label: "Monogram S Shield · Zine Collage", dir: "logos-v3" },
  { id: 1627, file: "127_monogram-s-square_vaporwave-gradient.png", label: "Monogram S Square · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1628, file: "128_monogram-s-tunnel_matrix-green.png", label: "Monogram S Tunnel · Matrix Green", dir: "logos-v3" },
  { id: 1629, file: "129_monogram-s-pixel_graph-paper.png", label: "Monogram S Pixel · Graph Paper", dir: "logos-v3" },
  { id: 1630, file: "130_monogram-s-mono_holographic.png", label: "Monogram S Mono · Holographic", dir: "logos-v3" },
  { id: 1631, file: "131_abstract-arc_chrome-3d-render.png", label: "Abstract Arc · Chrome 3d Render", dir: "logos-v3" },
  { id: 1632, file: "132_abstract-spiral_clay-3d-render.png", label: "Abstract Spiral · Clay 3d Render", dir: "logos-v3" },
  { id: 1633, file: "133_abstract-loop_photoreal-bike.png", label: "Abstract Loop · Photoreal Bike", dir: "logos-v3" },
  { id: 1634, file: "134_abstract-arrow_flat-duotone-mint.png", label: "Abstract Arrow · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1635, file: "135_abstract-circle-square_flat-duotone-coral.png", label: "Abstract Circle Square · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1636, file: "136_abstract-triangle-square_flat-duotone-yellow.png", label: "Abstract Triangle Square · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1637, file: "137_abstract-three-bars_minimal-line.png", label: "Abstract Three Bars · Minimal Line", dir: "logos-v3" },
  { id: 1638, file: "138_abstract-stack_minimal-line-thick.png", label: "Abstract Stack · Minimal Line Thick", dir: "logos-v3" },
  { id: 1639, file: "139_abstract-hex-grid_scrappy-handdrawn.png", label: "Abstract Hex Grid · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1640, file: "140_abstract-pin-dots_crayon.png", label: "Abstract Pin Dots · Crayon", dir: "logos-v3" },
  { id: 1641, file: "141_server-rack_embroidery.png", label: "Server Rack · Embroidery", dir: "logos-v3" },
  { id: 1642, file: "142_blade-server_denim-patch.png", label: "Blade Server · Denim Patch", dir: "logos-v3" },
  { id: 1643, file: "143_cloud-icon_graffiti-spray.png", label: "Cloud Icon · Graffiti Spray", dir: "logos-v3" },
  { id: 1644, file: "144_cloud-plus-pod_postage-vintage.png", label: "Cloud Plus Pod · Postage Vintage", dir: "logos-v3" },
  { id: 1645, file: "145_server-tower_mid-century.png", label: "Server Tower · Mid Century", dir: "logos-v3" },
  { id: 1646, file: "146_rj45-jack_scandi-minimal.png", label: "Rj45 Jack · Scandi Minimal", dir: "logos-v3" },
  { id: 1647, file: "147_ethernet-cable_japanese-modern.png", label: "Ethernet Cable · Japanese Modern", dir: "logos-v3" },
  { id: 1648, file: "148_modem-router_mexican-folk.png", label: "Modem Router · Mexican Folk", dir: "logos-v3" },
  { id: 1649, file: "149_port-icon_nordic-runic.png", label: "Port Icon · Nordic Runic", dir: "logos-v3" },
  { id: 1650, file: "150_rack-unit-iso_typewriter-mono.png", label: "Rack Unit Iso · Typewriter Mono", dir: "logos-v3" },
  { id: 1651, file: "151_primary-composition_mono-flat.png", label: "Primary Composition · Mono Flat", dir: "logos-v3" },
  { id: 1652, file: "152_memphis-composition_dark-terminal.png", label: "Memphis Composition · Dark Terminal", dir: "logos-v3" },
  { id: 1653, file: "153_lighthouse_brutalist-paper.png", label: "Lighthouse · Brutalist Paper", dir: "logos-v3" },
  { id: 1654, file: "154_beacon-rings_aurora-warm.png", label: "Beacon Rings · Aurora Warm", dir: "logos-v3" },
  { id: 1655, file: "155_antenna-mast_editorial-mono.png", label: "Antenna Mast · Editorial Mono", dir: "logos-v3" },
  { id: 1656, file: "156_wifi-symbol_neon-pink-cyan.png", label: "Wifi Symbol · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1657, file: "157_radar-sweep_synthwave.png", label: "Radar Sweep · Synthwave", dir: "logos-v3" },
  { id: 1658, file: "158_ping-marker_vintage-cream.png", label: "Ping Marker · Vintage Cream", dir: "logos-v3" },
  { id: 1659, file: "159_plug-socket-pair_blueprint-cyan.png", label: "Plug Socket Pair · Blueprint Cyan", dir: "logos-v3" },
  { id: 1660, file: "160_usb-c_isometric-pastel.png", label: "Usb C · Isometric Pastel", dir: "logos-v3" },
  { id: 1661, file: "161_jack-connector_cyberpunk-magenta.png", label: "Jack Connector · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1662, file: "162_rj45-pair_riso-print.png", label: "Rj45 Pair · Riso Print", dir: "logos-v3" },
  { id: 1663, file: "163_dock-port_paper-cut-layered.png", label: "Dock Port · Paper Cut Layered", dir: "logos-v3" },
  { id: 1664, file: "164_luggage-tag_watercolor-soft.png", label: "Luggage Tag · Watercolor Soft", dir: "logos-v3" },
  { id: 1665, file: "165_badge-circle_ink-sumi.png", label: "Badge Circle · Ink Sumi", dir: "logos-v3" },
  { id: 1666, file: "166_hang-tag_etching-engraved.png", label: "Hang Tag · Etching Engraved", dir: "logos-v3" },
  { id: 1667, file: "167_sticker-die-cut_retro-orange-brown.png", label: "Sticker Die Cut · Retro Orange Brown", dir: "logos-v3" },
  { id: 1668, file: "168_name-tag_retro-pixel.png", label: "Name Tag · Retro Pixel", dir: "logos-v3" },
  { id: 1669, file: "169_file-folder-tab_y2k-chrome.png", label: "File Folder Tab · Y2k Chrome", dir: "logos-v3" },
  { id: 1670, file: "170_wax-seal_memphis-pop.png", label: "Wax Seal · Memphis Pop", dir: "logos-v3" },
  { id: 1671, file: "171_ink-stamp_bauhaus-primary.png", label: "Ink Stamp · Bauhaus Primary", dir: "logos-v3" },
  { id: 1672, file: "172_notarized-stamp_art-deco-gold.png", label: "Notarized Stamp · Art Deco Gold", dir: "logos-v3" },
  { id: 1673, file: "173_postmark_art-nouveau-vine.png", label: "Postmark · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1674, file: "174_ampersand_swiss-grid.png", label: "Ampersand · Swiss Grid", dir: "logos-v3" },
  { id: 1675, file: "175_plus-sign_punk-photocopy.png", label: "Plus Sign · Punk Photocopy", dir: "logos-v3" },
  { id: 1676, file: "176_at-sign_zine-collage.png", label: "At Sign · Zine Collage", dir: "logos-v3" },
  { id: 1677, file: "177_equals-sign_vaporwave-gradient.png", label: "Equals Sign · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1678, file: "178_hash-tag_matrix-green.png", label: "Hash Tag · Matrix Green", dir: "logos-v3" },
  { id: 1679, file: "179_container-floating_graph-paper.png", label: "Container Floating · Graph Paper", dir: "logos-v3" },
  { id: 1680, file: "180_container-rocket_holographic.png", label: "Container Rocket · Holographic", dir: "logos-v3" },
  { id: 1681, file: "181_container-balloon_chrome-3d-render.png", label: "Container Balloon · Chrome 3d Render", dir: "logos-v3" },
  { id: 1682, file: "182_container-parachute_clay-3d-render.png", label: "Container Parachute · Clay 3d Render", dir: "logos-v3" },
  { id: 1683, file: "183_container-conveyor_photoreal-bike.png", label: "Container Conveyor · Photoreal Bike", dir: "logos-v3" },
  { id: 1684, file: "184_crest-shield_flat-duotone-mint.png", label: "Crest Shield · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1685, file: "185_ribbon-banner_flat-duotone-coral.png", label: "Ribbon Banner · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1686, file: "186_laurel-wreath_flat-duotone-yellow.png", label: "Laurel Wreath · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1687, file: "187_medal-pin_minimal-line.png", label: "Medal Pin · Minimal Line", dir: "logos-v3" },
  { id: 1688, file: "188_speech-bubble_minimal-line-thick.png", label: "Speech Bubble · Minimal Line Thick", dir: "logos-v3" },
  { id: 1689, file: "189_checkmark-badge_scrappy-handdrawn.png", label: "Checkmark Badge · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1690, file: "190_heart-cube_crayon.png", label: "Heart Cube · Crayon", dir: "logos-v3" },
  { id: 1691, file: "191_smile-cube_embroidery.png", label: "Smile Cube · Embroidery", dir: "logos-v3" },
  { id: 1692, file: "192_bento-grid-2x2_denim-patch.png", label: "Bento Grid 2x2 · Denim Patch", dir: "logos-v3" },
  { id: 1693, file: "193_bento-grid-3x1_graffiti-spray.png", label: "Bento Grid 3x1 · Graffiti Spray", dir: "logos-v3" },
  { id: 1694, file: "194_magazine-cover_postage-vintage.png", label: "Magazine Cover · Postage Vintage", dir: "logos-v3" },
  { id: 1695, file: "195_pixel-cube_mid-century.png", label: "Pixel Cube · Mid Century", dir: "logos-v3" },
  { id: 1696, file: "196_crt-monitor_scandi-minimal.png", label: "Crt Monitor · Scandi Minimal", dir: "logos-v3" },
  { id: 1697, file: "197_led-segment_japanese-modern.png", label: "Led Segment · Japanese Modern", dir: "logos-v3" },
  { id: 1698, file: "198_split-flap_mexican-folk.png", label: "Split Flap · Mexican Folk", dir: "logos-v3" },
  { id: 1699, file: "199_hex-lattice_nordic-runic.png", label: "Hex Lattice · Nordic Runic", dir: "logos-v3" },
  { id: 1700, file: "200_crystalline_typewriter-mono.png", label: "Crystalline · Typewriter Mono", dir: "logos-v3" },
  { id: 1701, file: "201_particle-field_mono-flat.png", label: "Particle Field · Mono Flat", dir: "logos-v3" },
  { id: 1702, file: "202_brick-wall_dark-terminal.png", label: "Brick Wall · Dark Terminal", dir: "logos-v3" },
  { id: 1703, file: "203_railway-coupler_brutalist-paper.png", label: "Railway Coupler · Brutalist Paper", dir: "logos-v3" },
  { id: 1704, file: "204_bento-box_aurora-warm.png", label: "Bento Box · Aurora Warm", dir: "logos-v3" },
  { id: 1705, file: "205_subway-tile_editorial-mono.png", label: "Subway Tile · Editorial Mono", dir: "logos-v3" },
  { id: 1706, file: "206_apartment-window_neon-pink-cyan.png", label: "Apartment Window · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1707, file: "207_two-cubes_synthwave.png", label: "Two Cubes · Synthwave", dir: "logos-v3" },
  { id: 1708, file: "208_cube-plus-helper_vintage-cream.png", label: "Cube Plus Helper · Vintage Cream", dir: "logos-v3" },
  { id: 1709, file: "209_nested-boxes_blueprint-cyan.png", label: "Nested Boxes · Blueprint Cyan", dir: "logos-v3" },
  { id: 1710, file: "210_docked-pair_isometric-pastel.png", label: "Docked Pair · Isometric Pastel", dir: "logos-v3" },
  { id: 1711, file: "211_buddy-boxes_cyberpunk-magenta.png", label: "Buddy Boxes · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1712, file: "212_yin-yang-cubes_riso-print.png", label: "Yin Yang Cubes · Riso Print", dir: "logos-v3" },
  { id: 1713, file: "213_container-with-pod_paper-cut-layered.png", label: "Container With Pod · Paper Cut Layered", dir: "logos-v3" },
  { id: 1714, file: "214_twin-cubes-iso_watercolor-soft.png", label: "Twin Cubes Iso · Watercolor Soft", dir: "logos-v3" },
  { id: 1715, file: "215_primary-sidecar-split_ink-sumi.png", label: "Primary Sidecar Split · Ink Sumi", dir: "logos-v3" },
  { id: 1716, file: "216_stack-and-helper_etching-engraved.png", label: "Stack And Helper · Etching Engraved", dir: "logos-v3" },
  { id: 1717, file: "217_k8s-pod-pair_retro-orange-brown.png", label: "K8s Pod Pair · Retro Orange Brown", dir: "logos-v3" },
  { id: 1718, file: "218_dotted-attached_retro-pixel.png", label: "Dotted Attached · Retro Pixel", dir: "logos-v3" },
  { id: 1719, file: "219_twin-modules_y2k-chrome.png", label: "Twin Modules · Y2k Chrome", dir: "logos-v3" },
  { id: 1720, file: "220_plus-plug_memphis-pop.png", label: "Plus Plug · Memphis Pop", dir: "logos-v3" },
  { id: 1721, file: "221_co-pair-icon_bauhaus-primary.png", label: "Co Pair Icon · Bauhaus Primary", dir: "logos-v3" },
  { id: 1722, file: "222_inline-helper_art-deco-gold.png", label: "Inline Helper · Art Deco Gold", dir: "logos-v3" },
  { id: 1723, file: "223_twin-pills_art-nouveau-vine.png", label: "Twin Pills · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1724, file: "224_companion-square_swiss-grid.png", label: "Companion Square · Swiss Grid", dir: "logos-v3" },
  { id: 1725, file: "225_paired-rounded_punk-photocopy.png", label: "Paired Rounded · Punk Photocopy", dir: "logos-v3" },
  { id: 1726, file: "226_container-helper-iso_zine-collage.png", label: "Container Helper Iso · Zine Collage", dir: "logos-v3" },
  { id: 1727, file: "227_docker-whale_vaporwave-gradient.png", label: "Docker Whale · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1728, file: "228_whale-with-pup_matrix-green.png", label: "Whale With Pup · Matrix Green", dir: "logos-v3" },
  { id: 1729, file: "229_shipping-container_graph-paper.png", label: "Shipping Container · Graph Paper", dir: "logos-v3" },
  { id: 1730, file: "230_container-stack_holographic.png", label: "Container Stack · Holographic", dir: "logos-v3" },
  { id: 1731, file: "231_container-ship_chrome-3d-render.png", label: "Container Ship · Chrome 3d Render", dir: "logos-v3" },
  { id: 1732, file: "232_container-port_clay-3d-render.png", label: "Container Port · Clay 3d Render", dir: "logos-v3" },
  { id: 1733, file: "233_box-on-pallet_photoreal-bike.png", label: "Box On Pallet · Photoreal Bike", dir: "logos-v3" },
  { id: 1734, file: "234_crate-mark_flat-duotone-mint.png", label: "Crate Mark · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1735, file: "235_cargo-hold_flat-duotone-coral.png", label: "Cargo Hold · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1736, file: "236_docker-cube-stack_flat-duotone-yellow.png", label: "Docker Cube Stack · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1737, file: "237_ip-card_minimal-line.png", label: "Ip Card · Minimal Line", dir: "logos-v3" },
  { id: 1738, file: "238_ip-tag-luggage_minimal-line-thick.png", label: "Ip Tag Luggage · Minimal Line Thick", dir: "logos-v3" },
  { id: 1739, file: "239_ipv6-card_scrappy-handdrawn.png", label: "Ipv6 Card · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1740, file: "240_ip-fingerprint_crayon.png", label: "Ip Fingerprint · Crayon", dir: "logos-v3" },
  { id: 1741, file: "241_dotted-quad_embroidery.png", label: "Dotted Quad · Embroidery", dir: "logos-v3" },
  { id: 1742, file: "242_ip-passport_denim-patch.png", label: "Ip Passport · Denim Patch", dir: "logos-v3" },
  { id: 1743, file: "243_ip-receipt_graffiti-spray.png", label: "Ip Receipt · Graffiti Spray", dir: "logos-v3" },
  { id: 1744, file: "244_ip-coin_postage-vintage.png", label: "Ip Coin · Postage Vintage", dir: "logos-v3" },
  { id: 1745, file: "245_ip-stamp_mid-century.png", label: "Ip Stamp · Mid Century", dir: "logos-v3" },
  { id: 1746, file: "246_ip-barcode_scandi-minimal.png", label: "Ip Barcode · Scandi Minimal", dir: "logos-v3" },
  { id: 1747, file: "247_padlock-minimal_japanese-modern.png", label: "Padlock Minimal · Japanese Modern", dir: "logos-v3" },
  { id: 1748, file: "248_shield-mark_mexican-folk.png", label: "Shield Mark · Mexican Folk", dir: "logos-v3" },
  { id: 1749, file: "249_key-skeleton_nordic-runic.png", label: "Key Skeleton · Nordic Runic", dir: "logos-v3" },
  { id: 1750, file: "250_dual-keys_typewriter-mono.png", label: "Dual Keys · Typewriter Mono", dir: "logos-v3" },
  { id: 1751, file: "251_tunnel-cylinder_mono-flat.png", label: "Tunnel Cylinder · Mono Flat", dir: "logos-v3" },
  { id: 1752, file: "252_tunnel-arch_dark-terminal.png", label: "Tunnel Arch · Dark Terminal", dir: "logos-v3" },
  { id: 1753, file: "253_tunnel-fiber_brutalist-paper.png", label: "Tunnel Fiber · Brutalist Paper", dir: "logos-v3" },
  { id: 1754, file: "254_vpn-link_aurora-warm.png", label: "Vpn Link · Aurora Warm", dir: "logos-v3" },
  { id: 1755, file: "255_lock-and-arrow_editorial-mono.png", label: "Lock And Arrow · Editorial Mono", dir: "logos-v3" },
  { id: 1756, file: "256_post-quantum-lattice_neon-pink-cyan.png", label: "Post Quantum Lattice · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1757, file: "257_handshake-icon_synthwave.png", label: "Handshake Icon · Synthwave", dir: "logos-v3" },
  { id: 1758, file: "258_vault-door_vintage-cream.png", label: "Vault Door · Vintage Cream", dir: "logos-v3" },
  { id: 1759, file: "259_padlock-shackle-s_blueprint-cyan.png", label: "Padlock Shackle S · Blueprint Cyan", dir: "logos-v3" },
  { id: 1760, file: "260_shield-lattice_isometric-pastel.png", label: "Shield Lattice · Isometric Pastel", dir: "logos-v3" },
  { id: 1761, file: "261_encrypted-envelope_cyberpunk-magenta.png", label: "Encrypted Envelope · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1762, file: "262_globe-pins_riso-print.png", label: "Globe Pins · Riso Print", dir: "logos-v3" },
  { id: 1763, file: "263_globe-orbit-dots_paper-cut-layered.png", label: "Globe Orbit Dots · Paper Cut Layered", dir: "logos-v3" },
  { id: 1764, file: "264_flat-map-pins_watercolor-soft.png", label: "Flat Map Pins · Watercolor Soft", dir: "logos-v3" },
  { id: 1765, file: "265_globe-wireframe_ink-sumi.png", label: "Globe Wireframe · Ink Sumi", dir: "logos-v3" },
  { id: 1766, file: "266_globe-half_etching-engraved.png", label: "Globe Half · Etching Engraved", dir: "logos-v3" },
  { id: 1767, file: "267_compass-rose_retro-orange-brown.png", label: "Compass Rose · Retro Orange Brown", dir: "logos-v3" },
  { id: 1768, file: "268_map-pin_retro-pixel.png", label: "Map Pin · Retro Pixel", dir: "logos-v3" },
  { id: 1769, file: "269_five-region-map_y2k-chrome.png", label: "Five Region Map · Y2k Chrome", dir: "logos-v3" },
  { id: 1770, file: "270_globe-cube_memphis-pop.png", label: "Globe Cube · Memphis Pop", dir: "logos-v3" },
  { id: 1771, file: "271_network-globe-mesh_bauhaus-primary.png", label: "Network Globe Mesh · Bauhaus Primary", dir: "logos-v3" },
  { id: 1772, file: "272_terminal-prompt_art-deco-gold.png", label: "Terminal Prompt · Art Deco Gold", dir: "logos-v3" },
  { id: 1773, file: "273_yaml-snippet_art-nouveau-vine.png", label: "Yaml Snippet · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1774, file: "274_compose-tag_swiss-grid.png", label: "Compose Tag · Swiss Grid", dir: "logos-v3" },
  { id: 1775, file: "275_brackets-mono_punk-photocopy.png", label: "Brackets Mono · Punk Photocopy", dir: "logos-v3" },
  { id: 1776, file: "276_curly-braces_zine-collage.png", label: "Curly Braces · Zine Collage", dir: "logos-v3" },
  { id: 1777, file: "277_greater-than-prompt_vaporwave-gradient.png", label: "Greater Than Prompt · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1778, file: "278_ascii-block_matrix-green.png", label: "Ascii Block · Matrix Green", dir: "logos-v3" },
  { id: 1779, file: "279_blinking-cursor_graph-paper.png", label: "Blinking Cursor · Graph Paper", dir: "logos-v3" },
  { id: 1780, file: "280_code-comment_holographic.png", label: "Code Comment · Holographic", dir: "logos-v3" },
  { id: 1781, file: "281_docker-file-icon_chrome-3d-render.png", label: "Docker File Icon · Chrome 3d Render", dir: "logos-v3" },
  { id: 1782, file: "282_hashbang_clay-3d-render.png", label: "Hashbang · Clay 3d Render", dir: "logos-v3" },
  { id: 1783, file: "283_pipe-operator_photoreal-bike.png", label: "Pipe Operator · Photoreal Bike", dir: "logos-v3" },
  { id: 1784, file: "284_env-var_flat-duotone-mint.png", label: "Env Var · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1785, file: "285_terminal-output_flat-duotone-coral.png", label: "Terminal Output · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1786, file: "286_git-branch_flat-duotone-yellow.png", label: "Git Branch · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1787, file: "287_nodes-edges_minimal-line.png", label: "Nodes Edges · Minimal Line", dir: "logos-v3" },
  { id: 1788, file: "288_hub-spoke_minimal-line-thick.png", label: "Hub Spoke · Minimal Line Thick", dir: "logos-v3" },
  { id: 1789, file: "289_mesh-grid_scrappy-handdrawn.png", label: "Mesh Grid · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1790, file: "290_star-topology_crayon.png", label: "Star Topology · Crayon", dir: "logos-v3" },
  { id: 1791, file: "291_ring-topology_embroidery.png", label: "Ring Topology · Embroidery", dir: "logos-v3" },
  { id: 1792, file: "292_tree-topology_denim-patch.png", label: "Tree Topology · Denim Patch", dir: "logos-v3" },
  { id: 1793, file: "293_flow-arrow_graffiti-spray.png", label: "Flow Arrow · Graffiti Spray", dir: "logos-v3" },
  { id: 1794, file: "294_packet-stream_postage-vintage.png", label: "Packet Stream · Postage Vintage", dir: "logos-v3" },
  { id: 1795, file: "295_traffic-light-cluster_mid-century.png", label: "Traffic Light Cluster · Mid Century", dir: "logos-v3" },
  { id: 1796, file: "296_subnet-grid_scandi-minimal.png", label: "Subnet Grid · Scandi Minimal", dir: "logos-v3" },
  { id: 1797, file: "297_envelope_japanese-modern.png", label: "Envelope · Japanese Modern", dir: "logos-v3" },
  { id: 1798, file: "298_paper-airplane_mexican-folk.png", label: "Paper Airplane · Mexican Folk", dir: "logos-v3" },
  { id: 1799, file: "299_parcel-tag_nordic-runic.png", label: "Parcel Tag · Nordic Runic", dir: "logos-v3" },
  { id: 1800, file: "300_carrier-pigeon_typewriter-mono.png", label: "Carrier Pigeon · Typewriter Mono", dir: "logos-v3" },
  { id: 1801, file: "301_mailbox_mono-flat.png", label: "Mailbox · Mono Flat", dir: "logos-v3" },
  { id: 1802, file: "302_postal-stamp_dark-terminal.png", label: "Postal Stamp · Dark Terminal", dir: "logos-v3" },
  { id: 1803, file: "303_postal-seal_brutalist-paper.png", label: "Postal Seal · Brutalist Paper", dir: "logos-v3" },
  { id: 1804, file: "304_data-packet_aurora-warm.png", label: "Data Packet · Aurora Warm", dir: "logos-v3" },
  { id: 1805, file: "305_wordmark-mono_editorial-mono.png", label: "Wordmark Mono · Editorial Mono", dir: "logos-v3" },
  { id: 1806, file: "306_wordmark-serif_neon-pink-cyan.png", label: "Wordmark Serif · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1807, file: "307_wordmark-grotesk_synthwave.png", label: "Wordmark Grotesk · Synthwave", dir: "logos-v3" },
  { id: 1808, file: "308_wordmark-condensed_vintage-cream.png", label: "Wordmark Condensed · Vintage Cream", dir: "logos-v3" },
  { id: 1809, file: "309_wordmark-rounded_blueprint-cyan.png", label: "Wordmark Rounded · Blueprint Cyan", dir: "logos-v3" },
  { id: 1810, file: "310_wordmark-slab_isometric-pastel.png", label: "Wordmark Slab · Isometric Pastel", dir: "logos-v3" },
  { id: 1811, file: "311_wordmark-italic_cyberpunk-magenta.png", label: "Wordmark Italic · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1812, file: "312_wordmark-outline_riso-print.png", label: "Wordmark Outline · Riso Print", dir: "logos-v3" },
  { id: 1813, file: "313_wordmark-shadow_paper-cut-layered.png", label: "Wordmark Shadow · Paper Cut Layered", dir: "logos-v3" },
  { id: 1814, file: "314_wordmark-3d-extrude_watercolor-soft.png", label: "Wordmark 3d Extrude · Watercolor Soft", dir: "logos-v3" },
  { id: 1815, file: "315_wordmark-stencil_ink-sumi.png", label: "Wordmark Stencil · Ink Sumi", dir: "logos-v3" },
  { id: 1816, file: "316_wordmark-blackletter_etching-engraved.png", label: "Wordmark Blackletter · Etching Engraved", dir: "logos-v3" },
  { id: 1817, file: "317_wordmark-ligature_retro-orange-brown.png", label: "Wordmark Ligature · Retro Orange Brown", dir: "logos-v3" },
  { id: 1818, file: "318_wordmark-dot-i_retro-pixel.png", label: "Wordmark Dot I · Retro Pixel", dir: "logos-v3" },
  { id: 1819, file: "319_wordmark-split_y2k-chrome.png", label: "Wordmark Split · Y2k Chrome", dir: "logos-v3" },
  { id: 1820, file: "320_wordmark-circle_memphis-pop.png", label: "Wordmark Circle · Memphis Pop", dir: "logos-v3" },
  { id: 1821, file: "321_wordmark-circle-rect_bauhaus-primary.png", label: "Wordmark Circle Rect · Bauhaus Primary", dir: "logos-v3" },
  { id: 1822, file: "322_wordmark-underline_art-deco-gold.png", label: "Wordmark Underline · Art Deco Gold", dir: "logos-v3" },
  { id: 1823, file: "323_wordmark-period_art-nouveau-vine.png", label: "Wordmark Period · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1824, file: "324_wordmark-bracketed_swiss-grid.png", label: "Wordmark Bracketed · Swiss Grid", dir: "logos-v3" },
  { id: 1825, file: "325_wordmark-tag_punk-photocopy.png", label: "Wordmark Tag · Punk Photocopy", dir: "logos-v3" },
  { id: 1826, file: "326_wordmark-domain_zine-collage.png", label: "Wordmark Domain · Zine Collage", dir: "logos-v3" },
  { id: 1827, file: "327_monogram-s-solid_vaporwave-gradient.png", label: "Monogram S Solid · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1828, file: "328_monogram-s-line_matrix-green.png", label: "Monogram S Line · Matrix Green", dir: "logos-v3" },
  { id: 1829, file: "329_monogram-s-cube_graph-paper.png", label: "Monogram S Cube · Graph Paper", dir: "logos-v3" },
  { id: 1830, file: "330_monogram-s-circle_holographic.png", label: "Monogram S Circle · Holographic", dir: "logos-v3" },
  { id: 1831, file: "331_monogram-s-hex_chrome-3d-render.png", label: "Monogram S Hex · Chrome 3d Render", dir: "logos-v3" },
  { id: 1832, file: "332_monogram-s-shield_clay-3d-render.png", label: "Monogram S Shield · Clay 3d Render", dir: "logos-v3" },
  { id: 1833, file: "333_monogram-s-square_photoreal-bike.png", label: "Monogram S Square · Photoreal Bike", dir: "logos-v3" },
  { id: 1834, file: "334_monogram-s-tunnel_flat-duotone-mint.png", label: "Monogram S Tunnel · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1835, file: "335_monogram-s-pixel_flat-duotone-coral.png", label: "Monogram S Pixel · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1836, file: "336_monogram-s-mono_flat-duotone-yellow.png", label: "Monogram S Mono · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1837, file: "337_abstract-arc_minimal-line.png", label: "Abstract Arc · Minimal Line", dir: "logos-v3" },
  { id: 1838, file: "338_abstract-spiral_minimal-line-thick.png", label: "Abstract Spiral · Minimal Line Thick", dir: "logos-v3" },
  { id: 1839, file: "339_abstract-loop_scrappy-handdrawn.png", label: "Abstract Loop · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1840, file: "340_abstract-arrow_crayon.png", label: "Abstract Arrow · Crayon", dir: "logos-v3" },
  { id: 1841, file: "341_abstract-circle-square_embroidery.png", label: "Abstract Circle Square · Embroidery", dir: "logos-v3" },
  { id: 1842, file: "342_abstract-triangle-square_denim-patch.png", label: "Abstract Triangle Square · Denim Patch", dir: "logos-v3" },
  { id: 1843, file: "343_abstract-three-bars_graffiti-spray.png", label: "Abstract Three Bars · Graffiti Spray", dir: "logos-v3" },
  { id: 1844, file: "344_abstract-stack_postage-vintage.png", label: "Abstract Stack · Postage Vintage", dir: "logos-v3" },
  { id: 1845, file: "345_abstract-hex-grid_mid-century.png", label: "Abstract Hex Grid · Mid Century", dir: "logos-v3" },
  { id: 1846, file: "346_abstract-pin-dots_scandi-minimal.png", label: "Abstract Pin Dots · Scandi Minimal", dir: "logos-v3" },
  { id: 1847, file: "347_server-rack_japanese-modern.png", label: "Server Rack · Japanese Modern", dir: "logos-v3" },
  { id: 1848, file: "348_blade-server_mexican-folk.png", label: "Blade Server · Mexican Folk", dir: "logos-v3" },
  { id: 1849, file: "349_cloud-icon_nordic-runic.png", label: "Cloud Icon · Nordic Runic", dir: "logos-v3" },
  { id: 1850, file: "350_cloud-plus-pod_typewriter-mono.png", label: "Cloud Plus Pod · Typewriter Mono", dir: "logos-v3" },
  { id: 1851, file: "351_server-tower_mono-flat.png", label: "Server Tower · Mono Flat", dir: "logos-v3" },
  { id: 1852, file: "352_rj45-jack_dark-terminal.png", label: "Rj45 Jack · Dark Terminal", dir: "logos-v3" },
  { id: 1853, file: "353_ethernet-cable_brutalist-paper.png", label: "Ethernet Cable · Brutalist Paper", dir: "logos-v3" },
  { id: 1854, file: "354_modem-router_aurora-warm.png", label: "Modem Router · Aurora Warm", dir: "logos-v3" },
  { id: 1855, file: "355_port-icon_editorial-mono.png", label: "Port Icon · Editorial Mono", dir: "logos-v3" },
  { id: 1856, file: "356_rack-unit-iso_neon-pink-cyan.png", label: "Rack Unit Iso · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1857, file: "357_primary-composition_synthwave.png", label: "Primary Composition · Synthwave", dir: "logos-v3" },
  { id: 1858, file: "358_memphis-composition_vintage-cream.png", label: "Memphis Composition · Vintage Cream", dir: "logos-v3" },
  { id: 1859, file: "359_lighthouse_blueprint-cyan.png", label: "Lighthouse · Blueprint Cyan", dir: "logos-v3" },
  { id: 1860, file: "360_beacon-rings_isometric-pastel.png", label: "Beacon Rings · Isometric Pastel", dir: "logos-v3" },
  { id: 1861, file: "361_antenna-mast_cyberpunk-magenta.png", label: "Antenna Mast · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1862, file: "362_wifi-symbol_riso-print.png", label: "Wifi Symbol · Riso Print", dir: "logos-v3" },
  { id: 1863, file: "363_radar-sweep_paper-cut-layered.png", label: "Radar Sweep · Paper Cut Layered", dir: "logos-v3" },
  { id: 1864, file: "364_ping-marker_watercolor-soft.png", label: "Ping Marker · Watercolor Soft", dir: "logos-v3" },
  { id: 1865, file: "365_plug-socket-pair_ink-sumi.png", label: "Plug Socket Pair · Ink Sumi", dir: "logos-v3" },
  { id: 1866, file: "366_usb-c_etching-engraved.png", label: "Usb C · Etching Engraved", dir: "logos-v3" },
  { id: 1867, file: "367_jack-connector_retro-orange-brown.png", label: "Jack Connector · Retro Orange Brown", dir: "logos-v3" },
  { id: 1868, file: "368_rj45-pair_retro-pixel.png", label: "Rj45 Pair · Retro Pixel", dir: "logos-v3" },
  { id: 1869, file: "369_dock-port_y2k-chrome.png", label: "Dock Port · Y2k Chrome", dir: "logos-v3" },
  { id: 1870, file: "370_luggage-tag_memphis-pop.png", label: "Luggage Tag · Memphis Pop", dir: "logos-v3" },
  { id: 1871, file: "371_badge-circle_bauhaus-primary.png", label: "Badge Circle · Bauhaus Primary", dir: "logos-v3" },
  { id: 1872, file: "372_hang-tag_art-deco-gold.png", label: "Hang Tag · Art Deco Gold", dir: "logos-v3" },
  { id: 1873, file: "373_sticker-die-cut_art-nouveau-vine.png", label: "Sticker Die Cut · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1874, file: "374_name-tag_swiss-grid.png", label: "Name Tag · Swiss Grid", dir: "logos-v3" },
  { id: 1875, file: "375_file-folder-tab_punk-photocopy.png", label: "File Folder Tab · Punk Photocopy", dir: "logos-v3" },
  { id: 1876, file: "376_wax-seal_zine-collage.png", label: "Wax Seal · Zine Collage", dir: "logos-v3" },
  { id: 1877, file: "377_ink-stamp_vaporwave-gradient.png", label: "Ink Stamp · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1878, file: "378_notarized-stamp_matrix-green.png", label: "Notarized Stamp · Matrix Green", dir: "logos-v3" },
  { id: 1879, file: "379_postmark_graph-paper.png", label: "Postmark · Graph Paper", dir: "logos-v3" },
  { id: 1880, file: "380_ampersand_holographic.png", label: "Ampersand · Holographic", dir: "logos-v3" },
  { id: 1881, file: "381_plus-sign_chrome-3d-render.png", label: "Plus Sign · Chrome 3d Render", dir: "logos-v3" },
  { id: 1882, file: "382_at-sign_clay-3d-render.png", label: "At Sign · Clay 3d Render", dir: "logos-v3" },
  { id: 1883, file: "383_equals-sign_photoreal-bike.png", label: "Equals Sign · Photoreal Bike", dir: "logos-v3" },
  { id: 1884, file: "384_hash-tag_flat-duotone-mint.png", label: "Hash Tag · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1885, file: "385_container-floating_flat-duotone-coral.png", label: "Container Floating · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1886, file: "386_container-rocket_flat-duotone-yellow.png", label: "Container Rocket · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1887, file: "387_container-balloon_minimal-line.png", label: "Container Balloon · Minimal Line", dir: "logos-v3" },
  { id: 1888, file: "388_container-parachute_minimal-line-thick.png", label: "Container Parachute · Minimal Line Thick", dir: "logos-v3" },
  { id: 1889, file: "389_container-conveyor_scrappy-handdrawn.png", label: "Container Conveyor · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1890, file: "390_crest-shield_crayon.png", label: "Crest Shield · Crayon", dir: "logos-v3" },
  { id: 1891, file: "391_ribbon-banner_embroidery.png", label: "Ribbon Banner · Embroidery", dir: "logos-v3" },
  { id: 1892, file: "392_laurel-wreath_denim-patch.png", label: "Laurel Wreath · Denim Patch", dir: "logos-v3" },
  { id: 1893, file: "393_medal-pin_graffiti-spray.png", label: "Medal Pin · Graffiti Spray", dir: "logos-v3" },
  { id: 1894, file: "394_speech-bubble_postage-vintage.png", label: "Speech Bubble · Postage Vintage", dir: "logos-v3" },
  { id: 1895, file: "395_checkmark-badge_mid-century.png", label: "Checkmark Badge · Mid Century", dir: "logos-v3" },
  { id: 1896, file: "396_heart-cube_scandi-minimal.png", label: "Heart Cube · Scandi Minimal", dir: "logos-v3" },
  { id: 1897, file: "397_smile-cube_japanese-modern.png", label: "Smile Cube · Japanese Modern", dir: "logos-v3" },
  { id: 1898, file: "398_bento-grid-2x2_mexican-folk.png", label: "Bento Grid 2x2 · Mexican Folk", dir: "logos-v3" },
  { id: 1899, file: "399_bento-grid-3x1_nordic-runic.png", label: "Bento Grid 3x1 · Nordic Runic", dir: "logos-v3" },
  { id: 1900, file: "400_magazine-cover_typewriter-mono.png", label: "Magazine Cover · Typewriter Mono", dir: "logos-v3" },
  { id: 1901, file: "401_pixel-cube_mono-flat.png", label: "Pixel Cube · Mono Flat", dir: "logos-v3" },
  { id: 1902, file: "402_crt-monitor_dark-terminal.png", label: "Crt Monitor · Dark Terminal", dir: "logos-v3" },
  { id: 1903, file: "403_led-segment_brutalist-paper.png", label: "Led Segment · Brutalist Paper", dir: "logos-v3" },
  { id: 1904, file: "404_split-flap_aurora-warm.png", label: "Split Flap · Aurora Warm", dir: "logos-v3" },
  { id: 1905, file: "405_hex-lattice_editorial-mono.png", label: "Hex Lattice · Editorial Mono", dir: "logos-v3" },
  { id: 1906, file: "406_crystalline_neon-pink-cyan.png", label: "Crystalline · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1907, file: "407_particle-field_synthwave.png", label: "Particle Field · Synthwave", dir: "logos-v3" },
  { id: 1908, file: "408_brick-wall_vintage-cream.png", label: "Brick Wall · Vintage Cream", dir: "logos-v3" },
  { id: 1909, file: "409_railway-coupler_blueprint-cyan.png", label: "Railway Coupler · Blueprint Cyan", dir: "logos-v3" },
  { id: 1910, file: "410_bento-box_isometric-pastel.png", label: "Bento Box · Isometric Pastel", dir: "logos-v3" },
  { id: 1911, file: "411_subway-tile_cyberpunk-magenta.png", label: "Subway Tile · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1912, file: "412_apartment-window_riso-print.png", label: "Apartment Window · Riso Print", dir: "logos-v3" },
  { id: 1913, file: "413_two-cubes_paper-cut-layered.png", label: "Two Cubes · Paper Cut Layered", dir: "logos-v3" },
  { id: 1914, file: "414_cube-plus-helper_watercolor-soft.png", label: "Cube Plus Helper · Watercolor Soft", dir: "logos-v3" },
  { id: 1915, file: "415_nested-boxes_ink-sumi.png", label: "Nested Boxes · Ink Sumi", dir: "logos-v3" },
  { id: 1916, file: "416_docked-pair_etching-engraved.png", label: "Docked Pair · Etching Engraved", dir: "logos-v3" },
  { id: 1917, file: "417_buddy-boxes_retro-orange-brown.png", label: "Buddy Boxes · Retro Orange Brown", dir: "logos-v3" },
  { id: 1918, file: "418_yin-yang-cubes_retro-pixel.png", label: "Yin Yang Cubes · Retro Pixel", dir: "logos-v3" },
  { id: 1919, file: "419_container-with-pod_y2k-chrome.png", label: "Container With Pod · Y2k Chrome", dir: "logos-v3" },
  { id: 1920, file: "420_twin-cubes-iso_memphis-pop.png", label: "Twin Cubes Iso · Memphis Pop", dir: "logos-v3" },
  { id: 1921, file: "421_primary-sidecar-split_bauhaus-primary.png", label: "Primary Sidecar Split · Bauhaus Primary", dir: "logos-v3" },
  { id: 1922, file: "422_stack-and-helper_art-deco-gold.png", label: "Stack And Helper · Art Deco Gold", dir: "logos-v3" },
  { id: 1923, file: "423_k8s-pod-pair_art-nouveau-vine.png", label: "K8s Pod Pair · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1924, file: "424_dotted-attached_swiss-grid.png", label: "Dotted Attached · Swiss Grid", dir: "logos-v3" },
  { id: 1925, file: "425_twin-modules_punk-photocopy.png", label: "Twin Modules · Punk Photocopy", dir: "logos-v3" },
  { id: 1926, file: "426_plus-plug_zine-collage.png", label: "Plus Plug · Zine Collage", dir: "logos-v3" },
  { id: 1927, file: "427_co-pair-icon_vaporwave-gradient.png", label: "Co Pair Icon · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1928, file: "428_inline-helper_matrix-green.png", label: "Inline Helper · Matrix Green", dir: "logos-v3" },
  { id: 1929, file: "429_twin-pills_graph-paper.png", label: "Twin Pills · Graph Paper", dir: "logos-v3" },
  { id: 1930, file: "430_companion-square_holographic.png", label: "Companion Square · Holographic", dir: "logos-v3" },
  { id: 1931, file: "431_paired-rounded_chrome-3d-render.png", label: "Paired Rounded · Chrome 3d Render", dir: "logos-v3" },
  { id: 1932, file: "432_container-helper-iso_clay-3d-render.png", label: "Container Helper Iso · Clay 3d Render", dir: "logos-v3" },
  { id: 1933, file: "433_docker-whale_photoreal-bike.png", label: "Docker Whale · Photoreal Bike", dir: "logos-v3" },
  { id: 1934, file: "434_whale-with-pup_flat-duotone-mint.png", label: "Whale With Pup · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1935, file: "435_shipping-container_flat-duotone-coral.png", label: "Shipping Container · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1936, file: "436_container-stack_flat-duotone-yellow.png", label: "Container Stack · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1937, file: "437_container-ship_minimal-line.png", label: "Container Ship · Minimal Line", dir: "logos-v3" },
  { id: 1938, file: "438_container-port_minimal-line-thick.png", label: "Container Port · Minimal Line Thick", dir: "logos-v3" },
  { id: 1939, file: "439_box-on-pallet_scrappy-handdrawn.png", label: "Box On Pallet · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1940, file: "440_crate-mark_crayon.png", label: "Crate Mark · Crayon", dir: "logos-v3" },
  { id: 1941, file: "441_cargo-hold_embroidery.png", label: "Cargo Hold · Embroidery", dir: "logos-v3" },
  { id: 1942, file: "442_docker-cube-stack_denim-patch.png", label: "Docker Cube Stack · Denim Patch", dir: "logos-v3" },
  { id: 1943, file: "443_ip-card_graffiti-spray.png", label: "Ip Card · Graffiti Spray", dir: "logos-v3" },
  { id: 1944, file: "444_ip-tag-luggage_postage-vintage.png", label: "Ip Tag Luggage · Postage Vintage", dir: "logos-v3" },
  { id: 1945, file: "445_ipv6-card_mid-century.png", label: "Ipv6 Card · Mid Century", dir: "logos-v3" },
  { id: 1946, file: "446_ip-fingerprint_scandi-minimal.png", label: "Ip Fingerprint · Scandi Minimal", dir: "logos-v3" },
  { id: 1947, file: "447_dotted-quad_japanese-modern.png", label: "Dotted Quad · Japanese Modern", dir: "logos-v3" },
  { id: 1948, file: "448_ip-passport_mexican-folk.png", label: "Ip Passport · Mexican Folk", dir: "logos-v3" },
  { id: 1949, file: "449_ip-receipt_nordic-runic.png", label: "Ip Receipt · Nordic Runic", dir: "logos-v3" },
  { id: 1950, file: "450_ip-coin_typewriter-mono.png", label: "Ip Coin · Typewriter Mono", dir: "logos-v3" },
  { id: 1951, file: "451_ip-stamp_mono-flat.png", label: "Ip Stamp · Mono Flat", dir: "logos-v3" },
  { id: 1952, file: "452_ip-barcode_dark-terminal.png", label: "Ip Barcode · Dark Terminal", dir: "logos-v3" },
  { id: 1953, file: "453_padlock-minimal_brutalist-paper.png", label: "Padlock Minimal · Brutalist Paper", dir: "logos-v3" },
  { id: 1954, file: "454_shield-mark_aurora-warm.png", label: "Shield Mark · Aurora Warm", dir: "logos-v3" },
  { id: 1955, file: "455_key-skeleton_editorial-mono.png", label: "Key Skeleton · Editorial Mono", dir: "logos-v3" },
  { id: 1956, file: "456_dual-keys_neon-pink-cyan.png", label: "Dual Keys · Neon Pink Cyan", dir: "logos-v3" },
  { id: 1957, file: "457_tunnel-cylinder_synthwave.png", label: "Tunnel Cylinder · Synthwave", dir: "logos-v3" },
  { id: 1958, file: "458_tunnel-arch_vintage-cream.png", label: "Tunnel Arch · Vintage Cream", dir: "logos-v3" },
  { id: 1959, file: "459_tunnel-fiber_blueprint-cyan.png", label: "Tunnel Fiber · Blueprint Cyan", dir: "logos-v3" },
  { id: 1960, file: "460_vpn-link_isometric-pastel.png", label: "Vpn Link · Isometric Pastel", dir: "logos-v3" },
  { id: 1961, file: "461_lock-and-arrow_cyberpunk-magenta.png", label: "Lock And Arrow · Cyberpunk Magenta", dir: "logos-v3" },
  { id: 1962, file: "462_post-quantum-lattice_riso-print.png", label: "Post Quantum Lattice · Riso Print", dir: "logos-v3" },
  { id: 1963, file: "463_handshake-icon_paper-cut-layered.png", label: "Handshake Icon · Paper Cut Layered", dir: "logos-v3" },
  { id: 1964, file: "464_vault-door_watercolor-soft.png", label: "Vault Door · Watercolor Soft", dir: "logos-v3" },
  { id: 1965, file: "465_padlock-shackle-s_ink-sumi.png", label: "Padlock Shackle S · Ink Sumi", dir: "logos-v3" },
  { id: 1966, file: "466_shield-lattice_etching-engraved.png", label: "Shield Lattice · Etching Engraved", dir: "logos-v3" },
  { id: 1967, file: "467_encrypted-envelope_retro-orange-brown.png", label: "Encrypted Envelope · Retro Orange Brown", dir: "logos-v3" },
  { id: 1968, file: "468_globe-pins_retro-pixel.png", label: "Globe Pins · Retro Pixel", dir: "logos-v3" },
  { id: 1969, file: "469_globe-orbit-dots_y2k-chrome.png", label: "Globe Orbit Dots · Y2k Chrome", dir: "logos-v3" },
  { id: 1970, file: "470_flat-map-pins_memphis-pop.png", label: "Flat Map Pins · Memphis Pop", dir: "logos-v3" },
  { id: 1971, file: "471_globe-wireframe_bauhaus-primary.png", label: "Globe Wireframe · Bauhaus Primary", dir: "logos-v3" },
  { id: 1972, file: "472_globe-half_art-deco-gold.png", label: "Globe Half · Art Deco Gold", dir: "logos-v3" },
  { id: 1973, file: "473_compass-rose_art-nouveau-vine.png", label: "Compass Rose · Art Nouveau Vine", dir: "logos-v3" },
  { id: 1974, file: "474_map-pin_swiss-grid.png", label: "Map Pin · Swiss Grid", dir: "logos-v3" },
  { id: 1975, file: "475_five-region-map_punk-photocopy.png", label: "Five Region Map · Punk Photocopy", dir: "logos-v3" },
  { id: 1976, file: "476_globe-cube_zine-collage.png", label: "Globe Cube · Zine Collage", dir: "logos-v3" },
  { id: 1977, file: "477_network-globe-mesh_vaporwave-gradient.png", label: "Network Globe Mesh · Vaporwave Gradient", dir: "logos-v3" },
  { id: 1978, file: "478_terminal-prompt_matrix-green.png", label: "Terminal Prompt · Matrix Green", dir: "logos-v3" },
  { id: 1979, file: "479_yaml-snippet_graph-paper.png", label: "Yaml Snippet · Graph Paper", dir: "logos-v3" },
  { id: 1980, file: "480_compose-tag_holographic.png", label: "Compose Tag · Holographic", dir: "logos-v3" },
  { id: 1981, file: "481_brackets-mono_chrome-3d-render.png", label: "Brackets Mono · Chrome 3d Render", dir: "logos-v3" },
  { id: 1982, file: "482_curly-braces_clay-3d-render.png", label: "Curly Braces · Clay 3d Render", dir: "logos-v3" },
  { id: 1983, file: "483_greater-than-prompt_photoreal-bike.png", label: "Greater Than Prompt · Photoreal Bike", dir: "logos-v3" },
  { id: 1984, file: "484_ascii-block_flat-duotone-mint.png", label: "Ascii Block · Flat Duotone Mint", dir: "logos-v3" },
  { id: 1985, file: "485_blinking-cursor_flat-duotone-coral.png", label: "Blinking Cursor · Flat Duotone Coral", dir: "logos-v3" },
  { id: 1986, file: "486_code-comment_flat-duotone-yellow.png", label: "Code Comment · Flat Duotone Yellow", dir: "logos-v3" },
  { id: 1987, file: "487_docker-file-icon_minimal-line.png", label: "Docker File Icon · Minimal Line", dir: "logos-v3" },
  { id: 1988, file: "488_hashbang_minimal-line-thick.png", label: "Hashbang · Minimal Line Thick", dir: "logos-v3" },
  { id: 1989, file: "489_pipe-operator_scrappy-handdrawn.png", label: "Pipe Operator · Scrappy Handdrawn", dir: "logos-v3" },
  { id: 1990, file: "490_env-var_crayon.png", label: "Env Var · Crayon", dir: "logos-v3" },
  { id: 1991, file: "491_terminal-output_embroidery.png", label: "Terminal Output · Embroidery", dir: "logos-v3" },
  { id: 1992, file: "492_git-branch_denim-patch.png", label: "Git Branch · Denim Patch", dir: "logos-v3" },
  { id: 1993, file: "493_nodes-edges_graffiti-spray.png", label: "Nodes Edges · Graffiti Spray", dir: "logos-v3" },
  { id: 1994, file: "494_hub-spoke_postage-vintage.png", label: "Hub Spoke · Postage Vintage", dir: "logos-v3" },
  { id: 1995, file: "495_mesh-grid_mid-century.png", label: "Mesh Grid · Mid Century", dir: "logos-v3" },
  { id: 1996, file: "496_star-topology_scandi-minimal.png", label: "Star Topology · Scandi Minimal", dir: "logos-v3" },
  { id: 1997, file: "497_ring-topology_japanese-modern.png", label: "Ring Topology · Japanese Modern", dir: "logos-v3" },
  { id: 1998, file: "498_tree-topology_mexican-folk.png", label: "Tree Topology · Mexican Folk", dir: "logos-v3" },
  { id: 1999, file: "499_flow-arrow_nordic-runic.png", label: "Flow Arrow · Nordic Runic", dir: "logos-v3" },
  { id: 2000, file: "500_packet-stream_typewriter-mono.png", label: "Packet Stream · Typewriter Mono", dir: "logos-v3" },
];

// Helper: build raw GitHub URL for a logo, supporting both logos/ and logos-v2/
function logoUrl(logo) {
  const dir = logo.dir || "logos";
  return `https://raw.githubusercontent.com/opencolin/sidecar-logos/main/${dir}/${logo.file}`;
}

// ===== SUPABASE CONFIG =====
const SUPABASE_URL = 'https://mrnccntqmkxjazznejfc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmNjbnRxbWt4amF6em5lamZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA3NTksImV4cCI6MjA5MDc3Njc1OX0.T6oFTtYiFTsx6ojuogpZFXAS7tN5-dPzwvmY5V2xFGI';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Session ID — fresh each page load (avoids localStorage sandbox issues)
const SESSION_ID = crypto.randomUUID();

// ===== STATE =====
let votes = {}; // { id: { up: 0, down: 0, userVote: null } }
let sortMode = 'votes';
let searchQuery = '';
let lightboxId = null;
let filteredIds = [];
let voteInFlight = new Set(); // prevent double-clicks

// Init vote state for all logos
LOGOS.forEach(l => { votes[l.id] = { up: 0, down: 0, userVote: null }; });

// ===== SUPABASE LOAD =====
async function loadVotesFromSupabase() {
  try {
    // Load aggregate counts
    const { data: aggData, error: aggErr } = await sb
      .from('castle_votes')
      .select('logo_id, up_votes, down_votes');

    if (aggErr) throw aggErr;

    aggData.forEach(row => {
      if (votes[row.logo_id]) {
        votes[row.logo_id].up = row.up_votes || 0;
        votes[row.logo_id].down = row.down_votes || 0;
      }
    });

    // Load this session's votes
    const { data: userVoteData, error: userErr } = await sb
      .from('castle_user_votes')
      .select('logo_id, direction')
      .eq('session_id', SESSION_ID);

    if (userErr) throw userErr;

    userVoteData.forEach(row => {
      if (votes[row.logo_id]) {
        votes[row.logo_id].userVote = row.direction;
      }
    });

  } catch (err) {
    console.warn('Supabase load error (falling back to local):', err.message);
  }

  render();
  updateStats();
}

// ===== SUPABASE VOTE =====
async function persistVote(id, dir, wasVote) {
  // wasVote = the userVote state BEFORE this click (passed from castVote)
  const isSameDir = wasVote === dir;

  try {
    if (isSameDir) {
      // Toggle off: delete user vote row, decrement count
      await sb
        .from('castle_user_votes')
        .delete()
        .eq('logo_id', id)
        .eq('session_id', SESSION_ID);

      await sb.rpc('adjust_votes', { p_logo_id: id, p_up_delta: dir === 'up' ? -1 : 0, p_down_delta: dir === 'down' ? -1 : 0 });

    } else {
      // Upsert user vote (insert or update direction)
      await sb
        .from('castle_user_votes')
        .upsert(
          { logo_id: id, session_id: SESSION_ID, direction: dir },
          { onConflict: 'logo_id,session_id' }
        );

      // Adjust counts: +1 for new dir, -1 for old dir if existed
      const upDelta = (dir === 'up' ? 1 : 0) + (wasVote === 'up' ? -1 : 0);
      const downDelta = (dir === 'down' ? 1 : 0) + (wasVote === 'down' ? -1 : 0);

      await sb.rpc('adjust_votes', { p_logo_id: id, p_up_delta: upDelta, p_down_delta: downDelta });
    }
  } catch (err) {
    console.warn('Supabase vote error:', err.message);
  }
}

// ===== VOTE HELPERS =====
function getScore(id) {
  const v = votes[id];
  return v.up - v.down;
}

function getControversy(id) {
  const v = votes[id];
  const total = v.up + v.down;
  if (total === 0) return 0;
  const ratio = Math.min(v.up, v.down) / Math.max(v.up, v.down);
  return total * ratio;
}

function castVote(id, dir) {
  if (voteInFlight.has(id)) return; // debounce
  voteInFlight.add(id);

  const v = votes[id];
  const wasVote = v.userVote; // capture BEFORE mutation

  if (v.userVote === dir) {
    // toggle off
    v[dir]--;
    v.userVote = null;
  } else {
    if (v.userVote) { v[v.userVote]--; }
    v[dir]++;
    v.userVote = dir;
  }
  updateStats();

  // Persist to Supabase — pass wasVote so persistVote knows the pre-click state
  persistVote(id, dir, wasVote).finally(() => voteInFlight.delete(id));

  // SPAWN ON UPVOTE: new upvote (not toggle-off, not already-upvoted) triggers
  // 10 AI variations to be added to the gallery. Fire-and-forget.
  if (dir === 'up' && wasVote !== 'up') {
    const logo = LOGOS.find(l => l.id === id);
    if (logo) spawnVariations({ id, imageUrl: logoUrl(logo), label: logo.label });
  }
}

// ===== SPAWN ON UPVOTE =====
// Fires 10 AI variations of the upvoted logo. Renders a small "spawning" badge
// on the source card while the API works, then appends the resulting edit cards.
const spawnInFlight = new Set();

async function spawnVariations({ id, imageUrl, label }) {
  if (spawnInFlight.has(id)) return; // one in-flight per logo per page-load
  spawnInFlight.add(id);

  // Show a small "spawning" indicator on the source card if present
  const card = document.getElementById(`card-${id}`) || document.getElementById(`edit-card-${id}`);
  let badge = null;
  if (card) {
    badge = document.createElement('span');
    badge.className = 'spawn-badge';
    badge.textContent = '✦ spawning 20…';
    badge.style.cssText = 'position:absolute;top:0.4rem;left:0.4rem;background:var(--color-up,#16a34a);color:white;font-size:11px;font-weight:600;padding:0.2rem 0.5rem;border-radius:6px;z-index:5;';
    card.appendChild(badge);
  }

  try {
    const res = await fetch('/api/spawn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ logoId: typeof id === 'number' ? id : null, imageUrl, sessionId: SESSION_ID, parentLabel: label }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `spawn ${res.status}`);

    // Add returned edits to editCards and render
    (data.edits || []).forEach(e => {
      editCards[e.id] = {
        id: e.id,
        parentId: typeof id === 'number' ? id : null,
        prompt: e.tag,
        imageDataUrl: e.image_data_url,
        up: 0, down: 0, userVote: null,
        status: 'done',
        isSpawn: true,
      };
    });
    if (typeof renderEditCards === 'function') renderEditCards();

    if (badge) {
      badge.textContent = data.failed === 0
        ? `✦ +${data.spawned}`
        : `✦ +${data.spawned} (${data.failed} failed)`;
      setTimeout(() => badge.remove(), 4000);
    }
  } catch (err) {
    console.warn('spawn error:', err);
    if (badge) {
      badge.textContent = '✕ spawn failed';
      badge.style.background = 'var(--color-down, #dc2626)';
      setTimeout(() => badge.remove(), 4000);
    }
  } finally {
    spawnInFlight.delete(id);
  }
}

// ===== SORT & FILTER =====
function getSortedFiltered() {
  let list = LOGOS.filter(l =>
    !searchQuery || l.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortMode === 'votes') {
    list.sort((a, b) => {
      const sd = getScore(b.id) - getScore(a.id);
      if (sd !== 0) return sd;
      return a.id - b.id;
    });
  } else if (sortMode === 'newest') {
    list.sort((a, b) => b.id - a.id);
  } else if (sortMode === 'controversial') {
    list.sort((a, b) => getControversy(b.id) - getControversy(a.id));
  }

  return list;
}

// ===== RENDER =====
function render() {
  const list = getSortedFiltered();
  filteredIds = list.map(l => l.id);
  const grid = document.getElementById('logo-grid');
  const noResults = document.getElementById('no-results');

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults.hidden = false;
    return;
  }
  noResults.hidden = true;

  // Build all cards at once for performance
  const fragment = document.createDocumentFragment();
  list.forEach((logo, idx) => {
    const existing = document.getElementById(`card-${logo.id}`);
    if (existing) {
      // Update in place (just score + vote state)
      updateCard(logo.id);
      fragment.appendChild(existing);
    } else {
      fragment.appendChild(createCard(logo, idx));
    }
  });
  grid.innerHTML = '';
  grid.appendChild(fragment);

  // Apply rank badges
  list.forEach((logo, idx) => {
    const card = document.getElementById(`card-${logo.id}`);
    if (!card) return;
    card.classList.remove('rank-1', 'rank-2', 'rank-3');
    const badge = card.querySelector('.rank-badge');
    if (sortMode === 'votes') {
      const score = getScore(logo.id);
      if (score > 0) {
        if (idx === 0) { card.classList.add('rank-1'); if (badge) badge.textContent = '🥇 #1'; }
        else if (idx === 1) { card.classList.add('rank-2'); if (badge) badge.textContent = '🥈 #2'; }
        else if (idx === 2) { card.classList.add('rank-3'); if (badge) badge.textContent = '🥉 #3'; }
        else if (badge) badge.textContent = `#${idx + 1}`;
      } else {
        if (badge) badge.textContent = `#${idx + 1}`;
      }
    } else {
      if (badge) badge.textContent = `#${idx + 1}`;
    }
  });

  // Re-render any AI edit/created cards that were wiped by grid.innerHTML = ''
  if (typeof renderEditCards === 'function') renderEditCards();
  if (typeof renderCreatedCards === 'function') renderCreatedCards();
}

function renderCreatedCards() {
  Object.values(editCards)
    .filter(e => e.isCreated && e.status === 'done' && e.imageDataUrl)
    .forEach(renderCreatedCard);
}

function createCard(logo, idx) {
  const v = votes[logo.id];
  const score = getScore(logo.id);
  const card = document.createElement('article');
  card.className = 'logo-card';
  card.id = `card-${logo.id}`;
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `Logo ${logo.id}: ${logo.label}`);

  card.innerHTML = `
    <span class="rank-badge">#${idx + 1}</span>
    <div class="logo-img-wrap">
      <img class="logo-img" src="${logoUrl(logo)}" alt="${logo.label} sidecar logo" loading="lazy" decoding="async" />
      <span class="logo-num">${String(logo.id).padStart(3,'0')}</span>
    </div>
    <div class="logo-body">
      <p class="logo-label">${logo.label}</p>
      <div class="vote-row">
        <button class="vote-btn vote-up${v.userVote === 'up' ? ' voted' : ''}" data-id="${logo.id}" data-dir="up" aria-label="Upvote ${logo.label}" aria-pressed="${v.userVote === 'up'}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          ${v.up}
        </button>
        <span class="score${score > 0 ? ' positive' : score < 0 ? ' negative' : ''}">${score > 0 ? '+' : ''}${score}</span>
        <button class="vote-btn vote-down${v.userVote === 'down' ? ' voted' : ''}" data-id="${logo.id}" data-dir="down" aria-label="Downvote ${logo.label}" aria-pressed="${v.userVote === 'down'}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          ${v.down}
        </button>
      </div>
    </div>
  `;

  // Click image to open lightbox
  card.querySelector('.logo-img-wrap').addEventListener('click', (e) => {
    e.stopPropagation();
    openLightbox(logo.id);
  });

  // Vote buttons
  card.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const dir = btn.dataset.dir;
      castVote(id, dir);
      btn.classList.add('pulse');
      btn.addEventListener('animationend', () => btn.classList.remove('pulse'), { once: true });
      updateCard(id);
      updateStats();
      if (sortMode === 'votes') {
        // Re-sort after short delay
        setTimeout(() => render(), 300);
      }
    });
  });

  // Edit button
  const logoBody = card.querySelector('.logo-body');
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.dataset.logoId = logo.id;
  editBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Edit`;
  editBtn.addEventListener('click', e => {
    e.stopPropagation();
    const imgUrl = logoUrl(logo);
    openEditModal(logo.id, imgUrl);
  });
  logoBody.appendChild(editBtn);

  // Mint button
  const mintBtn = document.createElement('button');
  mintBtn.className = 'mint-btn';
  mintBtn.dataset.logoId = logo.id;
  mintBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Mint Icon`;
  mintBtn.addEventListener('click', e => {
    e.stopPropagation();
    const imgUrl = logoUrl(logo);
    submitMint(logo.id, imgUrl, mintBtn, logo.label);
  });
  logoBody.appendChild(mintBtn);

  return card;
}

function updateCard(id) {
  const card = document.getElementById(`card-${id}`);
  if (!card) return;
  const v = votes[id];
  const score = getScore(id);

  const upBtn = card.querySelector('.vote-up');
  const downBtn = card.querySelector('.vote-down');
  const scoreEl = card.querySelector('.score');

  if (upBtn) {
    upBtn.classList.toggle('voted', v.userVote === 'up');
    upBtn.setAttribute('aria-pressed', v.userVote === 'up');
    upBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>${v.up}`;
  }
  if (downBtn) {
    downBtn.classList.toggle('voted', v.userVote === 'down');
    downBtn.setAttribute('aria-pressed', v.userVote === 'down');
    downBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>${v.down}`;
  }
  if (scoreEl) {
    scoreEl.textContent = (score > 0 ? '+' : '') + score;
    scoreEl.className = 'score' + (score > 0 ? ' positive' : score < 0 ? ' negative' : '');
  }
}

// ===== STATS =====
function updateStats() {
  const totalVotes = Object.values(votes).reduce((s, v) => s + v.up + v.down, 0);
  const votedCount = Object.values(votes).filter(v => v.userVote).length;

  document.getElementById('stat-votes').textContent = totalVotes;
  document.getElementById('stat-voted').textContent = votedCount;

  // Leader
  const topScore = Math.max(...LOGOS.map(l => getScore(l.id)));
  if (topScore > 0) {
    const leader = LOGOS.find(l => getScore(l.id) === topScore);
    if (leader) document.getElementById('stat-leader').textContent = `#${leader.id} ${leader.label}`;
  } else {
    document.getElementById('stat-leader').textContent = '—';
  }
}

// ===== LIGHTBOX =====
function openLightbox(id) {
  lightboxId = id;
  const logo = LOGOS.find(l => l.id === id);
  if (!logo) return;

  document.getElementById('lightbox').hidden = false;
  document.getElementById('lightbox-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';

  updateLightbox();
  document.getElementById('lightbox').focus();
}

function updateLightbox() {
  if (!lightboxId) return;
  const logo = LOGOS.find(l => l.id === lightboxId);
  if (!logo) return;
  const v = votes[logo.id];
  const score = getScore(logo.id);

  document.getElementById('lightbox-img').src = logoUrl(logo);
  document.getElementById('lightbox-img').alt = `${logo.label} sidecar logo`;
  document.getElementById('lightbox-num').textContent = `#${String(logo.id).padStart(3,'0')} of ${LOGOS.length}`;
  document.getElementById('lightbox-title').textContent = logo.label;

  const upBtn = document.getElementById('lb-upvote');
  const downBtn = document.getElementById('lb-downvote');
  const scoreEl = document.getElementById('lb-score');

  upBtn.className = 'vote-btn vote-up large' + (v.userVote === 'up' ? ' voted' : '');
  upBtn.setAttribute('aria-pressed', v.userVote === 'up');
  document.getElementById('lb-up-count').textContent = v.up;

  downBtn.className = 'vote-btn vote-down large' + (v.userVote === 'down' ? ' voted' : '');
  downBtn.setAttribute('aria-pressed', v.userVote === 'down');
  document.getElementById('lb-down-count').textContent = v.down;

  scoreEl.textContent = (score > 0 ? '+' : '') + score;
  scoreEl.className = 'score-display' + (score > 0 ? ' positive' : score < 0 ? ' negative' : '');

  // Nav buttons
  const pos = filteredIds.indexOf(lightboxId);
  document.getElementById('lb-prev').disabled = pos <= 0;
  document.getElementById('lb-next').disabled = pos >= filteredIds.length - 1;
}

function closeLightbox() {
  lightboxId = null;
  document.getElementById('lightbox').hidden = true;
  document.getElementById('lightbox-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== EVENT LISTENERS =====

// Sort tabs
document.querySelectorAll('.sort-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sort-tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    sortMode = tab.dataset.sort;
    render();
  });
});

// Search
document.querySelector('.search-input').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  render();
});

// All Sidecars button — clears search and resets sort to show everything
document.getElementById('all-sidecars-btn').addEventListener('click', () => {
  searchQuery = '';
  document.querySelector('.search-input').value = '';
  document.getElementById('all-sidecars-btn').textContent = `All Sidecars (${LOGOS.length})`;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
(function () {
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  t.innerHTML = d === 'dark'
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  t.addEventListener('click', () => {
    d = d === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', d);
    t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
    t.innerHTML = d === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  });
})();

// Lightbox controls
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);

document.getElementById('lb-upvote').addEventListener('click', () => {
  if (!lightboxId) return;
  castVote(lightboxId, 'up');
  updateCard(lightboxId);
  updateLightbox();
  if (sortMode === 'votes') setTimeout(() => render(), 300);
});

document.getElementById('lb-downvote').addEventListener('click', () => {
  if (!lightboxId) return;
  castVote(lightboxId, 'down');
  updateCard(lightboxId);
  updateLightbox();
  if (sortMode === 'votes') setTimeout(() => render(), 300);
});

document.getElementById('lb-prev').addEventListener('click', () => {
  const pos = filteredIds.indexOf(lightboxId);
  if (pos > 0) { lightboxId = filteredIds[pos - 1]; updateLightbox(); }
});

document.getElementById('lb-next').addEventListener('click', () => {
  const pos = filteredIds.indexOf(lightboxId);
  if (pos < filteredIds.length - 1) { lightboxId = filteredIds[pos + 1]; updateLightbox(); }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (lightboxId !== null) {
    if (e.key === 'Escape') { closeLightbox(); return; }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const pos = filteredIds.indexOf(lightboxId);
      if (pos > 0) { lightboxId = filteredIds[pos - 1]; updateLightbox(); }
      return;
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const pos = filteredIds.indexOf(lightboxId);
      if (pos < filteredIds.length - 1) { lightboxId = filteredIds[pos + 1]; updateLightbox(); }
      return;
    }
    if (e.key === 'u' || e.key === 'U') {
      castVote(lightboxId, 'up');
      updateCard(lightboxId);
      updateLightbox();
    }
    if (e.key === 'd' || e.key === 'D') {
      castVote(lightboxId, 'down');
      updateCard(lightboxId);
      updateLightbox();
    }
  }
});

// =====================================================================
// ===== AI EDIT FEATURE =====
// =====================================================================

const VERCEL_EDIT_API = '/api/edit';

// In-memory store for AI-edited cards: { editId -> { parentId, prompt, imageDataUrl, up, down, userVote } }
let editCards = {};

// Poll handles: { editId -> intervalId }
let editPolls = {};

// ===== INIT =====
// Show a placeholder render immediately, then load real data from Supabase
document.getElementById('stat-total').textContent = LOGOS.length;
document.getElementById('all-sidecars-btn').textContent = `All Sidecars (${LOGOS.length})`;
render();
updateStats();
loadVotesFromSupabase();

// ===== LOAD EXISTING EDITS FROM SUPABASE =====
async function loadEditsFromSupabase() {
  try {
    const { data, error } = await sb
      .from('castle_edits')
      .select('id, parent_logo_id, prompt, image_data_url, up_votes, down_votes, status, is_mint, created_at')
      .eq('status', 'done')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Load user votes for these edits
    const editIds = data.map(e => e.id);
    let userVoteMap = {};
    if (editIds.length > 0) {
      const { data: uvData } = await sb
        .from('castle_edit_user_votes')
        .select('edit_id, direction')
        .eq('session_id', SESSION_ID)
        .in('edit_id', editIds);
      (uvData || []).forEach(r => { userVoteMap[r.edit_id] = r.direction; });
    }

    data.forEach(e => {
      editCards[e.id] = {
        id: e.id,
        parentId: e.parent_logo_id,
        prompt: e.prompt,
        imageDataUrl: e.image_data_url,
        up: e.up_votes || 0,
        down: e.down_votes || 0,
        userVote: userVoteMap[e.id] || null,
        status: 'done',
        isMint: e.is_mint || false,
      };
    });

    if (data.length > 0) renderEditCards();
  } catch (err) {
    console.warn('Failed to load edits:', err);
  }
}

// ===== RENDER EDIT CARDS =====
function renderEditCards() {
  const grid = document.getElementById('logo-grid');
  Object.values(editCards).forEach(edit => {
    const existingCard = document.getElementById(`edit-card-${edit.id}`);
    if (existingCard) {
      if (!edit.isMint) updateEditCard(edit.id);
      return;
    }
    if (edit.status !== 'done' || !edit.imageDataUrl) return;
    // Route minted icons to their own renderer
    if (edit.isMint) {
      renderMintCard(edit);
      return;
    }
    const card = createEditCard(edit);
    // Insert after the parent card if possible
    const parentCard = document.getElementById(`card-${edit.parentId}`);
    if (parentCard && parentCard.nextSibling) {
      grid.insertBefore(card, parentCard.nextSibling);
    } else {
      grid.appendChild(card);
    }
  });
}

function createEditCard(edit) {
  const score = edit.up - edit.down;
  const card = document.createElement('article');
  card.className = 'logo-card';
  card.id = `edit-card-${edit.id}`;
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `AI Edit of logo ${edit.parentId}`);
  card.style.position = 'relative';

  const parentLogo = LOGOS.find(l => l.id === edit.parentId);
  const parentLabel = parentLogo ? parentLogo.label : `Logo #${edit.parentId}`;

  card.innerHTML = `
    <span class="ai-badge">✦ AI Edit</span>
    <div class="logo-img-wrap" style="cursor:pointer">
      <img class="logo-img" src="${edit.imageDataUrl}" alt="AI edit of ${parentLabel}" loading="lazy" />
    </div>
    <div class="logo-body">
      <p class="logo-label">${parentLabel}</p>
      <p class="edit-prompt-tag" title="${edit.prompt}">"${edit.prompt}"</p>
      <div class="vote-row">
        <button class="vote-btn vote-up${edit.userVote === 'up' ? ' voted' : ''}" data-edit-id="${edit.id}" data-dir="up" aria-label="Upvote edit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          ${edit.up}
        </button>
        <span class="score${score > 0 ? ' positive' : score < 0 ? ' negative' : ''}">${score > 0 ? '+' : ''}${score}</span>
        <button class="vote-btn vote-down${edit.userVote === 'down' ? ' voted' : ''}" data-edit-id="${edit.id}" data-dir="down" aria-label="Downvote edit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          ${edit.down}
        </button>
      </div>
      <button class="edit-btn" data-logo-id="${edit.parentId}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        Edit again
      </button>
    </div>
  `;

  // Vote buttons
  card.querySelectorAll('.vote-btn[data-edit-id]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      castEditVote(edit.id, btn.dataset.dir);
      btn.classList.add('pulse');
      btn.addEventListener('animationend', () => btn.classList.remove('pulse'), { once: true });
    });
  });

  // Edit again button
  card.querySelector('.edit-btn').addEventListener('click', e => {
    e.stopPropagation();
    openEditModal(parseInt(btn.dataset.logoId), edit.imageDataUrl);
  });

  // Lightbox on image click
  card.querySelector('.logo-img-wrap').addEventListener('click', () => {
    openEditLightbox(edit);
  });

  return card;
}

function updateEditCard(editId) {
  const edit = editCards[editId];
  if (!edit) return;
  const card = document.getElementById(`edit-card-${editId}`);
  if (!card) return;
  const score = edit.up - edit.down;
  const upBtn = card.querySelector('.vote-up');
  const downBtn = card.querySelector('.vote-down');
  const scoreEl = card.querySelector('.score');
  if (upBtn) {
    upBtn.classList.toggle('voted', edit.userVote === 'up');
    upBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>${edit.up}`;
  }
  if (downBtn) {
    downBtn.classList.toggle('voted', edit.userVote === 'down');
    downBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>${edit.down}`;
  }
  if (scoreEl) {
    scoreEl.textContent = (score > 0 ? '+' : '') + score;
    scoreEl.className = 'score' + (score > 0 ? ' positive' : score < 0 ? ' negative' : '');
  }
}

// ===== EDIT VOTING =====
async function castEditVote(editId, dir) {
  const edit = editCards[editId];
  if (!edit) return;
  const wasVote = edit.userVote;
  const isSameDir = wasVote === dir;

  // Optimistic update
  if (isSameDir) {
    edit[dir]--;
    edit.userVote = null;
  } else {
    if (wasVote) edit[wasVote]--;
    edit[dir]++;
    edit.userVote = dir;
  }
  updateEditCard(editId);

  // SPAWN ON UPVOTE (recursive): a new upvote on an AI-generated edit also
  // triggers 10 variations of it. parent_logo_id rolls up to the original.
  if (dir === 'up' && wasVote !== 'up' && edit.imageDataUrl) {
    spawnVariations({
      id: edit.parentId ?? editId, // attribute variations to the original logo when possible
      imageUrl: edit.imageDataUrl,
      label: edit.prompt || 'variation',
    });
  }

  // Persist
  try {
    if (isSameDir) {
      await sb.from('castle_edit_user_votes').delete()
        .eq('edit_id', editId).eq('session_id', SESSION_ID);
      await sb.rpc('adjust_edit_votes', {
        p_edit_id: editId,
        p_up_delta: dir === 'up' ? -1 : 0,
        p_down_delta: dir === 'down' ? -1 : 0,
      });
    } else {
      await sb.from('castle_edit_user_votes').upsert(
        { edit_id: editId, session_id: SESSION_ID, direction: dir },
        { onConflict: 'edit_id,session_id' }
      );
      const upDelta = (dir === 'up' ? 1 : 0) + (wasVote === 'up' ? -1 : 0);
      const downDelta = (dir === 'down' ? 1 : 0) + (wasVote === 'down' ? -1 : 0);
      await sb.rpc('adjust_edit_votes', {
        p_edit_id: editId,
        p_up_delta: upDelta,
        p_down_delta: downDelta,
      });
    }
  } catch (err) {
    console.warn('Edit vote persist error:', err);
  }
}

// ===== EDIT LIGHTBOX (simple alert-style for edited images) =====
function openEditLightbox(edit) {
  // Reuse the main lightbox for preview
  const parentLogo = LOGOS.find(l => l.id === edit.parentId);
  document.getElementById('lightbox-img').src = edit.imageDataUrl;
  document.getElementById('lightbox-img').alt = `AI edit`;
  document.getElementById('lightbox-num').textContent = `✦ AI Edit`;
  document.getElementById('lightbox-title').textContent = parentLogo ? parentLogo.label : `Logo #${edit.parentId}`;
  document.getElementById('lb-up-count').textContent = edit.up;
  document.getElementById('lb-down-count').textContent = edit.down;
  document.getElementById('lb-score').textContent = (edit.up - edit.down > 0 ? '+' : '') + (edit.up - edit.down);
  document.getElementById('lb-prev').disabled = true;
  document.getElementById('lb-next').disabled = true;
  document.getElementById('lightbox').hidden = false;
  document.getElementById('lightbox-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxId = null; // signal it's an edit lightbox
}

// ===== EDIT MODAL =====
let editModalLogoId = null;
let editModalImageUrl = null;

function openEditModal(logoId, imageUrl) {
  editModalLogoId = logoId;
  editModalImageUrl = imageUrl;

  const logo = LOGOS.find(l => l.id === logoId);
  document.getElementById('edit-modal-preview').src = imageUrl;
  document.getElementById('edit-modal-preview').alt = logo ? logo.label : '';
  document.getElementById('edit-modal-logo-name').textContent = logo ? `#${logo.id} — ${logo.label}` : '';
  document.getElementById('edit-prompt-input').value = '';
  document.getElementById('edit-status').hidden = true;
  document.getElementById('edit-status').textContent = '';
  document.getElementById('edit-generate-btn').disabled = false;

  document.getElementById('edit-modal').hidden = false;
  document.getElementById('edit-modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('edit-prompt-input').focus();
}

function closeEditModal() {
  document.getElementById('edit-modal').hidden = true;
  document.getElementById('edit-modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';
  editModalLogoId = null;
  editModalImageUrl = null;
}

async function submitEdit() {
  const prompt = document.getElementById('edit-prompt-input').value.trim();
  if (!prompt) {
    document.getElementById('edit-prompt-input').focus();
    return;
  }

  const btn = document.getElementById('edit-generate-btn');
  const statusEl = document.getElementById('edit-status');
  btn.disabled = true;
  statusEl.hidden = false;
  statusEl.className = 'edit-status';
  statusEl.innerHTML = '<span class="spinner"></span> Queuing edit…';

  try {
    const res = await fetch(VERCEL_EDIT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        parentLogoId: editModalLogoId,
        sessionId: SESSION_ID,
        prompt,
        imageUrl: editModalImageUrl,
      }),
    });

    statusEl.innerHTML = '<span class="spinner"></span> Generating with nano banana pro… (may take ~30s)';

    const data = await res.json();
    if (!res.ok || data.error || data.status === 'error') {
      throw new Error(data.error || 'Generation failed');
    }

    if (data.status === 'done' && data.imageDataUrl) {
      closeEditModal();
      const localId = `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      editCards[localId] = {
        id: localId,
        parentId: editModalLogoId,
        prompt,
        imageDataUrl: data.imageDataUrl,
        up: 0,
        down: 0,
        userVote: null,
        status: 'done',
      };
      renderEditCards();
    } else {
      throw new Error('No image returned');
    }

  } catch (err) {
    statusEl.className = 'edit-status error';
    statusEl.innerHTML = `✕ ${err.message}`;
    btn.disabled = false;
  }
}

function addPendingEditCard(jobId, logoId, prompt) {
  const grid = document.getElementById('logo-grid');
  const card = document.createElement('article');
  card.className = 'logo-card pending-edit';
  card.id = `pending-card-${jobId}`;
  card.setAttribute('role', 'listitem');
  card.style.position = 'relative';

  const parentLogo = LOGOS.find(l => l.id === logoId);
  const parentLabel = parentLogo ? parentLogo.label : `Logo #${logoId}`;
  const parentImgUrl = parentLogo
    ? logoUrl(parentLogo)
    : '';

  card.innerHTML = `
    <span class="ai-badge">✦ Generating…</span>
    <div class="logo-img-wrap">
      <img class="logo-img" src="${parentImgUrl}" alt="Generating…" style="opacity:0.3" />
    </div>
    <div class="logo-body">
      <p class="logo-label">${parentLabel}</p>
      <p class="edit-prompt-tag">"${prompt}"</p>
      <div style="display:flex;align-items:center;gap:0.4rem;margin-top:0.5rem;font-size:var(--text-xs);color:var(--color-text-muted)">
        <span class="spinner"></span> nano banana pro is cooking…
      </div>
    </div>
  `;

  // Insert right after parent card
  const parentCard = document.getElementById(`card-${logoId}`);
  if (parentCard && parentCard.nextSibling) {
    grid.insertBefore(card, parentCard.nextSibling);
  } else {
    grid.prepend(card);
  }
}

function pollEditJob(jobId) {
  let attempts = 0;
  const maxAttempts = 60; // 3 min max

  const intervalId = setInterval(async () => {
    attempts++;
    if (attempts > maxAttempts) {
      clearInterval(intervalId);
      removePendingCard(jobId);
      return;
    }

    try {
      const { data, error } = await sb
        .from('castle_edits')
        .select('id, parent_logo_id, prompt, image_data_url, up_votes, down_votes, status, error_msg')
        .eq('id', jobId)
        .single();

      if (error) throw error;

      if (data.status === 'done' && data.image_data_url) {
        clearInterval(intervalId);
        removePendingCard(jobId);

        // Add to editCards and render
        editCards[data.id] = {
          id: data.id,
          parentId: data.parent_logo_id,
          prompt: data.prompt,
          imageDataUrl: data.image_data_url,
          up: data.up_votes || 0,
          down: data.down_votes || 0,
          userVote: null,
          status: 'done',
        };
        renderEditCards();

      } else if (data.status === 'error') {
        clearInterval(intervalId);
        removePendingCard(jobId, data.error_msg);
      }
    } catch (err) {
      console.warn('Poll error:', err);
    }
  }, 3000);

  editPolls[jobId] = intervalId;
}

function removePendingCard(jobId, errorMsg) {
  const card = document.getElementById(`pending-card-${jobId}`);
  if (!card) return;
  if (errorMsg) {
    card.querySelector('.logo-body').innerHTML += `<p style="color:var(--color-down);font-size:var(--text-xs);margin-top:0.4rem">✕ ${errorMsg}</p>`;
    card.classList.remove('pending-edit');
    setTimeout(() => card.remove(), 5000);
  } else {
    card.remove();
  }
}

// ===== EDIT MODAL EVENT LISTENERS =====
document.getElementById('edit-modal-close').addEventListener('click', closeEditModal);
document.getElementById('edit-modal-backdrop').addEventListener('click', closeEditModal);
document.getElementById('edit-generate-btn').addEventListener('click', submitEdit);
document.getElementById('edit-prompt-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) submitEdit();
});

// Quick prompt buttons — edit modal
document.querySelectorAll('#edit-modal .edit-quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('edit-prompt-input').value = btn.dataset.prompt;
    document.getElementById('edit-prompt-input').focus();
  });
});

// Close edit modal on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !document.getElementById('edit-modal').hidden) closeEditModal();
  if (e.key === 'Escape' && !document.getElementById('create-modal').hidden) closeCreateModal();
});

// ===== CREATE NEW FEATURE =====
const VERCEL_CREATE_API = '/api/create';

function openCreateModal() {
  const DEFAULT_PROMPT = 'Flat single-color sidecar logo for Sidecar, neon cyan on white background, clean vector silhouette style, no gradients';
  document.getElementById('create-prompt-input').value = DEFAULT_PROMPT;
  document.getElementById('create-status').hidden = true;
  document.getElementById('create-generate-btn').disabled = false;
  document.getElementById('create-modal').hidden = false;
  document.getElementById('create-modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  const ta = document.getElementById('create-prompt-input');
  ta.focus();
  ta.select();
}

function closeCreateModal() {
  document.getElementById('create-modal').hidden = true;
  document.getElementById('create-modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

async function submitCreate() {
  const prompt = document.getElementById('create-prompt-input').value.trim();
  if (!prompt) {
    document.getElementById('create-prompt-input').focus();
    return;
  }

  const btn = document.getElementById('create-generate-btn');
  const statusEl = document.getElementById('create-status');
  btn.disabled = true;
  statusEl.hidden = false;
  statusEl.className = 'edit-status';
  statusEl.innerHTML = '<span class="spinner"></span> Generating with nano banana pro… (may take ~30s)';

  try {
    const res = await fetch(VERCEL_CREATE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: SESSION_ID, prompt }),
    });

    const data = await res.json();
    if (!res.ok || data.error || data.status === 'error') {
      throw new Error(data.error || 'Generation failed');
    }

    closeCreateModal();

    if (data.status === 'done' && data.imageDataUrl) {
      const localId = `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      editCards[localId] = {
        id: localId,
        parentId: null,
        prompt,
        imageDataUrl: data.imageDataUrl,
        up: 0,
        down: 0,
        userVote: null,
        status: 'done',
        isCreated: true,
      };
      renderCreatedCard(editCards[localId]);
    } else {
      throw new Error('No image returned');
    }
  } catch (err) {
    statusEl.className = 'edit-status error';
    statusEl.innerHTML = `✕ ${err.message}`;
    btn.disabled = false;
  }
}

function renderCreatedCard(edit) {
  // Created cards go at the very top of the grid
  const existingCard = document.getElementById(`edit-card-${edit.id}`);
  if (existingCard) return;

  const card = createEditCard(edit);
  // Override the AI badge text for created cards
  const badge = card.querySelector('.ai-badge');
  if (badge) badge.textContent = '✦ Created';

  const grid = document.getElementById('logo-grid');
  grid.prepend(card);
}

// Quick prompt buttons — create modal
document.querySelectorAll('#create-modal .edit-quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('create-prompt-input').value = btn.dataset.createPrompt;
    document.getElementById('create-prompt-input').focus();
  });
});

document.getElementById('create-new-btn').addEventListener('click', openCreateModal);
document.getElementById('create-modal-close').addEventListener('click', closeCreateModal);
document.getElementById('create-modal-backdrop').addEventListener('click', closeCreateModal);
document.getElementById('create-generate-btn').addEventListener('click', submitCreate);
document.getElementById('create-prompt-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) submitCreate();
});

// Also load created-type edits (parent_logo_id IS NULL) on init
async function loadCreatedFromSupabase() {
  try {
    const { data } = await sb
      .from('castle_edits')
      .select('id, parent_logo_id, prompt, image_data_url, up_votes, down_votes, status')
      .eq('status', 'done')
      .is('parent_logo_id', null)
      .order('created_at', { ascending: false });

    (data || []).forEach(e => {
      if (!e.image_data_url) return;
      editCards[e.id] = {
        id: e.id,
        parentId: null,
        prompt: e.prompt,
        imageDataUrl: e.image_data_url,
        up: e.up_votes || 0,
        down: e.down_votes || 0,
        userVote: null,
        status: 'done',
        isCreated: true,
      };
    });

    // Render after LOGOS grid is populated
    if (Object.values(editCards).some(e => e.isCreated)) {
      Object.values(editCards).filter(e => e.isCreated).forEach(renderCreatedCard);
    }
  } catch (err) {
    console.warn('Failed to load created logos:', err);
  }
}

// ===== MINT ICON FEATURE =====
async function submitMint(logoId, imageUrl, btn, label) {
  if (btn.disabled) return;
  btn.disabled = true;
  btn.classList.add('mint-loading');
  btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Minting…`;

  try {
    const res = await fetch('/api/mint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ logoId, imageUrl, sessionId: SESSION_ID }),
    });
    const data = await res.json();
    const url = data.imageDataUrl || data.url;
    if (!res.ok || data.status === 'error' || !url) throw new Error(data.error || 'Mint failed');

    // Store in editCards so it persists across re-renders
    const fakeId = `mint-local-${logoId}-${Date.now()}`;
    editCards[fakeId] = {
      id: fakeId,
      parentId: logoId,
      prompt: 'Mint Icon',
      imageDataUrl: url,
      up: 0, down: 0, userVote: null,
      status: 'done',
      isMint: true,
      label,
    };

    renderMintCard(editCards[fakeId]);

    // Reset button
    btn.disabled = false;
    btn.classList.remove('mint-loading');
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Mint Icon`;
  } catch (err) {
    btn.disabled = false;
    btn.classList.remove('mint-loading');
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Mint Icon`;
    // Show error inline under the button
    const errEl = document.createElement('p');
    errEl.style.cssText = 'color:var(--color-down);font-size:var(--text-xs);margin-top:0.3rem;text-align:center;';
    errEl.textContent = `✕ ${err.message}`;
    btn.parentNode.insertBefore(errEl, btn.nextSibling);
    setTimeout(() => errEl.remove(), 5000);
    console.error('Mint error:', err);
  }
}

function renderMintCard(edit) {
  const grid = document.getElementById('logo-grid');
  if (!grid) return;
  const existingCard = document.getElementById(`edit-card-${edit.id}`);
  if (existingCard) return;

  const parentLogo = LOGOS.find(l => l.id === edit.parentId);
  const parentLabel = edit.label || (parentLogo ? parentLogo.label : `Logo #${edit.parentId}`);
  const downloadName = parentLabel.replace(/[^a-z0-9]/gi, '-').toLowerCase() + '-icon.png';

  const card = document.createElement('article');
  card.className = 'logo-card mint-card';
  card.id = `edit-card-${edit.id}`;
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `Minted icon for ${parentLabel}`);
  card.style.position = 'relative';

  card.innerHTML = `
    <span class="mint-badge">✦ Icon</span>
    <div class="logo-img-wrap mint-img-wrap">
      <img class="logo-img" src="${edit.imageDataUrl}" alt="Transparent icon for ${parentLabel}" loading="lazy" />
    </div>
    <div class="logo-body">
      <p class="logo-label">${parentLabel}</p>
      <p class="edit-prompt-tag">Transparent PNG icon</p>
      <a class="mint-download-btn" href="${edit.imageDataUrl}" download="${downloadName}" target="_blank">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 3v13M6 11l6 6 6-6"/><path d="M3 20h18"/></svg>
        Download PNG
      </a>
    </div>
  `;

  // Insert after the parent card
  const parentCard = document.getElementById(`card-${edit.parentId}`);
  if (parentCard && parentCard.nextSibling) {
    grid.insertBefore(card, parentCard.nextSibling);
  } else {
    grid.appendChild(card);
  }

  // Scroll into view
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== LOAD EDITS ON INIT =====
loadEditsFromSupabase();
loadCreatedFromSupabase();
