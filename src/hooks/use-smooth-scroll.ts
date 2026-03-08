"use client";
import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: any;
    (async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
        const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
      } catch {}
    })();
    return () => { if (lenis) lenis.destroy(); };
  }, []);
}
