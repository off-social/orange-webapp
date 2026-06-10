"use client";

import BoltIcon from "@mui/icons-material/Bolt";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductSidebar from "./ProductSidebar";

const MAX_SPEED = 190;

const REGULAR_MODE = [
  {
    res: "508 × 1200 dpi",
    pass: "2 pass",
    speed: 190,
    label: "Up to 190 Lm/hr",
  },
  {
    res: "600 × 1200 dpi",
    pass: "2 pass",
    speed: 170,
    label: "Up to 170 Lm/hr",
  },
  {
    res: "508 × 1800 dpi",
    pass: "3 pass",
    speed: 140,
    label: "Up to 140 Lm/hr",
  },
  {
    res: "600 × 1800 dpi",
    pass: "3 pass",
    speed: 120,
    label: "Up to 120 Lm/hr",
  },
];

const POSITION_PRO_MODE = [
  {
    res: "600 × 1200 dpi",
    pass: "2 pass",
    speed: 105,
    label: "Up to 105 Lm/hr",
  },
];

function SpeedRow({
  res,
  pass,
  speed,
  label,
  isLast,
  animated,
  rowIndex,
}: {
  res: string;
  pass: string;
  speed: number;
  label: string;
  isLast: boolean;
  animated: boolean;
  rowIndex: number;
}) {
  const pct = (speed / MAX_SPEED) * 100;
  const delay = `${rowIndex * 120}ms`;

  const bar = (
    <Box
      sx={{
        width: "100%",
        height: "8px",
        borderRadius: "8px",
        bgcolor: "#2D2D2D",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "8px",
          width: animated ? `${pct}%` : "0%",
          borderRadius: "8px",
          bgcolor: "#F6891F",
          transition: `width 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
        }}
      />
    </Box>
  );

  return (
    <Box>
      {/* Mobile layout */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          gap: "8px",
          py: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            {res}
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
            {label}
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#666",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "19.2px",
          }}
        >
          {pass}
        </Typography>
        {bar}
      </Box>

      {/* Desktop layout */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: "16px",
          py: "16px",
        }}
      >
        <Box
          sx={{
            minWidth: "130px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            {res}
          </Typography>
          <Typography
            sx={{
              color: "#666",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "19.2px",
            }}
          >
            {pass}
          </Typography>
        </Box>
        <Box sx={{ flex: "1 0 0" }}>{bar}</Box>
        <Typography
          sx={{
            minWidth: "120px",
            textAlign: "right",
            color: "#FFF",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
          }}
        >
          {label}
        </Typography>
      </Box>

      {!isLast && <Box sx={{ height: "1px", bgcolor: "#222" }} />}
    </Box>
  );
}

function SectionHeader({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {icon}
      <Typography
        sx={{
          color: "#B8B8B8",
          fontFamily: "Inter, sans-serif",
          fontSize: "10px",
          fontWeight: 500,
          lineHeight: "16px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function ProductionCapacity() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "100px 168px" },
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "24px",
        alignSelf: "stretch",
        background: "#111",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Sidebar — hidden on mobile */}
      <Box sx={{ display: { xs: "none", md: "block" }, flexShrink: 0 }}>
        <ProductSidebar dark />
      </Box>

      {/* Right content */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: "0", md: "0 94px" },
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          flex: "1 0 0",
          width: { xs: "100%", md: "auto" },
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#B8B8B8",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "20px", md: "32px" },
                fontWeight: 500,
                lineHeight: { xs: "26px", md: "41.6px" },
                letterSpacing: "-1px",
              }}
            >
              Print speed by
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: 500,
                lineHeight: { xs: "36px", md: "52px" },
                letterSpacing: "-1px",
              }}
            >
              Mode & Resolution
            </Typography>
          </Box>
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
            Lorem ipsum dolor sit amet consectetur. Tempor at a sed phasellus.
            Amet morbi eget dignissim non venenatis pellentesque purus lectus
            ullamcorper.
          </Typography>
        </Box>

        {/* Regular Mode */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            width: "100%",
          }}
        >
          <SectionHeader
            icon={<BoltIcon sx={{ fontSize: "14px", color: "#B8B8B8" }} />}
            label="Regular Mode"
          />
          <Box sx={{ mt: "8px" }}>
            {REGULAR_MODE.map((row, i) => (
              <SpeedRow
                key={row.res}
                {...row}
                isLast={i === REGULAR_MODE.length - 1}
                animated={animated}
                rowIndex={i}
              />
            ))}
          </Box>
        </Box>

        {/* Position Pro Mode */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            width: "100%",
          }}
        >
          <SectionHeader
            icon={
              <Image
                src="/align-selectionIcon.svg"
                alt="Position Pro Mode"
                width={14}
                height={14}
              />
            }
            label="Position Pro Mode"
          />
          <Box sx={{ mt: "8px" }}>
            {POSITION_PRO_MODE.map((row, i) => (
              <SpeedRow
                key={row.res}
                {...row}
                isLast={i === POSITION_PRO_MODE.length - 1}
                animated={animated}
                rowIndex={REGULAR_MODE.length + i}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mt: "12px",
            }}
          >
            <Image
              src="/eyeIcon.svg"
              alt="eye"
              width={16}
              height={16}
              style={{ flexShrink: 0 }}
            />
            <Typography
              sx={{
                color: "#666",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "19.2px",
              }}
            >
              Vision guided alignment active optimal for textured fabrics
              requiring precise registration.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
