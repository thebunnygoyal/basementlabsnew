"use client";

import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/shared/glass-card";
import { BentoGrid } from "@/components/shared/bento-grid";
import { Crown, Users, Shield, Coins, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce, stagger } from "@/lib/animations";

const perks = [
  { icon: Crown, title: "Majority Ownership", description: "Keep 30\u201350%+ equity in your spinout. No predatory terms. Full control over your protocol." },
  { icon: Users, title: "Assigned Co-founder", description: "Get paired with an industry-recognized founding member who ships alongside you." },
  { icon: Shield, title: "Legal + IP Framework", description: "Entity formation, IP agreements, and contributor contracts \u2014 handled from day one." },
  { icon: Coins, title: "Grant Pipeline Access", description: "Direct connections to ecosystem grant programs across Solana, Base, Arbitrum, and BNB Chain." },
  { icon: Megaphone, title: "Studio Brand Amplification", description: "Leverage the Basement Labs brand, network, and media presence to accelerate your project." },
];

export function PerksGrid() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">Why Join</h2>
      </div>
      <BentoGrid columns={3}>
        {perks.map((perk, i) => (
          <motion.div key={perk.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={viewportOnce} transition={stagger(i)}>
            <GlassCard className="h-full">
              <perk.icon className="h-7 w-7 text-accent mb-3" />
              <h3 className="font-heading text-base font-bold mb-2">{perk.title}</h3>
              <p className="text-sm text-text-secondary font-mono">{perk.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </BentoGrid>
    </Section>
  );
}
