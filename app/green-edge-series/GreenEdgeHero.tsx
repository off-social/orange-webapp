import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";

export default function GreenEdgeHero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: { xs: "auto", md: "9/5" },
        height: { xs: "560px", md: "auto" },
        overflow: "hidden",
        maxHeight: "800px",
      }}
    >
      {/* Background video */}
      <video
        src="/GreenEdgeSeriesVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Frosted glass overlay — bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "12px", md: "24px" },
          left: { xs: "12px", sm: "24px", md: "40px" },
          right: { xs: "12px", sm: "24px", md: "40px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: "24px", md: "40px" },
          padding: { xs: "24px", md: "40px" },
          borderRadius: "20px",
          border: "1px solid #EFEFEF",
          background: "rgba(17, 17, 17, 0.10)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Text group */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "26px", sm: "32px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "33.8px", sm: "41.6px", md: "52px" },
              letterSpacing: "-1px",
            }}
          >
            Digital Textile Pigment Ink
          </Typography>

          <Typography
            sx={{
              color: "#E0E0E0",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "13px", sm: "14px", md: "16px" },
              fontWeight: 500,
              lineHeight: { xs: "20.8px", md: "25.6px" },
              maxWidth: { md: "640px" },
            }}
          >
            Sustainable, high-performance pigment inks engineered for vibrant
            colors, exceptional fabric compatibility, and water-saving textile
            production.
          </Typography>
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
          sx={{
            width: { xs: "100%", sm: "200px" },
            padding: "16px",
            borderRadius: "8px",
            bgcolor: "#111",
            color: "#FFF",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "20.8px",
            textTransform: "none",
            whiteSpace: "nowrap",
            justifyContent: "center",
            gap: "8px",
            boxShadow: "none",
            "&:hover": { bgcolor: "#333", boxShadow: "none" },
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
}
