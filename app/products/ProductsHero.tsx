import Image from "next/image";
import { Box, Typography } from "@mui/material";

const textContent = {
  heading: "Advanced",
  gradient: "Textile Fabric Printer",
  description:
    "Equipped with 16 Kyocera industrial printheads, it delivers print speeds of Upto 2,000 LM/Day",
};

const GradientText = ({ fontSize, lineHeight, letterSpacing }: { fontSize: string; lineHeight: string; letterSpacing: string }) => (
  <Typography
    sx={{
      background: "linear-gradient(90deg, #1D5C7B 0%, #D13D5A 25.96%, #DEA70D 55.29%, #CA4966 78.85%, #2F7993 100%)",
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
    {textContent.gradient}
  </Typography>
);

export default function ProductsHero() {
  return (
    <>
      {/* ── Desktop ≥ md (1024px+) ── */}
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "block" },
          position: "relative",
          width: "100%",
          height: "800px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/productPageImg.png"
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
              {textContent.heading}
            </Typography>
            <GradientText fontSize="54px" lineHeight="61px" letterSpacing="-1px" />
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
            {textContent.description}
          </Typography>
        </Box>
      </Box>

      {/* ── Tablet sm–md (600px – 1023px) ── */}
      <Box
        sx={{
          display: { xs: "none", sm: "block", lg: "none" },
          position: "relative",
          width: "100%",
          height: "600px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/productPageImg.png"
          alt="Advanced Textile Fabric Printer"
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
        />
        {/* bottom fade overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.95) 100%)",
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
              {textContent.heading}
            </Typography>
            <GradientText fontSize="44px" lineHeight="52px" letterSpacing="-1px" />
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
            {textContent.description}
          </Typography>
        </Box>
      </Box>

      {/* ── Mobile xs (< 600px) ── */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "relative",
          width: "100%",
          height: "620px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/prductimgMobile.png"
          alt="Advanced Textile Fabric Printer"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        {/* bottom-up black gradient */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.70) 65%, rgba(0,0,0,0.95) 100%)",
          }}
        />
        {/* text overlay at bottom */}
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
              {textContent.heading}
            </Typography>
            <GradientText fontSize="36px" lineHeight="44px" letterSpacing="-0.5px" />
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
            {textContent.description}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
