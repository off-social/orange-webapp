"use client";

import { useProduct } from "@/data/ProductContext";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Features() {
  const { features } = useProduct();
  const FEATURES = features.items;

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
          gap: { xs: "40px", md: "40px" },
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
            {features.description}
          </Typography>
        </Box>

        {/* Cards — Phone: vertical stack */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
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

        {/* Cards — Tablet & Desktop: 2-column grid */}
        <Box
          sx={{
            display: { xs: "none", sm: "grid" },
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
                minHeight: "228px",
                padding: "24px",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                borderRadius: "16px",
                border: "1px solid #E0E0E0",
                background: "#FFF",
                cursor: "pointer",
                transition:
                  "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
                },
              }}
            >
              {feature.icon && (
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
    </Box>
  );
}
