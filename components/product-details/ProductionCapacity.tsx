"use client";

import { useProduct } from "@/data/ProductContext";
import BoltIcon from "@mui/icons-material/Bolt";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function SpeedRow({
  res,
  pass,
  speed,
  label,
  isLast,
  animated,
  rowIndex,
  maxSpeed,
}: {
  res: string;
  pass: string;
  speed: number;
  label: string;
  isLast: boolean;
  animated: boolean;
  rowIndex: number;
  maxSpeed: number;
}) {
  const pct = (speed / maxSpeed) * 100;
  const delay = `${rowIndex * 200}ms`;

  const bar = (
    <Box
      sx={{
        width: "100%",
        height: "8px",
        borderRadius: "8px",
        bgcolor: "#E0E0E0",
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
          transition: `width 1.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
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
              color: "#404040",
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
              color: "#404040",
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
            color: "#707070",
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
            width: { md: "130px", lg: "150px" },
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <Typography
            sx={{
              color: "#404040",
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
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "19.2px",
            }}
          >
            {pass}
          </Typography>
        </Box>
        <Box sx={{ flex: "1 1 0", minWidth: 0 }}>{bar}</Box>
        <Typography
          sx={{
            width: { md: "130px", lg: "150px" },
            flexShrink: 0,
            textAlign: "right",
            color: "#404040",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
          }}
        >
          {label}
        </Typography>
      </Box>

      {!isLast && <Box sx={{ height: "1px", bgcolor: "#E0E0E0" }} />}
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
          color: "#707070",
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
  const { productionCapacity } = useProduct();
  const { maxSpeed, regularMode, specialMode, description } =
    productionCapacity;
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "80px 40px", lg: "80px 168px 40px" },
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        background: "#FFF",
      }}
    >
      {/* Centered content column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          width: "100%",
          maxWidth: "730px",
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
                color: "#707070",
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
                color: "#333",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: 500,
                lineHeight: { xs: "36px", md: "52px" },
                letterSpacing: { xs: "0", md: "-1px" },
              }}
            >
              Mode & Resolution
            </Typography>
          </Box>
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

        {/* Regular Mode */}
        <Box
          ref={sectionRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            width: "100%",
          }}
        >
          <SectionHeader
            icon={<BoltIcon sx={{ fontSize: "14px", color: "#707070" }} />}
            label="Regular Mode"
          />
          <Box sx={{ mt: "8px" }}>
            {regularMode.map((row, i) => (
              <SpeedRow
                key={row.res}
                {...row}
                isLast={i === regularMode.length - 1}
                animated={animated}
                rowIndex={i}
                maxSpeed={maxSpeed}
              />
            ))}
          </Box>
        </Box>

        {/* Special / vision mode (optional) */}
        {specialMode && (
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
                  src={specialMode.iconSrc}
                  alt={specialMode.label}
                  width={14}
                  height={14}
                />
              }
              label={specialMode.label}
            />
            <Box sx={{ mt: "8px" }}>
              {specialMode.rows.map((row, i) => (
                <SpeedRow
                  key={row.res}
                  {...row}
                  isLast={i === specialMode.rows.length - 1}
                  animated={animated}
                  rowIndex={regularMode.length + i}
                  maxSpeed={maxSpeed}
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
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "19.2px",
                }}
              >
                {specialMode.note}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
