"use client";

import { useProduct } from "@/data/ProductContext";
import ShowcaseTable from "@/components/product-details/ShowcaseTable";
import type { QA, SeoBlock, SeoList } from "@/data/product.types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Typography } from "@mui/material";
import { Fragment, useState } from "react";

const FONT = "Inter, sans-serif";

function Heading({ level, children }: { level: 2 | 3; children: string }) {
  return (
    <Typography
      component={level === 2 ? "h2" : "h3"}
      sx={{
        color: "#333",
        textAlign: "center",
        fontFamily: FONT,
        fontSize:
          level === 2 ? { xs: "24px", md: "40px" } : { xs: "20px", md: "28px" },
        fontWeight: 500,
        lineHeight:
          level === 2
            ? { xs: "31.2px", md: "52px" }
            : { xs: "26px", md: "36.4px" },
        letterSpacing: level === 2 ? { xs: "0", md: "-1px" } : "-0.5px",
        m: 0,
      }}
    >
      {children}
    </Typography>
  );
}

function Paragraph({ children }: { children: string }) {
  return (
    <Typography
      sx={{
        color: "#707070",
        textAlign: "center",
        fontFamily: FONT,
        fontSize: { xs: "14px", md: "16px" },
        fontWeight: { xs: 500, md: 400 },
        lineHeight: { xs: "22.4px", md: "25.6px" },
        maxWidth: "730px",
      }}
    >
      {children}
    </Typography>
  );
}

function QAList({ items }: { items: QA[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: `repeat(${items.length}, 1fr)` },
        gap: { xs: "12px", md: "24px" },
        width: "100%",
      }}
    >
      {items.map(({ q, a }) => (
        <Box
          key={q}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: { xs: "24px", md: "32px 24px" },
            borderRadius: "16px",
            background: "#111",
          }}
        >
          <Typography
            sx={{
              color: "#F6891F",
              fontFamily: FONT,
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "25.6px",
            }}
          >
            {q}
          </Typography>
          <Typography
            sx={{
              color: "#EFEFEF",
              fontFamily: FONT,
              fontSize: "14px",
              fontWeight: { xs: 500, md: 400 },
              lineHeight: "22.4px",
            }}
          >
            {a}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

/** Text before an item's first ": " renders bold, like the "points" block. */
function List({ list, ordered }: SeoList) {
  return (
    <Box
      component={ordered ? "ol" : "ul"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        maxWidth: "730px",
        m: "4px 0",
        p: 0,
        listStyle: "none",
        counterReset: "seo-list",
      }}
    >
      {list.map((item) => {
        const split = item.indexOf(": ");
        return (
          <Box
            component="li"
            key={item}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              textAlign: "left",
              counterIncrement: "seo-list",
            }}
          >
            <Box
              aria-hidden
              sx={{
                flexShrink: 0,
                mt: { xs: "1px", md: "2px" },
                ...(ordered
                  ? {
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      bgcolor: "#F6891F",
                      color: "#FFF",
                      fontFamily: FONT,
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "22px",
                      textAlign: "center",
                      "&::before": { content: "counter(seo-list)" },
                    }
                  : {
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      bgcolor: "#F6891F",
                      mt: { xs: "8px", md: "10px" },
                    }),
              }}
            />
            <Typography
              sx={{
                color: "#707070",
                fontFamily: FONT,
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: { xs: 500, md: 400 },
                lineHeight: { xs: "22.4px", md: "25.6px" },
              }}
            >
              {split > 0 ? (
                <>
                  <Box
                    component="strong"
                    sx={{ color: "#333", fontWeight: 600 }}
                  >
                    {item.slice(0, split + 1)}
                  </Box>{" "}
                  {item.slice(split + 2)}
                </>
              ) : (
                item
              )}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

function Block({
  block,
  level,
  name,
}: {
  block: SeoBlock;
  level: 2 | 3;
  name: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "24px", md: "32px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          width: "100%",
        }}
      >
        {block.heading && <Heading level={level}>{block.heading}</Heading>}
        {block.type === "text" &&
          block.paragraphs.map((p, i) =>
            typeof p === "string" ? (
              <Paragraph key={p}>{p}</Paragraph>
            ) : (
              <List key={i} {...p} />
            ),
          )}
        {block.type === "table" && block.intro && (
          <Paragraph>{block.intro}</Paragraph>
        )}
        {block.type === "points" && (
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: FONT,
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: { xs: 500, md: 400 },
              lineHeight: { xs: "22.4px", md: "25.6px" },
              maxWidth: "730px",
            }}
          >
            {block.items.map(({ title, desc }, i) => (
              <Fragment key={title}>
                {i > 0 && " "}
                <Box component="strong" sx={{ color: "#333", fontWeight: 600 }}>
                  {title}:
                </Box>{" "}
                {desc}
              </Fragment>
            ))}
          </Typography>
        )}
      </Box>

      {block.type === "table" && (
        // Heading and intro render above with the section's own styles
        <ShowcaseTable
          name={name}
          table={{ columns: block.columns, rows: block.rows, note: block.note }}
        />
      )}
      {block.type === "qa" && <QAList items={block.items} />}
    </Box>
  );
}

