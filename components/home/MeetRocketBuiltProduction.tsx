"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const STATS = [
  { top: "Up to 75,000", bottom: "LM/day Production" },
  { top: "4 to 8", bottom: "Color Modes" },
  { top: "Up to 1850 mm", bottom: "Print Width" },
  { top: "Designed for", bottom: "Continuous Industrial Use" },
];

const MeetRocketBuiltProduction = () => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* ── MOBILE layout ── */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          px: "24px",
          pt: "64px",
          pb: "64px",
          backgroundImage: "url('/rocket-section-mobilelast1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        {/* Title + desc + button */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", width: "100%" }}>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "32px",
              letterSpacing: "-0.5px",
              width: "100%",
              textAlign: "center",
            }}
          >
            Meet, Rocket
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: "20.8px",
              textAlign: "center",
              width: "100%",
            }}
          >
            Designed specifically to handle the demands of high-volume
            production environments, this system ensures consistent
            performance and reliability even under the most intense workloads.
          </Typography>
          <Box sx={{ mt: "32px", width: "100%" }}>
            <Button
              sx={{
                width: "100%",
                padding: "13px 24px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "8px",
                border: "1px solid #E0E0E0",
                background: "#FFF",
                color: "#111",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "20.8px",
                "&:hover": { background: "#f5f5f5" },
              }}
            >
              Know More
              <Image src="/Arrow - Right.svg" alt="arrow right" width={16} height={16} style={{ objectFit: "contain", filter: "brightness(0)" }} />
            </Button>
          </Box>
        </Box>

        {/* Spacer — machine shows through background */}
        <Box sx={{ height: "220px" }} />

        {/* Stats — vertical stack */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            textAlign: "center",
            width: "100%",
          }}
        >
          {STATS.map((stat, i) => (
            <Box key={i} sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "28px",
                  fontWeight: 500,
                  lineHeight: "36px",
                  letterSpacing: "-0.5px",
                }}
              >
                {stat.top}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22px",
                }}
              >
                {stat.bottom}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── DESKTOP layout ── */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "relative",
          width: "100%",
        }}
      >
        {/* Desktop background image */}
        <Box
          sx={{ width: "100%", aspectRatio: "206/127", position: "relative" }}
        >
          <Image
            src="/meet-rocket1.png"
            alt="Meet Rocket"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </Box>

        {/* Centered text overlay */}
        <Box
          sx={{
            position: "absolute",
            top: "12%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "55%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: "52px",
              letterSpacing: "-1px",
            }}
          >
            Meet, Rocket
          </Typography>
          <Typography
            sx={{
              color: "#E0E0E0",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              maxWidth: "620px",
            }}
          >
            Designed specifically to handle the demands of high-volume
            production environments, this system ensures consistent performance
            and reliability even under the most intense workloads.
          </Typography>
          <Box sx={{ mt: "24px" }}>
            <Button
              sx={{
                display: "flex",
                width: "170px",
                padding: "16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "8px",
                border: "1px solid #E0E0E0",
                background: "#FFF",
                color: "#111",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "20.8px",
                "&:hover": { background: "#f5f5f5" },
              }}
            >
              Know More
              <Image
                src="/Arrow - Right.svg"
                alt="arrow right"
                width={16}
                height={16}
                style={{ objectFit: "contain", filter: "brightness(0)" }}
              />
            </Button>
          </Box>
        </Box>

        {/* Dark gradient at bottom */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "45%",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.75) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Bottom stats row */}
        <Box
          sx={{
            position: "absolute",
            bottom: "6%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "78%",
            display: "flex",
            justifyContent: "space-between",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {STATS.map((stat, i) => (
            <Box
              key={i}
              sx={{
                flex: "1 1 0",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.3)"
                    : "none",
                px: "16px",
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "var(--font-stack-sans-headline)",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "31.2px",
                }}
              >
                {stat.top}
              </Typography>
              <Typography
                sx={{
                  color: "#E0E0E0",
                  fontFamily: "var(--font-stack-sans-headline)",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                  mt: "4px",
                }}
              >
                {stat.bottom}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MeetRocketBuiltProduction;
