import { Box, Typography } from "@mui/material";
import GreenEdgeColorRange from "./GreenEdgeColorRange";
import GreenEdgeConventionalPrinting from "./GreenEdgeConventionalPrinting";
import GreenEdgePigmentInk from "./GreenEdgePigmentInk";
import GreenEdgePropertyCards from "./GreenEdgePropertyCards";

export default function GreenEdgeTechnology() {
  return (
    <Box
      sx={{
        background: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignSelf: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: "40px", md: "48px", lg: "64px" },
          alignSelf: "stretch",
          width: "100%",
          maxWidth: "1440px",
          padding: {
            xs: "48px 16px",
            sm: "60px 24px",
            md: "60px 40px",
            lg: "64px 168px",
          },
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
          }}
        >
          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "22px", sm: "30px", md: "36px", lg: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "28.6px", md: "46.8px", lg: "52px" },
              letterSpacing: { xs: "0", md: "-0.5px", lg: "-1px" },
            }}
          >
            The Science Behind
          </Typography>
          <Typography
            sx={{
              color: "#F6891F",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "22px", sm: "30px", md: "36px", lg: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "28.6px", md: "46.8px", lg: "52px" },
              letterSpacing: { xs: "0", md: "-0.5px", lg: "-1px" },
            }}
          >
            High-Performance Pigment Printing
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "13px", lg: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", md: "20.8px", lg: "22.4px" },
              maxWidth: "640px",
            }}
          >
            Explore the technologies that enable vibrant colors, simplified
            production, and reliable textile printing performance.
          </Typography>
        </Box>

        <GreenEdgeConventionalPrinting />
        <GreenEdgePropertyCards />
        <GreenEdgeColorRange />
        <GreenEdgePigmentInk />
      </Box>
    </Box>
  );
}
