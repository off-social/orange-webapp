"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const ALL_BLOGS = [
  {
    date: "10 Jun 2026",
    title:
      "How to Choose the Perfect Digital Fabric Printer: A 3-Step Checklist",
    desc: "Modern digital fabric printing has revolutionized the textile industry by eliminating the need for traditional plate making, plate printing, and repetitive color registration. Unlike conventional methods, digital printing requires only a single printer and a standard computer, allowing one operator to manage the entire printing process.",
    img: "/blogImg1.png",
    slug: "how-to-choose-digital-fabric-printer",
  },
  {
    date: "05 Jun 2026",
    title:
      "The Future of Sustainable Textile Printing: Eco-Friendly Inks & Processes",
    desc: "As environmental concerns take center stage, the textile printing industry is rapidly adopting sustainable practices. From water-based inks to closed-loop water recycling systems, manufacturers are finding innovative ways to reduce their carbon footprint without compromising on print quality or production speed.",
    img: "/blogImg1.png",
    slug: "sustainable-textile-printing",
  },
  {
    date: "28 May 2026",
    title:
      "Understanding DTG vs. Screen Printing: Which Is Right for Your Business?",
    desc: "Direct-to-garment (DTG) printing and traditional screen printing each offer distinct advantages depending on order volume, design complexity, and fabric type. This guide breaks down the cost-per-unit economics, setup times, and quality benchmarks to help you make the right investment decision for your production workflow.",
    img: "/blogImg1.png",
    slug: "dtg-vs-screen-printing",
  },
  {
    date: "20 May 2026",
    title: "5 Signs It's Time to Upgrade Your Textile Printing Machine",
    desc: "Are your production timelines slipping? Is maintenance eating into your margins? Outdated textile printing equipment shows clear warning signs before it fails completely. From increasing downtime and rising ink consumption to inconsistent color output, learn the five key indicators that signal it's time to invest in a modern printing solution.",
    img: "/blogImg1.png",
    slug: "signs-to-upgrade-textile-printing-machine",
  },
  {
    date: "15 May 2026",
    title:
      "How Reactive Dye Printing Is Transforming High-Volume Saree Production",
    desc: "Reactive dye printing delivers unmatched vibrancy and wash-fastness on natural fibers like cotton and silk — making it the preferred choice for premium saree manufacturers across India. Discover how leading mills are using modern reactive dye systems to scale from 500 to 5,000 meters per day while maintaining consistent color fidelity.",
    img: "/blogImg1.png",
    slug: "reactive-dye-printing-saree-production",
  },
  {
    date: "08 May 2026",
    title:
      "Orange O Tec Machines Power India's Make in India Textile Initiative",
    desc: "With the government's push for domestic manufacturing, Indian textile machinery brands are stepping up. Orange O Tec's latest range of digital printing machines, designed and built entirely in India, is helping small and medium enterprises reduce import dependency while gaining access to world-class printing technology at competitive price points.",
    img: "/blogImg1.png",
    slug: "orange-otec-make-in-india",
  },
  {
    date: "01 May 2026",
    title: "A Complete Guide to Fabric Pretreatment for DTG Printing",
    desc: "Pretreatment is the most critical and often overlooked step in the DTG printing process. Without proper pretreatment, even the best inks will fade or wash out prematurely. This comprehensive guide covers the chemistry behind pretreatment solutions, application methods, curing temperatures, and common mistakes to avoid for consistent print durability.",
    img: "/blogImg1.png",
    slug: "fabric-pretreatment-dtg-printing",
  },
  {
    date: "24 Apr 2026",
    title:
      "Digital vs. Rotary Screen Printing: A Cost Analysis for Large Textile Mills",
    desc: "Large textile mills face a critical capital allocation decision when modernizing their printing lines. Digital printing offers lower setup costs and design flexibility, while rotary screen printing excels in per-meter costs at very high volumes. We analyze the breakeven points, hidden operational costs, and ROI timelines for both technologies.",
    img: "/blogImg1.png",
    slug: "digital-vs-rotary-screen-cost-analysis",
  },
];

const ITEMS_PER_PAGE = 7;
const TOTAL_PAGES = Math.ceil(ALL_BLOGS.length / ITEMS_PER_PAGE);

