import { Box, Typography } from "@mui/material";
import GreenEdgeBenefitsKeyAdvantages from "./GreenEdgeBenefitsKeyAdvantages";
import GreenEdgeBenefitsSustainabilityImpact from "./GreenEdgeBenefitsSustainabilityImpact";
import GreenEdgeBenefitsTechBenefits from "./GreenEdgeBenefitsTechBenefits";

export default function GreenEdgeBenefits() {
  return (
    <Box
      sx={{
        background: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignSelf: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: "64px",
          alignSelf: "stretch",
          width: "100%",
          maxWidth: "1440px",
          padding: {
            xs: "48px 16px",
            sm: "60px 24px",
            md: "60px 40px",
            lg: "64px 168px",
          },
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0",
            alignSelf: "stretch",
          }}
        >
          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", sm: "30px", md: "36px", lg: "40px" },
              fontWeight: 500,
              lineHeight: {
                xs: "31.2px",
                sm: "39px",
                md: "46.8px",
                lg: "52px",
              },
              letterSpacing: { xs: "0", md: "-0.5px", lg: "-1px" },
            }}
          >
            The Benefits of
          </Typography>
          <Typography
            sx={{
              color: "#F6891F",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", sm: "30px", md: "36px", lg: "40px" },
              fontWeight: 500,
              lineHeight: {
                xs: "31.2px",
                sm: "39px",
                md: "46.8px",
                lg: "52px",
              },
              letterSpacing: { xs: "0", md: "-0.5px", lg: "-1px" },
              mb: { xs: "16px", md: "8px" },
            }}
          >
            Sustainable Pigment Printing
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", md: "13px", lg: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", md: "20.8px", lg: "22.4px" },
              maxWidth: "640px",
            }}
          >
            Explore the advantages of a simplified printing process that reduces
            water usage, lowers energy consumption, and improves production
            efficiency.
          </Typography>
        </Box>

        <GreenEdgeBenefitsKeyAdvantages />
        <GreenEdgeBenefitsTechBenefits />
        <GreenEdgeBenefitsSustainabilityImpact />
      </Box>
    </Box>
  );
}
