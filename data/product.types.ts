/**
 * Shared shape for every product rendered by the product-details page.
 *
 * Each product is authored as a JSON file in `data/products/<slug>.json`
 * and aggregated in `data/products/index.ts`. When this moves to a CMS/API
 * later, only the data source changes — components keep reading this shape.
 */

export type Spec = { label: string; value: string };

export type FeatureItem = {
  /** Path to an icon under /public (e.g. "/AdvancedIcon.svg"). Omit to hide the icon. */
  icon?: string;
  title: string;
  desc: string;
};

export type Fabric = {
  /** Path to an image under /public. Omit to render a text-only card. */
  image?: string;
  title: string;
  desc: string;
};

export type InkType = { name: string; fabrics: string };

export type InkColor = { name: string; short: string; hex: string };

export type SpeedRow = {
  res: string;
  pass: string;
  speed: number;
  label: string;
};

export type ComponentCard = {
  /** Path to an image under /public. Omit to hide the icon. */
  icon?: string;
  title: string;
  desc: string;
};

export type QA = { q: string; a: string };

/** A table rendered as the orange/dark card, with optional copy around it. */
export type ShowcaseTableData = {
  /** Optional H2 shown directly above the table. */
  heading?: string;
  /** Optional copy between the heading and the table; an array is one paragraph each. */
  intro?: string | string[];
  /** Column titles; the first column sits on orange, the rest on dark. */
  columns: string[];
  /** One entry per column, in the same order as `columns`. */
  rows: string[][];
  /** Optional line of copy shown under the table. */
  note?: string;
  /** Drop the check icon beside each first-column value. Default false. */
  hideCheckIcon?: boolean;
  /**
   * "spec": compact spec sheet with a divider under every row; two-column
   * tables also get a narrow label column. Default: the comparison card.
   */
  variant?: "spec";
};

/**
 * A bullet (or numbered) list inside a text block. Text before an item's first
 * ": " renders bold, e.g. "Numbering: sequential page numbers".
 */
export type SeoList = {
  /** Optional lead-in shown bold and left-aligned above the items. */
  title?: string;
  /** Optional lead-in shown left-aligned above the items, in regular weight. */
  intro?: string;
  list: string[];
  ordered?: boolean;
  /** Keep text before ": " in items unbolded. Default false. */
  plainItems?: boolean;
  /** Optional line shown left-aligned below the items. */
  footnote?: string;
};

/** One block of long-form SEO copy shown under the Key Specification tab. */
export type SeoBlock =
  /** `heading` may be omitted for untitled copy, e.g. an intro right under the H1 */
  | {
      type: "text";
      heading?: string;
      /** Render `heading` as the page's <h1>, styled like an H2. Default false. */
      headingIsPageH1?: boolean;
      paragraphs: (string | SeoList)[];
    }
  | ({
      type: "table";
      heading: string;
      /** Render `heading` as the page's <h1>, styled like an H2. Default false. */
      headingIsPageH1?: boolean;
    } & ShowcaseTableData)
  /** Points run together in one paragraph as "**title:** desc" */
  | { type: "points"; heading: string; items: Fabric[] }
  | { type: "qa"; heading: string; items: QA[] };

export interface Product {
  /** URL segment, e.g. "position-pro" */
  slug: string;
  /** Display name, e.g. "Position Pro" */
  name: string;
  /**
   * Render the hero product name as a <p> instead of the page <h1>, keeping
   * the same size. Default false.
   */
  nameAsParagraph?: boolean;
  tagline: string;

  heroImage: {
    desktop: string;
    mobile: string;
    /** Alt text for both hero images. Defaults to `name`. */
    alt?: string;
  };

  sidebar: {
    bullets: string[];
  };

  keySpecification: {
    description: string;
    /** Rows of 2 specs each, rendered side by side */
    rows: Spec[][];
  };

  inkCompatibility: {
    description: string;
    inkTypes: InkType[];
    colors: InkColor[];
  };

  features: {
    description: string;
    items: FeatureItem[];
  };

  idealFor: {
    /** Heading override; defaults to "Ideal Applications". */
    title?: string;
    description: string;
    fabrics: Fabric[];
    /**
     * Optional second block rendered below the fabric cards, with its own
     * heading. Omit to hide — most products have no industry block.
     */
    industryApplications?: {
      /** Heading override; defaults to "Industry Application". */
      title?: string;
      description?: string;
      items: Fabric[];
    };
  };

  productionCapacity: {
    description: string;
    /** Used to scale the speed bars; should be >= the largest speed value */
    maxSpeed: number;
    regularMode: SpeedRow[];
    /** Optional secondary speed mode (e.g. a vision/positioning mode). Omit to hide. */
    specialMode?: {
      label: string;
      /** Path to an svg icon under /public */
      iconSrc: string;
      rows: SpeedRow[];
      note: string;
    };
    /** Extra capacity notes (conveying, drying, exhaust, etc.) shown as centered bullet points below the speed modes. Omit to hide. */
    notes?: string[];
  };

  globalComponents: {
    description: string;
    largeCard: ComponentCard;
    smallCards: ComponentCard[];
  };

  resources: {
    heading: string;
    description: string;
    /** YouTube embed URL. Omit to hide the video player. */
    videoUrl?: string;
    brochure: {
      title: string;
      desc: string;
      /** Path to a cover image under /public. Omit to hide the cover. */
      coverImage?: string;
      /** Path to the downloadable PDF under /public. Omit to disable download. */
      brochureUrl?: string;
    };
  };

  /** Omit to hide the showcase section. */
  showcase?: {
    /**
     * Render the showcase only inside the Key Specification tab instead of
     * permanently below every tab. Default false.
     */
    keySpecificationOnly?: boolean;
    /**
     * Render `heading` as the page's <h1> (e.g. a keyword-led title). The hero
     * product name is then demoted to a plain paragraph. Default false.
     */
    headingIsPageH1?: boolean;
    heading: string;
    description: string;
    /** Short tagline shown under the product name in the solution panel (e.g. "Precision vision technology"). Omit to hide. */
    solutionTagline?: string;
    /** Pain points traditional printers struggle with */
    leftItems?: string[];
    /** How this product solves them */
    rightItems?: string[];
    /**
     * Table rendered in place of the solution/problem comparison card. Omit to
     * show the comparison card.
     */
    table?: ShowcaseTableData;
  };

  /** Optional before/after print-result comparison slider. Omit to hide the section. */
  beforeAfter?: {
    heading: string;
    description?: string;
    /** Path to the "before" image under /public. */
    beforeImage: string;
    /** Path to the "after" image under /public. */
    afterImage: string;
    /** Corner labels. Default "Before" / "After". */
    beforeLabel?: string;
    afterLabel?: string;
  };

  /**
   * Optional long-form SEO copy rendered in the Key Specification tab, below
   * the showcase. Each section is an H2; its `subsections` render as H3s.
   * `faq` renders as an accordion and is also emitted as FAQPage JSON-LD.
   */
  seoContent?: {
    sections: (SeoBlock & { subsections?: SeoBlock[] })[];
    faq?: { heading: string; items: QA[] };
  };

  contactCTA: {
    headingTop: string;
    headingBottom: string;
    description: string;
    phone: string;
  };
}
