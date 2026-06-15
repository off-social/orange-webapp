"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const SEGMENTS = [
  { text: "Orange O Tec", color: "#F6891F" },
  {
    text: "is a leading provider of digital textile printing solutions, helping businesses transition toward faster, smarter, and more sustainable production. With deep industry expertise and a commitment to innovation, we deliver advanced printing technologies designed to improve efficiency, reduce environmental impact, and drive long-term growth.",
    color: "#FFF",
  },
];

const WORDS = SEGMENTS.flatMap(({ text, color }) =>
  text.split(" ").map((word) => ({ word, color }))
);

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
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
      sx={{
        display: "flex",
        padding: { xs: "48px 16px", sm: "64px 40px", md: "80px 80px", lg: "80px 263px", xl: "100px 400px" },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "32px", md: "48px" },
        alignSelf: "stretch",
        bgcolor: "#111",
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
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px", xl: "52px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px", xl: "67.6px" },
            letterSpacing: { xs: 0, md: "-1px", xl: "-1.5px" },
          }}
        >
          Who We Are
        </Typography>

        <Typography
          sx={{
            color: "#999",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px", xl: "16px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px", xl: "25.6px" },
          }}
        >
          Pioneering the future of digital textile printing with innovation,
          precision, and excellence.
        </Typography>
      </Box>

      {/* Animated body paragraph */}
      <Typography
        ref={sectionRef}
        component="p"
        sx={{
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "20px", md: "24px", xl: "28px" },
          fontWeight: 500,
          lineHeight: { xs: "32px", md: "41.6px", xl: "48px" },
          letterSpacing: 0,
          maxWidth: { xs: "860px", xl: "1100px" },
          m: 0,
        }}
      >
        {WORDS.map(({ word, color }, i) => {
          const lit = progress > i / total;
          return (
            <Box
              key={i}
              component="span"
              sx={{
                color: lit ? color : "#444",
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
    </Box>
  );
}
