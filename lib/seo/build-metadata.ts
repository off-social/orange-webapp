import type { Metadata } from "next";

import { getSiteUrl, SITE_NAME } from "./site";

export type PageSeo = {
  title: string;
  description: string;
  keywords?: string | string[];
  path: string;
  noindex?: boolean;
};

export function buildPageMetadata(seo: PageSeo): Metadata {
  const siteUrl = getSiteUrl();
  const path = seo.path.startsWith("/") ? seo.path : `/${seo.path}`;
  const normalizedPath = path.endsWith("/") ? path : `${path}/`;
  const url =
    normalizedPath === "/"
      ? `${siteUrl}/`
      : `${siteUrl}${normalizedPath}`;

  return {
    title: seo.title,
    description: seo.description,
    ...(seo.keywords ? { keywords: seo.keywords } : {}),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    alternates: {
      canonical: url,
    },
    ...(seo.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
