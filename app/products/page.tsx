import MovingToDigital from "@/components/home/MovingToDigital";
import TextileHero from "@/components/home/TextileHero";
import { Grid } from "@mui/material";
import DigitalTextilePrinters from "./DigitalTextilePrinters";
import Inks from "./Inks";
import LabelPrinters from "./LabelPrinters";
import ProductsHero from "./ProductsHero";
import PublicationPrinters from "./PublicationPrinters";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Sublimation, Direct-to-Fabric & Label Printers | Orange",
  description:
    "Browse Orange O Tec digital textile printers: sublimation, direct-to-fabric, single-pass, label and publication systems. Made in India, 600+ installations.",
  path: "/products/",
});

export default function ProductsPage() {
  return (
    <>
      <Grid size={12}>
        <ProductsHero />
      </Grid>
      <Grid size={12}>
        <DigitalTextilePrinters />
      </Grid>
      <Grid size={12}>
        <LabelPrinters />
      </Grid>
      <Grid size={12}>
        <PublicationPrinters />
      </Grid>
      <Grid size={12}>
        <MovingToDigital />
      </Grid>
      <Grid size={12}>
        <Inks />
      </Grid>
      <Grid size={12}>
        <TextileHero />
      </Grid>
    </>
  );
}
