"use client";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import {
  DEFAULT_COVER_IMAGE,
  POST_SECTION_LABELS,
  type BlogPostListItem,
} from "@/data/blog.types";
import { formatBlogMeta } from "@/lib/sanity/format";
import { getCoverImageAlt, getCoverImageUrl } from "@/lib/sanity/image";

type TabId =
  | "news"
  | "upcoming-exhibition"
  | "past-events-gallery"
  | "booth-highlights"
  | "media-coverage";

const TAB_DEFINITIONS: { id: TabId; label: string }[] = [
  { id: "news", label: "News" },
  { id: "upcoming-exhibition", label: "Upcoming Exhibition" },
  { id: "past-events-gallery", label: "Past Events Gallery" },
  { id: "booth-highlights", label: "Booth Highlights" },
  { id: "media-coverage", label: "Media Coverage" },
];

interface EventsPresenceProps {
  newsPosts: BlogPostListItem[];
  featuredNews: BlogPostListItem | null;
  upcomingExhibitions?: BlogPostListItem[];
  pastEventsGallery?: BlogPostListItem[];
  boothHighlights?: BlogPostListItem[];
  mediaCoverage?: BlogPostListItem[];
}

function EmptyState({ message = "No content available." }: { message?: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "160px",
        pb: "64px",
      }}
    >
      <Typography
        sx={{
          color: "#707070",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "22.4px",
          textAlign: "center",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}

function PostGrid({
  posts,
  basePath,
  badgeLabel,
}: {
  posts: BlogPostListItem[];
  basePath: "/news-events" | "/blogs";
  badgeLabel?: string;
}) {
  if (posts.length === 0) {
    return <EmptyState />;
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: "24px",
        width: "100%",
        pb: "64px",
      }}
    >
      {posts.map((post) => {
        const coverUrl =
          getCoverImageUrl(post.coverImage, 800) ?? DEFAULT_COVER_IMAGE;
        const coverAlt = getCoverImageAlt(post.coverImage, post.title);

        return (
          <Box
            key={post._id}
            component="a"
            href={`${basePath}/${post.slug}/`}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              "&:hover .ev-title": { color: "#F6891F" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/10",
                borderRadius: "8px",
                overflow: "hidden",
                bgcolor: "#F0F0F0",
              }}
            >
              <Image
                src={coverUrl}
                alt={coverAlt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {badgeLabel ? (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    bgcolor: "#6B4EFF",
                    borderRadius: "6px",
                    px: "10px",
                    py: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "19.2px",
                    }}
                  >
                    {badgeLabel}
                  </Typography>
                </Box>
              ) : null}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                width: "100%",
              }}
            >
              <Typography
                className="ev-title"
                sx={{
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "26px",
                  transition: "color 0.2s ease",
                }}
              >
                {post.title}
              </Typography>
              {post.excerpt?.trim() ? (
                <Typography
                  sx={{
                    color: "#707070",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22.4px",
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
              <Typography
                sx={{
                  color: "#8D8D8D",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "19.2px",
                }}
              >
                {formatBlogMeta(post.publishedAt, post.readTime)}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                padding: "8px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "8px",
                border: "1px solid #E0E0E0",
                bgcolor: "#FFF",
              }}
            >
              <Typography
                sx={{
                  color: "#111",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "19.2px",
                }}
              >
                Know more
              </Typography>
              <ArrowForwardIosIcon sx={{ fontSize: "10px", color: "#111" }} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default function EventsPresence({
  newsPosts,
  featuredNews,
  upcomingExhibitions = [],
  pastEventsGallery = [],
  boothHighlights = [],
  mediaCoverage = [],
}: EventsPresenceProps) {
  const listNewsPosts = useMemo(() => {
    if (!featuredNews) {
      return newsPosts;
    }

    return newsPosts.filter((post) => post._id !== featuredNews._id);
  }, [featuredNews, newsPosts]);

  const visibleTabs = useMemo(() => {
    const hasContent = (id: TabId): boolean => {
      switch (id) {
        case "news":
          return newsPosts.length > 0 || featuredNews !== null;
        case "upcoming-exhibition":
          return upcomingExhibitions.length > 0;
        case "past-events-gallery":
          return pastEventsGallery.length > 0;
        case "booth-highlights":
          return boothHighlights.length > 0;
        case "media-coverage":
          return mediaCoverage.length > 0;
        default:
          return false;
      }
    };

    const tabs = TAB_DEFINITIONS.filter((tab) => hasContent(tab.id));

    return tabs;
  }, [
    boothHighlights.length,
    featuredNews,
    mediaCoverage.length,
    newsPosts.length,
    pastEventsGallery.length,
    upcomingExhibitions.length,
  ]);

  const [activeTabId, setActiveTabId] = useState<TabId | null>(null);

  const effectiveActiveTabId = useMemo(() => {
    if (activeTabId && visibleTabs.some((tab) => tab.id === activeTabId)) {
      return activeTabId;
    }
    return visibleTabs[0]?.id ?? null;
  }, [activeTabId, visibleTabs]);

  useEffect(() => {
    if (visibleTabs.length === 0) {
      setActiveTabId(null);
      return;
    }

    const isCurrentTabVisible = visibleTabs.some((tab) => tab.id === activeTabId);
    if (!isCurrentTabVisible) {
      setActiveTabId(visibleTabs[0].id);
    }
  }, [activeTabId, visibleTabs]);

  const showTabs = visibleTabs.length > 1;

  const showFeaturedNews =
    featuredNews !== null && effectiveActiveTabId === "news";

  const renderTabContent = () => {
    switch (effectiveActiveTabId) {
      case "news":
        return listNewsPosts.length > 0 ? (
          <PostGrid
            posts={listNewsPosts}
            basePath="/news-events"
            badgeLabel="news"
          />
        ) : null;
      case "upcoming-exhibition":
        return (
          <PostGrid posts={upcomingExhibitions} basePath="/news-events" />
        );
      case "past-events-gallery":
        return <PostGrid posts={pastEventsGallery} basePath="/news-events" />;
      case "booth-highlights":
        return <PostGrid posts={boothHighlights} basePath="/news-events" />;
      case "media-coverage":
        return <PostGrid posts={mediaCoverage} basePath="/news-events" />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "64px 16px 0 16px",
          sm: "64px 40px 0 40px",
          md: "64px 80px 0 80px",
          lg: "64px 168px 0 168px",
          xl: "64px 263px 0 263px",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: "64px",
        alignSelf: "stretch",
        bgcolor: "#FFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "25.6px",
            letterSpacing: "10px",
            textTransform: "uppercase",
          }}
        >
          Events
        </Typography>

        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "26px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "34px", md: "52px" },
            letterSpacing: { xs: 0, md: "-1px" },
          }}
        >
          Events &amp; Industry Presence
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            maxWidth: { xs: "100%", md: "728px" },
            width: "100%",
            mt: "8px",
          }}
        >
          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            Explore the latest trends in textile printing technology.
          </Typography>
        </Box>
      </Box>

      {showFeaturedNews && featuredNews ? (
        <Box
          component="a"
          href={`/news-events/${featuredNews.slug}/`}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            width: "100%",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            overflow: "hidden",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
            "&:hover .featured-news-title": { color: "#F6891F" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              minHeight: { xs: "240px", md: "320px" },
            }}
          >
            <Image
              src={
                getCoverImageUrl(featuredNews.coverImage, 1200) ??
                DEFAULT_COVER_IMAGE
              }
              alt={getCoverImageAlt(featuredNews.coverImage, featuredNews.title)}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "16px",
              p: { xs: "24px", md: "48px" },
              flex: 1,
            }}
          >
            <Typography
              sx={{
                color: "#F6891F",
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Featured · {POST_SECTION_LABELS.news}
            </Typography>
            <Typography
              className="featured-news-title"
              sx={{
                color: "#333",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "22px", md: "28px" },
                fontWeight: 500,
                lineHeight: { xs: "28px", md: "36px" },
                transition: "color 0.2s ease",
              }}
            >
              {featuredNews.title}
            </Typography>
            {featuredNews.excerpt?.trim() ? (
              <Typography
                sx={{
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                {featuredNews.excerpt}
              </Typography>
            ) : null}
          </Box>
        </Box>
      ) : null}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "100%",
        }}
      >
        {visibleTabs.length > 0 ? (
          <>
            {showTabs ? (
              <Box
                sx={{
                  alignSelf: "stretch",
                  borderBottom: "1px solid #E0E0E0",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", md: "center" },
                    alignItems: "center",
                    minWidth: "max-content",
                  }}
                >
                  {visibleTabs.map((tab) => {
                    const isActive = tab.id === effectiveActiveTabId;
                    return (
                      <Box
                        key={tab.id}
                        onClick={() => setActiveTabId(tab.id)}
                        sx={{
                          px: { xs: "20px", sm: "40px", md: "60px" },
                          pb: "12px",
                          cursor: "pointer",
                          borderBottom: isActive
                            ? "2px solid #F6891F"
                            : "2px solid transparent",
                          mb: "-1px",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: { xs: "14px", md: "16px" },
                            fontWeight: isActive ? 600 : 400,
                            lineHeight: "25.6px",
                            color: isActive ? "#333" : "#707070",
                            transition: "all 0.2s ease",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {tab.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            ) : null}

            {renderTabContent()}
          </>
        ) : (
          <EmptyState />
        )}
      </Box>
    </Box>
  );
}
