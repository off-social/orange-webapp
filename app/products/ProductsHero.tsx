"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/* ────────────────────────────────────────────────────────────
 * Shared bits
 * ──────────────────────────────────────────────────────────── */

const GradientText = ({
  text,
  fontSize,
  lineHeight,
  letterSpacing,
}: {
  text: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}) => (
  <Typography
    sx={{
      background:
        "linear-gradient(90deg, #1D5C7B 0%, #D13D5A 25.96%, #DEA70D 55.29%, #CA4966 78.85%, #2F7993 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "Inter, sans-serif",
      fontSize,
      fontWeight: 500,
      lineHeight,
      letterSpacing,
    }}
  >
    {text}
  </Typography>
);

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

/* ────────────────────────────────────────────────────────────
 * Slide 1 — "Advanced Textile Fabric Printer" (unchanged design)
 * ──────────────────────────────────────────────────────────── */

const heroText = {
  heading: "Advanced",
  gradient: "Textile Fabric Printer",
  description:
    "Equipped with 16 Kyocera industrial printheads, it delivers print speeds of Upto 2,000 LM/Day",
};

function SlideAdvanced() {
  return (
    <>
      {/* Desktop ≥ lg */}
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "block" },
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src="/productPageImg.webp"
          alt="Advanced Textile Fabric Printer"
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
        />
        <Box
          sx={{
            position: "absolute",
            top: "305px",
            left: "121px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "639px" }}>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "54px",
                fontWeight: 500,
                lineHeight: "61px",
                letterSpacing: "-1px",
              }}
            >
              {heroText.heading}
            </Typography>
            <GradientText
              text={heroText.gradient}
              fontSize="54px"
              lineHeight="61px"
              letterSpacing="-1px"
            />
          </Box>
          <Typography
            sx={{
              width: "488px",
              color: "#B8B8B8",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "25.6px",
            }}
          >
            {heroText.description}
          </Typography>
        </Box>
      </Box>

      {/* Tablet sm–md */}
      <Box
        sx={{
          display: { xs: "none", sm: "block", lg: "none" },
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src="/productPageImg.webp"
          alt="Advanced Textile Fabric Printer"
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.95) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "48px",
            left: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "44px",
                fontWeight: 500,
                lineHeight: "52px",
                letterSpacing: "-1px",
              }}
            >
              {heroText.heading}
            </Typography>
            <GradientText
              text={heroText.gradient}
              fontSize="44px"
              lineHeight="52px"
              letterSpacing="-1px"
            />
          </Box>
          <Typography
            sx={{
              maxWidth: "480px",
              color: "#B8B8B8",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            {heroText.description}
          </Typography>
        </Box>
      </Box>

      {/* Mobile xs */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src="/prductimgMobile.webp"
          alt="Advanced Textile Fabric Printer"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.70) 65%, rgba(0,0,0,0.95) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "36px",
            left: "24px",
            right: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "36px",
                fontWeight: 500,
                lineHeight: "44px",
                letterSpacing: "-0.5px",
              }}
            >
              {heroText.heading}
            </Typography>
            <GradientText
              text={heroText.gradient}
              fontSize="36px"
              lineHeight="44px"
              letterSpacing="-0.5px"
            />
          </Box>
          <Typography
            sx={{
              color: "#B8B8B8",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            {heroText.description}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

/* ────────────────────────────────────────────────────────────
 * Slide 2 — "The Future of Rocket"
 * Per-width images (no cropping: wrapper aspect-ratio == image ratio).
 * ──────────────────────────────────────────────────────────── */

// Wrapper aspect-ratio per viewport width — matches each image's own ratio,
// so objectFit:cover shows the full image with no crop.
const SIZING_ROCKET = {
  aspectRatio: "500 / 768", // ≤600  → portrait phone
  "@media (min-width:601px)": { aspectRatio: "768 / 500" }, // 601–1024 tablet
  "@media (min-width:1025px)": { aspectRatio: "1366 / 600" }, // 1025–1280
  "@media (min-width:1281px)": { aspectRatio: "1440 / 617" }, // 1281–1440
  "@media (min-width:1441px)": { aspectRatio: "2560 / 1200" }, // ≥1441 (master)
};

// One <Image> per source; only the matching width is displayed (others load lazily).
const ROCKET_IMAGES = [
  {
    src: "/TheFutureofRocket-500.webp",
    display: { block: "0px", none: "601px" },
  },
  { src: "/TheFutureofRocket-768.webp", display: { block: "601px", none: "1025px" } },
  { src: "/TheFutureofRocket-1366.webp", display: { block: "1025px", none: "1281px" } },
  { src: "/TheFutureofRocket-1440.webp", display: { block: "1281px", none: "1441px" } },
  { src: "/TheFutureofRocket.webp", display: { block: "1441px", none: "" } },
];

/** One responsive <Image>; shown only within its [showFrom, hideFrom) width range. */
const ResponsiveSlideImage = ({
  src,
  alt,
  showFrom,
  hideFrom,
}: {
  src: string;
  alt: string;
  showFrom: string;
  hideFrom: string;
}) => {
  const sx: Record<string, unknown> = {
    position: "absolute",
    inset: 0,
    display: showFrom === "0px" ? "block" : "none",
  };
  if (showFrom !== "0px")
    sx[`@media (min-width:${showFrom})`] = { display: "block" };
  if (hideFrom) sx[`@media (min-width:${hideFrom})`] = { display: "none" };

  return (
    <Box sx={sx}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover", objectPosition: "center center" }}
      />
    </Box>
  );
};

function SlideRocket() {
  return (
    <>
      {ROCKET_IMAGES.map((img) => (
        <ResponsiveSlideImage
          key={img.src}
          src={img.src}
          alt="The Future of Rocket — Industrial Textile Printing"
          showFrom={img.display.block}
          hideFrom={img.display.none}
        />
      ))}

      {/* Text overlay — bottom-centred */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: { xs: "12%", sm: "8%", md: "9%", lg: "9%" },
          width: "100%",
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: { xs: "10px", sm: "12px", md: "15px", lg: "18px" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              textTransform: "uppercase",
              letterSpacing: "-0.23px",
              fontSize: { xs: "22px", sm: "22px", md: "26px", lg: "26px" },
              lineHeight: { xs: "30px", sm: "30px", md: "35px", lg: "35px" },
            }}
          >
            The Future of
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "-0.23px",
              fontSize: { xs: "22px", sm: "22px", md: "26px", lg: "28px" },
              lineHeight: { xs: "30px", sm: "30px", md: "35px", lg: "38px" },
            }}
          >
            Industrial Textile Printing
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#A3A3A3",
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            letterSpacing: "-0.23px",
            maxWidth: { xs: "88%", sm: "70%", md: "520px", lg: "560px" },
            fontSize: { xs: "14px", sm: "13px", md: "16px", lg: "16px" },
            lineHeight: { xs: "20px", sm: "18px", md: "23px", lg: "23px" },
          }}
        >
          Engineered for single-pass production, hybrid versatility, and unmatched
          speed. Print up to 70,000 linear metres per day with exceptional colour
          precision and lower operational costs.
        </Typography>
      </Box>
    </>
  );
}

