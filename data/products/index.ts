import type { Product } from "../product.types";
import alpha15 from "./alpha-15.json";
import alpha16 from "./alpha-16.json";
import alphaII from "./alpha-ii.json";
import alphaIII from "./alpha-iii.json";
import fabPro1i from "./fabpro-1i.json";
import fabPro2i from "./fabpro-2i.json";
import foilJet8 from "./foiljet-8.json";
import foilJet16 from "./foiljet-16.json";
import jetrixE from "./jetrix-e.json";
import jp7 from "./jp7.json";
import jpkEvo from "./jpk-evo.json";
import k24 from "./k24.json";
import k32 from "./k32.json";
import k64 from "./k64.json";
import lario from "./lario.json";
import masTwelve from "./mas-twelve.json";
import masVertical from "./mas-vertical.json";
import minilario from "./minilario.json";
import pengda from "./pengda.json";
import positionPro from "./position-pro.json";
import rocket from "./rocket.json";
import subProII from "./subpro-ii.json";
import vividPressE from "./vividpress-e.json";

/**
 * Registry of all products keyed by slug.
 *
 * To add a product:
 *   1. Create `data/products/<slug>.json` (copy position-pro.json as a template).
 *   2. Import it here and add one entry to the object below.
 */
export const products: Record<string, Product> = {
  "position-pro": positionPro as Product,
  "fabpro-1i": fabPro1i as Product,
  "fabpro-2i": fabPro2i as Product,
  k24: k24 as Product,
  k32: k32 as Product,
  k64: k64 as Product,
  rocket: rocket as Product,
  jp7: jp7 as Product,
  "jpk-evo": jpkEvo as Product,
  minilario: minilario as Product,
  lario: lario as Product,
  "foiljet-8": foilJet8 as Product,
  "foiljet-16": foilJet16 as Product,
  "alpha-ii": alphaII as Product,
  "alpha-iii": alphaIII as Product,
  "alpha-15": alpha15 as Product,
  "alpha-16": alpha16 as Product,
  "subpro-ii": subProII as Product,
  pengda: pengda as Product,
  "jetrix-e": jetrixE as Product,
  "vividpress-e": vividPressE as Product,
  "mas-vertical": masVertical as Product,
  "mas-twelve": masTwelve as Product,
};

export const productSlugs = Object.keys(products);

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}

export const DEFAULT_PRODUCT_SLUG = "position-pro";

/**
 * Marketing suffix words trimmed from a catalog product name before slugifying,
 * so "Position Pro Digital Textile Printer" -> "position-pro".
 */
const SLUG_STOPWORDS = new Set([
  "digital",
  "textile",
  "printer",
  "industrial",
  "sublimation",
  "dye-sublimation",
  "machine",
  "head",
  "printing",
  "label",
  "publication",
  "inkjet",
  "press",
]);

/** Derive a clean URL slug from a catalog product name. */
export function productSlug(name: string): string {
  const cleaned = name.replace(/\([^)]*\)/g, "").trim();
  const words = cleaned.split(/\s+/);
  while (
    words.length > 1 &&
    SLUG_STOPWORDS.has(words[words.length - 1].toLowerCase())
  ) {
    words.pop();
  }
  return words
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Machines with a hand-built details page instead of one rendered from the
 * shared `Product` template. Keyed by the exact catalog name used in the
 * section components, mapped to the route that page lives at.
 *
 * FOUND is processing machinery (pretreatment, washing, finishing), so it has
 * none of the printer-shaped data the template needs — ink compatibility,
 * printheads, LM/day speed tables — and gets its own page.
 */
const CUSTOM_PRODUCT_PAGES: Record<string, string> = {
  "FOUND Textile Processing Range": "/product-details/found",
};

/**
 * Resolve a catalog product name to a details URL.
 * Links directly to the product page if its data is registered or it has a
 * hand-built page; otherwise falls back to the /product-details redirect.
 */
export function productHref(name: string): string {
  const custom = CUSTOM_PRODUCT_PAGES[name];
  if (custom) return custom;

  const slug = productSlug(name);
  return products[slug] ? `/product-details/${slug}` : "/product-details";
}
