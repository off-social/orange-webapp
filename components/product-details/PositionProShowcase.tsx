import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";

const LEFT_ITEMS = [
  "Fabric distortion on complex textures",
  "Costly registration errors on lace and jacquard",
  "Misaligned prints on embroidery and sequins",
  "No double-sided silk capability",
];

const RIGHT_ITEMS = [
  "Real-time vision scanning & compensation",
  "Perfect alignment every print, every time",
  "Precision mapping on woven & knit textures",
  "Double-sided silk printing supported",
];

export default function PositionProShowcase() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "100px 40px", lg: "100px 356px" },
        flexDirection: "column",
        alignItems: "center",
        gap: "64px",
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
        }}
      >
        <Typography
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "36px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          Position Pro Showcase
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
          Lorem ipsum dolor sit amet consectetur. Tempor at a sed phasellus.
          Amet morbi eget dignissim non venenatis pellentesque purus lectus
          ullamcorper.
        </Typography>
      </Box>

      {/* Cards row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "24px",
          alignItems: "stretch",
          width: "100%",
        }}
      >
        {/* ── Left card ── */}
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "0" },
            flex: { xs: "unset", sm: 1 },
            padding: "32px 24px",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            borderRadius: "20px",
            background: "#F2F2F2",
            boxSizing: "border-box",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              color: "#111",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "31.2px",
              letterSpacing: "0",
            }}
          >
            Traditional printers struggles with
          </Typography>

          {/* List — divider after every item except last */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            {LEFT_ITEMS.map((item, idx) => (
              <Box key={item} sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    py: "16px",
                  }}
                >
                  <CloseIcon
                    sx={{ color: "#E05252", fontSize: "18px", flexShrink: 0, mt: "2px" }}
                  />
                  <Typography
                    sx={{
                      color: "#333",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "22.4px",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
                {idx < LEFT_ITEMS.length - 1 && (
                  <Box sx={{ width: "100%", height: "1px", bgcolor: "#E0E0E0", flexShrink: 0 }} />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Right card ── */}
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "0" },
            flex: { xs: "unset", sm: 1 },
            padding: "32px 24px",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            borderRadius: "20px",
            background: "#F6891F",
            boxSizing: "border-box",
          }}
        >
          {/* Badge + heading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* Position Pro pill */}
            <Box
              sx={{
                display: "flex",
                padding: "8px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "100px",
                background: "#FFF",
              }}
            >
              <Typography
                sx={{
                  color: "#F6891F",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "31.2px",
                  letterSpacing: "0",
                }}
              >
                Position Pro
              </Typography>
            </Box>

            {/* "solves it with" */}
            <Typography
              sx={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "31.2px",
                letterSpacing: "0",
              }}
            >
              solves it with
            </Typography>
          </Box>

          {/* List — divider after every item except last */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            {RIGHT_ITEMS.map((item, idx) => (
              <Box key={item} sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    py: "16px",
                  }}
                >
                  <CheckIcon
                    sx={{ color: "#FFF", fontSize: "18px", flexShrink: 0, mt: "2px" }}
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
                {idx < RIGHT_ITEMS.length - 1 && (
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      bgcolor: "rgba(255,255,255,0.35)",
                      flexShrink: 0,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
