"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { Box, Typography } from "@mui/material";

/**
 * Shared outcome UI for the sheet-backed forms. All of them sit on a light
 * surface, so a single light treatment covers every one.
 */

/** Shown under the button once an entry has been recorded. */
export function FormSuccess({
  message = "Thanks — we'll be in touch shortly.",
}: {
  message?: string;
}) {
  return (
    <Box
      role="status"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        alignSelf: "stretch",
        padding: "12px 14px",
        borderRadius: "8px",
        border: "1px solid #CDE9D3",
        background: "#F1FAF3",
      }}
    >
      <CheckCircleOutlineIcon
        sx={{ fontSize: "18px", color: "#2E7D46", flexShrink: 0, mt: "2px" }}
      />
      <Typography
        sx={{
          color: "#1F5B32",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          lineHeight: "20.8px",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}

/** Shown under the button on failure; the fields stay filled in. */
export function FormError({ message }: { message: string }) {
  if (!message) return null;
  return (
    <Typography
      role="alert"
      sx={{
        color: "#C73F2C",
        fontFamily: "Inter, sans-serif",
        fontSize: "13px",
        fontWeight: 500,
        lineHeight: "20.8px",
      }}
    >
      {message}
    </Typography>
  );
}