function FAQ({ heading, items }: { heading: string; items: QA[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "24px", md: "32px" },
        width: "100%",
      }}
    >
      <Heading level={2}>{heading}</Heading>

      <Box sx={{ width: "100%", maxWidth: "900px" }}>
        {items.map(({ q, a }, i) => {
          const isOpen = open === i;
          const id = `faq-${i}`;
          return (
            <Box
              key={q}
              sx={{
                borderTop: "1px solid #E0E0E0",
                "&:last-child": { borderBottom: "1px solid #E0E0E0" },
              }}
            >
              <Box
                component="button"
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  width: "100%",
                  padding: { xs: "20px 0", md: "24px 0" },
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    color: isOpen ? "#F6891F" : "#333",
                    fontFamily: FONT,
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 500,
                    lineHeight: { xs: "25.6px", md: "27px" },
                    m: 0,
                    transition: "color 0.2s ease",
                  }}
                >
                  {q}
                </Typography>
                <Box
                  sx={{
                    flexShrink: 0,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: isOpen ? "#F6891F" : "#F0F0F0",
                    color: isOpen ? "#FFF" : "#333",
                    transition: "background-color 0.2s ease, color 0.2s ease",
                  }}
                >
                  {isOpen ? (
                    <RemoveIcon sx={{ fontSize: "18px" }} />
                  ) : (
                    <AddIcon sx={{ fontSize: "18px" }} />
                  )}
                </Box>
              </Box>

              {/* Answer stays in the DOM when collapsed so crawlers still read it */}
              <Box
                id={id}
                sx={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition:
                    "grid-template-rows 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <Box sx={{ overflow: "hidden" }}>
                  <Typography
                    sx={{
                      color: "#707070",
                      fontFamily: FONT,
                      fontSize: { xs: "14px", md: "16px" },
                      fontWeight: { xs: 500, md: 400 },
                      lineHeight: { xs: "22.4px", md: "25.6px" },
                      pb: { xs: "20px", md: "24px" },
                      pr: { xs: 0, md: "48px" },
                    }}
                  >
                    {a}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default function ProductSeoContent() {
  const { name, seoContent } = useProduct();
  if (!seoContent) return null;

  const faqJsonLd = seoContent.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoContent.faq.items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <Box
      sx={{
        display: "flex",
        // 64px top matches the showcase's heading-to-table gap, so the rhythm holds
        padding: {
          xs: "64px 16px",
          md: "64px 40px 80px",
          lg: "64px 168px 80px",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "64px", md: "100px" },
        alignSelf: "stretch",
        background: "#FFF",
      }}
    >
      {seoContent.sections.map(({ subsections, ...section }, i) => (
        <Box
          key={section.heading ?? i}
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "48px", md: "64px" },
            width: "100%",
          }}
        >
          <Block block={section} level={2} name={name} />
          {subsections?.map((sub, j) => (
            <Block key={sub.heading ?? j} block={sub} level={3} name={name} />
          ))}
        </Box>
      ))}

      {seoContent.faq && (
        <Box component="section" sx={{ width: "100%" }}>
          <FAQ heading={seoContent.faq.heading} items={seoContent.faq.items} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
            }}
          />
        </Box>
      )}
    </Box>
  );
}
