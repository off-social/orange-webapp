"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

// Each word tagged with its final color
const SEGMENTS = [
  {
    text: "Digital pigment ink uses ultra-fine color pigments and advanced binders to print directly",
    color: "#F6891F",
  },
  {
    text: "onto fabric surfaces. Unlike traditional textile printing methods, it minimizes processing steps while maintaining excellent color vibrancy and durability.",
    color: "#333",
  },
];

const WORDS = SEGMENTS.flatMap(({ text, color }) =>
  text.split(" ").map((word) => ({ word, color })),
);

export default function GreenEdgeWhatIsIt() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when section top hits 80% of viewport, 1 when scrolled past section
      const scrolled = vh * 0.8 - rect.top;
      const total = vh * 0.55;
      setProgress(Math.min(1, Math.max(0, scrolled / total)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const total = WORDS.length;

  return (
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        gap: "16px",
      }}
    >
      {/* Subtitle */}
      <Typography
        sx={{
          color: "#707070",
          fontFamily: "Inter, sans-serif",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "26px",
          width: { md: "540px" },
        }}
      >
        What is Digital Textile Pigment Ink?
      </Typography>

      {/* Animated paragraph */}
      <Typography
        component="p"
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "18px", md: "24px" },
          fontWeight: 500,
          lineHeight: { xs: "25.2px", md: "31.2px" },
          m: 0,
          width: { md: "540px" },
        }}
      >
        {WORDS.map(({ word, color }, i) => {
          const threshold = i / total;
          const lit = progress > threshold;
          return (
            <Box
              key={i}
              component="span"
              sx={{
                color: lit ? color : "#DDDDDD",
                transition: "color 0.25s ease",
                fontFamily: "inherit",
                fontSize: "inherit",
                fontWeight: "inherit",
                lineHeight: "inherit",
              }}
            >
              {word}{" "}
            </Box>
          );
        })}
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src="/DigitalPigmentInk.webp"
        alt="Digital Pigment Ink printing machine"
        sx={{
          display: "block",
          alignSelf: "flex-end",
          width: { xs: "100%", md: "822px" },
          height: "auto",
          aspectRatio: "185/88",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}
