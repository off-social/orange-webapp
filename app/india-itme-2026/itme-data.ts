/** Everything about the stand that more than one section repeats. */
export const ITME = {
  stand: "Hall 5, Stall 5",
  /** Doors open 10:30 IST on day one, close 17:30 IST on the last day. */
  start: "2026-12-04T10:30:00+05:30",
  end: "2026-12-09T17:30:00+05:30",
  /** The same window in UTC, as calendar files want it. */
  startUtc: "20261204T050000Z",
  endUtc: "20261209T120000Z",
  venue:
    "India Exposition Mart Limited (IEML), Knowledge Park II, Greater Noida, Uttar Pradesh 201306, India",
  officialSite: "https://corporate.india-itme.com/itme2026/",
  phone: "+91 74860 32990",
  phoneHref: "tel:+917486032990",
  email: "info@orangeotec.com",
  whatsapp: "917486032990",
  directions:
    "https://www.google.com/maps/search/?api=1&query=India+Expo+Centre+%26+Mart+Knowledge+Park+II+Greater+Noida",
  path: "/india-itme-2026/",
} as const;

export const CALENDAR_TITLE = `Meet Orange O Tec at India ITME 2026 (${ITME.stand})`;
export const CALENDAR_DETAILS = `Orange O Tec at ${ITME.stand}, India ITME 2026. Book a meeting: https://orangeotec.com${ITME.path}`;
export const CALENDAR_LOCATION = `${ITME.stand}, ${ITME.venue}`;

export const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  `&text=${encodeURIComponent(CALENDAR_TITLE)}` +
  `&dates=${ITME.startUtc}/${ITME.endUtc}` +
  `&details=${encodeURIComponent(CALENDAR_DETAILS)}` +
  `&location=${encodeURIComponent(CALENDAR_LOCATION)}`;

