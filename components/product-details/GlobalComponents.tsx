"use client";

import { useProduct } from "@/data/ProductContext";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

function ComponentCard({
  icon,
  title,
  desc,
  fullWidth = false,
  iconSize = 72,
}: {
  icon?: string;
  title: string;
  desc: string;
  fullWidth?: boolean;
  iconSize?: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "16px", md: "24px" },
        flexDirection: "column",
        alignItems: "flex-start",
        gap: { xs: "16px", md: "24px" },
        borderRadius: "16px",
        border: "1px solid #E0E0E0",
        background: "#FFF",
        alignSelf: fullWidth ? "stretch" : "auto",
        flex: fullWidth ? "unset" : "1 0 0",
      }}
    >
      {/* Icon */}
      {icon && (
        <Box>
          <Image
            src={icon}
            alt={title}
            width={iconSize}
            height={iconSize}
            style={{ objectFit: "contain" }}
          />
        </Box>
      )}

      {/* Text */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 600,
            lineHeight: { xs: "22.4px", md: "25.6px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "19.2px",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default function GlobalComponents() {
  const { globalComponents } = useProduct();

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
          alignItems: "flex-start",
          gap: { xs: "48px", md: "64px" },
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
            Premium Global Components
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
            {globalComponents.description}
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignSelf: "stretch",
          }}
        >
          {/* Large card */}
          <ComponentCard
            {...globalComponents.largeCard}
            fullWidth
            iconSize={80}
          />

          {/* 2×2 grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              alignSelf: "stretch",
            }}
          >
            {globalComponents.smallCards.map((card) => (
              <ComponentCard key={card.title} {...card} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
