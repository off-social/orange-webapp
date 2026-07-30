"use client";

import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

/**
 * Sticky section-tab bar shared by every product details page.
 *
 * Labels differ per product; the look and the scroll behaviour must not. Keep
 * this the single source of truth so the pages can't drift apart.
 */
export default function SectionTabs({
  tabs,
  activeTab,
  onChange,
}: {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
}) {
  // Keep the sticky tab bar in sync with the auto-hiding navbar so it never
  // gets covered: when the navbar is visible the tabs sit just below it, and
  // when the navbar slides away the tabs snap to the top.
  const [navVisible, setNavVisible] = useState(true);
  const [navHeight, setNavHeight] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const measure = () => {
      const header = document.querySelector("header");
      if (header) setNavHeight(header.offsetHeight);
    };
    measure();

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY.current || currentY < 80) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "sticky",
        top: navVisible ? `${navHeight}px` : 0,
        zIndex: 10,
        borderBottom: "1px solid #E0E0E0",
        background: "#F2F2F2",
        transition: "top 0.3s ease, background 0.3s, border-color 0.3s",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", sm: "center" },
          alignItems: "center",
          gap: "24px",
          px: { xs: "16px", sm: "24px", md: "168px" },
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {tabs.map((tab, index) => (
          <Box
            key={tab}
            component="button"
            type="button"
            aria-pressed={activeTab === index}
            onClick={() => onChange(index)}
            sx={{
              position: "relative",
              px: { xs: "0", md: "4px" },
              py: "16px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
              // Reset the native button chrome; every visual below is ours.
              border: 0,
              background: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: activeTab === index ? 500 : 400,
              color: "#707070",
              transition: "color 0.2s",
              display: "block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                bgcolor: activeTab === index ? "#F6891F" : "transparent",
                borderRadius: "2px 2px 0 0",
                transition: "background-color 0.2s",
              },
            }}
          >
            {tab}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
