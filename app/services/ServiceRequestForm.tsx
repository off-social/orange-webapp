"use client";

import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
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
  "& .MuiInputLabel-root": {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
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

const contactItems = [
  {
    icon: <EmailOutlinedIcon sx={{ fontSize: "18px", color: "#707070" }} />,
    label: "Email Id",
    value: "info@orangeotec.com",
  },
  {
    icon: <PhoneOutlinedIcon sx={{ fontSize: "18px", color: "#707070" }} />,
    label: "Phone No.",
    value: "+91 74860 32990",
  },
  {
    icon: <LocationOnOutlinedIcon sx={{ fontSize: "18px", color: "#707070" }} />,
    label: "Address",
    value:
      "Titaanium The Business Hub, 9th floor, Office no 901, Bhimrad Road, Opp. Aakash Empire, Surat – 395017 (Gujarat) India.",
  },
];

export default function ServiceRequestForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        px: { xs: "16px", md: "168px" },
        py: { xs: "64px", md: "80px" },
        alignItems: { xs: "stretch", md: "flex-start" },
        gap: { xs: "48px", md: "126px" },
        alignSelf: "stretch",
        width: "100%",
        boxSizing: "border-box",
        bgcolor: "#FFF",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Left — title + contact info */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "32px", flex: 1 }}>
        {/* Title + subtitle */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "28px", md: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "36px", md: "52px" },
              letterSpacing: "-1px",
              color: "#333",
            }}
          >
            Submit a Service Request
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              color: "#707070",
            }}
          >
            Need assistance? Fill out our quick support form and our team will
            get back to you within 24 business hours.
          </Typography>
        </Box>

        {/* Contact items */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {contactItems.map((item) => (
            <Box key={item.label} sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {item.icon}
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#707070",
                    lineHeight: "20px",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#333",
                  lineHeight: "22px",
                  pl: "24px",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right — form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flex: 1,
          maxWidth: { md: "480px" },
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
            inputProps={{ style: { padding: "12px 14px" } }}
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
            inputProps={{ style: { padding: "12px 14px" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailOutlinedIcon sx={{ fontSize: "18px", color: "#B0B0B0" }} />
                </InputAdornment>
              ),
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
            inputProps={{ style: { fontFamily: "Inter, sans-serif", fontSize: "14px" } }}
          />
        </Box>

        {/* Submit */}
        <Button
          variant="contained"
          startIcon={<CheckIcon sx={{ fontSize: "16px !important" }} />}
          sx={{
            alignSelf: "flex-start",
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
