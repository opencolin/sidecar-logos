-- Seed castle_votes rows for the new sidecar logo IDs so the FK constraint
-- on castle_user_votes allows voting on them.
--
-- HOW TO RUN: paste this into the Supabase SQL editor for project
-- mrnccntqmkxjazznejfc and click Run. Idempotent — safe to re-run.
--
-- ID ranges:
--   1..472    legacy castle (already seeded — leave alone)
--   1001..1500 sidecar v2 (product-aware, generated text-to-image)
--   1501..2000 sidecar v3 (no-motorcycle set, two-container pattern + IP themes)

INSERT INTO castle_votes (logo_id, up_votes, down_votes)
SELECT i, 0, 0
FROM generate_series(1001, 2000) AS i
ON CONFLICT (logo_id) DO NOTHING;

-- Verify
SELECT
  COUNT(*) FILTER (WHERE logo_id BETWEEN 1 AND 472) AS v1_rows,
  COUNT(*) FILTER (WHERE logo_id BETWEEN 1001 AND 1500) AS v2_rows,
  COUNT(*) FILTER (WHERE logo_id BETWEEN 1501 AND 2000) AS v3_rows,
  COUNT(*) AS total_rows
FROM castle_votes;
