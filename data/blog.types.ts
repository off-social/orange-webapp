import type { PortableTextBlock } from "@portabletext/react";

export type PostSection = "insights" | "news" | "success-stories";

export type BlogCategory = "products" | "industry";

export type SanityImage = {
  asset?: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
};

export type BlogAuthor = {
  name: string;
};

/** Card/list shape fetched from Sanity. */
export type BlogPostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  section: PostSection;
  category?: BlogCategory;
  featured: boolean;
  readTime: number;
  coverImage: SanityImage;
  author?: BlogAuthor;
};

/** Full article shape including body. */
export type BlogPost = BlogPostListItem & {
  body: PortableTextBlock[];
};

export const POST_SECTION_LABELS: Record<PostSection, string> = {
  insights: "Insights",
  news: "News",
  "success-stories": "Success Stories",
};

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  products: "Products",
  industry: "Industry",
};

export const DEFAULT_COVER_IMAGE = "/blogImg1.webp";
