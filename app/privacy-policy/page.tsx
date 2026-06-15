import { Box, Typography } from "@mui/material";
import Link from "next/link";

const SECTIONS = [
  {
    title: "Who We Are",
    content: [
      {
        type: "para",
        text: "Orange O Tec Pvt. Ltd. is a digital textile Printer provider based in Surat, Gujarat, offering advanced digital and auxiliary Printers, customization, and after-sales support to enterprise clients in India and beyond.",
      },
      {
        type: "keyval",
        items: [
          { key: "Legal entity", val: "Orange O Tec Pvt. Ltd." },
          { key: "Registered location", val: "Surat, Gujarat, India" },
          {
            key: "Website",
            val: "https://orangeotec.com",
            link: "https://orangeotec.com",
          },
          {
            key: "Contact",
            val: "privacy@orangeotec.com",
            link: "mailto:privacy@orangeotec.com",
          },
        ],
      },
    ],
  },
  {
    title: "Scope",
    content: [
      {
        type: "para",
        text: "This Policy applies to information collected through our website and related online touchpoints (e.g., contact forms, quote/demo requests, newsletter subscriptions), customer support interactions, and business communications related to our products and services, including news and media engagements.",
      },
    ],
  },
  {
    title: "Information We Collect",
    content: [
      {
        type: "list",
        items: [
          "Information submitted via forms: name, business email, phone, company name, job title, region, and the content of inquiries (e.g., product interest, customization requirements, support requests).",
          "Business communication data: emails, meeting notes, purchase intent, and service preferences related to machinery and after-sales support.",
          "Website usage data: IP address, device and browser data, pages viewed, referral URLs, time on site, and interactions (via cookies, logs, or analytics tools).",
          "Marketing preferences: newsletter opt-ins, event/webinar sign-ups, and communication preferences for news and media updates.",
          "Testimonials: name, company, role, and statements provided with consent for publication on our site or media.",
        ],
      },
    ],
  },
  {
    title: "How We Use Information",
    content: [
      {
        type: "para",
        text: "We use personal information for the following purposes:",
      },
      {
        type: "list",
        items: [
          "Responding to inquiries, demo/quote requests, and providing after-sales support and service coordination.",
          "Customer onboarding, order processing, warranty, maintenance scheduling, and field support logistics for machinery.",
          "Improving our website, products, and support based on usage analytics and feedback.",
          "Sending service, product, and industry updates, including news and media communications, in accordance with preferences and applicable law.",
          "Publishing testimonials and case studies with prior consent.",
          "Security, fraud prevention, and compliance with legal obligations.",
        ],
      },
    ],
  },
  {
    title: "Lawful Bases (Where Applicable)",
    content: [
      {
        type: "para",
        text: "Depending on jurisdiction, processing is based on:",
      },
      {
        type: "list",
        items: [
          "Contract necessity: to provide requested information, quotes, sales, and after-sales support.",
          "Legitimate interests: to operate and improve the website and services, communicate with enterprise prospects, and ensure security; balanced against data subject rights.",
          "Consent: for marketing emails, cookies beyond strictly necessary, publishing testimonials, and optional data collection.",
          "Legal obligations: tax, accounting, compliance, and regulatory requirements.",
        ],
      },
    ],
  },
  {
    title: "Cookies and Analytics",
    content: [
      {
        type: "para",
        text: "We may use cookies and similar technologies to:",
      },
      {
        type: "list",
        items: [
          "Enable core site functionality and security.",
          "Understand site usage, performance, and improve user experience via analytics tools.",
          "Support marketing measurement for our product and news/media sections where lawful.",
        ],
      },
      {
        type: "subheading",
        text: "Controls:",
      },
      {
        type: "list",
        items: [
          "Browser controls to manage cookies; consent banners may be presented where required.",
          "Analytics may be configured with IP masking or data minimization in certain regions, where applicable.",
        ],
      },
    ],
  },
  {
    title: "Marketing Communications",
    content: [
      {
        type: "list",
        items: [
          "Individuals may opt in to receive updates about products, sustainability initiatives, events, and media announcements and can unsubscribe at any time via the link in emails or by contacting us.",
          "We do not sell personal information; communications focus on B2B information relevant to our machinery and services.",
        ],
      },
    ],
  },
  {
    title: "Testimonials and Case Studies",
    content: [
      {
        type: "list",
        items: [
          "Testimonials appearing on the website are published with contributor consent and may include names, company, and role; individuals may request edits or withdrawal where feasible.",
        ],
      },
    ],
  },
  {
    title: "Sharing and Disclosures",
    content: [
      {
        type: "para",
        text: "We may share personal information with:",
      },
      {
        type: "list",
        items: [
          "Service providers: hosting, CRM, customer support tools, analytics, email delivery, and logistics partners under contractual confidentiality and security obligations.",
          "Business partners: distributors or field service providers to fulfil support and installation services, where necessary and appropriate.",
          "Legal and compliance: when required by law, to protect rights, safety, or in response to lawful requests.",
          "Corporate transactions: in the event of a merger, acquisition, or asset transfer, subject to safeguards and notices as required by law.",
        ],
      },
      {
        type: "para",
        text: "We do not sell personal information.",
      },
    ],
  },
  {
    title: "International Transfers",
    content: [
      {
        type: "para",
        text: "Where data is transferred outside India to service providers or partners, we implement safeguards consistent with applicable laws (e.g., contractual protections, data minimization, and technical measures) to protect personal information.",
      },
    ],
  },
  {
    title: "Data Security",
    content: [
      {
        type: "para",
        text: "We implement organizational and technical measures appropriate to the nature of data processed, including access controls, encryption in transit where feasible, least-privilege access, vendor risk management, and staff confidentiality commitments, with continuous improvement aligned to industry practices for enterprise B2B operations.",
      },
    ],
  },
  {
    title: "Data Retention",
    content: [
      {
        type: "para",
        text: "We retain personal information:",
      },
      {
        type: "list",
        items: [
          "For as long as necessary to fulfill the purposes described above, including client service, warranty, and support lifecycles for machinery.",
          "As required by legal, tax, and regulatory obligations.",
          "For marketing data, until consent is withdrawn or the data is no longer needed for the stated purpose, whichever occurs first.",
        ],
      },
    ],
  },
  {
    title: "Your Rights",
    content: [
      {
        type: "para",
        text: "Depending on applicable law, individuals may have the right to:",
      },
      {
        type: "list",
        items: [
          "Access, correct, or delete personal information.",
          "Object to or restrict certain processing, including direct marketing.",
          "Withdraw consent where processing is based on consent, without affecting prior lawful processing.",
        ],
      },
      {
        type: "para",
        text: "Requests can be made using the contact details below. Reasonable verification may be required before fulfilling requests.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      {
        type: "para",
        text: "Our website and services are intended for business audiences and are not directed to children. We do not knowingly collect personal information from children.",
      },
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      {
        type: "para",
        text: "Our website may contain links to third-party sites or services. This Policy does not apply to external sites, and we are not responsible for their privacy practices. Review their privacy notices separately.",
      },
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      {
        type: "para",
        text: 'We may update this Policy from time to time to reflect changes in technology, law, or our practices. The "Last updated" date will be revised accordingly, and material changes will be communicated as required by law.',
      },
    ],
  },
  {
    title: "Contact Us",
    content: [
      {
        type: "para",
        text: "For questions, requests, or queries regarding this Policy or personal information, contact:",
      },
      {
        type: "keyval",
        items: [
          {
            key: "Company",
            val: "Orange O Tec Pvt. Ltd.",
            link: "https://orangeotec.com/",
          },
          { key: "Location", val: "Surat, Gujarat, India" },
          { key: "Email", val: "privacy@orangeotec.com" },
        ],
      },
    ],
  },
];

