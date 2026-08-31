"use client";

import KeySpecification from "@/components/product-details/KeySpecification";
import type { Product } from "@/data/product.types";

/** Rows of two specs each, rendered side by side; a single-entry row spans
 *  the full width. Matches the shared KeySpecification renderer. */
const KEY_SPECIFICATION: Product["keySpecification"] = {
  description:
    "Advanced industrial textile printing technology designed to maximize productivity, ensure superior color accuracy, and support diverse fabric applications.",
  rows: [
    [
      {
        label: "Machine Type",
        value: "Open-Width Low-Tension Deoiling and Pre-Shrinking Washer",
      },
    ],
    [
      { label: "Fabric Specialization", value: "Polyester Brocade Spandex" },
      { label: "Water Consumption", value: "2 To 3 Tons / Ton Of Cloth" },
    ],
    [
      { label: "Gas Consumption", value: "0.4 Tons / Ton Of Cloth" },
      { label: "Process Uniformity", value: "Uniform (Controlled)" },
    ],
    [
      { label: "Process Repeatability", value: "Stable (Controlled)" },
      { label: "Shrinkage Control", value: "Controllable" },
    ],
    [
      { label: "Drive System", value: "Independent Electric Motor Per Drum" },
      {
        label: "Filtration",
        value: "Independent Filter + Flat Foam Filter Per Washing Tank",
      },
    ],
  ],
};

/** Tab 1 panel for the FOUND MG Series page. */
export default function KeySpecificationSection() {
  return <KeySpecification data={KEY_SPECIFICATION} />;
}
