import { Box, Typography } from "@mui/material";
import { ResponsiveSlideImage } from "./HeroSlideImage";

/** Hero slide — "The Future of Industrial Textile Printing" (Rocket). */

const ROCKET_IMAGES = [
  { src: "/TheFutureofRocket-500.webp", display: { block: "0px", none: "601px" } },
  {
    src: "/TheFutureofRocket-768.webp",
    display: { block: "601px", none: "1025px" },
  },
  {
    src: "/TheFutureofRocket-1366.webp",
    display: { block: "1025px", none: "1281px" },
  },
  {
    src: "/TheFutureofRocket-1440.webp",
    display: { block: "1281px", none: "1441px" },
  },
  { src: "/TheFutureofRocket.webp", display: { block: "1441px", none: "" } },
];

export default function SlideRocket() {
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
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
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
