"use client";

import { FormError, FormSuccess } from "@/components/forms/FormStatus";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField, Typography } from "@mui/material";
import NextImage from "next/image";

const COMPANY_NAME = "Orange O Tech Pvt. Ltd.";

const addresses = [
  {
    label: "Head Office",
    text: "Titanium The Business Hub, 9th Floor, Office No. 904, Bhimrad Road, Opp. Aakash Empire, Surat – 395007, Gujarat, India.",
  },
  {
    label: "Branch Office",
    text: "Plot No. B-115, Block B, Sector 67, Noida, Uttar Pradesh – 201301, India.",
  },
  {
    label: "Factory Address",
    text: "Shed No. A2/7111, Road No. 71, Gate No.: 01, G.I.D.C Sachin, Surat – 394230, Gujarat.",
  },
];

const inputSx = {
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    bgcolor: "#fff",
    "& fieldset": { borderColor: "#E0E0E0" },
    "&:hover fieldset": { borderColor: "#bbb" },
    "&.Mui-focused fieldset": { borderColor: "#F6891F" },
  },
  "& .MuiInputBase-input": {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    color: "#333",
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    color: "#999",
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#F6891F" },
};

function FormCard({
  form,
  submitting,
  submitted,
  error,
  onChange,
  onSubmit,
}: {
  form: { name: string; email: string; subject: string; message: string };
  submitting: boolean;
  submitted: boolean;
  error: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        bgcolor: "#FFF",
        borderRadius: "8px",
        border: "1px solid #E0E0E0",
        p: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "32px",
        boxShadow: "none",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#111",
          fontFamily: "Inter, sans-serif",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "26px",
        }}
      >
        Send us a Message
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
        }}
      >
        {/* Name */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#333",
              lineHeight: "20.8px",
              mb: "6px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Name
            <Box component="span" sx={{ color: "#C73F2C" }}>
              *
            </Box>
          </Typography>
          <TextField
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            fullWidth
            size="small"
            sx={inputSx}
          />
        </Box>

        {/* Email */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#333",
              lineHeight: "20.8px",
              mb: "6px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Email ID
            <Box component="span" sx={{ color: "#C73F2C" }}>
              *
            </Box>
          </Typography>
          <TextField
            placeholder="Email ID"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            fullWidth
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <EmailOutlinedIcon sx={{ fontSize: "18px", color: "#999" }} />
                ),
              },
            }}
            sx={inputSx}
          />
        </Box>

        {/* Subject */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#333",
              mb: "6px",
            }}
          >
            Subject
          </Typography>
          <TextField
            placeholder="Subject"
            name="subject"
            value={form.subject}
            onChange={onChange}
            fullWidth
            size="small"
            sx={inputSx}
          />
        </Box>

        {/* Message */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#333",
              mb: "6px",
            }}
          >
            Message (Optional)
          </Typography>
          <TextField
            placeholder="Message"
            name="message"
            value={form.message}
            onChange={onChange}
            multiline
            rows={4}
            fullWidth
            sx={inputSx}
          />
        </Box>
      </Box>

      <Button
        type="submit"
        variant="contained"
        disabled={submitting}
        startIcon={<SendIcon sx={{ fontSize: "16px !important" }} />}
        sx={{
          bgcolor: "#F6891F",
          color: "#fff",
          borderRadius: "8px",
          textTransform: "none",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          py: "13px",
          px: "32px",
          boxShadow: "none",
          "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
          "&:disabled": { bgcolor: "#F6891F", opacity: 0.6, color: "#fff" },
        }}
      >
        {submitting ? "Sending…" : "Send Message"}
      </Button>

      {submitted && <FormSuccess />}
      <FormError message={error} />
    </Box>
  );
}

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  // The card is rendered twice — in flow on mobile, floating on desktop — and
  // both instances have to share one piece of state.
  const { form, submitting, submitted, error, handleChange, handleSubmit } =
    useFormSubmit("contact", EMPTY_FORM);
  const cardProps = {
    form,
    submitting,
    submitted,
    error,
    onChange: handleChange,
    onSubmit: handleSubmit,
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* ── SECTION 1: Hero (dark + background image) ── */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "auto", lg: "305px" },
          minHeight: { xs: "220px", md: "260px", lg: "305px" },
          backgroundColor: "#111",
          backgroundImage: {
            xs: "url('/contactUsMobileImg1.webp')",
            lg: "url('/contactUsImg1.webp')",
          },
          backgroundRepeat: "no-repeat",
          backgroundPosition: { xs: "center", lg: "left center" },
          backgroundSize: { xs: "cover", lg: "auto 100%" },
          display: "flex",
          alignItems: "center",
          px: { xs: "16px", sm: "40px", lg: "168px" },
          py: { xs: "48px", lg: "0" },
        }}
      >
        {/* Left: heading + subtitle */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: { lg: "500px" },
            width: "100%",
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            component="h1"
            sx={{
              color: "#F6891F",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "32px", md: "36px", lg: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "41.6px", lg: "52px" },
              letterSpacing: "-1px",
              m: 0,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", lg: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", lg: "22.4px" },
              mt: "16px",
              maxWidth: "340px",
              mx: { xs: "auto", lg: 0 },
            }}
          >
            Speak with our team to discover the right printing solution,
            schedule a demo, or get dedicated technical support.
          </Typography>
        </Box>
      </Box>

      {/* ── SECTION 2: White info section ── */}
      <Box
        sx={{
          bgcolor: "#FFF",
          px: { xs: "16px", sm: "40px", lg: "168px" },
          pt: { xs: "40px", lg: "48px" },
          pb: { xs: "64px", lg: "80px" },
          /* Reserve right space on desktop so content doesn't flow under form */
          pr: { xs: "16px", sm: "40px", lg: `${168 + 534 + 48}px` },
        }}
      >
        {/* Mobile/tablet: form shown in flow here */}
        <Box
          sx={{
            display: { xs: "block", lg: "none" },
            mb: "40px",
          }}
        >
          <FormCard {...cardProps} />
        </Box>

        {/* Email + Phone */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: "0",
            mb: "32px",
          }}
        >
          {/* Email */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              mb: { xs: "16px", sm: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <EmailOutlinedIcon
                sx={{ width: "16px", height: "16px", color: "#707070" }}
              />
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
                fontWeight: 500,
                lineHeight: "22.4px",
              }}
            >
              info@orange.com
            </Typography>
          </Box>

          {/* Vertical divider */}
          <Box
            sx={{
              width: "1px",
              height: "40px",
              bgcolor: "#E0E0E0",
              mx: "24px",
              flexShrink: 0,
              display: { xs: "none", sm: "block" },
            }}
          />

          {/* Phone */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <PhoneOutlinedIcon
                sx={{ width: "16px", height: "16px", color: "#707070" }}
              />
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
                fontWeight: 500,
                lineHeight: "22.4px",
              }}
            >
              +91 74860 32990
            </Typography>
          </Box>
        </Box>

        {/* Address Details */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <Typography
            component="h2"
            sx={{
              color: "#111",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "22.4px",
              mb: "20px",
              mt: 0,
            }}
          >
            Address Details:
          </Typography>
          {addresses.map((item, i) => (
            <Box key={item.label}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  mb: "6px",
                }}
              >
                <NextImage
                  src="/locationIcon.webp"
                  alt=""
                  width={16}
                  height={16}
                  style={{ flexShrink: 0 }}
                />
                <Typography
                  sx={{
                    color: "#707070",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "22.4px",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "22.4px",
                  maxWidth: "336px",
                }}
              >
                <Box component="span" sx={{ display: "block" }}>
                  {COMPANY_NAME}
                </Box>
                {item.text}
              </Typography>
              {i < addresses.length - 1 && (
                <Box
                  sx={{
                    height: "1px",
                    bgcolor: "#E0E0E0",
                    my: "20px",
                    maxWidth: "336px",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── DESKTOP ONLY: Form card spanning both sections ── */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          top: "140px",
          right: "168px",
          width: "534px",
          zIndex: 10,
        }}
      >
        <FormCard {...cardProps} />
      </Box>
    </Box>
  );
}
