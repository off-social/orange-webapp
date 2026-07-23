import MovingToDigital from "@/components/home/MovingToDigital";
import TextileHero from "@/components/home/TextileHero";
import { Grid } from "@mui/material";
import DigitalTextilePrinters from "./DigitalTextilePrinters";
import Inks from "./Inks";
import LabelPrinters from "./LabelPrinters";
import ProductsHero from "./ProductsHero";
import PublicationPrinters from "./PublicationPrinters";

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
