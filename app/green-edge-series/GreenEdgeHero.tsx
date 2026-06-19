import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Link, Typography } from "@mui/material";

export default function GreenEdgeHero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "480px", sm: "560px", md: "680px", lg: "800px" },
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <video
        src="/GreenVideo.mp4"
        poster="/GreenVideo-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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

      {/* Content overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: {
            xs: "16px",
            sm: "0 40px 24px 40px",
            md: "0 80px 32px 80px",
            lg: "0 168px 40px 168px",
          },
          gap: "40px",
        }}
      >
        {/* Frosted glass card */}
        <Box
          sx={{
            display: "flex",
            padding: { xs: "20px", md: "40px" },
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: "24px", md: "40px" },
            alignSelf: "stretch",
            borderRadius: "20px",
            border: "1px solid #EFEFEF",
            background: "rgba(17, 17, 17, 0.10)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Text group */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: { xs: "8px", md: "12px" },
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                textAlign: { xs: "center", md: "left" },
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "24px", sm: "32px", md: "40px" },
                fontWeight: 500,
                lineHeight: { xs: "31.2px", sm: "41.6px", md: "52px" },
                letterSpacing: { xs: "0px", md: "-1px" },
              }}
            >
              Digital Textile Pigment Ink
            </Typography>

            <Typography
              sx={{
                color: "#E0E0E0",
                textAlign: { xs: "center", md: "left" },
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                fontWeight: 500,
                lineHeight: { xs: "19.2px", md: "25.6px" },
                maxWidth: { md: "360px" },
              }}
            >
              Sustainable, high-performance pigment inks engineered for vibrant
              colors, exceptional fabric compatibility, and water-saving textile
              production.
            </Typography>
          </Box>

          {/* Button */}
          <Button
            component={Link}
            href="/brochures/Greenedge-Series.pdf"
            download="Greenedge-Series.pdf"
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
            Download Brochure
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
