 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 750, suffix: "+", text: "Installed machines" },
  { value: 15, suffix: "+", text: "Countries served" },
  { value: 15, suffix: "+", text: "Years of experience" },
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
    <div className="mb-8 text-center md:text-left">
      <p className="text-[50px] md:text-[80px] font-normal text-[#F6891F] leading-none">
        {count}
        {suffix}
      </p>
      <p className="text-sm md:text-base text-black">{text}</p>
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
            src="/digitalPrintingMobile.png"
            alt="The Future of Digital Printing"
            width={800}
            height={1000}
            draggable={false}
            className="w-full h-auto block"
          />

          {/* Overlay content on top of mobile image */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-6 xs:pt-10 px-3">
            <h1 className="text-[22px] xs:text-[26px] sm:text-[32px] font-medium text-black leading-[120%] whitespace-nowrap">
              Building the Future of
            </h1>
            <h1 className="text-[22px] xs:text-[26px] sm:text-[32px] font-medium text-[#F6891F] leading-[120%]">
              Digital Printing
            </h1>

            <p className="text-[11px] xs:text-xs sm:text-sm font-light text-[#404040] leading-[160%] w-full xs:w-[90%] text-center mt-2 xs:mt-3">
              Orange O Tec engineers high-performance digital printing solutions
              built for precision, consistency, and scale, with a vision to lead
              global innovation through intelligent, sustainable, and
              future-ready technologies.
            </p>

            <Link
              href="#"
              className="
                mt-3 xs:mt-5 inline-block px-4 xs:px-5 py-1.5 xs:py-2
                text-white bg-black border border-black
                rounded-[19.58px] text-[11px] xs:text-xs
                hover:bg-[#333] hover:border-[#333]
                transition-colors
              "
            >
              Know More
            </Link>
          </div>
        </div>

        {/* ── DESKTOP: original layout ── */}
        <div className="hidden md:block pt-20">
          <h1 className="text-[40px] font-medium text-black leading-[120%]">
            Building the Future of
          </h1>
          <h1 className="text-[40px] font-medium text-[#F6891F] leading-[120%]">
            Digital Printing
          </h1>

          <p className="text-base font-light text-[#404040] leading-[160%] w-[700px] text-center mx-auto mt-3">
            Orange O Tec engineers high-performance digital printing solutions
            built for precision, consistency, and scale, with a vision to lead
            global innovation through intelligent, sustainable, and future-ready
            technologies.
          </p>

          <div className="relative">
            <Image
              src="/digitalPrinting.png"
              alt="The Future of Digital Printing"
              width={1920}
              height={1080}
              draggable={false}
              className="w-full h-auto block"
            />

            <div className="absolute top-10 left-1/2 -translate-x-1/2">
              <Link
                href="#"
                className="
                  inline-block px-5 py-2
                  text-white bg-black border border-black
                  rounded-[19.58px] text-sm
                  hover:bg-[#333] hover:border-[#333]
                  transition-colors
                "
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Presence + Stats + Map */}
      <div className="col-span-12 pl-2 md:pl-30 pt-10 md:pt-20 pr-2 md:pr-0">
        <p className="text-sm md:text-xl font-medium text-[#9C9C9C] tracking-[8px] md:tracking-[20px] text-center md:text-left">
          PRESENCE
        </p>

        <h2 className="text-[28px] md:text-[40px] font-medium text-black mt-1 w-full md:w-125 leading-[120%] text-center md:text-left">
          Pan-India Service &amp; Installation Network
        </h2>

        <div className="flex flex-col md:flex-row md:items-center gap-8 ml-0 md:ml-2 mt-6 md:mt-0">
          {/* Stats */}
          <div ref={ref} className="md:w-1/3 mt-2 md:mt-6">
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

          {/* Map Image */}
          <div className="md:w-2/3">
            <Image
              src="/IndiaServiceInstallation.png"
              alt="Pan-India Service and Installation Network"
              width={1200}
              height={800}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheFutureofDigitalPrinting;
