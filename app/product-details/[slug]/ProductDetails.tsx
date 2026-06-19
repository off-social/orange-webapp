"use client";

import ContactCTA from "@/components/product-details/ContactCTA";
import Features from "@/components/product-details/Features";
import FeaturesV1 from "@/components/product-details/FeaturesV1";
import GlobalComponents from "@/components/product-details/GlobalComponents";
import IdealFor from "@/components/product-details/IdealFor";
import IdealForV1 from "@/components/product-details/IdealForV1";
import InkCompatibility from "@/components/product-details/InkCompatibility";
import KeySpecification from "@/components/product-details/KeySpecification";
import PositionProShowcase from "@/components/product-details/PositionProShowcase";
import ProductionCapacity from "@/components/product-details/ProductionCapacity";
import Resources from "@/components/product-details/Resources";
import { ProductProvider } from "@/data/ProductContext";
import type { Product } from "@/data/product.types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useConsultation } from "@/data/ConsultationContext";

const TABS = [
  "Key Specification",
  "Ink Compatibility",
  "Features",
  "FeaturesV1",
  "Ideal for",
  "Ideal forV1",
  "Production Capacity",
  "Global Components",
];

export default function ProductDetails({ product }: { product: Product }) {
  const { openModal } = useConsultation();
  const [activeTab, setActiveTab] = useState(0);

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

  // Force-download the brochure instead of opening it in a new tab. Mobile
  // browsers (especially iOS Safari) ignore the anchor `download` attribute and
  // just open the PDF, so we fetch it as a blob and trigger the download
  // programmatically. Falls back to opening the URL if the fetch fails.
  const handleDownloadBrochure = async (brochureUrl: string) => {
    const fileName = brochureUrl.split("/").pop() || "brochure.pdf";
    try {
      const response = await fetch(brochureUrl);
      if (!response.ok) throw new Error(`Failed to fetch brochure: ${response.status}`);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(brochureUrl, "_blank", "noopener");
    }
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
              flexDirection: { xs: "column", sm: "row" },
              gap: "12px",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "18px" }} />}
              sx={{
                color: "#fff",
                bgcolor: "#111",
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                px: "20px",
                py: "13px",
                boxShadow: "none",
                width: { xs: "100%", sm: "200px" },
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
                onClick={() =>
                  handleDownloadBrochure(product.resources.brochure.brochureUrl!)
                }
                startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: "18px" }} />}
                sx={{
                  color: "#111",
                  bgcolor: "#fff",
                  borderColor: "#e0e0e0",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  px: "20px",
                  py: "13px",
                  boxShadow: "none",
                  width: { xs: "100%", sm: "200px" },
                  order: { xs: 2, sm: 1 },
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                    borderColor: "#111",
                    boxShadow: "none",
                  },
                }}
              >
                Download Brochure
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
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "center",
            gap: "24px",
            px: { xs: "16px", md: "168px" },
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
                display: (tab === "FeaturesV1" || tab === "Ideal forV1") ? { xs: "block", sm: "none" } : "block",
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
      {activeTab === 3 && <FeaturesV1 />}
      {activeTab === 4 && <IdealFor />}
      {activeTab === 5 && <IdealForV1 />}
      {activeTab === 6 && <ProductionCapacity />}
      {activeTab === 7 && <GlobalComponents />}

      {/* Permanent sections */}
      <PositionProShowcase />
      <Resources />
      <ContactCTA />
    </ProductProvider>
  );
}
