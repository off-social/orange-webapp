import type { MetadataRoute } from "next";

import { getPostSitemapEntries } from "@/lib/sanity/queries";
import { getSiteUrl } from "@/lib/seo";

// Google's limit is 50,000 URLs per sitemap
const URLS_PER_SITEMAP = 50000;
const BLOG_SECTIONS = ["insights", "success-stories"] as const;

function getBlogEntries() {
  return getPostSitemapEntries([...BLOG_SECTIONS]);
}

/** Served at /blogs/sitemap/<id>.xml — regenerated on every build (incl. Sanity publish). */
export async function generateSitemaps() {
  const posts = await getBlogEntries();
  const count = Math.max(1, Math.ceil(posts.length / URLS_PER_SITEMAP));

  return Array.from({ length: count }, (_, id) => ({ id }));
}

export default async function sitemap(props: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const start = Number(await props.id) * URLS_PER_SITEMAP;
  const posts = (await getBlogEntries()).slice(start, start + URLS_PER_SITEMAP);
  const base = getSiteUrl();

  return posts.map((post) => ({
    url: `${base}/blogs/${post.slug}/`,
    lastModified: post.updatedAt,
  }));
}
