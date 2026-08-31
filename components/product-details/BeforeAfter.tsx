"use client";

import { useProduct } from "@/data/ProductContext";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";

export default function BeforeAfter() {
  const { beforeAfter } = useProduct();
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(50); // divider position, %

  if (!beforeAfter) return null;

  const {
    heading,
    description,
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
  } = beforeAfter;

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  // Pointer events cover mouse + touch + pen. setPointerCapture keeps the drag
  // alive even if the finger/cursor leaves the element.
  const handleDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const handleUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId))
      e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "64px 40px", lg: "64px 168px" },
        flexDirection: "column",
        alignItems: "center",
        gap: "64px",
        alignSelf: "stretch",
        background: "#FFF",
      }}
    >
      {/* Heading + description */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          width: "100%",
          maxWidth: "730px",
        }}
      >
        <Typography
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "36px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          {heading}
        </Typography>
        {description && (
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            {description}
          </Typography>
        )}
      </Box>

      {/* Comparison slider */}
      <Box
        ref={containerRef}
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        onPointerCancel={handleUp}
        sx={{
          position: "relative",
          width: "100%",
          // shorter (wider) on laptop/desktop so it isn't too tall
          aspectRatio: { xs: "4 / 3", sm: "3 / 2", md: "2 / 1", lg: "2 / 1" },
          borderRadius: { xs: "16px", md: "32px" },
          overflow: "hidden",
          boxShadow: "0px 20px 20px rgba(0,0,0,0.06)",
          touchAction: "none", // all gestures drive the slider (mobile drag)
          userSelect: "none",
          cursor: "ew-resize",
        }}
      >
        {/* before (base) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt={beforeLabel}
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
        {/* after (revealed on the right of the divider) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterImage}
          alt={afterLabel}
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            clipPath: `inset(0 0 0 ${pos}%)`,
          }}
        />

        {/* divider + handle */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${pos}%`,
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: "2px",
              bgcolor: "#FFF",
              boxShadow: "0 0 6px rgba(0,0,0,0.35)",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "40px", md: "48px" },
              height: { xs: "40px", md: "48px" },
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.95)",
              color: "#F6891F",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              flexShrink: 0,
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ fontSize: { xs: "20px", md: "24px" }, ml: "-4px" }}
            />
            <KeyboardArrowRightIcon
              sx={{ fontSize: { xs: "20px", md: "24px" }, mr: "-4px" }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              width: "2px",
              bgcolor: "#FFF",
              boxShadow: "0 0 6px rgba(0,0,0,0.35)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
