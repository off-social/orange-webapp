import type { Metadata } from "next";

import { buildBlogIndexMetadata } from "@/lib/sanity/metadata";
import { getFeaturedPost, getPosts } from "@/lib/sanity/queries";

import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = buildBlogIndexMetadata();

export default async function BlogPage() {
  const [posts, featured] = await Promise.all([getPosts(), getFeaturedPost()]);

  return <BlogPageClient posts={posts} featured={featured} />;
}
