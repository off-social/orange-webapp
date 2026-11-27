"use client";

import { useState } from "react";

import type { BlogPostListItem } from "@/data/blog.types";

import BlogFeatured from "./BlogFeatured";
import BlogHero from "./BlogHero";
import BlogList from "./BlogList";
import type { BlogSectionTabId } from "./BlogSectionTabs";

interface BlogPageClientProps {
  posts: BlogPostListItem[];
  featured: BlogPostListItem | null;
  successStories: BlogPostListItem[];
  initialPage?: number;
}

export default function BlogPageClient({
  posts,
  featured,
  successStories,
  initialPage,
}: BlogPageClientProps) {
  const [activeSection, setActiveSection] =
    useState<BlogSectionTabId>("insights");

  return (
    <>
      <BlogHero
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      {activeSection === "insights" && featured ? (
        <BlogFeatured post={featured} />
      ) : null}
      <BlogList
        activeSection={activeSection}
        posts={posts}
        successStories={successStories}
        initialPage={initialPage}
      />
    </>
  );
}
