import type { Metadata } from "next";

import type { BlogPost, BlogPostListItem } from "@/data/blog.types";
import { getSiteUrl, SITE_NAME } from "@/lib/seo";

import { getCoverImageUrl } from "./image";

function getDescription(
  post: Pick<BlogPostListItem, "excerpt" | "title">,
): string {
  return (
    post.excerpt?.trim() ||
    `Read ${post.title} on the ${SITE_NAME} blog.`
  );
}

/**
 * Per-post SEO overrides sourced from the meta-tags spec. The post title lives
 * in Sanity, so these let us set the exact title/description crawlers should
 * see without editing CMS content. Keyed by post slug.
 */
const POST_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  "orange-o-tec-at-itmach-india-2025": {
    title: "Orange O Tec at ITMACH India 2025 | Textile Print Expo",
    description:
      "Orange O Tec exhibited its digital textile printing machines at ITMACH India 2025. See the printers on show and highlights from the event.",
  },
  "orange-o-tec-at-jci-jetpur-expo-2025": {
    title: "Orange O Tec at JCI Jetpur Expo 2025 | Textile Printing",
    description:
      "Orange O Tec brought its digital textile printers to the JCI Jetpur Expo 2025. Highlights, machines on display and coverage from Jetpur.",
  },
  "orange-o-tec-at-gartex-india-2025": {
    title: "Orange O Tec at Gartex India 2025 | Textile Print Expo",
    description:
      "Orange O Tec showcased digital textile printing machines at Gartex India 2025. See the lineup and highlights from the exhibition.",
  },
  "orange-o-tec-at-garfab-itx-2025": {
    title: "Orange O Tec at Garfab ITX 2025 | Textile Printing Expo",
    description:
      "Orange O Tec exhibited its digital textile printing range at Garfab ITX 2025. Machines on show and event highlights.",
  },
};

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
  const title = "News & Events | Orange O Tec Digital Textile Printers";
  const description =
    "Latest news, trade show appearances and product launches from Orange O Tec. See where we exhibit across India's textile printing industry.";

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
  const override = POST_SEO_OVERRIDES[post.slug];
  const title = override?.title ?? `${post.title} | ${SITE_NAME}`;
  const description = override?.description ?? getDescription(post);
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