/* ────────────────────────────────────────────────────────────
 * Slide — "Redefining Double-Sided Textile Printing" (MAS Vertical)
 * Same per-width ratios as the rocket slide, so it shares the wrapper height.
 * ──────────────────────────────────────────────────────────── */

const REDEFINING_IMAGES = [
  { src: "/Redefining393.webp", display: { block: "0px", none: "441px" } },
  { src: "/Redefining500.webp", display: { block: "441px", none: "601px" } },
  { src: "/Redefining768.webp", display: { block: "601px", none: "1025px" } },
  { src: "/Redefining1336.webp", display: { block: "1025px", none: "1281px" } },
  { src: "/Redefining1440.webp", display: { block: "1281px", none: "1441px" } },
  { src: "/Redefining.webp", display: { block: "1441px", none: "" } },
];

function SlideRedefining() {
  return (
    <>
      {REDEFINING_IMAGES.map((img) => (
        <ResponsiveSlideImage
          key={img.src}
          src={img.src}
          alt="Redefining Double-Sided Textile Printing — MAS Vertical"
          showFrom={img.display.block}
          hideFrom={img.display.none}
        />
      ))}

      {/* Text overlay — top on mobile (white space), left on landscape */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "24px", sm: "40px", md: "80px", lg: "121px" },
          right: { xs: "24px", sm: "auto" },
          top: { xs: "70px", sm: "20%", md: "22%", lg: "22%" },
          maxWidth: { xs: "none", sm: "256px", md: "294px", lg: "345px" },
          display: "flex",
          flexDirection: "column",
          // Mobile: centred at top. Landscape: left-aligned.
          alignItems: { xs: "center", sm: "flex-start" },
          textAlign: { xs: "center", sm: "left" },
          gap: { xs: "12px", md: "16px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#0C0C0C",
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              letterSpacing: "-0.373px",
              fontSize: { xs: "18px", sm: "18px", md: "22px", lg: "24px" },
              lineHeight: { xs: "25px", sm: "25px", md: "31px", lg: "34px" },
            }}
          >
            Redefining
          </Typography>
          <Typography
            sx={{
              color: "#569B17",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "-0.373px",
              maxWidth: { xs: "100%", sm: "256px", md: "294px", lg: "345px" },
              fontSize: { xs: "28px", sm: "28px", md: "32px", lg: "35px" },
              lineHeight: { xs: "36px", sm: "35px", md: "40px", lg: "44px" },
            }}
          >
            Double-Sided{" "}
            <Box component="br" sx={{ display: { xs: "block", sm: "none" } }} />
            Textile Printing.
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#4D4D4D",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.1px",
            maxWidth: { xs: "100%", sm: "345px", md: "345px", lg: "345px" },
            fontSize: { xs: "14px", sm: "14px", md: "14px", lg: "14px" },
            lineHeight: { xs: "20px", sm: "20px", md: "20px", lg: "20px" },
          }}
        >
          From fashion and scarves to technical textiles, VERTICAL delivers
          flawless dual-side registration with exceptional quality and production
          efficiency.
        </Typography>
      </Box>
    </>
  );
}

