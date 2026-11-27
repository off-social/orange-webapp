import { products } from "./index";

/**
 * Product families, mirroring the brand groups on /products/. Related products
 * come from the same family first, so every details page links onward to its
 * siblings and no product depends on a carousel click to be found.
 */
const FAMILIES: string[][] = [
  // Colorix
  ["position-printing-machine", "fabpro-1i", "fabpro-2i", "subpro-ii"],
  // Homer
  [
    "k24-head-digital-textile-printer",
    "k32-head-digital-textile-printer",
    "64-head-digital-textile-printer",
    "rocket-single-pass-digital-textile-printer",
  ],
  // MAS
  ["mas-vertical-double-sided-digital-textile-printer", "mas-twelve"],
  // Rado
  ["alpha-ii", "alpha-iii", "alpha-15", "alpha-16", "foiljet-8", "foiljet-16"],
  // MS + Pengda
  ["jp7", "jpk-evo", "minilario", "lario", "pengda"],
  // Label + publication
  [
    "jetixlab-hybrid-digital-label-printer",
    "vividpress-e-digital-inkjet-printing-machine",
  ],
];

export type RelatedProduct = {
  name: string;
  tagline: string;
  image: string;
  href: string;
};

/**
 * Up to `limit` related products for a slug: same-family siblings first, then
 * the products that follow it in the registry (wrapping), so the picks are
 * stable between builds and spread inlinks across the whole catalog.
 */
export function getRelatedProducts(slug: string, limit = 4): RelatedProduct[] {
  const all = Object.keys(products);
  const family = FAMILIES.find((f) => f.includes(slug)) ?? [];
  const start = all.indexOf(slug);
  const rest = all
    .slice(start + 1)
    .concat(all.slice(0, Math.max(start, 0)));

  const picks: string[] = [];
  for (const s of [...family, ...rest]) {
    if (s !== slug && products[s] && !picks.includes(s)) picks.push(s);
    if (picks.length === limit) break;
  }

  return picks.map((s) => ({
    name: products[s].name,
    tagline: products[s].tagline,
    image: products[s].heroImage.desktop,
    href: `/product-details/${s}/`,
  }));
}
