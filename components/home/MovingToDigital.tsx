"use client";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const AnimatedDigitalGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    let rafId: number;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const SIZE = Math.min(wrapper.getBoundingClientRect().width, 446);
      // Match Figma chart proportions (446 x 381) instead of a square.
      const CHART_H = SIZE * (381 / 446);

      canvas.width = SIZE * dpr;
      canvas.height = CHART_H * dpr;
      canvas.style.width = SIZE + "px";
      canvas.style.height = CHART_H + "px";

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.scale(dpr, dpr);

      const W = SIZE;
      const H = CHART_H;
      const PAD_L = SIZE * 0.13;
      const PAD_R = SIZE * 0.05;
      const PAD_T = H * 0.06;
      const PAD_B = H * 0.12;
      const CW = W - PAD_L - PAD_R;
      const CH = H - PAD_T - PAD_B;

      const Y_MAX = 660000;
      const X_MIN = 2000;
      const X_MAX = 2030;

      const rawData = [
        { year: 2000, val: 1200 },
        { year: 2003, val: 3000 },
        { year: 2005, val: 7000 },
        { year: 2008, val: 14000 },
        { year: 2010, val: 22000 },
        { year: 2012, val: 35000 },
        { year: 2014, val: 56000 },
        { year: 2015, val: 70000 },
        { year: 2017, val: 110000 },
        { year: 2019, val: 175000 },
        { year: 2020, val: 205000 },
        { year: 2022, val: 290000 },
        { year: 2024, val: 390000 },
        { year: 2026, val: 460000 },
        { year: 2028, val: 530000 },
        { year: 2030, val: 600000 },
      ];

      const toX = (year: number) =>
        PAD_L + ((year - X_MIN) / (X_MAX - X_MIN)) * CW;
      const toY = (val: number) => PAD_T + CH - (val / Y_MAX) * CH;
      const pts = rawData.map((d) => ({ x: toX(d.year), y: toY(d.val) }));
      const fs = Math.max(8, SIZE * 0.028);

      const getCP = (i: number) => ({
        cp1x: pts[i].x + (pts[i + 1].x - pts[i].x) * 0.45,
        cp1y: pts[i].y,
        cp2x: pts[i].x + (pts[i + 1].x - pts[i].x) * 0.55,
        cp2y: pts[i + 1].y,
      });

      const bezierPt = (
        p0: { x: number; y: number },
        cp1x: number, cp1y: number,
        cp2x: number, cp2y: number,
        p1: { x: number; y: number },
        t: number,
      ) => {
        const mt = 1 - t;
        return {
          x: mt * mt * mt * p0.x + 3 * mt * mt * t * cp1x + 3 * mt * t * t * cp2x + t * t * t * p1.x,
          y: mt * mt * mt * p0.y + 3 * mt * mt * t * cp1y + 3 * mt * t * t * cp2y + t * t * t * p1.y,
        };
      };

      const getTip = (progress: number) => {
        const total = pts.length - 1;
        const tScaled = progress * total;
        const si = Math.min(Math.floor(tScaled), total - 1);
        const { cp1x, cp1y, cp2x, cp2y } = getCP(si);
        return bezierPt(pts[si], cp1x, cp1y, cp2x, cp2y, pts[si + 1], tScaled - si);
      };

      const drawStatic = () => {
        ctx.clearRect(0, 0, W, H);
        ctx.save();
        ctx.strokeStyle = "#E0E0E0";
        ctx.lineWidth = 0.8;
        [0, 200000, 400000, 600000].forEach((v) => {
          const y = toY(v);
          ctx.beginPath();
          ctx.moveTo(PAD_L, y);
          ctx.lineTo(PAD_L + CW, y);
          ctx.stroke();
          ctx.fillStyle = "#9C9C9C";
          ctx.font = `${fs}px Inter, Arial, sans-serif`;
          ctx.textAlign = "right";
          ctx.fillText(v === 0 ? "0K" : `${v / 1000}K`, PAD_L - 5, y + fs * 0.35);
        });
        ctx.textAlign = "center";
        ctx.fillStyle = "#9C9C9C";
        ctx.font = `${fs}px Inter, Arial, sans-serif`;
        [2000, 2005, 2010, 2015, 2020, 2025, 2030].forEach((yr) => {
          ctx.fillText(String(yr), toX(yr), PAD_T + CH + fs * 1.6);
        });
        ctx.restore();
      };

      const DURATION = 1800;
      let startTime: number | null = null;

      const animate = (ts: number) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / DURATION, 1);
        const eased = progress < 1 ? 1 - Math.pow(1 - progress, 2) : 1;

        drawStatic();

        const clipX = toX(X_MIN + (X_MAX - X_MIN) * eased) + 4;
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, clipX, H);
        ctx.clip();

        const linePath = new Path2D();
        linePath.moveTo(pts[0].x, pts[0].y);
        for (let i = 0; i < pts.length - 1; i++) {
          const { cp1x, cp1y, cp2x, cp2y } = getCP(i);
          linePath.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, pts[i + 1].x, pts[i + 1].y);
        }
        const lineGrad = ctx.createLinearGradient(0, PAD_T + CH, 0, PAD_T);
        lineGrad.addColorStop(0, "#F4C430");
        lineGrad.addColorStop(1, "#F6891F");
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = SIZE < 280 ? 2.5 : 3.5;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.stroke(linePath);

        ctx.restore();

        const tip = getTip(eased);
        const dotR = SIZE * 0.022;
        const glowR = SIZE * 0.034;
        const grd = ctx.createRadialGradient(tip.x, tip.y, 1, tip.x, tip.y, glowR);
        grd.addColorStop(0, "rgba(100,180,230,0.5)");
        grd.addColorStop(1, "rgba(100,180,230,0)");
        ctx.beginPath();
        ctx.arc(tip.x, tip.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(tip.x, tip.y, dotR, 0, Math.PI * 2);
        ctx.fillStyle = "#7AB8D8";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(tip.x, tip.y, dotR * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();

        if (progress < 1) rafId = requestAnimationFrame(animate);
      };

      rafId = requestAnimationFrame(animate);
    };

    draw();

    const ro = new ResizeObserver(draw);
    ro.observe(wrapper);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [isVisible]);

  return (
    <div ref={wrapperRef} style={{ width: "100%", maxWidth: "446px" }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%" }} />
    </div>
  );
};

