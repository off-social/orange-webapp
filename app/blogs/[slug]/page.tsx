import { notFound } from "next/navigation";

import { POST_SECTION_LABELS, type PostSection } from "@/data/blog.types";
import { buildBlogPostMetadata } from "@/lib/sanity/metadata";
import { getPostBySlug, getPostSlugs } from "@/lib/sanity/queries";

import BlogArticle from "../BlogArticle";

/** Used only so static export builds before any posts are published. */
const BUILD_PLACEHOLDER_SLUG = "__build_placeholder__";
const BLOG_SECTIONS: PostSection[] = ["insights", "success-stories"];

function isBlogSection(
  section: PostSection,
): section is "insights" | "success-stories" {
  return BLOG_SECTIONS.includes(section);
}

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === BUILD_PLACEHOLDER_SLUG) {
    return {};
  }

  const post = await getPostBySlug(slug);

  if (!post || !isBlogSection(post.section)) {
    return {};
  }

  return buildBlogPostMetadata(post, post.section);
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

  if (!post || !isBlogSection(post.section)) {
    notFound();
  }

  const categoryLabel =
    post.section === "success-stories"
      ? POST_SECTION_LABELS["success-stories"]
      : undefined;

  return <BlogArticle post={post} categoryLabel={categoryLabel} />;
}
