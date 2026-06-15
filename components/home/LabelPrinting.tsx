"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

type Product = { src: string; name: string; desc: string };

const PRODUCTS: Product[] = [
  {
    src: "/Label1.png",
    name: "K24 Digital Label Printer",
    desc: "High-Speed Precision Label Printing Machine.",
  },
];

const FADE_ANIM = "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";

const NAV_BTN_SX = {
  minWidth: { xs: "36px", md: "48px" },
  width: { xs: "36px", md: "48px" },
  height: { xs: "36px", md: "48px" },
  borderRadius: "100px",
  border: "1px solid #e0e0e0",
  color: "#111",
  bgcolor: "#fff",
  "&:hover": { border: "1px solid #111", bgcolor: "#f5f5f5" },
};

const LabelPrinting = () => {
  const [activeImg, setActiveImg] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getSlideWidth = () => {
    const el = scrollRef.current;
    return el ? el.scrollWidth / PRODUCTS.length : 0;
  };

  const scrollToIndex = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * getSlideWidth(),
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveImg(Math.round(el.scrollLeft / getSlideWidth()));
  };

  const currentProduct = PRODUCTS[activeImg];
  const animKey = `label-${activeImg}`;

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>

      {/* Product Image Carousel */}
      <Box sx={{ width: "100%", mt: 2, position: "relative" }}>
        {PRODUCTS.length > 1 && (
          <Button
            onClick={() => scrollToIndex(Math.max(0, activeImg - 1))}
            sx={{
              ...NAV_BTN_SX,
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          >
            ←
          </Button>
        )}

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
          {PRODUCTS.map((product, index) => (
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
                src={product.src}
                alt={product.name}
                width={900}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "20px",
                }}
              />
            </Box>
          ))}
        </Box>

        {PRODUCTS.length > 1 && (
          <Button
            onClick={() =>
              scrollToIndex(Math.min(PRODUCTS.length - 1, activeImg + 1))
            }
            sx={{
              ...NAV_BTN_SX,
              display: { xs: "none", md: "flex" },
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          >
            →
          </Button>
        )}
      </Box>

      {/* Product name + description */}
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
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: 0,
          }}
        >
          {currentProduct.name}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "19.2px",
            mt: "6px",
          }}
        >
          {currentProduct.desc}
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
          animation: FADE_ANIM,
          px: { xs: "16px", md: 0 },
        }}
      >
        <Button
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
          Get a Quote
        </Button>
      </Box>

      {/* Dot indicators */}
      {PRODUCTS.length > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "4px",
            mt: "20px",
            mb: { xs: 4, md: 2 },
          }}
        >
          {PRODUCTS.map((_, i) => (
            <Box
              key={i}
              onClick={() => scrollToIndex(i)}
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
      )}
    </Box>
  );
};

export default LabelPrinting;
