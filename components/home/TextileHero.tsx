"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const TextileHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "320px", md: "420px" },
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
          px: { xs: "24px", md: "48px" },
          py: { xs: "48px", md: "80px" },
          maxWidth: "800px",
          mx: "auto",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#EFEFEF",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: { xs: 0, md: "-1px" },
          }}
        >
          Transform Your Textile Printing with
          <br />
          Digital Innovation
        </Typography>

        <Typography
          sx={{
            color: "#E0E0E0",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px" },
            maxWidth: "680px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Ut massa blandit pretium velit
          ullamcorper. Eleifend duis donec cras quam ipsum auctor ut semper in.
        </Typography>

        {/* Buttons — mobile: View Products first (orange), Get a Quote second */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "12px",
            mt: "8px",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
            sx={{
              bgcolor: "#F6891F",
              color: "#FFF",
              borderRadius: "8px",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              px: "24px",
              py: "13px",
              boxShadow: "none",
              width: { xs: "100%", sm: "auto" },
              order: { xs: 1, sm: 2 },
              "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
            }}
          >
            View Products
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "#FFF",
              borderColor: "rgba(255,255,255,0.5)",
              borderRadius: "8px",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              px: "24px",
              py: "13px",
              bgcolor: "transparent",
              boxShadow: "none",
              width: { xs: "100%", sm: "auto" },
              order: { xs: 2, sm: 1 },
              "&:hover": {
                borderColor: "#FFF",
                bgcolor: "rgba(255,255,255,0.08)",
                boxShadow: "none",
              },
            }}
          >
            Get a Quote
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TextileHero;