const POINTS = [
  { icon: <PercentOutlinedIcon sx={{ fontSize: 24 }} />, text: "Save up to 40% on short-run costs" },
  { icon: <PrintOutlinedIcon sx={{ fontSize: 24 }} />, text: "Print-on-demand manufacturing" },
  { icon: <Inventory2OutlinedIcon sx={{ fontSize: 24 }} />, text: "Faster product launches" },
  { icon: <LocalOfferOutlinedIcon sx={{ fontSize: 24 }} />, text: "Reduced inventory costs" },
  { icon: <TrendingUpOutlinedIcon sx={{ fontSize: 24 }} />, text: "Improved working capital efficiency" },
];

const MovingToDigital = () => {
  return (
    <Box sx={{ px: { xs: "16px", sm: "40px", md: "64px", lg: "168px" }, py: { xs: "48px", sm: "64px", md: "80px" } }}>
      {/* Header — centered */}
      <Box sx={{ mb: { xs: "32px", sm: "40px", md: "56px", lg: "80px" }, textAlign: "center", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
        <Typography
          sx={{
            color: "#707070",
            fontSize: { xs: "10px", sm: "12px", md: "16px" },
            fontWeight: 400,
            lineHeight: "25.6px",
            letterSpacing: { xs: "4px", sm: "6px", md: "10px" },
            textTransform: "uppercase",
          }}
        >
          Industry Shift
        </Typography>
        <Typography
          sx={{
            color: "#333",
            fontSize: { xs: "22px", sm: "30px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "30px", sm: "40px", md: "52px" },
            letterSpacing: { xs: "-0.5px", md: "-1px" },
          }}
        >
          Why Industries are Moving to Digital
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontSize: { xs: "13px", md: "14px" },
            fontWeight: 500,
            lineHeight: "22.4px",
            maxWidth: "600px",
          }}
        >
          Digital printing is transforming modern manufacturing by enabling greater flexibility, lower operational costs, faster turnaround times, and more sustainable production processes.
        </Typography>
      </Box>

      {/* Chart + Benefits — stacks until there is room for a 916px (446 chart + 120 gap + 350 list) row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "40px", lg: "120px" },
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "916px",
          mx: "auto",
          width: "100%",
        }}
      >
        {/* Chart */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "446px",
            flexShrink: { xs: 1, lg: 0 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AnimatedDigitalGraph />
        </Box>

        {/* Benefits list */}
        <Box sx={{ width: "100%", maxWidth: { xs: "446px", lg: "350px" }, flexShrink: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "fit-content", mx: { xs: "auto", lg: 0 } }}>
            {POINTS.map((item, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    py: { xs: "12px", md: "13px" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#333333",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "16px" },
                      color: "#333333",
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MovingToDigital;
