"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

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
            component="h1"
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
            Digital Textile Printing Services
          </Typography>
          {/* <Typography
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
          </Typography> */}
        </Box>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", sm: "13px", md: "16px", lg: "16px" },
            fontWeight: 500,
            lineHeight: { xs: "20px", sm: "18px", md: "23px", lg: "23px" },
            color: "#707070",
            maxWidth: { md: "420px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          At Orange O Tec, we provide installation, maintenance and technical support for digital textile printing machines, helping businesses keep their equipment running reliably and production on track.
        </Typography>

        {/* Button */}
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          endIcon={
            <ArrowForwardIcon
              sx={{ fontSize: { xs: "13px !important", md: "15px !important" } }}
            />
          }
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "13px" },
            fontWeight: 500,
            lineHeight: "20.8px",
            px: { xs: "16px", md: 3 },
            py: { xs: "10px", md: "13px" },
            boxShadow: "none",
            whiteSpace: "nowrap",
            alignSelf: "flex-start",
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
          poster="/ProductAndServiceVideo-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>
    </Box>
  );
}
