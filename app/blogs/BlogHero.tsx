"use client";

import { Box, Typography } from "@mui/material";

export default function BlogHero() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "48px 16px 32px 16px",
          sm: "64px 40px 0 40px",
          md: "80px 80px 0 80px",
          lg: "80px 168px 0 168px",
          xl: "80px 263px 0 263px",
        },
        flexDirection: "column",
        alignItems: "flex-start",
        gap: { xs: "24px", md: "40px" },
        alignSelf: "stretch",
        bgcolor: "#FFF",
        pb: { xs: "16px", md: "24px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: "12px", md: "8px" },
        }}
      >
        <Typography
          sx={{
            color: "#707070",
            textAlign: "left",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 400,
            lineHeight: "25.6px",
            letterSpacing: "10px",
            textTransform: "uppercase",
          }}
        >
          Blogs
        </Typography>

        <Typography
          sx={{
            color: "#333",
            textAlign: "left",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "41.6px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          Insights on Textile Innovation
        </Typography>

        <Typography
          sx={{
            color: "#707070",
            textAlign: "left",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "22.4px",
          }}
        >
          Explore the latest trends in textile printing technology and industry
          insights.
        </Typography>
      </Box>
    </Box>
  );
}
