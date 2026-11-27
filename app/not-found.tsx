"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Blogs", href: "/blogs/" },
  { label: "Contact Us", href: "/contact/" },
];

/**
 * Exported as out/404.html. CloudFront must serve it with HTTP status 404 for
 * unknown URLs (see infra/README-cloudfront.md) instead of the homepage with
 * a 200, which made every mistyped URL a soft-404 duplicate of the homepage.
 * Next adds <meta name="robots" content="noindex"> to this page itself.
 */
export default function NotFound() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        px: "16px",
        py: { xs: "64px", md: "96px" },
        textAlign: "center",
      }}
    >
      <Typography
        sx={{ color: "#F6891F", fontWeight: 600, letterSpacing: "2px" }}
      >
        404
      </Typography>
      <Typography
        component="h1"
        sx={{ fontSize: { xs: "28px", md: "40px" }, fontWeight: 600 }}
      >
        This page doesn&apos;t exist
      </Typography>
      <Typography sx={{ color: "#707070", maxWidth: "480px" }}>
        The link may be broken or the page may have moved. Try one of these
        instead:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
        {LINKS.map(({ label, href }) => (
          <Box
            key={href}
            component={Link}
            href={href}
            sx={{
              px: "16px",
              py: "10px",
              border: "1px solid #E0E0E0",
              borderRadius: "8px",
              color: "#111",
              textDecoration: "none",
              fontSize: "14px",
              "&:hover": { bgcolor: "#F5F5F5" },
            }}
          >
            {label}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
