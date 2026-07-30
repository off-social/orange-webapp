"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const DESCRIPTION =
  "Engineered with smart automation and precision technology for reliable, efficient, and high-performance textile printing";

type Feature = {
  /** Path under /public. Left out until the artwork lands; the card keeps the
   *  64px slot reserved either way so the grid never reflows when it arrives. */
  icon?: string;
  title: string;
  desc: string;
};

/** Cards fill a 2-column grid in author order. */
const FEATURES: Feature[] = [
  {
    icon: "/ScrollRollerFabricUnfoldingSystem.svg",
    title: "Scroll Roller Fabric Unfolding System",
    desc: "Before each washing drum, a scroll roller unfolds the rolled edges of the fabric so it enters the washing tank in the flattest possible state, ensuring a uniform oil removal effect across the full width.",
  },
  {
    icon: "/IndependentTensionControlBetweenTanks.svg",
    title: "Independent Tension Control Between Tanks",
    desc: "A dedicated tension control system positioned between each washing tank meets the specific tension requirements of different fabric types, preventing stretch and distortion throughout the processing line.",
  },
  {
    icon: "/IndependentDrumDriveSystem.svg",
    title: "Independent Drum Drive System",
    desc: "Every washing drum is driven by its own electric motor, ensuring fabric runs under consistently low tension rather than being pulled by a shared drive system that introduces tension variation.",
  },
  {
    icon: "/IndependentFilterandFoamFiltrationSystem.svg",
    title: "Independent Filter and Foam Filtration System",
    desc: "Every washing tank carries its own filter system plus a flat foam filter, preventing repeated oil contamination from carrying over between tanks and maintaining bath cleanliness throughout the process.",
  },
  {
    icon: "/FlexibleStackingUnit.svg",
    title: "Flexible Stacking Unit",
    desc: "An integrated stacking unit increases fabric weight and shrinkage control, delivering a significant quality effect during oil removal and shrinkage processing on premium synthetic fabrics.",
  },
  {
    icon: "/DualProcessFlowCapability.svg",
    title: "Dual Process Flow Capability",
    desc: "Configurable scouring tank supports both semi-bleaching flow (7-minute dwell at 98 degrees) and oil-remove flow (5-minute relax dwell at 75 degrees), letting one machine handle two distinct pretreatment needs.",
  },
  {
    icon: "/Crease-FreeOpen-WidthProcessing.svg",
    title: "Crease-Free Open-Width Processing",
    desc: "Open-width low-tension design prevents the creasing problems common in jet dyeing machines, making the MG Series particularly suitable for pretreating dark-coloured dyed fabrics prone to crease marks.",
  },
  {
    icon: "/Multi-StageTemperature-GradedWashing.svg",
    title: "Multi-Stage Temperature-Graded Washing",
    desc: "Sequential hot, warm, and cold wash stages following each scouring step ensure thorough residue removal and gradual fabric stabilisation before the fabric exits the line.",
  },
];

/** Tab 3 panel for the FOUND MG Series page. */
export default function EngineeringFeaturesSection() {
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
      {/* Content column: heading group, then 40px, then the card grid.
          The design's 187px side inset is really "730px wide, centred" at the
          1440px frame (1440 - 336 section padding - 374 = 730). Expressed as a
          cap instead of padding it holds at every width — a literal 187px
          would let the grid sprawl to 1850px on a 2560px screen. */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          flex: "1 0 0",
          maxWidth: "730px",
        }}
      >
        {/* Heading group — 8px between the title and the sub-line. */}
        <Box
          sx={{
            display: "flex",
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
            Engineering Features
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", md: "22.4px" },
            }}
          >
            {DESCRIPTION}
          </Typography>
        </Box>

        {/* Card grid — one column on phones, two from tablet up. */}
        <Box
          sx={{
            display: "inline-grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, minmax(0, 1fr))",
            },
            gridAutoFlow: "row",
            rowGap: { xs: "12px", sm: "16px" },
            columnGap: "16px",
            alignSelf: "stretch",
          }}
        >
          {FEATURES.map((feature) => (
            <Box
              key={feature.title}
              sx={{
                display: "flex",
                // 292px is the authored card height. It holds from tablet up;
                // on a phone the copy reflows much taller in a single column,
                // so 292px becomes the floor rather than a hard cap.
                height: { xs: "auto", sm: "292px" },
                minHeight: "292px",
                padding: "24px",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                alignSelf: "start",
                gridRow: "span 1",
                gridColumn: "span 1",
                justifySelf: "stretch",
                borderRadius: "16px",
                background: "#FFF",
              }}
            >
              <Box
                sx={{
                  width: "64px",
                  height: "64px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {feature.icon && (
                  <Image
                    src={feature.icon}
                    alt=""
                    width={64}
                    height={64}
                    aria-hidden
                  />
                )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    color: "#333",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25.6px",
                    m: 0,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#707070",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "19.2px",
                  }}
                >
                  {feature.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
