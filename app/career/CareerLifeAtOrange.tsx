"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

const photos = [
  "/life1.webp",
  "/life4.webp",
  "/life2.webp",
  "/life5.webp",
  "/life3.webp",
  "/life6.webp",
  "/life7.webp",
];

const CARD_W_DESKTOP = 446;
const CARD_W_MOBILE = 330;
const CARD_GAP = 16;

export default function CareerLifeAtOrange() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left:
        dir === "next"
          ? CARD_W_DESKTOP + CARD_GAP
          : -(CARD_W_DESKTOP + CARD_GAP),
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = CARD_W_MOBILE + CARD_GAP;
    const index = Math.min(
      Math.round(el.scrollLeft / cardWidth),
      photos.length - 1,
    );
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "48px 0px", sm: "64px 0px", md: "80px 0px" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: { xs: "40px", md: "64px" },
        alignSelf: "stretch",
        bgcolor: "#F2F2F2",
        overflow: "hidden",
      }}
    >
      {/* Header row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          alignSelf: "stretch",
          px: { xs: "16px", sm: "40px", md: "80px", lg: "168px", xl: "263px" },
        }}
      >
        {/* Left: heading + desc */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            flex: 1,
            maxWidth: { md: "460px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "52px" },
              letterSpacing: { xs: 0, md: "-1px" },
            }}
          >
            <Box component="span" sx={{ color: "#333" }}>
              Life at{" "}
            </Box>
            <Box component="span" sx={{ color: "#F6891F" }}>
              Orange O Tec
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", md: "22.4px" },
              maxWidth: "420px",
            }}
          >
            Life in pictures, moments that matters. From milestones and
            celebrations to offsites and installs, here&apos;s a glimpse into
            the energy behind our machines.
          </Typography>
        </Box>

        {/* Nav arrows — desktop only */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <IconButton
            onClick={() => scroll("prev")}
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #E0E0E0",
              bgcolor: "#FFF",
              borderRadius: "50%",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "18px", color: "#333" }} />
          </IconButton>
          <IconButton
            onClick={() => scroll("next")}
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #E0E0E0",
              bgcolor: "#FFF",
              borderRadius: "50%",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: "18px", color: "#333" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Photo strip */}
      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        sx={{
          display: "flex",
          gap: `${CARD_GAP}px`,
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          alignSelf: "stretch",
          pl: { xs: "24px", sm: "40px", md: "80px", lg: "168px", xl: "263px" },
          scrollSnapType: { xs: "x mandatory", sm: "none" },
        }}
      >
        {photos.map((src, i) => (
          <Box
            key={i}
            sx={{
              flexShrink: 0,
              width: { xs: `${CARD_W_MOBILE}px`, md: `${CARD_W_DESKTOP}px` },
              height: { xs: "249px", md: "336px" },
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              scrollSnapAlign: { xs: "start", sm: "none" },
            }}
          >
            <Image
              src={src}
              alt={`Life at Orange O Tec ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
        <Box
          sx={{
            flexShrink: 0,
            width: {
              xs: "16px",
              sm: "40px",
              md: "80px",
              lg: "168px",
              xl: "263px",
            },
          }}
        />
      </Box>

      {/* Dots — mobile only */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
          alignSelf: "stretch",
        }}
      >
        {photos.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: activeIndex === i ? "20px" : "8px",
              height: "8px",
              borderRadius: "4px",
              bgcolor: activeIndex === i ? "#111" : "#E0E0E0",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
