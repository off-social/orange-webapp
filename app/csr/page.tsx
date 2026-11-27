import { staticPageSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo";

import CSRHero from "./CSRHero";
import CSRImpact from "./CSRImpact";
import CSRInitiatives from "./CSRInitiatives";

// Without its own metadata the page inherited the root layout's, which made it
// a canonical duplicate of the homepage.
export const metadata = buildPageMetadata(staticPageSeo.csr);

export default function CSRPage() {
  return (
    <>
      <CSRHero />
      <CSRImpact />
      <CSRInitiatives />
    </>
  );
}
