import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ProductSidebar from "./ProductSidebar";

export default function Resources() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "100px 40px", lg: "100px 168px" },
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "24px",
        alignSelf: "stretch",
        background: "#FFF",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Sidebar — hidden on mobile */}
      <Box sx={{ display: { xs: "none", md: "block" }, flexShrink: 0 }}>
        <ProductSidebar />
      </Box>

      {/* Right content */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: "0", md: "0 24px", lg: "0 94px" },
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          flex: "1 0 0",
          width: { xs: "100%", md: "auto" },
        }}
      >
        {/* Heading + description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "52px" },
              letterSpacing: "-1px",
            }}
          >
            Position Pro Showcase
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
            Access product videos, brochures, and technical information to
            explore the full capabilities of printers
          </Typography>
        </Box>

        {/* Video + Brochure */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignSelf: "stretch",
          }}
        >
          {/* YouTube embed */}
          <Box
            sx={{
              alignSelf: "stretch",
              aspectRatio: "272/151",
              height: { md: "auto", lg: "351.972px" },
              borderRadius: "16px",
              border: "5px solid #F2F2F2",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/q38sTq6z_P4"
              title="Position Pro Digital Textile Printer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: "block", border: "none" }}
            />
          </Box>

          {/* Product Brochure row */}
          <Box
            sx={{
              display: "flex",
              padding: "8px",
              alignItems: "center",
              gap: "31px",
              alignSelf: "stretch",
              border: "1px dashed #E0E0E0",
              borderRadius: "16px",
            }}
          >
            {/* Brochure cover image */}
            <Box
              sx={{
                width: "185px",
                height: "258px",
                aspectRatio: "38/53",
                borderRadius: "12px",
                border: "1px solid #EFEFEF",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src="/PositionPro-Product.png"
                alt="Position Pro Brochure"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Box>

            {/* Brochure info */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                flex: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "26px",
                  letterSpacing: 0,
                }}
              >
                Product Brochure
              </Typography>
              <Typography
                sx={{
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "22.4px",
                }}
              >
                Full specs, configurations, and print quality details for the
                Position Pro.
              </Typography>
              <Button
                variant="contained"
                startIcon={
                  <Image
                    src="/DownIcon.svg"
                    alt="download"
                    width={16}
                    height={16}
                  />
                }
                sx={{
                  mt: "32px",
                  bgcolor: "#111",
                  color: "#FFF",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  px: "16px",
                  py: "10px",
                  boxShadow: "none",
                  alignSelf: "flex-start",
                  "&:hover": { bgcolor: "#333", boxShadow: "none" },
                }}
              >
                Download Brochure
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
