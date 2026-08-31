import { staticPageSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import GreenEdgeHero from "./GreenEdgeHero";

export const metadata = buildPageMetadata(staticPageSeo.greenEdgeSeries);
import GreenEdgeTabs from "./GreenEdgeTabs";

export default function GreenEdgeSeriesPage() {
  return (
    <>
      <GreenEdgeHero />
      <GreenEdgeTabs />
    </>
  );
}
