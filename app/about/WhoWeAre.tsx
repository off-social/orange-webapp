"use client";

import { Box, Typography } from "@mui/material";

export default function WhoWeAre() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "48px 16px", sm: "64px 40px", md: "80px 80px", lg: "80px 263px", xl: "100px 400px" },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "32px", md: "48px" },
        alignSelf: "stretch",
        bgcolor: "#111",
      }}
    >
      {/* Heading group */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px", xl: "52px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px", xl: "67.6px" },
            letterSpacing: { xs: 0, md: "-1px", xl: "-1.5px" },
          }}
        >
          Who We Are
        </Typography>

        <Typography
          sx={{
            color: "#999",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px", xl: "16px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px", xl: "25.6px" },
          }}
        >
          Pioneering the future of digital textile printing with innovation,
          precision, and excellence.
        </Typography>
      </Box>

      {/* Body paragraph */}
      <Typography
        component="p"
        sx={{
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "20px", md: "24px", xl: "28px" },
          fontWeight: 500,
          lineHeight: { xs: "32px", md: "41.6px", xl: "48px" },
          letterSpacing: 0,
          maxWidth: { xs: "860px", xl: "1100px" },
          color: "#FFF",
        }}
      >
        <Box component="span" sx={{ color: "#F6891F" }}>
          Orange O Tec
        </Box>{" "}
        is a leading provider of digital textile printing solutions, helping
        businesses transition toward faster, smarter, and more sustainable
        production. With deep industry expertise and a commitment to innovation,
        we deliver advanced printing technologies designed to improve
        efficiency, reduce environmental impact, and drive long-term growth.
      </Typography>
    </Box>
  );
}
