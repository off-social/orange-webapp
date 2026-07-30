"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

type UseCase = {
  /** Path under /public. Left out until the artwork lands; the card keeps the
   *  32px slot reserved either way so the grid never reflows when it arrives. */
  icon?: string;
  title: string;
  desc: string;
};

/** Cards fill a 3-column grid in author order. */
const USE_CASES: UseCase[] = [
  {
    icon: "/PolyesterBrocadeSpandexManufacturing.svg",
    title: "Polyester Brocade Spandex Manufacturing",
    desc: "Purpose-built for synthetic stretch fabric producers needing low-tension deoiling that preserves stretch recovery and prevents the distortion common with high-tension jet dyeing equipment.",
  },
  {
    icon: "/Dark-ColoredFabricPretreatment.svg",
    title: "Dark-Colored Fabric Pretreatment",
    desc: "Crease-free open-width processing makes the MG Series especially valuable for pretreating dark-coloured dyed fabrics, where crease marks from jet dyeing machines are most visible and costly.",
  },
  {
    icon: "/High-QualitySyntheticFabricProducers.svg",
    title: "High-Quality Synthetic Fabric Producers",
    desc: "Flexible stacking unit and controlled shrinkage management suit manufacturers producing premium synthetic fabrics where consistent weight, shrinkage, and hand-feel are critical quality benchmarks.",
  },
  {
    icon: "/Water-Gas-ConsciousProcessingOperations.svg",
    title: "Water & Gas-Conscious Processing Operations",
    desc: "Water consumption as low as 2 to 3 tons per ton of cloth versus 15 tons on jet dyeing machines makes the MG Series the clear choice for mills prioritising resource efficiency and sustainability targets.",
  },
  {
    icon: "/MillsTransitioningfromJetDyeingEquipment.svg",
    title: "Mills Transitioning from Jet Dyeing Equipment",
    desc: "Manufacturers looking to replace uncontrollable uniformity, repeatability, and shrinkage outcomes from jet dyeing with stable, controllable, repeatable results across every production batch.",
  },
  {
    icon: "/DeoilingandSemi-BleachingOperations.svg",
    title: "Combined Deoiling and Semi-Bleaching Operations",
    desc: "Dual process flow configuration suits mills that need both oil removal and semi-bleaching capability without investing in two separate dedicated processing lines.",
  },
];

/** Tab 4 panel for the FOUND MG Series page. */
export default function IdealForSection() {
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
      {/* Content column: heading, then 40px, then the card grid. 1104px is the
          authored grid width (1440 frame less the 168px side padding), applied
          as a cap so it stays centred rather than sprawling on ultrawide. */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
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
          Ideal for
        </Typography>

        {/* Card grid — 1 column on phones, 2 on tablets, 3 from desktop up. */}
        <Box
          sx={{
            display: "inline-grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gridAutoFlow: "row",
            rowGap: "16px",
            columnGap: "16px",
            alignSelf: "stretch",
          }}
        >
          {USE_CASES.map((useCase) => (
            <Box
              key={useCase.title}
              sx={{
                display: "flex",
                padding: "16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                // Stretching to the grid row keeps every card in a row the same
                // height even though the copy lengths differ.
                alignSelf: "stretch",
                gridRow: "span 1",
                gridColumn: "span 1",
                justifySelf: "stretch",
                borderRadius: "16px",
                border: "1px solid #E0E0E0",
                background: "#FFF",
              }}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {useCase.icon && (
                  <Image
                    src={useCase.icon}
                    alt=""
                    width={32}
                    height={32}
                    aria-hidden
                  />
                )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    color: "#333",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "22.4px",
                    m: 0,
                  }}
                >
                  {useCase.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#707070",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "19.2px",
                  }}
                >
                  {useCase.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
