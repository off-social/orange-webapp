"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export type RelatedLinkItem = {
  href: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
};

/**
 * A row of cards linking to related pages (products or articles). Rendered on
 * the server, so every link is a plain <a href> crawlers can follow from the
 * detail page onward.
 */
export default function RelatedLinks({
  heading,
  items,
}: {
  heading: string;
  items: RelatedLinkItem[];
}) {
  if (items.length === 0) return null;

  return (
    <Box
      component="section"
      aria-label={heading}
      sx={{
        px: { xs: "16px", sm: "40px", md: "80px", lg: "168px" },
        py: { xs: "40px", md: "64px" },
        bgcolor: "#FAFAFA",
        borderTop: "1px solid #EEE",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "22px", md: "28px" },
          fontWeight: 600,
          color: "#111",
          mb: { xs: 3, md: 4 },
        }}
      >
        {heading}
      </Typography>
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: `repeat(${Math.min(items.length, 4)}, 1fr)`,
          },
          gap: { xs: "16px", md: "24px" },
        }}
      >
        {items.map((item) => (
          <li key={item.href}>
            <Box
              component={Link}
              href={item.href}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                bgcolor: "#FFF",
                border: "1px solid #E8E8E8",
                borderRadius: "12px",
                overflow: "hidden",
                textDecoration: "none",
                transition: "box-shadow 0.2s, transform 0.2s",
                "&:hover": {
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {item.image && (
                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                    bgcolor: "#F2F2F2",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              )}
              <Box
                sx={{
                  p: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#111",
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </Typography>
                {item.subtitle && (
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      color: "#707070",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                )}
              </Box>
            </Box>
          </li>
        ))}
      </Box>
    </Box>
  );
}
