import type { Metadata } from "next";

import type { BlogPost, BlogPostListItem } from "@/data/blog.types";

import { getCoverImageUrl } from "./image";

const SITE_NAME = "Orange O Tec";

function getSiteUrl(): string {
  const base = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");
  return base || "https://orangeotec.com";
}

function getDescription(
  post: Pick<BlogPostListItem, "excerpt" | "title">,
): string {
  return (
    post.excerpt?.trim() ||
    `Read ${post.title} on the ${SITE_NAME} blog.`
  );
}

export function buildBlogIndexMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const title = `Blogs | ${SITE_NAME}`;
  const description =
    "Explore the latest trends in textile printing technology and industry insights from Orange O Tec.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/blogs`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `${siteUrl}/blogs`,
    },
  };
}

export function buildNewsEventsIndexMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const title = `News & Events | ${SITE_NAME}`;
  const description =
    "Stay up to date with Orange O Tec news, exhibitions, and industry events.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/news-events`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `${siteUrl}/news-events`,
    },
  };
}

export function buildBlogPostMetadata(
  post: BlogPost,
  section: "insights" | "news" | "success-stories" = "insights",
): Metadata {
  const siteUrl = getSiteUrl();
  const title = `${post.title} | ${SITE_NAME}`;
  const description = getDescription(post);
  const basePath = section === "news" ? "news-events" : "blogs";
  const url = `${siteUrl}/${basePath}/${post.slug}/`;
  const imageUrl = getCoverImageUrl(post.coverImage, 1200);

  return {
    title,
    description,
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.publishedAt,
      ...(imageUrl ? { images: [{ url: imageUrl, alt: post.title }] } : {}),
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: post.title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    alternates: {
      canonical: url,
    },
  };
}
