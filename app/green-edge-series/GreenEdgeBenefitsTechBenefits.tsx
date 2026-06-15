"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const TECH_BENEFITS = [
  {
    num: "1",
    title: "Water Filtration & Reuse System",
    desc: "Saves water while keeping print quality intact.",
  },
  {
    num: "2",
    title: "98% Less Water Use",
    desc: "Drastically reduces water consumption per meter printed.",
  },
  {
    num: "3",
    title: "Demand Printing Line",
    desc: "Print only what's needed, minimizing waste and overstock.",
  },
];

function TechBenefitCard({
  num,
  title,
  desc,
  visible,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  visible: boolean;
  delay: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "8px",
        flex: { md: "1 0 0" },
        width: { xs: "100%", md: "auto" },
        minWidth: 0,
        // scroll-in stagger animation
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {/* Large faded number */}
      <Typography
        sx={{
          color: "#EEEEEE",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "80px", md: "96px" },
          fontWeight: 700,
          lineHeight: 1,
          flexShrink: 0,
          minWidth: { xs: "52px", md: "72px" },
          textAlign: "left",
          userSelect: "none",
        }}
      >
        {num}
      </Typography>

      {/* Title + description */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          flex: 1,
          minWidth: 0,
        }}
      >
        <Typography
          sx={{
            color: "#F6891F",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "20px", md: "24px" },
            fontWeight: 500,
            lineHeight: { xs: "26px", md: "31.2px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default function GreenEdgeBenefitsTechBenefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -160px 0px" },
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
        Technology Benefits:
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          alignSelf: "stretch",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "32px", md: "24px" },
        }}
      >
        {TECH_BENEFITS.map((item, i) => (
          <TechBenefitCard
            key={item.title}
            {...item}
            visible={visible}
            delay={i * 0.28}
          />
        ))}
      </Box>
    </Box>
  );
}