export default function BlogList() {
  const [page, setPage] = useState(1);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const blogs = ALL_BLOGS.slice(start, start + ITEMS_PER_PAGE);

  const changePage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = (): (number | "...")[] => {
    if (TOTAL_PAGES <= 7) {
      return Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
    }
    const pages: (number | "...")[] = [1, 2, 3];
    if (page > 5) pages.push("...");
    if (page > 3 && page < TOTAL_PAGES - 2) pages.push(page);
    if (page < TOTAL_PAGES - 4) pages.push("...");
    pages.push(TOTAL_PAGES - 2, TOTAL_PAGES - 1, TOTAL_PAGES);
    return pages;
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden", // ← fix for right-side overflow visible in screenshot
        bgcolor: "#FFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: {
            xs: "64px 16px",
            sm: "64px 40px",
            md: "64px 80px",
            lg: "64px 356px",
          },
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          alignSelf: "stretch",
        }}
      >
        {/* Blog items */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
            width: "100%",
          }}
        >
          {blogs.map((blog, i) => (
            <Box key={start + i} sx={{ width: "100%" }}>
              {i > 0 && (
                <Box sx={{ height: "1px", bgcolor: "#E0E0E0", my: "32px" }} />
              )}
              <Link
                href={`/blogs/${blog.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: { xs: "16px", md: "24px", lg: "32px" },
                    cursor: "pointer",
                    width: "100%",
                    minWidth: 0, // ← prevent flex child from overflowing
                    "&:hover .blog-title": { color: "#F6891F" },
                  }}
                >
                  {/* Text — takes remaining space, never overflow */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      flex: 1,
                      minWidth: 0, // ← critical: allows text truncation inside flex
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#707070",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "10px",
                        fontWeight: 500,
                        lineHeight: "16px",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {blog.date}
                    </Typography>
                    <Typography
                      className="blog-title"
                      sx={{
                        color: "#333",
                        fontFamily: "Inter, sans-serif",
                        fontSize: { xs: "18px", md: "20px", lg: "24px" },
                        fontWeight: 500,
                        lineHeight: { xs: "23.4px", md: "28px", lg: "31.2px" },
                        letterSpacing: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        transition: "color 0.2s ease",
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#707070",
                        fontFamily: "Inter, sans-serif",
                        fontSize: { xs: "12px", md: "14px" },
                        fontWeight: 500,
                        lineHeight: { xs: "19.2px", md: "22.4px" },
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                      }}
                    >
                      {blog.desc}
                    </Typography>
                  </Box>

                  {/* Image — fixed size, never shrinks text */}
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: {
                        xs: "120px",
                        sm: "160px",
                        md: "200px", // 768 tablet
                        lg: "220px", // 1024
                        xl: "240px", // 1440 / 2560
                      },
                      height: {
                        xs: "82px",
                        sm: "110px",
                        md: "136px",
                        lg: "150px",
                        xl: "163px",
                      },
                      borderRadius: "4px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}

          {/* Bottom divider */}
          <Box
            sx={{
              height: "1px",
              bgcolor: "#E0E0E0",
              width: "100%",
              mt: "32px",
            }}
          />
        </Box>

        {/* Pagination */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Box
            onClick={() => page > 1 && changePage(page - 1)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              px: "12px",
              py: "8px",
              cursor: page === 1 ? "default" : "pointer",
              opacity: page === 1 ? 0.4 : 1,
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "14px", color: "#333" }} />
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#333",
              }}
            >
              Previous
            </Typography>
          </Box>

          {getPageNumbers().map((p, i) => (
            <Box
              key={i}
              onClick={() => typeof p === "number" && changePage(p)}
              sx={{
                width: "36px",
                height: "36px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                bgcolor: page === p ? "#F6891F" : "transparent",
                cursor: typeof p === "number" ? "pointer" : "default",
                "&:hover":
                  typeof p === "number" && page !== p
                    ? { bgcolor: "#F2F2F2" }
                    : {},
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: page === p ? 600 : 400,
                  color: page === p ? "#FFF" : "#333",
                }}
              >
                {p}
              </Typography>
            </Box>
          ))}

          <Box
            onClick={() => page < TOTAL_PAGES && changePage(page + 1)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              px: "12px",
              py: "8px",
              cursor: page === TOTAL_PAGES ? "default" : "pointer",
              opacity: page === TOTAL_PAGES ? 0.4 : 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#333",
              }}
            >
              Next
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: "14px", color: "#333" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
