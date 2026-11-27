import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildBlogIndexMetadata } from "@/lib/sanity/metadata";
import {
  getFeaturedPost,
  getPosts,
  getPostsBySection,
} from "@/lib/sanity/queries";

import { ITEMS_PER_PAGE } from "../../pagination";
import BlogPageClient from "../../BlogPageClient";

// Static export: only the pages generated below exist.
export const dynamicParams = false;

/** Placeholder so the export still builds while there is only one page. */
const NO_EXTRA_PAGES = "__none__";

/** Pages 2..N of the Insights listing; page 1 lives at /blogs/. */
export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    const total = Math.ceil(posts.length / ITEMS_PER_PAGE);
    if (total < 2) return [{ page: NO_EXTRA_PAGES }];
    return Array.from({ length: total - 1 }, (_, i) => ({
      page: String(i + 2),
    }));
  } catch (error) {
    console.warn("Failed to fetch blog posts for pagination:", error);
    return [{ page: NO_EXTRA_PAGES }];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  if (page === NO_EXTRA_PAGES) return { robots: { index: false } };
  return buildBlogIndexMetadata(Number(page));
}

export default async function BlogListingPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNumber = Number(page);
  if (!Number.isInteger(pageNumber) || pageNumber < 2) notFound();

  const [posts, featured, successStories] = await Promise.all([
    getPosts(),
    getFeaturedPost(),
    getPostsBySection("success-stories"),
  ]);

  return (
    <BlogPageClient
      posts={posts}
      featured={featured}
      successStories={successStories}
      initialPage={pageNumber}
    />
  );
}
