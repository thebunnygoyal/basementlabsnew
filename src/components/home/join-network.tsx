"use client";

import Link from "next/link";
import { Section } from "@/components/layout/section";
import { motion } from "framer-motion";
import { slideLeft, slideRight, viewportOnce, delay } from "@/lib/animations";
import { Terminal, Building2 } from "lucide-react";

export function JoinNetwork() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">Join the Network</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">Whether you\u2019re building the next protocol or funding the next wave, there\u2019s a seat at the table.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div initial={slideLeft.hidden} whileInView={slideLeft.visible} viewport={viewportOnce} transition={delay(0)}>
          <div className="glass rounded-xl p-8 h-full border-accent/20 hover:border-accent/40 transition-colors">
            <Terminal className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-heading text-xl font-bold mb-2">For Builders</h3>
            <p className="text-sm text-text-secondary mb-6 font-mono">Got a hackathon MVP? We\u2019ll give you a co-founder, legal framework, grant pipeline, and studio backing. You keep 30\u201350%+ ownership.</p>
            <Link href="/for-builders" className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-accent-dark px-6 text-white text-sm font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(43,79,154,0.4)]">Start Building</Link>
          </div>
        </motion.div>
        <motion.div initial={slideRight.hidden} whileInView={slideRight.visible} viewport={viewportOnce} transition={delay(0)}>
          <div className="glass rounded-xl p-8 h-full hover:border-white/10 transition-colors">
            <Building2 className="h-8 w-8 text-text-secondary mb-4" />
            <h3 className="font-heading text-xl font-bold mb-2">For Ecosystems</h3>
            <p className="text-sm text-text-secondary mb-6">Stop dispersing grants across hundreds of unvetted projects. Get pre-vetted, studio-backed builders with structured 3-month delivery and higher ROI.</p>
            <Link href="/for-ecosystems" className="inline-flex h-10 items-center justify-center rounded-lg border border-white/10 px-6 text-text-primary text-sm font-medium transition-all hover:bg-white/5">Partner With Us</Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
