"use client";

import ContactCTA from "@/components/product-details/ContactCTA";
import Features from "@/components/product-details/Features";
import GlobalComponents from "@/components/product-details/GlobalComponents";
import IdealFor from "@/components/product-details/IdealFor";
import InkCompatibility from "@/components/product-details/InkCompatibility";
import KeySpecification from "@/components/product-details/KeySpecification";
import PositionProShowcase from "@/components/product-details/PositionProShowcase";
import ProductionCapacity from "@/components/product-details/ProductionCapacity";
import Resources from "@/components/product-details/Resources";
import { ProductProvider } from "@/data/ProductContext";
import type { Product } from "@/data/product.types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useConsultation } from "@/data/ConsultationContext";

const TABS = [
  "Key Specification",
  "Ink Compatibility",
  "Features",
  "Ideal for",
  "Production Capacity",
  "Global Components",
];

export default function ProductDetails({ product }: { product: Product }) {
  const { openModal } = useConsultation();
  const [activeTab, setActiveTab] = useState(0);
  const [downloading, setDownloading] = useState(false);

  // Keep the sticky tab bar in sync with the auto-hiding navbar so it never
  // gets covered: when the navbar is visible the tabs sit just below it, and
  // when the navbar slides away the tabs snap to the top.
  const [navVisible, setNavVisible] = useState(true);
  const [navHeight, setNavHeight] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const measure = () => {
      const header = document.querySelector("header");
      if (header) setNavHeight(header.offsetHeight);
    };
    measure();

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY.current || currentY < 80) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // The brochure downloads via a plain anchor link. On the deployed site
  // (Netlify) the `public/_headers` + `netlify.toml` config sends these PDFs
  // with `Content-Disposition: attachment`, which forces a download (iOS Safari
  // shows a "Download" prompt) instead of opening/previewing the PDF. We just
  // show a brief loading state on tap.
  const handleDownloadClick = () => {
    setDownloading(true);
    window.setTimeout(() => setDownloading(false), 2500);
  };

  return (
    <ProductProvider value={product}>
      {/* Hero section */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: "64px 16px 0 16px", md: "100px 168px 0 168px" },
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          alignSelf: "stretch",
          background: "#FFF",
        }}
      >
        {/* Heading + subtitle + buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "16px", md: "20px" },
            alignSelf: "stretch",
          }}
        >
          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "40px", md: "72px" },
              fontWeight: 500,
              lineHeight: { xs: "52px", md: "67.2px" },
              letterSpacing: "-1px",
            }}
          >
            {product.name}
          </Typography>

          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "14px", md: "20px" },
              fontWeight: 500,
              lineHeight: { xs: "22.4px", md: "26px" },
              letterSpacing: 0,
            }}
          >
            {product.tagline}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: "10px", sm: "12px" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Button
              variant="contained"
              endIcon={
                <ArrowForwardIcon sx={{ fontSize: { xs: "15px", sm: "18px" } }} />
              }
              sx={{
                color: "#fff",
                bgcolor: "#111",
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: 500,
                whiteSpace: "nowrap",
                px: { xs: "16px", sm: "20px" },
                py: { xs: "11px", sm: "13px" },
                boxShadow: "none",
                width: { xs: "auto", sm: "200px" },
                order: { xs: 1, sm: 2 },
                "&:hover": { bgcolor: "#333", boxShadow: "none" },
              }}
              onClick={() => openModal(product.name)}
            >
              Book a Consultation
            </Button>

            {product.resources.brochure.brochureUrl && (
              <Button
                variant="outlined"
                component="a"
                href={product.resources.brochure.brochureUrl}
                download
                onClick={handleDownloadClick}
                disabled={downloading}
                startIcon={
                  downloading ? (
                    <CircularProgress size={16} sx={{ color: "#111" }} />
                  ) : (
                    <FileDownloadOutlinedIcon sx={{ fontSize: "18px" }} />
                  )
                }
                sx={{
                  color: "#111",
                  bgcolor: "#fff",
                  borderColor: "#e0e0e0",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "12px", sm: "14px" },
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  px: { xs: "16px", sm: "20px" },
                  py: { xs: "11px", sm: "13px" },
                  boxShadow: "none",
                  width: { xs: "auto", sm: "200px" },
                  order: { xs: 2, sm: 1 },
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                    borderColor: "#111",
                    boxShadow: "none",
                  },
                  "&.Mui-disabled": { color: "#111", opacity: 0.7 },
                }}
              >
                {downloading ? "Downloading..." : "Download Brochure"}
              </Button>
            )}
          </Box>
        </Box>

        {/* Product image - Mobile */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "relative",
            width: "100%",
            height: "269px",
            aspectRatio: "187/128",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src={product.heroImage.mobile}
            alt={product.name}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            priority
          />
        </Box>

        {/* Product image - Desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "100%",
            lineHeight: 0,
          }}
        >
          <Image
            src={product.heroImage.desktop}
            alt={product.name}
            width={1920}
            height={900}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
            priority
          />
        </Box>
      </Box>

      {/* Tab bar */}
      <Box
        sx={{
          position: "sticky",
          top: navVisible ? `${navHeight}px` : 0,
          zIndex: 10,
          borderBottom: "1px solid #E0E0E0",
          background: "#F2F2F2",
          transition: "top 0.3s ease, background 0.3s, border-color 0.3s",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "center" },
            alignItems: "center",
            gap: "24px",
            px: { xs: "16px", sm: "24px", md: "168px" },
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {TABS.map((tab, index) => (
            <Box
              key={tab}
              onClick={() => setActiveTab(index)}
              sx={{
                position: "relative",
                px: { xs: "0", md: "4px" },
                py: "16px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: activeTab === index ? 500 : 400,
                color: "#707070",
                transition: "color 0.2s",
                display: "block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  bgcolor: activeTab === index ? "#F6891F" : "transparent",
                  borderRadius: "2px 2px 0 0",
                  transition: "background-color 0.2s",
                },
              }}
            >
              {tab}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Tab content */}
      {activeTab === 0 && <KeySpecification />}
      {activeTab === 1 && <InkCompatibility />}
      {activeTab === 2 && <Features />}
      {activeTab === 3 && <IdealFor />}
      {activeTab === 4 && <ProductionCapacity />}
      {activeTab === 5 && <GlobalComponents />}

      {/* Permanent sections */}
      <Resources />
      <PositionProShowcase />
      <ContactCTA />
    </ProductProvider>
  );
}
