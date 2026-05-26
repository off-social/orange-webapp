"use client";

import { Box, Grid, Typography } from "@mui/material";
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
      const SIZE = Math.min(wrapper.getBoundingClientRect().width, 480);

      canvas.width = SIZE * dpr;
      canvas.height = SIZE * dpr;
      canvas.style.width = SIZE + "px";
      canvas.style.height = SIZE + "px";

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.scale(dpr, dpr);

      const W = SIZE;
      const H = SIZE;
      const PAD_L = SIZE * 0.13;
      const PAD_R = SIZE * 0.05;
      const PAD_T = SIZE * 0.06;
      const PAD_B = SIZE * 0.1;
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
        cp1x: number,
        cp1y: number,
        cp2x: number,
        cp2y: number,
        p1: { x: number; y: number },
        t: number,
      ) => {
        const mt = 1 - t;
        return {
          x:
            mt * mt * mt * p0.x +
            3 * mt * mt * t * cp1x +
            3 * mt * t * t * cp2x +
            t * t * t * p1.x,
          y:
            mt * mt * mt * p0.y +
            3 * mt * mt * t * cp1y +
            3 * mt * t * t * cp2y +
            t * t * t * p1.y,
        };
      };

      const getTip = (progress: number) => {
        const total = pts.length - 1;
        const tScaled = progress * total;
        const si = Math.min(Math.floor(tScaled), total - 1);
        const { cp1x, cp1y, cp2x, cp2y } = getCP(si);
        return bezierPt(
          pts[si],
          cp1x,
          cp1y,
          cp2x,
          cp2y,
          pts[si + 1],
          tScaled - si,
        );
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
          ctx.fillText(
            v === 0 ? "0K" : `${v / 1000}K`,
            PAD_L - 5,
            y + fs * 0.35,
          );
        });
        ctx.textAlign = "center";
        ctx.fillStyle = "#9C9C9C";
        ctx.font = `${fs}px Inter, Arial, sans-serif`;
        [2000, 2005, 2010, 2015, 2020, 2025, 2030].forEach((yr) => {
          ctx.fillText(String(yr), toX(yr), PAD_T + CH + fs * 1.6);
        });
        ctx.restore();
      };

      const DURATION = 1500;
      let startTime: number | null = null;

      const animate = (ts: number) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / DURATION, 1);

        drawStatic();

        const clipX = toX(X_MIN + (X_MAX - X_MIN) * progress) + 4;
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, clipX, H);
        ctx.clip();

        const fillPath = new Path2D();
        fillPath.moveTo(pts[0].x, toY(0));
        fillPath.lineTo(pts[0].x, pts[0].y);
        for (let i = 0; i < pts.length - 1; i++) {
          const { cp1x, cp1y, cp2x, cp2y } = getCP(i);
          fillPath.bezierCurveTo(
            cp1x,
            cp1y,
            cp2x,
            cp2y,
            pts[i + 1].x,
            pts[i + 1].y,
          );
        }
        fillPath.lineTo(pts[pts.length - 1].x, toY(0));
        fillPath.closePath();

        const grad = ctx.createLinearGradient(0, PAD_T, 0, PAD_T + CH);
        grad.addColorStop(1, "rgba(245,166,35,0.01)");
        ctx.fillStyle = grad;
        ctx.fill(fillPath);

        const linePath = new Path2D();
        linePath.moveTo(pts[0].x, pts[0].y);
        for (let i = 0; i < pts.length - 1; i++) {
          const { cp1x, cp1y, cp2x, cp2y } = getCP(i);
          linePath.bezierCurveTo(
            cp1x,
            cp1y,
            cp2x,
            cp2y,
            pts[i + 1].x,
            pts[i + 1].y,
          );
        }
        ctx.strokeStyle = "#E8960A";
        ctx.lineWidth = SIZE < 280 ? 2.5 : 4;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.stroke(linePath);
        ctx.strokeStyle = "#FFBE3D";
        ctx.lineWidth = 1.5;
        ctx.stroke(linePath);

        ctx.restore();

        const tip = getTip(progress);
        const dotR = SIZE * 0.04;
        const glowR = SIZE * 0.055;
        const grd = ctx.createRadialGradient(
          tip.x,
          tip.y,
          1,
          tip.x,
          tip.y,
          glowR,
        );
        grd.addColorStop(0, "rgba(100,180,230,0.55)");
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
    <div ref={wrapperRef} style={{ width: "100%", maxWidth: "5000px" }}>
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
};

const MovingToDigital = () => {
  const points = [
    "Save up to 40% on short-run costs",
    "Print-on-demand manufacturing",
    "Faster product launches",
    "Reduced inventory costs",
    "Improved working capital efficiency",
  ];

  return (
    <Grid
      container
      sx={{
        px: { xs: 3, sm: 5, md: 14 },
        py: { xs: 5, md: 8 },
        alignItems: "center",
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          sx={{
            letterSpacing: { xs: "6px", sm: "10px", md: "12px" },
            fontSize: { xs: 10, sm: 12, md: 14 },
            fontWeight: 500,
            color: "#9C9C9C",
          }}
        >
          INDUSTRY SHIFT
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: { xs: 28, sm: 34, md: 40 },
            fontWeight: 500,
            color: "#000",
            lineHeight: "120%",
            mb: 4,
            width: { xs: "100%", md: "460px" },
          }}
        >
          Why Industries are Moving to Digital
        </Typography>

        <AnimatedDigitalGraph />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ pl: { xs: 0, md: 8 }, mt: { xs: 5, md: 16 } }}>
          {points.map((item, index) => (
            <Box key={index}>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  color: "#404040",
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                {item}
              </Typography>
              {index !== points.length - 1 && (
                <Box sx={{ borderBottom: "1px solid #D8D8D8" }} />
              )}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default MovingToDigital;
