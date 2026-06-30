"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import GreenEdgeBenefits from "./GreenEdgeBenefits";
import GreenEdgeKnowledge from "./GreenEdgeKnowledge";
import GreenEdgeResources from "./GreenEdgeResources";
import GreenEdgeSolutions from "./GreenEdgeSolutions";
import GreenEdgeTechnology from "./GreenEdgeTechnology";

const TABS = ["Products", "Knowledge", "Technology", "Benefits", "Resources"];

const TAB_CONTENT: Record<string, React.ReactNode> = {
  Products: <GreenEdgeSolutions />,
  Knowledge: <GreenEdgeKnowledge />,
  Technology: <GreenEdgeTechnology />,
  Benefits: <GreenEdgeBenefits />,
  Resources: <GreenEdgeResources />,
};

export default function GreenEdgeTabs() {
  const [active, setActive] = useState("Products");

  return (
    <>
      {/* Tab bar wrapper — adds right-fade hint on mobile */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          background: "#FFF",
          borderBottom: "1px solid #E0E0E0",
          // fade hint on right edge on xs only
          "&::after": {
            content: { xs: '""', sm: "none" },
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "48px",
            background: "linear-gradient(to right, transparent, #fff)",
            pointerEvents: "none",
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            padding: { xs: "0 16px", sm: "0 40px", md: "0 168px" },
            alignItems: "center",
            gap: { xs: "0px", sm: "0px" },
            boxSizing: "border-box",
            overflowX: { xs: "auto", md: "visible" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {TABS.map((tab) => {
            const isActive = active === tab;
            return (
              <Box
                key={tab}
                onClick={() => setActive(tab)}
                sx={{
                  display: "flex",
                  padding: {
                    xs: "16px 14px 12px 14px",
                    sm: "20px 0 14px 0",
                    md: "24px 0 16px 0",
                  },
                  justifyContent: "center",
                  alignItems: "center",
                  flex: { xs: "0 0 auto", sm: "1 0 0" },
                  cursor: "pointer",
                  borderBottom: isActive
                    ? "2px solid #F6891F"
                    : "2px solid transparent",
                  marginBottom: "-1px",
                  transition: "border-color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                <Typography
                  sx={{
                    color: isActive ? "#111" : "#555",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "13px", sm: "14px", md: "16px" },
                    fontWeight: isActive ? 600 : 500,
                    lineHeight: "25.6px",
                    transition: "color 0.2s ease, font-weight 0.2s ease",
                  }}
                >
                  {tab}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Tab content */}
      {TAB_CONTENT[active] ?? null}
    </>
  );
}
