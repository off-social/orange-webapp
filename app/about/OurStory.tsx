"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { keyframes } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const slideFromRight = keyframes`
  from { opacity: 0; transform: translateX(48px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const slideFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-48px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const milestones = [
  {
    year: 2011,
    title: "A Vision Takes Shape",
    desc: "Orange O Tec was founded in Surat with a clear vision: to transform the textile printing industry through digital technology. What began as an ambitious idea soon became a mission to help manufacturers embrace faster, smarter, and more efficient printing solutions.",
  },
  {
    year: 2015,
    title: "Pioneering Industry Innovation",
    desc: "A defining milestone was achieved with the installation of India's first Single Pass Digital Textile Printer, which was also the 10th installation of its kind worldwide. This achievement reinforced Orange O Tec's position as a technology leader and early adopter of next-generation printing solutions.",
  },
  {
    year: 2017,
    title: "Reaching New Industry Benchmarks",
    desc: "Orange O Tec became the first company in India to successfully sell 100 industrial textile printers. This milestone reflected growing customer trust and the company's expanding footprint across the country's textile manufacturing sector.",
  },
  {
    year: 2019,
    title: "Introducing World-Class Speed",
    desc: "The company introduced MINI LARIO, recognized as the world's fastest scanning digital textile printer. This marked another step forward in bringing cutting-edge global technologies to Indian manufacturers seeking higher productivity and superior print performance.",
  },
  {
    year: 2020,
    title: "Expanding Beyond Borders",
    desc: "Orange O Tec began serving international markets while introducing digitally sourced printing machines under the Homer brand. This expansion demonstrated the company's growing capabilities and commitment to delivering innovative solutions on a global scale.",
  },
  {
    year: 2021,
    title: "A Decade of Growth",
    desc: "Within just ten years of operation, Orange O Tec achieved a turnover of ₹100 crore. This milestone highlighted a decade of sustained growth, strong customer relationships, and a relentless focus on innovation and service excellence.",
  },
  {
    year: 2022,
    title: "Market Leadership Achieved",
    desc: "Orange O Tec captured over 50% market share in high-speed industrial sublimation textile printing. This achievement further strengthened its reputation as one of India's most trusted providers of advanced digital printing technologies.",
  },
  {
    year: 2023,
    title: "Strengthening Local Manufacturing",
    desc: "The company commenced in-house machine assembly operations in India, reinforcing its commitment to local manufacturing, quality control, and faster customer support. This milestone marked an important step toward greater operational independence and scalability.",
  },
  {
    year: 2024,
    title: "Accelerating Growth at Scale",
    desc: "Orange O Tec surpassed 600 machine installations across India while launching the Foiljet Textile Printer. The company also crossed ₹250 crore in turnover, reflecting rapid growth, market leadership, and continued investment in innovation.",
  },
  {
    year: 2025,
    title: "Building the Future",
    desc: "Orange O Tec continues to set new industry benchmarks with its Surat-based ink production facility and the expansion of its manufacturing capabilities through a 20,000 sq. ft. assembly plant. These investments reinforce the company's long-term vision of driving innovation, self-reliance, and sustainable growth across the printing industry.",
  },
];

const N = milestones.length;

export default function OurStory() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = timelineScrollRef.current;
    if (!container) return;
    const itemWidth = container.scrollWidth / N;
    const targetScroll = itemWidth * selectedIndex - container.clientWidth / 2 + itemWidth / 2;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [selectedIndex]);

  const handleSelect = (index: number) => {
    if (index === selectedIndex) return;
    setDirection(index > selectedIndex ? "next" : "prev");
    setSelectedIndex(index);
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setDirection("prev");
      setSelectedIndex((i) => i - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < N - 1) {
      setDirection("next");
      setSelectedIndex((i) => i + 1);
    }
  };

  // Orange progress line width: from dot 0 to dot selectedIndex
  const orangeWidth = `${(selectedIndex / N) * 100}%`;

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "80px 16px", sm: "80px 40px", md: "80px 80px", lg: "80px 263px", xl: "80px 560px" },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "48px", md: "64px" },
        alignSelf: "stretch",
        bgcolor: "#F2F2F2",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 400,
            lineHeight: "25.6px",
            letterSpacing: "10px",
            textTransform: "uppercase",
          }}
        >
          Our Story
        </Typography>
        <Typography
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "26px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "34px", md: "52px" },
            letterSpacing: "-1px",
            maxWidth: "620px",
          }}
        >
          15+ Years of Shaping the Future of Textile Printing
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
            maxWidth: "520px",
            mt: "8px",
          }}
        >
          Driven by expertise and innovation, we have spent more than 15 years
          transforming the way businesses print, produce, and grow. Every
          milestone reflects our commitment to technology, quality, and customer
          success.
        </Typography>
      </Box>

      {/* Timeline + Content */}
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "40px" }}
      >
        {/* Timeline */}
        <Box ref={timelineScrollRef} sx={{ width: "100%", overflowX: "auto", pb: "4px", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
          <Box sx={{ position: "relative", minWidth: "560px" }}>
            {/* Year labels */}
            <Box sx={{ display: "flex", mb: "8px" }}>
              {milestones.map((m, i) => (
                <Box
                  key={m.year}
                  onClick={() => handleSelect(i)}
                  sx={{
                    width: `${100 / N}%`,
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      px: "10px",
                      py: "3px",
                      borderRadius: "20px",
                      bgcolor: i === selectedIndex ? "#F6891F" : "transparent",
                      border: i === selectedIndex ? "1px solid #F6891F" : "1px solid transparent",
                      transition: "all 0.25s ease",
                      "&:hover": i !== selectedIndex ? { border: "1px solid #BDBDBD" } : {},
                    }}
                  >
                    <Typography
                      sx={{
                        color: i === selectedIndex ? "#FFF" : "#999",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        fontWeight: 500,
                        lineHeight: "20px",
                        transition: "color 0.25s ease",
                        userSelect: "none",
                      }}
                    >
                      {m.year}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Line + dots */}
            <Box sx={{ position: "relative", height: "14px" }}>
              {/* Grey background line */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: `${50 / N}%`,
                  right: `${50 / N}%`,
                  height: "1px",
                  bgcolor: "#D9D9D9",
                  transform: "translateY(-50%)",
                }}
              />
              {/* Orange progress line */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: `${50 / N}%`,
                  width: orangeWidth,
                  height: "2px",
                  bgcolor: "#F6891F",
                  transform: "translateY(-50%)",
                  transition: "width 0.4s ease",
                }}
              />
              {/* Dots */}
              <Box sx={{ display: "flex", position: "relative", zIndex: 1, height: "100%", alignItems: "center" }}>
                {milestones.map((m, i) => (
                  <Box
                    key={m.year}
                    onClick={() => handleSelect(i)}
                    sx={{
                      width: `${100 / N}%`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        width: i === selectedIndex ? "10px" : "7px",
                        height: i === selectedIndex ? "10px" : "7px",
                        borderRadius: "50%",
                        bgcolor: i <= selectedIndex ? "#F6891F" : "#BDBDBD",
                        transition: "all 0.25s ease",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Animated content */}
        <Box
          key={selectedIndex}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            textAlign: "center",
            animation: `${direction === "next" ? slideFromRight : slideFromLeft} 0.28s ease forwards`,
            height: { xs: "auto", md: "217px" },
            overflow: { xs: "visible", md: "hidden" },
            pb: { xs: "8px", md: 0 },
          }}
        >
          <Typography
            sx={{
              color: "#F6891F",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "25.6px",
            }}
          >
            {milestones[selectedIndex].year}
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "20px", md: "28px" },
              fontWeight: 500,
              lineHeight: { xs: "26px", md: "36px" },
              letterSpacing: { xs: 0, md: "-0.5px" },
            }}
          >
            {milestones[selectedIndex].title}
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", md: "22.4px" },
              maxWidth: "460px",
            }}
          >
            {milestones[selectedIndex].desc}
          </Typography>
        </Box>

        {/* Prev / Next — outside animated box so they don't animate */}
        <Box sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <IconButton
            onClick={handlePrev}
            disabled={selectedIndex === 0}
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #E0E0E0",
              bgcolor: "#FFF",
              "&:hover": { bgcolor: "#f5f5f5" },
              "&.Mui-disabled": { opacity: 0.35 },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "18px", color: "#333" }} />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={selectedIndex === N - 1}
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #E0E0E0",
              bgcolor: "#FFF",
              "&:hover": { bgcolor: "#f5f5f5" },
              "&.Mui-disabled": { opacity: 0.35 },
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: "18px", color: "#333" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
