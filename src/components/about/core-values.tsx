"use client";

import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/shared/glass-card";
import { BentoGrid } from "@/components/shared/bento-grid";
import { Coins, Users, BarChart3, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce, stagger } from "@/lib/animations";
import Link from "next/link";

const values = [
  { icon: Coins, title: "Grant-First", description: "Zero upfront capital. Every project is funded through ecosystem grants, not investor rounds." },
  { icon: Users, title: "Builder-First", description: "Builders keep the majority. 30\u201350%+ ownership. Full control. No predatory terms." },
  { icon: BarChart3, title: "Clean Economics", description: "Transparent splits from day one. No hidden fees, no renegotiation, no surprises." },
  { icon: Zap, title: "Lean Execution", description: "3 months. 4 sprints. If it doesn\u2019t work, we kill it fast and move on." },
];

export function CoreValues() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">Core Values</h2>
      </div>
      <BentoGrid columns={2}>
        {values.map((val, i) => (
          <motion.div key={val.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={viewportOnce} transition={stagger(i)}>
            <GlassCard className="h-full">
              <val.icon className="h-6 w-6 text-accent mb-3" />
              <h3 className="font-heading text-base font-bold mb-2">{val.title}</h3>
              <p className="text-sm text-text-secondary">{val.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </BentoGrid>
      <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/for-builders#apply" className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-accent-dark px-8 text-white font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(43,79,154,0.4)]">Start Building</Link>
        <Link href="/projects" className="inline-flex h-12 items-center justify-center rounded-lg border border-white/10 px-8 text-text-primary font-medium transition-all hover:bg-white/5">View Projects</Link>
      </div>
    </Section>
  );
}
