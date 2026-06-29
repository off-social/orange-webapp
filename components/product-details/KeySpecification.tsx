"use client";

import { useProduct } from "@/data/ProductContext";
import { Box, Typography } from "@mui/material";

export default function KeySpecification() {
  const { keySpecification } = useProduct();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "48px 16px", md: "80px 40px", lg: "80px 168px 40px" },
        alignSelf: "stretch",
        background: "#FFF",
      }}
    >
      {/* Centered content column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "32px", md: "48px" },
          width: "100%",
          maxWidth: "730px",
        }}
      >
        {/* Heading group */}
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
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
            }}
          >
            {keySpecification.description}
          </Typography>
        </Box>

        {/* Spec rows */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          {keySpecification.rows.map((row, rowIndex) => (
            <Box
              key={rowIndex}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {rowIndex > 0 && (
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#E0E0E0",
                    height: "1px",
                    // Fractional display scaling (e.g. Windows 125%/150%) makes a
                    // 1px line fall on a different sub-pixel each row, so some
                    // dividers render darker than others. Rendering ~2 physical
                    // pixels tall on those displays keeps every divider uniform.
                    "@media (min-resolution: 1.25dppx) and (max-resolution: 1.99dppx)":
                      {
                        height: "1.6px",
                      },
                  }}
                />
              )}
              <Box sx={{ display: "flex", gap: "24px" }}>
                {row.map((spec) => (
                  <Box
                    key={spec.label}
                    sx={{
                      flex: "1 0 0",
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
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
        </Box>
      </Box>
    </Box>
  );
}
