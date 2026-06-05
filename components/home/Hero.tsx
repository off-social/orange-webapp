"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Tab,
  Tabs,
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
        <video
          src="/homePageVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            minHeight: isMobile ? "320px" : "auto",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 12, sm: 40, md: 50 },
            left: { xs: 12, sm: 20, md: 40 },
            maxWidth: { xs: "calc(100% - 24px)", md: "580px" },
            background:
              "linear-gradient(153deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.10) 100%)",
            backdropFilter: "blur(2px)",
            borderRadius: "16px",
            p: { xs: "16px 18px", sm: "22px 32px", md: "30px 52px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: { xs: 1.5, md: 2 },
            border: "1px solid rgba(255, 255, 255, 0.20)",
          }}
        >
          {/* Text */}
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "18px", sm: "24px", md: "32px" },
                color: "#fff",
                lineHeight: 1.3,
              }}
            >
              Built with Precision.
              <br />
              Proven in Performance.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "16px" },
                color: "rgba(255, 255, 255, 0.85)",
                mt: 1,
                maxWidth: "449px",
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
              gap: { xs: 1, md: 2 },
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#111",
                bgcolor: "#fff",
                borderColor: "#fff",
                borderRadius: "19.58px",
                textTransform: "none",
                fontSize: { xs: "12px", md: "14px" },
                px: { xs: 2, md: 3 },
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              Get a Quote
            </Button>
            <Button
              variant="contained"
              endIcon={
                <ArrowForwardIcon sx={{ fontSize: "16px !important" }} />
              }
              sx={{
                bgcolor: "#F7931E",
                color: "#fff",
                borderRadius: "19.58px",
                textTransform: "none",
                fontSize: { xs: "12px", md: "14px" },
                px: { xs: 2, md: 3 },
                "&:hover": { bgcolor: "#e8820d" },
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

      {/* "A COMPLETE" label */}
      <Grid size={12} sx={{ pt: { xs: 3, md: 5 } }}>
        <Typography
          sx={{
            textAlign: "center",
            letterSpacing: { xs: "10px", sm: "16px", md: "22.8px" },
            fontSize: { xs: 11, md: 14 },
            fontWeight: 500,
            color: "#9C9C9C",
          }}
        >
          A COMPLETE
        </Typography>
      </Grid>

      {/* Heading */}
      <Grid size={12}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 24, sm: 32, md: 40 },
            fontWeight: 500,
            color: "#000",
            px: { xs: 2, md: 0 },
          }}
        >
          Digital Printing Ecosystem
        </Typography>
      </Grid>

      {/* Tabs */}
      <Grid size={12} sx={{ mt: { xs: 3, md: 5 } }}>
        <Tabs
          value={value}
          onChange={handleChange}
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
              px: { xs: 2, md: 3 },

              "&.Mui-selected": {
                color: "#000",
              },
            },
          }}
        >
          <Tab label="Textile Printing" />
          <Tab label="Label Printing" />
          <Tab label="Publication Printing" />
          <Tab label="Ink Solutions" />
        </Tabs>
      </Grid>

      {/* Tabs content placeholder */}
      <Grid size={12} sx={{ mt: 4 }}>
        {value === 0 && <TextilePrinting />}
        {/* {value === 1 && <LabelPrinting />}
        {value === 2 && <PublicationPrinting />}
        {value === 3 && <InkSolutions />} */}
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          mt: { xs: 6, md: 14 },
          bgcolor: "#F7F8F7",
          px: { xs: 2, md: 0 },
          pb: { xs: 4, md: 0 },
        }}
      >
        {/* Left Image */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 4, md: 8 } }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "280px", sm: "380px", md: "500px" }, // fixed height mobile pe
            }}
          >
            <Image
              src="/printer.png"
              alt="printer"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>

        {/* Right Content */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: 2,
            mt: { xs: 0, md: 8 }, // mobile pe extra top margin hataya
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "36px" }, // mobile pe thoda chhota
              color: "#000",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Exceptional Quality
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "13px", md: "16px" },
              color: "#000",
              fontWeight: 300,
              textAlign: "center",
              mb: { xs: 4, md: 10 }, // mobile pe kam margin
            }}
          >
            Textile printers engineered for peak performance
          </Typography>

          <StatsSection />
        </Grid>
      </Grid>

      <Grid
        size={12}
        sx={{
          bgcolor: "#202020",
          p: { xs: 2, md: 4 },
          pt: { xs: 6, md: 10 },
        }}
      >
        {/* Heading */}
        <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              color: "#9C9C9C",
              fontSize: { xs: "14px", md: "20px" },
              fontWeight: 600,
              textAlign: "center",
              letterSpacing: { xs: "10px", md: "22.8px" },
            }}
          >
            INDUSTRIES
          </Typography>
        </Grid>

        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontSize: { xs: "28px", md: "40px" },
              fontWeight: 600,
              textAlign: "center",
              width: { xs: "100%", md: "520px" },
              lineHeight: "114%",
              px: { xs: 2, md: 0 },
            }}
          >
            Solutions for Every Printing Need
          </Typography>
        </Grid>

        {/* Cards */}
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 4, md: 2 },
            mt: { xs: 6, md: 10 },
            flexWrap: "wrap",
          }}
        >
          {[
            { img: "/textile.png", title: "Textile", width: "314px" },
            { img: "/publication.png", title: "Publication", width: "337px" },
            { img: "/label.png", title: "Label", width: "346px" },
          ].map((item, index) => (
            <Grid key={index} sx={{ textAlign: "center" }}>
              <Card
                sx={{
                  width: { xs: "100%", sm: 320, md: 373 },
                  maxWidth: "373px",
                  height: { xs: 300, md: 373 },

                  borderRadius: "21px",
                  bgcolor: "#202020",
                  border: "1px solid #929292",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  mx: "auto",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    width: { xs: "85%", md: item.width },
                    height: "auto",
                  }}
                />
              </Card>

              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: { xs: "18px", md: "22px" },
                  fontWeight: 600,
                  mt: 2,
                  mb: { xs: 1, md: 6 },
                }}
              >
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
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
    </>
  );
};

export default Home;
