"use client";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import { useRef } from "react";

const videos = [
  "https://www.youtube.com/embed/lNr9r16VmJ8",
  "https://www.youtube.com/embed/lNr9r16VmJ8",
  "https://www.youtube.com/embed/lNr9r16VmJ8",
  "https://www.youtube.com/embed/lNr9r16VmJ8",
];

const ScrollVideos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -440 : 440, behavior: "smooth" });
  };

  return (
    <div
      className="
        w-full flex flex-col items-center
        bg-[#EFEFEF]
        py-10 px-4
        sm:py-14 sm:px-10
        lg:py-20 lg:px-[168px]
        gap-8 sm:gap-10 lg:gap-16
      "
    >
      {/* Header */}
      <div className="flex flex-col w-full" style={{ gap: "8px" }}>

        {/* Title */}
        <h2
          style={{
            color: "#333",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            lineHeight: "130%",
            letterSpacing: "-1px",
            margin: 0,
          }}
          className="text-2xl sm:text-[32px] lg:text-[40px]"
        >
          Trusted by Industry Leaders
        </h2>

        {/* Subtitle + YouTube link */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <p
            style={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              margin: 0,
            }}
          >
            Our printers are trusted by textile manufacturers across India.
          </p>

          <a
            href="https://www.youtube.com/@OrangeOWorldwide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 whitespace-nowrap hover:opacity-70 transition-opacity flex-shrink-0"
            style={{
              color: "#333",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "20.8px",
            }}
          >
            <Image src="/youtube-filled.svg" alt="youtube" width={18} height={18} style={{ objectFit: "contain" }} />
            Visit Our YouTube Channel
            <Image src="/shareIcon.svg" alt="share" width={14} height={14} style={{ objectFit: "contain" }} />
          </a>
        </div>
      </div>

      {/* Video slider */}
      <div className="relative w-full">

        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="
            flex
            w-10 h-10 rounded-full bg-white border border-[#E0E0E0] shadow-md
            items-center justify-center hover:bg-gray-50 transition-colors
            absolute top-1/2 -translate-y-1/2 z-10
            -left-3 sm:-left-5 lg:-left-14
          "
          aria-label="Scroll left"
        >
          <ChevronLeft sx={{ fontSize: 20, color: "#555" }} />
        </button>

        {/* Video cards */}
        <div
          ref={scrollRef}
          className="
            flex gap-6
            overflow-x-auto
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            w-full
          "
        >
          {videos.map((src, index) => (
            <div
              key={index}
              className="
                min-w-[260px] sm:min-w-[300px] lg:min-w-[352px]
                flex-shrink-0 rounded-xl overflow-hidden aspect-video shadow-sm
              "
            >
              <iframe
                src={src}
                width="100%"
                height="100%"
                title={`video-${index}`}
                frameBorder="0"
                allowFullScreen
                style={{ border: 0, display: "block" }}
              />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="
            flex
            w-10 h-10 rounded-full bg-white border border-[#E0E0E0] shadow-md
            items-center justify-center hover:bg-gray-50 transition-colors
            absolute top-1/2 -translate-y-1/2 z-10
            -right-3 sm:-right-5 lg:-right-14
          "
          aria-label="Scroll right"
        >
          <ChevronRight sx={{ fontSize: 20, color: "#555" }} />
        </button>
      </div>
    </div>
  );
};

export default ScrollVideos;
