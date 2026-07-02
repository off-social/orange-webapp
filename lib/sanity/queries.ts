import type { BlogPost, BlogPostListItem } from "@/data/blog.types";

import { sanityClient } from "./client";

const postListFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  category,
  featured,
  readTime,
  coverImage,
  author
`;

export async function getPosts(): Promise<BlogPostListItem[]> {
  return sanityClient.fetch<BlogPostListItem[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      ${postListFields}
    }`,
  );
}

export async function getFeaturedPost(): Promise<BlogPostListItem | null> {
  return sanityClient.fetch<BlogPostListItem | null>(
    `*[_type == "post" && featured == true && defined(slug.current)] | order(publishedAt desc)[0] {
      ${postListFields}
    }`,
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch<BlogPost | null>(
    `*[_type == "post" && slug.current == $slug][0] {
      ${postListFields},
      body
    }`,
    { slug },
  );
}

export async function getPostSlugs(): Promise<string[]> {
  return sanityClient.fetch<string[]>(
    `*[_type == "post" && defined(slug.current)].slug.current`,
  );
}
