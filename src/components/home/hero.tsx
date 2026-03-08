"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(43,79,154,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(43,79,154,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-content relative z-10 text-center">
        <motion.p
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          transition= duration: 0.5, delay: 0 
          className="mb-4 font-mono text-sm text-accent tracking-widest uppercase"
        >
          Web3 Venture Studio
        </motion.p>

        <motion.h1
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          transition= duration: 0.5, delay: 0.1 
          className="font-heading text-display-mobile md:text-display max-w-4xl mx-auto"
        >
          From hackathon to protocol.{" "}
          <span className="text-accent">Zero capital.</span> Full control.
        </motion.h1>

        <motion.p
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          transition= duration: 0.5, delay: 0.2 
          className="mt-6 text-body-lg text-text-secondary max-w-2xl mx-auto"
        >
          A Web3 venture studio that turns builder energy into grant-funded, launchpad-ready protocols &mdash; in 3 months.
        </motion.p>

        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          transition= duration: 0.5, delay: 0.3 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/for-builders#apply"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-accent-dark px-8 text-white font-medium transition-all duration-150 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(43,79,154,0.4)]"
          >
            Start Building
          </Link>
          <Link
            href="/for-ecosystems"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-accent/30 px-8 text-accent font-medium transition-all duration-150 hover:bg-accent/5 hover:border-accent/50"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
