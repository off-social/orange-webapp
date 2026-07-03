import { createClient } from "@sanity/client";
import { existsSync } from "node:fs";
import { join } from "node:path";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "iv7djc6i";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-01",
  useCdn: true,
});

const slugs = await client.fetch(
  `*[_type == "post" && defined(slug.current)].slug.current`,
);

const missing = slugs.filter(
  (slug) => !existsSync(join("out", "blogs", slug, "index.html")),
);

if (missing.length > 0) {
  console.error("Missing static export for blog slugs:");
  for (const slug of missing) {
    console.error(`  - ${slug}`);
  }
  process.exit(1);
}

console.log(`Verified ${slugs.length} blog page(s) in out/blogs/`);
