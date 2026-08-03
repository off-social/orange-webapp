"use client";

import { useConsultation } from "@/data/ConsultationContext";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

/**
 * Home page hero. Carries the same artwork and copy as the first slide of the
 * products hero (app/products/ProductsHero.tsx), plus the site's two primary
 * calls to action under the specification line.
 *
 * The products slide repeats its whole text block once per breakpoint. Here the
 * text exists once and the breakpoints only move and resize it, so the heading
 * and description appear a single time in the HTML — three copies of an <h1> is
 * exactly what a crawler should not find.
 */

const HEADING = "Advanced";
const HEADING_GRADIENT = "Textile Fabric Printer";
const DESCRIPTION =
  "Equipped with 16 Kyocera industrial printheads, it delivers print speeds of Upto 2,000 LM/Day";

const TEXT_GRADIENT =
  "linear-gradient(90deg, #1D5C7B 0%, #D13D5A 25.96%, #DEA70D 55.29%, #CA4966 78.85%, #2F7993 100%)";

export default function HomeHero() {
  const { openModal } = useConsultation();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        // Matches the products hero at every breakpoint.
        height: { xs: "620px", sm: "600px", lg: "800px" },
        overflow: "hidden",
      }}
    >
      {/* Artwork. Two files rather than one: the mobile crop is a different
          composition, not a rescale of the desktop one. Both load eagerly
          because whichever one is showing is the page's LCP element. */}
      <Box
        sx={{ display: { xs: "none", sm: "block" }, position: "absolute", inset: 0 }}
      >
        <Image
          src="/productPageImg.webp"
          alt="Advanced Textile Fabric Printer"
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
      </Box>
      <Box
        sx={{ display: { xs: "block", sm: "none" }, position: "absolute", inset: 0 }}
      >
        <Image
          src="/prductimgMobile.webp"
          alt="Advanced Textile Fabric Printer"
          fill
          sizes="100vw"
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </Box>

      {/* Below lg the text sits at the bottom of the frame, where the artwork is
          busiest, so it needs the fade to stay legible. The desktop crop places
          it over open space and needs none. */}
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          position: "absolute",
          inset: 0,
          background: {
            xs: "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.70) 65%, rgba(0,0,0,0.95) 100%)",
            sm: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.95) 100%)",
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: { lg: "305px" },
          bottom: { xs: "36px", sm: "48px", lg: "auto" },
          left: { xs: "24px", sm: "48px", lg: "121px" },
          right: { xs: "24px", sm: "auto" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: "10px", lg: "12px" },
        }}
      >
        <Typography
          component="h1"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { lg: "639px" },
            m: 0,
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "36px", sm: "44px", lg: "54px" },
            fontWeight: 500,
            lineHeight: { xs: "44px", sm: "52px", lg: "61px" },
            letterSpacing: { xs: "-0.5px", sm: "-1px" },
          }}
        >
          <Box component="span" sx={{ color: "#FFF" }}>
            {HEADING}
          </Box>
          {/* Gradient fill needs a transparent glyph, which only paints on the
              element the background sits on — hence its own span. */}
          <Box
            component="span"
            sx={{
              background: TEXT_GRADIENT,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {HEADING_GRADIENT}
          </Box>
        </Typography>

        <Typography
          sx={{
            maxWidth: { sm: "480px", lg: "488px" },
            color: "#B8B8B8",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", sm: "15px", lg: "16px" },
            fontWeight: 500,
            lineHeight: { xs: "22.4px", sm: "24px", lg: "25.6px" },
          }}
        >
          {DESCRIPTION}
        </Typography>

        {/* Calls to action, carried over from the hero this replaced. The extra
            top margin sets them apart from the specification line above; at the
            paragraph's own spacing they read as part of it. */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "stretch",
            mt: { xs: "14px", lg: "20px" },
          }}
        >
          <Button
            variant="outlined"
            onClick={() => openModal()}
            sx={{
              color: "#111",
              bgcolor: "#FFF",
              borderColor: "#E0E0E0",
              borderRadius: "8px",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", sm: "13px" },
              fontWeight: 500,
              lineHeight: "20.8px",
              // Wider than tall, and sized by its label rather than pinned to a
              // fixed width that the text then fills edge to edge.
              p: { xs: "11px 16px", md: "13px 24px" },
              boxShadow: "none",
              whiteSpace: "nowrap",
              flex: { xs: "1 0 0", sm: "0 0 auto" },
              "&:hover": {
                bgcolor: "#F2F2F2",
                borderColor: "#E0E0E0",
                boxShadow: "none",
              },
            }}
          >
            Book a Consultation
          </Button>
          <Button
            component={Link}
            href="/products"
            variant="contained"
            endIcon={
              <Image
                src="/Arrow - Right.svg"
                alt=""
                width={16}
                height={16}
                style={{
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                }}
              />
            }
            sx={{
              bgcolor: "#F6891F",
              color: "#fff",
              borderRadius: "8px",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", sm: "13px" },
              fontWeight: 500,
              lineHeight: "20.8px",
              p: { xs: "11px 16px", md: "13px 24px" },
              gap: { xs: "6px", md: "8px" },
              boxShadow: "none",
              flex: { xs: "1 0 0", sm: "0 0 auto" },
              whiteSpace: "nowrap",
              "& .MuiButton-endIcon": { ml: 0 },
              "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
            }}
          >
            Explore Printers
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
