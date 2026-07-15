import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function CSRHero() {
  return (
    <Box sx={{ position: "relative", width: "100%", lineHeight: 0 }}>
      {/* Mobile image — xs (<600px, e.g. 456px) */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "relative",
          width: "100%",
          aspectRatio: "393 / 538",
          overflow: "hidden",
        }}
      >
        <Image
          src="/TechnologyWithResponsibilityMobile.webp"
          alt="CSR – Technology with Responsibility"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Box>

      {/* Tablet + Desktop image — sm+ (768px, 1024px, 1440px) */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "relative",
          height: { sm: "580px", md: "720px", lg: "800px" },
          overflow: "hidden",
        }}
      >
        <Image
          src="/CRS.webp"
          alt="CSR – Technology with Responsibility"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
        />
        {/* Top fade — blends image into page background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: { sm: "80px", md: "100px", lg: "120px" },
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
          gap: { xs: "24px", sm: "28px", md: "30px", lg: "32px" },
          px: { xs: "16px", sm: "32px", md: "40px" },
          pt: { xs: "64px", sm: "68px", md: "76px", lg: "80px" },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            maxWidth: { sm: "600px", md: "680px", lg: "728px" },
          }}
        >
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "14px", sm: "14px", md: "15px", lg: "16px" },
              fontWeight: 400,
              lineHeight: "25.6px",
              letterSpacing: "10px",
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
              fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "40px" },
              fontWeight: 500,
              lineHeight: {
                xs: "31.2px",
                sm: "36.4px",
                md: "46.8px",
                lg: "52px",
              },
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
              fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "14px" },
              fontWeight: 500,
              lineHeight: {
                xs: "19.2px",
                sm: "20.8px",
                md: "22.4px",
                lg: "22.4px",
              },
            }}
          >
            Built for a cleaner, more responsible textile future
          </Typography>
        </Box>

        <Button
          component="a"
          href="/contact"
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important" }} />}
          sx={{
            width: { xs: "100%", sm: "200px" },
            maxWidth: { sm: "200px" },
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
