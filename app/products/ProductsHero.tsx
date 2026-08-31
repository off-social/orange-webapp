import { Box, Typography } from "@mui/material";
import { HERO_ASPECT_RATIO, ResponsiveSlideImage } from "@/components/hero/HeroSlideImage";

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

/**
 * Products page hero. One poster, so there is nothing to page through and no
 * nav arrows — but it keeps the shared hero sizing, so it occupies exactly the
 * same space as the carousel on the home page.
 */
export default function ProductsHero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        bgcolor: "#000",
        ...HERO_ASPECT_RATIO,
      }}
    >
      <SlideRedefining />
    </Box>
  );
}
