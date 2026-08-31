import { staticPageSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo";
import PioneeringSolutions from "./PioneeringSolutions";
import ReliableSupport from "./ReliableSupport";
import ServiceRequestForm from "./ServiceRequestForm";

export const metadata = buildPageMetadata(staticPageSeo.services);

export default function ServicesPage() {
  return (
    <>
      <ReliableSupport />
      <PioneeringSolutions />
      <ServiceRequestForm />
    </>
  );
}
