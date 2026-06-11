import { Box, Typography } from "@mui/material";
import Image from "next/image";

const stats = [
  { value: "100%", label: "Commitment" },
  { value: "10,000+", label: "Lives Impacted" },
  { value: "1500", label: "Children Supported" },
];

export default function CSRImpact() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "797px", sm: "650px", md: "797px", xl: "900px" },
        overflow: "hidden",
        backgroundColor: "lightgray",
        display: "flex",
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        {/* Mobile */}
        <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%", height: "100%" }}>
          <Image
            src="/AtOrangeOMobile.png"
            alt="At Orange O Tec"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>
        {/* Desktop */}
        <Box sx={{ display: { xs: "none", sm: "block" }, width: "100%", height: "100%", minHeight: { sm: "650px", md: "797px" } }}>
          <Image
            src="/AtOrangeO.png"
            alt="At Orange O Tec"
            fill
            style={{ objectFit: "cover", objectPosition: "right center" }}
          />
        </Box>
      </Box>

      {/* Left gradient overlay — keeps text readable over image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 1,
          width: { xs: "100%", sm: "70%", md: "60%", xl: "50%" },
          background: {
            xs: "linear-gradient(to bottom, rgba(230,230,230,0.95) 60%, transparent 100%)",
            sm: "linear-gradient(to right, rgba(220,220,220,0.97) 40%, transparent 100%)",
          },
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
          padding: {
            xs: "48px 16px",
            sm: "64px 40px",
            md: "80px 80px",
            lg: "80px 168px",
            xl: "100px 263px",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: { xs: "center", sm: "flex-start" },
          minHeight: { xs: "797px", sm: "650px", md: "797px", xl: "900px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: { xs: "32px", md: "48px" },
            maxWidth: { xs: "100%", md: "634px", xl: "700px" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Description */}
          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: 500,
              lineHeight: { xs: "25.6px", md: "31.2px" },
              letterSpacing: 0,
            }}
          >
            At Orange O Tec, we believe that true success is measured not only
            by business growth but also by the positive impact we create in
            society.
          </Typography>

          {/* Stats */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              gap: "40px",
              width: "100%",
            }}
          >
            {stats.map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    color: "#089E5D",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "48px", md: "48px" },
                    fontWeight: 700,
                    lineHeight: "67.2px",
                    letterSpacing: "-1px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    color: "#707070",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25.6px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
