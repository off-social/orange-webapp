"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { HERO_ASPECT_RATIO } from "./HeroSlideImage";

/**
 * The full-bleed poster carousel used at the top of the home and products pages.
 *
 * `render` receives `isClone`, because the loop works by cloning the first and
 * last slides and a clone is a second copy of real content. Anything that must
 * appear once per page — a heading element above all — has to render differently
 * in a clone. Clones are also hidden from assistive technology.
 */
export type HeroSlide = {
  render: (options: { isClone: boolean }) => ReactNode;
};

const NAV_BTN_SX = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 3,
  minWidth: 0,
  p: 0,
  width: { xs: "34px", md: "44px" },
  height: { xs: "34px", md: "44px" },
  borderRadius: "50%",
  color: "#fff",
  bgcolor: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.45)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  // no colour change on hover — keep the same look
  "&:hover": {
    bgcolor: "rgba(255,255,255,0.12)",
    borderColor: "rgba(255,255,255,0.45)",
  },
};

/**
 * The position `delta` steps from `i`, reading a clone as the real slide it
 * mirrors.
 *
 * A clone exists only to be slid onto and then swapped for its real
 * counterpart, which `handleTransitionEnd` does. That swap needs a
 * `transitionend`, and a tab that is hidden runs no CSS transitions, so it can
 * be missed. Stepping on from a position that was never corrected would walk
 * the track off the end of the slides and leave the frame showing nothing —
 * so correct it here instead of trusting that it already happened.
 */
const step = (i: number, delta: number, total: number) => {
  const real = i > total ? 1 : i < 1 ? total : i;
  return real + delta;
};

export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const total = slides.length;
  // Clone last & first slides so the loop is seamless in both directions:
  // [lastClone, ...slides, firstClone]. Real slides live at positions 1..total.
  const extended = [slides[total - 1], ...slides, slides[0]];

  const [index, setIndex] = useState(1); // start on the first real slide
  const [anim, setAnim] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const goNext = () => setIndex((i) => step(i, 1, total));
  const goPrev = () => setIndex((i) => step(i, -1, total));

  // Auto-advance every 5s; timer re-arms after each change (manual or auto).
  // It stops while the page is hidden: advancing a carousel nobody can see buys
  // nothing, and every one of those advances is a transition that will not run.
  useEffect(() => {
    if (!pageVisible) return;
    const id = setTimeout(() => setIndex((i) => step(i, 1, total)), 5000);
    return () => clearTimeout(id);
  }, [index, pageVisible, total]);

  // Coming back to the tab, land on a real slide: whatever the timer did while
  // the page was hidden went uncorrected, so the track may be parked on a clone.
  useEffect(() => {
    const syncVisibility = () => {
      const visible = !document.hidden;
      setPageVisible(visible);
      if (!visible) return;
      setAnim(false);
      setIndex((i) => (i > total ? 1 : i < 1 ? total : i));
    };
    document.addEventListener("visibilitychange", syncVisibility);
    return () =>
      document.removeEventListener("visibilitychange", syncVisibility);
  }, [total]);

  // After sliding onto a clone, jump (no animation) to the real matching slide.
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName !== "transform") return;
    if (index === extended.length - 1) {
      setAnim(false);
      setIndex(1);
    } else if (index === 0) {
      setAnim(false);
      setIndex(total);
    }
  };

  // Re-enable the transition on the frame after a no-animation jump.
  useEffect(() => {
    if (anim) return;
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnim(true)),
    );
    return () => cancelAnimationFrame(raf);
  }, [anim]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx <= -50) goNext();
    else if (dx >= 50) goPrev();
    touchStartX.current = null;
  };

  return (
    <Box
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        bgcolor: "#000",
        ...HERO_ASPECT_RATIO,
      }}
    >
      {/* Sliding track — slides sit side by side and translate on nav. */}
      <Box
        onTransitionEnd={handleTransitionEnd}
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: anim ? "transform 0.5s ease" : "none",
        }}
      >
        {extended.map((slide, i) => {
          const isClone = i === 0 || i === extended.length - 1;
          return (
            <Box
              key={i}
              aria-hidden={isClone || undefined}
              sx={{
                position: "relative",
                flex: "0 0 100%",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              {slide.render({ isClone })}
            </Box>
          );
        })}
      </Box>

      {/* Arrows — hidden on mobile (swipe instead) */}
      <Button
        aria-label="Previous slide"
        onClick={goPrev}
        sx={{
          ...NAV_BTN_SX,
          display: { xs: "none", sm: "flex" },
          left: { xs: "16px", md: "40px" },
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: { xs: "13px", md: "17px" } }} />
      </Button>
      <Button
        aria-label="Next slide"
        onClick={goNext}
        sx={{
          ...NAV_BTN_SX,
          display: { xs: "none", sm: "flex" },
          right: { xs: "16px", md: "40px" },
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: { xs: "13px", md: "17px" } }} />
      </Button>
    </Box>
  );
}
