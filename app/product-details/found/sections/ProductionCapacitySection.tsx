"use client";

import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

/** Callout background. The warning glyph is knocked out in this colour. */
const CALLOUT_BG = "#FEF3E8";

/**
 * Dot colours read as a temperature ramp: brand orange at scouring heat down
 * through amber and pale yellow to warm and cold blue.
 */
const DOT = {
  scouring: "#F6891F",
  hot: "#FBCD58",
  warm: "#FFE082",
  tepid: "#90CAF9",
  cold: "#007BFF",
} as const;

type Step = {
  label: string;
  /** Rendered after an em dash. Omitted on steps that carry no qualifier. */
  detail?: string;
  dot: string;
};

/** The two configurations shown side by side. */
const FLOWS: { title: string; steps: Step[] }[] = [
  {
    title: "Semi-Bleaching Flow",
    steps: [
      {
        label: "Scouring tank",
        detail: "semi-bleaching, 7 min, 98°",
        dot: DOT.scouring,
      },
      { label: "Hot wash", detail: "90°", dot: DOT.hot },
      { label: "Hot wash", detail: "70°", dot: DOT.warm },
      { label: "Warm wash", detail: "50°", dot: DOT.tepid },
      { label: "Cold wash", detail: "< 50°", dot: DOT.cold },
    ],
  },
  {
    title: "Oil Remove Washing Flow",
    steps: [
      {
        label: "Scouring (relax oil remove)",
        detail: "relax oil remove, 5 minutes, 75°",
        dot: DOT.hot,
      },
      { label: "Hot wash", detail: "70°", dot: DOT.warm },
      { label: "Hot wash", detail: "60°", dot: DOT.warm },
      { label: "Warm wash", detail: "50°", dot: DOT.tepid },
      { label: "Cold wash", dot: DOT.cold },
    ],
  },
];

/** Job type paired with the configuration recommended for it. */
const PLANNING_GUIDE: { jobType: string; flow: string }[] = [
  {
    jobType: "Light deoiling jobs (minimal residue)",
    flow: "Standard oil remove flow at 75 degrees, 5-minute dwell",
  },
  {
    jobType: "Heavy semi-bleaching jobs (dark dyed fabrics)",
    flow: "Extended semi-bleaching flow at 98 degrees, 7-minute dwell",
  },
  {
    jobType: "Dual requirement jobs",
    flow: "Sequential semi-bleaching followed by oil-remove configuration as needed",
  },
];

/** Metric, then the MG Series figure, then the Jet Dyeing one. */
const COMPARISON: { metric: string; mgSeries: string; jetDyeing: string }[] = [
  {
    metric: "Water consumption",
    mgSeries: "2 to 3 tons/ton of cloth",
    jetDyeing: "15 tons/ton of cloth",
  },
  {
    metric: "Gas consumption",
    mgSeries: "0.4 tons/ton of cloth",
    jetDyeing: "1 ton/ton of cloth",
  },
  {
    metric: "Uniformity",
    mgSeries: "Uniform and controlled",
    jetDyeing: "Uncontrollable",
  },
  {
    metric: "Repeatability",
    mgSeries: "Stable",
    jetDyeing: "Uncontrollable",
  },
  {
    metric: "Shrinkage",
    mgSeries: "Controllable",
    jetDyeing: "Uncontrollable",
  },
];

/** The 34×2px orange rules that flank each sub-heading. */
function Rule() {
  return (
    <Box
      sx={{
        // Shorter on a phone so the longer sub-heading keeps enough room to
        // read rather than wrapping into a narrow stack of words.
        width: { xs: "20px", md: "34px" },
        height: "2px",
        flexShrink: 0,
        background: "#F6891F",
      }}
    />
  );
}

