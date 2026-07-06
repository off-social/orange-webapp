"use client";

import { Box, Typography } from "@mui/material";

export type BlogSectionTabId = "insights" | "success-stories";

const TABS: { id: BlogSectionTabId; label: string }[] = [
  { id: "insights", label: "Blogs" },
  { id: "success-stories", label: "Success stories" },
];

interface BlogSectionTabsProps {
  activeSection: BlogSectionTabId;
  onSectionChange: (section: BlogSectionTabId) => void;
}

export default function BlogSectionTabs({
  activeSection,
  onSectionChange,
}: BlogSectionTabsProps) {
  return (
    <Box
      sx={{
        alignSelf: "stretch",
        borderBottom: "1px solid #E0E0E0",
        overflowX: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minWidth: "max-content",
        }}
      >
        {TABS.map((tab) => {
          const isActive = tab.id === activeSection;

          return (
            <Box
              key={tab.id}
              onClick={() => onSectionChange(tab.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "120px", sm: "150px" },
                pt: { xs: "16px", md: "24px" },
                pb: "16px",
                cursor: "pointer",
                borderBottom: isActive
                  ? "2px solid #F6891F"
                  : "2px solid transparent",
                mb: "-1px",
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "25.6px",
                  color: isActive ? "#111" : "#707070",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s ease",
                }}
              >
                {tab.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
