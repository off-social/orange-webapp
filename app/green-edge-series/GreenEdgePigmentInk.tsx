import { Box, Typography } from "@mui/material";

const innerPad = { xs: "0", lg: "0 188px" };

export default function GreenEdgePigmentInk() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: innerPad,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        alignSelf: "stretch",
        boxSizing: "border-box",
      }}
    >
      <Typography
        sx={{
          alignSelf: "stretch",
          color: "#333",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Pigment Ink with Binder Technology:
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignSelf: "stretch",
        }}
      >
        <Typography
          sx={{
            alignSelf: "stretch",
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
          }}
        >
          Our specially formulated Pigment Ink with Binder allows the pigments
          to effectively bond with the fabric, delivering enhanced color
          fastness and durability. This technology results in high-quality
          prints that are both eco-friendly and cost-efficient.
        </Typography>

        <Box
          component="img"
          src="/PigmentInk.png"
          alt="Pigment Ink with Binder Technology diagram"
          sx={{
            alignSelf: "stretch",
            width: "100%",
            height: { xs: "auto", md: "332.05px" },
            aspectRatio: "581/265",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
}
