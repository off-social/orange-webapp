"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import ProductSidebar from "./ProductSidebar";

const FEATURES = [
  {
    icon: (
      <Image
        src="/Proprietaryvisionsystem.svg"
        alt="Proprietary vision system"
        width={64}
        height={64}
      />
    ),
    title: "Proprietary vision system",
    desc: "Scans fabric, locks onto reference points, and compensates for distortion in real time for flawless pattern alignment.",
  },
  {
    icon: (
      <Image
        src="/AdvancedIcon.svg"
        alt="Advanced head protection"
        width={64}
        height={64}
      />
    ),
    title: "Advanced head protection",
    desc: "Sensor systems detect fabric obstacles and protect printheads from scratches and damage during production.",
  },
  {
    icon: (
      <Image
        src="/One-touch-maintenance.svg"
        alt="One-touch maintenance"
        width={64}
        height={64}
      />
    ),
    title: "One-touch maintenance",
    desc: "Automated belt cleaning and one-touch printhead maintenance minimise downtime and reduce operator workload.",
  },
  {
    icon: (
      <Image
        src="/Professional-color-management.svg"
        alt="Professional color management"
        width={64}
        height={64}
      />
    ),
    title: "Professional color management",
    desc: "Analyses design file colors, auto-generates color profiles, and performs real-time calibration for consistent output.",
  },
  {
    icon: (
      <Image
        src="/Precision-ink-mixing.svg"
        alt="Precision ink mixing"
        width={64}
        height={64}
      />
    ),
    title: "Precision ink mixing",
    desc: "High-precision dye ratio control for superior color reproduction and consistency across long production runs.",
  },
  {
    icon: (
      <Image
        src="/Energy-efficient-design.svg"
        alt="Energy-efficient design"
        width={64}
        height={64}
      />
    ),
    title: "Energy-efficient design",
    desc: "Intelligent energy management across all systems keeps operating costs low in high-volume production environments.",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / 330);
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "100px 168px" },
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        gap: "24px",
        alignSelf: "stretch",
        background: "#F2F2F2",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Sidebar — hidden on mobile */}
      <Box sx={{ display: { xs: "none", md: "block" }, flexShrink: 0 }}>
        <ProductSidebar />
      </Box>

      {/* Right content */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: "0", md: "0 94px" },
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "40px" },
          flex: "1 0 0",
          width: { xs: "100%", md: "auto" },
        }}
      >
        {/* Heading + description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "52px" },
              letterSpacing: { xs: "0", md: "-1px" },
            }}
          >
            Engineering Features
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: { xs: 500, md: 400 },
              lineHeight: { xs: "19.2px", md: "25.6px" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Tempor at a sed phasellus.
            Amet morbi eget dignissim non venenatis pellentesque purus lectus
            ullamcorper.
          </Typography>
        </Box>

        {/* Cards — Mobile: horizontal carousel */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            width: "100%",
          }}
        >
          <Box
            ref={scrollRef}
            onScroll={handleScroll}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              width: "100%",
              px: "2px",
            }}
          >
            {FEATURES.map((feature) => (
              <Box
                key={feature.title}
                sx={{
                  display: "flex",
                  width: "330px",
                  minWidth: "330px",
                  padding: "24px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  borderRadius: "16px",
                  background: "#FFF",
                  scrollSnapAlign: "center",
                  flexShrink: 0,
                  cursor: "pointer",
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "64px",
                    height: "64px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {feature.icon}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#333",
                      textAlign: "center",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "25.6px",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#707070",
                      textAlign: "center",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "19.2px",
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Pagination dots */}
          <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {FEATURES.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: i === activeIndex ? "20px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  bgcolor: i === activeIndex ? "#111" : "#D9D9D9",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => {
                  scrollRef.current?.scrollTo({
                    left: i * 330,
                    behavior: "smooth",
                  });
                  setActiveIndex(i);
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Cards — Desktop: 2-column grid */}
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            width: "100%",
          }}
        >
          {FEATURES.map((feature) => (
            <Box
              key={feature.title}
              sx={{
                display: "flex",
                height: "228px",
                padding: "24px",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                borderRadius: "16px",
                background: "#FFF",
                cursor: "pointer",
                transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
                },
              }}
            >
              <Box
                sx={{
                  width: "64px",
                  height: "64px",
                  flexShrink: 0,
                  aspectRatio: "1/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {feature.icon}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: "#333",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25.6px",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#707070",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "19.2px",
                  }}
                >
                  {feature.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
