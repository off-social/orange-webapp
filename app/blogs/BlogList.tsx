"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import {
  BLOG_CATEGORY_LABELS,
  DEFAULT_COVER_IMAGE,
  type BlogCategory,
  type BlogPostListItem,
} from "@/data/blog.types";
import { formatBlogMeta } from "@/lib/sanity/format";
import { getCoverImageAlt, getCoverImageUrl } from "@/lib/sanity/image";

const ITEMS_PER_PAGE = 6;

const FILTERS = ["All", "Products", "Industry"] as const;
type Filter = (typeof FILTERS)[number];

const FILTER_TO_CATEGORY: Record<Exclude<Filter, "All">, BlogCategory> = {
  Products: "products",
  Industry: "industry",
};

interface BlogListProps {
  posts: BlogPostListItem[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<Filter>("All");

  const filteredPosts = useMemo(() => {
    if (filter === "All") {
      return posts;
    }

    const category = FILTER_TO_CATEGORY[filter];
    return posts.filter((post) => post.category === category);
  }, [posts, filter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / ITEMS_PER_PAGE),
  );

  useEffect(() => {
    setPage(1);
  }, [filter, posts.length]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const blogs = filteredPosts.slice(start, start + ITEMS_PER_PAGE);

  const changePage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = (): (number | "...")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | "...")[] = [1, 2, 3];
    if (page > 5) pages.push("...");
    if (page > 3 && page < totalPages - 2) pages.push(page);
    if (page < totalPages - 4) pages.push("...");
    pages.push(totalPages - 2, totalPages - 1, totalPages);
    return pages;
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
        bgcolor: "#FFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: {
            xs: "40px 16px",
            sm: "40px 40px",
            md: "40px 80px",
            lg: "40px 168px",
            xl: "40px 263px",
          },
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          alignSelf: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            flexWrap: "wrap",
            gap: "16px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "var(--black-600, #111)",
              fontFamily: "Inter, sans-serif",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "31.2px",
              letterSpacing: 0,
            }}
          >
            Latest
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <Box
                  key={f}
                  onClick={() => setFilter(f)}
                  sx={{
                    display: "flex",
                    width: isActive ? "98px" : "auto",
                    padding: "8px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    borderRadius: "32px",
                    cursor: "pointer",
                    flexShrink: 0,
                    bgcolor: isActive
                      ? "var(--black-600, #111)"
                      : "var(--white-surface, #FFF)",
                    border: isActive
                      ? "1px solid var(--black-600, #111)"
                      : "1px solid var(--grey-outline, #E0E0E0)",
                    transition: "all 0.2s ease",
                    "&:hover": isActive ? {} : { bgcolor: "#F2F2F2" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: isActive ? 600 : 500,
                      lineHeight: "22.4px",
                      color: isActive ? "#FFF" : "#111",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {f}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        {blogs.length === 0 ? (
          <Typography
            sx={{
              color: "var(--grey-500, #707070)",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              alignSelf: "stretch",
              textAlign: "center",
              py: "24px",
            }}
          >
            No blog posts yet. Publish your first post in Sanity Studio.
          </Typography>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              columnGap: "24px",
              rowGap: "48px",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            {blogs.map((blog) => {
              const coverUrl =
                getCoverImageUrl(blog.coverImage, 800) ?? DEFAULT_COVER_IMAGE;
              const coverAlt = getCoverImageAlt(blog.coverImage, blog.title);

              return (
                <Box
                  key={blog._id}
                  component="a"
                  href={`/blogs/${blog.slug}/`}
                  sx={{
                    textDecoration: "none",
                    display: "block",
                    color: "inherit",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "16px",
                      width: "100%",
                      borderRadius: "12px",
                      bgcolor: "var(--white-surface, #FFF)",
                      cursor: "pointer",
                      "&:hover .blog-title": { color: "#F6891F" },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 10",
                        borderRadius: "12px",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={coverUrl}
                        alt={coverAlt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 352px"
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "8px",
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
                        {blog.category
                          ? BLOG_CATEGORY_LABELS[blog.category]
                          : "Insights"}
                      </Typography>

                      <Typography
                        className="blog-title"
                        sx={{
                          alignSelf: "stretch",
                          color: "var(--grey-600, #333)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "25.6px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          transition: "color 0.2s ease",
                        }}
                      >
                        {blog.title}
                      </Typography>

                      {blog.excerpt?.trim() ? (
                        <Typography
                          sx={{
                            alignSelf: "stretch",
                            height: "59px",
                            color: "var(--grey-500, #707070)",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "19.2px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                          }}
                        >
                          {blog.excerpt}
                        </Typography>
                      ) : null}

                      <Typography
                        sx={{
                          color: "var(--grey-400, #999)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "19.2px",
                        }}
                      >
                        {formatBlogMeta(blog.publishedAt, blog.readTime)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}

        {filteredPosts.length > ITEMS_PER_PAGE ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Box
              onClick={() => page > 1 && changePage(page - 1)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                px: "12px",
                py: "8px",
                cursor: page === 1 ? "default" : "pointer",
                opacity: page === 1 ? 0.4 : 1,
              }}
            >
              <ArrowBackIcon sx={{ fontSize: "14px", color: "#333" }} />
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#333",
                }}
              >
                Previous
              </Typography>
            </Box>

            {getPageNumbers().map((p, i) => (
              <Box
                key={i}
                onClick={() => typeof p === "number" && changePage(p)}
                sx={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  bgcolor: page === p ? "#F6891F" : "transparent",
                  cursor: typeof p === "number" ? "pointer" : "default",
                  "&:hover":
                    typeof p === "number" && page !== p
                      ? { bgcolor: "#F2F2F2" }
                      : {},
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: page === p ? 600 : 400,
                    color: page === p ? "#FFF" : "#333",
                  }}
                >
                  {p}
                </Typography>
              </Box>
            ))}

            <Box
              onClick={() => page < totalPages && changePage(page + 1)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                px: "12px",
                py: "8px",
                cursor: page === totalPages ? "default" : "pointer",
                opacity: page === totalPages ? 0.4 : 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#333",
                }}
              >
                Next
              </Typography>
              <ArrowForwardIcon sx={{ fontSize: "14px", color: "#333" }} />
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
