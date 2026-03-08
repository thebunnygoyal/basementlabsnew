"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce, delay } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay: d = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={fadeUp.hidden}
      whileInView={fadeUp.visible}
      viewport={viewportOnce}
      transition={delay(d)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
