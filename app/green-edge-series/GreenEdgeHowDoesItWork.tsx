"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    num: "/Number1.webp",
    title: "Print",
    desc: "Pigment ink is digitally applied onto the fabric with precision and accuracy.",
  },
  {
    num: "/Number2.webp",
    title: "Bond",
    desc: "Advanced binder technology anchors the pigment particles to the fabric surface.",
  },
  {
    num: "/Number3.webp",
    title: "Cure",
    desc: "Heat fixation ensures durability, color fastness, and long-lasting performance.",
  },
  {
    num: "/Number4.webp",
    title: "Deliver",
    desc: "The finished fabric is ready with fewer processing stages and faster turnaround times.",
  },
];

function Step({
  num,
  title,
  desc,
  visible,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  visible: boolean;
  delay: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: "12px", md: "24px" },
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      <Box
        component="img"
        src={num}
        alt=""
        sx={{
          width: { xs: "54px", md: "71px" },
          height: { xs: "75px", md: "auto" },
          flexShrink: 0,
          objectFit: "contain",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            color: "#F6891F",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "20px", md: "24px" },
            fontWeight: 500,
            lineHeight: { xs: "26px", md: "31.2px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: { xs: 400, md: 500 },
            lineHeight: { xs: "22.4px", md: "25.6px" },
            maxWidth: { lg: "441px" },
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default function GreenEdgeHowDoesItWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -180px 0px" },
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "flex-start" },
        gap: "48px",
        alignSelf: "stretch",
      }}
    >
      {/* Label */}
      <Typography
        sx={{
          color: "#707070",
          textAlign: { xs: "center", sm: "left" },
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "14px", md: "16px" },
          fontWeight: { xs: 500, md: 400 },
          lineHeight: "normal",
          letterSpacing: { xs: "4px", md: "10px" },
          textTransform: "uppercase",
        }}
      >
        How Does It Work?
      </Typography>

      {/* Steps + right image */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          alignSelf: "stretch",
          gap: { xs: "40px", sm: "32px", md: "32px", lg: "40px" },
        }}
      >
        {/* Steps column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: { xs: "40px", sm: "32px", md: "64px" },
            flex: 1,
          }}
        >
          {STEPS.map(({ num, title, desc }, i) => (
            <Step
              key={title}
              num={num}
              title={title}
              desc={desc}
              visible={visible}
              delay={i * 0.35}
            />
          ))}
        </Box>

        {/* Right illustration */}
        <Box
          sx={{
            width: { xs: "70%", sm: "auto" },
            maxWidth: { xs: "280px", sm: "none" },
            height: { xs: "auto", sm: "380px", md: "420px", lg: "558px" },
            aspectRatio: "2/3",
            alignSelf: "center",
            flexShrink: 0,
            background:
              "url('/HowDoesItWork.webp') lightgray 50% / cover no-repeat",
          }}
        />
      </Box>
    </Box>
  );
}
