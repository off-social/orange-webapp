import { notFound } from "next/navigation";

import { getPostBySlug, getPostSlugs } from "@/lib/sanity/queries";

import BlogArticle from "../BlogArticle";

/** Used only so static export builds before any posts are published. */
const BUILD_PLACEHOLDER_SLUG = "__build_placeholder__";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugs();

    if (slugs.length === 0) {
      return [{ slug: BUILD_PLACEHOLDER_SLUG }];
    }

    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.warn("Failed to fetch blog slugs from Sanity:", error);
    return [{ slug: BUILD_PLACEHOLDER_SLUG }];
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === BUILD_PLACEHOLDER_SLUG) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticle post={post} />;
}
