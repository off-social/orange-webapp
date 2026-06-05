"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const POINTS = [
  { label: "High-speed textile production", icon: "/rocket-01.png" },
  { label: "Improved production efficiency", icon: "/chart-increase.png" },
  { label: "On-demand design printing", icon: "/printer-3d.svg" },
  { label: "Consistent print quality", icon: "/tick-double-01.png" },
  { label: "Lower operational waste", icon: "/waste-restore.png" },
  { label: "Reduced setup time", icon: "/time-quarter-pass.png" },
];

const TextContent = ({ sm }: { sm?: boolean }) => (
  <>
    <Typography
      sx={{
        color: "#707070",
        fontSize: sm ? "12px" : { xs: "10px", md: "16px" },
        fontWeight: 400,
        lineHeight: "25.6px",
        letterSpacing: sm ? "6px" : { xs: "5px", md: "10px" },
        textTransform: "uppercase",
        mb: "8px",
      }}
    >
      Built for Efficiency
    </Typography>

    <Typography
      component="h2"
      sx={{
        color: "#333",
        fontSize: sm ? "28px" : { xs: "24px", md: "40px" },
        fontWeight: 500,
        lineHeight: sm ? "38px" : { xs: "32px", md: "52px" },
        letterSpacing: sm ? "-0.5px" : { xs: "-0.5px", md: "-1px" },
      }}
    >
      The Power of{" "}
      <Box component="span" sx={{ color: "#F6891F" }}>Orange</Box>
    </Typography>

    <Typography
      sx={{
        color: "#707070",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "22.4px",
        mt: "8px",
        maxWidth: "380px",
        display: sm ? "block" : { xs: "block", sm: "block" },
      }}
    >
      Lorem ipsum dolor sit amet consectetur. Ut massa blandit pretium velit ullamcorper.
    </Typography>

    <Box sx={{ mt: sm ? "20px" : { xs: "16px", md: "24px" }, display: "flex", flexDirection: "column", gap: sm ? "10px" : { xs: "10px", md: "12px" } }}>
      {POINTS.map(({ label, icon }, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src={icon}
            alt={label}
            width={sm ? 18 : 20}
            height={sm ? 18 : 20}
            style={{ flexShrink: 0, objectFit: "contain" }}
          />
          <Typography sx={{ fontSize: sm ? "13px" : { xs: "12px", md: "14px" }, fontWeight: 500, color: "#404040", lineHeight: "22.4px" }}>
            {label}
          </Typography>
        </Box>
      ))}
    </Box>

    <Box sx={{ mt: sm ? "20px" : { xs: "20px", md: "28px" } }}>
      <Button
        sx={{
          bgcolor: "#111", color: "#fff", borderRadius: "8px",
          textTransform: "none", fontSize: sm ? "13px" : { xs: "12px", md: "14px" },
          fontWeight: 500, px: sm ? "20px" : { xs: "18px", md: "28px" },
          py: sm ? "9px" : { xs: "8px", md: "10px" },
          display: "flex", alignItems: "center", gap: "8px",
          "&:hover": { bgcolor: "#333" },
        }}
      >
        Know More
        <Image src="/Arrow - Right.svg" alt="arrow right" width={16} height={16} style={{ objectFit: "contain" }} />
      </Button>
    </Box>
  </>
);

const ThePowerOfOrange = () => {
  return (
    <>
      {/* ── MOBILE (xs only) — text block + image stacked ── */}
      <Box sx={{ display: { xs: "flex", sm: "none" }, flexDirection: "column", bgcolor: "#fff" }}>
        <Box sx={{ px: "16px", pt: "40px", pb: "28px" }}>
          <TextContent />
        </Box>
        <Box sx={{ width: "100%", aspectRatio: "4/3", position: "relative" }}>
          <Image
            src="/thePowerofOrange1.png"
            alt="The Power of Orange"
            fill
            style={{ objectFit: "cover", objectPosition: "right center" }}
          />
        </Box>
      </Box>

      {/* ── TABLET (sm) — overlay, text left ── */}
      <Box
        sx={{
          display: { xs: "none", sm: "block", md: "none" },
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
          bgcolor: "#fff",
        }}
      >
        <Image src="/thePowerofOrange1.png" alt="The Power of Orange" fill style={{ objectFit: "cover", objectPosition: "right center" }} />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.88) 38%, rgba(255,255,255,0.3) 58%, rgba(255,255,255,0) 72%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "58%", display: "flex", flexDirection: "column", justifyContent: "center", pl: "40px", pr: "20px" }}>
          <TextContent sm />
        </Box>
      </Box>

      {/* ── DESKTOP (md+) — overlay, text left ── */}
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          position: "relative",
          width: "100%",
          aspectRatio: { md: "16/8", lg: "16/7" },
          overflow: "hidden",
          bgcolor: "#fff",
        }}
      >
        <Image src="/thePowerofOrange1.png" alt="The Power of Orange" fill style={{ objectFit: "cover", objectPosition: "right center" }} priority />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.3) 55%, rgba(255,255,255,0) 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "52%", display: "flex", flexDirection: "column", justifyContent: "center", pl: { md: "64px", lg: "120px" }, pr: "32px" }}>
          <TextContent />
        </Box>
      </Box>
    </>
  );
};

export default ThePowerOfOrange;
