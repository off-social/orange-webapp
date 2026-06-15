"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "98%", label: "Less Water Used Per Meter" },
  { value: "0", label: "Steam and Wash Process" },
  { value: "Low", label: "VOC Emissions and Minimal Effluent" },
  { value: "Eco", label: "Green Manufacturing Goals" },
];

function StatItem({
  value,
  label,
  visible,
  delay,
}: {
  value: string;
  label: string;
  visible: boolean;
  delay: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        gap: "8px",
        width: { xs: "100%", md: "212px" },
        flex: { md: "none" },
        minWidth: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      <Typography
        sx={{
          color: "#E0E0E0",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "80px", md: "64px" },
          fontWeight: 700,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          color: "#333",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "13px", md: "16px" },
          fontWeight: 500,
          lineHeight: { xs: "20.8px", md: "25.6px" },
          maxWidth: "163px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function GreenEdgeBenefitsSustainabilityImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        padding: 0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        alignSelf: "stretch",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Label */}
      <Typography
        sx={{
          color: "#333",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          alignSelf: "stretch",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Sustainability Impact:
      </Typography>

      {/* Stats — slide in one by one */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "space-between" },
          alignItems: { xs: "center", md: "center" },
          alignSelf: "stretch",
          gap: { xs: "32px", md: "0" },
        }}
      >
        {STATS.map((item, i) => (
          <StatItem
            key={item.value}
            {...item}
            visible={visible}
            delay={i * 0.15}
          />
        ))}
      </Box>
    </Box>
  );
}
