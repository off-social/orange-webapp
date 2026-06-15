import { Box, Typography } from "@mui/material";

const innerPad = { xs: "0", lg: "0 188px" };

const ADVANTAGES = [
  {
    img: "/WaterlessPrinting.png",
    title: "Waterless Printing",
    desc: "No washing, no steaming, saves up to 98% water.",
  },
  {
    img: "/High-SpeedProduction.png",
    title: "High-Speed Production",
    desc: "Compatible with machines that print 60,000+ LM/day.",
  },
  {
    img: "/Eco-Friendly.png",
    title: "Eco-Friendly",
    desc: "Minimal chemical discharge, lower carbon footprint.",
  },
  {
    img: "/Sharp-VibrantPrints.png",
    title: "Sharp, Vibrant Prints",
    desc: "Ink sits on top of fabric for superior color payoff.",
  },
  {
    img: "/One-StepProcess.png",
    title: "One-Step Process",
    desc: "Reduces steps, time, labor, and energy usage.",
  },
  {
    img: "/LowMaintenance.png",
    title: "Low Maintenance",
    desc: "Fewer machine cleaning cycles and stable ink system.",
  },
];

function AdvantageCard({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "12px", md: "24px" },
        flexDirection: "column",
        alignItems: "flex-start",
        gap: { xs: "8px", md: "24px" },
        borderRadius: "16px",
        border: "1px solid #E0E0E0",
        background: "#FFF",
        boxSizing: "border-box",
        width: "100%",
        flex: { md: "1 1 280px" },
        minWidth: { md: 0 },
        cursor: "default",
        transition:
          "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.09)",
          borderColor: "#F6891F",
        },
      }}
    >
      <Box
        component="img"
        src={img}
        alt=""
        sx={{
          width: "83px",
          height: "75px",
          aspectRatio: "83/75",
          objectFit: "contain",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 600,
            lineHeight: { xs: "22.4px", md: "25.6px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px" },
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default function GreenEdgeBenefitsKeyAdvantages() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: innerPad,
        flexDirection: "column",
        alignItems: "stretch",
        gap: "16px",
        alignSelf: "stretch",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Label */}
      <Typography
        sx={{
          color: "#333",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Key Advantages:
      </Typography>

      {/* Cards — 2-col grid on mobile, flex-wrap on desktop */}
      <Box
        sx={{
          display: { xs: "grid", md: "flex" },
          gridTemplateColumns: { xs: "1fr 1fr" },
          flexWrap: { md: "wrap" },
          alignItems: { md: "flex-start" },
          alignContent: { md: "flex-start" },
          gap: { xs: "12px", md: "24px" },
        }}
      >
        {ADVANTAGES.map((item) => (
          <AdvantageCard key={item.title} {...item} />
        ))}
      </Box>
    </Box>
  );
}
