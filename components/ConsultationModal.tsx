"use client";

import { useConsultation } from "@/data/ConsultationContext";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const PRINTERS = [
  "Position Pro",
  "FabPro 1i",
  "FabPro 2i",
  "K24",
  "K32",
  "K64",
  "Rocket",
  "JP7",
  "JPK EVO",
  "MiniLaRIO",
  "LaRIO",
  "FoilJet 8 Head",
  "FoilJet 16 Head",
  "Alpha II",
  "Alpha III",
  "Alpha 15",
  "Alpha 16",
  "SubPro II",
  "SubPro S-16",
  "Pengda 1000DIA",
  "JetRix-E",
  "VividPress-E",
  "MAS Digital Textile Printer",
];

/**
 * Maps any product name (short like "Position Pro" or long/descriptive like
 * "JPK Evo Industrial Digital Textile Printer") to the matching dropdown entry.
 * Case-insensitive, word-boundary aware, picks the longest match so
 * "Alpha III ..." resolves to "Alpha III" and not "Alpha II". Returns "" if none.
 */
const matchPrinter = (raw: string): string => {
  if (!raw) return "";
  const r = raw.trim().toLowerCase();
  return (
    PRINTERS.filter((p) => {
      const pl = p.toLowerCase();
      return r === pl || r.startsWith(pl + " ");
    }).sort((a, b) => b.length - a.length)[0] ?? ""
  );
};

const INPUT_SX = {
  "& .MuiOutlinedInput-root": {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    "& fieldset": { borderColor: "#E0E0E0" },
    "&:hover fieldset": { borderColor: "#C0C0C0" },
    "&.Mui-focused fieldset": { borderColor: "#F6891F" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    "&.Mui-focused": { color: "#F6891F" },
  },
  "& .MuiFormHelperText-root": {
    fontFamily: "Inter, sans-serif",
    fontSize: "11px",
  },
};

interface FormState {
  name: string;
  mobile: string;
  printer: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  printer?: string;
}

export default function ConsultationModal() {
  const { open, preselectedPrinter, closeModal } = useConsultation();

  return (
    <Dialog
      open={open}
      onClose={closeModal}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: "16px",
            p: 0,
            m: { xs: "16px", sm: "32px" },
          },
        },
      }}
    >
      {/* Mount the form fresh on each open so its state resets without an effect */}
      {open && (
        <ConsultationForm
          preselectedPrinter={preselectedPrinter}
          closeModal={closeModal}
        />
      )}
    </Dialog>
  );
}

function ConsultationForm({
  preselectedPrinter,
  closeModal,
}: {
  preselectedPrinter: string;
  closeModal: () => void;
}) {
  const [form, setForm] = useState<FormState>({
    name: "",
    mobile: "",
    printer: matchPrinter(preselectedPrinter),
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(form.mobile.trim())) {
      newErrors.mobile = "Enter a valid mobile number";
    }
    if (!form.printer) newErrors.printer = "Please select a printer";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DialogContent sx={{ p: 0 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: { xs: "20px 20px 0", sm: "28px 28px 0" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "18px", sm: "22px" },
                fontWeight: 600,
                color: "#111",
                lineHeight: 1.3,
              }}
            >
              Book a Consultation
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                color: "#707070",
                mt: "4px",
              }}
            >
              Our team will get back to you shortly.
            </Typography>
          </Box>
          <IconButton onClick={closeModal} sx={{ color: "#707070", mt: "-4px" }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Divider */}
        <Box sx={{ height: "1px", bgcolor: "#E0E0E0", mx: { xs: "20px", sm: "28px" }, mt: "20px" }} />

        {submitted ? (
          /* Success state */
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: { xs: "40px 20px", sm: "48px 28px" },
              gap: "12px",
            }}
          >
            <Box
              sx={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                bgcolor: "#FFF3E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: "8px",
              }}
            >
              <Typography sx={{ fontSize: "28px" }}>✓</Typography>
            </Box>
            <Typography
              sx={{ fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 600, color: "#111" }}
            >
              Request Submitted!
            </Typography>
            <Typography
              sx={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#707070", maxWidth: "320px" }}
            >
              Thank you for your interest. We&apos;ll reach out to you within 24 hours.
            </Typography>
            <Button
              onClick={closeModal}
              sx={{
                mt: "8px",
                bgcolor: "#F6891F",
                color: "#fff",
                borderRadius: "8px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                px: "28px",
                py: "10px",
                boxShadow: "none",
                "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
              }}
            >
              Close
            </Button>
          </Box>
        ) : (
          /* Form */
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              p: { xs: "20px", sm: "28px" },
            }}
          >
            <TextField
              label="Name"
              required
              fullWidth
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              error={!!errors.name}
              helperText={errors.name}
              sx={INPUT_SX}
            />

            <TextField
              label="Mobile Number"
              required
              fullWidth
              type="tel"
              value={form.mobile}
              onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
              error={!!errors.mobile}
              helperText={errors.mobile}
              sx={INPUT_SX}
            />

            <FormControl fullWidth required error={!!errors.printer} sx={INPUT_SX}>
              <InputLabel>Which Printer are you interested in?</InputLabel>
              <Select
                value={form.printer}
                label="Which Printer are you interested in?"
                onChange={(e) => setForm((f) => ({ ...f, printer: e.target.value }))}
                MenuProps={{
                  slotProps: {
                    paper: {
                      sx: {
                        maxHeight: 280,
                        "& .MuiMenuItem-root": {
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                        },
                      },
                    },
                  },
                }}
              >
                {PRINTERS.map((p) => (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                ))}
              </Select>
              {errors.printer && <FormHelperText>{errors.printer}</FormHelperText>}
            </FormControl>

            <TextField
              label="Message"
              fullWidth
              multiline
              rows={3}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Tell us about your printing requirements..."
              sx={INPUT_SX}
            />

            {submitError && (
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "#d32f2f",
                  mt: "-4px",
                }}
              >
                {submitError}
              </Typography>
            )}

            <Button
              onClick={handleSubmit}
              disabled={submitting}
              fullWidth
              sx={{
                bgcolor: "#F6891F",
                color: "#fff",
                borderRadius: "8px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                py: "13px",
                boxShadow: "none",
                mt: "4px",
                "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
                "&:disabled": { bgcolor: "#F6891F", opacity: 0.6, color: "#fff" },
              }}
            >
              {submitting ? <CircularProgress size={20} sx={{ color: "#fff" }} /> : "Submit"}
            </Button>
          </Box>
        )}
    </DialogContent>
  );
}
