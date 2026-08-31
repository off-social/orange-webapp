"use client";

import ProcessCompatibility, {
  type ProcessStep,
} from "@/components/product-details/ProcessCompatibility";

const DESCRIPTION =
  "Lorem ipsum dolor sit amet consectetur. Lectus ridiculus nibh molestie id consequat a placerat aliquam enim.";

/** Step numbers (01–04) are derived from array order by the renderer. */
const STEPS: ProcessStep[] = [
  {
    title: "Deoiling",
    desc: "Polyester Brocade Spandex and similar synthetic stretch fabrics requiring low-tension oil removal without distortion",
  },
  {
    title: "Semi-Bleaching",
    desc: "Dark-coloured dyed fabrics requiring uniform 98-degree semi-bleaching combined with creasing-free pretreatment",
  },
  {
    title: "Pre-Shrinking",
    desc: "Synthetic stretch fabrics requiring controlled, repeatable shrinkage management during pretreatment processing",
  },
  {
    title: "Process Spectrum",
    desc: "Dual-capability configuration handling both oil removal and semi-bleaching in a single process line, suited to high-quality fabric pretreatment requirements",
  },
];

/** Tab 2 panel for the FOUND MG Series page. */
export default function ProcessCompatibilitySection() {
  return <ProcessCompatibility description={DESCRIPTION} steps={STEPS} />;
}
