import type { Metadata } from "next";

const SITE_NAME = "Orange O Tec";

function getSiteUrl(): string {
  const base = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");
  return base || "https://orangeotec.com";
}

/**
 * Builds page-level metadata (title, description, canonical, OpenGraph and
 * Twitter cards) from the values maintained in the SEO meta-tags spec.
 *
 * @param path Absolute site path with a trailing slash, e.g. "/about/".
 */
export function buildPageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = `${getSiteUrl()}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
