"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type CarouselImage = { src: string; name: string };

export interface MachineImageCarouselHandle {
  /** Smooth-scroll to a real (un-cloned) slide index — used by parent dots. */
  scrollToIndex: (index: number) => void;
}

type Responsive<T> = T | { xs?: T; sm?: T; md?: T; lg?: T };

interface MachineImageCarouselProps {
  images: CarouselImage[];
  /** Bump this (e.g. `${brand}-${tab}`) to snap back to the first slide. */
  resetKey?: string | number;
  /** Called with the real (un-cloned) active index whenever it changes. */
  onActiveIndexChange?: (index: number) => void;
  /** ms between auto-advances on mobile. Default 3500. */
  autoPlayInterval?: number;
  /** Show prev/next arrows on desktop. Default true. */
  showArrows?: boolean;
  // ── layout (defaults match the products page) ──
  gap?: Responsive<string | number>;
  px?: Responsive<string | number>;
  slideWidth?: Responsive<string | number>;
  slideHeight?: Responsive<string | number>;
  imageBorderRadius?: number | string;
  arrowSideOffset?: Responsive<string | number>;
}

const NAV_BTN_SX = {
  minWidth: { xs: "44px", md: "52px" },
  width: { xs: "44px", md: "52px" },
  height: { xs: "44px", md: "52px" },
  borderRadius: "100px",
  border: "1px solid #e8e8e8",
  color: "#111",
  bgcolor: "#fff",
  fontSize: "20px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
  transition: "all 0.2s ease",
  "&:hover": {
    border: "1px solid #F6891F",
    bgcolor: "#F6891F",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(246,137,31,0.35)",
    transform: "translateY(-50%) scale(1.08)",
  },
  "&.Mui-disabled": {
    border: "1px solid #ededed",
    color: "#cfcfcf",
    bgcolor: "#fff",
    boxShadow: "none",
    opacity: 0.6,
  },
};

/**
 * Horizontal machine-image carousel with scroll-snap, desktop arrows, and a
 * mobile auto-scroll that loops seamlessly: at the last image it keeps moving
 * RIGHT onto a clone of the first slide, then silently snaps back — so there's
 * never a jump-back to the left. Auto-scroll pauses while the user drags.
 *
 * The active index is driven purely by the real scroll position (handleScroll),
 * never set optimistically — that's what keeps the dots from flickering.
 */
const MachineImageCarousel = forwardRef<
  MachineImageCarouselHandle,
  MachineImageCarouselProps
>(function MachineImageCarousel(
  {
    images,
    resetKey,
    onActiveIndexChange,
    autoPlayInterval = 3500,
    showArrows = true,
    // defaults match the home "Digital Printing Ecosystem" carousel so the
    // neighbouring machines peek in the same way on the sides
    gap = { xs: "5%", sm: "4vw", md: "4vw" },
    px = { xs: "8vw", sm: "22.5vw", md: "22.5vw" },
    slideWidth = { xs: "auto", sm: "55vw", md: "55vw" },
    slideHeight = { xs: "181px", sm: "240px", md: "22vw" },
    imageBorderRadius = 0,
    arrowSideOffset = "192px",
  },
  ref,
) {
  const [activeImg, setActiveImg] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const activeImgRef = useRef(0);
  const autoplayPausedRef = useRef(false);

  // Per-slide pitch, derived from the actually-rendered children (which include
  // the clones on mobile) so the math stays correct in every mode.
  const getSlideWidth = () => {
    const el = scrollRef.current;
    if (!el || el.children.length === 0) return 0;
    return el.scrollWidth / el.children.length;
  };

  const scrollToIndex = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * getSlideWidth(),
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveImg(Math.round(el.scrollLeft / getSlideWidth()));
  };

  // scrollToIndex reads everything live from refs, so a stable handle is fine.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ scrollToIndex }), []);

  useEffect(() => {
    activeImgRef.current = activeImg;
  }, [activeImg]);

  // activeImg may point into the cloned second half — map back to a real index.
  const displayIndex = images.length ? activeImg % images.length : 0;
  useEffect(() => {
    onActiveIndexChange?.(displayIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayIndex]);

  useEffect(() => {
    // matches MUI's md breakpoint — arrows are hidden below 900px
    const mq = window.matchMedia("(max-width: 899.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // When the source set changes, snap back to the first slide.
  useEffect(() => {
    setActiveImg(0);
    scrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [resetKey]);

  // Mobile auto-scroll with a seamless rightward loop.
  useEffect(() => {
    const len = images.length;
    if (!isMobile || len <= 1) return;
    const id = setInterval(() => {
      if (autoplayPausedRef.current) return;
      const next = activeImgRef.current + 1;
      // Scroll right onto the next (or cloned-first) slide. We deliberately do
      // NOT setActiveImg(next) here: handleScroll drives the active index from
      // the real scroll position, so setting it optimistically made the active
      // dot flicker back a step on every tick.
      scrollToIndex(next);
      if (next >= len) {
        // …then, once the smooth scroll settles, snap back to the real first
        // slide with no animation so the rightward loop looks continuous.
        setTimeout(() => {
          scrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
          setActiveImg(0);
        }, 700);
      }
    }, autoPlayInterval);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, resetKey, images.length, autoPlayInterval]);

  if (images.length === 0) return null;

  // On mobile, render the slides twice so the strip can scroll right past the
  // last machine onto a clone of the first.
  const loopEnabled = isMobile && images.length > 1;
  const renderImages = loopEnabled ? [...images, ...images] : images;

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {showArrows && (
        <Button
          onClick={() => scrollToIndex(Math.max(0, displayIndex - 1))}
          disabled={displayIndex === 0}
          sx={{
            ...NAV_BTN_SX,
            display: { xs: "none", md: "flex" },
            position: "absolute",
            left: arrowSideOffset,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          <ArrowBackIcon sx={{ fontSize: "20px" }} />
        </Button>
      )}

      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        onPointerDown={() => {
          autoplayPausedRef.current = true;
        }}
        onPointerUp={() => {
          autoplayPausedRef.current = false;
        }}
        onPointerCancel={() => {
          autoplayPausedRef.current = false;
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap,
          px,
          width: "100%",
          overflowX: "scroll",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {renderImages.map((img, index) => (
          <Box
            key={index}
            sx={{
              width: slideWidth,
              height: slideHeight,
              aspectRatio: { xs: "201 / 101", sm: "unset" },
              alignSelf: "stretch",
              flexShrink: 0,
              scrollSnapAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={img.src}
              alt={img.name}
              width={900}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: imageBorderRadius,
              }}
            />
          </Box>
        ))}
      </Box>

      {showArrows && (
        <Button
          onClick={() =>
            scrollToIndex(Math.min(images.length - 1, displayIndex + 1))
          }
          disabled={displayIndex === images.length - 1}
          sx={{
            ...NAV_BTN_SX,
            display: { xs: "none", md: "flex" },
            position: "absolute",
            right: arrowSideOffset,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: "20px" }} />
        </Button>
      )}
    </Box>
  );
});

export default MachineImageCarousel;
