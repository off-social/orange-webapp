import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function CSRHero() {
  return (
    <Box sx={{ position: "relative", width: "100%", lineHeight: 0 }}>
      {/* Mobile image (xs only) */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Image
          src="/TechnologyWithResponsibilityMobile.webp"
          alt="CSR – Technology with Responsibility"
          width={393}
          height={538}
          priority
          style={{
            width: "100%",
            aspectRatio: "84/115",
            display: "block",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Tablet + Desktop image (sm+) */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "relative",
          height: { sm: "650px", md: "750px", lg: "800px", xl: "1000px" },
          overflow: "hidden",
        }}
      >
        <Image
          src="/CRS.webp"
          alt="CSR – Technology with Responsibility"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
        />
        {/* Top fade — blends image into page background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "120px",
            background:
              "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Text overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "24px", sm: "24px", md: "32px" },
          px: { xs: "16px", sm: "40px", md: "40px" },
          pt: { xs: "32px", sm: "64px", md: "80px", xl: "120px" },
          textAlign: "center",
        }}
      >
        {/* Label + Heading + Subtitle */}
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
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 400,
              lineHeight: "25.6px",
              letterSpacing: { xs: "5px", md: "10px" },
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Our Responsibility
          </Typography>

          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", sm: "41.6px", md: "52px" },
              letterSpacing: { xs: 0, md: "-1px" },
            }}
          >
            Technology with Responsibility
          </Typography>

          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", md: "22.4px" },
            }}
          >
            Built for a cleaner, more responsible textile future
          </Typography>
        </Box>

        {/* Button */}
        <Button
          component="a"
          href="/contact"
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
          sx={{
            width: { xs: "100%", sm: "200px" },
            padding: { xs: "12px", sm: "16px" },
            borderRadius: "8px",
            bgcolor: "#111",
            color: "#FFF",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "20.8px",
            textTransform: "none",
            whiteSpace: "nowrap",
            alignSelf: { xs: "stretch", sm: "center" },
            justifyContent: "center",
            gap: "8px",
            boxShadow: "none",
            textDecoration: "none",
            "&:hover": { bgcolor: "#333", boxShadow: "none" },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
