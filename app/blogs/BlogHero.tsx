"use client";

import { Box, Typography } from "@mui/material";

import BlogSectionTabs, {
  type BlogSectionTabId,
} from "./BlogSectionTabs";

interface BlogHeroProps {
  activeSection: BlogSectionTabId;
  onSectionChange: (section: BlogSectionTabId) => void;
}

export default function BlogHero({
  activeSection,
  onSectionChange,
}: BlogHeroProps) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "48px 16px 0 16px",
          sm: "64px 40px 0 40px",
          md: "80px 80px 0 80px",
          lg: "80px 168px 0 168px",
          xl: "80px 263px 0 263px",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "24px", md: "32px" },
        alignSelf: "stretch",
        bgcolor: "#FFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          maxWidth: "728px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 400,
            lineHeight: "25.6px",
            letterSpacing: "10px",
            textTransform: "uppercase",
            width: "100%",
          }}
        >
          Blogs
        </Typography>

        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "41.6px", md: "52px" },
            letterSpacing: "-1px",
            width: "100%",
          }}
        >
          Insights on Textile Innovation
        </Typography>

        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
            width: "100%",
          }}
        >
          Explore the latest trends in textile printing technology.
        </Typography>
      </Box>

      <Box
        sx={{
          alignSelf: "stretch",
          width: "100%",
        }}
      >
        <BlogSectionTabs
          activeSection={activeSection}
          onSectionChange={onSectionChange}
        />
      </Box>
    </Box>
  );
}
