"use client";

import { useProduct } from "@/data/ProductContext";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function FeaturesV1() {
  const { features } = useProduct();
  const FEATURES = features.items;

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
          Engineering Features
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
          {features.description}
        </Typography>
      </Box>

      {/* Cards — vertical stack */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        }}
      >
        {FEATURES.map((feature) => (
          <Box
            key={feature.title}
            sx={{
              display: "flex",
              width: "100%",
              padding: "24px",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              borderRadius: "16px",
              border: "1px solid #E0E0E0",
              background: "#FFF",
            }}
          >
            {feature.icon && (
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
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                />
              </Box>
            )}
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
  );
}
