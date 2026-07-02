"use client";

import type { BlogPostListItem } from "@/data/blog.types";

import BlogFeatured from "./BlogFeatured";
import BlogHero from "./BlogHero";
import BlogList from "./BlogList";

interface BlogPageClientProps {
  posts: BlogPostListItem[];
  featured: BlogPostListItem | null;
}

export default function BlogPageClient({
  posts,
  featured,
}: BlogPageClientProps) {
  return (
    <>
      <BlogHero />
      {featured ? <BlogFeatured post={featured} /> : null}
      <BlogList posts={posts} />
    </>
  );
}
