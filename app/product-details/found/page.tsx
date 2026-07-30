import { buildPageMetadata } from "@/lib/seo";
import FoundTextileProcessing from "./FoundTextileProcessing";

export const metadata = buildPageMetadata({
  title: "MG Series Deoiling Washing Machine | Magic Washer K | FOUND",
  description:
    "MG Series (Magic Washer K) by FOUND — a low-tension open-width deoiling and pre-shrinking washing machine for knit and woven fabrics. Book a consultation.",
  path: "/product-details/found/",
});

export default function FoundPage() {
  return <FoundTextileProcessing />;
}
