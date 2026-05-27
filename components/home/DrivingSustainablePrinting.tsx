"use client";

import { Grid, Typography } from "@mui/material";
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
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          fontWeight: 400,
          color: "#404040",
          textAlign: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        Built for a cleaner, more responsible textile future
      </Typography>

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
