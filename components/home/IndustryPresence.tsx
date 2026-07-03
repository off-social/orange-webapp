"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  DEFAULT_COVER_IMAGE,
  type BlogPostListItem,
} from "@/data/blog.types";
import { formatBlogDate } from "@/lib/sanity/format";
import { getCoverImageAlt, getCoverImageUrl } from "@/lib/sanity/image";

const GAP = 24;

interface IndustryPresenceProps {
  newsPosts: BlogPostListItem[];
}

const IndustryPresence = ({ newsPosts }: IndustryPresenceProps) => {
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
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    setCurrent(0);
  }, [newsPosts.length, CARDS_PER_VIEW]);

  if (newsPosts.length === 0) {
    return null;
  }

  const peekWidth = isMobile ? 32 : 0;
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - GAP * (CARDS_PER_VIEW - 1) - peekWidth) /
        CARDS_PER_VIEW
      : 380;

  const maxIndex = Math.max(newsPosts.length - CARDS_PER_VIEW, 0);

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
        padding: { xs: "64px 16px", md: "64px 40px", lg: "80px 168px" },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "40px", md: "40px", lg: "64px" },
        alignSelf: "stretch",
        bgcolor: "#F2F2F2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          textAlign: "center",
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
          Our presence at premier industry events reflects our commitment to
          innovation, collaboration, and technological excellence, providing a
          platform to demonstrate advanced textile printing solutions and engage
          with the global textile community.
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <IconButton
          onClick={handlePrev}
          disabled={current === 0}
          aria-label="Previous events"
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            left: "-28px",
            top: "108px",
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
            {newsPosts.map((post) => {
              const coverUrl =
                getCoverImageUrl(post.coverImage, 800) ?? DEFAULT_COVER_IMAGE;
              const coverAlt = getCoverImageAlt(post.coverImage, post.title);
              const subtitle =
                post.excerpt?.trim() || formatBlogDate(post.publishedAt);
              const articleHref = `/news-events/${post.slug}/`;

              return (
                <Box
                  key={post._id}
                  sx={{
                    width: `${cardWidth}px`,
                    minWidth: `${cardWidth}px`,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "16px",
                    flex: "1 0 0",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Box
                    component={Link}
                    href={articleHref}
                    sx={{
                      height: "264px",
                      alignSelf: "stretch",
                      aspectRatio: "352 / 264.17",
                      position: "relative",
                      borderRadius: "8px",
                      overflow: "hidden",
                      bgcolor: "#F0F0F0",
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    <Image
                      src={coverUrl}
                      alt={coverAlt}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      sizes="(max-width: 600px) 100vw, 352px"
                    />
                  </Box>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: "6px" }}
                  >
                    <Typography
                      component={Link}
                      href={articleHref}
                      sx={{
                        color: "#111",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                        textDecoration: "none",
                        "&:hover": { color: "#F6891F" },
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#707070",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                      }}
                    >
                      {subtitle}
                    </Typography>
                    <Box
                      component={Link}
                      href={articleHref}
                      sx={{
                        alignSelf: "flex-start",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
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
                        border: "1px solid #E0E0E0",
                        textDecoration: "none",
                        "&:hover": {
                          bgcolor: "#FFF",
                          color: "#F6891F",
                          borderColor: "#F6891F",
                        },
                      }}
                    >
                      Know more
                      <ArrowForwardIcon sx={{ fontSize: "14px" }} />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <IconButton
          onClick={handleNext}
          disabled={current >= maxIndex}
          aria-label="Next events"
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            right: "-28px",
            top: "108px",
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

      {newsPosts.length > CARDS_PER_VIEW ? (
        <Box
          sx={{
            display: "flex",
            gap: "6px",
            justifyContent: "center",
            width: "100%",
          }}
        >
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
      ) : null}
    </Box>
  );
};

export default IndustryPresence;
