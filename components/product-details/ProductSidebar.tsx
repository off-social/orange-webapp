"use client";

import { useProduct } from "@/data/ProductContext";
import { useConsultation } from "@/data/ConsultationContext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";

export default function ProductSidebar({ dark = false }: { dark?: boolean }) {
  const { name, tagline, sidebar } = useProduct();
  const { openModal } = useConsultation();

  return (
    <Box
      sx={{
        position: { md: "sticky" },
        top: { md: "65px" },
        display: "flex",
        width: { xs: "100%", md: "258px" },
        height: { md: "673px" },
        paddingRight: "24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        flexShrink: 0,
        borderRight: { md: `1px solid ${dark ? "#333" : "#E0E0E0"}` },
      }}
    >
      {/* Title + subtitle */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Typography
          sx={{
            color: dark ? "#EFEFEF" : "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: 0,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: dark ? "#B8B8B8" : "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "19.2px",
          }}
        >
          {tagline}
        </Typography>
      </Box>

      {/* Bullet points */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {sidebar.bullets.map((point) => (
          <Box
            key={point}
            sx={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
          >
            <Box
              sx={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                bgcolor: dark ? "#999" : "#707070",
                flexShrink: 0,
                mt: "7px",
              }}
            />
            <Typography
              sx={{
                color: dark ? "#999" : "#707070",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "19.2px",
              }}
            >
              {point}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "12px !important" }} />}
          sx={{
            display: "flex",
            padding: "8px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            alignSelf: "stretch",
            borderRadius: "8px",
            bgcolor: dark ? "#FFF" : "#111",
            color: dark ? "#111" : "#FFF",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "19.2px",
            boxShadow: "none",
            minWidth: "unset",
            "&:hover": {
              bgcolor: dark ? "#E0E0E0" : "#333",
              boxShadow: "none",
            },
          }}
        >
          Book a Demo
        </Button>
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            padding: "8px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            alignSelf: "stretch",
            borderRadius: "8px",
            border: `1px solid ${dark ? "#444" : "#E0E0E0"}`,
            bgcolor: dark ? "transparent" : "#FFF",
            color: dark ? "#FFF" : "#111",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "19.2px",
            boxShadow: "none",
            minWidth: "unset",
            "&:hover": {
              bgcolor: dark ? "rgba(255,255,255,0.08)" : "#f5f5f5",
              boxShadow: "none",
            },
          }}
          onClick={() => openModal(name)}
        >
          Book a Consultation
        </Button>
      </Box>
    </Box>
  );
}
