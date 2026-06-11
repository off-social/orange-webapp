import LogoMarquee from "@/components/home/LogoMarquee";
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
