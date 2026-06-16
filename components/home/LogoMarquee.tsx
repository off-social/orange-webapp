"use client";

import Image from "next/image";
import { useRef } from "react";

const logos = [
  { name: "Colorix", src: "/logos/Colorix-4.svg" },
  { name: "Kolorado", src: "/logos/Kolorado-2.svg" },
  { name: "Kiian", src: "/logos/kiian.svg" },
  { name: "Twine", src: "/logos/twine.svg" },
  { name: "Homer", src: "/logos/Homer-2-1.svg" },
  { name: "Huntsman", src: "/logos/huntsman.svg" },
];

const allLogos = [...logos, ...logos, ...logos];

export default function LogoMarquee() {
  const trackRef = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#fff",
        padding: "34px 0",
        position: "relative",
      }}
    >
      {/* Fade Left */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(to right, #fff, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Fade Right */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(to left, #fff, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling Track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          animation: "marquee 22s linear infinite",
          width: "max-content",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {allLogos.map((logo, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 16px",
              cursor: "pointer",
              opacity: 0.85,
              transition: "opacity 0.2s",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.85";
            }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={50}
              style={{
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
