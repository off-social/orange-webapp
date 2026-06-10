import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ProductSidebar from "./ProductSidebar";

const LARGE_CARD = {
  icon: <Image src="/Kyocera.png" alt="Kyocera" width={80} height={80} style={{ objectFit: "contain" }} />,
  title: "Kyocera",
  desc: "16× Industrial printheads · Japan",
};

const SMALL_CARDS = [
  {
    icon: <Image src="/Vision-System.png" alt="Vision System" width={72} height={72} style={{ objectFit: "contain" }} />,
    title: "Vision System",
    desc: "Proprietary real-time scanner",
  },
  {
    icon: <Image src="/Color-Management.png" alt="Color Management" width={72} height={72} style={{ objectFit: "contain" }} />,
    title: "Color Management",
    desc: "Professional calibration software",
  },
  {
    icon: <Image src="/Ink-System.png" alt="Ink System" width={72} height={72} style={{ objectFit: "contain" }} />,
    title: "Ink System",
    desc: "High-precision dye ratio mixing",
  },
  {
    icon: <Image src="/Drive-System.png" alt="Drive System" width={72} height={72} style={{ objectFit: "contain" }} />,
    title: "Drive System",
    desc: "Advanced industrial conveying",
  },
];

function ComponentCard({
  icon,
  title,
  desc,
  fullWidth = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  fullWidth?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px",
        borderRadius: "16px",
        background: "#FFF",
        alignSelf: fullWidth ? "stretch" : "auto",
        flex: fullWidth ? "unset" : "1 0 0",
      }}
    >
      {/* Icon */}
      <Box>{icon}</Box>

      {/* Text */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "25.6px",
          }}
        >
          {title}
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
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default function GlobalComponents() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "100px 168px" },
        alignItems: "flex-start",
        gap: "24px",
        alignSelf: "stretch",
        background: "#F2F2F2",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Sidebar */}
      <Box sx={{ display: { xs: "none", md: "block" }, flexShrink: 0 }}>
        <ProductSidebar />
      </Box>

      {/* Right content */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: "0", md: "0 94px" },
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "64px",
          flex: "1 0 0",
          width: { xs: "100%", md: "auto" },
        }}
      >
        {/* Heading + description */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "52px" },
              letterSpacing: "-1px",
            }}
          >
            Premium Global Components
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: { xs: 500, md: 400 },
              lineHeight: { xs: "19.2px", md: "25.6px" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Tempor at a sed phasellus.
            Amet morbi eget dignissim non venenatis pellentesque purus lectus
            ullamcorper.
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignSelf: "stretch",
          }}
        >
          {/* Large card — Kyocera */}
          <ComponentCard {...LARGE_CARD} fullWidth />

          {/* 2×2 grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: "16px",
              alignSelf: "stretch",
            }}
          >
            {SMALL_CARDS.map((card) => (
              <ComponentCard key={card.title} {...card} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
