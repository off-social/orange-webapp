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
    image: "/FabPro1i.png",
    alt: "FabPro1i",
    name: "FabPro 1i",
    description:
      "An advanced digital textile printer designed to transform your textile printing operations with speed, precision, and efficiency. Made in India, it combines cutting-edge features such as high-speed printing, precise ink delivery, & low-maintenance systems, making it ideal for small to medium-scale businesses looking to scale their production while maintaining high-quality results.",
    specs: [
      { label: "Head technology", value: "Water based Ricoh Gen 6 Printhead" },
      { label: "Printing mode", value: "Single/ Bi directional" },
      { label: "Max Printing Width", value: "1500 mm" },
      { label: "Weight", value: "Printer – 2300 kg | Dryer – 800 kg" },
    ],
  },
  {
    image: "/fabPro2i.png",
    alt: "fabPro2i",
    name: "FabPro 2i",
    description:
      "FabPro 2i is a high-performance Made in India digital textile printer built for industrial speed, superior precision, and exceptional fabric versatility. With 16 Ricoh printheads and support for up to 8 colors, it's the ideal upgrade for mid to large-scale fabric printing setups.",
    specs: [
      { label: "Head technology", value: "Ricoh print head" },
      { label: "Printing mode", value: "Single/ Bi directional" },
      { label: "Max Printing Width", value: "1850 mm" },
      { label: "Weight", value: "Printer 2.7 T | Dryer – 1.2 T" },
    ],
  },
  {
    image: "/PositionPro.png",
    alt: "PositionPro",
    name: "Position Pro",
    description:
      "The high-speed positioning direct-to-fabric digital textile printer is engineered for precision, efficiency, and scalable production. Equipped with 16 Kyocera industrial printheads, it delivers print speeds of Upto 2,000 LM/Day while maintaining exceptional stability and accuracy.",
    specs: [
      { label: "Head technology", value: "Kyocera printheads KJ4B" },
      { label: "Printing mode", value: "Bi directional" },
      { label: "Max Printing Width", value: "1850 mm" },
      { label: "Weight", value: "2–4T" },
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
      <Box sx={{ px: { xs: 3, md: 8 }, mt: { xs: 4, md: 4 } }}>
        <Divider sx={{ borderColor: "#E0E0E0" }} />
      </Box>
    )}
  </>
);

const ColorixInsights = () => {
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
              border: "1px solid #D9D9D9",
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
                src={"/colorix.png"}
                alt="colorix"
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

export default ColorixInsights;
