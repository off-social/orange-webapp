"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";

export default function ReliableSupport() {
  return (
    <Box
      sx={{
        display: "flex",
        px: { xs: "16px", md: "168px" },
        py: { xs: "64px", md: "150px" },
        alignItems: "center",
        gap: { xs: "40px", md: "24px" },
        alignSelf: "stretch",
        width: "100%",
        boxSizing: "border-box",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#fff",
      }}
    >
      {/* Left: text content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {/* Heading */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            component="span"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "52px" },
              letterSpacing: { xs: 0, md: "-1px" },
              color: "#F6891F",
              display: "block",
            }}
          >
            Reliable Support,
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "52px" },
              letterSpacing: { xs: 0, md: "-1px" },
              color: "#333",
              display: "block",
            }}
          >
            When You Need It Most
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
            color: "#707070",
            maxWidth: { md: "420px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          At Orange O Tec, we believe the sale is just the beginning of our
          relationship. Our dedicated after-sales team is equipped to ensure
          your machines run at peak performance with fast response times, expert
          engineers, and nationwide coverage.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
          sx={{
            bgcolor: "#F6891F",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "20.8px",
            px: 3,
            py: "13px",
            boxShadow: "none",
            alignSelf: { xs: "stretch", md: "flex-start" },
            "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
          }}
        >
          Request a Service
        </Button>
      </Box>

      {/* Right: video */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "auto" },
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <video
          src="/ProductAndServiceVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>
    </Box>
  );
}
