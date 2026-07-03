import { notFound } from "next/navigation";

import BlogArticle from "@/app/blogs/BlogArticle";
import { POST_SECTION_LABELS } from "@/data/blog.types";
import { buildBlogPostMetadata } from "@/lib/sanity/metadata";
import { getPostBySlug, getPostSlugsBySection } from "@/lib/sanity/queries";

const BUILD_PLACEHOLDER_SLUG = "__build_placeholder__";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugsBySection("news");

    if (slugs.length === 0) {
      return [{ slug: BUILD_PLACEHOLDER_SLUG }];
    }

    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.warn("Failed to fetch news slugs from Sanity:", error);
    return [{ slug: BUILD_PLACEHOLDER_SLUG }];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === BUILD_PLACEHOLDER_SLUG) {
    return {};
  }

  const post = await getPostBySlug(slug, "news");

  if (!post) {
    return {};
  }

  return buildBlogPostMetadata(post, "news");
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === BUILD_PLACEHOLDER_SLUG) {
    notFound();
  }

  const post = await getPostBySlug(slug, "news");

  if (!post) {
    notFound();
  }

  return (
    <BlogArticle
      post={post}
      backHref="/news-events"
      backLabel="Back to News & Events"
      categoryLabel={POST_SECTION_LABELS.news}
    />
  );
}
