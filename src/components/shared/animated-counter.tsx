"use client";

import { useEffect, useState } from "react";
import { useIntersection } from "@/hooks/use-intersection";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const { ref, isInView } = useIntersection();
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    if (isInView) setDisplayed(true);
  }, [isInView]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`font-heading text-4xl md:text-5xl font-bold text-accent transition-all duration-700 ${
          displayed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {value}
      </div>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </div>
  );
}
