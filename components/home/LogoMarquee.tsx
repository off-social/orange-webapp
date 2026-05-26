"use client";

import Image from "next/image";
import { useRef } from "react";

const logos = [{ name: "Colorix", src: "/1scroll-logos.png" }];

const allLogos = [...logos, ...logos, ...logos];

export default function LogoMarquee() {
  const trackRef = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#fff",
        padding: "12px 0",
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
              padding: "0 10px",
              minWidth: 120,
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
              width={1000}
              height={600}
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
