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

export interface Product {
  /** URL segment, e.g. "position-pro" */
  slug: string;
  /** Display name, e.g. "Position Pro" */
  name: string;
  tagline: string;

  heroImage: {
    desktop: string;
    mobile: string;
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
    description: string;
    fabrics: Fabric[];
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

  showcase: {
    heading: string;
    description: string;
    /** Short tagline shown under the product name in the solution panel (e.g. "Precision vision technology"). Omit to hide. */
    solutionTagline?: string;
    /** Pain points traditional printers struggle with */
    leftItems: string[];
    /** How this product solves them */
    rightItems: string[];
  };

  contactCTA: {
    headingTop: string;
    headingBottom: string;
    description: string;
    phone: string;
  };
}
