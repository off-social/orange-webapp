"use client";

import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ProductSidebar from "./ProductSidebar";

const INK_TYPES = [
  { name: "Reactive", fabrics: "Cotton · Linen · Viscose · Natural fibers" },
  { name: "Acid", fabrics: "Silk · Nylon · Protein fibers" },
  { name: "Pigment", fabrics: "All fabrics, low water usage" },
  { name: "Disperse", fabrics: "Polyester · Synthetic blends" },
];

const COLORS = [
  { name: "Cyan",     short: "C",  hex: "#28BEFE" },
  { name: "Magenta",  short: "M",  hex: "#FB2680" },
  { name: "Yellow",   short: "Y",  hex: "#FEE622" },
  { name: "Black",    short: "K",  hex: "#111111" },
  { name: "Red",      short: "R",  hex: "#D9423B" },
  { name: "Green",    short: "G",  hex: "#3B933D" },
  { name: "Blue",     short: "B",  hex: "#2065BF" },
  { name: "Orange",   short: "O",  hex: "#FC7017" },
  { name: "F. Mag.",  short: "FM", hex: "#F292B1" },
  { name: "L. Mag.",  short: "LM", hex: "#FC2E93" },
  { name: "F. Yellow",short: "FY", hex: "#FFF44F" },
  { name: "Grey",     short: "G",  hex: "#9E9E9E" },
];

export default function InkCompatibility() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "100px 168px" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "flex-start" },
        alignSelf: "stretch",
        background: "#FFF",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "0", md: "0" },
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
          gap: { xs: "40px", md: "48px" },
          flex: "1 0 0",
        }}
      >
        {/* Heading + description */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
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
            Ink Compatibility
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

        {/* Ink type cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignSelf: "stretch",
            border: "1px solid #E0E0E0",
            borderRadius: "16px",
            background: "#FFF",
            overflow: "hidden",
          }}
        >
          {INK_TYPES.map((ink, index) => (
            <Box
              key={ink.name}
              sx={{
                display: "flex",
                padding: "16px",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                flex: 1,
                borderRight: {
                  xs: "none",
                  md: index < INK_TYPES.length - 1 ? "1px solid #E0E0E0" : "none",
                },
                borderBottom: {
                  xs: index < INK_TYPES.length - 1 ? "1px solid #E0E0E0" : "none",
                  md: "none",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "26px",
                }}
              >
                {ink.name}
              </Typography>
              <Typography
                sx={{
                  color: "#707070",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "12px", md: "13px" },
                  fontWeight: 500,
                  lineHeight: { xs: "19.2px", md: "20px" },
                  height: { xs: "auto", md: "40px" },
                }}
              >
                {ink.fabrics}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Color spectrum */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", alignSelf: "stretch" }}>
          {/* Label */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, gap: "8px" }}>
            <PaletteOutlinedIcon sx={{ fontSize: "16px", color: "#707070", flexShrink: 0 }} />
            <Typography
              sx={{
                color: "#707070",
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Color Spectrum - {COLORS.length} Colors
            </Typography>
          </Box>

          {/* Swatches */}
          <Box sx={{ display: "flex", gap: "0", alignSelf: "stretch" }}>
            {COLORS.map((color, i) => {
              const isFirst = i === 0;
              const isLast = i === COLORS.length - 1;
              const isHovered = hoveredIndex === i;
              return (
                <Box
                  key={color.name}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    flex: "1 0 0",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: isHovered ? "85px" : "69px",
                      alignSelf: "stretch",
                      bgcolor: color.hex,
                      borderRadius: isFirst ? "8px 0 0 8px" : isLast ? "0 8px 8px 0" : "0",
                      transition: "height 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#707070",
                      fontFamily: "Inter, sans-serif",
                      fontSize: { xs: "9px", md: "11px" },
                      fontWeight: isHovered ? 700 : 400,
                      lineHeight: "17px",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      transition: "font-weight 0.2s",
                    }}
                  >
                    {color.short}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
