import { getProduct, productSlugs } from "@/data/products";
import { productSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seo = productSeo[slug as keyof typeof productSeo];

  if (!seo) {
    return {};
  }

  return buildPageMetadata(seo);
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
