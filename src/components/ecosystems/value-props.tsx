"use client";

import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/shared/glass-card";
import { BentoGrid } from "@/components/shared/bento-grid";
import { ShieldCheck, Users, BarChart3, Globe, Repeat, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce, stagger } from "@/lib/animations";

const props = [
  { icon: ShieldCheck, title: "Pre-vetted Projects", description: "Every project passes our multi-sprint selection process. No unvetted teams. No ghost projects." },
  { icon: Users, title: "Built-in Execution Teams", description: "Each project has an assigned co-founder and contributor network. Execution is guaranteed, not hoped for." },
  { icon: Clock, title: "Structured 3-Month Pipeline", description: "Clear milestones across 4 sprints with defined exit gates. You know exactly where every project stands." },
  { icon: BarChart3, title: "Higher Grant ROI", description: "Studio-backed projects ship faster, hit milestones, and stay on-chain. Your grants actually produce results." },
  { icon: Globe, title: "Multi-chain Ready", description: "Projects are architected for multi-chain deployment from day one. Deploy on your chain, expand to others." },
  { icon: Repeat, title: "Repeat Partnership", description: "Structured pipeline means a steady flow of quality projects every quarter. One partnership, ongoing value." },
];

export function ValueProps() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">Why Basement Labs</h2>
      </div>
      <BentoGrid columns={3}>
        {props.map((prop, i) => (
          <motion.div key={prop.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={viewportOnce} transition={stagger(i)}>
            <GlassCard className="h-full">
              <prop.icon className="h-7 w-7 text-accent mb-3" />
              <h3 className="font-heading text-base font-bold mb-2">{prop.title}</h3>
              <p className="text-sm text-text-secondary">{prop.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </BentoGrid>
    </Section>
  );
}
