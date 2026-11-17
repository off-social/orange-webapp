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

export type Gauge = {
  label: string;
  value: string;
  unit?: string;
  /** How full the dial is drawn, 0–100. */
  fill: number;
  notes: string[];
  featured?: boolean;
};

export type Machine = {
  id: string;
  name: string;
  icon: "target" | "printer" | "bolt" | "gantry" | "star";
  isNew?: boolean;
  layout?: "wide" | "veiled";
  badge: string;
  lead?: string;
  tagline: string;
  fabrics?: string;
  image: { src: string; width: number; height: number; alt: string };
  gauges: Gauge[];
  interest: string;
  bookLabel?: string;
  learnMore?: string;
};

export const MACHINES: Machine[] = [
  {
    id: "position-pro",
    name: "Position Pro",
    icon: "target",
    badge: "Positioning printing",
    tagline: "Precision positioning for high-speed fabric printing.",
    fabrics: "Jacquard, embroidery, lace sequin, silk, jari-jacquard, shiffli",
    image: {
      src: "/india-itme/position-pro.webp",
      width: 1300,
      height: 644,
      alt: "Position Pro position printing machine",
    },
    gauges: [
      { label: "Output", value: "2,000", unit: "lm/day", fill: 62, notes: ["Max output per day"] },
      {
        label: "Print heads",
        value: "16",
        unit: "×",
        fill: 72,
        notes: ["Kyocera industrial", "print heads"],
        featured: true,
      },
      { label: "Print width", value: "1850", unit: "mm", fill: 58, notes: ["Maximum print width"] },
    ],
    interest: "Digital Textile Printing",
    learnMore: "/product-details/position-printing-machine/",
  },
  {
    id: "fabpro-2i",
    name: "FabPro 2i",
    icon: "printer",
    badge: "Made in India",
    tagline:
      "Industrial digital textile printing for precision, productivity and reliable production.",
    fabrics: "Cotton, linen, silk, nylon, polyester, blends",
    image: {
      src: "/india-itme/fabpro-2i.webp",
      width: 1300,
      height: 708,
      alt: "FabPro 2i industrial digital textile printer",
    },
    gauges: [
      {
        label: "Print heads",
        value: "24",
        unit: "×",
        fill: 66,
        notes: ["Ricoh Gen 6", "industrial print heads"],
      },
      {
        label: "Output",
        value: "250",
        unit: "lm/hr",
        fill: 74,
        notes: ["Up to 250 linear", "metres per hour"],
        featured: true,
      },
      { label: "Print width", value: "1850", unit: "mm", fill: 58, notes: ["Maximum print width"] },
    ],
    interest: "Digital Textile Printing",
    learnMore: "/product-details/fabpro-2i/",
  },
  {
    id: "rocket",
    name: "Rocket",
    icon: "bolt",
    layout: "wide",
    badge: "Single pass",
    tagline:
      "The world’s fastest single-pass digital textile printer, designed for demanding industrial environments.",
    fabrics: "All types, including elastic and new fibre",
    image: {
      src: "/india-itme/rocket.webp",
      width: 1800,
      height: 303,
      alt: "Rocket single-pass digital textile printer",
    },
    gauges: [
      {
        label: "Output",
        value: "70,000",
        unit: "lm/day",
        fill: 88,
        notes: ["Up to 70,000 linear", "metres per day"],
      },
      {
        label: "Mode",
        value: "1",
        unit: "pass",
        fill: 80,
        notes: ["Hybrid workflow:", "digital + rotary screen"],
        featured: true,
      },
      { label: "Print width", value: "2588", unit: "mm", fill: 76, notes: ["Maximum print width"] },
    ],
    interest: "Industrial Single-Pass Printing",
    learnMore: "/product-details/rocket-single-pass-digital-textile-printer/",
  },
  {
    id: "homer-k64",
    name: "HOMER K-64",
    icon: "gantry",
    badge: "Industrial textile",
    tagline: "An industrial digital printing platform designed for textile printing applications.",
    fabrics: "All types, including elastic and new fibre",
    image: {
      src: "/india-itme/homer-k64.webp",
      width: 1400,
      height: 542,
      alt: "HOMER K-64 industrial digital textile printer",
    },
    gauges: [
      {
        label: "Output",
        value: "1,020",
        unit: "lm/hr",
        fill: 70,
        notes: ["Up to 1,020 linear", "metres per hour"],
      },
      {
        label: "Print heads",
        value: "64",
        unit: "×",
        fill: 84,
        notes: ["Industrial", "piezoelectric heads"],
        featured: true,
      },
      { label: "Print width", value: "1800", unit: "mm", fill: 57, notes: ["Maximum print width"] },
    ],
    interest: "Digital Textile Printing",
    learnMore: "/product-details/64-head-digital-textile-printer/",
  },
  {
    id: "oval",
    name: "Oval Printer",
    icon: "star",
    isNew: true,
    layout: "veiled",
    badge: "World premiere",
    lead: "Experience garment printing where the print feels more integrated with the fabric.",
    tagline:
      "Under wraps until Hall 5. See the live launch during the expo and be among the first to see it running.",
    image: {
      src: "/india-itme/oval-printer-unveil.webp",
      width: 1400,
      height: 1048,
      alt: "The Oval Printer under a red velvet cover ahead of its launch",
    },
    gauges: [
      { label: "Launch", value: "Live", fill: 100, notes: ["Unveiled during", "India ITME 2026"] },
      {
        label: "Hall",
        value: "5",
        fill: 50,
        notes: ["India Exposition Mart", "Greater Noida"],
        featured: true,
      },
      { label: "Stall", value: "5", fill: 50, notes: ["Orange O Tec stand"] },
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
    a: "India ITME 2026 is the 12th India International Textile Machinery Exhibition, bringing together textile machinery manufacturers, technology providers, suppliers and professionals.",
  },
  {
    q: "When is India ITME 2026 scheduled?",
    a: "India ITME 2026 is scheduled from 4 to 9 December 2026.",
  },
  {
    q: "Where will India ITME 2026 be held?",
    a: "The exhibition is scheduled at India Exposition Mart Limited (IEML), Greater Noida, Uttar Pradesh, India.",
  },
  {
    q: "Will Orange O Tec participate in India ITME 2026?",
    a: "Yes. Orange O Tec will participate as an exhibitor at Hall 5, Stall 5. Visitors can connect with the team to explore digital printing technologies and discuss their business requirements.",
  },
  {
    q: "What digital printing solutions does Orange O Tec offer?",
    a: "Orange O Tec’s portfolio includes digital printing technologies across textile, label and publication printing, along with relevant ink solutions.",
  },
  {
    q: "How can I schedule a meeting with Orange O Tec at India ITME 2026?",
    a: "Submit the enquiry form on this page with your contact information and printing requirements. The Orange O Tec team can follow up to coordinate a meeting.",
  },
  {
    q: "Which industries does Orange O Tec serve?",
    a: "Relevant applications include textile manufacturing, apparel, packaging, labels, books and publications.",
  },
  {
    q: "How can I contact Orange O Tec?",
    a: "Email info@orangeotec.com, call +91 74860 32990, or submit the enquiry form on this page.",
  },
];
