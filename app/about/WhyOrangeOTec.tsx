"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const cards = [
  {
    icon: <Image src="/InnovationFirst.svg" alt="Innovation First" width={64} height={64} style={{ width: "64px", height: "64px", aspectRatio: "1/1" }} />,
    title: "Innovation First",
    desc: "We continuously invest in cutting-edge technology to enhance our product offerings and ensure our customers stay ahead in a rapidly evolving industry.",
  },
  {
    icon: <Image src="/Energy-efficient-design.svg" alt="Energy Efficient Design" width={64} height={64} style={{ width: "64px", height: "64px", aspectRatio: "1/1" }} />,
    title: "Sustainable Practices",
    desc: "Our printers are engineered for eco-friendly production, reducing waste and minimizing environmental impact without compromising performance.",
  },
  {
    icon: <Image src="/Customer-CentricApproach.svg" alt="Customer-Centric Approach" width={64} height={64} style={{ width: "64px", height: "64px", aspectRatio: "1/1" }} />,
    title: "Customer-Centric Approach",
    desc: "From consultation to installation and after-sales support, we work closely with our customers to maximize productivity and long-term success.",
  },
];

export default function WhyOrangeOTec() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "48px 16px", sm: "64px 40px", md: "80px 80px", lg: "80px 168px", xl: "100px 263px" },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "48px", md: "64px" },
        alignSelf: "stretch",
        bgcolor: "#FFF",
      }}
    >
      {/* Heading group */}
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
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 400,
            lineHeight: "25.6px",
            letterSpacing: "10px",
            textTransform: "uppercase",
          }}
        >
          Why Orange O Tec
        </Typography>

        <Typography
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "20px", md: "26px", lg: "32px", xl: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "26px", md: "36px", lg: "41.6px", xl: "52px" },
            letterSpacing: { xs: 0, md: "-1px" },
            maxWidth: { xs: "920px", xl: "1100px" },
          }}
        >
          <Box component="span" sx={{ color: "#F6891F" }}>
            At Orange O Tec,
          </Box>{" "}
          we combine technology, expertise, and customer-focused support to create solutions that help textile businesses succeed.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: "16px", md: "24px" },
          width: "100%",
        }}
      >
        {cards.map((card) => (
          <Box
            key={card.title}
            sx={{
              display: "flex",
              padding: "24px",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              gridRow: "span 1",
              gridColumn: "span 1",
              justifySelf: "stretch",
              alignSelf: "stretch",
              textAlign: "center",
              borderRadius: { xs: "16px", md: 0 },
              bgcolor: { xs: "#FFF", md: "transparent" },
              boxShadow: { xs: "0px 2px 12px rgba(0,0,0,0.06)", md: "none" },
            }}
          >
            {card.icon}
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
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "16px", xl: "18px" },
                  fontWeight: { xs: 600, md: 500 },
                  lineHeight: { xs: "25.6px", xl: "28.8px" },
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "12px", md: "13px", xl: "15px" },
                  fontWeight: 500,
                  lineHeight: { xs: "19.2px", md: "20.8px", xl: "24px" },
                  maxWidth: { xs: "280px", xl: "380px" },
                }}
              >
                {card.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
