import CareerContact from "./CareerContact";
import CareerHero from "./CareerHero";
import CareerLifeAtOrange from "./CareerLifeAtOrange";
import CareerOpenings from "./CareerOpenings";
import CareerPurpose from "./CareerPurpose";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Careers at Orange O Tec | Jobs in Surat, Gujarat",
  description:
    "Explore careers at Orange O Tec, a Surat-based digital textile printing manufacturer. View current openings and life at Orange. Apply today.",
  path: "/career/",
});

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <CareerOpenings />
      <CareerContact />
      <CareerPurpose />
      <CareerLifeAtOrange />
    </>
  );
}
