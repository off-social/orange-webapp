import CareerContact from "./CareerContact";
import CareerHero from "./CareerHero";
import CareerLifeAtOrange from "./CareerLifeAtOrange";
import CareerOpenings from "./CareerOpenings";
import CareerPurpose from "./CareerPurpose";

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
