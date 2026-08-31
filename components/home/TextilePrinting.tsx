"use client";

import { useConsultation } from "@/data/ConsultationContext";
import { productHref } from "@/data/products";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Product = { src: string; name: string; desc: string };
type Brand = { name: string; image: string; products: Product[] };

const BRANDS: Brand[] = [
  {
    name: "Colorix",
    image: "/colorix.webp",
    products: [
      {
        src: "/PositionPro1.webp",
        name: "Position Pro Digital Textile Printer",
        desc: "Precision Positioning for High-Speed Fabric Printing.",
      },
      {
        src: "/FabPro1i1.webp",
        name: "FabPro 1i Digital Textile Printer (Made in India)",
        desc: "Engineered for Vibrant Prints, Faster Production & Superior Quality",
      },
      {
        src: "/FabPro2i1.webp",
        name: "FabPro 2i Digital Textile Printer (Made in India)",
        desc: "High-Speed Precision Textile Printing.",
      },
      {
        src: "/radoimgA1.webp",
        name: "SubPro II Industrial Sublimation Printer",
        desc: "Designed to Handle Demanding Production with Ease.",
      },
    ],
  },
  {
    name: "Homer",
    image: "/homer.webp",
    products: [
      {
        src: "/K241.webp",
        name: "K24 Digital Textile Printer",
        desc: "Engineered for Exceptional Precision & Consistent Print Accuracy.",
      },
      {
        src: "/K321.webp",
        name: "K32 Digital Textile Printer",
        desc: "Delivering Accurate, High-Quality Results Across Every Print Run.",
      },
      {
        src: "/K641.webp",
        name: "K64 Digital Textile Printer",
        desc: "Advanced Precision for Superior Fabric Print Quality.",
      },
      {
        src: "/RoketImg1.webp",
        name: "Rocket Digital Textile Printer",
        desc: "World's Fastest Digital Textile Printer.",
      },
    ],
  },
  {
    name: "MAS",
    image: "/MAS.webp",
    products: [
      {
        src: "/MAS2.webp",
        name: "MAS Vertical",
        desc: "Smarter Way to Print Double-Sided Fabrics.",
      },
      {
        src: "/MAS1.webp",
        name: "MAS Twelve",
        desc: "Designed for Continuous Industrial Production.",
      },
    ],
  },
  {
    name: "Rado",
    image: "/rado.webp",
    products: [
      {
        src: "/radoimg1.webp",
        name: "FoilJet 8 Head Digital Printer",
        desc: "Designed for High-Impact Effects and Superior Visual Appeal.",
      },
      {
        src: "/radoimg2.webp",
        name: "FoilJet 16 Head Digital Printer",
        desc: "Designed for Large-Scale Printing with Consistent Results.",
      },
      {
        src: "/radoimgAlpha1.webp",
        name: "Alpha II Industrial Sublimation Printer",
        desc: "Built for Continuous Production and Exceptional Transfer Quality.",
      },
      {
        src: "/radoimgAlpha2.webp",
        name: "Alpha III Industrial Sublimation Printer",
        desc: "Built for Maximum Output and Uninterrupted Production.",
      },
      {
        src: "/radoimgAlpha3.webp",
        name: "Alpha 15 Industrial Sublimation Printer",
        desc: "Built for Ultra-High Production and Industrial-Grade Performance.",
      },
      {
        src: "/radoimgAlpha4.webp",
        name: "Alpha 16 Industrial Sublimation Printer",
        desc: "Combining Power, Precision, and Production Efficiency.",
      },
    ],
  },
  {
    name: "MS",
    image: "/ms.webp",
    products: [
      {
        src: "/JP701.webp",
        name: "JP7 Industrial Digital Textile Printer",
        desc: "Intelligent Printing for Demanding Production Environments.",
      },
      {
        src: "/JPK-Evo01.webp",
        name: "JPK Evo Industrial Digital Textile Printer",
        desc: "Engineered for Long-Run Performance and Uninterrupted Productivity.",
      },
      {
        src: "/Minilario01.webp",
        name: "Minilario Industrial Digital Textile Printer",
        desc: "Optimized for Efficiency, Reliability, and Scalable Growth.",
      },
    ],
  },
];

const FADE_ANIM = "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";

