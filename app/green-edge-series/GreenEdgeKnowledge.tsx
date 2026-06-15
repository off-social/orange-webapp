import { Box, Typography } from "@mui/material";
import GreenEdgeApplications from "./GreenEdgeApplications";
import GreenEdgeFAQ from "./GreenEdgeFAQ";
import GreenEdgeHowDoesItWork from "./GreenEdgeHowDoesItWork";
import GreenEdgeWhatIsIt from "./GreenEdgeWhatIsIt";

export default function GreenEdgeKnowledge() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: { xs: "40px 16px", sm: "60px 40px", md: "80px 168px" },
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "120px",
          alignSelf: "stretch",
          background: "#FFF",
        }}
      >
        {/* ── Heading section ── */}
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
              fontSize: { xs: "28px", sm: "34px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "36px", md: "52px" },
              letterSpacing: "-1px",
            }}
          >
            Everything You Need to Know
          </Typography>

          <Typography
            sx={{
              color: "#F6891F",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "28px", sm: "34px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "36px", md: "52px" },
              letterSpacing: "-1px",
            }}
          >
            About Digital Textile Pigment Ink
          </Typography>

          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              maxWidth: "640px",
            }}
          >
            Driven by expertise and innovation, we have spent more than 15 years
            transforming the way businesses print, produce, and grow. Every
            milestone reflects our commitment to technology, quality, and
            customer success.
          </Typography>
        </Box>

        {/* ── What is Digital Textile Pigment Ink ── */}
        <GreenEdgeWhatIsIt />

        {/* ── How Does It Work ── */}
        <GreenEdgeHowDoesItWork />

        {/* ── Applications ── */}
        <GreenEdgeApplications />
      </Box>

      <GreenEdgeFAQ />
    </>
  );
}
