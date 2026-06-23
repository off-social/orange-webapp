"use client";

import { Box } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Renders the blog article HTML file inside the app shell so the global
 * Navbar (top) and Footer (bottom) — provided by app/layout.tsx — wrap it.
 *
 * The article lives in a self-contained HTML file (served from /public); the
 * backend can swap that file per blog without touching this route. It's
 * embedded via an <iframe> whose height is kept in sync with its content.
 *
 * To avoid the footer jumping while the iframe loads, the wrapper keeps a
 * full-viewport min-height — so the footer always starts below the fold and
 * only settles into place once the real content height is measured.
 */
const ARTICLE_SRC = "/blog-article.html";

export default function BlogArticlePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(0);

  const measure = useCallback(() => {
    const doc = iframeRef.current?.contentWindow?.document;
    if (doc) {
      setHeight(doc.documentElement.scrollHeight);
    }
  }, []);

  const handleLoad = useCallback(() => {
    measure();
    const win = iframeRef.current?.contentWindow;
    const body = win?.document?.body;
    const RO = (win as unknown as { ResizeObserver?: typeof ResizeObserver })
      ?.ResizeObserver;
    if (body && RO) {
      // Track late reflows: web-font swap, images decoding, etc.
      const ro = new RO(() => measure());
      ro.observe(body);
    }
    // Final pass once all iframe sub-resources have loaded.
    win?.addEventListener("load", measure);
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 59px)",
        bgcolor: "var(--white-surface, #FFF)",
      }}
    >
      <iframe
        ref={iframeRef}
        src={ARTICLE_SRC}
        title="Blog article"
        onLoad={handleLoad}
        scrolling="no"
        style={{
          display: "block",
          width: "100%",
          border: 0,
          height: height ? `${height}px` : "calc(100vh - 59px)",
        }}
      />
    </Box>
  );
}
