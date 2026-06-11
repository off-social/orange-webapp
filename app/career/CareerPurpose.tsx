"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const cards = [
  {
    title: "Make in India.\nCompete globally",
    desc: "World-class textile tech built from Gujarat.",
    img: "/MakeInIndia.png",
  },
  {
    title: "Autonomy from\nday one",
    desc: "Your ideas matter. Your work shapes real outcomes.",
    img: "/AutoFrom.png",
  },
  {
    title: "Growth-minded\nculture",
    desc: "Cross-functional learning and fast career progression.",
    img: "/Growth-minded.png",
  },
  {
    title: "Meaningful\nwork",
    desc: "Supporting sustainability and the future of manufacturing.",
    img: "/MeaningFul.png",
  },
];

export default function CareerPurpose() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "64px 16px",
          sm: "64px 40px",
          md: "80px 80px",
          lg: "80px 168px",
          xl: "80px 263px",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "40px", md: "65px" },
        alignSelf: "stretch",
        bgcolor: "#FFF",
      }}
    >
      {/* Header */}
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
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: { xs: 0, md: "-1px" },
          }}
        >
          A Career with Purpose
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
          Fast-growing. People-first. Global ambition, rooted in India.
        </Typography>
      </Box>

      {/* 2×2 Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: "24px",
          width: "100%",
        }}
      >
        {cards.map((card) => (
          <Box
            key={card.title}
            sx={{
              display: "flex",
              padding: { xs: "24px 16px", md: "32px 24px" },
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: "24px", md: "16px" },
              alignSelf: "stretch",
              borderRadius: { xs: "16px", md: "20px" },
              border: "1px solid #E0E0E0",
              bgcolor: "#FFF",
              overflow: "hidden",
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                color: "#111",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 500,
                lineHeight: { xs: "26px", md: "31.2px" },
                letterSpacing: 0,
                whiteSpace: "pre-line",
              }}
            >
              {card.title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#707070",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 500,
                lineHeight: { xs: "19.2px", md: "22.4px" },
              }}
            >
              {card.desc}
            </Typography>

            {/* Image */}
            <Box
              sx={{
                alignSelf: "stretch",
                height: { xs: "188px", md: "227px" },
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                bgcolor: "#F5F5F5",
              }}
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