/** Orange sub-heading with a rule either side. */
function SubHeading({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Rule />
      <Typography
        component="h3"
        sx={{
          color: "#F6891F",
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "16px", sm: "18px", md: "24px" },
          fontWeight: 500,
          lineHeight: { xs: "20.8px", sm: "23.4px", md: "31.2px" },
          letterSpacing: 0,
          m: 0,
        }}
      >
        {children}
      </Typography>
      <Rule />
    </Box>
  );
}

/**
 * Filled warning triangle for the callout. Inlined rather than kept in /public
 * because the glyph is knocked out in the callout's own background colour, so
 * the two have to stay in step.
 */
function WarningIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <path
        d="M9.94049 2.64323C9.38829 1.96408 8.78942 1.5 7.99976 1.5C7.21009 1.5 6.6112 1.96408 6.05899 2.64323C5.64746 3.14939 5.21224 3.83738 4.70418 4.68294L4.17032 5.58073L2.88712 7.74413L2.85538 7.79767C2.08961 9.08867 1.48521 10.1076 1.14884 10.9297C0.806424 11.7666 0.683104 12.5372 1.08243 13.2422L1.1612 13.3698C1.57341 13.9833 2.262 14.2445 3.0987 14.3691C3.97769 14.5 5.16438 14.5 6.66776 14.5H6.71656H9.28296H9.33176C10.8351 14.5 12.0218 14.5 12.9008 14.3691C13.7933 14.2362 14.5174 13.9478 14.9171 13.2422L14.9861 13.1094C15.3003 12.4407 15.1717 11.7143 14.8507 10.9297C14.5949 10.3046 14.1844 9.56553 13.6658 8.67967L13.1124 7.74413L11.8292 5.58073L11.7983 5.52871C11.0632 4.28926 10.4817 3.30885 9.94049 2.64323Z"
        fill="#F6891F"
      />
      <path
        d="M7.33301 8.99967V5.99967C7.33301 5.63149 7.63147 5.33301 7.99967 5.33301C8.36787 5.33301 8.66634 5.63149 8.66634 5.99967V8.99967C8.66634 9.36787 8.36787 9.66634 7.99967 9.66634C7.63147 9.66634 7.33301 9.36787 7.33301 8.99967Z"
        fill={CALLOUT_BG}
      />
      <path
        d="M7.33301 11.3343V11.3278C7.33301 10.9596 7.63147 10.6611 7.99967 10.6611C8.36787 10.6611 8.66634 10.9596 8.66634 11.3278V11.3343C8.66634 11.7025 8.36787 12.001 7.99967 12.001C7.63147 12.001 7.33301 11.7025 7.33301 11.3343Z"
        fill={CALLOUT_BG}
      />
    </svg>
  );
}

/** One of the three equal columns in the comparison table. */
function Cell({ children }: { children: ReactNode }) {
  return <Box sx={{ flex: "1 0 0", minWidth: 0 }}>{children}</Box>;
}

/**
 * A planning-guide column. The recommendation column runs about twice the width
 * of the job type it belongs to; both go full width once the rows stack.
 */
function GuideCell({ wide, children }: { wide: boolean; children: ReactNode }) {
  return (
    <Box
      sx={{
        flex: { xs: "1 1 auto", md: wide ? "2 0 0" : "1 0 0" },
        alignSelf: { xs: "stretch", md: "auto" },
        minWidth: 0,
      }}
    >
      {children}
    </Box>
  );
}

