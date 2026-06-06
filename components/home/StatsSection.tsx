"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Machine Installed" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 15, suffix: "+", label: "Years of Experience" },
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
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const count = useCountUp(value, 1800, started);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        gap: "4px",
      }}
    >
      <Typography
        sx={{
          color: "#F6891F",
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "48px", md: "72px" },
          fontWeight: 500,
          lineHeight: "normal",
          letterSpacing: "-1px",
        }}
      >
        {count}
        {suffix}
      </Typography>

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
        {label}
      </Typography>
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
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "800px",
        mx: "auto",
        gap: { xs: "16px", md: "32px" },
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 4 },
      }}
    >
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          started={started}
        />
      ))}
    </Box>
  );
}
