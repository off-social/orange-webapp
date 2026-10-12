"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Same worker resolution as BrochureCover so the pdf.js version stays in sync.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const PDF_URL = "/instructions-and-precautions/instructions-and-precautions.pdf";

export default function InstructionsDocument() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [pages, setPages] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => setWidth(Math.min(el.clientWidth - 24, 860));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (failed) {
    return (
      <div
        style={{
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <a href={PDF_URL} style={{ color: "#111", fontSize: 16 }}>
          Open Instructions and Precautions
        </a>
      </div>
    );
  }

  return (
    <div
      ref={frameRef}
      data-lenis-prevent
      style={{ height: "100%", overflow: "auto", WebkitOverflowScrolling: "touch" }}
    >
      <Document
        file={PDF_URL}
        loading={
          <p style={{ textAlign: "center", padding: 48, color: "#333" }}>
            Loading instructions…
          </p>
        }
        onLoadError={() => setFailed(true)}
        onLoadSuccess={({ numPages }) => setPages(numPages)}
      >
        {width > 0 &&
          Array.from({ length: pages }, (_, index) => (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center", padding: "12px 0" }}
            >
              <Page
                pageNumber={index + 1}
                width={width}
                onRenderError={() => setFailed(true)}
              />
            </div>
          ))}
      </Document>
    </div>
  );
}
