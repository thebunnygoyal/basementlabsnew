"use client";

import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/shared/glass-card";
import { BentoGrid } from "@/components/shared/bento-grid";
import { Search, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Search,
    title: "Select & Scope",
    description:
      "We scout 10\u201315 projects monthly and select 2\u20133 per quarter. Every project gets a co-founder, legal framework, and clear architecture before a single line of code is written.",
  },
  {
    icon: Code2,
    title: "Build & Ship",
    description:
      "From smart contracts to frontend, we move from zero to testnet-deployed MVP in 4 weeks. Internal audits. Demo-ready.",
  },
  {
    icon: Rocket,
    title: "Fund & Launch",
    description:
      "We pitch live MVPs to 3\u20135 ecosystems, submit targeted grant applications, and secure funding. Projects graduate to launchpad partners for mainnet and beyond.",
  },
];

export function WhatWeDo() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">What We Do</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">
          The \u22121 \u2192 0 infrastructure layer for Web3 builders.
        </p>
      </div>

      <BentoGrid columns={3}>
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial= opacity: 0, y: 20 
            whileInView= opacity: 1, y: 0 
            viewport= once: true 
            transition= duration: 0.5, delay: i * 0.1 
          >
            <GlassCard className="h-full">
              <feature.icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-heading text-lg font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </BentoGrid>
    </Section>
  );
}
