"use client";

import { Box, Typography } from "@mui/material";

export type ProcessStep = {
  title: string;
  desc: string;
};

const DIVIDER = "1px solid #E0E0E0";

/** Cards per row at each breakpoint: 1 on phones, 2 on tablets, 4 on desktop. */
const COLUMNS = { xs: 1, sm: 2, md: 4 };

/**
 * Numbered process cards laid out in a single row, split by vertical rules.
 *
 * The step numbers are derived from position (01, 02, …) rather than authored,
 * so the sequence can never drift out of order.
 */
export default function ProcessCompatibility({
  description,
  steps,
}: {
  description: string;
  steps: ProcessStep[];
}) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "64px 16px 40px",
          md: "100px 40px 40px",
          lg: "100px 168px 40px 168px",
        },
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        background: "#FFF",
      }}
    >
      {/* Content column. 1104px is the authored content width (1440 frame less
          the 168px side padding); without the cap the four-column row would
          keep stretching on ultrawide displays. */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: "40px", md: "64px" },
          width: "100%",
          maxWidth: "1104px",
        }}
      >
        {/* Heading group. The content column is align-items: flex-start, so both
          children need an explicit stretch to span the full width. */}
        <Box
          sx={{
            display: "flex",
            padding: { xs: 0, md: "0 80px", lg: "0 282px" },
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
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
            Process Compatibility
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Step cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: `repeat(${COLUMNS.md}, minmax(0, 1fr))`,
            },
            alignSelf: "stretch",
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={step.title}
              sx={{
                display: "flex",
                padding: { xs: "32px 0", sm: "48px 24px" },
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                minWidth: 0,
                // Rules sit between cards only, never on the outer edge: a left
                // rule unless the card starts a row, a top rule unless it's in
                // the first row. Derived per breakpoint from the column count so
                // it stays correct for any number of steps.
                borderLeft: {
                  xs: "none",
                  sm: index % COLUMNS.sm !== 0 ? DIVIDER : "none",
                  md: index % COLUMNS.md !== 0 ? DIVIDER : "none",
                },
                borderTop: {
                  xs: index >= COLUMNS.xs ? DIVIDER : "none",
                  sm: index >= COLUMNS.sm ? DIVIDER : "none",
                  md: index >= COLUMNS.md ? DIVIDER : "none",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#F6891F",
                  fontFamily: "Inter, sans-serif",
                  // 80px next to 14px body text overwhelms a phone column, so the
                  // number steps down; line-height tracks it to stay at 100%.
                  fontSize: { xs: "56px", sm: "80px" },
                  fontWeight: 700,
                  lineHeight: { xs: "56px", sm: "80px" },
                  letterSpacing: "-1px",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: "#111",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "25.6px",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#707070",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "22.4px",
                  }}
                >
                  {step.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
