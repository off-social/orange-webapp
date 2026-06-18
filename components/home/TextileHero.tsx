"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useConsultation } from "@/data/ConsultationContext";

const TextileHero = () => {
  const { openModal } = useConsultation();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "320px", md: "380px", lg: "420px" },
      }}
    >
      {/* Mobile background image */}
      <Box sx={{ display: { xs: "block", md: "none" }, position: "absolute", inset: 0 }}>
        <Image src="/mobileimg01.png" alt="Background" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
      </Box>

      {/* Desktop background image */}
      <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute", inset: 0 }}>
        <Image src="/bgimg.png" alt="Background" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
      </Box>

      {/* Mobile: dark blurred circle — right side */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          right: 0,
          top: "-0.426px",
          width: "392px",
          height: "482px",
          borderRadius: "482px",
          background: "#111",
          filter: "blur(30px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Desktop: dark blurred ellipse — center */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "1441px",
          height: "494px",
          borderRadius: "1441px",
          opacity: 0.99,
          background: "#111",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "16px",
          px: { xs: "24px", sm: "48px", md: "40px", lg: "48px" },
          py: { xs: "48px", sm: "56px", md: "60px", lg: "80px" },
          maxWidth: { xs: "100%", sm: "640px", md: "800px" },
          mx: "auto",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#EFEFEF",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", sm: "28px", md: "30px", lg: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", sm: "36px", md: "40px", lg: "52px" },
            letterSpacing: { xs: 0, sm: "-0.3px", md: "-0.5px", lg: "-1px" },
          }}
        >
          Transform Your Textile Printing with
          <br />
          Digital Innovation
        </Typography>

        {/* Buttons — mobile: View Products first (orange), Book a Consultation second */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "16px",
            mt: { xs: "8px", md: "24px" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            component={Link}
            href="/products"
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important" }} />}
            sx={{
              bgcolor: "#F6891F",
              color: "#FFF",
              borderRadius: "8px",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "20.8px",
              p: "16px",
              gap: "8px",
              boxShadow: "none",
              width: { xs: "100%", sm: "200px" },
              order: { xs: 1, sm: 2 },
              "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
            }}
          >
            Explore Printers
          </Button>

          <Button
            variant="contained"
            sx={{
              color: "#111",
              bgcolor: "#FFF",
              borderRadius: "8px",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "20.8px",
              p: "16px",
              boxShadow: "none",
              width: { xs: "100%", sm: "200px" },
              order: { xs: 2, sm: 1 },
              "&:hover": {
                bgcolor: "#F2F2F2",
                boxShadow: "none",
              },
            }}
            onClick={() => openModal()}
          >
            Book a Consultation
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TextileHero;
