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
  { name: "Cyan", short: "C", hex: "#28BEFE" },
  { name: "Magenta", short: "M", hex: "#FB2680" },
  { name: "Yellow", short: "Y", hex: "#FEE622" },
  { name: "Black", short: "K", hex: "#111111" },
  { name: "Red", short: "R", hex: "#D9423B" },
  { name: "Green", short: "G", hex: "#3B933D" },
  { name: "Blue", short: "B", hex: "#2065BF" },
  { name: "Orange", short: "O", hex: "#FC7017" },
  { name: "F. Mag.", short: "FM", hex: "#F292B1" },
  { name: "L. Mag.", short: "LM", hex: "#FC2E93" },
  { name: "F. Yellow", short: "FY", hex: "#FFF44F" },
  { name: "Grey", short: "G", hex: "#9E9E9E" },
];

const LIGHT_HEX = new Set(["#FEE622", "#FFF44F"]);

function getFlexGrow(i: number, active: number | null): number {
  if (active === null) return 1;
  const dist = Math.abs(i - active);
  if (dist === 0) return 3;
  if (dist === 1) return 0.55;
  if (dist === 2) return 0.8;
  return 1;
}

export default function InkCompatibility() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  // Desktop: hover drives it. Mobile: tap toggles it.
  const activeIndex = hoveredIndex !== null ? hoveredIndex : tappedIndex;

  const handleSwatchClick = (i: number) => {
    setTappedIndex((prev) => (prev === i ? null : i));
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "48px 16px", md: "100px 40px", lg: "100px 168px" },
        justifyContent: "space-between",
        alignItems: { xs: "stretch", md: "flex-start" },
        alignSelf: "stretch",
        background: "#FFF",
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
          padding: { xs: "0", md: "0 24px", lg: "0 94px" },
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "28px", md: "48px" },
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
            Designed to support multiple ink technologies, offering flexibility
            for various fabric types while maintaining exceptional print quality
            and durability.
          </Typography>
        </Box>

        {/* Ink type cards — 2×2 on mobile, single row on desktop */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: { xs: "wrap", md: "nowrap" },
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
                padding: { xs: "14px 10px", md: "16px" },
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: "4px", md: "8px" },
                flex: { xs: "0 0 50%", md: 1 },
                boxSizing: "border-box",
                borderRight: {
                  xs: index % 2 === 0 ? "1px solid #E0E0E0" : "none",
                  md:
                    index < INK_TYPES.length - 1 ? "1px solid #E0E0E0" : "none",
                },
                borderBottom: {
                  xs: index < 2 ? "1px solid #E0E0E0" : "none",
                  md: "none",
                },
                transition: "background 0.15s",
                "&:active": { background: "#F7F7F7" },
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "15px", md: "20px" },
                  fontWeight: 500,
                  lineHeight: { xs: "21px", md: "26px" },
                }}
              >
                {ink.name}
              </Typography>
              <Typography
                sx={{
                  color: "#707070",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "11px", md: "13px" },
                  fontWeight: 500,
                  lineHeight: { xs: "17px", md: "20px" },
                  height: { xs: "auto", md: "40px" },
                }}
              >
                {ink.fabrics}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Color spectrum */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignSelf: "stretch",
          }}
        >
          {/* Label */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: "8px",
            }}
          >
            <PaletteOutlinedIcon
              sx={{ fontSize: "16px", color: "#707070", flexShrink: 0 }}
            />
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

          {/* Mobile hint */}
          <Typography
            sx={{
              display: { xs: "block", md: "none" },
              color: "#BDBDBD",
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              lineHeight: "16px",
              textAlign: "center",
            }}
          >
            Tap a color to explore
          </Typography>

          {/* Swatches */}
          <Box
            sx={{
              display: "flex",
              gap: "0",
              alignSelf: "stretch",
              overflow: "hidden",
            }}
          >
            {COLORS.map((color, i) => {
              const isFirst = i === 0;
              const isLast = i === COLORS.length - 1;
              const isActive = activeIndex === i;
              const isLight = LIGHT_HEX.has(color.hex);

              return (
                <Box
                  key={color.name}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleSwatchClick(i)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    flexGrow: getFlexGrow(i, activeIndex),
                    flexShrink: 1,
                    flexBasis: 0,
                    minWidth: 0,
                    cursor: "pointer",
                    transition: "flex-grow 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {/* Color bar */}
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: "72px", md: "69px" },
                      alignSelf: "stretch",
                      bgcolor: color.hex,
                      borderRadius: isFirst
                        ? "8px 0 0 8px"
                        : isLast
                          ? "0 8px 8px 0"
                          : "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    {/* Name shown in center on active */}
                    <Typography
                      sx={{
                        color: isLight ? "#555" : "#fff",
                        fontFamily: "Inter, sans-serif",
                        fontSize: { xs: "9px", md: "10px" },
                        fontWeight: 700,
                        textAlign: "center",
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? "translateY(0)"
                          : "translateY(5px)",
                        transition: "opacity 0.25s, transform 0.25s",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        textShadow: isLight
                          ? "none"
                          : "0 1px 3px rgba(0,0,0,0.35)",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {color.name}
                    </Typography>
                  </Box>

                  {/* Short label below */}
                  <Typography
                    sx={{
                      color: isActive ? "#333" : "#707070",
                      fontFamily: "Inter, sans-serif",
                      fontSize: { xs: "9px", md: "11px" },
                      fontWeight: isActive ? 700 : 400,
                      lineHeight: "17px",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      transition: "font-weight 0.2s, color 0.2s",
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
