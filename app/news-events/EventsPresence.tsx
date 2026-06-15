"use client";

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

const ALL_EVENTS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  img: "/blogImg1.png",
  title: "Orange O Tec at Gartex India 2025",
  location: "5th ITMACH India Helipad Exhibition Centre, Gandhinagar",
  isBlog: i === 3,
}));

export default function EventsPresence() {
  const [activeTab, setActiveTab] = useState(0);

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
            startIcon={
              <Image src="/DateIcon.svg" alt="Date" width={16} height={16} />
            }
            endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important" }} />}
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

      {/* Tabs + Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "100%",
        }}
      >
        {/* Tab bar */}
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
            {TABS.map((tab, i) => {
              const isActive = i === activeTab;
              return (
                <Box
                  key={tab}
                  onClick={() => setActiveTab(i)}
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
                    {tab}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Tab 0: Upcoming Exhibition */}
        {activeTab === 0 && (
          <>
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
              {ALL_EVENTS.map((event) => (
                <Box
                  key={event.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "16px",
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
                          sx={{
                            color: "#FFF",
                            fontSize: "10px",
                            lineHeight: 1,
                          }}
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
          </>
        )}

        {/* Tab 1: Past Events Gallery — blank */}
        {/* {activeTab === 1 && <Box sx={{ pb: "64px" }} />} */}

        {/* Tab 2: Booth Highlights — blank */}
        {/* {activeTab === 2 && <Box sx={{ pb: "64px" }} />} */}

        {/* Tab 3: Media Coverage — blank */}
        {/* {activeTab === 3 && <Box sx={{ pb: "64px" }} />} */}
      </Box>
    </Box>
  );
}
