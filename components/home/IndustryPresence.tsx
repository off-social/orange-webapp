"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TabKey =
  | "Upcoming Exhibition"
  | "Past Events Gallery"
  | "Booth Highlights"
  | "Media Coverage";

const data: Record<TabKey, { title: string; subtitle: string; img: string }[]> =
  {
    "Upcoming Exhibition": [
      {
        title: "Orange O Tec at Gartex India 2025",
        subtitle: "5th ITMACH India Helipad Exhibition Centre, Gandhinagar",
        img: "/img1.png",
      },
      {
        title: "Orange O Tec at Gartex India 2025",
        subtitle: "5th ITMACH India Helipad Exhibition Centre, Gandhinagar",
        img: "/img1.png",
      },
      {
        title: "Orange O Tec at Gartex India 2025",
        subtitle: "5th ITMACH India Helipad Exhibition Centre, Gandhinagar",
        img: "/img1.png",
      },
      {
        title: "Orange O Tec at Gartex India 2025",
        subtitle: "5th ITMACH India Helipad Exhibition Centre, Gandhinagar",
        img: "/img1.png",
      },
    ],
    "Past Events Gallery": [
      { title: "Past Event 1", subtitle: "Location here", img: "/img1.png" },
      { title: "Past Event 2", subtitle: "Location here", img: "/img1.png" },
      { title: "Past Event 3", subtitle: "Location here", img: "/img1.png" },
    ],
    "Booth Highlights": [
      {
        title: "Booth Highlight 1",
        subtitle: "Location here",
        img: "/img1.png",
      },
      {
        title: "Booth Highlight 2",
        subtitle: "Location here",
        img: "/img1.png",
      },
    ],
    "Media Coverage": [
      {
        title: "Media Coverage 1",
        subtitle: "Location here",
        img: "/media1.png",
      },
      {
        title: "Media Coverage 2",
        subtitle: "Location here",
        img: "/media2.png",
      },
    ],
  };

const GAP = 24;

const IndustryPresence = () => {
  const [active, setActive] = useState<TabKey>("Upcoming Exhibition");
  const [current, setCurrent] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const CARDS_PER_VIEW = isMobile ? 1 : isTablet ? 2 : 3;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const peekWidth = isMobile ? 32 : 0;
  const cardWidth = containerWidth > 0
    ? (containerWidth - GAP * (CARDS_PER_VIEW - 1) - peekWidth) / CARDS_PER_VIEW
    : 380;

  const cards = data[active];
  const maxIndex = Math.max(cards.length - CARDS_PER_VIEW, 0);

  const handleTabChange = (tab: TabKey) => {
    setActive(tab);
    setCurrent(0);
  };

  const handlePrev = () => setCurrent((c) => Math.max(c - 1, 0));
  const handleNext = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "80px 168px" },
        flexDirection: "column",
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: "40px", md: "64px" },
        alignSelf: "stretch",
        bgcolor: "#F2F2F2",
      }}
    >
      {/* Title + subtitle */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "center" },
          gap: "8px",
          textAlign: { xs: "left", md: "center" },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: { xs: 0, md: "-1px" },
          }}
        >
          Events &amp; Industry Presence
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: 400,
            lineHeight: { xs: "19.2px", md: "25.6px" },
            maxWidth: { xs: "100%", md: "560px" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Ut massa blandit pretium velit
          ullamcorper. Eleifend duis donec cras quam ipsum auctor ut semper in.
        </Typography>
      </Box>

      {/* Tabs */}
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          flexWrap: { xs: "nowrap", md: "wrap" },
          justifyContent: "center",
          overflowX: { xs: "auto", md: "visible" },
          width: "100%",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {(Object.keys(data) as TabKey[]).map((tab) => (
          <Button
            key={tab}
            onClick={() => handleTabChange(tab)}
            sx={{
              display: "flex",
              padding: "8px 20px",
              alignItems: "center",
              gap: "16px",
              borderRadius: "32px",
              bgcolor: active === tab ? "#111" : "#FFF",
              color: active === tab ? "#FFF" : "#333",
              border: active === tab ? "1px solid #111" : "1px solid #E0E0E0",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              whiteSpace: "nowrap",
              flexShrink: 0,
              "&:hover": {
                bgcolor: active === tab ? "#333" : "#f5f5f5",
              },
            }}
          >
            {tab}
          </Button>
        ))}
      </Box>

      {/* Carousel */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        {/* Left arrow */}
        <IconButton
          onClick={handlePrev}
          disabled={current === 0}
          sx={{
            position: "absolute",
            left: { xs: 0, md: "-28px" },
            top: "40%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "#FFF",
            border: "1px solid #E0E0E0",
            width: "48px",
            height: "48px",
            opacity: current === 0 ? 0.3 : 1,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box ref={containerRef} sx={{ overflow: "hidden" }}>
          <Box
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            sx={{
              display: "flex",
              gap: `${GAP}px`,
              transform: `translateX(calc(-${current} * (${cardWidth}px + ${GAP}px)))`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {cards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  width: `${cardWidth}px`,
                  minWidth: `${cardWidth}px`,
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "16px",
                  flex: "1 0 0",
                }}
              >
                {/* Card — image only */}
                <Box
                  sx={{
                    height: "264px",
                    alignSelf: "stretch",
                    aspectRatio: "352 / 264.17",
                    position: "relative",
                    borderRadius: "8px",
                    overflow: "hidden",
                    bgcolor: "lightgray",
                  }}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </Box>

                {/* Content — outside card */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <Typography
                    sx={{
                      color: "#111",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "24px",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#707070",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: "20px",
                    }}
                  >
                    {card.subtitle}
                  </Typography>
                  <Button
                    variant="outlined"
                    endIcon={
                      <ArrowForwardIcon sx={{ fontSize: "14px !important" }} />
                    }
                    sx={{
                      alignSelf: "flex-start",
                      textTransform: "none",
                      color: "#111",
                      bgcolor: "#FFF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      px: "14px",
                      py: "6px",
                      mt: "4px",
                      borderRadius: "8px",
                      borderColor: "#E0E0E0",
                      boxShadow: "none",
                      "&:hover": {
                        bgcolor: "#FFF",
                        color: "#F6891F",
                        borderColor: "#F6891F",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Know more
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right arrow */}
        <IconButton
          onClick={handleNext}
          disabled={current >= maxIndex}
          sx={{
            position: "absolute",
            right: { xs: 0, md: "-28px" },
            top: "40%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "#FFF",
            border: "1px solid #E0E0E0",
            width: "48px",
            height: "48px",
            opacity: current >= maxIndex ? 0.3 : 1,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Dot indicators */}
      {cards.length > CARDS_PER_VIEW && (
        <Box sx={{ display: "flex", gap: "6px", justifyContent: "center", width: "100%" }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrent(i)}
              sx={{
                width: current === i ? "24px" : "8px",
                height: "8px",
                borderRadius: "8px",
                bgcolor: current === i ? "#111" : "#D9D9D9",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      )}

      {/* Book a Demo button */}
      <Button
        variant="contained"
        startIcon={<CalendarTodayOutlinedIcon sx={{ fontSize: "16px !important" }} />}
        endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
        sx={{
          bgcolor: "#111",
          color: "#FFF",
          borderRadius: "8px",
          textTransform: "none",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          lineHeight: "20.8px",
          padding: "16px",
          gap: "8px",
          alignSelf: "center",
          width: { xs: "100%", md: "auto" },
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "none",
          "&:hover": { bgcolor: "#333", boxShadow: "none" },
        }}
      >
        Book a Demo at Event
      </Button>
    </Box>
  );
};

export default IndustryPresence;
