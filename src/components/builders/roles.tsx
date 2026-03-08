"use client";

import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/shared/glass-card";
import { Code2, Users, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  {
    icon: Code2,
    title: "Builder",
    description: "The core developer. You bring the MVP and the vision. You lead the technical execution across all 4 sprints.",
    commitment: "Full-time (12 weeks)",
  },
  {
    icon: Users,
    title: "Co-founder",
    description: "Assigned from our founding member network. Handles BD, grant applications, ecosystem relationships, and strategic decisions.",
    commitment: "Part-time to Full-time",
  },
  {
    icon: Wrench,
    title: "Contributor",
    description: "Specialists brought in for specific sprints: smart contract auditors, designers, growth strategists.",
    commitment: "Sprint-based",
  },
];

export function Roles() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">Roles</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">
          Every spinout has a clear structure. Here\u2019s who does what.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial= opacity: 0, y: 20 
            whileInView= opacity: 1, y: 0 
            viewport= once: true 
            transition= duration: 0.5, delay: i * 0.1 
          >
            <GlassCard className="h-full">
              <role.icon className="h-7 w-7 text-accent mb-3" />
              <h3 className="font-heading text-base font-bold mb-2">{role.title}</h3>
              <p className="text-sm text-text-secondary mb-4">{role.description}</p>
              <p className="text-xs font-mono text-accent">{role.commitment}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
