"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const APPS = [
  { img: "/FashionApparel.webp", label: "Fashion & Apparel" },
  { img: "/HomeFurnishings.webp", label: "Home Furnishings" },
  { img: "/Accessories.webp", label: "Accessories" },
  { img: "/CorporateUniforms1.webp", label: "Corporate & Uniforms" },
];

function AppCard({
  img,
  label,
  visible,
  delay,
}: {
  img: string;
  label: string;
  visible: boolean;
  delay: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        flex: "1 0 0",
        width: { xs: "100%", sm: "auto" },
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(10px)",
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: [
          `opacity 0.6s ease ${delay}s`,
          `filter 0.6s ease ${delay}s`,
          `transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}s`,
        ].join(", "),
      }}
    >
      <Box
        sx={{
          height: { xs: "200px", md: "180px" },
          alignSelf: "stretch",
          background: `url('${img}') transparent center / contain no-repeat`,
        }}
      />
      <Typography
        sx={{
          color: "#333",
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "25.6px",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function GreenEdgeApplications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        gap: "48px",
        alignSelf: "stretch",
      }}
    >
      {/* Label */}
      <Typography
        sx={{
          color: "#707070",
          textAlign: { xs: "center", md: "left" },
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "14px", md: "16px" },
          fontWeight: 400,
          lineHeight: "25.6px",
          letterSpacing: "10px",
          textTransform: "uppercase",
        }}
      >
        Applications
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          gap: { xs: "24px", sm: "16px", md: "24px" },
          alignSelf: "stretch",
        }}
      >
        {APPS.map(({ img, label }, i) => (
          <AppCard
            key={label}
            img={img}
            label={label}
            visible={visible}
            delay={i * 0.12}
          />
        ))}
      </Box>
    </Box>
  );
}
