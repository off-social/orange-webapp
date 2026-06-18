"use client";

import { useProduct } from "@/data/ProductContext";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function IdealForV1() {
  const { idealFor } = useProduct();
  const FABRICS = idealFor.fabrics;

  return (
    <Box
      sx={{
        display: "flex",
        padding: "64px 16px",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        background: "#FFF",
        gap: "40px",
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
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "31.2px",
          }}
        >
          Ideal Applications
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
          {idealFor.description}
        </Typography>
      </Box>

      {/* Cards — vertical stack */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
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
              width: "100%",
            }}
          >
            {fabric.image && (
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
    </Box>
  );
}
