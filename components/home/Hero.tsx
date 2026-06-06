"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DrivingSustainablePrinting from "./DrivingSustainablePrinting";
import IndustryPresence from "./IndustryPresence";
import LogoMarquee from "./LogoMarquee";
import MeetRocketBuiltProduction from "./MeetRocketBuiltProduction";
import MovingToDigital from "./MovingToDigital";
import ScrollVideos from "./ScrollVideos";
import StatsSection from "./StatsSection";
import TextileHero from "./TextileHero";
import TextilePrinting from "./TextilePrinting";
import TheFutureofDigitalPrinting from "./TheFutureofDigitalPrinting";
import ThePowerOfOrange from "./ThePowerOfOrange";

const Home = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ position: "relative" }}>
        {/* Full-width video */}
        <video
          src="/homePageVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            display: "block",
            height: isMobile ? "560px" : "600px",
            objectFit: "cover",
          }}
        />

        {/* Frosted glass overlay — over the bottom of the video */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "12px", md: "24px" },
            left: { xs: "12px", md: "50%" },
            right: { xs: "12px", md: "auto" },
            width: { xs: "auto", md: "1320px" },
            transform: { xs: "none", md: "translateX(-50%)" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            padding: { xs: "20px", sm: "28px", md: "40px" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            borderRadius: "20px",
            border: "1px solid #FFF",
            background: "rgba(239, 239, 239, 0.10)",
            backdropFilter: "blur(20px)",
            gap: { xs: "16px", sm: "20px", md: "32px" },
          }}
        >
          {/* Left: Heading + subtitle */}
          <Box>
            <Typography
              sx={{
                color: "#111",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "26px", sm: "32px", md: "40px" },
                fontWeight: 500,
                lineHeight: { xs: "34px", md: "52px" },
                letterSpacing: "-1px",
              }}
            >
              Built with Precision.
              <br />
              Proven in Performance.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "13px", md: "14px" },
                color: "rgba(17,17,17,0.65)",
                mt: "10px",
                maxWidth: "440px",
                lineHeight: 1.65,
                fontFamily: "Inter, sans-serif",
              }}
            >
              End-to-end digital textile printing solutions from high-speed
              sublimation to direct-to-fabric systems.
            </Typography>
          </Box>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "12px",
              flexShrink: 0,
              alignItems: "stretch",
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#111",
                bgcolor: "rgba(255,255,255,0.6)",
                borderColor: "rgba(17,17,17,0.25)",
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "14px", md: "14px" },
                fontWeight: 500,
                px: "24px",
                py: "13px",
                boxShadow: "none",
                width: { xs: "100%", md: "auto" },
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.8)",
                  boxShadow: "none",
                },
              }}
            >
              Get a Quote
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
                fontSize: { xs: "14px", md: "14px" },
                fontWeight: 500,
                px: "24px",
                py: "13px",
                boxShadow: "none",
                width: { xs: "100%", md: "auto" },
                "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
              }}
            >
              Explore Machines
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Logo Marquee */}
      <Grid size={12}>
        <LogoMarquee />
      </Grid>

      {/* Ecosystem Section */}
      <Grid size={12}>
        <Box
          sx={{
            display: "flex",
            padding: { xs: "48px 16px", md: "68px 168px" },
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "24px", md: "32px" },
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
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25.6px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              A COMPLETE
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "24px", md: "40px" },
                fontWeight: 500,
                color: "#333",
                lineHeight: { xs: "31.2px", md: "52px" },
                letterSpacing: 0,
                fontFamily: "Inter, sans-serif",
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
              "Label Printing",
              "Publication Printing",
              "Ink Solutions",
            ].map((label, index) => (
              <Button
                key={index}
                onClick={() => setValue(index)}
                sx={{
                  display: "flex",
                  padding: "12px 24px",
                  alignItems: "center",
                  gap: "16px",
                  borderRadius: "32px",
                  bgcolor: value === index ? "#111" : "#FFF",
                  color: value === index ? "#FFF" : "#333",
                  border:
                    value === index ? "1px solid #111" : "1px solid #E0E0E0",
                  textTransform: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "22.4px",
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
            {/* {value === 1 && <LabelPrinting />}
            {value === 2 && <PublicationPrinting />}
            {value === 3 && <InkSolutions />} */}
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
              Textile printers &nbsp; engineered for peak performance
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
              src="/ExceptionalQualityImg.png"
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
          backgroundImage: "url('/bgblackLine.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');`}</style>
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
            <Typography
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
            </Typography>
          </Box>

          {/* Industry rows */}
          {[
            {
              img: "/Textile-Industries1.png",
              title: "Textile Industries",
              desc: "High-speed digital textile printing solutions engineered for vibrant, durable results across sublimation, direct-to-fabric, and pigment printing applications.",
            },
            {
              img: "/Publication-Industries1.png",
              title: "Publication Industries",
              desc: "Professional-grade printing systems delivering sharp, consistent quality for books, magazines, catalogues, and high-volume publication workflows.",
            },
            {
              img: "/Label-Industries1.png",
              title: "Label Industries",
              desc: "Precision digital label printers built for flexible packaging, product labels, and short-run specialty prints with exceptional colour accuracy.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                gap: { xs: "24px", sm: "40px", md: "64px" },
                width: "100%",
              }}
            >
              {/* Left: Image */}
              <Box
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "100%", sm: "45%", md: "45%" },
                  position: "relative",
                  height: { xs: "240px", sm: "260px", md: "340px" },
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
              <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "'Architects Daughter', cursive",
                    fontSize: { xs: "24px", sm: "28px", md: "40px" },
                    fontWeight: 400,
                    lineHeight: { xs: "31.2px", sm: "36px", md: "52px" },
                    letterSpacing: "-1px",
                    mb: { xs: "8px", md: "16px" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "12px", sm: "13px", md: "15px" },
                    fontWeight: 500,
                    lineHeight: { xs: "19.2px", md: 1.75 },
                    maxWidth: { xs: "100%", md: "480px" },
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>

      <Grid size={12}>
        <MovingToDigital />
      </Grid>
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
        <IndustryPresence />
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
