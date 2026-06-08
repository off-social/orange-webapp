"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const DrivingSustainablePrinting = () => {
  return (
    <Grid size={12}>
      {/* ── MOBILE: image full section, text overlaid at top ── */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "relative",
          width: "100%",
        }}
      >
        <Image
          src="/Driving1.png"
          alt="Driving Sustainable Printing"
          width={800}
          height={900}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        {/* Overlay: text + button at top */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            pt: "40px",
            px: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
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
            Driving
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #BBC375 0%, #474D23 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sustainable Printing
            </span>
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            Built for a cleaner, more responsible textile future
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
            sx={{
              width: "100%",
              mt: "4px",
              padding: "16px",
              borderRadius: "8px",
              bgcolor: "#111",
              color: "#FFF",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              boxShadow: "none",
              "&:hover": { bgcolor: "#333", boxShadow: "none" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* ── DESKTOP: original layout ── */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          pt: { sm: "32px", md: "48px", lg: "80px" },
          background: "linear-gradient(90deg, #dadbd6 0%, #efeeec 100%)",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "40px" },
            fontWeight: 700,
            color: "#000",
            lineHeight: "1.2",
            textAlign: "center",
            px: 4,
          }}
        >
          Driving{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #BBC375 0%, #474D23 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            Sustainable Printing
          </span>
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            fontSize: "14px",
            fontWeight: 500,
            color: "#707070",
            textAlign: "center",
            lineHeight: "22.4px",
            fontFamily: "Inter, sans-serif",
            px: 4,
          }}
        >
          Built for a cleaner, more responsible textile future
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "8px" }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
            sx={{
              width: "200px",
              padding: "16px",
              borderRadius: "8px",
              bgcolor: "#111",
              color: "#FFF",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              boxShadow: "none",
              "&:hover": { bgcolor: "#333", boxShadow: "none" },
            }}
          >
            Contact Us
          </Button>
        </Box>
        <Image
          src="/DrivingSustainablePrinting.png"
          alt="Driving Sustainable Printing"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", display: "block", marginTop: "16px" }}
        />
      </Box>
    </Grid>
  );
};

export default DrivingSustainablePrinting;
