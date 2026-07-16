"use client";

import { useProduct } from "@/data/ProductContext";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Typography } from "@mui/material";
import { useSyncExternalStore } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

/** Custom drag handle: white line + centred circle with left/right arrows. */
const SliderHandle = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      cursor: "ew-resize",
    }}
  >
    <Box
      sx={{
        flex: 1,
        width: "2px",
        bgcolor: "#FFF",
        boxShadow: "0 0 6px rgba(0,0,0,0.35)",
      }}
    />
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "40px", md: "48px" },
        height: { xs: "40px", md: "48px" },
        borderRadius: "50%",
        bgcolor: "rgba(255,255,255,0.95)",
        color: "#F6891F",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        flexShrink: 0,
      }}
    >
      <KeyboardArrowLeftIcon sx={{ fontSize: { xs: "20px", md: "24px" }, ml: "-4px" }} />
      <KeyboardArrowRightIcon sx={{ fontSize: { xs: "20px", md: "24px" }, mr: "-4px" }} />
    </Box>
    <Box
      sx={{
        flex: 1,
        width: "2px",
        bgcolor: "#FFF",
        boxShadow: "0 0 6px rgba(0,0,0,0.35)",
      }}
    />
  </Box>
);

export default function BeforeAfter() {
  const { beforeAfter } = useProduct();
  // The slider measures the DOM, so it renders differently on the server than
  // on the client. Mount it only after hydration (showing the printed result
  // as a static placeholder first) to avoid a hydration mismatch.
  const mounted = useSyncExternalStore(
    () => () => { },
    () => true,
    () => false,
  );

  if (!beforeAfter) return null;

  const {
    heading,
    description,
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
  } = beforeAfter;

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", md: "64px 40px", lg: "64px 168px" },
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
          maxWidth: "730px",
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
          {heading}
        </Typography>
        {description && (
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
            {description}
          </Typography>
        )}
      </Box>

      {/* Comparison slider */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          // A little taller on phones so the fabric detail reads well.
          aspectRatio: { xs: "4 / 3", sm: "3 / 2" },
          borderRadius: { xs: "16px", md: "32px" },
          overflow: "hidden",
          boxShadow: "0px 20px 20px rgba(0,0,0,0.06)",
        }}
      >
        {mounted ? (
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={beforeImage}
                alt={beforeLabel}
                style={{ objectFit: "cover" }}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={afterImage}
                alt={afterLabel}
                style={{ objectFit: "cover" }}
              />
            }
            handle={<SliderHandle />}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={afterImage}
            alt={afterLabel}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </Box>
    </Box>
  );
}
