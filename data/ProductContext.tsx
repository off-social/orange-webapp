"use client";

import { createContext, useContext } from "react";
import type { Product } from "./product.types";

const ProductContext = createContext<Product | null>(null);

export const ProductProvider = ProductContext.Provider;

export function useProduct(): Product {
  const product = useContext(ProductContext);
  if (!product) {
    throw new Error("useProduct must be used within a <ProductProvider>");
  }
  return product;
}
