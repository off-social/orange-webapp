import GreenEdgeHero from "./GreenEdgeHero";
import GreenEdgeTabs from "./GreenEdgeTabs";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Green Edge Series | Sustainable Textile Printing | Orange",
  description:
    "The Green Edge Series by Orange O Tec brings waterless, low-emission digital textile printing to sustainable production. Explore the eco-conscious range.",
  path: "/green-edge-series/",
});

export default function GreenEdgeSeriesPage() {
  return (
    <>
      <GreenEdgeHero />
      <GreenEdgeTabs />
    </>
  );
}
