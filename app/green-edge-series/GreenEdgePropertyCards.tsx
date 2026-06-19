"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const innerPad = { xs: "0", lg: "0 188px" };

const CARDS = [
  {
    img: "/DeepColorIntensity.webp",
    title: "Deep Color Intensity",
    desc: "Rich, vibrant prints that stand out in any application.",
  },
  {
    img: "/BinderTechnology.webp",
    title: "Binder Technology",
    desc: "Strong color bonding & better fabric integration.",
  },
  {
    img: "/PrintVisibility.webp",
    title: "Print Visibility",
    desc: "Results are visible right away for faster production.",
  },
  {
    img: "/PrintSharpness.webp",
    title: "Print Sharpness",
    desc: "Delivers clear, crisp print details.",
  },
  {
    img: "/HighFastness.webp",
    title: "High Fastness",
    desc: "Ensures durability and long-lasting color.",
  },
];

function PropertyCard({
  img,
  title,
  desc,
  fullWidth = false,
  visible,
  delay,
  fromRight = false,
}: {
  img: string;
  title: string;
  desc: string;
  fullWidth?: boolean;
  visible: boolean;
  delay: number;
  fromRight?: boolean;
}) {
  const offset = fromRight ? "60px" : "-60px";
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: fullWidth ? "14px 16px" : "12px", md: "24px" },
        flexDirection: { xs: fullWidth ? "row" : "column", md: "column" },
        alignItems: {
          xs: fullWidth ? "center" : "flex-start",
          md: "flex-start",
        },
        gap: { xs: fullWidth ? "14px" : "6px", md: "16px", lg: "24px" },
        ...(fullWidth
          ? { width: "100%", boxSizing: "border-box" }
          : { flex: "1 0 0", minWidth: 0 }),
        borderRadius: "16px",
        border: "1px solid #E0E0E0",
        background: "#FFF",
        // animation
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${offset})`,
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      <Box
        component="img"
        src={img}
        alt=""
        sx={{
          width: { xs: fullWidth ? "60px" : "52px", md: "83px" },
          height: { xs: fullWidth ? "52px" : "45px", md: "75px" },
          objectFit: "contain",
          flexShrink: 0,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "4px", md: "8px" },
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: fullWidth ? "14px" : "12px", md: "16px" },
            fontWeight: 600,
            lineHeight: { xs: "1.4", md: "25.6px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: fullWidth ? "12px" : "10px", md: "12px" },
            fontWeight: 500,
            lineHeight: { xs: "1.5", md: "19.2px" },
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default function GreenEdgePropertyCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -180px 0px" },
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        padding: innerPad,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        alignSelf: "stretch",
        boxSizing: "border-box",
      }}
    >
      <Typography
        sx={{
          width: "100%",
          color: "#333",
          textAlign: { xs: "center", md: "left" },
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
        }}
      >
        Pigment Inks - Key Physical Properties:
      </Typography>

      {/* Card 1 — full width, from left */}
      <Box sx={{ width: "100%" }}>
        <PropertyCard
          {...CARDS[0]}
          fullWidth
          visible={visible}
          delay={0}
          fromRight={false}
        />
      </Box>

      {/* Cards 2 & 3 — left and right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: { xs: "8px", md: "16px", lg: "24px" },
          width: "100%",
        }}
      >
        <PropertyCard
          {...CARDS[1]}
          visible={visible}
          delay={0.12}
          fromRight={false}
        />
        <PropertyCard
          {...CARDS[2]}
          visible={visible}
          delay={0.22}
          fromRight={true}
        />
      </Box>

      {/* Cards 4 & 5 — left and right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: { xs: "8px", md: "16px", lg: "24px" },
          width: "100%",
        }}
      >
        <PropertyCard
          {...CARDS[3]}
          visible={visible}
          delay={0.12}
          fromRight={false}
        />
        <PropertyCard
          {...CARDS[4]}
          visible={visible}
          delay={0.22}
          fromRight={true}
        />
      </Box>
    </Box>
  );
}
