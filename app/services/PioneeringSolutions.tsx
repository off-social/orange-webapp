"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

const SERVICE_CARDS = [
  {
    title: "Service Turnaround Promise",
    desc: "We aim to resolve service requests fast: 72-hour on-site repairs in most areas and same-day remote support.",
    img: "/Illustration.png",
  },
  {
    title: "Installation & Setup",
    desc: "Every machine includes full professional installation and calibration by our engineers. We ensure your team is up and running with zero hassle and maximum precision.",
    img: "/Installation-Setup.png",
  },
  {
    title: "Breakdown & On-Site Repairs",
    desc: "Unexpected issues? We’ve got you covered. Our trained engineers are deployed from key service hubs to ensure swift on-site support anywhere in India",
    img: "/Breakdown-On-Site-Repairs.png",
  },
  {
    title: "Preventive Maintenance",
    desc: "Regular maintenance means fewer breakdowns and longer machine life. Our team offers scheduled preventive visits to help you avoid costly downtime and maintain consistent output quality.",
    img: "/Preventive-Maintenance.png",
  },
  {
    title: "Remote Troubleshooting",
    desc: "Minor issue or quick fix? Get connected to our technical team via phone, WhatsApp, or video call. Most software and operational queries are resolved remotely within hours.",
    img: "/RemoteTroubleshooting.png",
  },
  {
    title: "Operator Training",
    desc: "New operator? Scaling your team? We offer on-site and virtual training to help your team operate machines efficiently, reduce errors, and follow safety best practices.",
    img: "/OperatorTraining.png",
  },
  {
    title: "Spare Parts & Consumables",
    desc: "We maintain ready stock of critical spares and consumables across our warehouses, ensuring fast dispatch and reduced machine downtime. Print heads | Inks & filters | Control modules | Belt systems and rollers",
    img: "/SpareParts.png",
  },
];

const CARD_WIDTH_MD = 352;
const CARD_WIDTH_XS = 300;
const CARD_GAP = 24;

export default function PioneeringSolutions() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const cardWidth = isMd ? CARD_WIDTH_MD : CARD_WIDTH_XS;
  const cardsPerView = isMd ? 3 : 1;
  const maxIndex = Math.max(SERVICE_CARDS.length - cardsPerView, 0);

  const [current, setCurrent] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const lastWheelTime = useRef(0);

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
    if (diff > 30) handleNext();
    else if (diff < -30) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const onWheel = (e: React.WheelEvent) => {
    const isShift = e.shiftKey && Math.abs(e.deltaY) > 0;
    const isHorizontal =
      !e.shiftKey && Math.abs(e.deltaX) >= Math.abs(e.deltaY);
    if (!isShift && !isHorizontal) return;
    const now = Date.now();
    if (now - lastWheelTime.current < 600) return;
    lastWheelTime.current = now;
    const delta = isShift ? e.deltaY : e.deltaX;
    if (delta > 0) handleNext();
    else if (delta < 0) handlePrev();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: { xs: "40px", md: "64px" },
        alignSelf: "stretch",
        width: "100%",
        boxSizing: "border-box",
        bgcolor: "#F2F2F2",
        py: { xs: "64px", md: "80px" },
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: { xs: "16px", md: "168px" },
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          boxSizing: "border-box",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: { xs: 0, md: "-1px" },
            color: "#333",
          }}
        >
          Pioneering Solutions{" "}
          <Box component="span" sx={{ color: "#707070" }}>
            for
          </Box>
          <Box component="span" sx={{ display: "block" }}>
            Enhanced Your Experience
          </Box>
        </Typography>

        {/* Subtitle row — with arrows on desktop, centered text on mobile */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            width: "100%",
            gap: "24px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", md: "22.4px" },
              color: "#707070",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Engineered for faster, cleaner, and smarter textile printing.
            <br />
            Advanced digital printing, designed for real-world production.
          </Typography>

          {/* Arrows — all breakpoints */}
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <IconButton
              onClick={handlePrev}
              disabled={current === 0}
              sx={{
                width: "40px",
                height: "40px",
                border: "1px solid #E0E0E0",
                bgcolor: "#FFF",
                borderRadius: "50%",
                opacity: current === 0 ? 0.4 : 1,
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              <ChevronLeftIcon sx={{ fontSize: "20px", color: "#333" }} />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={current >= maxIndex}
              sx={{
                width: "40px",
                height: "40px",
                border: "1px solid #E0E0E0",
                bgcolor: "#FFF",
                borderRadius: "50%",
                opacity: current >= maxIndex ? 0.4 : 1,
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              <ChevronRightIcon sx={{ fontSize: "20px", color: "#333" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Carousel — left padding only for peek effect */}
      <Box
        sx={{
          pl: { xs: "16px", md: "168px" },
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onWheel={onWheel}
          sx={{ display: "flex", gap: `${CARD_GAP}px` }}
          style={{
            transform: `translateX(calc(-${current} * (${cardWidth}px + ${CARD_GAP}px)))`,
            transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {SERVICE_CARDS.map((card, i) => (
            <Box
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                width: { xs: `${CARD_WIDTH_XS}px`, md: `${CARD_WIDTH_MD}px` },
                minWidth: {
                  xs: `${CARD_WIDTH_XS}px`,
                  md: `${CARD_WIDTH_MD}px`,
                },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: { xs: "24px 16px 16px", md: "32px 24px 16px" },
                gap: "24px",
                bgcolor: hoveredCard === i ? "#F6891F" : "#FFF",
                borderRadius: { xs: "17px", md: "25px" },
                overflow: "hidden",
                boxSizing: "border-box",
                transition: "background-color 0.25s",
                cursor: "default",
              }}
            >
              {/* Text */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "16px", md: "24px" },
                    fontWeight: 500,
                    lineHeight: { xs: "25.6px", md: "31.2px" },
                    letterSpacing: 0,
                    color: hoveredCard === i ? "#FFF" : "#333",
                    textAlign: "center",
                    transition: "color 0.25s",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "9.41px", md: "13px" },
                    fontWeight: 500,
                    lineHeight: { xs: "15.06px", md: "20.8px" },
                    color:
                      hoveredCard === i ? "rgba(255,255,255,0.85)" : "#707070",
                    textAlign: "center",
                    transition: "color 0.25s",
                  }}
                >
                  {card.desc}
                </Typography>
              </Box>

              {/* Image */}
              <Box
                sx={{
                  width: { xs: "202px", md: "200px" },
                  height: { xs: "202px", md: "200px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={200}
                  height={200}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
