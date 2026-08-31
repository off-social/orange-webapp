import { Box, Typography } from "@mui/material";
import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Hero slide — "Advanced Textile Fabric Printer".
 *
 * Two posters rather than the per-width set the other slides use: the mobile
 * crop is a different composition, and between them they cover every width.
 *
 * `actions` is an optional slot under the description, for the calls to action
 * the home page puts there. `headingComponent` exists because the carousel
 * clones slides to loop: the real slide can be the page's `h1`, a clone of it
 * cannot.
 */

const HEADING = "Advanced";
const HEADING_GRADIENT = "Textile Fabric Printer";
const DESCRIPTION =
  "Equipped with 16 Kyocera industrial printheads, it delivers print speeds of Upto 2,000 LM/Day";

const TEXT_GRADIENT =
  "linear-gradient(90deg, #1D5C7B 0%, #D13D5A 25.96%, #DEA70D 55.29%, #CA4966 78.85%, #2F7993 100%)";

export default function SlideAdvanced({
  actions,
  headingComponent = "p",
}: {
  actions?: ReactNode;
  headingComponent?: "h1" | "p";
}) {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "absolute",
          inset: 0,
        }}
      >
        <Image
          src="/productPageImg.webp"
          alt="Advanced Textile Fabric Printer"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "absolute",
          inset: 0,
        }}
      >
        <Image
          src="/prductimgMobile.webp"
          alt="Advanced Textile Fabric Printer"
          fill
          sizes="100vw"
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
          component={headingComponent}
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

        {actions}
      </Box>
    </>
  );
}
