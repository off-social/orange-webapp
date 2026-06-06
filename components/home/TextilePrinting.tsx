"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

type Product = { src: string; name: string; desc: string };
type Brand = { name: string; image: string; products: Product[] };

const BRANDS: Brand[] = [
  {
    name: "Colorix",
    image: "/colorix.png",
    products: [
      {
        src: "/PositionPro1.png",
        name: "Position Pro Digital Textile Printer",
        desc: "Precision Positioning for High-Speed Fabric Printing.",
      },
      {
        src: "/FabPro1i1.png",
        name: "FabPro 1i Digital Textile Printer (Made in India)",
        desc: "Engineered for Vibrant Prints, Faster Production & Superior Quality",
      },
      {
        src: "/FabPro2i1.png",
        name: "FabPro 2i Digital Textile Printer (Made in India)",
        desc: "High-Speed Precision Textile Printing.",
      },
    ],
  },
  {
    name: "Homer",
    image: "/homer.png",
    products: [
      {
        src: "/K241.png",
        name: "K24 Digital Textile Printer",
        desc: "Engineered for Exceptional Precision & Consistent Print Accuracy.",
      },
      {
        src: "/K641.png",
        name: "K64 Digital Textile Printer",
        desc: "Advanced Precision for Superior Fabric Print Quality.",
      },
      {
        src: "/K321.png",
        name: "K32 Digital Textile Printer",
        desc: "Delivering Accurate, High-Quality Results Across Every Print Run.",
      },
    ],
  },
  {
    name: "MS",
    image: "/ms.png",
    products: [
      {
        src: "/JP701.png",
        name: "JP7 Industrial Digital Textile Printer",
        desc: "Intelligent Printing for Demanding Production Environments.",
      },
      {
        src: "/JPK-Evo01.png",
        name: "JPK Evo Industrial Digital Textile Printer",
        desc: "Engineered for Long-Run Performance and Uninterrupted Productivity.",
      },
      {
        src: "/Minilario01.png",
        name: "Minilario Industrial Digital Textile Printer",
        desc: "Optimized for Efficiency, Reliability, and Scalable Growth.",
      },
    ],
  },
  {
    name: "Rado",
    image: "/rado.png",
    products: [
      {
        src: "/radoimg1.png",
        name: "FoilJet 8 Head Digital Printer",
        desc: "Designed for High-Impact Effects and Superior Visual Appeal.",
      },
      {
        src: "/radoimg2.png",
        name: "FoilJet 16 Head Digital Printer",
        desc: "Designed for Large-Scale Printing with Consistent Results.",
      },
      {
        src: "/radoimgAlpha1.png",
        name: "Alpha II Industrial Sublimation Printer",
        desc: "Built for Continuous Production and Exceptional Transfer Quality.",
      },
      {
        src: "/radoimgAlpha2.png",
        name: "Alpha III Industrial Sublimation Printer",
        desc: "Built for Maximum Output and Uninterrupted Production.",
      },
      {
        src: "/radoimgAlpha3.png",
        name: "Alpha 15 Industrial Sublimation Printer",
        desc: "Built for Ultra-High Production and Industrial-Grade Performance.",
      },
      {
        src: "/radoimgAlpha4.png",
        name: "Alpha 16 Industrial Sublimation Printer",
        desc: "Combining Power, Precision, and Production Efficiency.",
      },
      {
        src: "/radoimgA1.png",
        name: "SubPro S-16 Industrial Sublimation Printer",
        desc: "Designed to Handle Demanding Production with Ease.",
      },
      {
        src: "/radoimgA2.png",
        name: "SubPro II Industrial Dye-Sublimation Printer",
        desc: "Engineered for High-Volume Printing with Exceptional Clarity.",
      },
    ],
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

const TextilePrinting = () => {
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentProducts = BRANDS[selectedBrand].products;

  const getSlideWidth = () => {
    const el = scrollRef.current;
    return el ? el.scrollWidth / currentProducts.length : 0;
  };

  const scrollToIndex = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * getSlideWidth(),
      behavior: "smooth",
    });
  };

  const handleBrandChange = (index: number) => {
    setSelectedBrand(index);
    setActiveImg(0);
    setTimeout(
      () => scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" }),
      50,
    );
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveImg(Math.round(el.scrollLeft / getSlideWidth()));
  };

  const currentProduct = currentProducts[activeImg];
  const animKey = `${selectedBrand}-${activeImg}`;

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>

      {/* Brand Selector */}
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: { xs: "8px", md: "14px" },
          mt: 3,
          px: { xs: 1, md: 0 },
          maxWidth: "900px", // ✅ yahan add karo
          width: "100%",
          mx: "auto", // ✅ center karne ke liye
        }}
      >
        {BRANDS.map((brand, index) => (
          <Button
            key={brand.name}
            onClick={() => handleBrandChange(index)}
            sx={{
              flex: "1 0 0",
              minWidth: 0,
              display: "flex",
              padding: "16px 20px",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              borderRadius: "16px",
              border:
                selectedBrand === index
                  ? "2px solid #F6891F"
                  : "1px solid #E0E0E0",
              background: "#fff",
              transition: "0.2s",
              "&:hover": { borderColor: "#F6891F" },
            }}
          >
            <Box
              sx={{
                width: { xs: "64px", sm: "76px", md: "90px" },
                height: { xs: "32px", sm: "38px", md: "44px" },
                position: "relative",
              }}
            >
              <Image
                src={brand.products[0].src}
                alt={brand.products[0].name}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "44px", sm: "52px", md: "60px" },
                height: "14px",
                position: "relative",
              }}
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Button>
        ))}
      </Box>

      {/* Product Image Carousel — arrows float on left/right edges */}
      <Box sx={{ width: "100%", mt: 5, position: "relative" }}>
        {/* Left arrow */}
        <Button
          onClick={() => scrollToIndex(Math.max(0, activeImg - 1))}
          sx={{
            ...NAV_BTN_SX,
            position: "absolute",
            left: { xs: "8px", md: "24px" },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          ←
        </Button>

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
          {currentProducts.map((product, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "80vw", sm: "65vw", md: "55vw" },
                height: { xs: "180px", sm: "240px", md: "22vw" },
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

        {/* Right arrow */}
        <Button
          onClick={() =>
            scrollToIndex(Math.min(currentProducts.length - 1, activeImg + 1))
          }
          sx={{
            ...NAV_BTN_SX,
            position: "absolute",
            right: { xs: "8px", md: "24px" },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          →
        </Button>
      </Box>

      {/* Product Info & Actions — centered */}
      {currentProduct && (
        <>
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
                fontFamily: '"Stack Sans Headline", sans-serif',
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "31.2px",
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
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "25.6px",
                mt: "6px",
              }}
            >
              {currentProduct.desc}
            </Typography>
          </Box>

          {/* Dot indicators */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "4px",
              mt: "20px",
            }}
          >
            {currentProducts.map((_, i) => (
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

          <Box
            key={`btn-${animKey}`}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "12px", md: 2 },
              mt: 3,
              justifyContent: "center",
              mb: { xs: 4, md: 2 },
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
                px: { xs: 3, md: 3 },
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
              endIcon={
                <ArrowForwardIcon sx={{ fontSize: "15px !important" }} />
              }
              sx={{
                bgcolor: "#F6891F",
                color: "#fff",
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                px: { xs: 3, md: 3 },
                py: "13px",
                boxShadow: "none",
                width: { xs: "100%", md: "auto" },
                "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
              }}
            >
              Get a Quote
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TextilePrinting;
