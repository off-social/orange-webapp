"use client";

import { useConsultation } from "@/data/ConsultationContext";
import { useProduct } from "@/data/ProductContext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Box, Button, Typography } from "@mui/material";

export default function ContactCTA() {
  const { contactCTA, name } = useProduct();
  const { openModal } = useConsultation();

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "100px 40px", lg: "100px 262px" },
        alignItems: { xs: "stretch", md: "flex-start" },
        gap: { xs: "48px", md: "24px" },
        alignSelf: "stretch",
        background: "#111",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* ── Left content ── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: "24px",
          flex: 1,
        }}
      >
        {/* Badge pill */}
        <Box
          sx={{
            display: "inline-flex",
            padding: "6px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "32px",
            background: "#333",
          }}
        >
          <HeadsetMicOutlinedIcon sx={{ fontSize: "14px", color: "#FFF" }} />
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            Talk to our team
          </Typography>
        </Box>

        {/* Headings — 8px gap between them */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#999",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: 500,
              lineHeight: { xs: "26px", md: "31.2px" },
              letterSpacing: "0",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {contactCTA.headingTop}
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#F6891F",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "41.6px" },
              letterSpacing: { xs: "0", md: "-1px" },
              textAlign: { xs: "center", md: "left" },
              m: 0,
            }}
          >
            {contactCTA.headingBottom}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {contactCTA.description}
        </Typography>
      </Box>

      {/* ── Right card ── */}
      <Box
        sx={{
          display: "flex",
          padding: "24px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          flex: { xs: "unset", md: "1 0 0" },
          borderRadius: "16px",
          border: "1px solid #333",
        }}
      >
        {/* Phone row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Orange circle icon */}
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#F6891F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <LocalPhoneOutlinedIcon sx={{ fontSize: "18px", color: "#FFF" }} />
          </Box>

          {/* Label + number */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
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
              Call us directly
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "27px",
              }}
            >
              {contactCTA.phone}
            </Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Box sx={{ width: "100%", height: "1px", bgcolor: "#333", flexShrink: 0 }} />

        {/* Book a Demo button */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "14px !important" }} />}
          fullWidth
          onClick={() => openModal(name)}
          sx={{
            bgcolor: "#FFF",
            color: "#111",
            borderRadius: "12px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "20.8px",
            padding: "16px",
            boxShadow: "none",
            justifyContent: "center",
            "&:hover": { bgcolor: "#F0F0F0", boxShadow: "none" },
          }}
        >
          Book a Consultation
        </Button>
      </Box>
    </Box>
  );
}
