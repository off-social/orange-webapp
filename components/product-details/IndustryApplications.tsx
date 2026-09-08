"use client";

import { useProduct } from "@/data/ProductContext";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

/**
 * Second application block, rendered below the "Ideal Applications" cards on
 * products that define `idealFor.industryApplications`. Card and image sizing
 * deliberately mirrors the fabric cards above so the two blocks read as one
 * section.
 */
export default function IndustryApplications() {
  const { idealFor } = useProduct();
  const block = idealFor.industryApplications;

  if (!block || block.items.length === 0) return null;

  const ITEMS = block.items;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "40px", md: "64px" },
        width: "100%",
      }}
    >
      {/* Heading + optional description */}
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
          component="h3"
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: { xs: "0", md: "-1px" },
            m: 0,
          }}
        >
          {block.title ?? "Industry Application"}
        </Typography>
        {block.description && (
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
            {block.description}
          </Typography>
        )}
      </Box>

      {/* ── Phone: vertical stack ── */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          gap: "16px",
          width: "100%",
        }}
      >
        {ITEMS.map((item) => (
          <Box
            key={item.title}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              width: "100%",
            }}
          >
            {item.image && (
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "330/436",
                  borderRadius: "12px",
                  overflow: "hidden",
                  flexShrink: 0,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
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
                {item.title}
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
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ── Tablet & Desktop: same 2/3-col grid and 200px portrait images as
           the fabric cards above ── */}
      <Box
        sx={{
          display: { xs: "none", sm: "grid" },
          rowGap: "24px",
          columnGap: "24px",
          alignSelf: "stretch",
          gridTemplateColumns: {
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gridAutoFlow: "row",
          justifyContent: "center",
        }}
      >
        {ITEMS.map((item) => (
          <Box
            key={item.title}
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
            {item.image && (
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
                  src={item.image}
                  alt={item.title}
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
                {item.title}
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
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
