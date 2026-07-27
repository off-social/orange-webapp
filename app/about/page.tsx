import LogoMarquee from "@/components/home/LogoMarquee";
import AboutHero from "./AboutHero";
import Leadership from "./Leadership";
import OurAssociations from "./OurAssociations";
import OurStory from "./OurStory";
import UpgradeCTA from "./UpgradeCTA";
import WhoWeAre from "./WhoWeAre";
import WhyOrangeOTec from "./WhyOrangeOTec";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Orange O Tec | Digital Textile Printer Manufacturer",
  description:
    "Orange O Tec sold India's first single-pass digital textile printer and has installed 600+ machines. Surat manufacturer with a 20,000 sq ft assembly plant.",
  path: "/about/",
});

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
