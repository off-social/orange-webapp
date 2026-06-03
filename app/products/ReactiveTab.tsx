"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ReactiveTab = () => {
  return (
    <Grid
      size={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, md: 0 },
      }}
    >
      {/* Image */}
      <Image
        src="/reactive.png"
        alt="reactive"
        width={1000}
        height={1000}
        style={{
          width: "100%",
          maxWidth: "1000px",
          height: "auto",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          width: { xs: "100%", md: "780px" },
          mt: { xs: 2, md: 3 },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "26px", md: "32px" },
            fontWeight: 700,
            color: "#404040",
            textAlign: "left",
            lineHeight: 1.2,
          }}
        >
          K24 digital textile printer
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 300,
            color: "#404040",
            mt: 1,
            textAlign: "left",
          }}
        >
          High-Speed Precision Textile Printing Machine
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            mt: 3,
            gap: 2,
            px: { xs: 2 },
            // mb: { xs: 4, md: 0 },
            // mb: { xs: 4, md: 0 },
            mb: 10,
            animation: "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
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
      </Box>
    </Grid>
  );
};

export default ReactiveTab;
