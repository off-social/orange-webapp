"use client";

import HeroCarousel, { type HeroSlide } from "@/components/hero/HeroCarousel";
import SlideAdvanced from "@/components/hero/SlideAdvanced";
import SlideFabpro2i from "@/components/hero/SlideFabpro2i";
import SlideRocket from "@/components/hero/SlideRocket";
import { useConsultation } from "@/data/ConsultationContext";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

/**
 * Home page hero: a poster carousel at the shared hero size, cycling the
 * Advanced Textile Fabric Printer, Rocket and FabPro 2i slides. The site's two
 * primary calls to action sit under the first slide's specification line.
 */
export default function HomeHero() {
  const { openModal } = useConsultation();

  const actions = (
    <Box
      // The extra top margin sets these apart from the specification line above;
      // at the paragraph's own spacing they read as part of it.
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        alignItems: "stretch",
        mt: { xs: "14px", lg: "20px" },
      }}
    >
      <Button
        variant="outlined"
        onClick={() => openModal()}
        sx={{
          color: "#111",
          bgcolor: "#FFF",
          borderColor: "#E0E0E0",
          borderRadius: "8px",
          textTransform: "none",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "12px", sm: "13px" },
          fontWeight: 500,
          lineHeight: "20.8px",
          // Wider than tall, and sized by its label rather than pinned to a
          // fixed width that the text then fills edge to edge.
          p: { xs: "11px 16px", md: "13px 24px" },
          boxShadow: "none",
          whiteSpace: "nowrap",
          flex: { xs: "1 0 0", sm: "0 0 auto" },
          "&:hover": {
            bgcolor: "#F2F2F2",
            borderColor: "#E0E0E0",
            boxShadow: "none",
          },
        }}
      >
        Book a Consultation
      </Button>
      <Button
        component={Link}
        href="/products"
        variant="contained"
        endIcon={
          <Image
            src="/Arrow - Right.svg"
            alt=""
            width={16}
            height={16}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
        }
        sx={{
          bgcolor: "#F6891F",
          color: "#fff",
          borderRadius: "8px",
          textTransform: "none",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "12px", sm: "13px" },
          fontWeight: 500,
          lineHeight: "20.8px",
          p: { xs: "11px 16px", md: "13px 24px" },
          gap: { xs: "6px", md: "8px" },
          boxShadow: "none",
          flex: { xs: "1 0 0", sm: "0 0 auto" },
          whiteSpace: "nowrap",
          "& .MuiButton-endIcon": { ml: 0 },
          "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
        }}
      >
        Explore Printers
      </Button>
    </Box>
  );

  const slides: HeroSlide[] = [
    {
      render: ({ isClone }) => (
        <SlideAdvanced
          actions={actions}
          headingComponent={isClone ? "p" : "h1"}
        />
      ),
    },
    { render: () => <SlideRocket /> },
    { render: () => <SlideFabpro2i /> },
  ];

  return <HeroCarousel slides={slides} />;
}