const NAV_BTN_SX = {
  minWidth: { xs: "44px", md: "52px" },
  width: { xs: "44px", md: "52px" },
  height: { xs: "44px", md: "52px" },
  borderRadius: "100px",
  border: "1px solid #e8e8e8",
  color: "#111",
  bgcolor: "#fff",
  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
  transition: "all 0.2s ease",
  "&:hover": {
    border: "1px solid #F6891F",
    bgcolor: "#F6891F",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(246,137,31,0.35)",
    transform: "translateY(-50%) scale(1.08)",
  },
  "&.Mui-disabled": {
    border: "1px solid #ededed",
    color: "#cfcfcf",
    bgcolor: "#fff",
    boxShadow: "none",
    opacity: 0.6,
  },
};

const TextilePrinting = () => {
  const { openModal } = useConsultation();
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentProducts = BRANDS[selectedBrand].products;

  // ── Mobile auto-scroll ──
  // On mobile there are no nav arrows, so the carousel advances on its own:
  // one machine every ~3.5s. The slides are rendered twice (see renderProducts
  // below), so at the last machine it keeps scrolling RIGHT onto a clone of the
  // first, then silently snaps back to the real first — a seamless loop with no
  // jump-back. Pauses while the user is actively touching/dragging.
  const [isMobile, setIsMobile] = useState(false);
  const activeImgRef = useRef(0);
  const autoplayPausedRef = useRef(false);

  useEffect(() => {
    activeImgRef.current = activeImg;
  }, [activeImg]);

  useEffect(() => {
    // matches MUI's md breakpoint — arrows are hidden below 900px
    const mq = window.matchMedia("(max-width: 899.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const getSlideWidth = () => {
    const el = scrollRef.current;
    if (!el || el.children.length === 0) return 0;
    // divide by the actual rendered slide count (includes clones on mobile)
    return el.scrollWidth / el.children.length;
  };

  const scrollToIndex = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * getSlideWidth(),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const len = currentProducts.length;
    if (!isMobile || len <= 1) return;
    const id = setInterval(() => {
      if (autoplayPausedRef.current) return;
      const next = activeImgRef.current + 1;
      // Scroll right onto the next (or cloned-first) slide. We deliberately do
      // NOT setActiveImg(next) here: handleScroll drives the active index from
      // the real scroll position, so setting it optimistically made the active
      // dot flicker back a step on every tick.
      scrollToIndex(next);
      if (next >= len) {
        // …then, once the smooth scroll settles, snap back to the real first
        // slide with no animation so the rightward loop looks continuous.
        setTimeout(() => {
          scrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
          setActiveImg(0);
        }, 700);
      }
    }, 3500);
    return () => clearInterval(id);
    // re-arm whenever the active brand (and thus product set) changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, selectedBrand, currentProducts.length]);

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

  // On mobile, render the slide list twice so the carousel can scroll right
  // past the last machine onto a clone of the first (see the autoplay effect).
  const loopEnabled = isMobile && currentProducts.length > 1;
  const renderProducts = loopEnabled
    ? [...currentProducts, ...currentProducts]
    : currentProducts;

  // activeImg can point into the cloned second half, so map it back to a real
  // product index for the caption, dots and "Know More" link.
  const displayIndex = activeImg % currentProducts.length;
  const currentProduct = currentProducts[displayIndex];
  const animKey = `${selectedBrand}-${displayIndex}`;
  // Enable "Know More" only for products that have a registered details page.
  // productHref() returns the "/product-details" fallback for unregistered ones.
  const knowMoreDisabled =
    !currentProduct || productHref(currentProduct.name) === "/product-details";

  return (
    <Box sx={{ width: "100%" }}>
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
          flexWrap: "nowrap",
          justifyContent: { xs: "flex-start", sm: "center" },
          gap: { xs: "8px", md: "14px" },
          px: { xs: 1, sm: 0 },
          maxWidth: "900px",
          width: "100%",
          mx: "auto",
          overflowX: { xs: "auto", sm: "visible" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {BRANDS.map((brand, index) => (
          <Button
            key={brand.name}
            onClick={() => handleBrandChange(index)}
            onMouseEnter={() => setHoveredBrand(index)}
            onMouseLeave={() => setHoveredBrand(null)}
            sx={{
              flex: { xs: "0 0 auto", md: "1 0 0" },
              minWidth: { xs: "120px", md: 0 },
              display: "flex",
              padding: { xs: "12px", md: "10px 12px" },
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              borderRadius: "16px",
              border:
                selectedBrand === index
                  ? "2px solid #F6891F"
                  : "1px solid #E0E0E0",
              background: "#fff",
              boxShadow: "none",
              transition: "border 0.2s",
              "&:hover": { boxShadow: "none" },
            }}
          >
            <Box
              sx={{
                width: { xs: "120px", md: "100%" },
                height: { xs: "40px", md: "56px" },
                position: "relative",
                transition: "filter 0.25s",
                filter:
                  selectedBrand === index || hoveredBrand === index
                    ? "none"
                    : "grayscale(1)",
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
                width: { xs: "55px", md: "100%" },
                height: { xs: "30px", md: "22px" },
                position: "relative",
                transition: "filter 0.25s",
                filter:
                  selectedBrand === index || hoveredBrand === index
                    ? "none"
                    : "grayscale(1)",
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

      {/* Product Image Carousel — full-bleed so neighbour machines peek past
          the section's horizontal padding (like the Mack Trucks carousel). */}
      <Box
        sx={{
          position: "relative",
          mt: 5,
          width: { xs: "100%", sm: "100vw" },
          left: { sm: "50%" },
          ml: { sm: "-50vw" },
        }}
      >
        <Button
          onClick={() => scrollToIndex(Math.max(0, activeImg - 1))}
          disabled={activeImg === 0}
          sx={{
            ...NAV_BTN_SX,
            display: { xs: "none", md: "flex" },
            position: "absolute",
            left: { md: "192px" },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          <ArrowBackIcon sx={{ fontSize: "20px" }} />
        </Button>

        <Box
          ref={scrollRef}
          onScroll={handleScroll}
          onPointerDown={() => {
            autoplayPausedRef.current = true;
          }}
          onPointerUp={() => {
            autoplayPausedRef.current = false;
          }}
          onPointerCancel={() => {
            autoplayPausedRef.current = false;
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "5%", sm: "4vw", md: "4vw" },
            px: { xs: "8vw", sm: "22.5vw", md: "22.5vw" },
            width: "100%",
            overflowX: "scroll",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {renderProducts.map((product, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "auto", sm: "55vw", md: "55vw" },
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

        <Button
          onClick={() =>
            scrollToIndex(Math.min(currentProducts.length - 1, activeImg + 1))
          }
          disabled={activeImg === currentProducts.length - 1}
          sx={{
            ...NAV_BTN_SX,
            display: { xs: "none", md: "flex" },
            position: "absolute",
            right: { md: "192px" },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: "20px" }} />
        </Button>
      </Box>

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
                fontFamily: "Inter, sans-serif",
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
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "19.2px",
                mt: "6px",
              }}
            >
              {currentProduct.desc}
            </Typography>
          </Box>

          <Box
            key={`btn-${animKey}`}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: "12px", md: 2 },
              mt: 3,
              justifyContent: "center",
              animation: FADE_ANIM,
              px: { xs: "16px", md: 0 },
            }}
          >
            <Button
              variant="outlined"
              disabled={knowMoreDisabled}
              {...(knowMoreDisabled
                ? {}
                : { component: Link, href: productHref(currentProduct.name) })}
              sx={{
                color: "#111",
                bgcolor: "#fff",
                borderColor: "#e0e0e0",
                borderRadius: "8px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", md: "13px" },
                fontWeight: 500,
                lineHeight: "20.8px",
                p: { xs: "12px 16px", md: "16px" },
                boxShadow: "none",
                flexShrink: 0,
                whiteSpace: "nowrap",
                width: { xs: "auto", md: "200px" },
                "&:hover": { bgcolor: "#f5f5f5", boxShadow: "none" },
                "&.Mui-disabled": {
                  color: "#bdbdbd",
                  borderColor: "#e0e0e0",
                  bgcolor: "#fff",
                },
              }}
            >
              Know More
            </Button>
            <Button
              variant="contained"
              endIcon={
                <ArrowForwardIcon
                  sx={{ fontSize: { xs: "14px !important", md: "16px !important" } }}
                />
              }
              sx={{
                bgcolor: "#F6891F",
                color: "#fff",
                borderRadius: "8px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", md: "13px" },
                fontWeight: 500,
                lineHeight: "20.8px",
                gap: { xs: "6px", md: "8px" },
                p: { xs: "12px 16px", md: "16px" },
                boxShadow: "none",
                flexShrink: 0,
                width: { xs: "auto", md: "200px" },
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
              }}
              onClick={() => openModal(currentProduct.name)}
            >
              Book a Consultation
            </Button>
          </Box>

          {/* Dot indicators */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "4px",
              mt: "20px",
              mb: { xs: 4, md: 2 },
            }}
          >
            {currentProducts.map((_, i) => (
              <Box
                key={i}
                onClick={() => scrollToIndex(i)}
                sx={{
                  width: i === displayIndex ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "16px",
                  bgcolor: i === displayIndex ? "#111" : "#e0e0e0",
                  cursor: "pointer",
                  transition: "width 0.2s, background-color 0.2s",
                }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default TextilePrinting;
