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

/** Sections that have a dedicated static detail route in the Next.js export. */
const SECTION_OUTPUT_DIR = {
  insights: "blogs",
  news: "news-events",
  "success-stories": "blogs",
};

const posts = await client.fetch(
  `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    "section": coalesce(section, "insights")
  }`,
);

const missing = posts.filter((post) => {
  const outputDir = SECTION_OUTPUT_DIR[post.section];
  if (!outputDir) {
    return false;
  }

  return !existsSync(join("out", outputDir, post.slug, "index.html"));
});

if (missing.length > 0) {
  console.error("Missing static export for post slugs:");
  for (const { slug, section } of missing) {
    const outputDir = SECTION_OUTPUT_DIR[section];
    console.error(`  - ${slug} (section: ${section}, expected: out/${outputDir}/)`);
  }
  process.exit(1);
}

const verified = posts.filter((post) => SECTION_OUTPUT_DIR[post.section]);
console.log(
  `Verified ${verified.length} post page(s) across out/blogs/ and out/news-events/`,
);
