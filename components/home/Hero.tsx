"use client";

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
import LogoMarquee from "./LogoMarquee";
import MovingToDigital from "./MovingToDigital";
import StatsSection from "./StatsSection";
import TextilePrinting from "./TextilePrinting";

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
        <Image
          src="/built-with-precision.png"
          alt="Built with precision"
          width={1200}
          height={700}
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
            bottom: { xs: 12, sm: 40, md: 95 },
            left: { xs: 12, sm: 20, md: 40 },
            right: { xs: 12, sm: 20, md: 40 },
            background:
              "linear-gradient(153deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)",
            backdropFilter: "blur(19px)",
            borderRadius: "16px",
            p: { xs: "16px 18px", sm: "22px 32px", md: "30px 52px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 1.5, md: 2 },
            border: "1px solid rgba(255, 255, 255, 0.30)",
          }}
        >
          {/* Left - Text */}
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "18px", sm: "24px", md: "32px" },
                color: "#000",
                lineHeight: 1.3,
              }}
            >
              Built with Precision.
              <br />
              Proven in Performance.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
                color: "#000",
                mt: 1,
                width: { xs: "100%", md: "449px" },
              }}
            >
              End-to-end digital textile printing solutions from high-speed
              sublimation to direct-to-fabric systems.
            </Typography>
          </Box>

          {/* Right - Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, md: 2 },
              flexShrink: 0,
              mr: { xs: 0, md: 5 },
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1a1a1a",
                color: "#fff",
                borderRadius: "19.58px",
                textTransform: "none",
                fontSize: { xs: "12px", md: "14px" },
                px: { xs: 2, md: 3 },
                "&:hover": { bgcolor: "#333" },
              }}
            >
              Explore Machines
            </Button>
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
                "&:hover": { bgcolor: "rgba(0,0,0,0.05)" },
              }}
            >
              Get a Quote
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
      <Grid size={12} sx={{ mt: 1 }}>
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
          mt: 14,
          bgcolor: "#F7F8F7",
          px: { xs: 2, md: 0 },
        }}
      >
        {/* Left Image */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 4, md: 8 } }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
            }}
          >
            <Image
              src="/printer.png"
              alt="printer"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </Grid>

        {/* Right Content */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: 2,
            mt: { xs: 2, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "36px" },
              color: "#000",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Exceptional Quality
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              color: "#000",
              fontWeight: 300,
              textAlign: "center",
              mb: { xs: 5, md: 10 },
            }}
          >
            Textile printers engineered for peak performance
          </Typography>

          {/* <Grid sx={{ mt: 5 }}>
            <Image
              src="/image.png"
              alt="printer"
              width={598}
              height={400}
              style={{w
                width: "100%",
                maxWidth: "598px",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid> */}
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
      {/* <Grid size={12}>
        <MeetRocketBuiltProduction />
      </Grid> */}
      {/* <Grid size={12}>
        <ThePowerOfOrange />
      </Grid> */}
      {/* <Grid size={12}>
        <ScrollVideos />
      </Grid> */}
      {/* <Grid size={12}>
        <TheFutureofDigitalPrinting />
      </Grid> */}
      {/* <Grid size={12}>
        <IndustryPresence />
      </Grid> */}
      {/* <Grid size={12}>
        <DrivingSustainablePrinting />
      </Grid> */}
    </>
  );
};

export default Home;
