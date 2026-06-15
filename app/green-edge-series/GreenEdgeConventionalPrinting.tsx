"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const TABLE_ROWS = [
  { step: "Color Planning", trad: true, dig: true, green: true },
  { step: "Screen Engraving", trad: true, dig: false, green: false },
  { step: "Pre-Drying", trad: true, dig: true, green: false },
  { step: "Printing", trad: true, dig: true, green: true },
  { step: "Steaming", trad: true, dig: true, green: false },
  { step: "Washing", trad: true, dig: true, green: false },
  { step: "Post-Drying", trad: true, dig: true, green: true },
  { step: "Color Matching", trad: false, dig: true, green: true },
];

const CHECK = "✓";
const DASH = "—";
const innerPad = { xs: "0", lg: "0 188px" };

function LeafIcon({
  size = 22,
  color = "#FFF",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 4-8 4s-2-3-7 0c0 0 0-4 5-5 0 0-2-1-5 0C4 3 2 7.5 2 10c0 3.5 2 6 5 7 0-4 2.5-7 10-9Z" />
    </svg>
  );
}

function GreenBadge() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "12px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "32px",
        background: "#089E5D",
      }}
    >
      <LeafIcon size={18} />
      <Typography
        sx={{
          color: "#FFF",
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "25.6px",
        }}
      >
        Green Edge Process
      </Typography>
    </Box>
  );
}

export default function GreenEdgeConventionalPrinting() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -120px 0px" },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        padding: innerPad,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        alignSelf: "stretch",
        boxSizing: "border-box",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* VS row — mobile */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          alignSelf: "stretch",
        }}
      >
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "25.6px",
          }}
        >
          Conventional Printing
        </Typography>
        <Typography
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "31.2px",
          }}
        >
          vs.
        </Typography>
        <GreenBadge />
      </Box>

      {/* VS row — desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          alignSelf: "stretch",
        }}
      >
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "25.6px",
          }}
        >
          Conventional Printing
        </Typography>
        <Typography
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "31.2px",
          }}
        >
          vs.
        </Typography>
        <GreenBadge />
      </Box>

      {/* STEPS table */}
      <Box
        sx={{ alignSelf: "stretch", width: "100%", boxSizing: "border-box" }}
      >
        <Box
          sx={{
            width: "100%",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
            <Box
              sx={{
                padding: { xs: "8px", md: "12px 16px" },
                borderBottom: "1px solid #E0E0E0",
              }}
            >
              <Typography
                sx={{
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "10px", md: "14px" },
                  fontWeight: 500,
                  letterSpacing: { xs: "0.5px", md: "1.5px" },
                  textTransform: "uppercase",
                  lineHeight: "1.4",
                }}
              >
                STEPS
              </Typography>
            </Box>
            <Box
              sx={{
                padding: { xs: "8px 4px", md: "12px 16px" },
                borderLeft: "1px solid #E0E0E0",
                borderBottom: "1px solid #E0E0E0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "10px", md: "14px" },
                  fontWeight: 600,
                  lineHeight: "1.4",
                }}
              >
                <Box
                  component="span"
                  sx={{ display: { xs: "none", md: "inline" } }}
                >
                  Traditional
                </Box>
                <Box
                  component="span"
                  sx={{ display: { xs: "inline", md: "none" } }}
                >
                  Trad.
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                padding: { xs: "8px 4px", md: "12px 16px" },
                borderLeft: "1px solid #E0E0E0",
                borderBottom: "1px solid #E0E0E0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "10px", md: "14px" },
                  fontWeight: 600,
                  lineHeight: "1.4",
                }}
              >
                Digital
              </Typography>
            </Box>
            <Box
              sx={{
                padding: { xs: "8px 4px", md: "12px 16px" },
                borderLeft: "1px solid #E0E0E0",
                borderBottom: "1px solid #E0E0E0",
                background: { xs: "#EBF7F2", md: "#089E5D" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: { xs: "#089E5D", md: "#FFF" },
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "10px", md: "14px" },
                  fontWeight: 600,
                  lineHeight: "1.4",
                  textAlign: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{ display: { xs: "none", md: "inline" } }}
                >
                  Green Edge
                </Box>
                <Box
                  component="span"
                  sx={{ display: { xs: "inline", md: "none" } }}
                >
                  G.Edge
                </Box>
              </Typography>
            </Box>
          </Box>

          {/* Data rows */}
          {TABLE_ROWS.map(({ step, trad, dig, green }) => (
            <Box
              key={step}
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                borderBottom: "1px solid #E0E0E0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: { xs: "10px 8px", md: "14px 16px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#333",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "11px", md: "14px" },
                    fontWeight: 400,
                    lineHeight: { xs: "1.4", md: "22.4px" },
                  }}
                >
                  {step}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: { xs: "10px 4px", md: "14px 16px" },
                  borderLeft: "1px solid #E0E0E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: trad ? "#089E5D" : "#BDBDBD",
                    fontSize: { xs: "13px", md: "16px" },
                    fontWeight: 500,
                  }}
                >
                  {trad ? CHECK : DASH}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: { xs: "10px 4px", md: "14px 16px" },
                  borderLeft: "1px solid #E0E0E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: dig ? "#089E5D" : "#BDBDBD",
                    fontSize: { xs: "13px", md: "16px" },
                    fontWeight: 500,
                  }}
                >
                  {dig ? CHECK : DASH}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: { xs: "10px 4px", md: "14px 16px" },
                  borderLeft: "1px solid #E0E0E0",
                  background: "#EBF7F2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: green ? "#089E5D" : "#BDBDBD",
                    fontSize: { xs: "13px", md: "16px" },
                    fontWeight: 500,
                  }}
                >
                  {green ? CHECK : DASH}
                </Typography>
              </Box>
            </Box>
          ))}

          {/* Total row */}
          <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
            <Box sx={{ padding: { xs: "10px 8px", md: "14px 16px" } }}>
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "11px", md: "14px" },
                  fontWeight: 700,
                }}
              >
                Total steps
              </Typography>
            </Box>
            {[
              { val: "7", color: "#333" },
              { val: "7", color: "#333" },
              { val: "4", color: "#089E5D" },
            ].map(({ val, color }, i) => (
              <Box
                key={i}
                sx={{
                  padding: { xs: "10px 4px", md: "14px 16px" },
                  borderLeft: "1px solid #E0E0E0",
                  ...(i === 2 ? { background: "#EBF7F2" } : {}),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color,
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "11px", md: "14px" },
                    fontWeight: 700,
                  }}
                >
                  {val}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ECO IMPACT banner */}
      <Box
        sx={{
          alignSelf: "stretch",
          background: "#089E5D",
          borderRadius: "8px",
          padding: { xs: "16px", md: "20px 24px" },
          display: "flex",
          alignItems: "center",
          gap: "16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            flexShrink: 0,
          }}
        >
          <LeafIcon size={22} />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              lineHeight: "1.6",
            }}
          >
            ECO IMPACT
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            Green Edge skips 3 steps – saving time, water, and energy.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        >
          <LeafIcon size={120} />
        </Box>
      </Box>
    </Box>
  );
}
