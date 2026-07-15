"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DrivingSustainablePrinting = () => {
  return (
    <Grid size={12}>
      <Box sx={{ position: "relative", width: "100%", lineHeight: 0 }}>
        {/* Background image — mobile uses a taller portrait crop */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Image
            src="/Driving1.webp"
            alt="Driving Sustainable Printing"
            width={393}
            height={538}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Image
            src="/CRS.webp"
            alt="Driving Sustainable Printing"
            width={1440}
            height={700}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>

        {/* Text overlay — top center */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "12px", md: "24px" },
            px: { xs: "16px", sm: "40px" },
            pt: { xs: "64px", sm: "48px", md: "80px" },
            textAlign: "center",
          }}
        >
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
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "24px", md: "40px" },
                fontWeight: 500,
                lineHeight: { xs: "31.2px", md: "52px" },
                letterSpacing: { xs: 0, md: "-1px" },
              }}
            >
              Driving{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #BBC375 0%, #474D23 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sustainable Printing
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#707070",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", md: "14px" },
                fontWeight: 500,
                lineHeight: "22.4px",
              }}
            >
              Built for a cleaner, more responsible textile future
            </Typography>
          </Box>

          <Button
            component={Link}
            href="/contact"
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important" }} />}
            sx={{
              width: { xs: "auto", sm: "200px" },
              padding: { xs: "10px 18px", sm: "16px" },
              borderRadius: "8px",
              bgcolor: "#111",
              color: "#FFF",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "20.8px",
              boxShadow: "none",
              "&:hover": { bgcolor: "#333", boxShadow: "none" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default DrivingSustainablePrinting;
