import InstructionsViewer from "@/components/instructions/InstructionsViewer";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Instructions and Precautions | Orange O Tec",
    description: "Instructions and precautions for Orange O Tec equipment.",
    path: "/instructions-and-precautions/",
    noindex: true,
  }),
  robots: { index: false, follow: false },
};

export default function InstructionsAndPrecautionsPage() {
  return (
    <div
      className="instructions-doc"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 11000,
        background: "#e8e8e8",
        overflow: "hidden",
      }}
    >
      <InstructionsViewer />
    </div>
  );
}
