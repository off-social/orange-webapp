import { staticPageSeo } from "@/data/seo/pages";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { Grid } from "@mui/material";
import TextileHero from "@/components/home/TextileHero";

export const metadata = buildPageMetadata(staticPageSeo.products);
import DigitalTextilePrinters from "./DigitalTextilePrinters";
import Inks from "./Inks";
import LabelPrinters from "./LabelPrinters";
import PublicationPrinters from "./PublicationPrinters";
import ProductsHero from "./ProductsHero";
import MovingToDigital from "@/components/home/MovingToDigital";

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
