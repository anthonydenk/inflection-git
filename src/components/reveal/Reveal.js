"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to `.reveal` elements as they enter the viewport, once each.
 *
 * The prototypes shipped this as an inline script per page. Centralizing it
 * keeps behavior identical across routes and keeps the reveal content in the
 * served HTML: elements are only un-hidden here, never injected, so crawlers
 * that do not run JavaScript still see everything.
 */
export default function Reveal() {
  useEffect(() => {
    // The prototypes observe their plate/banner sections alongside `.reveal`
    // so the slow background settle (scale 1.05 -> 1) fires on entry.
    const nodes = Array.from(
      document.querySelectorAll(".reveal, .plate, .banner, .band, .cta-plate")
    );
    if (!nodes.length) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return null;
}
