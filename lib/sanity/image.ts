import { createImageUrlBuilder } from "@sanity/image-url";

import type { SanityImage } from "@/data/blog.types";

import { dataset, projectId } from "./env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

export function getCoverImageUrl(
  image: SanityImage | undefined,
  width = 800,
): string | null {
  if (!image?.asset) return null;
  return urlFor(image).width(width).auto("format").url();
}

export function getCoverImageAlt(image: SanityImage | undefined, fallback: string) {
  return image?.alt?.trim() || fallback;
}
