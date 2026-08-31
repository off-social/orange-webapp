import { staticPageSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import LogoMarquee from "@/components/home/LogoMarquee";

export const metadata = buildPageMetadata(staticPageSeo.about);
import AboutHero from "./AboutHero";
import Leadership from "./Leadership";
import OurAssociations from "./OurAssociations";
import OurStory from "./OurStory";
import UpgradeCTA from "./UpgradeCTA";
import WhoWeAre from "./WhoWeAre";
import WhyOrangeOTec from "./WhyOrangeOTec";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <WhyOrangeOTec />
      <OurStory />
      <OurAssociations />
      <LogoMarquee />
      <Leadership />
      <UpgradeCTA />
    </>
  );
}
