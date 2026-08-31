"use client";

import type { BlogPostListItem } from "@/data/blog.types";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DrivingSustainablePrinting from "./DrivingSustainablePrinting";
import HomeHero from "./HomeHero";
import IndustryPresence from "./IndustryPresence";
import InkSolutions from "./InkSolutions";
import LabelPrinting from "./LabelPrinting";
import LogoMarquee from "./LogoMarquee";
import MeetRocketBuiltProduction from "./MeetRocketBuiltProduction";
import PublicationPrinting from "./PublicationPrinting";
import ScrollVideos from "./ScrollVideos";
import StatsSection from "./StatsSection";
import TextileHero from "./TextileHero";
import TextilePrinting from "./TextilePrinting";
import TextileProcessing from "./TextileProcessing";
import TheFutureofDigitalPrinting from "./TheFutureofDigitalPrinting";
import ThePowerOfOrange from "./ThePowerOfOrange";

const Home = ({ newsPosts = [] }: { newsPosts?: BlogPostListItem[] }) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Grid size={12}>
        <HomeHero />
      </Grid>

      {/* Logo Marquee */}
      <Grid size={12}>
        <LogoMarquee />
      </Grid>

      {/* Ecosystem Section */}
      <Grid size={12}>
        <Box
          sx={{
            display: "flex",
            padding: { xs: "48px 16px", md: "100px 168px" },
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "24px", md: "40px" },
            alignSelf: "stretch",
            bgcolor: "#FFF",
          }}
        >
          {/* Title group */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#707070",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", md: "16px" },
                fontWeight: 400,
                lineHeight: "25.6px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              A COMPLETE
            </Typography>
            <Typography
              component="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "24px", md: "40px" },
                fontWeight: 500,
                color: "#333",
                lineHeight: { xs: "31.2px", md: "52px" },
                letterSpacing: 0,
                fontFamily: "Inter, sans-serif",
                m: 0,
              }}
            >
              Digital Printing Ecosystem
            </Typography>
          </Box>

          {/* Tabs — pill style */}
          {/* Tabs ki jagah ye use karo */}
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              flexWrap: { xs: "nowrap", md: "wrap" },
              justifyContent: { xs: "flex-start", md: "center" },
              alignItems: "center",
              overflowX: { xs: "auto", md: "visible" },
              width: "100%",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
              pb: { xs: "4px", md: 0 },
            }}
          >
            {[
              "Textile Printing",
              "Textile Processing",
              "Label Printing",
              "Publication Printing",
              "Ink Solutions",
            ].map((label, index) => (
              <Button
                key={index}
                onClick={() => setValue(index)}
                sx={{
                  display: "flex",
                  padding: { xs: "8px 20px", md: "12px 24px" },
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "32px",
                  bgcolor: value === index ? "#111" : "#FFF",
                  color: value === index ? "#FFF" : "#333",
                  border:
                    value === index ? "1px solid #111" : "1px solid #E0E0E0",
                  textTransform: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "12px", md: "14px" },
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: { xs: "19.2px", md: "22.4px" },
                  minWidth: "unset",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  "&:hover": {
                    bgcolor: value === index ? "#111" : "#f5f5f5",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Tab content */}
          <Box sx={{ width: "100%" }}>
            {value === 0 && <TextilePrinting />}
            {value === 1 && <TextileProcessing />}
            {value === 2 && <LabelPrinting />}
            {value === 3 && <PublicationPrinting />}
            {value === 4 && <InkSolutions />}
          </Box>
        </Box>
      </Grid>

      {/* Exceptional Quality Section */}
      <Grid size={12} sx={{ bgcolor: "#EFEFEF", pb: 0 }}>
        <Box
          sx={{
            display: "flex",
            padding: { xs: "48px 24px 0 24px", md: "80px 168px 0 168px" },
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            alignSelf: "stretch",
          }}
        >
          {/* Centered heading + subtitle */}
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
                color: "#333",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: 500,
                lineHeight: { xs: "36px", md: "52px" },
                letterSpacing: "-1px",
              }}
            >
              Exceptional Quality
            </Typography>
            <Typography
              sx={{
                color: "#707070",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "25.6px",
              }}
            >
              Textile printers engineered for peak performance
            </Typography>
          </Box>

          {/* Stats — centered */}
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <StatsSection />
          </Box>

          {/* Full-width printer image */}
          <Box sx={{ width: "100%", lineHeight: 0 }}>
            <Image
              src="/ExceptionalQualityImg.webp"
              alt="Exceptional Quality Printer"
              width={1920}
              height={700}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "520px",
                objectFit: "contain",
                objectPosition: "center bottom",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Grid>

      {/* Industries Section */}
      <Grid
        size={12}
        sx={{
          bgcolor: "#202020",
          backgroundImage: "url('/bgblackLine.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: { xs: "48px 16px", md: "100px 168px" },
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "48px", md: "80px" },
            alignSelf: "stretch",
          }}
        >
          {/* Title group */}
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
                color: "#E0E0E0",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25.6px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              INDUSTRIES
            </Typography>
            <Typography
              sx={{
                color: "#F6891F",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: 500,
                lineHeight: { xs: "36px", md: "52px" },
                letterSpacing: "-1px",
              }}
            >
              Solutions for Every Printing Need
            </Typography>
            {/* <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25.6px",
                maxWidth: "600px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Ut massa blandit pretium
              velit ullamcorper. Eleifend duis donec cras quam ipsum auctor ut
              semper in. In nunc ultrices eget in.
            </Typography> */}
          </Box>

          {/* Industry rows */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "48px", md: "32px" },
              width: "100%",
              maxWidth: "1104px",
              mx: "auto",
            }}
          >
            {[
              {
                img: "/Textile-Industries1.webp",
                title: "Textile Industries",
                desc: "High-speed digital textile printing solutions engineered for vibrant, durable results across sublimation, direct-to-fabric, and pigment printing applications.",
              },
              {
                img: "/Publication-Industries1.webp",
                title: "Publication Industries",
                desc: "Professional-grade printing systems delivering sharp, consistent quality for books, magazines, catalogues, and high-volume publication workflows.",
              },
              {
                img: "/Label-Industries1.webp",
                title: "Label Industries",
                desc: "Precision digital label printers built for flexible packaging, product labels, and short-run specialty prints with exceptional colour accuracy.",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: "24px", md: "64px", lg: "100px" },
                  width: "100%",
                }}
              >
                {/* Left: Image */}
                <Box
                  sx={{
                    flex: "0 0 auto",
                    width: { xs: "100%", sm: "80%", md: "49%" },
                    position: "relative",
                    height: { xs: "240px", sm: "320px", md: "360px" },
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                {/* Right: Text */}
                <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: { xs: "24px", sm: "28px", md: "32px" },
                      fontWeight: 500,
                      lineHeight: { xs: "31.2px", sm: "36px", md: "41.6px" },
                      letterSpacing: "-1px",
                      mb: "8px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#707070",
                      fontFamily: "Inter, sans-serif",
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      fontWeight: 500,
                      lineHeight: { xs: "19.2px", md: "22.4px" },
                      maxWidth: { xs: "100%", md: "444px" },
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>

      {/* <Grid size={12}>
        <MovingToDigital />
      </Grid> */}
      <Grid size={12}>
        <MeetRocketBuiltProduction />
      </Grid>
      <Grid size={12}>
        <ThePowerOfOrange />
      </Grid>
      <Grid size={12}>
        <ScrollVideos />
      </Grid>
      <Grid size={12}>
        <TheFutureofDigitalPrinting />
      </Grid>
      <Grid size={12}>
        <IndustryPresence newsPosts={newsPosts} />
      </Grid>
      <Grid size={12}>
        <DrivingSustainablePrinting />
      </Grid>
      <Grid size={12}>
        <TextileHero />
      </Grid>
    </>
  );
};

export default Home;
