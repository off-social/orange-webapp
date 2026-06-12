"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const TABS = [
  "Upcoming Exhibition",
  "Past Events Gallery",
  "Booth Highlights",
  "Media Coverage",
];

const EVENTS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  img: "/blogImg1.png",
  title: "Orange O Tec at Gartex India 2025",
  location: "5th ITMACH India Helipad Exhibition Centre, Gandhinagar",
  isBlog: i === 3,
}));

const TOTAL_PAGES = 10;

function PageBtn({
  num,
  active,
  onClick,
}: {
  num: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "32px",
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        cursor: "pointer",
        bgcolor: active ? "#F6891F" : "transparent",
        "&:hover": { bgcolor: active ? "#F6891F" : "#F5F5F5" },
        transition: "background 0.2s ease",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          color: active ? "#FFF" : "#707070",
        }}
      >
        {num}
      </Typography>
    </Box>
  );
}

export default function EventsPresence() {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);

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
      {/* Header */}
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

        {/* Subtitle + button in 728px container */}
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

          <Button
            variant="contained"
            sx={{
              bgcolor: "#F6891F",
              color: "#FFF",
              borderRadius: "8px",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "20.8px",
              px: "24px",
              py: "12px",
              boxShadow: "none",
              "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
            }}
          >
            Book a Demo at Event
          </Button>
        </Box>
      </Box>

      {/* Tabs + Grid + Pagination */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "100%",
        }}
      >
        {/* Tab bar */}
        <Box sx={{ alignSelf: "stretch", borderBottom: "1px solid #E0E0E0" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {TABS.map((tab, i) => {
              const isActive = i === activeTab;
              return (
                <Box
                  key={tab}
                  onClick={() => {
                    setActiveTab(i);
                    setPage(1);
                  }}
                  sx={{
                    px: { xs: "24px", sm: "40px", md: "60px" },
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
                    {tab}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Cards grid — only show for Upcoming Exhibition tab */}
        {activeTab === 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: "24px", md: "24px" },
              width: "100%",
            }}
          >
            {EVENTS.map((event) => (
              <Box
                key={event.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "16px",
                  gridRow: "span 1",
                  gridColumn: "span 1",
                  justifySelf: "stretch",
                  cursor: "pointer",
                  "&:hover .ev-title": { color: "#F6891F" },
                }}
              >
                {/* Image */}
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
                    src={event.img}
                    alt={event.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {event.isBlog && (
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
                      <Box
                        component="span"
                        sx={{ color: "#FFF", fontSize: "10px", lineHeight: 1 }}
                      >
                        ◇
                      </Box>
                      <Typography
                        sx={{
                          color: "#FFF",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "12px",
                          fontWeight: 600,
                          lineHeight: "19.2px",
                        }}
                      >
                        blog
                      </Typography>
                    </Box>
                  )}
                </Box>

                {/* Text */}
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
                      letterSpacing: 0,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#8D8D8D",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "19.2px",
                    }}
                  >
                    {event.location}
                  </Typography>
                </Box>

                {/* Know more button */}
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
                    cursor: "pointer",
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
                  <ArrowForwardIosIcon
                    sx={{ fontSize: "10px", color: "#111" }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* Pagination */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            pb: "64px",
          }}
        >
          <Button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            startIcon={<ArrowBackIcon sx={{ fontSize: "14px !important" }} />}
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "none",
              minWidth: "auto",
              px: "8px",
              "&.Mui-disabled": { opacity: 0.4 },
            }}
          >
            Previous
          </Button>

          {[1, 2, 3].map((p) => (
            <PageBtn
              key={p}
              num={p}
              active={page === p}
              onClick={() => setPage(p)}
            />
          ))}

          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              px: "4px",
            }}
          >
            ...
          </Typography>

          {[8, 9, 10].map((p) => (
            <PageBtn
              key={p}
              num={p}
              active={page === p}
              onClick={() => setPage(p)}
            />
          ))}

          <Button
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
            disabled={page === TOTAL_PAGES}
            endIcon={<ArrowForwardIcon sx={{ fontSize: "14px !important" }} />}
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "none",
              minWidth: "auto",
              px: "8px",
              "&.Mui-disabled": { opacity: 0.4 },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
