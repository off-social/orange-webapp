"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";

const COLORS = [
  { name: "Cyan", abbr: "C", hex: "#28BEFE" },
  { name: "Magenta", abbr: "M", hex: "#FB2680" },
  { name: "Yellow", abbr: "Y", hex: "#FEE622" },
  { name: "Black", abbr: "K", hex: "#111111" },
  { name: "Red", abbr: "R", hex: "#D9423B" },
  { name: "Green", abbr: "G", hex: "#3B933D" },
  { name: "Blue", abbr: "B", hex: "#2065BF" },
  { name: "Grey", abbr: "G", hex: "#9E9E9E" },
];

const LIGHT_HEX = new Set(["#FEE622"]);

function getFlexGrow(i: number, active: number | null): number {
  if (active === null) return 1;
  const dist = Math.abs(i - active);
  if (dist === 0) return 3;
  if (dist === 1) return 0.55;
  if (dist === 2) return 0.8;
  return 1;
}

export default function GreenEdgeColorRange() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : tappedIndex;

  const handleSwatchClick = (i: number) => {
    setTappedIndex((prev) => (prev === i ? null : i));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        alignSelf: "stretch",
        width: "100%",
        boxSizing: "border-box",
        padding: { xs: "0", lg: "0 188px" },
      }}
    >
      {/* Label */}
      <Typography
        sx={{
          height: "16px",
          alignSelf: "stretch",
          color: "#333",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Color Range:
      </Typography>

      {/* Swatches row */}
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
              key={color.name + i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleSwatchClick(i)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: "12px", md: "8px" },
                flex: "1 0 0",
                minWidth: 0,
                cursor: "pointer",
                flexGrow: getFlexGrow(i, activeIndex),
                transition: "flex-grow 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {/* Color bar */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "48px", md: "60px" },
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
                {/* Name inside bar — visible when active */}
                <Typography
                  sx={{
                    display: "block",
                    color: isLight ? "#555" : "#FFF",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "11px", md: "10px" },
                    fontWeight: 700,
                    textAlign: "center",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(5px)",
                    transition: "opacity 0.25s, transform 0.25s",
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    textShadow: isLight ? "none" : "0 1px 3px rgba(0,0,0,0.35)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {color.name}
                </Typography>
              </Box>

              {/* Label below — abbr on mobile, full name on desktop */}
              <Typography
                sx={{
                  color: isActive ? "#333" : "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "10px", md: "12px" },
                  fontWeight: isActive ? 700 : 500,
                  lineHeight: "16px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  transition: "font-weight 0.2s, color 0.2s",
                }}
              >
                {/* single-letter on mobile, full name on desktop */}
                <Box
                  component="span"
                  sx={{ display: { xs: "inline", md: "none" } }}
                >
                  {color.abbr}
                </Box>
                <Box
                  component="span"
                  sx={{ display: { xs: "none", md: "inline" } }}
                >
                  {color.name}
                </Box>
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
