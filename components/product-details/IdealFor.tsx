"use client";

import { useProduct } from "@/data/ProductContext";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function IdealFor() {
  const { idealFor } = useProduct();
  const FABRICS = idealFor.fabrics;

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "80px 40px", lg: "80px 168px 40px" },
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
          gap: { xs: "40px", md: "64px" },
          width: "100%",
          maxWidth: "730px",
        }}
      >
        {/* Heading + description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
            Ideal Applications
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
            {idealFor.description}
          </Typography>
        </Box>

        {/* ── Mobile: horizontal scroll carousel ── */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            gap: "16px",
            overflowX: "auto",
            // break out of the parent's 16px horizontal padding
            width: "calc(100% + 32px)",
            ml: "-16px",
            px: "16px",
            pb: "4px",
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {FABRICS.map((fabric) => (
            <Box
              key={fabric.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                flexShrink: 0,
                width: "330px",
                scrollSnapAlign: "start",
              }}
            >
              {/* Image — 330 × 436, aspect-ratio 165/218 */}
              {fabric.image && (
                <Box
                  sx={{
                    position: "relative",
                    width: "330px",
                    height: "436px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    flexShrink: 0,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                  }}
                >
                  <Image
                    src={fabric.image}
                    alt={fabric.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              )}

              {/* Text */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  width: "100%",
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
                  {fabric.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#9C9C9C",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "19.2px",
                  }}
                >
                  {fabric.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* ── Desktop: 3-column grid ── */}
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            rowGap: "24px",
            columnGap: "24px",
            alignSelf: "stretch",
            gridTemplateRows: "repeat(2, fit-content(100%))",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gridAutoFlow: "row",
          }}
        >
          {FABRICS.map((fabric) => (
            <Box
              key={fabric.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                "& img": {
                  transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                },
                "&:hover img": { transform: "scale(1.1)" },
                "& > div:first-of-type": { transition: "box-shadow 0.3s ease" },
                "&:hover > div:first-of-type": {
                  boxShadow: "0 8px 28px rgba(0,0,0,0.14)",
                },
              }}
            >
              {fabric.image && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "200px",
                    aspectRatio: "50/77",
                    borderRadius: "8px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={fabric.image}
                    alt={fabric.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
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
                  {fabric.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#9C9C9C",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "19.2px",
                    minHeight: "38px",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}
                >
                  {fabric.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
