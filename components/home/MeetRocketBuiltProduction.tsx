"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const STATS = [
  { top: "Up to 75,000", bottom: "LM/day Production" },
  { top: "4 to 8", bottom: "Colour Modules" },
  { top: "Up to 1850 mm", bottom: "Print Width" },
  { top: "Designed for", bottom: "Continuous Industrial Use" },
];

const MeetRocketBuiltProduction = () => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Background image */}
      {/* Mobile + Tablet image */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          aspectRatio: { xs: "16/10", sm: "16/9" },
          position: "relative",
        }}
      >
        <Image
          src="/meet-rocket-built-for-hight-colume-production.png"
          alt="Meet Rocket"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </Box>

      {/* Desktop image */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "100%",
          aspectRatio: "206/127",
          position: "relative",
        }}
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
          top: { xs: "6%", sm: "8%", md: "12%" },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "85%", sm: "65%", md: "55%" },
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
            fontSize: { xs: "20px", sm: "28px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "26px", sm: "38px", md: "52px" },
            letterSpacing: { xs: "-0.5px", md: "-1px" },
          }}
        >
          Meet, Rocket
        </Typography>

        {/* Hide description on mobile — not enough space */}
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            color: "#E0E0E0",
            fontSize: { sm: "13px", md: "14px" },
            fontWeight: 500,
            lineHeight: "22.4px",
            maxWidth: { sm: "560px", md: "620px" },
          }}
        >
          Designed specifically to handle the demands of high-volume production
          environments, this system ensures consistent performance and
          reliability even under the most intense workloads.
        </Typography>

        <Box sx={{ mt: { xs: "12px", sm: "20px", md: "24px" } }}>
          <Button
            sx={{
              borderRadius: "8px",
              border: "1px solid #E0E0E0",
              background: "#FFF",
              color: "#111",
              textTransform: "none",
              fontSize: { xs: "11px", sm: "12px", md: "14px" },
              fontWeight: 500,
              px: { xs: "16px", md: "28px" },
              py: { xs: "6px", md: "10px" },
              "&:hover": { background: "#f5f5f5" },
              display: "flex",
              alignItems: "center",
              gap: "8px",
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

      {/* Dark gradient overlay at bottom */}
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

      {/* Bottom stats */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "4%", sm: "5%", md: "6%" },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "92%", md: "78%" },
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          gap: 0,
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
              px: { xs: "8px", md: "16px" },
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "var(--font-stack-sans-headline)",
                fontSize: { xs: "16px", sm: "20px", md: "24px" },
                fontWeight: 500,
                lineHeight: { xs: "20px", md: "31.2px" },
                letterSpacing: 0,
              }}
            >
              {stat.top}
            </Typography>
            <Typography
              sx={{
                color: "#E0E0E0",
                fontFamily: "var(--font-stack-sans-headline)",
                fontSize: { xs: "10px", sm: "12px", md: "14px" },
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
  );
};

export default MeetRocketBuiltProduction;
