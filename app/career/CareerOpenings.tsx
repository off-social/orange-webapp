"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

const jobs = [
  {
    title: "Production Engineer",
    dept: "Textile Machinery",
    location: "Surat",
    exp: "2+ Years",
  },
  {
    title: "Sales Executive",
    dept: "Business Development",
    location: "Surat",
    exp: "1+ Years",
  },
  {
    title: "Service Technician",
    dept: "After-Sales Support",
    location: "Surat",
    exp: "2+ Years",
  },
  {
    title: "Software Developer",
    dept: "Technology",
    location: "Surat",
    exp: "1+ Years",
  },
  {
    title: "Account Manager",
    dept: "Finance",
    location: "Surat",
    exp: "3+ Years",
  },
  {
    title: "Marketing Executive",
    dept: "Marketing",
    location: "Surat",
    exp: "1+ Years",
  },
];

function JobCard({ job, mobile }: { job: (typeof jobs)[0]; mobile?: boolean }) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: mobile ? "16px" : "24px",
        borderRadius: mobile ? "20px" : "12px",
        border: "1px solid #E0E0E0",
        bgcolor: "#FFF",
        cursor: "pointer",
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0px 12px 32px rgba(0,0,0,0.10)",
          borderColor: "#BDBDBD",
        },
        ...(mobile ? { width: "100%" } : { alignSelf: "stretch" }),
      }}
    >
      {/* Title + Dept */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignSelf: "stretch",
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "26px",
          }}
        >
          {job.title}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
          }}
        >
          {job.dept}
        </Typography>
      </Box>

      {/* Divider */}
      <Box sx={{ width: "100%", height: "1px", bgcolor: "#E0E0E0" }} />

      {/* Location + Experience */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Image src="/locationIcon1.svg" alt="location" width={16} height={16} />
        <Typography
          sx={{
            color: mobile ? "#333" : "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: mobile ? "14px" : "13px",
            fontWeight: 500,
            lineHeight: mobile ? "22.4px" : "20px",
          }}
        >
          {job.location}
        </Typography>
        <Box
          sx={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            bgcolor: "#BDBDBD",
            mx: "2px",
          }}
        />
        <Image src="/TimeIcon.svg" alt="experience" width={16} height={16} />
        <Typography
          sx={{
            color: mobile ? "#333" : "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: mobile ? "14px" : "13px",
            fontWeight: 500,
            lineHeight: mobile ? "22.4px" : "20px",
          }}
        >
          {job.exp}
        </Typography>
      </Box>

      {/* Apply Now */}
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon sx={{ fontSize: "14px !important" }} />}
        sx={{
          display: "flex",
          padding: "8px 12px",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          borderRadius: "8px",
          bgcolor: "#111",
          color: "#FFF",
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: "19.2px",
          textTransform: "none",
          boxShadow: "none",
          minWidth: "unset",
          "&:hover": { bgcolor: "#222", boxShadow: "none" },
        }}
      >
        Apply Now
      </Button>
    </Box>
  );
}

export default function CareerOpenings() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: (typeof jobs)[] = [];
  for (let i = 0; i < jobs.length; i += 2) {
    slides.push(jobs.slice(i, i + 2));
  }

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = 340 + 12;
    const index = Math.min(
      Math.round(el.scrollLeft / slideWidth),
      slides.length - 1,
    );
    setActiveIndex(index);
  };

  return (
    <Box
      id="current-openings"
      sx={{
        display: "flex",
        padding: {
          xs: "64px 16px",
          sm: "64px 40px",
          md: "80px 80px",
          lg: "80px 168px",
          xl: "80px 263px",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "32px", md: "64px" },
        alignSelf: "stretch",
        bgcolor: "#FFF",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 400,
            lineHeight: "25.6px",
            letterSpacing: "10px",
            textTransform: "uppercase",
          }}
        >
          Job Openings
        </Typography>

        <Typography
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: { xs: 0, md: "-1px" },
          }}
        >
          Current Openings
        </Typography>

        <Typography
          sx={{
            color: { xs: "#333", md: "#707070" },
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 500,
            lineHeight: { xs: "19.2px", md: "22.4px" },
          }}
        >
          All roles based in India. Freshers encouraged to apply.
        </Typography>
      </Box>

      {/* Mobile: horizontal scroll + dots */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          gap: "24px",
          width: "100%",
        }}
      >
        <Box
          ref={scrollRef}
          onScroll={handleScroll}
          sx={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {slides.map((pair, si) => (
            <Box
              key={si}
              sx={{
                flexShrink: 0,
                width: "340px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                scrollSnapAlign: "start",
              }}
            >
              {pair.map((job, ji) => (
                <JobCard key={ji} job={job} mobile />
              ))}
            </Box>
          ))}
        </Box>

        {/* Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {slides.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: activeIndex === i ? "20px" : "8px",
                height: "8px",
                borderRadius: "4px",
                bgcolor: activeIndex === i ? "#111" : "#E0E0E0",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Desktop: grid */}
      <Box
        sx={{
          display: { xs: "none", sm: "grid" },
          gridTemplateColumns: { sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          gap: "24px",
          width: "100%",
        }}
      >
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </Box>
    </Box>
  );
}
