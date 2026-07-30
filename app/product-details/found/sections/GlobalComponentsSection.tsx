"use client";

import { Box, Typography } from "@mui/material";

/** Numbers (01, 02, …) are derived from array order, never authored. */
const COMPONENTS: { title: string; desc: string }[] = [
  {
    title: "Scroll Roller Unfolding System",
    desc: "Pre-drum fabric flattening mechanism ensuring uniform oil removal across the full fabric width entering each washing tank",
  },
  {
    title: "Independent Tension Control System",
    desc: "Inter-tank tension regulation matching specific fabric requirements between each processing stage",
  },
  {
    title: "Independent Electric Drum Motors",
    desc: "Dedicated motor per washing drum ensuring consistent low-tension fabric transport throughout the line",
  },
  {
    title: "Independent Filter and Flat Foam Filtration",
    desc: "Per-tank filtration system preventing oil carryover and maintaining bath cleanliness across all processing stages",
  },
  {
    title: "Flexible Stacking Unit",
    desc: "Integrated fabric weight and shrinkage control mechanism for premium fabric quality outcomes",
  },
  {
    title: "Multi-Stage Temperature-Graded Wash System",
    desc: "Sequential hot, warm, and cold wash zones for thorough, controlled residue removal and fabric stabilisation",
  },
  {
    title: "Control Systems",
    desc: "PLC-based process control managing tension, temperature, and flow configuration across both semi-bleaching and oil-remove process flows",
  },
];

/** Tab 6 panel for the FOUND MG Series page. */
export default function GlobalComponentsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "64px 16px 40px",
          md: "100px 40px 40px",
          lg: "100px 168px 40px 168px",
        },
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "24px",
        alignSelf: "stretch",
        background: "#FFF",
      }}
    >
      {/* Content column, capped at the authored 1104px (1440 frame less the
          168px side padding) so it stays centred on ultrawide displays. */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "64px" },
          flex: "1 0 0",
          maxWidth: "1104px",
        }}
      >
        <Typography
          component="h2"
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: { xs: 0, md: "-1px" },
            m: 0,
          }}
        >
          Premium Global Components
        </Typography>

        {/* Numbered list, 728px wide and centred under the heading. */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "728px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "40px",
          }}
        >
          {COMPONENTS.map((component, index) => (
            <Box
              key={component.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                alignSelf: "stretch",
              }}
            >
              {/* Number and title, 16px apart. Top-aligned so the number holds
                  its place when a long title wraps. */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  alignSelf: "stretch",
                }}
              >
                <Typography
                  sx={{
                    color: "#F6891F",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "18px", md: "24px" },
                    fontWeight: 500,
                    lineHeight: { xs: "23.4px", md: "31.2px" },
                    letterSpacing: 0,
                    flexShrink: 0,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    color: "#111",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "18px", md: "24px" },
                    fontWeight: 500,
                    lineHeight: { xs: "23.4px", md: "31.2px" },
                    letterSpacing: 0,
                    m: 0,
                  }}
                >
                  {component.title}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 500,
                  lineHeight: { xs: "22.4px", md: "25.6px" },
                }}
              >
                {component.desc}
              </Typography>

              {/* Rule separating this entry from the next, so the last one
                  goes without. The item's own 16px gap sits above it and the
                  list's 40px gap below, so the spacing comes for free. */}
              {index < COMPONENTS.length - 1 && (
                <Box
                  sx={{
                    alignSelf: "stretch",
                    height: "1px",
                    background: "#E0E0E0",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
