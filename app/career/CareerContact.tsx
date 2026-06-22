"use client";

import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const INPUT_SX = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    backgroundColor: "#FFF",
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

export default function CareerContact() {
  const [form, setForm] = useState({ name: "", email: "", position: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "48px 16px", sm: "64px 40px", md: "80px 80px", lg: "80px 168px", xl: "80px 263px" },
        alignItems: { xs: "stretch", sm: "flex-start" },
        gap: { xs: "40px", sm: "40px", md: "64px", lg: "126px" },
        alignSelf: "stretch",
        flexDirection: { xs: "column", sm: "row" },
        bgcolor: "#F2F2F2",
      }}
    >
      {/* Left — heading + contact info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          gap: "40px",
          flex: { xs: "unset", sm: "1 1 0" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        {/* Heading + subtitle */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: { xs: "center", sm: "flex-start" } }}>
          <Typography
            sx={{
              color: "#333",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", sm: "28px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", sm: "36.4px", md: "52px" },
              letterSpacing: { xs: 0, sm: "-0.5px", md: "-1px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Can&apos;t find your role?
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", sm: "22.4px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            All roles based in India. Freshers encouraged to apply.
          </Typography>
        </Box>

        {/* Contact info */}
        <Box sx={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: { xs: "center", sm: "flex-start" } }}>
          {/* Email */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: { xs: "center", sm: "flex-start" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <EmailOutlinedIcon sx={{ fontSize: "16px", color: "#707070" }} />
              <Typography
                sx={{
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "22.4px",
                }}
              >
                Email Id
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#333",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "22.4px",
              }}
            >
              info@orangeotec.com
            </Typography>
          </Box>

          {/* Phone */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: { xs: "center", sm: "flex-start" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <PhoneOutlinedIcon sx={{ fontSize: "16px", color: "#707070" }} />
              <Typography
                sx={{
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "22.4px",
                }}
              >
                Phone No.
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#333",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "22.4px",
              }}
            >
              +91 74860 32990
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right — form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          flex: { xs: "unset", sm: "1 1 0" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        {/* Full Name */}
        <Box sx={{ width: "100%" }}>
          <Box component="label" sx={LABEL_SX}>Full Name{REQUIRED_DOT}</Box>
          <TextField
            fullWidth
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            sx={INPUT_SX}
          />
        </Box>

        {/* Email ID */}
        <Box sx={{ width: "100%" }}>
          <Box component="label" sx={LABEL_SX}>Email ID{REQUIRED_DOT}</Box>
          <TextField
            fullWidth
            name="email"
            placeholder="Email ID"
            value={form.email}
            onChange={handleChange}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailOutlinedIcon sx={{ fontSize: "18px", color: "#B0B0B0" }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={INPUT_SX}
          />
        </Box>

        {/* Position */}
        <Box sx={{ width: "100%" }}>
          <Box component="label" sx={LABEL_SX}>Position</Box>
          <TextField
            fullWidth
            name="position"
            placeholder="Position"
            value={form.position}
            onChange={handleChange}
            sx={INPUT_SX}
          />
        </Box>

        {/* Message */}
        <Box sx={{ width: "100%" }}>
          <Box component="label" sx={LABEL_SX}>Message (Optional)</Box>
          <TextField
            fullWidth
            multiline
            rows={4}
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            sx={INPUT_SX}
          />
        </Box>

        {/* Submit */}
        <Button
          variant="contained"
          startIcon={
            <CheckIcon
              sx={{ fontSize: { xs: "14px !important", sm: "16px !important" } }}
            />
          }
          sx={{
            bgcolor: "#F6891F",
            color: "#FFF",
            borderRadius: "8px",
            px: { xs: "18px", sm: "24px" },
            py: { xs: "10px", sm: "12px" },
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", sm: "14px" },
            fontWeight: 500,
            lineHeight: "22.4px",
            textTransform: "none",
            whiteSpace: "nowrap",
            boxShadow: "none",
            alignSelf: "flex-start",
            "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
