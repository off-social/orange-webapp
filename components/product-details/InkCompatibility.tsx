"use client";

import { useProduct } from "@/data/ProductContext";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

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
  const { inkCompatibility } = useProduct();
  const INK_TYPES = inkCompatibility.inkTypes;
  const COLORS = inkCompatibility.colors;
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
        padding: { xs: "48px 16px", md: "80px 40px", lg: "80px 168px 40px" },
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        background: "#FFF",
      }}
    >
      {/* Centered content column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "28px", md: "48px" },
          width: "100%",
          maxWidth: "730px",
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
            {inkCompatibility.description}
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
