"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
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
          <Link href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <Image
                src="/OrangeLogo.svg"
                alt="Orange"
                width={110}
                height={25}
                style={{ display: "block" }}
              />
            </Box>
          </Link>

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
              <Box
                key={label}
                component={Link}
                href={href}
                sx={{
                  color: "#EFEFEF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "20.8px",
                  textDecoration: "none",
                  textAlign: "center",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {label}
              </Box>
            ))}
          </Box>

          {/* Social icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box
              component="a"
              href="https://www.instagram.com/orangeotec/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <InstagramIcon
                sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }}
              />
            </Box>
            <Box
              component="a"
              href="https://www.facebook.com/orangeotec"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FacebookIcon
                sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }}
              />
            </Box>
            <Box
              component="a"
              href="https://www.linkedin.com/company/orange-o-tec"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LinkedInIcon
                sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }}
              />
            </Box>
            <Box
              component="a"
              href="https://youtube.com/@orangegroup6798?si=Xvo-GhKLyOuMXAFk"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <Image
                src="/youtubeIcon.svg"
                alt="YouTube"
                width={28}
                height={28}
              />
            </Box>
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
                <Image
                  src="/emailIcon.svg"
                  alt="Email"
                  width={16}
                  height={16}
                />
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
                <Image
                  src="/PhoneIcon.svg"
                  alt="Phone"
                  width={16}
                  height={16}
                />
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
                <Image
                  src="/locationIcon.webp"
                  alt="Location"
                  width={16}
                  height={16}
                />
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
          ©2026 Orange O Tec. All Rights Reserved. Developed By Off Social
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
