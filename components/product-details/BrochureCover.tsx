"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Use CDN for pdf.js worker to avoid WebKitBlobResource errors in Safari
// and ensure compatibility across all deployment environments
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

/**
 * Renders the first page of a PDF as a cover thumbnail, sized to fill its
 * parent box (parent should set the dimensions + `overflow: hidden`).
 * Falls back to a static image if the PDF can't be rendered.
 */
export default function BrochureCover({
  pdfUrl,
  fallbackImage,
  alt,
}: {
  pdfUrl: string;
  fallbackImage?: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const showFallback = failed && fallbackImage;

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {showFallback ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={fallbackImage}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        mounted &&
        width > 0 && (
          <Document
            file={pdfUrl}
            loading=""
            error=""
            onLoadError={() => setFailed(true)}
          >
            <Page
              pageNumber={1}
              width={width}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading=""
              onRenderError={() => setFailed(true)}
            />
          </Document>
        )
      )}
    </div>
  );
}
