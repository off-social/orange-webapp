import { productSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo";
import FoundTextileProcessing from "./FoundTextileProcessing";

export const metadata = buildPageMetadata(productSeo.found);

export default function FoundPage() {
  return <FoundTextileProcessing />;
}
