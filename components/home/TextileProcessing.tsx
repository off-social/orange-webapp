"use client";

import { useConsultation } from "@/data/ConsultationContext";
import { productHref } from "@/data/products";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Product = { src: string; name: string; desc: string };
type Brand = { name: string; logo: string; products: Product[] };

const BRANDS: Brand[] = [
  {
    name: "FOUND",
    logo: "/Found1.png",
    products: [
      {
        src: "/FOUNDM1.png",
        name: "FOUND Textile Processing Range",
        desc: "Pretreatment, Washing, and Finishing Machinery for Knit and Woven Fabrics.",
      },
    ],
  },
];

const FADE_ANIM = "fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards";

const TextileProcessing = () => {
  const { openModal } = useConsultation();
  const selectedBrand = 0;
  const activeImg = 0;

  const currentProducts = BRANDS[selectedBrand].products;
  const currentProduct = currentProducts[activeImg];
  const animKey = `${selectedBrand}-${activeImg}`;

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>

      {/* Brand Selector */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: { xs: "flex-start", sm: "center" },
          gap: { xs: "8px", md: "14px" },
          px: { xs: 1, sm: 0 },
          maxWidth: "900px",
          width: "100%",
          mx: "auto",
          overflowX: { xs: "auto", sm: "visible" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {BRANDS.map((brand, index) => (
          <Box
            key={brand.name}
            sx={{
              flex: { xs: "0 0 auto", md: "0 1 200px" },
              minWidth: { xs: "160px", md: 0 },
              display: "flex",
              padding: { xs: "12px", md: "10px 12px" },
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              borderRadius: "16px",
              border:
                selectedBrand === index
                  ? "2px solid #F6891F"
                  : "1px solid #E0E0E0",
              background: "#fff",
            }}
          >
            {/* Machine image */}
            <Box
              sx={{
                width: { xs: "120px", md: "100%" },
                height: { xs: "40px", md: "56px" },
                position: "relative",
              }}
            >
              <Image
                src={brand.products[0].src}
                alt={brand.products[0].name}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            {/* Brand logo */}
            <Box
              sx={{
                width: { xs: "55px", md: "100%" },
                height: { xs: "30px", md: "22px" },
                position: "relative",
              }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Product Image */}
      <Box
        sx={{
          width: "100%",
          mt: 5,
          display: "flex",
          justifyContent: "center",
          px: { xs: "8vw", sm: "10vw", md: "20vw" },
        }}
      >
        <Box
          sx={{
            width: { xs: "auto", sm: "65vw", md: "55vw" },
            height: { xs: "181px", sm: "240px", md: "22vw" },
            aspectRatio: { xs: "201 / 101", sm: "unset" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={currentProduct.src}
            alt={currentProduct.name}
            width={900}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "20px",
            }}
          />
        </Box>
      </Box>

      {/* Name + description */}
      <Box
        key={animKey}
        sx={{
          textAlign: "center",
          px: { xs: "16px", sm: "10%", md: "20%" },
          mt: { xs: 2, md: 3 },
          animation: FADE_ANIM,
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
          {currentProduct.name}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "19.2px",
            mt: "6px",
          }}
        >
          {currentProduct.desc}
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        key={`btn-${animKey}`}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "12px", md: 2 },
          mt: 3,
          mb: { xs: 4, md: 2 },
          justifyContent: "center",
          animation: FADE_ANIM,
          px: { xs: "16px", md: 0 },
        }}
      >
        <Button
          component={Link}
          href={productHref(currentProduct.name)}
          variant="outlined"
          sx={{
            color: "#111",
            bgcolor: "#fff",
            borderColor: "#e0e0e0",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "20.8px",
            p: "16px",
            boxShadow: "none",
            width: { xs: "100%", md: "200px" },
            "&:hover": { bgcolor: "#f5f5f5", boxShadow: "none" },
          }}
        >
          Know More
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important" }} />}
          sx={{
            bgcolor: "#F6891F",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "20.8px",
            gap: "8px",
            p: "16px",
            boxShadow: "none",
            width: { xs: "100%", md: "200px" },
            "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
          }}
          onClick={() => openModal(currentProduct.name)}
        >
          Book a Consultation
        </Button>
      </Box>
    </Box>
  );
};

export default TextileProcessing;
