"use client";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import PublicIcon from "@mui/icons-material/Public";
import { Box, SvgIconProps, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Installed Machines",
    Icon: LocalPrintshopIcon,
  },
  { value: 25, suffix: "+", label: "Countries Served", Icon: PublicIcon },
  {
    value: 15,
    suffix: "+",
    label: "Years of Experience",
    Icon: EmojiEventsIcon,
  },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  Icon,
  started,
  showDivider,
}: {
  value: number;
  suffix: string;
  label: string;
  Icon: React.ComponentType<SvgIconProps>;
  started: boolean;
  showDivider: boolean;
}) {
  const count = useCountUp(value, 1800, started);

  return (
    <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.3,
          py: { xs: 1.5, md: 2 },
        }}
      >
        <Icon sx={{ fontSize: { xs: "26px", md: "34px" }, color: "#222" }} />

        <Typography
          sx={{
            fontSize: { xs: "28px", md: "42px" },
            fontWeight: 700,
            color: "#F7931E",
            lineHeight: 1.1,
          }}
        >
          {count}
          {suffix}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "11px", md: "13px" },
            fontWeight: 400,
            color: "#555",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          {label}
        </Typography>
      </Box>

      {showDivider && (
        <Box
          sx={{
            width: "1px",
            height: { xs: "60px", md: "75px" },
            bgcolor: "#D9D9D9",
            flexShrink: 0,
          }}
        />
      )}
    </Box>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <Box
      ref={ref}
      // width: "80%" → mobile pe 100% kar do
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", md: "80%" }, // ✅ yeh change karo
        maxWidth: { xs: "100%", md: "650px" },
        mx: "auto",
        py: { xs: 1, md: 2 },
        px: { xs: 1, md: 2 },
        border: "1px solid #E0E0E0",
        borderRadius: "16px",
        bgcolor: "#fff",
      }}
    >
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          Icon={stat.Icon}
          started={started}
          showDivider={index < stats.length - 1}
        />
      ))}
    </Box>
  );
}
