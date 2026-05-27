"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const MeetRocketBuiltProduction = () => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 600) setDeviceType("mobile");
      else if (width < 900) setDeviceType("tablet");
      else setDeviceType("desktop");
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const stats = [
    ["Up to 75,000", "LM/day production"],
    ["4–8", "color modes"],
    ["Up to 1850", "mm print width"],
    ["Designed for", "continuous industrial use"],
  ];

  const imageSrc = {
    mobile: "/rocket-mobile.png",
    tablet: "/rocket-tablet.png",
    desktop: "/meet-rocket-built-for-hight-colume-production.png",
  }[deviceType];

  return (
    <Grid size={12}>
      <Box sx={{ position: "relative", width: "100%" }}>
        {/* Responsive Image */}
        <Box sx={{ position: "relative", width: "100%", display: "block" }}>
          <Image
            src={imageSrc}
            alt="rocket"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </Box>

        {/* Content */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "8%", sm: "10%", md: "10%" },
            left: { xs: "50%", sm: "8%", md: "8%" },
            transform: {
              xs: "translateX(-50%)",
              sm: "none",
              md: "none",
            },
            textAlign: {
              xs: "center",
              sm: "left",
              md: "left",
            },
            color: "#fff",
            width: { xs: "90%", sm: "auto", md: "auto" },
          }}
        >
          <Typography
            sx={{
              letterSpacing: { xs: "8px", sm: "6px", md: "6px" },
              fontSize: { xs: "14px", sm: "12px", md: "12px" },
            }}
          >
            MEET
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              fontSize: { xs: "42px", sm: "44px", md: "48px" },
            }}
          >
            Rocket
          </Typography>

          <Typography sx={{ mt: 1 }}>
            Built for High-Volume Production
          </Typography>

          <Button
            variant="outlined"
            sx={{
              color: "#FFF",
              bgcolor: "#000",
              borderColor: "#000",
              borderRadius: "19.58px",
              textTransform: "none",
              mt: 3,
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
            }}
          >
            Know More
          </Button>
        </Box>

        {/* Bottom Stats */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "5%", sm: "6%", md: "8%" },
            width: "100%",
            color: "#fff",
            px: 3,
            display: { xs: "grid", sm: "flex", md: "flex" },
            gridTemplateColumns: { xs: "1fr 1fr" },
            justifyContent: { sm: "space-evenly", md: "space-evenly" },
            gap: { xs: 2, sm: 0, md: 0 },
            textAlign: "center",
          }}
        >
          {stats.map((item, index) => (
            <Box key={index}>
              <Typography sx={{ fontWeight: 700 }}>{item[0]}</Typography>
              <Typography sx={{ fontSize: 14 }}>{item[1]}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default MeetRocketBuiltProduction;
