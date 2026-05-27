"use client";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
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
    scrollRef.current.scrollBy({
      left: direction === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  const showButtons = videos.length >= 4;

  return (
    <div className="col-span-12 bg-[#D9D9D9] py-12 md:py-20">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-[40px] font-semibold leading-tight">
        Trusted by Industry Leaders
      </h2>

      <p className="text-center text-base text-[#404040] mt-2">
        Our printers are trusted by textile manufacturers across India
      </p>

      {/* Scroll Area */}
      <div className="mt-10 relative flex justify-center items-center">
        {/* LEFT BUTTON */}
        {showButtons && (
          <button
            onClick={() => scroll("left")}
            className="
              absolute left-1.5 md:left-5 top-1/2 -translate-y-1/2 z-10
              bg-white w-12 h-12 rounded-full
              flex items-center justify-center
              shadow-[0_8px_20px_rgba(0,0,0,0.15)]
              hover:bg-white transition-colors
            "
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
        )}

        {/* VIDEO CONTAINER */}
        <div
          ref={scrollRef}
          className="
            bg-[#F2F2F2] rounded-[18px] p-2
            flex gap-2
            w-fit max-w-[95vw]
            overflow-x-auto
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="
                min-w-[320px] md:min-w-[420px]
                flex-shrink-0
                rounded-xl overflow-hidden
                aspect-video
                shadow-[0_4px_12px_rgba(0,0,0,0.08)]
              "
            >
              <iframe
                src={video}
                width="100%"
                height="100%"
                title={`video-${index}`}
                frameBorder="0"
                allowFullScreen
                style={{ border: 0 }}
              />
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        {showButtons && (
          <button
            onClick={() => scroll("right")}
            className="
              absolute right-1.5 md:right-5 top-1/2 -translate-y-1/2 z-10
              bg-white w-12 h-12 rounded-full
              flex items-center justify-center
              shadow-[0_8px_20px_rgba(0,0,0,0.15)]
              hover:bg-white transition-colors
            "
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollVideos;
