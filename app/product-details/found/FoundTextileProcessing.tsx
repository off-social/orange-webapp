"use client";

import ContactCTA from "@/components/product-details/ContactCTA";
import SectionTabs from "@/components/product-details/SectionTabs";
import { useConsultation } from "@/data/ConsultationContext";
import type { Product } from "@/data/product.types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import EngineeringFeaturesSection from "./sections/EngineeringFeaturesSection";
import GlobalComponentsSection from "./sections/GlobalComponentsSection";
import IdealForSection from "./sections/IdealForSection";
import KeySpecificationSection from "./sections/KeySpecificationSection";
import ProcessCompatibilitySection from "./sections/ProcessCompatibilitySection";
import ProductionCapacitySection from "./sections/ProductionCapacitySection";

const TABS = [
  "Key Specification",
  "Process Compatibility",
  "Engineering Features",
  "Ideal for",
  "Production Capacity",
  "Global Components",
];

const MACHINE_NAME = "MG Series Deoiling Washing Machine";
const MACHINE_MODEL = "(MAGIC WASHER K)";
const TAGLINE =
  "Low-Tension Open-Width Deoiling and Pre-Shrinking Washing Machine";

/** Catalog name — must match the key in CUSTOM_PRODUCT_PAGES and the
 *  ConsultationModal dropdown so the enquiry lands on the right machine. */
const PRODUCT_NAME = "FOUND Textile Processing Range";

/**
 * The shared ContactCTA reads from ProductContext, but FOUND has no entry in
 * the product registry. Only these fields are consumed, so we pass a minimal
 * object rather than authoring a full printer-shaped JSON file.
 */
const CONTACT_CTA: Pick<Product, "name" | "contactCTA"> = {
  name: PRODUCT_NAME,
  contactCTA: {
    headingTop: "Ready to upgrade your",
    headingBottom: "fabric processing line?",
    description:
      "Talk to our team about pretreatment, washing and finishing machinery matched to your fabric type and daily output.",
    phone: "+91 90999 06555",
  },
};

export default function FoundTextileProcessing() {
  const { openModal } = useConsultation();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          display: "flex",
          padding: { xs: "64px 16px 0 16px", md: "100px 168px 0 168px" },
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "40px", md: "64px" },
          alignSelf: "stretch",
          background: "#FFF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            alignSelf: "stretch",
          }}
        >
          {/* Name + model + tagline. Gaps are uneven (8px then 16px), so the
              first two are nested in their own tighter column. */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              alignSelf: "stretch",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              {/* heading 1 */}
              <Typography
                component="h1"
                sx={{
                  color: "#333",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "24px", md: "40px" },
                  fontWeight: 500,
                  lineHeight: { xs: "31.2px", md: "52px" },
                  letterSpacing: "-1px",
                  m: 0,
                }}
              >
                {MACHINE_NAME}
              </Typography>

              {/* heading 3 */}
              <Typography
                sx={{
                  color: "#707070",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "18px", md: "24px" },
                  fontWeight: 500,
                  lineHeight: { xs: "23.4px", md: "31.2px" },
                  letterSpacing: 0,
                }}
              >
                {MACHINE_MODEL}
              </Typography>
            </Box>

            {/* heading 4 */}
            <Typography
              sx={{
                color: "#707070",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "14px", md: "18px" },
                fontWeight: 500,
                lineHeight: { xs: "22.4px", md: "23.4px" },
                letterSpacing: 0,
              }}
            >
              {TAGLINE}
            </Typography>
          </Box>

          <Button
            variant="contained"
            endIcon={
              <ArrowForwardIcon sx={{ fontSize: { xs: "15px", sm: "18px" } }} />
            }
            onClick={() => openModal(PRODUCT_NAME)}
            sx={{
              color: "#fff",
              bgcolor: "#111",
              borderRadius: "12px",
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 500,
              whiteSpace: "nowrap",
              px: { xs: "16px", sm: "20px" },
              py: { xs: "11px", sm: "13px" },
              boxShadow: "none",
              width: { xs: "100%", sm: "200px" },
              "&:hover": { bgcolor: "#333", boxShadow: "none" },
            }}
          >
            Book a Consultation
          </Button>
        </Box>
      </Box>

      {/* Machine image. It sits outside the hero block, so it carries the same
          side padding itself to line its edges up with the copy above. The gap
          below the button lives here too, as the top padding. */}
      <Box
        sx={{
          padding: { xs: "40px 16px 0 16px", md: "40px 168px 0 168px" },
          background: "#FFF",
        }}
      >
        {/* The padding needs its own box: a `fill` image resolves against the
            padding box of its positioned ancestor, so padding on this element
            would not inset it. */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "611 / 213",
          }}
        >
          <Image
            src="/MgSeries.png"
            alt={`${MACHINE_NAME} ${MACHINE_MODEL}`}
            fill
            sizes="(min-width: 900px) calc(100vw - 336px), calc(100vw - 32px)"
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
      </Box>

      {/* Tab bar */}
      <SectionTabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      {/* Tab content — one file per panel under ./sections. */}
      {activeTab === 0 && <KeySpecificationSection />}
      {activeTab === 1 && <ProcessCompatibilitySection />}
      {activeTab === 2 && <EngineeringFeaturesSection />}
      {activeTab === 3 && <IdealForSection />}
      {activeTab === 4 && <ProductionCapacitySection />}
      {activeTab === 5 && <GlobalComponentsSection />}

      <ContactCTA product={CONTACT_CTA} />
    </>
  );
}
