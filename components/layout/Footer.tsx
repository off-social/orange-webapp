"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Disclosure", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#272727", display: "flex", flexDirection: "column" }}
    >
      {/* ── Main content ── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "space-between" },
          alignItems: { xs: "center", md: "flex-start" },
          px: { xs: "16px", md: "168px" },
          py: { xs: "60px", md: "60px" },
          gap: { xs: "24px", md: 8 },
          width: "100%",
        }}
      >
        {/* ── Left column ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 3,
            width: { xs: "100%", md: "auto" },
          }}
        >
          {/* Logo */}
          <img src="/OrangeLogo.svg" alt="Orange" width={110} height={25} style={{ display: "block" }} />

          {/* Quick Links heading */}
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2.94px",
              textTransform: "uppercase",
              lineHeight: "normal",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            QUICK LINKS
          </Typography>

          {/* Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 3,
            }}
          >
            {QUICK_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: "#EFEFEF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "20.8px",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                {label}
              </Link>
            ))}
          </Box>

          {/* Social icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <InstagramIcon
              sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }}
            />
            <LinkedInIcon
              sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }}
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              style={{ cursor: "pointer", flexShrink: 0 }}
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <FacebookIcon
              sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }}
            />
          </Box>
        </Box>

        {/* Divider — mobile only */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            width: "100%",
            height: "1px",
            bgcolor: "rgba(255,255,255,0.1)",
            my: 1,
          }}
        />

        {/* ── Right column — Contact Details ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 3,
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2.94px",
              textTransform: "uppercase",
              lineHeight: "normal",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            CONTACT DETAILS
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Email */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                gap: "4px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailOutlinedIcon sx={{ fontSize: 16, color: "#999" }} />
                <Typography
                  sx={{
                    color: "#999",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Email Id
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                info@orange.com
              </Typography>
            </Box>

            {/* Phone */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                gap: "4px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneOutlinedIcon sx={{ fontSize: 16, color: "#999" }} />
                <Typography
                  sx={{
                    color: "#999",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Phone No.
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                +91 74860 32990
              </Typography>
            </Box>

            {/* Address */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                gap: "4px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#999" }} />
                <Typography
                  sx={{
                    color: "#999",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Address
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: "380px",
                }}
              >
                Titaanium The Business Hub, 9th floor, Office no 901, Bhimrad
                Road, Opp. Aakash Empire, Surat – 395017 (Gujarat) India.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Copyright bar ── */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          px: { xs: 2, sm: 5, md: "168px" },
          py: 2,
        }}
      >
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Copyright © 202X Orange Private Limited. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
