"use client";

import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useConsultation } from "@/data/ConsultationContext";
import { productHref } from "@/data/products";

interface Spec {
  label: string;
  value: string;
}

const BRAND_LOGOS: Record<
  string,
  { src: string; width: number; height: number }
> = {
  Colorix: { src: "/logos/Colorix-4.svg", width: 100, height: 28 },
  Homer: { src: "/logos/Homer-2-1.svg", width: 100, height: 28 },
};

interface Product {
  brand: string;
  image: string;
  alt: string;
  name: string;
  description: string;
  specs: Spec[];
}

const PRODUCTS: Product[] = [
  {
    brand: "Colorix",
    image: "/FabPro1i.png",
    alt: "FabPro 1i",
    name: "FabPro 1i",
    description:
      "An advanced digital textile printer designed to transform your textile printing operations with speed, precision, and efficiency. Made in India, it combines cutting-edge features such as high-speed printing, precise ink delivery, & low-maintenance systems, making it ideal for small to medium-scale businesses looking to scale their production while maintaining high-quality results.",
    specs: [
      { label: "Head technology", value: "Water based Ricoh Gen 6 Printhead" },
      { label: "Printing mode", value: "Single/ Bi directional" },
      { label: "Max Printing Width", value: "1500 mm" },
      { label: "Weight", value: "Printer – 2300 kg | Dryer – 800 kg" },
    ],
  },
  {
    brand: "Colorix",
    image: "/fabPro2i.png",
    alt: "FabPro 2i",
    name: "FabPro 2i",
    description:
      "FabPro 2i is a high-performance Made in India digital textile printer built for industrial speed, superior precision, and exceptional fabric versatility. With 16 Ricoh printheads and support for up to 8 colors, it's the ideal upgrade for mid to large-scale fabric printing setups.",
    specs: [
      { label: "Head technology", value: "Ricoh print head" },
      { label: "Printing mode", value: "Single/ Bi directional" },
      { label: "Max Printing Width", value: "1850 mm" },
      { label: "Weight", value: "Printer 2.7 T | Dryer – 1.2 T" },
    ],
  },
  {
    brand: "Homer",
    image: "/k42.png",
    alt: "K24",
    name: "K24",
    description:
      "The K24 is an industrial-grade digital textile printer designed for exceptional speed, precision, and color accuracy. With advanced piezoelectric printhead technology and intelligent ink systems, it delivers consistent, high-quality results across various fabrics—making it ideal for high-volume textile businesses.",
    specs: [
      { label: "Head technology", value: "(Single Channel) 8 ~ 16 ~ 24" },
      { label: "Printing mode", value: "Single/ Bi directional" },
      { label: "Max Printing Width", value: "1900 mm" },
      { label: "Weight", value: "3.05T (3050 kg)" },
    ],
  },
  {
    brand: "Homer",
    image: "/k62.png",
    alt: "K64",
    name: "K64",
    description:
      "The K64 is a next-generation industrial fabric printer engineered for speed, scale, and sharp precision. With up to 64 high-performance piezoelectric printheads and versatile ink support, it delivers ultra-fast, vibrant prints for high-demand textile production.",
    specs: [
      {
        label: "Head technology",
        value: "Industrial-grade piezoelectric printheads (32/48/56/64 heads)",
      },
      {
        label: "Printing mode",
        value: "S1 pass – up to 1100 linear meters/hr",
      },
      { label: "Max Printing Width", value: "1800 mm" },
      { label: "Weight", value: "CMYK + 4 Other Colors" },
    ],
  },
  {
    brand: "Homer",
    image: "/k32.png",
    alt: "K32",
    name: "K32",
    description:
      "The K132 is a high-speed industrial digital textile printer built for large-scale, precision-driven production. With 32 Kyocera printheads, intelligent automation, and vibrant multi-color ink capabilities, it delivers consistent quality and impressive throughput for demanding textile businesses.",
    specs: [
      { label: "Head technology", value: "Water-based Kyocera print head" },
      {
        label: "Printing mode",
        value: "1–4 pass (up to 570 linear meters/hr)",
      },
      { label: "Max Printing Width", value: "1900 mm" },
      { label: "Weight", value: "7000 kg | Dryer – 3585 kg" },
    ],
  },
  {
    brand: "Homer",
    image: "/RoketImg.png",
    alt: "Rocket",
    name: "Rocket",
    description:
      "ROCKET is a cutting-edge single pass digital textile printer designed for industrial-scale speed, flexibility, and vibrant print quality. With inline automation and sustainable printing tech, it redefines mass production for the modern fabric industry.",
    specs: [
      {
        label: "Head technology",
        value:
          "Industrial-grade piezoelectric printheads with variable droplet size (5/7/12 pl for Rocket K)",
      },
      { label: "Printing mode", value: "Single Pass" },
      { label: "Max Printing Width", value: "1850 mm" },
      {
        label: "Weight",
        value: "Printer– 24T | Dryer – 7.5T (net) / 9T (with packing)",
      },
    ],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const imageOnLeft = index % 2 === 0;
  const { openModal } = useConsultation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: imageOnLeft ? "row" : "row-reverse",
        },
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: "32px", md: "64px" },
        alignSelf: "stretch",
      }}
    >
      {/* Image column — logo on top (mobile only), image below */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flex: "1 0 0",
          width: "100%",
          minWidth: 0,
        }}
      >
        {/* Brand logo — above image on mobile only */}
        {BRAND_LOGOS[product.brand] && (
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Image
              src={BRAND_LOGOS[product.brand].src}
              alt={product.brand}
              width={BRAND_LOGOS[product.brand].width}
              height={BRAND_LOGOS[product.brand].height}
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </Box>
        )}
        <Box
          sx={{
            width: "100%",
            height: { xs: "240px", sm: "320px", md: "468px" },
            position: "relative",
          }}
        >
          <Image
            src={product.image}
            alt={product.alt}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </Box>
      </Box>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          flex: { md: "1 0 0" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        {/* Brand logo — in content section on desktop only */}
        {BRAND_LOGOS[product.brand] && (
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Image
              src={BRAND_LOGOS[product.brand].src}
              alt={product.brand}
              width={BRAND_LOGOS[product.brand].width}
              height={BRAND_LOGOS[product.brand].height}
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </Box>
        )}

        {/* Product name */}
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "41.6px" },
            letterSpacing: { xs: "0", md: "-1px" },
          }}
        >
          {product.name}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
          }}
        >
          {product.description}
        </Typography>

        {/* Specifications */}
        <Box sx={{ alignSelf: "stretch" }}>
          <Typography
            sx={{
              color: "#333",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: "20.8px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              mb: "12px",
            }}
          >
            Specifications
          </Typography>
          {product.specs.map((spec, i) => (
            <Box key={i}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "160px 1fr" },
                  alignItems: "baseline",
                  gap: { xs: "2px", md: "8px" },
                  py: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#333",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "20.8px",
                  }}
                >
                  {spec.label}
                </Typography>
                <Typography
                  sx={{
                    color: "#707070",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    lineHeight: "20.8px",
                  }}
                >
                  {spec.value}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "#E0E0E0" }} />
            </Box>
          ))}
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            gap: "12px",
            alignSelf: { xs: "stretch", md: "auto" },
          }}
        >
          {/* Book a Consultation — first on mobile (order 1), second on desktop (order 2) */}
          <Box
            component="button"
            onClick={() => openModal(product.name)}
            sx={{
              display: "flex",
              width: { xs: "100%", md: "180px" },
              height: "48px",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
              borderRadius: "8px",
              background: "#111",
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "20.8px",
              border: "none",
              cursor: "pointer",
              boxSizing: "border-box",
              order: { xs: 1, md: 2 },
              transition: "background 0.2s ease",
              "&:hover": { background: "#333" },
            }}
          >
            Book a Consultation
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          {/* Know More — second on mobile (order 2), first on desktop (order 1) */}
          <Box
            component={Link}
            href={productHref(product.name)}
            sx={{
              display: "flex",
              width: { xs: "100%", md: "150px" },
              height: "48px",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
              borderRadius: "8px",
              border: "1px solid #E0E0E0",
              background: "#FFF",
              color: "#111",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "20.8px",
              textDecoration: "none",
              cursor: "pointer",
              boxSizing: "border-box",
              order: { xs: 2, md: 1 },
              transition: "border-color 0.2s ease",
              "&:hover": { borderColor: "#999" },
            }}
          >
            Know More
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function AnimatedCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        alignSelf: "stretch",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition:
          "opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </Box>
  );
}

export default function GreenEdgeSolutions() {
  const { openModal } = useConsultation();
  return (
    <Box
      sx={{
        display: "flex",
        background: "#FFF",
        justifyContent: "center",
        alignSelf: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: {
            xs: "32px 16px 48px 16px",
            sm: "60px 24px",
            md: "60px 40px",
            lg: "80px 168px",
          },
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          alignSelf: "stretch",
          width: "100%",
          maxWidth: "1440px",
          boxSizing: "border-box",
        }}
      >
        {PRODUCTS.map((product, index) => (
          <AnimatedCard key={product.name}>
            <ProductCard product={product} index={index} />
            {index < PRODUCTS.length - 1 && (
              <Divider sx={{ borderColor: "#E0E0E0", mt: "64px" }} />
            )}
          </AnimatedCard>
        ))}
      </Box>
    </Box>
  );
}
