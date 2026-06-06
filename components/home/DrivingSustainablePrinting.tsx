"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const DrivingSustainablePrinting = () => {
  return (
    <Grid
      size={12}
      sx={{
        pt: { xs: 6, sm: 8, md: 10 },
        background: "linear-gradient(90deg, #dadbd6 0%, #efeeec 100%)",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "26px", sm: "32px", md: "40px" },
          fontWeight: 700,
          color: "#000",
          lineHeight: "1.2",
          textAlign: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        Driving{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #BBC375 0%, #474D23 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            lineHeight: "1.2",
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
          px: { xs: 2, sm: 4 },
        }}
      >
        Built for a cleaner, more responsible textile future
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "24px",
          px: { xs: 2, sm: 4, md: 0 },
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
          sx={{
            width: { xs: "100%", md: "200px" },
            padding: "16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "8px",
            bgcolor: "#111",
            color: "#FFF",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
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
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          marginTop: "24px",
        }}
      />
    </Grid>
  );
};

export default DrivingSustainablePrinting;
