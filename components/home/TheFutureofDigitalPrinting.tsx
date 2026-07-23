"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 750, suffix: "+", text: "Machine Installed" },
  { value: 15000, suffix: "+", text: "Printheads Deployed" },
  { value: 15, suffix: "+", text: "Years of Experience" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let rafId: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [start, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  text,
  started,
}: {
  value: number;
  suffix: string;
  text: string;
  started: boolean;
}) {
  const count = useCountUp(value, 1800, started);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <p
        style={{
          color: "#F6891F",
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(36px, 7vw, 72px)",
          fontWeight: 500,
          lineHeight: "normal",
          letterSpacing: "-1px",
          margin: 0,
        }}
      >
        {count}
        {suffix}
      </p>
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
        {text}
      </p>
    </div>
  );
}

const TheFutureofDigitalPrinting = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Section 1 - Heading + Image */}
      <div className="col-span-12 text-center">
        {/* ── MOBILE: everything overlaid on image ── */}
        <div className="relative block md:hidden">
          <Image
            src="/digitalPrintingMobile.webp"
            alt="The Future of Digital Printing"
            width={800}
            height={1000}
            draggable={false}
            className="w-full h-auto block"
          />

          {/* Overlay content on top of mobile image */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-6 xs:pt-10 px-3">
            <h2 className="text-[22px] xs:text-[26px] sm:text-[32px] font-medium text-black leading-[120%] whitespace-nowrap">
              Building the Future of
            </h2>
            <h2 className="text-[22px] xs:text-[26px] sm:text-[32px] font-medium text-[#F6891F] leading-[120%]">
              Digital Printing
            </h2>

            <p className="text-[11px] xs:text-xs sm:text-sm font-light text-[#404040] leading-[160%] w-full xs:w-[90%] text-center mt-2 xs:mt-3">
              Orange O Tec engineers high-performance digital printing solutions built for precision, consistency, and scale, with a vision to lead global innovation through intelligent, sustainable, and future-ready technologies.
            </p>
          </div>
        </div>

        {/* ── DESKTOP: updated layout ── */}
        <div className="hidden md:block" style={{ paddingTop: "80px" }}>
          {/* Heading — single line, two colors */}
          <h2
            style={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: "52px",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Building the Future of{" "}
            <span style={{ color: "#F6891F" }}>Digital Printing</span>
          </h2>

          {/* Description — 8px gap from heading */}
          <p
            style={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              maxWidth: "728px",
              margin: "8px auto 0",
            }}
          >
            Orange O Tec engineers high-performance digital printing solutions built for precision, consistency, and scale, with a vision to lead global innovation through intelligent, sustainable, and future-ready technologies.
          </p>

          {/* Image — sits flush under the description (Figma gap = 0), Figma banner ratio 1440x463 */}
          <div style={{ marginTop: "0px" }}>
            <Image
              src="/buildingFutureBanner.webp"
              alt="The Future of Digital Printing"
              width={1440}
              height={463}
              draggable={false}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>

      {/* Section 2 - Presence + Stats + Map */}
      <div className="w-full bg-white flex flex-col md:flex-row items-stretch gap-8 md:gap-10 xl:gap-16 px-4 md:px-[40px] xl:px-[168px] py-12 md:py-[60px] xl:py-[80px]">
        {/* Left: label + heading + stats */}
        <div className="flex flex-col items-center md:items-start gap-8 md:gap-10 flex-shrink-0 w-full md:w-auto">
          {/* Title group — 8px gap */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p
              className="text-center md:text-left"
              style={{
                color: "#707070",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "19.2px",
                letterSpacing: "10px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              PRESENCE
            </p>
            <h2
              className="text-center md:text-left"
              style={{
                color: "#333",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(22px, 4vw, 40px)",
                fontWeight: 500,
                lineHeight: "1.3",
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Pan-India Service &amp;
              <br />
              Installation Network
            </h2>
          </div>

          {/* Stats */}
          <div
            ref={ref}
            className="flex flex-col gap-6 text-center md:text-left"
          >
            {stats.map((item) => (
              <StatItem
                key={item.text}
                value={item.value}
                suffix={item.suffix}
                text={item.text}
                started={started}
              />
            ))}
          </div>
        </div>

        {/* Right: world map */}
        <div className="flex-1 w-full flex items-end justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/world-map1.webp"
            alt="World Presence Map"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </>
  );
};

export default TheFutureofDigitalPrinting;
