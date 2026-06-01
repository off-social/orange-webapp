"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";

type TabKey =
  | "Upcoming exhibitions"
  | "Past events gallery"
  | "Booth highlights"
  | "Media coverage";

const IndustryPresence = () => {
  const [active, setActive] = useState<TabKey>("Upcoming exhibitions");
  const [current, setCurrent] = useState(0);

  // Touch swipe state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const MIN_SWIPE = 50;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const CARDS_PER_VIEW = isMobile ? 1 : isTablet ? 2 : 3;
  const CARD_WIDTH = 316;
  const GAP = 24;

  const data: Record<
    TabKey,
    { title: string; subtitle: string; img: string }[]
  > = {
    "Upcoming exhibitions": [
      {
        title: "India 2025",
        subtitle: "5th IIMACH India, Harsco Exhibition Centre, Gandhinagar",
        img: "/img1.png",
      },
      {
        title: "Orange O Tec at Garfab-ITX 2025",
        subtitle: "5th IIMACH India, Harsco Exhibition Centre, Gandhinagar",
        img: "/img1.png",
      },
      {
        title: "Orange O Tec at ITMACH India 2025",
        subtitle: "5th IIMACH India, Harsco Exhibition Centre, Gandhinagar",
        img: "/event3.png",
      },
      {
        title: "Orange O Tec at Extra Event 2025",
        subtitle: "5th IIMACH India, Harsco Exhibition Centre, Gandhinagar",
        img: "/event4.png",
      },
    ],
    "Past events gallery": [
      { title: "Past Event 1", subtitle: "Location here", img: "/past1.png" },
      { title: "Past Event 2", subtitle: "Location here", img: "/past2.png" },
      { title: "Past Event 3", subtitle: "Location here", img: "/past3.png" },
    ],
    "Booth highlights": [
      {
        title: "Booth Highlight 1",
        subtitle: "Location here",
        img: "/booth1.png",
      },
      {
        title: "Booth Highlight 2",
        subtitle: "Location here",
        img: "/booth2.png",
      },
    ],
    "Media coverage": [
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

  const cards = data[active];
  const maxIndex = Math.max(cards.length - CARDS_PER_VIEW, 0);
  const canPrev = current > 0;
  const canNext = current < maxIndex;

  const handleTabChange = (tab: TabKey) => {
    setActive(tab);
    setCurrent(0);
  };

  const handlePrev = () => setCurrent((c) => Math.max(c - 1, 0));
  const handleNext = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  // Touch handlers
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
    if (diff > MIN_SWIPE) handleNext();
    else if (diff < -MIN_SWIPE) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const MOBILE_CARD_VW = 80;
  const MOBILE_PEEK_VW = 6;
  const MOBILE_GAP_PX = 12;

  const CardContent = ({
    card,
    index,
    isMob,
  }: {
    card: { title: string; subtitle: string; img: string };
    index: number;
    isMob: boolean;
  }) => (
    <Box
      key={`${active}-${index}`}
      sx={{
        width: isMob ? `${MOBILE_CARD_VW}vw` : `${CARD_WIDTH}px`,
        minWidth: isMob ? `${MOBILE_CARD_VW}vw` : `${CARD_WIDTH}px`,
        flexShrink: 0,
        bgcolor: "#D9D9D9",
        borderRadius: "12px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        ...(isMob && {
          opacity: index === current ? 1 : 0.5,
          transform: index === current ? "scale(1)" : "scale(0.96)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }),
      }}
    >
      <Box
        sx={{
          width: "100%",
          aspectRatio: "4/3",
          borderRadius: "8px",
          overflow: "hidden",
          bgcolor: "#ddd",
        }}
      >
        <img
          src={card.img}
          alt={card.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      <Typography
        sx={{
          mt: 2,
          fontWeight: 600,
          fontSize: isMob ? "15px" : "16px",
          lineHeight: 1.4,
        }}
      >
        {card.title}
      </Typography>

      <Typography
        sx={{
          mt: 0.5,
          fontSize: isMob ? "12px" : "13px",
          color: "rgba(0,0,0,0.45)",
          lineHeight: 1.5,
        }}
      >
        {card.subtitle}
      </Typography>

      <Box sx={{ mt: "auto", pt: 2 }}>
        <Button
          size="small"
          sx={{
            border: "1px solid rgba(0,0,0,0.3)",
            borderRadius: "20px",
            color: "#000",
            textTransform: "none",
            fontSize: isMob ? "12px" : "13px",
            px: isMob ? 2 : 2.5,
            bgcolor: "#FFF",
            "&:hover": { bgcolor: "rgba(0,0,0,0.04)", borderColor: "#000" },
          }}
        >
          Know More
        </Button>
      </Box>
    </Box>
  );

  return (
    <Grid size={12} sx={{ pt: 8 }}>
      {/* HEADING */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "26px", sm: "32px", md: "40px" },
          fontWeight: 500,
          px: 2,
        }}
      >
        Events & Industry Presence
      </Typography>

      {/* TABS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 1, sm: 2 },
          mt: 4,
          flexWrap: "wrap",
          px: 2,
        }}
      >
        {(Object.keys(data) as TabKey[]).map((tab) => (
          <Button
            key={tab}
            onClick={() => handleTabChange(tab)}
            sx={{
              border:
                active === tab
                  ? "1px solid #F6891F"
                  : "1px solid rgba(0,0,0,0.2)",
              color: active === tab ? "#F6891F" : "#000",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: active === tab ? 600 : 400,
              fontSize: { xs: "12px", sm: "14px" },
              px: { xs: 1.5, sm: 2 },
            }}
          >
            {tab}
          </Button>
        ))}
      </Box>

      {/* CAROUSEL WRAPPER */}
      <Box
        sx={{
          position: "relative",
          mt: 5,
          mx: "auto",
          maxWidth: isMobile
            ? "100%"
            : `${CARDS_PER_VIEW * CARD_WIDTH + (CARDS_PER_VIEW - 1) * GAP}px`,
        }}
      >
        {/* LEFT ARROW */}
        {cards.length > CARDS_PER_VIEW && (
          <IconButton
            onClick={handlePrev}
            disabled={!canPrev}
            sx={{
              position: "absolute",
              left: { xs: 4, sm: -24 },
              top: "45%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "#fff",
              border: "1px solid rgba(0,0,0,0.15)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              opacity: canPrev ? 1 : 0.3,
              transition: "opacity 0.2s",
              width: { xs: 32, sm: 40 },
              height: { xs: 32, sm: 40 },
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: { xs: 18, sm: 24 } }} />
          </IconButton>
        )}

        {/* MOBILE PEEK CAROUSEL */}
        {isMobile ? (
          <Box sx={{ overflow: "hidden", px: `${MOBILE_PEEK_VW}vw` }}>
            <Box
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              sx={{
                display: "flex",
                gap: `${MOBILE_GAP_PX}px`,
                transform: `translateX(calc(-${current} * (${MOBILE_CARD_VW}vw + ${MOBILE_GAP_PX}px)))`,
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
            >
              {cards.map((card, index) => (
                <CardContent
                  key={index}
                  card={card}
                  index={index}
                  isMob={true}
                />
              ))}
            </Box>
          </Box>
        ) : (
          /* DESKTOP CAROUSEL */
          <Box sx={{ overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                gap: `${GAP}px`,
                transform: `translateX(calc(-${current} * (${CARD_WIDTH}px + ${GAP}px)))`,
                transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
            >
              {cards.map((card, index) => (
                <CardContent
                  key={index}
                  card={card}
                  index={index}
                  isMob={false}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* RIGHT ARROW */}
        {cards.length > CARDS_PER_VIEW && (
          <IconButton
            onClick={handleNext}
            disabled={!canNext}
            sx={{
              position: "absolute",
              right: { xs: 4, sm: -24 },
              top: "45%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "#fff",
              border: "1px solid rgba(0,0,0,0.15)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              opacity: canNext ? 1 : 0.3,
              transition: "opacity 0.2s",
              width: { xs: 32, sm: 40 },
              height: { xs: 32, sm: 40 },
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ChevronRightIcon sx={{ fontSize: { xs: 18, sm: 24 } }} />
          </IconButton>
        )}
      </Box>

      {/* Dot Indicators */}
      {cards.length > CARDS_PER_VIEW && (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrent(i)}
              sx={{
                width: current === i ? 20 : 8,
                height: 8,
                borderRadius: "4px",
                bgcolor: current === i ? "#F6891F" : "rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      )}

      {/* Book Demo Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Button
          variant="outlined"
          sx={{
            color: "#FFF",
            bgcolor: "#000",
            borderColor: "#000",
            borderRadius: "19.58px",
            textTransform: "none",
            mb: 8,
            fontSize: { xs: "12px", md: "14px" },
          }}
        >
          Book a demo at event
        </Button>
      </Box>
    </Grid>
  );
};

export default IndustryPresence;
