import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import PortableTextBody from "@/components/blogs/PortableTextBody";
import {
  BLOG_CATEGORY_LABELS,
  DEFAULT_COVER_IMAGE,
  type BlogPost,
} from "@/data/blog.types";
import { formatBlogMeta } from "@/lib/sanity/format";
import { getCoverImageAlt, getCoverImageUrl } from "@/lib/sanity/image";

interface BlogArticleProps {
  post: BlogPost;
  backHref?: string;
  backLabel?: string;
  categoryLabel?: string;
}

export default function BlogArticle({
  post,
  backHref = "/blogs",
  backLabel = "Back to Blogs",
  categoryLabel,
}: BlogArticleProps) {
  const coverUrl =
    getCoverImageUrl(post.coverImage, 1400) ?? DEFAULT_COVER_IMAGE;
  const coverAlt = getCoverImageAlt(post.coverImage, post.title);
  const authorName = post.author?.name ?? "Orange O Tec";

  return (
    <Box
      component="article"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "32px", md: "40px" },
        px: {
          xs: "16px",
          sm: "40px",
          md: "120px",
          lg: "240px",
          xl: "356px",
        },
        py: { xs: "40px", sm: "48px", md: "80px" },
        bgcolor: "var(--white-surface, #FFF)",
        "& > *": {
          width: "100%",
          maxWidth: "728px",
        },
      }}
    >
      <Link
        href={backHref}
        style={{
          alignSelf: "flex-start",
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            color: "#333",
            transition: "color 0.2s ease",
            "&:hover": { color: "#F6891F" },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: "14px" }} />
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            {backLabel}
          </Typography>
        </Box>
      </Link>

      <Box
        component="header"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
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
          {categoryLabel ??
            (post.category ? BLOG_CATEGORY_LABELS[post.category] : "Insights")}
        </Typography>

        <Typography
          component="h1"
          sx={{
            color: "var(--black-600, #111)",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "26px", md: "32px" },
            fontWeight: 500,
            lineHeight: { xs: "33.8px", md: "41.6px" },
            letterSpacing: { xs: "-0.5px", md: "-1px" },
          }}
        >
          {post.title}
        </Typography>

        {post.excerpt?.trim() ? (
          <Typography
            sx={{
              color: "var(--grey-500, #707070)",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "25.6px",
            }}
          >
            {post.excerpt}
          </Typography>
        ) : null}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            flexWrap: "wrap",
            gap: "8px",
            mt: "8px",
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

      <Box
        sx={{
          position: "relative",
          height: { xs: "240px", sm: "320px", md: "417px" },
          borderRadius: "8px",
          overflow: "hidden",
          maxWidth: "728px !important",
        }}
      >
        <Image
          src={coverUrl}
          alt={coverAlt}
          fill
          style={{ objectFit: "cover" }}
          sizes="728px"
          priority
        />
        {post.featured ? (
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
        ) : null}
      </Box>

      <PortableTextBody value={post.body} />
    </Box>
  );
}
