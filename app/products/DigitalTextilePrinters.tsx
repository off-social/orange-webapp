"use client";

import { useConsultation } from "@/data/ConsultationContext";
import { productHref } from "@/data/products";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type PreviewImage = {
  src: string;
  name: string;
  desc: string;
};

type RadoTab = {
  label: string;
  previewImage: PreviewImage[];
};

type BrandItem = {
  name: string;
  image: string;
  previewImage: PreviewImage[];
  tabs?: RadoTab[];
};

const brands: BrandItem[] = [
  {
    name: "Colorix",
    image: "/colorix.webp",
    previewImage: [
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
        name: "SubPro S-16 Industrial Sublimation Printer",
        desc: "Designed to Handle Demanding Production with Ease.",
      },
      {
        src: "/radoimgA2.webp",
        name: "SubPro II Industrial Dye-Sublimation Printer",
        desc: "Engineered for High-Volume Printing with Exceptional Clarity.",
      },
    ],
  },
  {
    name: "Homer",
    image: "/homer.webp",
    previewImage: [
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
    name: "MS",
    image: "/ms.webp",
    previewImage: [
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
  {
    name: "Rado",
    image: "/rado.webp",
    previewImage: [],
    tabs: [
      {
        label: "Foil",
        previewImage: [
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
        ],
      },
      {
        label: "Alpha",
        previewImage: [
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
      // {
      //   label: "Sub Pro",
      //   previewImage: [
      //     {
      //       src: "/radoimgA1.webp",
      //       name: "SubPro S-16 Industrial Sublimation Printer",
      //       desc: "Designed to Handle Demanding Production with Ease.",
      //     },
      //     {
      //       src: "/radoimgA2.webp",
      //       name: "SubPro II Industrial Dye-Sublimation Printer",
      //       desc: "Engineered for High-Volume Printing with Exceptional Clarity.",
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "Pengda",
    image: "/pengda.webp",
    previewImage: [
      {
        src: "/Pengda1.webp",
        name: "Pengda Industrial Sublimation Machine",
        desc: "Delivering Reliable Performance for High-Volume Textile Applications.",
      },
    ],
  },
  {
    name: "MAS",
    image: "/MAS.webp",
    previewImage: [
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
];

const RADO_INDEX = 3;
const FADE_ANIM = "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";

const NAV_BTN_SX = {
  minWidth: { xs: "44px", md: "52px" },
  width: { xs: "44px", md: "52px" },
  height: { xs: "44px", md: "52px" },
  borderRadius: "100px",
  border: "1px solid #e8e8e8",
  color: "#111",
  bgcolor: "#fff",
  fontSize: "20px",
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

export default function DigitalTextilePrinters() {
  const { openModal } = useConsultation();
  const [selected, setSelected] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [radoTab, setRadoTab] = useState(0);
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleBrandChange = (index: number) => {
    setSelected(index);
    setActiveImg(0);
    setRadoTab(0);
    setTimeout(
      () => scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" }),
      50,
    );
  };

  const handleRadoTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setRadoTab(newValue);
    setActiveImg(0);
    setTimeout(
      () => scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" }),
      50,
    );
  };

  const activeImages =
    selected === RADO_INDEX
      ? (brands[RADO_INDEX].tabs?.[radoTab]?.previewImage ?? [])
      : (brands[selected]?.previewImage ?? []);

  const getSlideWidth = () => {
    const el = scrollRef.current;
    return el ? el.scrollWidth / activeImages.length : 0;
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

  const currentImg = activeImages[activeImg];
  const animKey = `${selected}-${radoTab}-${activeImg}`;
  // Enable "Know More" only for products that have a registered details page.
  // productHref() returns the "/product-details" fallback for unregistered ones.
  const knowMoreDisabled =
    !currentImg || productHref(currentImg.name) === "/product-details";

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

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
          Digital Textile Printers
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
          High-Speed Fabric Printing Systems
        </Typography>
      </Box>

      {/* Brand Selector */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: { xs: "flex-start", md: "center" },
          gap: { xs: "8px", md: "14px" },
          mt: 3,
          px: { xs: 1, md: 0 },
          maxWidth: "900px",
          mx: "auto",
          overflowX: { xs: "auto", md: "visible" },
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {brands.map((brand, index) => (
          <Button
            key={brand.name}
            onClick={() => handleBrandChange(index)}
            onMouseEnter={() => setHoveredBrand(index)}
            onMouseLeave={() => setHoveredBrand(null)}
            sx={{
              flex: { xs: "0 0 auto", md: "1 0 0" },
              minWidth: { xs: "100px", md: 0 },
              display: "flex",
              padding: "10px 12px",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              borderRadius: "16px",
              border:
                selected === index ? "2px solid #F6891F" : "1px solid #E0E0E0",
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
                  selected === index || hoveredBrand === index
                    ? "none"
                    : "grayscale(1)",
              }}
            >
              <Image
                src={
                  brand.tabs
                    ? (brand.tabs[0]?.previewImage[0]?.src ?? brand.image)
                    : (brand.previewImage[0]?.src ?? brand.image)
                }
                alt={brand.name}
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
                  selected === index || hoveredBrand === index
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

      {/* Rado Sub-tabs */}
      {selected === RADO_INDEX && (
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            flexWrap: { xs: "nowrap", md: "wrap" },
            justifyContent: "center",
            overflowX: { xs: "auto", md: "visible" },
            mt: 4,
            px: { xs: 1, md: 0 },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {brands[RADO_INDEX].tabs?.map((tab, i) => (
            <Button
              key={i}
              onClick={() => handleRadoTabChange({} as React.SyntheticEvent, i)}
              sx={{
                padding: "12px 24px",
                borderRadius: "32px",
                bgcolor: radoTab === i ? "#111" : "#FFF",
                color: radoTab === i ? "#FFF" : "#333",
                border: radoTab === i ? "1px solid #111" : "1px solid #E0E0E0",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "22.4px",
                whiteSpace: "nowrap",
                flexShrink: 0,
                boxShadow: "none",
                "&:hover": {
                  bgcolor: radoTab === i ? "#333" : "#f5f5f5",
                  boxShadow: "none",
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
      )}

      {/* Carousel */}
      {activeImages.length > 0 && (
        <Box sx={{ width: "100%", mt: 5, position: "relative" }}>
          {/* Left arrow */}
          <Button
            onClick={() => scrollTo(Math.max(0, activeImg - 1))}
            disabled={activeImg === 0}
            sx={{
              ...NAV_BTN_SX,
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: { md: "calc(20vw - 56px)" },
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
            {activeImages.map((img, index) => (
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Right arrow */}
          <Button
            onClick={() =>
              scrollTo(Math.min(activeImages.length - 1, activeImg + 1))
            }
            disabled={activeImg === activeImages.length - 1}
            sx={{
              ...NAV_BTN_SX,
              display: { xs: "none", md: "flex" },
              position: "absolute",
              right: { md: "calc(20vw - 56px)" },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: "20px" }} />
          </Button>
        </Box>
      )}

      {/* Product info */}
      {currentImg && (
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
              variant="outlined"
              disabled={knowMoreDisabled}
              {...(knowMoreDisabled
                ? {}
                : { component: Link, href: productHref(currentImg.name) })}
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
                <ArrowForwardIcon sx={{ fontSize: "15px !important" }} />
              }
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
              onClick={() => openModal(currentImg.name)}
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
              mb: { xs: 6, md: 10 },
            }}
          >
            {activeImages.map((_, i) => (
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
        </>
      )}
    </Box>
  );
}
