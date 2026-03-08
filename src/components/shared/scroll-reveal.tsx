"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={fadeUp.hidden}
      whileInView={fadeUp.visible}
      viewport={viewportOnce}
      transition= duration: 0.5, delay 
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
