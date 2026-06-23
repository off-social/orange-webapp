"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface BlogFeaturedProps {
  topic?: string;
  title?: string;
  desc?: string;
  founder?: string;
  role?: string;
  meta?: string;
  img?: string;
  /** Where the card links to. Article route (inside app layout) by default. */
  href?: string;
}

export default function BlogFeatured({
  topic = "Topic Name",
  title = "The Sharpe-less-ness: Why Fund Rankings Invert in a Down Market",
  desc = "A negative Sharpe ratio can rank the careful fund worst in a down market. Why it happens, a one-line fix, and which other measures share the flaw.",
  founder = "Founder Name",
  role = "Founder",
  meta = "Jun 2, 2025 · 1 min read",
  img = "/blogImg1.webp",
  href = "/blogs/article",
}: BlogFeaturedProps) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "0 16px 40px 16px",
          sm: "40px 40px",
          md: "40px 80px",
          lg: "40px 168px",
          xl: "40px 263px",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "32px", md: "64px" },
        alignSelf: "stretch",
        bgcolor: "var(--white-surface, #FFF)",
      }}
    >
      {/* Featured card */}
      <Box
        component="a"
        href={href}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          alignSelf: "stretch",
          border: "1px solid var(--grey-outline, #E0E0E0)",
          overflow: "hidden",
          cursor: "pointer",
          textDecoration: "none",
          color: "inherit",
          "&:hover .featured-title": { color: "#F6891F" },
        }}
      >
        {/* Main image */}
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: { xs: "100%", md: "auto" },
            height: { xs: "280px", sm: "320px", md: "417px" },
            flexDirection: "column",
            alignItems: "flex-start",
            flex: { xs: "0 0 auto", md: "1 0 0" },
          }}
        >
          <Image
            src={img}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          {/* FEATURED badge */}
          <Box
            sx={{
              position: "absolute",
              top: "16px",
              left: "16px",
              padding: "6px 12px",
              borderRadius: "4px",
              bgcolor: "var(--white-surface, #FFF)",
            }}
          >
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
              Featured
            </Typography>
          </Box>
        </Box>

        {/* Content panel */}
        <Box
          sx={{
            display: "flex",
            padding: { xs: "20px", md: "48px" },
            flexDirection: "column",
            alignItems: "flex-start",
            gap: { xs: "16px", md: "32px" },
            flex: "1 0 0",
          }}
        >
          {/* Topic + Title + Description */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              alignSelf: "stretch",
            }}
          >
            <Typography
              sx={{
                color: "var(--primary-orange-primary-orange, #F6891F)",
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {topic}
            </Typography>

            <Typography
              className="featured-title"
              sx={{
                color: "var(--black-600, #111)",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "20px", md: "32px" },
                fontWeight: 500,
                lineHeight: { xs: "26px", md: "41.6px" },
                letterSpacing: { xs: 0, md: "-1px" },
                transition: "color 0.2s ease",
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "var(--grey-500, #707070)",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                lineHeight: { xs: "22.4px", md: "25.6px" },
                alignSelf: "stretch",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
            >
              {desc}
            </Typography>
          </Box>

          {/* Footer: founder + meta */}
          <Box
            sx={{
              display: "flex",
              paddingTop: "16px",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "flex-start", md: "space-between" },
              alignItems: { xs: "flex-start", md: "center" },
              gap: { xs: "8px", md: 0 },
              alignSelf: "stretch",
              borderTop: "1px solid var(--grey-outline, #E0E0E0)",
            }}
          >
            {/* Founder Name · Founder */}
            <Typography
              component="div"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                lineHeight: "22.4px",
              }}
            >
              <Box
                component="span"
                sx={{ color: "var(--black-600, #111)", fontWeight: 600 }}
              >
                {founder}
              </Box>
              <Box
                component="span"
                sx={{ color: "var(--grey-500, #707070)", fontWeight: 400 }}
              >
                {" "}
                · {role}
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "var(--grey-500, #707070)",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "22.4px",
                whiteSpace: "nowrap",
              }}
            >
              {meta}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