/* ────────────────────────────────────────────────────────────
 * Slide — "FABPRO-2i"  (text to be added later)
 * Same per-width ratios as the other poster slides.
 * ──────────────────────────────────────────────────────────── */

const FABPRO2I_IMAGES = [
  { src: "/FABPRO-2I-393.webp", display: { block: "0px", none: "441px" } },
  { src: "/FABPRO-2I-500.webp", display: { block: "441px", none: "601px" } },
  { src: "/FABPRO-2I-768.webp", display: { block: "601px", none: "1025px" } },
  { src: "/FABPRO-2I-1336.webp", display: { block: "1025px", none: "1281px" } },
  { src: "/FABPRO-2I1440.webp", display: { block: "1281px", none: "1441px" } },
  { src: "/FABPRO-2I.webp", display: { block: "1441px", none: "" } },
];

function SlideFabpro2i() {
  return (
    <>
      {FABPRO2I_IMAGES.map((img) => (
        <ResponsiveSlideImage
          key={img.src}
          src={img.src}
          alt="FabPro 2i — Industrial-Scale Digital Textile Printing"
          showFrom={img.display.block}
          hideFrom={img.display.none}
        />
      ))}

      {/* Text overlay — mobile: heading top + description bottom (space-between);
          landscape: left block (top-anchored sm/md, centred lg). */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "24px", sm: "40px", md: "80px", lg: "121px" },
          right: { xs: "24px", sm: "auto" },
          top: { xs: "70px", sm: "32px", md: "20px", lg: "50%" },
          bottom: { xs: "36px", sm: "auto" },
          transform: { xs: "none", lg: "translateY(-50%)" },
          maxWidth: { xs: "none", sm: "60%", md: "560px", lg: "620px" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          textAlign: { xs: "center", sm: "left" },
          justifyContent: { xs: "space-between", sm: "flex-start" },
        }}
      >
        {/* Top group: watermark + heading (+ bar on landscape) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          {/* Watermark heading */}
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "-0.427px",
              lineHeight: 1,
              opacity: 0.39,
              background: "linear-gradient(180deg, #FFF 23.38%, #1D1D20 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "52px", sm: "42px", md: "56px", lg: "66px" },
            }}
          >
            FabPro 2i
          </Typography>

          {/* Engineered for + heading — gap 18 below watermark, gap 8 between */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              gap: { xs: "4px", sm: "6px", md: "7px", lg: "8px" },
              mt: { xs: "8px", sm: "12px", md: "15px", lg: "18px" },
            }}
          >
            <Typography
              sx={{
                color: "#A3A3A3",
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.427px",
                fontSize: { xs: "22px", sm: "20px", md: "24px", lg: "28px" },
                lineHeight: { xs: "28px", sm: "24px", md: "29px", lg: "34px" },
              }}
            >
              Engineered for
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "-0.427px",
                fontSize: { xs: "24px", sm: "22px", md: "27px", lg: "32px" },
                lineHeight: { xs: "28px", sm: "26px", md: "31px", lg: "36px" },
              }}
            >
              Industrial-Scale
              <br />
              Digital Textile Printing
            </Typography>
          </Box>

          {/* White divider bar — hidden on mobile */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              bgcolor: "#FFF",
              width: { md: "119px", lg: "119px" },
              height: { md: "4px", lg: "4px" },
              mt: { md: "20px", lg: "24px" },
            }}
          />
        </Box>

        {/* Description — two paragraphs (hidden on mobile) */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: "16px",
            mt: { xs: 0, sm: "16px", md: "16px", lg: "20px" },
            maxWidth: { xs: "100%", sm: "320px", md: "380px", lg: "440px" },
          }}
        >
          {[
            <>
              Designed for manufacturers who demand exceptional speed,{" "}
              <Box component="br" sx={{ display: { xs: "none", lg: "block" } }} />
              precision, and uninterrupted production.
            </>,
            <>
              FabPro 2i delivers consistent print quality, intelligent{" "}
              <Box component="br" sx={{ display: { xs: "none", lg: "block" } }} />
              automation, and reliable performance across every meter.
            </>,
          ].map((para, i) => (
            <Typography
              key={i}
              sx={{
                color: "#B8B8B8",
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.427px",
                fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "16px" },
                lineHeight: { xs: "20px", sm: "21px", md: "23px", lg: "23px" },
              }}
            >
              {para}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
}

/* ────────────────────────────────────────────────────────────
 * Slide — "Built with Precision"  (text to be added later)
 * Same per-width ratios as the other poster slides.
 * ──────────────────────────────────────────────────────────── */

const BUILT_PRECISION_IMAGES = [
  { src: "/BuiltwithPrecision393.webp", display: { block: "0px", none: "441px" } },
  { src: "/BuiltwithPrecision500.webp", display: { block: "441px", none: "601px" } },
  { src: "/BuiltwithPrecision768.webp", display: { block: "601px", none: "1025px" } },
  { src: "/BuiltwithPrecision1336.webp", display: { block: "1025px", none: "1281px" } },
  { src: "/BuiltwithPrecision1440.webp", display: { block: "1281px", none: "1441px" } },
  { src: "/BuiltwithPrecision.webp", display: { block: "1441px", none: "" } },
];

function SlideBuiltWithPrecision() {
  return (
    <>
      {BUILT_PRECISION_IMAGES.map((img) => (
        <ResponsiveSlideImage
          key={img.src}
          src={img.src}
          alt="Built with Precision. Proven in Performance."
          showFrom={img.display.block}
          hideFrom={img.display.none}
        />
      ))}

      {/* Text overlay — mobile: top-centred; landscape: bottom-left */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "24px", sm: "40px", md: "80px", lg: "121px" },
          right: { xs: "24px", sm: "auto" },
          top: { xs: "60px", sm: "auto" },
          bottom: { xs: "auto", sm: "10%", md: "12%", lg: "12%" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          textAlign: { xs: "center", sm: "left" },
          gap: { xs: "10px", md: "16px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          {[
            "Built with,Precision.",
            "Proven in,Performance.",
          ].map((line) => {
            const [gray, orange] = line.split(",");
            return (
              <Typography
                key={line}
                sx={{
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "-0.23px",
                  lineHeight: { xs: "36px", sm: "32px", md: "38px", lg: "42px" },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#FFF",
                    fontWeight: 300,
                    fontSize: { xs: "32px", sm: "25px", md: "29px", lg: "32px" },
                  }}
                >
                  {gray}{" "}
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: "#F6891F",
                    fontWeight: 600,
                    fontSize: { xs: "32px", sm: "25px", md: "29px", lg: "32px" },
                  }}
                >
                  {orange}
                </Box>
              </Typography>
            );
          })}
        </Box>
        <Typography
          sx={{
            color: "#A3A3A3",
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            letterSpacing: "-0.23px",
            maxWidth: { xs: "260px", md: "340px" },
            fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "16px" },
            lineHeight: { xs: "19px", sm: "20px", md: "23px", lg: "23px" },
          }}
        >
          End-to-end digital printing solutions
          <br />
          for every application.
        </Typography>
      </Box>
    </>
  );
}

