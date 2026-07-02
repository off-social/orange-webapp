"use client";

import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState<"blogs" | "success">("blogs");

  return (
    <>
      <BlogHero activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "blogs" && (
        <>
          {featured ? <BlogFeatured post={featured} /> : null}
          <BlogList posts={posts} />
        </>
      )}
    </>
  );
}
