import { staticPageSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo";
import GreenEdgeHero from "./GreenEdgeHero";
import GreenEdgeTabs from "./GreenEdgeTabs";

export const metadata = buildPageMetadata(staticPageSeo.greenEdgeSeries);

export default function GreenEdgeSeriesPage() {
  return (
    <>
      <GreenEdgeHero />
      <GreenEdgeTabs />
    </>
  );
}
