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
      }}
    >
      {/* Label + Heading + Subtitle */}
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

      {/* Tabs */}
      <Box
        sx={{
          alignSelf: "stretch",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {(["blogs", "success"] as const).map((tab) => {
            const label = tab === "blogs" ? "Blogs" : "Success Stories";
            const isActive = activeTab === tab;
            return (
              <Box
                key={tab}
                onClick={() => onTabChange(tab)}
                sx={{
                  display: "flex",
                  width: { xs: "auto", md: "150px" },
                  flex: { xs: "1 0 0", md: "0 0 auto" },
                  padding: { xs: "16px 0 8px 0", md: "24px 0 16px 0" },
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  borderBottom: isActive
                    ? "2px solid #F6891F"
                    : "2px solid transparent",
                  mb: "-1px",
                  whiteSpace: "nowrap", // ← prevents "Success\nStories" wrap
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
                    whiteSpace: "nowrap",
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
