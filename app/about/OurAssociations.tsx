"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function OurAssociations() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", sm: "64px 40px", md: "80px 80px", lg: "80px 168px", xl: "100px 263px" },
        flexDirection: "column",
        alignItems: "center",
        gap: "64px",
        alignSelf: "stretch",
        bgcolor: "#FFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "center", md: "center" },
          gap: "24px",
          alignSelf: "stretch",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            flex: { xs: "unset", md: "1 0 0" },
            alignSelf: "stretch",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            aspectRatio: { xs: "75/59", md: "unset" },
            height: { xs: "284px", md: "auto" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Image
            src="/Associations.png"
            alt="Our Associations"
            width={600}
            height={468}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Text content */}
        <Box
          sx={{
            flex: { xs: "unset", md: "1 0 0" },
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "flex-start", md: "flex-start" },
            gap: { xs: "24px", md: "16px" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Typography
            sx={{
              color: "#707070",
              textAlign: { xs: "center", md: "left" },
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 400,
              lineHeight: "25.6px",
              letterSpacing: "10px",
              textTransform: "uppercase",
              alignSelf: "stretch",
            }}
          >
            Our Associations
          </Typography>

          <Typography
            sx={{
              color: "#333",
              textAlign: { xs: "center", md: "left" },
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "20px", md: "32px", xl: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "26px", md: "41.6px", xl: "52px" },
              letterSpacing: { xs: 0, md: "-1px" },
              alignSelf: "stretch",
            }}
          >
            Bringing Global Technology to India
          </Typography>

          {[
            "At Orange O Tec, we collaborate with leading international technology providers to deliver world-class digital textile printing solutions to the Indian market.",
            "These partnerships allow us to offer proven technologies, innovative products, and reliable support systems that help our customers stay competitive in a rapidly changing industry.",
            "Together with our global associates, we continue to drive innovation, improve production capabilities, and create new opportunities for textile businesses across the country.",
          ].map((text, i) => (
            <Typography
              key={i}
              sx={{
                color: "#707070",
                textAlign: { xs: "center", md: "left" },
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "14px", xl: "16px" },
                fontWeight: 500,
                lineHeight: { xs: "22.4px", xl: "25.6px" },
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