/** Tab 5 panel for the FOUND MG Series page. */
export default function ProductionCapacitySection() {
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
          168px side padding) so it stays centred on ultrawide displays. Its
          64px gap separates the heading from each sub-section. */}
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
          Production Capacity
        </Typography>

        {/* Sub-heading and the flows it labels, 24px apart. */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            alignSelf: "stretch",
          }}
        >
          <SubHeading>Process flow by configuration</SubHeading>

          {/* The two flows, side by side. */}
          <Box
            sx={{
              display: "grid",
              // Two columns only from desktop up: at tablet width each flow
              // would be ~270px, which wraps the step qualifiers badly.
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                md: "repeat(2, minmax(0, 1fr))",
              },
              gap: { xs: "32px", md: "24px" },
              alignSelf: "stretch",
            }}
          >
            {FLOWS.map((flow) => (
              <Box
                key={flow.title}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "24px",
                }}
              >
                <Typography
                  component="h4"
                  sx={{
                    color: "#111",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "26px",
                    letterSpacing: 0,
                    m: 0,
                  }}
                >
                  {flow.title}
                </Typography>

                {/* Step rows. Each carries its own bottom rule, so the last row
                    closes the list the same way the ones above it do. */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "stretch",
                  }}
                >
                  {flow.steps.map((step, index) => (
                    <Box
                      key={`${step.label}-${index}`}
                      sx={{
                        display: "flex",
                        padding: "4px 0",
                        alignItems: "center",
                        gap: "16px",
                        alignSelf: "stretch",
                        borderBottom: "1px solid #E0E0E0",
                      }}
                    >
                      {/* The dot rides in a fixed 24×48 slot, which is what
                          gives every row its height and keeps the labels on a
                          common left edge. */}
                      <Box
                        sx={{
                          display: "flex",
                          width: "24px",
                          height: "48px",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        {/* 18px overall with a 2px white ring, matching the
                            authored icon's centred stroke. */}
                        <Box
                          sx={{
                            boxSizing: "border-box",
                            width: "18px",
                            height: "18px",
                            flexShrink: 0,
                            borderRadius: "50%",
                            border: "2px solid #FFF",
                            background: step.dot,
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "8px",
                          minWidth: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#111",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "22.4px",
                          }}
                        >
                          {step.label}
                        </Typography>
                        {step.detail && (
                          <Typography
                            sx={{
                              color: "#707070",
                              fontFamily: "Inter, sans-serif",
                              fontSize: "12px",
                              fontWeight: 500,
                              lineHeight: "19.2px",
                            }}
                          >
                            — {step.detail}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Sub-heading and the comparison table it labels. */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            alignSelf: "stretch",
          }}
        >
          <SubHeading>
            Resource consumption comparison (MG series vs. Jet Dyeing)
          </SubHeading>

          {/* Header band, then 16px, then the rows. Three columns of prose only
              fit from desktop up; below that the stacked variant below takes
              over. */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              gap: "16px",
              alignSelf: "stretch",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  padding: "12px 16px",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "8px",
                  background: "#EFEFEF",
                }}
              >
                <Cell>
                  <Typography
                    sx={{
                      color: "#333",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "25.6px",
                    }}
                  >
                    Metric
                  </Typography>
                </Cell>
                <Cell>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Typography
                      sx={{
                        color: "#F6891F",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "25.6px",
                      }}
                    >
                      MG Series
                    </Typography>
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        flexShrink: 0,
                        borderRadius: "50%",
                        background: "#F6891F",
                      }}
                    />
                  </Box>
                </Cell>
                <Cell>
                  <Typography
                    sx={{
                      color: "#707070",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "25.6px",
                    }}
                  >
                    Jet Dyeing
                  </Typography>
                </Cell>
              </Box>

              {/* Rows */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {COMPARISON.map((row, index) => (
                  <Box
                    key={row.metric}
                    sx={{
                      display: "flex",
                      padding: "14px 16px",
                      alignItems: "center",
                      alignSelf: "stretch",
                      borderBottom: "1px solid #E0E0E0",
                      // Zebra striping: every other row is tinted, starting with
                      // the second, so the banding survives adding metrics.
                      background: index % 2 === 1 ? "#F9FAFB" : "#FFF",
                    }}
                  >
                    <Cell>
                      <Typography
                        sx={{
                          color: "#333",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 500,
                          lineHeight: "22.4px",
                        }}
                      >
                        {row.metric}
                      </Typography>
                    </Cell>
                    <Cell>
                      <Typography
                        sx={{
                          color: "#111",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "22.4px",
                        }}
                      >
                        {row.mgSeries}
                      </Typography>
                    </Cell>
                    <Cell>
                      <Typography
                        sx={{
                          color: "#707070",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 500,
                          lineHeight: "22.4px",
                        }}
                      >
                        {row.jetDyeing}
                      </Typography>
                    </Cell>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Phone and tablet: the same rows stacked, with the column headings
              moved inline as labels so no header band is needed. */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              alignSelf: "stretch",
              borderTop: "1px solid #E0E0E0",
            }}
          >
            {COMPARISON.map((row, index) => (
              <Box
                key={row.metric}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "14px 16px",
                  borderBottom: "1px solid #E0E0E0",
                  background: index % 2 === 1 ? "#F9FAFB" : "#FFF",
                }}
              >
                <Typography
                  sx={{
                    color: "#333",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "22.4px",
                  }}
                >
                  {row.metric}
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "88px minmax(0, 1fr)",
                    columnGap: "8px",
                    rowGap: "4px",
                    alignItems: "baseline",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F6891F",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      lineHeight: "19.2px",
                    }}
                  >
                    MG Series
                  </Typography>
                  <Typography
                    sx={{
                      color: "#111",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "22.4px",
                    }}
                  >
                    {row.mgSeries}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#707070",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      lineHeight: "19.2px",
                    }}
                  >
                    Jet Dyeing
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
                    {row.jetDyeing}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Sub-heading, the planning table, and the closing callout — 24px
            between each. Authored at 900px rather than the full 1104px content
            width, so it sits narrower and centred. */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <SubHeading>Production Planning Guide</SubHeading>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "stretch",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                padding: "8px 0",
                alignItems: "flex-start",
                gap: { xs: "4px", md: "24px" },
                alignSelf: "stretch",
                borderBottom: "1px solid #B8B8B8",
              }}
            >
              <GuideCell wide={false}>
                <Typography
                  sx={{
                    color: "#333",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "25.6px",
                  }}
                >
                  Job type
                </Typography>
              </GuideCell>
              <GuideCell wide>
                <Typography
                  sx={{
                    color: "#333",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "25.6px",
                  }}
                >
                  Recommended flow
                </Typography>
              </GuideCell>
            </Box>

            {/* Rows */}
            {PLANNING_GUIDE.map((row) => (
              <Box
                key={row.jobType}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  padding: "16px 0",
                  // Centred so a single-line recommendation sits against the
                  // middle of a job type that wraps to two lines.
                  alignItems: { xs: "flex-start", md: "center" },
                  gap: { xs: "4px", md: "24px" },
                  alignSelf: "stretch",
                  borderBottom: "1px solid #EFEFEF",
                }}
              >
                <GuideCell wide={false}>
                  <Typography
                    sx={{
                      color: "#707070",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "22.4px",
                    }}
                  >
                    {row.jobType}
                  </Typography>
                </GuideCell>
                <GuideCell wide>
                  <Typography
                    sx={{
                      color: "#111",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "22.4px",
                    }}
                  >
                    {row.flow}
                  </Typography>
                </GuideCell>
              </Box>
            ))}
          </Box>

          {/* Closing callout */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              alignSelf: "stretch",
              padding: "16px",
              borderRadius: "12px",
              background: CALLOUT_BG,
            }}
          >
            <Box
              sx={{ display: "flex", height: "20.8px", alignItems: "center" }}
            >
              <WarningIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                minWidth: 0,
              }}
            >
              <Typography
                sx={{
                  color: "#F6891F",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "20.8px",
                }}
              >
                Recommended Planning Consideration
              </Typography>
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "20.8px",
                }}
              >
                Resource savings of 80 to 85% on water and 60% on gas compared
                to jet dyeing make the MG Series the most cost-effective choice
                for high-volume synthetic fabric pretreatment operations.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
