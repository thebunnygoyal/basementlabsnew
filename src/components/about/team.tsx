"use client";

import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/shared/glass-card";
import { TEAM_MEMBERS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce, stagger } from "@/lib/animations";

export function Team() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">The Team</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">A network of industry-recognized founding members who ship alongside builders.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div key={member.name} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={viewportOnce} transition={stagger(i)}>
            <GlassCard className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="font-heading text-lg font-bold text-white">{member.initials}</span>
              </div>
              <h3 className="font-heading text-base font-medium">{member.name}</h3>
              <Badge variant="default" className="mt-1 mb-3">{member.role}</Badge>
              <a href={member.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline" aria-label={`${member.name} on X`}>
                @{member.x.split("/").pop()} <ExternalLink size={12} />
              </a>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
