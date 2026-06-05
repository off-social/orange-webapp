"use client";

import { Button, ButtonProps, CircularProgress } from "@mui/material";

interface OGButtonProps extends ButtonProps {
  loading?: boolean;
}

const OGButton = ({ loading = false, children, disabled, sx, ...props }: OGButtonProps) => {
  return (
    <Button
      disableElevation
      disabled={disabled || loading}
      sx={{
        backgroundColor: "#FF6B00",
        color: "#fff",
        borderRadius: "8px",
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        py: 1.25,
        "&:hover": {
          backgroundColor: "#E55A00",
        },
        "&:disabled": {
          backgroundColor: "#FFB380",
          color: "#fff",
        },
        ...sx,
      }}
      {...props}
    >
      {loading ? <CircularProgress size={20} sx={{ color: "#fff" }} /> : children}
    </Button>
  );
};

export default OGButton;
