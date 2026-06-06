import { Grid } from "@mui/material";
import Image from "next/image";
import TextileHero from "@/components/home/TextileHero";
import DigitalTextilePrinters from "./DigitalTextilePrinters";
import Inks from "./Inks";
import LabelPrinters from "./LabelPrinters";
import PublicationPrinters from "./PublicationPrinters";

export default function ProductsPage() {
  return (
    <>
      <Grid size={12}>
        <Image src="/empty.png" alt="Products" width={1920} height={1080} />
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
        <Inks />
      </Grid>
      <Grid size={12}>
        <TextileHero />
      </Grid>
    </>
  );
}
