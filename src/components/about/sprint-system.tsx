"use client";

import { Section } from "@/components/layout/section";
import { SPRINT_SYSTEM } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce, stagger } from "@/lib/animations";

export function SprintSystem() {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="font-heading text-h2-mobile md:text-h2">The Basement Sprint System</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">From scouting to graduation in 12 weeks. Every sprint has a clear purpose and exit gate.</p>
      </div>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
        <div className="space-y-12">
          {SPRINT_SYSTEM.map((sprint, i) => (
            <motion.div key={sprint.id} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={viewportOnce} transition={stagger(i)} className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-white">{sprint.id}</span>
                </div>
              </div>
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="glass rounded-xl p-6">
                  <h3 className="font-heading text-lg font-bold mb-1">{sprint.title}</h3>
                  <p className="font-mono text-xs text-accent mb-3">{sprint.timeline}</p>
                  <p className="text-sm text-text-secondary mb-4">{sprint.description}</p>
                  <div className="border-t border-white/[0.06] pt-3">
                    <p className="text-xs text-text-secondary"><span className="text-accent font-medium">Exit Gate:</span> {sprint.exitGate}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
