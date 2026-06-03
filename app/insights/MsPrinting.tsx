import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";

interface Spec {
  label: string;
  value: string;
}

interface Product {
  image: string;
  alt: string;
  name: string;
  description: string;
  specs: Spec[];
}

const products: Product[] = [
  {
    image: "/JP7.png",
    alt: "JP7",
    name: "JP7",
    description:
      "TJP7 is a high-performance industrial digital printer designed for both fabric and paper. With superior print quality, scalable printheads, and unmatched production speed, it's the perfect choice for businesses aiming to boost output and lower costs sustainably.",
    specs: [
      {
        label: "Head technology",
        value: "Robust printheads with variable drop size",
      },
      { label: "Printing mode", value: "Scanning" },
      { label: "Max Printing Width", value: "1800 mm" },
      {
        label: "Weight",
        value: "4 to 72 picolitres (variable drop technology)",
      },
    ],
  },
  {
    image: "/JPK-Evo.png",
    alt: "JPK Evo",
    name: "JPK Evo",
    description:
      "JPK EVO is a high-performance digital printing machine engineered for long production runs on both fabric and paper. With exceptional speed, precision, and workflow efficiency, it's built for businesses demanding industrial-grade reliability and sustainable innovation.",
    specs: [
      {
        label: "Head technology",
        value: "Variable drop technology with 16 gray levels",
      },
      {
        label: "Printing mode",
        value: "From 4 to 72 picolitres",
      },
      { label: "Max Printing Width", value: "1800 mm – 3200 mm" },
      { label: "Weight", value: "Scanning-type digital textile printing" },
    ],
  },
  {
    image: "/Minilario.png",
    alt: "Minilario",
    name: "Minilario",
    description:
      "MINILARIO is MS Printing's fastest scanning textile printer, built for ultra-high-speed, high-precision production. With 64 printheads and up to 8 colors, it delivers industrial-level speed, energy efficiency, and reliable performance — all while supporting sustainable innovation.",
    specs: [
      {
        label: "Head technology",
        value: "Industrial-grade printheads with drop size from 4 to 72 p",
      },
      {
        label: "Printing mode",
        value: "Scanning",
      },
      { label: "Max Printing Width", value: "3200 mm" },
      { label: "Weight", value: "64" },
    ],
  },
];

const ProductCard = ({
  product,
  isLast,
}: {
  product: Product;
  isLast: boolean;
}) => (
  <>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "flex-start" },
        px: { xs: 3, sm: 4, md: 10 },
        mt: { xs: 5, md: 8 },
        mb: isLast ? { xs: 8, md: 12 } : 0,
        gap: { xs: 0, md: 0 },
      }}
    >
      {/* ── Image ── */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: 220, sm: 260, md: 300 },
          position: "relative",
          mb: { xs: 3, md: 0 },
          flexShrink: 0,
        }}
      >
        <Image
          src={product.image}
          alt={product.alt}
          width={580}
          height={300}
          style={{ objectFit: "contain", objectPosition: "left center" }}
        />
      </Box>

      {/* ── Text content ── */}
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        {/* Product name */}
        <Typography
          sx={{
            fontSize: { xs: "26px", sm: "32px", md: "40px" },
            color: "#000",
            fontFamily: "Stack Sans Headline",
            lineHeight: "114%",
          }}
        >
          {product.name}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "#404040",
            fontSize: { xs: "13px", md: "14px" },
            mt: 1,
            lineHeight: 1.6,
          }}
        >
          {product.description}
        </Typography>

        {/* Specifications label */}
        <Typography
          sx={{ fontSize: "14px", fontWeight: 600, mt: 2.5, color: "#404040" }}
        >
          Specifications -
        </Typography>

        {/* Spec rows */}
        <Box sx={{ mt: 1.5 }}>
          {product.specs.map((spec, i) => (
            <Box key={i}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                  alignItems: "baseline",
                  gap: { xs: 0.3, sm: 0.5 },
                  py: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
                    fontWeight: 600,
                    color: "#000",
                    whiteSpace: "nowrap",
                  }}
                >
                  {spec.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "14px" },
                    fontWeight: 400,
                    color: "#404040",
                  }}
                >
                  — {spec.value}
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "#E0E0E0" }} />
            </Box>
          ))}
        </Box>

        {/* Action buttons */}
        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            display: "flex",
            gap: 1.5,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            sx={{
              color: "#FFF",
              bgcolor: "#000",
              borderRadius: "19.58px",
              textTransform: "none",
              fontSize: { xs: "12px", md: "14px" },
              px: { xs: 2.5, md: 3 },
              "&:hover": { bgcolor: "#222" },
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
              px: { xs: 2.5, md: 3 },
              "&:hover": { bgcolor: "rgba(0,0,0,0.05)" },
            }}
          >
            Get a Quote
          </Button>
        </Box>
      </Box>
    </Box>

    {!isLast && (
      <Box sx={{ px: { xs: 3, md: 8 }, mt: { xs: 4, md: 8 } }}>
        <Divider sx={{ borderColor: "#E0E0E0" }} />
      </Box>
    )}
  </>
);

const MsPrinting = () => {
  return (
    <>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <style>{`
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Brand Buttons */}
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "left",
            gap: { xs: 1.5, md: 3 },
            mt: 3,
            px: { xs: 3, md: 14 },
          }}
        >
          <Button
            sx={{
              width: { xs: "calc(50% - 6px)", md: "150px" },
              height: { xs: "44px", md: "50px" },
              border: "1px solid #F7931E",
              borderRadius: "12px",
              background: "#fff",
              transition: "0.3s",
              "&:hover": { border: "1px solid #F7931E", background: "#fff" },
            }}
          >
            <Box
              sx={{
                width: { xs: "80px", md: "100px" },
                height: "30px",
                position: "relative",
              }}
            >
              <Image
                src={"/Ms.png"}
                alt="Ms"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Button>
        </Box>
      </Box>

      {products.map((product, index) => (
        <ProductCard
          key={product.alt}
          product={product}
          isLast={index === products.length - 1}
        />
      ))}
    </>
  );
};

export default MsPrinting;
