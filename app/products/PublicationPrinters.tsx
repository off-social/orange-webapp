"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

const buttons = [
  {
    previewImage: [
      {
        src: "/img1.png",
        name: "K24 Digital Textile Printer",
        desc: "High-Speed Precision Textile Printing Machine",
      },
      {
        src: "/img1.png",
        name: "K24 Pro Model",
        desc: "Advanced Fabric Printing Solution",
      },
      {
        src: "/img1.png",
        name: "K24 Ultra",
        desc: "Industrial Grade Textile Printer",
      },
    ],
  },
];

export default function PublicationPrinters() {
  const selected = 0;
  const [activeImg, setActiveImg] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / buttons[selected].previewImage.length;
    const index = Math.round(el.scrollLeft / slideWidth);
    setActiveImg(index);
  };

  const handlePrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / buttons[selected].previewImage.length;
    const newIndex = Math.max(0, activeImg - 1);
    el.scrollTo({ left: newIndex * slideWidth, behavior: "smooth" });
  };

  const handleNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / buttons[selected].previewImage.length;
    const newIndex = Math.min(
      buttons[selected].previewImage.length - 1,
      activeImg + 1,
    );
    el.scrollTo({ left: newIndex * slideWidth, behavior: "smooth" });
  };

  const currentImg = buttons[selected]?.previewImage?.[activeImg];
  const animKey = `${selected}-${activeImg}`;

  return (
    <>
      <Grid
        size={12}
        sx={{
          pt: { xs: 4, sm: 5, md: 2 },
          pb: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 4, md: 10 },
        }}
      >
        <Typography
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "28px", sm: "34px", md: "40px" },
            fontWeight: 500,
            color: "#000",
            lineHeight: "104%",
          }}
        >
          Publication Printers
        </Typography>

        <Typography
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            fontWeight: 400,
            color: "#404040",
            mt: 1,
          }}
        >
          Reliable High-Volume Publication Printing Systems
        </Typography>
      </Grid>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {/* Fade keyframe */}
        <style>{`
            @keyframes fadeSlideUp {
              from {
                opacity: 0;
                transform: translateY(8px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        {buttons[0].previewImage && (
          <Box sx={{ width: "100%", mt: 5, overflow: "hidden" }}>
            <Box
              ref={scrollRef}
              onScroll={handleScroll}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "5%", md: "20%" },
                px: { xs: "5vw", md: "20vw" },
                width: "100%",
                overflowX: "scroll",
                overflowY: "hidden",
                scrollBehavior: "smooth",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {buttons[selected].previewImage.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "85vw", md: "55vw" },
                    height: { xs: "220px", md: "22vw" },
                    position: "relative",
                    flexShrink: 0,
                    scrollSnapAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={`preview-${index}`}
                    width={900}
                    height={500}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain", // ← cover se contain
                      borderRadius: "20px",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}
        {currentImg && currentImg.name && currentImg.desc && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: { xs: 2, md: "25%" },
                mt: 3,
              }}
            >
              <Box
                key={animKey}
                sx={{
                  animation:
                    "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "32px" },
                    fontWeight: 700,
                    color: "#404040",
                  }}
                >
                  {currentImg.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "16px" },
                    fontWeight: 300,
                    color: "#404040",
                  }}
                >
                  {currentImg.desc}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  onClick={handlePrev}
                  disabled={activeImg === 0}
                  sx={{
                    minWidth: "40px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                    color: "#404040",
                    bgcolor: "#D9D9D9",

                    "&.Mui-disabled": {
                      bgcolor: "#E0E0E0",
                      color: "#999",
                      border: "1px solid #E0E0E0",
                      opacity: 0.7,
                    },

                    "&:hover": {
                      border: "1px solid #000",
                      color: "#F7931E",
                      bgcolor: "#404040",
                    },
                  }}
                >
                  ←
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={
                    activeImg === buttons[selected].previewImage.length - 1
                  }
                  sx={{
                    minWidth: "40px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                    color: "#404040",
                    bgcolor: "#D9D9D9",

                    "&.Mui-disabled": {
                      bgcolor: "#E0E0E0",
                      color: "#999",
                      border: "1px solid #E0E0E0",
                      opacity: 0.7,
                    },

                    "&:hover": {
                      border: "1px solid #000",
                      color: "#F7931E",
                      bgcolor: "#404040",
                    },
                  }}
                >
                  →
                </Button>
              </Box>
            </Box>

            <Box
              key={animKey}
              sx={{
                display: "flex",
                mt: 3,
                gap: 2,
                px: { xs: 2, md: "25%" },
                // mb: { xs: 4, md: 0 },
                // mb: { xs: 4, md: 0 },
                mb: 10,
                animation:
                  "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "#FFF",
                  bgcolor: "#000",
                  borderColor: "#000",
                  borderRadius: "19.58px",
                  textTransform: "none",
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                Know More
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#111",
                  bgcolor: "#fff",
                  borderColor: "#111",
                  borderRadius: "19.58px",
                  textTransform: "none",
                  fontSize: { xs: "12px", md: "14px" },
                  px: { xs: 2, md: 3 },
                  "&:hover": { bgcolor: "rgba(0,0,0,0.05)" },
                }}
              >
                Get a Quote
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
