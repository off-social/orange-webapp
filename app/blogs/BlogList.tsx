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
    img: "/BlogImg1.png",
    slug: "how-to-choose-digital-fabric-printer",
  },
  {
    date: "05 Jun 2026",
    title:
      "The Future of Sustainable Textile Printing: Eco-Friendly Inks & Processes",
    desc: "As environmental concerns take center stage, the textile printing industry is rapidly adopting sustainable practices. From water-based inks to closed-loop water recycling systems, manufacturers are finding innovative ways to reduce their carbon footprint without compromising on print quality or production speed.",
    img: "/BlogImg2.png",
    slug: "sustainable-textile-printing",
  },
  {
    date: "28 May 2026",
    title:
      "Understanding DTG vs. Screen Printing: Which Is Right for Your Business?",
    desc: "Direct-to-garment (DTG) printing and traditional screen printing each offer distinct advantages depending on order volume, design complexity, and fabric type. This guide breaks down the cost-per-unit economics, setup times, and quality benchmarks to help you make the right investment decision for your production workflow.",
    img: "/BlogImg3.png",
    slug: "dtg-vs-screen-printing",
  },
  {
    date: "20 May 2026",
    title: "5 Signs It's Time to Upgrade Your Textile Printing Machine",
    desc: "Are your production timelines slipping? Is maintenance eating into your margins? Outdated textile printing equipment shows clear warning signs before it fails completely. From increasing downtime and rising ink consumption to inconsistent color output, learn the five key indicators that signal it's time to invest in a modern printing solution.",
    img: "/BlogImg4.png",
    slug: "signs-to-upgrade-textile-printing-machine",
  },
  {
    date: "15 May 2026",
    title:
      "How Reactive Dye Printing Is Transforming High-Volume Saree Production",
    desc: "Reactive dye printing delivers unmatched vibrancy and wash-fastness on natural fibers like cotton and silk — making it the preferred choice for premium saree manufacturers across India. Discover how leading mills are using modern reactive dye systems to scale from 500 to 5,000 meters per day while maintaining consistent color fidelity.",
    img: "/BlogImg5.png",
    slug: "reactive-dye-printing-saree-production",
  },
  {
    date: "08 May 2026",
    title:
      "Orange O Tec Machines Power India's Make in India Textile Initiative",
    desc: "With the government's push for domestic manufacturing, Indian textile machinery brands are stepping up. Orange O Tec's latest range of digital printing machines, designed and built entirely in India, is helping small and medium enterprises reduce import dependency while gaining access to world-class printing technology at competitive price points.",
    img: "/BlogImg6.png",
    slug: "orange-otec-make-in-india",
  },
  {
    date: "01 May 2026",
    title: "A Complete Guide to Fabric Pretreatment for DTG Printing",
    desc: "Pretreatment is the most critical and often overlooked step in the DTG printing process. Without proper pretreatment, even the best inks will fade or wash out prematurely. This comprehensive guide covers the chemistry behind pretreatment solutions, application methods, curing temperatures, and common mistakes to avoid for consistent print durability.",
    img: "/BlogImg7.png",
    slug: "fabric-pretreatment-dtg-printing",
  },
  {
    date: "24 Apr 2026",
    title:
      "Digital vs. Rotary Screen Printing: A Cost Analysis for Large Textile Mills",
    desc: "Large textile mills face a critical capital allocation decision when modernizing their printing lines. Digital printing offers lower setup costs and design flexibility, while rotary screen printing excels in per-meter costs at very high volumes. We analyze the breakeven points, hidden operational costs, and ROI timelines for both technologies.",
    img: "/BlogImg1.png",
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
        display: "flex",
        padding: {
          xs: "32px 16px",
          sm: "40px 40px",
          md: "40px 80px",
          lg: "40px 356px",
          xl: "40px 560px",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: "64px",
        alignSelf: "stretch",
        bgcolor: "#FFF",
      }}
    >
      {/* Blog items */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
          alignSelf: "stretch",
        }}
      >
        {blogs.map((blog, i) => (
          <Box key={start + i} sx={{ alignSelf: "stretch" }}>
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
                  gap: "24px",
                  cursor: "pointer",
                  "&:hover .blog-title": { color: "#F6891F" },
                }}
              >
                {/* Text */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: 1,
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
                      fontSize: { xs: "18px", md: "24px" },
                      fontWeight: 500,
                      lineHeight: { xs: "23.4px", md: "31.2px" },
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

                {/* Image */}
                <Box
                  sx={{
                    flexShrink: 0,
                    width: { xs: "120px", md: "220px" },
                    height: { xs: "82px", md: "150px" },
                    aspectRatio: { xs: "60/41", md: "auto" },
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
        <Box
          sx={{
            height: "1px",
            bgcolor: "#E0E0E0",
            alignSelf: "stretch",
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
  );
}
