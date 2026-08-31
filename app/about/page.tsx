import LogoMarquee from "@/components/home/LogoMarquee";
import { staticPageSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo";
import AboutHero from "./AboutHero";
import Leadership from "./Leadership";
import OurAssociations from "./OurAssociations";
import OurStory from "./OurStory";
import UpgradeCTA from "./UpgradeCTA";
import WhoWeAre from "./WhoWeAre";
import WhyOrangeOTec from "./WhyOrangeOTec";

export const metadata = buildPageMetadata(staticPageSeo.about);

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
