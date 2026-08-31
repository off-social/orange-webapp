import { Box, Typography } from "@mui/material";
import { ResponsiveSlideImage } from "./HeroSlideImage";

/** Hero slide — "FabPro 2i". Its own copy still to come. */

const FABPRO2I_IMAGES = [
  { src: "/FABPRO-2I-393.webp", display: { block: "0px", none: "441px" } },
  { src: "/FABPRO-2I-500.webp", display: { block: "441px", none: "601px" } },
  { src: "/FABPRO-2I-768.webp", display: { block: "601px", none: "1025px" } },
  { src: "/FABPRO-2I-1336.webp", display: { block: "1025px", none: "1281px" } },
  { src: "/FABPRO-2I1440.webp", display: { block: "1281px", none: "1441px" } },
  { src: "/FABPRO-2I.webp", display: { block: "1441px", none: "" } },
];

export default function SlideFabpro2i() {
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
