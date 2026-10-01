"use client";

import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useEffect, type ReactNode } from "react";

/**
 * Pauses Lenis while an MUI overlay (Consultation dialog, mobile nav drawer)
 * holds the page. MUI locks scroll by setting inline `overflow: hidden` on the
 * scroll container — <html> here, since globals.css gives it `overflow-y:
 * scroll` — but Lenis drives the window scroll itself, so without this the
 * page behind an open dialog would keep scrolling.
 */
function PauseWhileScrollLocked() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const roots = [document.documentElement, document.body];
    const sync = () => {
      if (roots.some((el) => el.style.overflow === "hidden")) lenis.stop();
      else lenis.start();
    };
    sync();
    const observer = new MutationObserver(sync);
    for (const el of roots) {
      observer.observe(el, { attributes: true, attributeFilter: ["style"] });
    }
    return () => observer.disconnect();
  }, [lenis]);

  return null;
}

/** Site-wide smooth scrolling on the window, via Lenis. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        // Let scrollable children (dialog content, nav drawer, tab strips)
        // scroll natively instead of hijacking them for the page.
        allowNestedScroll: true,
        // Same-page `#hash` links glide instead of jumping.
        anchors: true,
      }}
    >
      <PauseWhileScrollLocked />
      {children}
    </ReactLenis>
  );
}
