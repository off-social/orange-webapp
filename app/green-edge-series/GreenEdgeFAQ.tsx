"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";

const FAQS = [
  {
    q: "Does pigment ink work on dark fabrics?",
    a: "Lorem ipsum dolor sit amet consectetur. Aliquet cras eleifend egestas vestibulum nulla augue laoreet vitae. Viverra amet netus ac id sagittis phasellus nec sed. Aliquet velit nec mollis nisl eget velit convallis morbi elit. Vitae neque diam sit quisque at. Ac.",
  },
  {
    q: "Does it require pre-treatment?",
    a: "Lorem ipsum dolor sit amet consectetur. Pre-treatment details vary depending on fabric type and ink formulation used.",
  },
  {
    q: "Is pigment ink eco-friendly?",
    a: "Lorem ipsum dolor sit amet consectetur. Pigment inks are water-based and produce minimal waste compared to traditional dyeing methods.",
  },
  {
    q: "Is it cost-effective?",
    a: "Lorem ipsum dolor sit amet consectetur. Pigment ink printing reduces processing steps, lowering overall production costs significantly.",
  },
];

export default function GreenEdgeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "60px 16px", sm: "80px 40px", md: "80px 263px" },
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        alignSelf: "stretch",
        background: "#111",
      }}
    >
      {/* Header */}
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
            fontSize: { xs: "28px", sm: "34px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "36px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{
            color: "#999",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Tristique condimentum
        </Typography>
      </Box>

      {/* Accordion */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "stretch",
          gap: 0,
        }}
      >
        {FAQS.map(({ q, a }, i) => {
          const isOpen = open === i;
          return (
            <Box
              key={q}
              sx={{
                borderTop: "1px solid rgba(255,255,255,0.10)",
                "&:last-child": {
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                },
                background: isOpen ? "rgba(255,255,255,0.05)" : "transparent",
                transition: "background 0.2s ease",
              }}
            >
              {/* Question row */}
              <Box
                onClick={() => setOpen(isOpen ? null : i)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 24px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <Typography
                  sx={{
                    color: isOpen ? "#F6891F" : "#EFEFEF",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25.6px",
                    transition: "color 0.2s ease",
                  }}
                >
                  {q}
                </Typography>

                {/* +/- icon */}
                <Box
                  sx={{
                    flexShrink: 0,
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isOpen ? "#F6891F" : "#EFEFEF",
                    fontSize: "20px",
                    lineHeight: 1,
                    transition: "color 0.2s ease",
                  }}
                >
                  {isOpen ? "−" : "+"}
                </Box>
              </Box>

              {/* Answer — grid trick for perfectly smooth expand/collapse */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition:
                    "grid-template-rows 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <Box sx={{ overflow: "hidden" }}>
                  <Typography
                    sx={{
                      color: "#999",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "22.4px",
                      padding: "0 24px 20px 24px",
                    }}
                  >
                    {a}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
