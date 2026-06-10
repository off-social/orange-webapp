import { Box, Typography } from "@mui/material";
import ProductSidebar from "./ProductSidebar";

const SPEC_ROWS = [
  [
    { label: "Print Heads", value: "16× Kyocera industrial" },
    { label: "Max Output", value: "2,000 lm/day" },
  ],
  [
    { label: "Max Resolution", value: "1800 DPI" },
    { label: "Standard Speed", value: "540 m²/hr" },
  ],
  [
    { label: "Max Print Width", value: "1850 mm" },
    { label: "Fabrics", value: "All types including Elastic & New Fiber" },
  ],
  [
    { label: "Weight for feeder frame", value: "100 kg" },
    { label: "Dimensions for feeder frame", value: "Φ500" },
  ],
  [
    {
      label: "Ink Colors",
      value: "12 (C, M, Y, K, O, B, R, G, FM, FY, LM, Gy)",
    },
    { label: "Ink Types", value: "Reactive · Acid · Pigment · Disperse" },
  ],
];

export default function KeySpecification() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "48px 16px", md: "100px 40px", lg: "100px 168px" },
        alignItems: "flex-start",
        gap: "24px",
        alignSelf: "stretch",
        background: "linear-gradient(180deg, #F2F2F2 0%, #FFF 100%)",
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
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: "64px", md: "48px" },
          flex: "1 0 0",
        }}
      >
        {/* Heading group */}
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
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", md: "52px" },
              letterSpacing: { xs: "0", md: "-1px" },
            }}
          >
            Key Specification
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "19.2px",
              mt: "0px",
            }}
          >
            Advanced industrial textile printing technology designed to maximize
            productivity, ensure superior color accuracy, and support diverse
            fabric applications.
          </Typography>
        </Box>

        {/* Spec rows */}
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {SPEC_ROWS.map((row, rowIndex) => (
            <Box key={rowIndex}>
              <Box sx={{ height: "1px", bgcolor: "#E0E0E0", width: "100%" }} />
              <Box
                sx={{
                  display: "flex",
                  py: "16px",
                  gap: "24px",
                }}
              >
                {row.map((spec) => (
                  <Box
                    key={spec.label}
                    sx={{
                      flex: "1 0 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#707070",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "22.4px",
                      }}
                    >
                      {spec.label}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#404040",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "25.6px",
                      }}
                    >
                      {spec.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
          <Box sx={{ height: "1px", bgcolor: "#E0E0E0", width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
}
