"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Image from "next/image";
import Link from "next/link";

/* ── OLD FOOTER (hidden) ──────────────────────────────────────────────
import { Button, Grid, Typography } from "@mui/material";
const OldFooter = () => (
  <Grid container spacing={2}>
    <Grid size={12} sx={{ textAlign: "center", py: { xs: 10, md: 18 }, px: { xs: 3, sm: 8 }, minHeight: { xs: "300px", md: "500px" }, bgcolor: "#272727", backgroundImage: "url('/footer.png')", backgroundSize: "cover", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Typography sx={{ fontSize: { xs: "20px", sm: "30px", md: "38px" }, fontWeight: 600, width: { xs: "100%", sm: "456px", md: "575px" }, mx: "auto", lineHeight: 1.3, textAlign: "center", color: "#fff" }}>
        Transform Your Textile Printing with Digital Innovation
      </Typography>
    </Grid>
  </Grid>
);
──────────────────────────────────────────────────────────────────── */

const QUICK_LINKS = [
  { label: "Disclosure", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
];

const HEADING_STYLE: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Inter, sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "2.94px",
  textTransform: "uppercase",
  lineHeight: "normal",
  margin: 0,
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#272727", display: "flex", flexDirection: "column", alignSelf: "stretch" }}>

      {/* ── Main content ── */}
      <div
        className="
          flex flex-col items-start
          px-4 py-10 gap-6
          sm:px-10 sm:py-14 sm:gap-8
          lg:px-[168px] lg:py-[60px] lg:gap-6
        "
        style={{ alignSelf: "stretch" }}
      >
        {/* Two-column row on tablet+, stacked on mobile */}
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-10 sm:gap-8">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-6">

            {/* Logo */}
            <Image
              src="/ORANGE-LOGO.png"
              alt="Orange"
              width={140}
              height={36}
              style={{ objectFit: "contain", objectPosition: "left" }}
            />

            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <p style={HEADING_STYLE}>QUICK LINKS</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {QUICK_LINKS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="no-underline hover:underline"
                    style={{
                      color: "#EFEFEF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      lineHeight: "20.8px",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <InstagramIcon sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }} />
              <LinkedInIcon sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }} />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ cursor: "pointer", flexShrink: 0 }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <FacebookIcon sx={{ color: "#fff", fontSize: 28, cursor: "pointer" }} />
            </div>
          </div>

          {/* ── Right column — Contact Details ── */}
          <div className="flex flex-col gap-6">
            <p style={HEADING_STYLE}>CONTACT DETAILS</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              {/* Email */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <EmailOutlinedIcon sx={{ fontSize: 16, color: "#999" }} />
                  <span style={{ color: "#999", fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}>Email Id</span>
                </div>
                <p style={{ color: "#fff", fontSize: "14px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "22.4px", margin: 0 }}>
                  info@orange.com
                </p>
              </div>

              {/* Phone */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <PhoneOutlinedIcon sx={{ fontSize: 16, color: "#999" }} />
                  <span style={{ color: "#999", fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}>Phone No.</span>
                </div>
                <p style={{ color: "#fff", fontSize: "14px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "22.4px", margin: 0 }}>
                  +91 74860 32990
                </p>
              </div>

              {/* Address */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#999" }} />
                  <span style={{ color: "#999", fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}>Address</span>
                </div>
                <p style={{ color: "#fff", fontSize: "14px", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "22.4px", margin: 0, maxWidth: "380px" }}>
                  Titaanium The Business Hub, 9th floor, Office no 901, Bhimrad Road, Opp. Aakash Empire, Surat – 395017 (Gujarat) India.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        className="px-4 py-4 sm:px-10 lg:px-[168px]"
      >
        <p style={{ color: "#707070", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 400, lineHeight: "normal", textAlign: "left", margin: 0 }}>
          Copyright © 202X Orange Private Limited. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
