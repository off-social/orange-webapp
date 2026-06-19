"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutHero() {
  return (
    <Box sx={{ position: "relative", width: "100%", lineHeight: 0 }}>
      <Image
        src="/About-us.webp"
        alt="Leading the Future of Textile Printing"
        width={1440}
        height={600}
        style={{
          width: "100%",
          height: "800px",
          objectFit: "cover",
          display: "block",
        }}
        priority
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "8px",
          px: "16px",
          pt: { xs: "48px", md: "64px" },
        }}
      >
        <Typography
          sx={{
            color: "#E0E0E0",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: 0,
          }}
        >
          Leading the Future of
        </Typography>

        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "36px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          Textile Printing
        </Typography>

        <Typography
          sx={{
            color: "#999",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "13px", md: "14px" },
            fontWeight: 500,
            lineHeight: "22.4px",
            mt: "8px",
            maxWidth: "480px",
          }}
        >
          Innovative digital textile printing solutions engineered for precision, performance, and sustainable growth.
        </Typography>

        <Button
          component="a"
          href="/contact"
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
          sx={{
            mt: "8px",
            display: "flex",
            width: "200px",
            padding: "16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "8px",
            bgcolor: "#FFF",
            color: "#111",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "20.8px",
            boxShadow: "none",
            textDecoration: "none",
            "&:hover": { bgcolor: "#f0f0f0", boxShadow: "none" },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
