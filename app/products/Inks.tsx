"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useConsultation } from "@/data/ConsultationContext";

const INK_TABS = [
  {
    label: "Reactive",
    src: "/Reactive1.png",
    name: "Reactive Ink Series",
    desc: "Vivid, long-lasting reactive inks for cotton and natural fibre printing.",
  },
  {
    label: "Sublimation",
    src: "/Sublimation.png",
    name: "Sublimation Ink Series",
    desc: "High-performance sublimation inks for vibrant polyester fabric printing.",
  },
  {
    label: "Pigment",
    src: "/Pigment.png",
    name: "Pigment Ink Series",
    desc: "Eco-friendly pigment inks compatible with direct-to-fabric printing.",
  },
];

const FADE_ANIM = "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";

export default function Inks() {
  const { openModal } = useConsultation();
  const [activeTab, setActiveTab] = useState(0);

  const current = INK_TABS[activeTab];
  const animKey = `ink-${activeTab}`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "24px", md: "40px" },
        px: { xs: "16px", md: "168px" },
        py: { xs: "64px", md: "100px" },
        alignSelf: "stretch",
        width: "100%",
        bgcolor: "#111",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <style>{`@keyframes fadeSlideUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }`}</style>

      {/* Heading */}
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            color: "#FFF",
            fontFamily: "Inter, sans-serif",
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          Inks
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            fontFamily: "Inter, sans-serif",
            lineHeight: "25.6px",
            mt: "4px",
          }}
        >
          Precision Engineered Industrial Printing Inks
        </Typography>
      </Box>

      {/* Pill tabs */}
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          flexWrap: { xs: "nowrap", md: "wrap" },
          justifyContent: { xs: "flex-start", md: "center" },
          overflowX: { xs: "auto", md: "visible" },
          width: "100%",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {INK_TABS.map((tab, i) => (
          <Button
            key={i}
            onClick={() => setActiveTab(i)}
            sx={{
              width: { xs: "auto", md: "200px" },
              minWidth: { xs: "140px", md: "200px" },
              padding: "12px 24px",
              borderRadius: "32px",
              bgcolor: activeTab === i ? "#FFF" : "transparent",
              color: activeTab === i ? "#111" : "#FFF",
              border: "1px solid #E0E0E0",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              whiteSpace: "nowrap",
              flexShrink: 0,
              boxShadow: "none",
              "&:hover": {
                bgcolor: activeTab === i ? "#e0e0e0" : "rgba(255,255,255,0.1)",
                boxShadow: "none",
              },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>

      {/* Single image */}
      <Box
        key={animKey}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          animation: FADE_ANIM,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: "220px", sm: "300px", md: "400px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={current.src}
            alt={current.name}
            width={900}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>

      {/* Product info */}
      <Box
        key={`info-${animKey}`}
        sx={{ textAlign: "center", width: "100%", animation: FADE_ANIM }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "26px",
          }}
        >
          {current.name}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "19.2px",
            mt: "6px",
          }}
        >
          {current.desc}
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        key={`btn-${animKey}`}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "12px", md: 2 },
          justifyContent: "center",
          width: "100%",
          animation: FADE_ANIM,
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
          sx={{
            bgcolor: "#F6891F",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            px: 3,
            py: "13px",
            boxShadow: "none",
            width: { xs: "100%", md: "auto" },
            "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
          }}
          onClick={() => openModal()}
        >
          Book a Consultation
        </Button>
        {/* <Button
          variant="outlined"
          sx={{
            color: "#111",
            bgcolor: "#FFF",
            borderColor: "#FFF",
            borderRadius: "12px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            px: 3,
            py: "13px",
            boxShadow: "none",
            width: { xs: "100%", md: "auto" },
            "&:hover": { bgcolor: "#e0e0e0", boxShadow: "none" },
          }}
        >
          Know More
        </Button> */}
      </Box>
    </Box>
  );
}
