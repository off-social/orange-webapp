"use client";

import { Box, Typography } from "@mui/material";

interface BlogHeroProps {
  activeTab: "blogs" | "success";
  onTabChange: (tab: "blogs" | "success") => void;
}

export default function BlogHero({ activeTab, onTabChange }: BlogHeroProps) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "48px 1px 0 1px",
          sm: "64px 40px 0 40px",
          md: "100px 80px 0 80px",
          lg: "100px 168px 0 168px",
          xl: "100px 560px 0 560px",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "24px", md: "40px" },
        alignSelf: "stretch",
        bgcolor: "#FFF",
      }}
    >
      {/* Label + Heading + Subtitle */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
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
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: { xs: 0, md: "-1px" },
          }}
        >
          Insights on Textile Innovation
        </Typography>

        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px" },
          }}
        >
          Explore the latest trends in textile printing technology.
        </Typography>
      </Box>

      {/* Tabs — full-width border, inner constrained */}
      <Box sx={{ alignSelf: "stretch", borderBottom: "1px solid #E0E0E0" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: "16px", sm: "40px", md: "80px", lg: "356px" },
          }}
        >
          {(["blogs", "success"] as const).map((tab) => {
            const label = tab === "blogs" ? "Blogs" : "Success stories";
            const isActive = activeTab === tab;
            return (
              <Box
                key={tab}
                onClick={() => onTabChange(tab)}
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pb: "12px",
                  cursor: "pointer",
                  borderBottom: isActive ? "2px solid #F6891F" : "2px solid transparent",
                  mb: "-1px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: isActive ? 600 : 400,
                    lineHeight: "25.6px",
                    color: isActive ? "#333" : "#707070",
                    transition: "all 0.2s ease",
                  }}
                >
                  {label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
