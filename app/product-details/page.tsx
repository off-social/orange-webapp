import { DEFAULT_PRODUCT_SLUG } from "@/data/products";
import { redirect } from "next/navigation";

export default function ProductDetailsIndex() {
  redirect(`/product-details/${DEFAULT_PRODUCT_SLUG}`);
}
