"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useConsultation } from "@/data/ConsultationContext";

const REACTIVE = {
  src: "/Reactive.webp",
  name: "Reactive Ink Series",
  desc: "Vivid, long-lasting reactive inks for cotton and natural fibre printing.",
};

const InkSolutions = () => {
  const { openModal } = useConsultation();
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Product image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            width: { xs: "auto", sm: "65vw", md: "55vw" },
            height: { xs: "181px", sm: "240px", md: "22vw" },
            aspectRatio: { xs: "201 / 101", sm: "unset" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={REACTIVE.src}
            alt={REACTIVE.name}
            width={900}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "20px",
            }}
          />
        </Box>
      </Box>

      {/* Product name + description */}
      <Box
        sx={{
          textAlign: "center",
          px: { xs: "16px", sm: "10%", md: "20%" },
          mt: { xs: 2, md: 3 },
        }}
      >
        <Typography
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "26px",
            letterSpacing: 0,
          }}
        >
          {REACTIVE.name}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "19.2px",
            mt: "6px",
          }}
        >
          {REACTIVE.desc}
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "12px", md: 2 },
          mt: 3,
          justifyContent: "center",
          alignItems: "center",
          px: { xs: "16px", md: 0 },
        }}
      >
        {/* <Button
          variant="outlined"
          sx={{
            color: "#111",
            bgcolor: "#fff",
            borderColor: "#e0e0e0",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "20.8px",
            p: "16px",
            boxShadow: "none",
            width: { xs: "100%", md: "200px" },
            "&:hover": { bgcolor: "#f5f5f5", boxShadow: "none" },
          }}
        >
          Know More
        </Button> */}
        <Button
          variant="contained"
          endIcon={
            <ArrowForwardIcon
              sx={{ fontSize: { xs: "14px !important", md: "16px !important" } }}
            />
          }
          sx={{
            bgcolor: "#F6891F",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "13px" },
            fontWeight: 500,
            lineHeight: "20.8px",
            gap: { xs: "6px", md: "8px" },
            p: { xs: "10px 18px", md: "16px" },
            boxShadow: "none",
            whiteSpace: "nowrap",
            width: { xs: "auto", md: "200px" },
            "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
          }}
          onClick={() => openModal()}
        >
          Book a Consultation
        </Button>
      </Box>
    </Box>
  );
};

export default InkSolutions;