/* ────────────────────────────────────────────────────────────
 * Carousel
 * ──────────────────────────────────────────────────────────── */

const slides = [
  { render: () => <SlideRocket /> },
  { render: () => <SlideRedefining /> },
  { render: () => <SlideFabpro2i /> },
  { render: () => <SlideBuiltWithPrecision /> },
  { render: () => <SlideAdvanced /> },
];

export default function ProductsHero() {
  const total = slides.length;
  // Clone last & first slides so the loop is seamless in both directions:
  // [lastClone, ...slides, firstClone]. Real slides live at positions 1..total.
  const extended = [slides[total - 1], ...slides, slides[0]];

  const [index, setIndex] = useState(1); // start on the first real slide
  const [anim, setAnim] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const goNext = () => setIndex((i) => i + 1);
  const goPrev = () => setIndex((i) => i - 1);

  // Auto-advance every 5s; timer re-arms after each change (manual or auto).
  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => i + 1), 5000);
    return () => clearTimeout(id);
  }, [index]);

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
        // Same height for every slide (rocket image ratios) so switching
        // slides never shifts the layout or the nav buttons.
        ...SIZING_ROCKET,
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
        {extended.map((slide, i) => (
          <Box
            key={i}
            sx={{
              position: "relative",
              flex: "0 0 100%",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            {slide.render()}
          </Box>
        ))}
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
