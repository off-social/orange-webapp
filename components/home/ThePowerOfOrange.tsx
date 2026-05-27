"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThePowerOfOrange = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const points = [
    "High-speed textile production",
    "On-demand design printing",
    "Consistent print quality",
    "Lower operational waste",
    "Reduced setup time",
    "Improved production efficiency",
  ];

  // Mobile: normal flow layout
  if (isMobile) {
    return (
      <Grid size={12}>
        <Box sx={{ bgcolor: "#fff", px: 3, pt: 5, pb: 4 }}>
          <Typography
            sx={{
              color: "#000",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: "38px",
            }}
          >
            The Power of{" "}
            <Box component="span" sx={{ color: "#FF7A00" }}>
              Orange
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#9B9B9B",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "8px",
              textTransform: "uppercase",
              mt: 1,
            }}
          >
            Built for Efficiency
          </Typography>
          <Box sx={{ width: "100%", mt: 3 }}>
            <Image
              src="/thePowerOfOrangeMobile.png"
              alt="The Power of Orange"
              width={600}
              height={600}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            {points.map((item, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    py: 1.2,
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#404040",
                  }}
                >
                  {item}
                </Typography>
                {index !== points.length - 1 && (
                  <Box
                    sx={{
                      height: "1px",
                      width: "100%",
                      bgcolor: "rgba(0,0,0,0.15)",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#000",
                color: "#fff",
                borderRadius: "24px",
                textTransform: "none",
                fontSize: "14px",
                px: 4,
                py: 1.2,
                "&:hover": { bgcolor: "#222" },
              }}
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Grid>
    );
  }

  // Tablet & Desktop (600px+): image as background, content overlaid using paddingTop trick
  return (
    <Grid size={12}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          // Image aspect ratio is 1920x1080 = 56.25%
          // paddingTop makes the box exactly the same height as the image
          paddingTop: "56.25%",
          overflow: "hidden",
        }}
      >
        {/* Background Image — fills the padded box exactly */}
        <Box sx={{ position: "absolute", inset: 0 }}>
          <Image
            src="/thePowerOfOrange.png"
            alt="background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>

        {/* Content — positioned inside the same padded box */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pl: { sm: "6%", md: "8%" },
            pr: { sm: "45%", md: "52%" },
            py: { sm: "4%", md: "5%" },
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontSize: { sm: "28px", md: "36px", lg: "44px" },
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            The Power of{" "}
            <Box component="span" sx={{ color: "#FF7A00" }}>
              Orange
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#9B9B9B",
              fontSize: { sm: "10px", md: "13px", lg: "16px" },
              fontWeight: 500,
              letterSpacing: { sm: "8px", md: "12px", lg: "14px" },
              textTransform: "uppercase",
              mt: 0.5,
            }}
          >
            Built for Efficiency
          </Typography>

          <Box
            sx={{ mt: { sm: 2, md: 3, lg: 4 }, flex: 1, overflow: "hidden" }}
          >
            {points.map((item, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    py: { sm: 0.6, md: 1, lg: 1.5 },
                    fontSize: { sm: "13px", md: "16px", lg: "20px" },
                    fontWeight: 500,
                    color: "#404040",
                  }}
                >
                  {item}
                </Typography>
                {index !== points.length - 1 && (
                  <Box
                    sx={{
                      height: "1px",
                      width: "68%",
                      bgcolor: "rgba(0,0,0,0.15)",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: { sm: 2, md: 3 } }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#000",
                color: "#fff",
                borderRadius: "24px",
                textTransform: "none",
                fontSize: { sm: "13px", md: "15px", lg: "16px" },
                px: { sm: 3, md: 4 },
                py: 1.2,
                "&:hover": { bgcolor: "#222" },
              }}
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ThePowerOfOrange;
