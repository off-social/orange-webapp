"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
        letterSpacing: sm ? "6px" : { xs: "5px", md: "6px", lg: "10px" },
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
        fontSize: sm ? "28px" : { xs: "24px", md: "32px", lg: "40px" },
        fontWeight: 500,
        lineHeight: sm ? "38px" : { xs: "32px", md: "42px", lg: "52px" },
        letterSpacing: sm ? "-0.5px" : { xs: "-0.5px", md: "-0.5px", lg: "-1px" },
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
        maxWidth: "446px",
        display: sm ? "block" : { xs: "block", sm: "block" },
      }}
    >
      Built for efficiency and performance, Orange empowers textile manufacturers to achieve higher throughput, consistent quality, and greater operational flexibility.
    </Typography>

    <Box sx={{ mt: sm ? "20px" : { xs: "16px", md: "48px" }, display: "flex", flexDirection: "column", gap: sm ? "10px" : { xs: "10px", md: "24px" } }}>
      {POINTS.map(({ label, icon }, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: sm ? "10px" : "16px" }}>
          <Image
            src={icon}
            alt={label}
            width={sm ? 18 : 24}
            height={sm ? 18 : 24}
            style={{ flexShrink: 0, objectFit: "contain" }}
          />
          <Typography sx={{ fontSize: sm ? "13px" : { xs: "12px", md: "16px" }, fontWeight: 500, color: "#404040", lineHeight: "25.6px" }}>
            {label}
          </Typography>
        </Box>
      ))}
    </Box>

    <Box sx={{ mt: sm ? "20px" : { xs: "20px", md: "48px" } }}>
      <Button
        component={Link}
        href="/products"
        sx={{
          bgcolor: "#111", color: "#fff", borderRadius: "8px",
          textTransform: "none", fontSize: sm ? "13px" : "13px",
          fontWeight: 500, lineHeight: "20.8px",
          width: sm ? "auto" : "200px", p: sm ? "12px 20px" : "16px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          "&:hover": { bgcolor: "#333" },
        }}
      >
        Know More
        <Image src="/Arrow - Right.svg" alt="arrow right" width={16} height={16} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
      </Button>
    </Box>
  </>
);

const ThePowerOfOrange = () => {
  return (
    <>
      {/* ── MOBILE + TABLET (below md) — stacked, no overlap ── */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          bgcolor: "#fff",
          px: { xs: "16px", sm: "40px" },
          pt: { xs: "40px", sm: "56px" },
          pb: { xs: "40px", sm: "56px" },
          width: "100%",
          maxWidth: "560px",
          mx: "auto",
        }}
      >
        {/* Title group — centered */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Typography
            sx={{
              color: "#707070",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "25.6px",
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            Built for Efficiency
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: "#333",
              fontSize: "28px",
              fontWeight: 500,
              lineHeight: "36px",
              letterSpacing: "-0.5px",
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
            }}
          >
            Built for efficiency and performance, Orange empowers textile manufacturers to achieve higher throughput, consistent quality, and greater operational flexibility.
          </Typography>
        </Box>

        {/* Machine image */}
        <Box sx={{ width: "100%", aspectRatio: "361 / 187", position: "relative", mt: "40px" }}>
          <Image
            src="/theorngeimg1.png"
            alt="The Power of Orange"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </Box>

        {/* Feature list */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mt: "32px" }}>
          {POINTS.map(({ label, icon }, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Image src={icon} alt={label} width={24} height={24} style={{ flexShrink: 0, objectFit: "contain" }} />
              <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#404040", lineHeight: "25.6px" }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Full-width black button */}
        <Button
          component={Link}
          href="/products"
          sx={{
            mt: "40px",
            width: "100%",
            bgcolor: "#111",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "13px",
            fontWeight: 500,
            py: "13px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            "&:hover": { bgcolor: "#333" },
          }}
        >
          Know More
          <Image src="/Arrow - Right.svg" alt="arrow right" width={16} height={16} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
        </Button>
      </Box>

      {/* ── DESKTOP (md+) — overlay, text left ── */}
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          alignItems: "center",
          position: "relative",
          width: "100%",
          minHeight: { md: "600px", lg: "724px" },
          overflow: "hidden",
          bgcolor: "#fff",
        }}
      >
        <Image src="/thePowerofOrange1.png" alt="The Power of Orange" fill style={{ objectFit: "cover", objectPosition: "right center" }} priority />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.3) 55%, rgba(255,255,255,0) 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "relative", width: { md: "58%", lg: "52%" }, display: "flex", flexDirection: "column", py: { md: "48px", lg: "80px" }, pl: { md: "40px", lg: "168px" }, pr: { md: "24px", lg: "32px" } }}>
          <TextContent />
        </Box>
      </Box>
    </>
  );
};

export default ThePowerOfOrange;
