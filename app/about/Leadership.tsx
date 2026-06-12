"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const leaders = [
  { img: "/AyushRathi.png", name: "Ayush Rathi", role: "Director" },
  { img: "/KaranToshniwal.png", name: "Karan Toshniwal", role: "Director" },
  { img: "/NakuleshwarSharma.png", name: "Nakuleshwar Sharma", role: "Director – Sales" },
  { img: "/ManmohanTotla.png", name: "Manmohan Totla", role: "Director – Sales" },
];

export default function Leadership() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", sm: "64px 40px", md: "80px 80px", lg: "80px 168px", xl: "100px 263px" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        gap: { xs: "48px", md: "64px" },
        alignSelf: "stretch",
        bgcolor: "#F2F2F2",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: "8px",
          maxWidth: { xs: "100%", md: "540px", xl: "720px" },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 400,
            lineHeight: "25.6px",
            letterSpacing: "10px",
            textTransform: "uppercase",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Leadership
        </Typography>

        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            component="span"
            sx={{
              color: "#333",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "40px", xl: "52px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "52px", xl: "67.6px" },
              letterSpacing: { xs: 0, md: "-1px" },
              display: "block",
            }}
          >
            The People Behind
          </Typography>
          <Typography
            component="span"
            sx={{
              color: "#F6891F",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "40px", xl: "52px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "52px", xl: "67.6px" },
              letterSpacing: { xs: 0, md: "-1px" },
              display: "block",
            }}
          >
            Orange O Tec
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px", xl: "16px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px", xl: "25.6px" },
            maxWidth: { xs: "540px", xl: "700px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Our leadership team brings together extensive industry knowledge,
          strategic vision, and a shared commitment to driving innovation within
          the textile printing ecosystem.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: "24px",
          width: "100%",
        }}
      >
        {leaders.map((leader) => (
          <Box
            key={leader.name}
            sx={{
              display: "flex",
              width: "100%",
              padding: "32px 24px 0 24px",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 0,
              flexShrink: 0,
              alignSelf: "stretch",
              borderRadius: "20px",
              bgcolor: "#FFF",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                alignSelf: "stretch",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  color: "#111",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "20px", xl: "22px" },
                  fontWeight: 500,
                  lineHeight: { xs: "26px", xl: "28.6px" },
                  letterSpacing: 0,
                }}
              >
                {leader.name}
              </Typography>
              <Typography
                sx={{
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "16px", xl: "18px" },
                  fontWeight: 500,
                  lineHeight: { xs: "25.6px", xl: "28.8px" },
                }}
              >
                {leader.role}
              </Typography>
            </Box>
            <Box sx={{ width: "100%", mt: "24px", lineHeight: 0 }}>
              <Image
                src={leader.img}
                alt={leader.name}
                width={258}
                height={280}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
