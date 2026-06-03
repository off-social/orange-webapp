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
    image: "/k42.png",
    alt: "K24",
    name: "K24",
    description:
      "The K24 is an industrial-grade digital textile printer designed for exceptional speed, precision, and color accuracy. With advanced piezoelectric printhead technology and intelligent ink systems, it delivers consistent, high-quality results across various fabrics—making it ideal for high-volume textile businesses.",
    specs: [
      { label: "Head technology", value: "(Single Channel) 8 ~ 16 ~ 24" },
      { label: "Printing mode", value: "Single/ Bi directional" },
      { label: "Max Printing Width", value: "1900 mm" },
      { label: "Weight", value: "3.05T (3050 kg)" },
    ],
  },
  {
    image: "/k62.png",
    alt: "K62",
    name: "K62",
    description:
      "The Orange O Tec K64 is a next-generation industrial fabric printer engineered for speed, scale, and sharp precision. With up to 64 high-performance piezoelectric printheads and versatile ink support, it delivers ultra-fast, vibrant prints for high-demand textile production.",
    specs: [
      {
        label: "Head technology",
        value: "Industrial-grade piezoelectric printheads (32/48/56/64 heads)",
      },
      {
        label: "Printing mode",
        value: "S1 pass – up to 1100 linear meters/hr",
      },
      { label: "Max Printing Width", value: "1800 mm" },
      { label: "Weight", value: "CMYK + 4 Other Colors" },
    ],
  },
  {
    image: "/k32.png",
    alt: "K32",
    name: "K32",
    description:
      "The Homer K32 is a high-speed industrial digital textile printer built for large-scale, precision-driven production. With 32 Kyocera printheads, intelligent automation, and vibrant multi-color ink capabilities, it delivers consistent quality and impressive throughput for demanding textile businesses.",
    specs: [
      { label: "Head technology", value: "Water-based Kyocera print head" },
      {
        label: "Printing mode",
        value: "1–4 pass (up to 570 linear meters/hr)",
      },
      { label: "Max Printing Width", value: "1900 mm" },
      { label: "Weight", value: "7000 kg | Dryer – 3585 kg" },
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
    {/* ── Mobile: full-width stacked column ── Desktop: side-by-side row ── */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "flex-start" },
        px: { xs: 3, sm: 4, md: 10 },
        mt: { xs: 5, md: 8 },
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

const HomerDigitalTextilePrinter = () => {
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
                src={"/Homer.png"}
                alt="Homer"
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

export default HomerDigitalTextilePrinter;
