import { getProduct, productSlugs } from "@/data/products";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

/**
 * Per-product title/description from the SEO meta-tags spec. Products not
 * listed here fall back to a title built from the product name/tagline.
 */
const PRODUCT_SEO_OVERRIDES: Record<
  string,
  { title: string; description: string }
> = {
  "fabpro-1i": {
    title: "FabPro 1i Reactive Digital Textile Printer | Made in India",
    description:
      "FabPro 1i reactive printing machine. 8 Ricoh Gen 6 heads, 1800mm width, 110 lm/hr on cotton, polyester and silk. Made in India with 600+ installations.",
  },
  "fabpro-2i": {
    title: "FabPro 2i Industrial Digital Textile Printer | Made in India",
    description:
      "FabPro 2i is Orange O Tec's industrial-scale digital textile printer. Built for high-throughput export and fashion production. Made in India.",
  },
  "position-pro": {
    title: "Position Pro Digital Position Printing Machine | Surat",
    description:
      "Position Pro by Orange O Tec is a digital position printing machine built in Surat for placement and panel printing on fabric. 600+ installs. Book a demo.",
  },
  rocket: {
    title: "Rocket Single Pass Digital Textile Printer | 70,000 LM/Day",
    description:
      "Rocket is a single-pass industrial digital textile printer from Orange O Tec. Up to 70,000 LM/day, 2588mm width, hybrid digital and rotary in one pass.",
  },
  k64: {
    title: "K64 High-Speed Digital Textile Printer | 64 Printheads",
    description:
      "K64 is the top of Orange O Tec's Homer series. Up to 64 industrial printheads, 1800 dpi, 15,000 LM/day across reactive, pigment and disperse inks.",
  },
  k32: {
    title: "K32 Digital Textile Printer | Homer Series, 32 Heads",
    description:
      "K32 is a Homer-series industrial digital textile printer from Orange O Tec with 32 printheads. High-speed reactive and pigment printing for growing mills.",
  },
  k24: {
    title: "K24 Digital Textile Printer | Homer Series, Entry Model",
    description:
      "K24 is the entry model in Orange O Tec's Homer series of industrial digital textile printers. High-speed direct-to-fabric printing for scaling production.",
  },
  "vividpress-e": {
    title: "VividPress-E Digital Publication Press | Book Printing",
    description:
      "VividPress-E is a digital inkjet press from Orange O Tec for books, magazines and catalogues. High-quality, on-demand publication printing at volume.",
  },
  "jetrix-e": {
    title: "Jetrix-E Digital Label Printer | Industrial Label Printing",
    description:
      "Jetrix-E is an industrial digital label printer from Orange O Tec for flexible packaging, product labels and short-run specialty prints. Book a consultation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  const override = PRODUCT_SEO_OVERRIDES[slug];

  return buildPageMetadata({
    title: override?.title ?? `${product.name} Digital Textile Printer | Orange O Tec`,
    description:
      override?.description ??
      `${product.name} by Orange O Tec — ${product.tagline}. Made in India with 600+ installations. Book a demo.`,
    path: `/product-details/${slug}/`,
  });
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