export function whatsappUrl(text: string) {
  return `https://wa.me/${ITME.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const INTEREST_OPTIONS = [
  "Digital Textile Printing",
  "Industrial Single-Pass Printing",
  "Digital Label Printing",
  "Publication Printing",
  "Ink Solutions",
  "Other",
] as const;

export type Spec = {
  label: string;
  value: string;
  unit?: string;
  note: string;
};

export type Machine = {
  id: string;
  name: string;
  /** What kind of machine it is; shown on its picker card and above its name. */
  category: string;
  /** One highlight worth calling out, e.g. "Made in India". */
  highlight?: string;
  isNew?: boolean;
  /** "wide" for very long lines (Rocket); "veiled" for the covered Oval photo. */
  layout?: "wide" | "veiled";
  lead?: string;
  tagline: string;
  fabrics?: string[];
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    /** Product shots on black need a dark studio, not multiply on grey. */
    studio?: "dark";
  };
  specs: Spec[];
  interest: string;
  /**
   * Entry in the site-wide consultation modal's printer list. When set, the
   * button opens that modal; when not (the unreleased Oval DTG, which the
   * list does not carry), it falls back to this page's form.
   */
  consultPrinter?: string;
  bookLabel?: string;
  learnMore?: string;
};

export const MACHINES: Machine[] = [
  {
    id: "position-pro",
    name: "Position Pro",
    category: "Position printing",
    highlight: "Vision-guided placement",
    tagline: "Precision positioning for high-speed fabric printing.",
    fabrics: ["Jacquard", "Embroidery", "Lace sequin", "Silk", "Jari-jacquard", "Shiffli"],
    image: {
      src: "/india-itme/position-pro-titled.webp",
      width: 1380,
      height: 849,
      alt: "Colorix Position Pro position printing machine",
    },
    specs: [
      { label: "Output", value: "2,000", unit: "linear m / day", note: "Maximum output per day" },
      { label: "Print heads", value: "16", note: "Kyocera industrial print heads" },
      { label: "Print width", value: "1,850", unit: "mm", note: "Maximum print width" },
    ],
    interest: "Digital Textile Printing",
    consultPrinter: "Position Pro",
    learnMore: "/product-details/position-printing-machine/",
  },
  {
    id: "fabpro-2i",
    name: "FabPro 2i",
    category: "Digital textile printing",
    highlight: "Made in India",
    tagline:
      "Industrial digital textile printing for precision, productivity and reliable production.",
    fabrics: ["Cotton", "Linen", "Silk", "Nylon", "Polyester", "Blends"],
    image: {
      src: "/india-itme/fabpro-2i.png",
      width: 1024,
      height: 673,
      alt: "FabPro 2i direct-to-fabric printing machine by Colorix",
      studio: "dark",
    },
    specs: [
      { label: "Output", value: "250", unit: "linear m / hr", note: "Up to 250 linear metres per hour" },
      { label: "Print heads", value: "24", note: "Ricoh Gen 6 industrial print heads" },
      { label: "Print width", value: "1,850", unit: "mm", note: "Maximum print width" },
    ],
    interest: "Digital Textile Printing",
    consultPrinter: "FabPro 2i",
    learnMore: "/product-details/fabpro-2i/",
  },
  {
    id: "rocket",
    name: "Rocket",
    category: "Single-pass printing",
    highlight: "World’s fastest single-pass",
    layout: "wide",
    tagline:
      "The world’s fastest single-pass digital textile printer, designed for demanding industrial environments.",
    fabrics: ["All fabric types", "Elastic", "New fibres"],
    image: {
      src: "/india-itme/rocket.png",
      width: 1024,
      height: 346,
      alt: "Rocket single-pass digital textile printer",
      studio: "dark",
    },
    specs: [
      { label: "Output", value: "70,000", unit: "linear m / day", note: "Up to 70,000 linear metres per day" },
      { label: "Print mode", value: "Single pass", note: "Hybrid workflow: digital + rotary screen" },
      { label: "Print width", value: "2,588", unit: "mm", note: "Maximum print width" },
    ],
    interest: "Industrial Single-Pass Printing",
    consultPrinter: "Rocket",
    learnMore: "/product-details/rocket-single-pass-digital-textile-printer/",
  },
  {
    id: "homer-k64",
    name: "HOMER K-64",
    category: "Industrial textile printing",
    highlight: "64-head platform",
    tagline: "An industrial digital printing platform designed for textile printing applications.",
    fabrics: ["All fabric types", "Elastic", "New fibres"],
    image: {
      src: "/india-itme/homer-k64.webp",
      width: 1400,
      height: 542,
      alt: "HOMER K-64 industrial digital textile printer",
    },
    specs: [
      { label: "Output", value: "1,020", unit: "linear m / hr", note: "Up to 1,020 linear metres per hour" },
      { label: "Print heads", value: "64", note: "Industrial piezoelectric heads" },
      { label: "Print width", value: "1,800", unit: "mm", note: "Maximum print width" },
    ],
    interest: "Digital Textile Printing",
    consultPrinter: "K64",
    learnMore: "/product-details/64-head-digital-textile-printer/",
  },
  {
    id: "oval",
    name: "Oval DTG",
    category: "Garment printing",
    highlight: "World premiere",
    isNew: true,
    layout: "veiled",
    lead: "Experience garment printing where the print feels more integrated with the fabric.",
    tagline:
      "Under wraps until Hall 5. See the live launch during the expo and be among the first to see it running.",
    image: {
      src: "/india-itme/oval-printer-unveil.webp",
      width: 1400,
      height: 1048,
      alt: "The Oval DTG under a red velvet cover ahead of its launch",
    },
    specs: [
      { label: "Launch", value: "Live", note: "Unveiled during India ITME 2026" },
      { label: "Where", value: "Hall 5", note: "India Exposition Mart, Greater Noida" },
      { label: "Stand", value: "Stall 5", note: "Orange O Tec stand" },
    ],
    interest: "Digital Textile Printing",
    bookLabel: "Reserve a launch slot",
  },
];

export type Faq = { q: string; a: string };

/** Plain-text answers feed the FAQPage schema; the page adds links on top. */
export const FAQS: Faq[] = [
  {
    q: "What is India ITME 2026?",
    a: "India ITME 2026 is the 12th India International Textile Machinery Exhibition, bringing together textile machinery manufacturers, technology providers, suppliers and industry professionals to explore innovations across the textile and textile engineering sectors.",
  },
  {
    q: "When and where will India ITME 2026 take place?",
    a: "India ITME 2026 will take place from 4 to 9 December 2026 at India Exposition Mart Limited (IEML), Greater Noida, Uttar Pradesh, India.",
  },
  {
    q: "How can visitors register for India ITME 2026?",
    a: "Visitors can register through the official India ITME 2026 website. Check the visitor registration section for available passes and entry requirements.",
  },
  {
    q: "What types of textile machinery and technologies will be showcased at India ITME 2026?",
    a: "The exhibition will showcase technologies across the textile manufacturing process, including spinning, weaving, knitting, textile processing, digital textile printing, garment manufacturing and technical textiles.",
  },
  {
    q: "Will Orange O Tec participate in India ITME 2026, and which machines will it showcase?",
    a: "Yes, Orange O Tec will participate in India ITME 2026 at Hall 5, Stall 5. Visitors can explore Position Pro, FabPro 2i, Rocket, HOMER K-64 and Oval DTG, featuring technologies for position printing, direct-to-fabric printing, single-pass production and garment printing.",
  },
  {
    q: "How can I schedule a meeting with Orange O Tec at India ITME 2026?",
    a: "Visitors can schedule a meeting by submitting the enquiry form on this page or contacting the Orange O Tec team directly. Visit Hall 5, Stall 5 during the exhibition to discuss your digital printing requirements.",
  },
];
