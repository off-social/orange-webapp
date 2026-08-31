import { staticPageSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import PioneeringSolutions from "./PioneeringSolutions";

export const metadata = buildPageMetadata(staticPageSeo.services);
import ReliableSupport from "./ReliableSupport";
import ServiceRequestForm from "./ServiceRequestForm";

export default function ServicesPage() {
  return (
    <>
      <ReliableSupport />
      <PioneeringSolutions />
      <ServiceRequestForm />
    </>
  );
}
