"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
import { useRef, useState } from "react";

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

const CARD_WIDTH = 380;
const GAP = 24;

const IndustryPresence = () => {
  const [active, setActive] = useState<TabKey>("Upcoming Exhibition");
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const CARDS_PER_VIEW = isMobile ? 1 : isTablet ? 2 : 3;

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
        padding: { xs: "48px 24px", md: "80px 168px" },
        flexDirection: "column",
        alignItems: "center",
        gap: "64px",
        alignSelf: "stretch",
        bgcolor: "#F5F5F5",
      }}
    >
      {/* Title + subtitle */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "36px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          Events &amp; Industry Presence
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "25.6px",
            maxWidth: "560px",
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
              padding: "10px 20px",
              alignItems: "center",
              borderRadius: "100px",
              bgcolor: active === tab ? "#111" : "#FFF",
              color: active === tab ? "#FFF" : "#333",
              border: active === tab ? "1px solid #111" : "1px solid #E0E0E0",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
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

        <Box sx={{ overflow: "hidden" }}>
          <Box
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            sx={{
              display: "flex",
              gap: `${GAP}px`,
              transform: `translateX(calc(-${current} * (${CARD_WIDTH}px + ${GAP}px)))`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {cards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "76vw", md: `${CARD_WIDTH}px` },
                  minWidth: { xs: "76vw", md: `${CARD_WIDTH}px` },
                  flexShrink: 0,
                  bgcolor: "#FFF",
                  borderRadius: "12px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                }}
              >
                {/* Card image */}
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "16/9",
                    position: "relative",
                    bgcolor: "#D9D9D9",
                  }}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Card content */}
                <Box
                  sx={{
                    p: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
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
                    endIcon={
                      <ArrowForwardIcon sx={{ fontSize: "14px !important" }} />
                    }
                    sx={{
                      alignSelf: "flex-start",
                      textTransform: "none",
                      color: "#111",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      p: 0,
                      mt: "4px",
                      minWidth: 0,
                      "&:hover": { bgcolor: "transparent", color: "#F6891F" },
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
        <Box sx={{ display: "flex", gap: "6px", mt: "-40px" }}>
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
        endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
        sx={{
          bgcolor: "#111",
          color: "#FFF",
          borderRadius: "100px",
          textTransform: "none",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          px: "28px",
          py: "14px",
          boxShadow: "none",
          mt: "-40px",
          "&:hover": { bgcolor: "#333", boxShadow: "none" },
        }}
      >
        Book a Demo at Event
      </Button>
    </Box>
  );
};

export default IndustryPresence;
