"use client";

import ShowcaseTable from "@/components/product-details/ShowcaseTable";
import { useProduct } from "@/data/ProductContext";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";

export default function PositionProShowcase() {
  const { name, showcase } = useProduct();
  const PROBLEM_ITEMS = showcase.leftItems ?? [];
  const SOLUTION_ITEMS = showcase.rightItems ?? [];
  // No table and no comparison lists: just the heading and description, with
  // the SEO copy following straight on — same as the table layout.
  const hasComparison =
    !showcase.table && PROBLEM_ITEMS.length + SOLUTION_ITEMS.length > 0;

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "64px 40px", lg: "64px 168px" },
        // Without the comparison card the SEO copy follows directly; its own top
        // padding sets the gap
        ...(!hasComparison && { pb: { xs: 0, md: 0, lg: 0 } }),
        flexDirection: "column",
        alignItems: "center",
        gap: showcase.table ? "60px" : "64px",
        alignSelf: "stretch",
        background: "#FFF",
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
          maxWidth: "730px",
        }}
      >
        <Typography
          component={
            showcase.keySpecificationOnly && showcase.headingIsPageH1
              ? "h1"
              : "p"
          }
          sx={{
            m: 0,
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            // In the Key Spec flow it sits between 24px section titles, so match them
            fontSize: { xs: hasComparison ? "28px" : "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: hasComparison ? "36px" : "31.2px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          {showcase.heading}
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
          {showcase.description}
        </Typography>
      </Box>

      {showcase.table ? (
        <ShowcaseTable name={name} table={showcase.table} />
      ) : hasComparison ? (
        /* Comparison card — single joined card with two panels */
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            width: "100%",
            borderRadius: "32px",
            overflow: "hidden",
            boxShadow: "0px 20px 20px rgba(0,0,0,0.06)",
          }}
        >
          {/* ── Solution panel (orange) ── */}
          <Box
            sx={{
              display: "flex",
              flex: { xs: "unset", md: 1 },
              minWidth: 0,
              padding: { xs: "32px 24px", md: "64px" },
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              background: "#F6891F",
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "31.2px",
                    letterSpacing: "0",
                  }}
                >
                  {name}
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#FEF3E8",
                  opacity: 0.8,
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                {showcase.solutionTagline ||
                  `${SOLUTION_ITEMS.length} key advantages`}
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                bgcolor: "rgba(255,255,255,0.25)",
                flexShrink: 0,
              }}
            />

            {/* List */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "100%",
              }}
            >
              {SOLUTION_ITEMS.map((item) => (
                <Box
                  key={item}
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckIcon
                    sx={{ color: "#FFF", fontSize: "20px", flexShrink: 0 }}
                  />
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "22.4px",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Problem panel (dark) ── */}
          <Box
            sx={{
              display: "flex",
              flex: { xs: "unset", md: 1 },
              minWidth: 0,
              padding: { xs: "32px 24px", md: "64px" },
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              background: "#111",
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "31.2px",
                  letterSpacing: "0",
                }}
              >
                Traditional Printers
              </Typography>
              <Typography
                sx={{
                  color: "#999",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                {PROBLEM_ITEMS.length} known limitations
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                bgcolor: "rgba(255,255,255,0.1)",
                flexShrink: 0,
              }}
            />

            {/* List */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "100%",
              }}
            >
              {PROBLEM_ITEMS.map((item) => (
                <Box
                  key={item}
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CloseIcon
                    sx={{ color: "#EA4E33", fontSize: "20px", flexShrink: 0 }}
                  />
                  <Typography
                    sx={{
                      color: "#EFEFEF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "25.6px",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
