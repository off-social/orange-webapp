import type {
  BlogPost,
  BlogPostListItem,
  PostSection,
} from "@/data/blog.types";

import { sanityClient } from "./client";

const postListFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "section": coalesce(section, "insights"),
  category,
  featured,
  readTime,
  coverImage,
  author
`;

function sectionFilter(section: PostSection): string {
  return `coalesce(section, "insights") == "${section}"`;
}

export async function getPostsBySection(
  section: PostSection,
): Promise<BlogPostListItem[]> {
  return sanityClient.fetch<BlogPostListItem[]>(
    `*[_type == "post" && defined(slug.current) && ${sectionFilter(section)}] | order(publishedAt desc) {
      ${postListFields}
    }`,
  );
}

export async function getPosts(): Promise<BlogPostListItem[]> {
  return getPostsBySection("insights");
}

export async function getFeaturedPostBySection(
  section: PostSection,
): Promise<BlogPostListItem | null> {
  return sanityClient.fetch<BlogPostListItem | null>(
    `*[_type == "post" && featured == true && defined(slug.current) && ${sectionFilter(section)}] | order(publishedAt desc)[0] {
      ${postListFields}
    }`,
  );
}

export async function getFeaturedPost(): Promise<BlogPostListItem | null> {
  return getFeaturedPostBySection("insights");
}

export async function getPostBySlug(
  slug: string,
  section?: PostSection,
): Promise<BlogPost | null> {
  const sectionClause = section ? ` && ${sectionFilter(section)}` : "";

  return sanityClient.fetch<BlogPost | null>(
    `*[_type == "post" && slug.current == $slug${sectionClause}][0] {
      ${postListFields},
      body
    }`,
    { slug },
  );
}

export async function getPostSlugsBySection(
  section: PostSection,
): Promise<string[]> {
  return sanityClient.fetch<string[]>(
    `*[_type == "post" && defined(slug.current) && ${sectionFilter(section)}].slug.current`,
  );
}

export async function getPostSlugs(): Promise<string[]> {
  return getPostSlugsBySection("insights");
}
