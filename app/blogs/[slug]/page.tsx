import { notFound } from "next/navigation";

import { POST_SECTION_LABELS, type PostSection } from "@/data/blog.types";
import { buildBlogPostMetadata } from "@/lib/sanity/metadata";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import { getCoverImageAlt, getCoverImageUrl } from "@/lib/sanity/image";
import {
  getPostBySlug,
  getPostSlugs,
  getPostsBySection,
} from "@/lib/sanity/queries";

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

  // Related articles: the posts that follow this one in its section (wrapping
  // round), same category first. Walking the list cyclically spreads inlinks
  // over every post, old ones included. Insights posts also link one Success
  // Story, since that section is otherwise only reachable through a JS tab.
  const [sectionPosts, stories] = await Promise.all([
    getPostsBySection(post.section),
    post.section === "insights"
      ? getPostsBySection("success-stories")
      : Promise.resolve([]),
  ]);
  const idx = Math.max(
    0,
    sectionPosts.findIndex((p) => p.slug === post.slug),
  );
  const following = [
    ...sectionPosts.slice(idx + 1),
    ...sectionPosts.slice(0, idx),
  ].filter((p) => p.slug !== post.slug);
  const sameCategoryFirst = [
    ...following.filter((p) => p.category && p.category === post.category),
    ...following.filter((p) => !p.category || p.category !== post.category),
  ];
  const story = stories.length ? stories[idx % stories.length] : undefined;
  const related = story
    ? [...sameCategoryFirst.slice(0, 2), story]
    : sameCategoryFirst.slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs/" },
          { name: post.title, path: `/blogs/${post.slug}/` },
        ]}
      />
      <BlogArticle post={post} categoryLabel={categoryLabel} />
      <RelatedLinks
        heading="Related Articles"
        items={related.map((p) => ({
          href: `/blogs/${p.slug}/`,
          title: p.title,
          subtitle: p.excerpt,
          image: getCoverImageUrl(p.coverImage, 600) ?? undefined,
          imageAlt: getCoverImageAlt(p.coverImage, p.title),
        }))}
      />
    </>
  );
}
