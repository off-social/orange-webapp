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

/**
 * Like {@link useProduct} but returns null outside a provider, for sections
 * reused on hand-built pages that have no registered `Product` (e.g. FOUND).
 */
export function useOptionalProduct(): Product | null {
  return useContext(ProductContext);
}
