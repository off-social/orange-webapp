"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

import {
  BLOG_CATEGORY_LABELS,
  DEFAULT_COVER_IMAGE,
  type BlogPostListItem,
} from "@/data/blog.types";
import { formatBlogMeta } from "@/lib/sanity/format";
import { getCoverImageAlt, getCoverImageUrl } from "@/lib/sanity/image";

interface BlogFeaturedProps {
  post: BlogPostListItem;
}

export default function BlogFeatured({ post }: BlogFeaturedProps) {
  const coverUrl =
    getCoverImageUrl(post.coverImage, 1200) ?? DEFAULT_COVER_IMAGE;
  const coverAlt = getCoverImageAlt(post.coverImage, post.title);
  const authorName = post.author?.name ?? "Orange O Tec";

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
      <Box
        component="a"
        href={`/blogs/${post.slug}/`}
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
            src={coverUrl}
            alt={coverAlt}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
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
              {post.category ? BLOG_CATEGORY_LABELS[post.category] : "Insights"}
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
              {post.title}
            </Typography>

            {post.excerpt?.trim() ? (
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
                {post.excerpt}
              </Typography>
            ) : null}
          </Box>

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
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                lineHeight: "22.4px",
                color: "var(--black-600, #111)",
                fontWeight: 600,
              }}
            >
              {authorName}
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
              {formatBlogMeta(post.publishedAt, post.readTime)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
