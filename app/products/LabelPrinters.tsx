"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

const products = [
  {
    src: "/LabelPrinters.png",
    name: "K24 Digital Label Printer",
    desc: "High-Speed Precision Label Printing Machine.",
  },
];

const FADE_ANIM = "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";


export default function LabelPrinters() {
  const [activeImg, setActiveImg] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getSlideWidth = () => {
    const el = scrollRef.current;
    return el ? el.scrollWidth / products.length : 0;
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveImg(Math.round(el.scrollLeft / getSlideWidth()));
  };

  const scrollTo = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * getSlideWidth(),
      behavior: "smooth",
    });
  };

  const currentImg = products[activeImg];
  const animKey = `label-${activeImg}`;

  return (
    <Box sx={{ width: "100%", overflow: "hidden", bgcolor: "#F5F5F5" }}>
      <style>{`@keyframes fadeSlideUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }`}</style>

      {/* Heading */}
      <Box sx={{ textAlign: "center", pt: { xs: 5, md: 8 }, pb: 2, px: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            color: "#333",
            fontFamily: "Inter, sans-serif",
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          Label Printers
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            lineHeight: "25.6px",
            mt: "4px",
          }}
        >
          Advanced Label Printing Solutions
        </Typography>
      </Box>

      {/* Carousel */}
      <Box sx={{ width: "100%", mt: 5, position: "relative" }}>
        <Box
          ref={scrollRef}
          onScroll={handleScroll}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "5%", sm: "8%", md: "20%" },
            px: { xs: "8vw", sm: "10vw", md: "20vw" },
            width: "100%",
            overflowX: "scroll",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {products.map((img, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "auto", sm: "65vw", md: "55vw" },
                height: { xs: "181px", sm: "240px", md: "22vw" },
                aspectRatio: { xs: "201 / 101", sm: "unset" },
                alignSelf: "stretch",
                flexShrink: 0,
                scrollSnapAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={img.src}
                alt={img.name}
                width={900}
                height={500}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>

      </Box>

      {/* Product info */}
      <Box
        key={animKey}
        sx={{
          textAlign: "center",
          px: { xs: "16px", sm: "10%", md: "20%" },
          mt: { xs: 2, md: 3 },
          animation: FADE_ANIM,
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "26px",
          }}
        >
          {currentImg.name}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "19.2px",
            mt: "6px",
          }}
        >
          {currentImg.desc}
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        key={`btn-${animKey}`}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "12px", md: 2 },
          mt: 3,
          justifyContent: "center",
          px: { xs: "16px", md: 0 },
          animation: FADE_ANIM,
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
          sx={{
            bgcolor: "#F6891F",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            px: 3,
            py: "13px",
            boxShadow: "none",
            width: { xs: "100%", md: "auto" },
            "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
          }}
        >
          Book a Consultation
        </Button>
        <Button
          component={Link}
          href="/product-details"
          variant="outlined"
          sx={{
            color: "#111",
            bgcolor: "#fff",
            borderColor: "#e0e0e0",
            borderRadius: "12px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            px: 3,
            py: "13px",
            boxShadow: "none",
            width: { xs: "100%", md: "auto" },
            "&:hover": { bgcolor: "#f5f5f5", boxShadow: "none" },
          }}
        >
          Know More
        </Button>
      </Box>

      {/* Dots */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "4px",
          mt: "20px",
          mb: { xs: 6, md: 10 },
        }}
      >
        {products.map((_, i) => (
          <Box
            key={i}
            onClick={() => scrollTo(i)}
            sx={{
              width: i === activeImg ? "24px" : "8px",
              height: "8px",
              borderRadius: "16px",
              bgcolor: i === activeImg ? "#111" : "#e0e0e0",
              cursor: "pointer",
              transition: "width 0.2s, background-color 0.2s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
