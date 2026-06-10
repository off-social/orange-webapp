import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ProductSidebar from "./ProductSidebar";

const FABRICS = [
  {
    image: "/Lace-sequin.png",
    title: "Lace & sequin",
    desc: "Precise positioning on delicate, open-weave structures",
  },
  {
    image: "/Jacquard.png",
    title: "Jacquard",
    desc: "High-end custom fabrics for home textiles & fashion",
  },
  {
    image: "/Embroidery.png",
    title: "Embroidery",
    desc: "Perfect registration on textured raised surfaces",
  },
  {
    image: "/Silk.png",
    title: "Silk (double-sided)",
    desc: "Luxury duplex printing for premium fashion",
  },
  {
    image: "/Custom.png",
    title: "Custom & hi-end",
    desc: "Export fashion, European & US home textiles",
  },
];

export default function IdealFor() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "48px 16px", md: "100px 168px" },
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
          height: { md: "950px" },
          padding: { xs: "0", md: "0 94px" },
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          flex: "1 0 0",
        }}
      >
        {/* Heading + description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: "52px",
              letterSpacing: "-1px",
            }}
          >
            Ideal Applications
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "25.6px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Tempor at a sed phasellus.
            Amet morbi eget dignissim non venenatis pellentesque purus lectus
            ullamcorper.
          </Typography>
        </Box>

        {/* Fabric cards grid */}
        <Box
          sx={{
            display: "grid",
            rowGap: "24px",
            columnGap: "24px",
            alignSelf: "stretch",
            gridTemplateRows: "repeat(2, fit-content(100%))",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gridAutoFlow: "row",
          }}
        >
          {FABRICS.map((fabric) => (
            <Box
              key={fabric.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                "& img": {
                  transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                },
                "&:hover img": {
                  transform: "scale(1.1)",
                },
                "& > div:first-of-type": {
                  transition: "box-shadow 0.3s ease",
                },
                "&:hover > div:first-of-type": {
                  boxShadow: "0 8px 28px rgba(0,0,0,0.14)",
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "200px",
                  aspectRatio: "50/77",
                  borderRadius: "8px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={fabric.image}
                  alt={fabric.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              {/* Text */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#333",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "25.6px",
                  }}
                >
                  {fabric.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#9C9C9C",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "19.2px",
                    height: "38px",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}
                >
                  {fabric.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
