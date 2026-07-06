import type { Metadata } from "next";

import { buildBlogIndexMetadata } from "@/lib/sanity/metadata";
import {
  getFeaturedPost,
  getPosts,
  getPostsBySection,
} from "@/lib/sanity/queries";

import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = buildBlogIndexMetadata();

export default async function BlogPage() {
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
    />
  );
}
