import { Box, Typography } from "@mui/material";
import { type ContentBlock, renderBlock } from "@/components/legal/LegalBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms & Conditions | Orange O Tec",
  description:
    "Read the Orange O Tec terms and conditions governing the use of orangeotec.com, its content, product information and enquiries.",
  path: "/terms-and-conditions/",
  noindex: true,
});

const SECTIONS: { title: string; content: ContentBlock[] }[] = [
  {
    title: "1. Website Purpose",
    content: [
      {
        type: "para",
        text: "The information on this website is provided for general information about Orange O Tec, its products, technologies, applications, services and business activities.",
      },
      {
        type: "para",
        text: "Website content should not be considered a binding commercial offer unless specifically confirmed by Orange O Tec in writing.",
      },
    ],
  },
  {
    title: "2. Product Information",
    content: [
      {
        type: "para",
        text: "We make reasonable efforts to keep product information accurate and current. However:",
      },
      {
        type: "list",
        items: [
          "Product specifications, features, configurations, designs and availability may change.",
          "Images, illustrations, videos and graphics may be representative.",
          "Actual machine configuration and performance may vary depending on the selected configuration, application, substrate, ink, operating conditions and other relevant factors.",
          "Final technical and commercial specifications will be those stated in the applicable quotation, order confirmation or agreement.",
        ],
      },
    ],
  },
  {
    title: "3. No Automatic Purchase or Contract",
    content: [
      {
        type: "para",
        text: "Sending an enquiry, requesting a quotation, submitting a contact form or communicating through this website does not automatically create a purchase contract or commitment from Orange O Tec.",
      },
      {
        type: "para",
        text: "Any sale will be governed by the applicable quotation, purchase order acceptance, sales agreement or other mutually accepted commercial documentation.",
      },
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      {
        type: "para",
        text: "Unless otherwise stated, website content including:",
      },
      {
        type: "list",
        items: [
          "Text",
          "Product descriptions",
          "Photographs and videos",
          "Graphics",
          "Designs",
          "Brochures and literature",
          "Logos",
          "Brand names",
          "Technical information",
        ],
      },
      {
        type: "para",
        text: "is owned by, licensed to, or used with permission by Orange O Tec.",
      },
      {
        type: "para",
        text: "You may not reproduce, modify, distribute, publish or commercially use this content without prior written permission, except where permitted by applicable law.",
      },
    ],
  },
  {
    title: "5. Permitted Use",
    content: [
      {
        type: "para",
        text: "You agree to use the website only for lawful purposes.",
      },
      { type: "subheading", text: "You must not:" },
      {
        type: "list",
        items: [
          "Attempt unauthorized access to the website or its systems.",
          "Introduce viruses or malicious software.",
          "Interfere with website security or operation.",
          "Misuse website content or intellectual property.",
          "Use website information for unlawful, fraudulent or misleading purposes.",
        ],
      },
    ],
  },
  {
    title: "6. Third-Party Links",
    content: [
      {
        type: "para",
        text: "The website may contain links to third-party websites or services.",
      },
      {
        type: "para",
        text: "These links may be provided for convenience or reference. Orange O Tec does not control third-party websites and is not responsible for their availability, content, privacy practices or terms.",
      },
    ],
  },
  {
    title: "7. Website Availability",
    content: [
      {
        type: "para",
        text: "We may modify, suspend, restrict or discontinue any part of the website without prior notice.",
      },
      {
        type: "para",
        text: "We do not guarantee that the website will always be available, uninterrupted or free from technical errors.",
      },
    ],
  },
  {
    title: "8. Accuracy of Information",
    content: [
      {
        type: "para",
        text: "While reasonable care is taken in preparing website content, errors, omissions or outdated information may occasionally occur.",
      },
      {
        type: "para",
        text: "For decisions involving machine specifications, applications, pricing, installation, warranties, delivery or commercial commitments, customers should rely on the latest written documentation issued or approved by Orange O Tec.",
      },
    ],
  },
  {
    title: "9. Limitation of Liability",
    content: [
      {
        type: "para",
        text: "To the extent permitted by applicable law, Orange O Tec will not be liable for indirect, incidental or consequential losses arising solely from reliance on general information presented on this website or from the inability to access the website.",
      },
      {
        type: "para",
        text: "Nothing in these Terms & Conditions excludes liability that cannot legally be excluded or limited.",
      },
    ],
  },
  {
    title: "10. Enquiries and Information Submitted",
    content: [
      {
        type: "para",
        text: "When you submit information through an enquiry, contact or other website form, you are responsible for ensuring that the information you provide is accurate and that you are authorized to provide it.",
      },
      {
        type: "para",
        text: "Personal information submitted through the website should be handled in accordance with Orange O Tec's applicable Privacy Policy.",
      },
    ],
  },
  {
    title: "11. Downloads",
    content: [
      {
        type: "para",
        text: "Brochures, catalogues, technical information and other downloadable materials are provided for general reference.",
      },
      {
        type: "para",
        text: "Orange O Tec may update these materials periodically, and users should verify important technical or commercial information before relying on a downloaded document.",
      },
    ],
  },
  {
    title: "12. Commercial Terms",
    content: [
      {
        type: "para",
        text: "Prices, payment terms, taxes, delivery schedules, installation requirements, warranties, cancellation conditions and other commercial conditions are governed by the specific quotation, order confirmation or contract issued for the relevant transaction.",
      },
    ],
  },
  {
    title: "13. Changes to These Terms",
    content: [
      {
        type: "para",
        text: "Orange O Tec may revise these Terms & Conditions periodically.",
      },
      {
        type: "para",
        text: "Updated terms will become effective when published on this website, subject to applicable law.",
      },
    ],
  },
  {
    title: "14. Governing Law and Jurisdiction",
    content: [
      {
        type: "para",
        text: "These Terms & Conditions shall be governed by the applicable laws of India.",
      },
    ],
  },
  {
    title: "15. Contact",
    content: [
      {
        type: "para",
        text: "For questions regarding these Terms & Conditions, please contact:",
      },
      {
        type: "keyval",
        items: [
          { key: "Company", val: "Orange O Tec Pvt. Ltd." },
          { key: "Location", val: "Surat, Gujarat, India" },
          {
            key: "Website",
            val: "https://orangeotec.com",
            link: "https://orangeotec.com/",
          },
          {
            key: "Email",
            val: "info@orangeotec.com",
            link: "mailto:info@orangeotec.com",
          },
        ],
      },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Hero */}
      <Box
        sx={{
          minHeight: { xs: "220px", md: "260px", lg: "305px" },
          backgroundColor: "#111",
          display: "flex",
          alignItems: "center",
          px: { xs: "16px", sm: "40px", lg: "168px" },
          py: { xs: "48px", lg: "0" },
        }}
      >
        <Box sx={{ textAlign: { xs: "center", lg: "left" }, width: "100%" }}>
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
            Terms &amp; Conditions
          </Typography>
          <Typography
            sx={{
              color: "#999",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", lg: "13px" },
              fontWeight: 500,
              lineHeight: "20px",
              mt: "8px",
            }}
          >
            Last Updated: October 2026
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", lg: "14px" },
              fontWeight: 400,
              lineHeight: { xs: "19.2px", lg: "22.4px" },
              mt: "12px",
              maxWidth: { xs: "100%", lg: "600px" },
              mx: { xs: "auto", lg: 0 },
            }}
          >
            Welcome to orangeotec.com, the official website of Orange O Tec
            Pvt. Ltd. (&ldquo;Orange O Tec&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo; or &ldquo;our&rdquo;). By accessing, browsing or
            using this website, you agree to the following Terms &amp;
            Conditions. If you do not agree with these terms, please
            discontinue use of the website.
          </Typography>
        </Box>
      </Box>

      {/* Content */}
      <Box
        sx={{
          bgcolor: "#FFF",
          px: { xs: "16px", sm: "40px", lg: "168px" },
          pt: { xs: "40px", lg: "56px" },
          pb: { xs: "64px", lg: "80px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "32px", md: "40px" },
            maxWidth: "860px",
          }}
        >
          {SECTIONS.map((section, sectionIndex) => (
            <Box key={section.title}>
              <Box
                sx={{
                  height: "1px",
                  bgcolor: "#F0F0F0",
                  mb: { xs: "20px", md: "24px" },
                }}
              />
              <Typography
                component={sectionIndex === 0 ? "h2" : "p"}
                sx={{
                  color: "#111",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: 600,
                  lineHeight: "26px",
                  mb: "12px",
                  mt: 0,
                }}
              >
                {section.title}
              </Typography>
              {section.content.map((block, idx) => renderBlock(block, idx))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
