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
          display: { xs: "flex", sm: "none" },
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
            Introducing, Rocket
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
          display: { xs: "none", sm: "block" },
          position: "relative",
          width: "100%",
        }}
      >
        {/* Desktop background image */}
        <Box
          sx={{ width: "100%", aspectRatio: "1442 / 817", position: "relative" }}
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
            top: "9.8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: { sm: "70%", md: "51%" },
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
              fontSize: { sm: "28px", md: "40px" },
              fontWeight: 500,
              lineHeight: { sm: "36px", md: "52px" },
              letterSpacing: { sm: "-0.5px", md: "-1px" },
            }}
          >
            Introducing, Rocket
          </Typography>
          <Typography
            sx={{
              color: "#E0E0E0",
              fontSize: { sm: "13px", md: "14px" },
              fontWeight: 500,
              lineHeight: { sm: "20px", md: "22.4px" },
              maxWidth: { sm: "480px", md: "728px" },
            }}
          >
            Designed specifically to handle the demands of high-volume
            production environments, this system ensures consistent performance
            and reliability even under the most intense workloads.
          </Typography>
          <Box sx={{ mt: "32px" }}>
            <Button
              sx={{
                display: "flex",
                width: "200px",
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
            height: "28%",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.75) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Bottom stats row */}
        <Box
          sx={{
            position: "absolute",
            bottom: "9.8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "76.5%",
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
                  fontFamily: "Inter, sans-serif",
                  fontSize: { sm: "16px", md: "24px" },
                  fontWeight: 500,
                  lineHeight: { sm: "22px", md: "31.2px" },
                  letterSpacing: "-0.5px",
                }}
              >
                {stat.top}
              </Typography>
              <Typography
                sx={{
                  color: "#E0E0E0",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { sm: "11px", md: "14px" },
                  fontWeight: 400,
                  lineHeight: { sm: "16px", md: "22.4px" },
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