type ContentBlock =
  | { type: "para"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string }
  | { type: "keyval"; items: { key: string; val: string; link?: string }[] };

function renderBlock(block: ContentBlock, idx: number) {
  if (block.type === "para") {
    return (
      <Typography
        key={idx}
        sx={{
          color: "#555",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "13px", sm: "14px" },
          fontWeight: 400,
          lineHeight: "22.4px",
          mt: idx === 0 ? 0 : "12px",
        }}
      >
        {block.text}
      </Typography>
    );
  }

  if (block.type === "subheading") {
    return (
      <Typography
        key={idx}
        sx={{
          color: "#333",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "13px", sm: "14px" },
          fontWeight: 600,
          lineHeight: "22.4px",
          mt: "14px",
        }}
      >
        {block.text}
      </Typography>
    );
  }

  if (block.type === "list") {
    return (
      <Box
        key={idx}
        sx={{
          mt: idx === 0 ? 0 : "12px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {block.items.map((item, i) => (
          <Box
            key={i}
            sx={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
          >
            <Box
              sx={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                bgcolor: "#F6891F",
                flexShrink: 0,
                mt: "8px",
              }}
            />
            <Typography
              sx={{
                color: "#555",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "13px", sm: "14px" },
                fontWeight: 400,
                lineHeight: "22.4px",
                flex: 1,
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  }

  if (block.type === "keyval") {
    return (
      <Box
        key={idx}
        sx={{
          mt: idx === 0 ? 0 : "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {block.items.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              alignItems: "baseline",
            }}
          >
            <Typography
              sx={{
                color: "#333",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", sm: "13px" },
                fontWeight: 600,
                lineHeight: "20px",
                whiteSpace: "nowrap",
              }}
            >
              {item.key}:
            </Typography>
            {item.link ? (
              <Link
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                style={{
                  color: "#F6891F",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  textDecoration: "none",
                }}
              >
                {item.val}
              </Link>
            ) : (
              <Typography
                sx={{
                  color: "#555",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "12px", sm: "13px" },
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                {item.val}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    );
  }

  return null;
}

export default function PrivacyPolicyPage() {
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
            sx={{
              color: "#F6891F",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "32px", md: "36px", lg: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "41.6px", lg: "52px" },
              letterSpacing: "-1px",
            }}
          >
            Privacy Policy
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
            This Privacy Policy describes how Orange O Tec Pvt. Ltd. collects,
            uses, discloses, and protects personal information when individuals
            interact with our website and services, including inquiries about
            our digital and auxiliary textile printing machinery, after-sales
            support, and news and media updates.
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
          {SECTIONS.map((section) => (
            <Box key={section.title}>
              <Box
                sx={{
                  height: "1px",
                  bgcolor: "#F0F0F0",
                  mb: { xs: "20px", md: "24px" },
                }}
              />
              <Typography
                sx={{
                  color: "#111",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: 600,
                  lineHeight: "26px",
                  mb: "12px",
                }}
              >
                {section.title}
              </Typography>
              {section.content.map((block, idx) =>
                renderBlock(block as ContentBlock, idx),
              )}
            </Box>
          ))}

          {/* Note box */}
          <Box
            sx={{
              bgcolor: "#FFF8F2",
              border: "1px solid #F6891F33",
              borderLeft: "3px solid #F6891F",
              borderRadius: "6px",
              px: { xs: "16px", md: "20px" },
              py: { xs: "14px", md: "16px" },
              mt: "8px",
            }}
          >
            <Typography
              sx={{
                color: "#333",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", sm: "13px" },
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              <Box component="span" sx={{ color: "#F6891F", fontWeight: 600 }}>
                Note:{" "}
              </Box>
              This Policy is designed for a B2B machinery website with product,
              support, news/media, testimonials, and sustainability positioning.
              It should be reviewed by counsel to align with applicable Indian
              law (e.g., DPDP Act) and any cross-border data obligations based
              on actual tools used before{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Digital_textile_printing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#F6891F",
                  textDecoration: "underline",
                  fontSize: "13px",
                }}
              >
                publication
              </Link>
              .
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
