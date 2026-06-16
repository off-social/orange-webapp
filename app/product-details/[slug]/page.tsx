import { getProduct, productSlugs } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
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
