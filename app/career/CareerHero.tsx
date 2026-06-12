"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function CareerHero() {
  return (
    <Box
      sx={{
        bgcolor: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
      }}
    >
      {/* Padded content area */}
      <Box
        sx={{
          display: "flex",
          padding: {
            xs: "48px 16px 0 16px",
            sm: "80px 40px 0 40px",
            md: "100px 80px 0 80px",
            lg: "100px 168px 0 168px",
            xl: "120px 263px 0 263px",
          },
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          alignSelf: "stretch",
        }}
      >
        {/* Heading + Description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Typography
            sx={{
              color: "#F6891F",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "40px", xl: "56px" },
              fontWeight: 500,
              lineHeight: {
                xs: "31.2px",
                sm: "41.6px",
                md: "52px",
                xl: "72.8px",
              },
              letterSpacing: { xs: 0, sm: "-0.5px", md: "-1px", xl: "-1.5px" },
            }}
          >
            Build the Future of Textile Tech with Us
          </Typography>

          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", sm: "14px", xl: "16px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", sm: "22.4px", xl: "25.6px" },
              maxWidth: {
                xs: "100%",
                sm: "520px",
                md: "580px",
                lg: "620px",
                xl: "720px",
              },
            }}
          >
            At Orange O Tec, we believe the sale is just the beginning of our
            relationship. Our dedicated after-sales team is equipped to ensure
            your machines run at peak performance with fast response times,
            expert engineers, and nationwide coverage.
          </Typography>
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "16px",
            justifyContent: "center",
            alignSelf: { xs: "stretch", sm: "auto" },
          }}
        >
          <Button
            variant="contained"
            endIcon={
              <Image
                src="/ArrowBubbleDownIcon.svg"
                alt=""
                width={18}
                height={18}
              />
            }
            onClick={() => {
              document
                .getElementById("current-openings")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              order: { xs: 1, sm: 2 },
              width: { xs: "100%", sm: "200px" },
              padding: "16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "8px",
              bgcolor: "#F6891F",
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
            }}
          >
            View Open Roles
          </Button>
          <Button
            component="a"
            href="/about"
            variant="outlined"
            sx={{
              order: { xs: 2, sm: 1 },
              width: { xs: "100%", sm: "200px" },
              padding: "16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "8px",
              border: "1px solid #E0E0E0",
              bgcolor: "#FFF",
              color: "#333",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              textTransform: "none",
              textDecoration: "none",
              "&:hover": { borderColor: "#BDBDBD", bgcolor: "transparent" },
            }}
          >
            About Us
          </Button>
        </Box>
      </Box>

      {/* Mobile image */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          width: "100%",
          lineHeight: 0,
          mt: "32px",
          height: "141px",
        }}
      >
        <Image
          src="/CareerMobile.png"
          alt="Career at Orange O Tec"
          width={393}
          height={141}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          priority
        />
      </Box>

      {/* Desktop image */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          width: "100%",
          mt: "40px",
          position: "relative",
          height: { sm: "280px", md: "380px", lg: "460px", xl: "520px" },
          overflow: "hidden",
        }}
      >
        <Image
          src="/Career.png"
          alt="Career at Orange O Tec"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </Box>
    </Box>
  );
}
