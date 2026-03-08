"use client";
import { useEffect, useRef, useState } from "react";

export function useIntersection(options: { threshold?: number; rootMargin?: string; triggerOnce?: boolean } = {}) {
  const { threshold = 0.2, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); if (triggerOnce) obs.unobserve(el); }
      else if (!triggerOnce) setIsInView(false);
    }, { threshold, rootMargin });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
