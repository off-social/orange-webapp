import { Box } from "@mui/material";
import Image from "next/image";

/**
 * Wrapper aspect-ratio per viewport width. Each ratio matches the corresponding
 * poster's own, so `objectFit: cover` shows the whole image without cropping it.
 *
 * Every slide in a hero carousel shares this sizing. That is what stops the
 * layout — and the nav buttons sitting on top of it — from shifting as the
 * slides change.
 */
export const HERO_ASPECT_RATIO = {
  aspectRatio: "500 / 768", // ≤600  → portrait phone
  "@media (min-width:601px)": { aspectRatio: "768 / 500" }, // 601–1024 tablet
  "@media (min-width:1025px)": { aspectRatio: "1366 / 600" }, // 1025–1280
  "@media (min-width:1281px)": { aspectRatio: "1440 / 617" }, // 1281–1440
  "@media (min-width:1441px)": { aspectRatio: "2560 / 1200" }, // ≥1441 (master)
};

/**
 * One poster from a per-width set, shown only within its [showFrom, hideFrom)
 * range. A slide renders every source it has and lets these ranges pick the one
 * that matches, so each viewport gets artwork composed for its shape rather than
 * a rescale of someone else's.
 */
export function ResponsiveSlideImage({
  src,
  alt,
  showFrom,
  hideFrom,
}: {
  src: string;
  alt: string;
  showFrom: string;
  hideFrom: string;
}) {
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
}
