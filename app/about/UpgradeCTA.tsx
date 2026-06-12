"use client";

import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";

const INPUT_SX = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    "& fieldset": { borderColor: "#E0E0E0" },
    "&:hover fieldset": { borderColor: "#bdbdbd" },
    "&.Mui-focused fieldset": { borderColor: "#F6891F" },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#B0B0B0",
    opacity: 1,
    fontFamily: "Inter, sans-serif",
  },
};

const LABEL_SX = {
  fontFamily: "Inter, sans-serif",
  fontSize: "13px",
  fontWeight: 500,
  color: "#333",
  mb: "6px",
  display: "block",
};

const REQUIRED_DOT = (
  <Box component="span" sx={{ color: "#F6891F", ml: "2px" }}>*</Box>
);

export default function UpgradeCTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "64px 16px", sm: "64px 40px", md: "80px 80px", lg: "80px 168px", xl: "100px 263px" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        alignSelf: "stretch",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "32px", md: "48px", lg: "80px" },
        bgcolor: "#FFF",
      }}
    >
      {/* Left: heading + description */}
      <Box
        sx={{
          display: "flex",
          width: { xs: "100%", md: "auto" },
          flex: { xs: "unset", md: "1 1 0" },
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: "16px",
          flexShrink: 1,
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px", xl: "52px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px", xl: "67.6px" },
            letterSpacing: { xs: 0, md: "-1px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Upgrade to the Future of Printing
        </Typography>

        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px", xl: "16px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px", xl: "25.6px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Don&apos;t miss the opportunity to embrace the digital revolution in
          textile printing. With Orange O Tec&apos;s high-speed, high-quality
          technology, take your business to new heights of efficiency, precision,
          and performance.
        </Typography>

        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px", xl: "16px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px", xl: "25.6px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Get in touch with our team to discover how Orange O Tec can help
          transform your printing business.
        </Typography>
      </Box>

      {/* Right: form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: { xs: "100%", md: "auto" },
          flex: { xs: "unset", md: "1 1 0" },
          flexShrink: 1,
        }}
      >
        {/* Name */}
        <Box>
          <Typography component="label" sx={LABEL_SX}>
            Name{REQUIRED_DOT}
          </Typography>
          <TextField
            fullWidth
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={INPUT_SX}
            slotProps={{ htmlInput: { style: { padding: "12px 14px" } } }}
          />
        </Box>

        {/* Email */}
        <Box>
          <Typography component="label" sx={LABEL_SX}>
            Email ID{REQUIRED_DOT}
          </Typography>
          <TextField
            fullWidth
            name="email"
            placeholder="Email ID"
            value={form.email}
            onChange={handleChange}
            variant="outlined"
            size="small"
            type="email"
            sx={INPUT_SX}
            slotProps={{
              htmlInput: { style: { padding: "12px 14px" } },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailOutlinedIcon sx={{ fontSize: "18px", color: "#B0B0B0" }} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {/* Message */}
        <Box>
          <Typography component="label" sx={LABEL_SX}>
            Message (Optional)
          </Typography>
          <TextField
            fullWidth
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={4}
            sx={INPUT_SX}
            slotProps={{ htmlInput: { style: { fontFamily: "Inter, sans-serif", fontSize: "14px" } } }}
          />
        </Box>

        {/* Submit */}
        <Button
          variant="contained"
          startIcon={<CheckIcon sx={{ fontSize: "16px !important" }} />}
          sx={{
            alignSelf: { xs: "stretch", md: "flex-start" },
            bgcolor: "#F6891F",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            px: "32px",
            py: "13px",
            boxShadow: "none",
            "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
