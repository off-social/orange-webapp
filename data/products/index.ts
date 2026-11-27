import type { Product } from "../product.types";
import alpha15 from "./alpha-15.json";
import alpha16 from "./alpha-16.json";
import alphaII from "./alpha-ii.json";
import alphaIII from "./alpha-iii.json";
import fabPro1i from "./fabpro-1i.json";
import fabPro2i from "./fabpro-2i.json";
import foilJet8 from "./foiljet-8.json";
import foilJet16 from "./foiljet-16.json";
import jetixLab from "./jetixlab.json";
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
  "position-printing-machine": positionPro as Product,
  "fabpro-1i": fabPro1i as Product,
  "fabpro-2i": fabPro2i as Product,
  "k24-head-digital-textile-printer": k24 as Product,
  "k32-head-digital-textile-printer": k32 as Product,
  "64-head-digital-textile-printer": k64 as Product,
  "rocket-single-pass-digital-textile-printer": rocket as Product,
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
  "jetixlab-hybrid-digital-label-printer": jetixLab as Product,
  "vividpress-e-digital-inkjet-printing-machine": vividPressE as Product,
  "mas-vertical-double-sided-digital-textile-printer": masVertical as Product,
  "mas-twelve": masTwelve as Product,
};

export const productSlugs = Object.keys(products);

/**
 * Products whose URL slug is not the one `productSlug()` derives from their
 * catalog name (e.g. a keyword-led slug). Keyed by the derived slug.
 */
const SLUG_OVERRIDES: Record<string, string> = {
  "position-pro": "position-printing-machine",
  "mas-vertical": "mas-vertical-double-sided-digital-textile-printer",
  "jetixlab": "jetixlab-hybrid-digital-label-printer",
  k24: "k24-head-digital-textile-printer",
  k32: "k32-head-digital-textile-printer",
  k64: "64-head-digital-textile-printer",
  rocket: "rocket-single-pass-digital-textile-printer",
  "vividpress-e": "vividpress-e-digital-inkjet-printing-machine",
};

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}

export const DEFAULT_PRODUCT_SLUG = "position-printing-machine";

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
  "FOUND Textile Processing Range": "/product-details/found/",
};

/** Registry slug for a catalog name, or undefined if it has no template page. */
function resolveSlug(name: string): string | undefined {
  const derived = productSlug(name);
  const slug = SLUG_OVERRIDES[derived] ?? derived;
  return products[slug] ? slug : undefined;
}

/**
 * Rewrite a link to one of our own product pages to its canonical form:
 * relative, trailing slash, short alias (e.g. /product-details/k24) resolved
 * to the keyword slug. Used on CMS content, whose editors type aliases. Any
 * other href is returned unchanged.
 */
export function canonicalizeInternalHref(href: string): string {
  const m = href.match(
    /^(?:https?:\/\/(?:www\.)?orangeotec\.com)?\/product-details\/([^/?#]+)\/?([?#].*)?$/i,
  );
  if (!m) return href;
  const alias = m[1].toLowerCase();
  const slug = SLUG_OVERRIDES[alias] ?? alias;
  return `/product-details/${slug}/${m[2] ?? ""}`;
}

/** True if the catalog name has a details page (template or hand-built). */
export function hasProductPage(name: string): boolean {
  return Boolean(CUSTOM_PRODUCT_PAGES[name] || resolveSlug(name));
}

/**
 * Resolve a catalog product name to a details URL (always with the trailing
 * slash `trailingSlash: true` serves). Unknown names fall back to the
 * /products/ listing, which is a real page — never a soft-404.
 */
export function productHref(name: string): string {
  const custom = CUSTOM_PRODUCT_PAGES[name];
  if (custom) return custom;

  const slug = resolveSlug(name);
  return slug ? `/product-details/${slug}/` : "/products/";
}

/**
 * Every product details page as { name, href }, for site-wide crawlable links
 * (footer, related products). Server-side only: it reads the full registry.
 */
export function allProductLinks(): { name: string; href: string }[] {
  return [
    ...Object.entries(products).map(([slug, p]) => ({
      name: p.name,
      href: `/product-details/${slug}/`,
    })),
    { name: "FOUND Textile Processing", href: "/product-details/found/" },
  ];
}
