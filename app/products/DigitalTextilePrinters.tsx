"use client";

import {
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
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

const buttons: BrandItem[] = [
  {
    name: "Colorix",
    image: "/colorix.png",
    previewImage: [
      {
        src: "/PositionPro1.png",
        name: "K24 Digital Textile Printer",
        desc: "K24 Digital Textile Printer",
      },
      {
        src: "/FabPro1i1.png",
        name: "K24 Digital Textile Printer",
        desc: "K24 Digital Textile Printer",
      },
      {
        src: "/FabPro2i1.png",
        name: "K24 Digital Textile Printer",
        desc: "K24 Digital Textile Printer",
      },
    ],
  },
  {
    name: "Homer",
    image: "/homer.png",
    previewImage: [
      {
        src: "/K241.png",
        name: "K24 Digital Textile Printer",
        desc: "High-Speed Precision Textile Printing Machine",
      },
      {
        src: "/K641.png",
        name: "K24 Pro Model",
        desc: "Advanced Fabric Printing Solution",
      },
      {
        src: "/K321.png",
        name: "K24 Ultra",
        desc: "Industrial Grade Textile Printer",
      },
    ],
  },
  {
    name: "MS",
    image: "/ms.png",
    previewImage: [
      { src: "/JP701.png", name: "K24 Ultra", desc: "K24 Ultra" },
      { src: "/JPK-Evo01.png", name: "K24 Ultra", desc: "K24 Ultra" },
      { src: "/Minilario01.png", name: "K24 Ultra", desc: "K24 Ultra" },
    ],
  },
  {
    name: "Rado",
    image: "/rado.png",
    previewImage: [],
    tabs: [
      {
        label: "Foil",
        previewImage: [
          {
            src: "/radoimg1.png",
            name: "Rado Foil",
            desc: "Foil Printing Machine",
          },
          {
            src: "/radoimg2.png",
            name: "Rado Foil Pro",
            desc: "Advanced Foil Printer",
          },
        ],
      },
      {
        label: "Alpha",
        previewImage: [
          {
            src: "/radoimgAlpha1.png",
            name: "Rado Alpha",
            desc: "Alpha Series Printer",
          },
          {
            src: "/radoimgAlpha2.png",
            name: "Rado Alpha Pro",
            desc: "Alpha Pro Series Printer",
          },
          {
            src: "/radoimgAlpha3.png",
            name: "Rado Alpha Pro",
            desc: "Alpha Pro Series Printer",
          },
          {
            src: "/radoimgAlpha4.png",
            name: "Rado Alpha Pro",
            desc: "Alpha Pro Series Printer",
          },
        ],
      },
      {
        label: "Sub Pro",
        previewImage: [
          {
            src: "/radoimgA1.png",
            name: "Rado Sub Pro",
            desc: "Sublimation Pro Printer",
          },
          {
            src: "/radoimgA2.png",
            name: "Rado Sub Pro Max",
            desc: "Sublimation Pro Max Printer",
          },
        ],
      },
    ],
  },
  {
    name: "Pengda",
    image: "/pengda.png",
    previewImage: [
      { src: "/Pengda1.png", name: "Pengda", desc: "Pengda Printer" },
    ],
  },
];

const RADO_INDEX = 3;

export default function DigitalTextilePrinters() {
  const [selected, setSelected] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [radoTab, setRadoTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBrandChange = (index: number) => {
    setSelected(index);
    setActiveImg(0);
    setRadoTab(0);
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 50);
  };

  const handleRadoTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setRadoTab(newValue);
    setActiveImg(0);
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 50);
  };

  const activePreviewImages =
    selected === RADO_INDEX
      ? (buttons[RADO_INDEX].tabs?.[radoTab]?.previewImage ?? [])
      : (buttons[selected]?.previewImage ?? []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / activePreviewImages.length;
    const index = Math.round(el.scrollLeft / slideWidth);
    setActiveImg(index);
  };

  const handlePrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / activePreviewImages.length;
    const newIndex = Math.max(0, activeImg - 1);
    el.scrollTo({ left: newIndex * slideWidth, behavior: "smooth" });
  };

  const handleNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / activePreviewImages.length;
    const newIndex = Math.min(activePreviewImages.length - 1, activeImg + 1);
    el.scrollTo({ left: newIndex * slideWidth, behavior: "smooth" });
  };

  const currentImg = activePreviewImages[activeImg];
  const animKey = `${selected}-${radoTab}-${activeImg}`;

  return (
    <>
      <Grid
        size={12}
        sx={{
          pt: { xs: 4, sm: 5, md: 8 },
          pb: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 4, md: 10 },
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            fontSize: { xs: 24, sm: 32, md: 40 },
            fontWeight: 500,
            color: "#000",
            px: { xs: 2, md: 0 },
            lineHeight: "104%",
          }}
        >
          Digital Printing Ecosystem
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontSize: "16px",
            fontWeight: 400,
            color: "#404040",
            px: { xs: 2, md: 0 },
            mt: 1,
          }}
        >
          High-Speed Fabric Printing Systems
        </Typography>
      </Grid>

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {/* Fade keyframe */}
        <style>{`
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0);   }
          }
        `}</style>

        {/* Brand Buttons */}
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "center",
            gap: { xs: 1.5, md: 3 },
            mt: 3,
            px: { xs: 2, md: 0 },
          }}
        >
          {buttons.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleBrandChange(index)}
              sx={{
                width: { xs: "calc(50% - 6px)", md: "150px" },
                height: { xs: "44px", md: "50px" },
                border:
                  selected === index
                    ? "1px solid #F7931E"
                    : "1px solid #D9D9D9",
                borderRadius: "12px",
                background: "#fff",
                transition: "0.3s",
                "&:hover": { border: "1px solid #F7931E", background: "#fff" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "80px", md: "100px" },
                  height: "30px",
                  position: "relative",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Button>
          ))}
        </Box>

        {/* ── Rado Tabs (only when Rado is selected) ── */}
        {selected === RADO_INDEX && (
          <Box sx={{ mt: 4 }}>
            <Tabs
              value={radoTab}
              onChange={handleRadoTabChange}
              centered={!isMobile}
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons={isMobile ? "auto" : false}
              allowScrollButtonsMobile
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#F7931E",
                  height: "3px",
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  fontWeight: 600,
                  color: "#222",
                  px: { xs: 2, md: 4 },
                  mx: { md: 6 },
                  "&.Mui-selected": {
                    color: "#000",
                  },
                },
              }}
            >
              {buttons[RADO_INDEX].tabs?.map((tab, i) => (
                <Tab key={i} label={tab.label} />
              ))}
            </Tabs>
          </Box>
        )}

        {/* Carousel */}
        {activePreviewImages.length > 0 && (
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
              {activePreviewImages.map((img, index) => (
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
                      objectFit: "contain",
                      borderRadius: "20px",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Name / desc + nav arrows */}
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
                  disabled={activeImg === activePreviewImages.length - 1}
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
