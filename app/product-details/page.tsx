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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const TABS = [
  "Key Specification",
  "Ink Compatibility",
  "Features",
  "Ideal for",
  "Production Capacity",
  "Global Components",
  "Resources",
];

export default function ProductDetailsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
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
            Position Pro
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
            High-speed Direct-to-Fabric Positioning Printer
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "12px",
              mt: { xs: "0", md: "22px" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Button
              variant="contained"
              endIcon={
                <ArrowForwardIcon sx={{ fontSize: "15px !important" }} />
              }
              sx={{
                bgcolor: "#111",
                color: "#fff",
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                px: "28px",
                py: "13px",
                boxShadow: "none",
                width: { xs: "100%", sm: "200px" },
                order: { xs: 1, sm: 2 },
                "&:hover": { bgcolor: "#333", boxShadow: "none" },
              }}
            >
              Book a Demo
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#111",
                bgcolor: "#fff",
                borderColor: "#e0e0e0",
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                px: "28px",
                py: "13px",
                boxShadow: "none",
                width: { xs: "100%", sm: "200px" },
                order: { xs: 2, sm: 1 },
                "&:hover": { bgcolor: "#f5f5f5", boxShadow: "none" },
              }}
            >
              Book a Consultation
            </Button>
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
            src="/PositionProMobile.png"
            alt="Position Pro Digital Textile Printer"
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
            src="/PositionProDetails.png"
            alt="Position Pro Digital Textile Printer"
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
          top: 0,
          zIndex: 10,
          borderBottom:
            activeTab === 4 ? "1px solid #333" : "1px solid #E0E0E0",
          background: activeTab === 4 ? "#111" : "#F2F2F2",
          transition: "background 0.3s, border-color 0.3s",
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
                color:
                  activeTab === index
                    ? activeTab === 4
                      ? "#FFF"
                      : "#111"
                    : activeTab === 4
                      ? "#666"
                      : "#707070",
                transition: "color 0.2s",
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
      {activeTab === 6 && <Resources />}
      <PositionProShowcase />
      <ContactCTA />
    </>
  );
}
