"use client";

import { Section } from "@/components/layout/section";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const metrics = [
  { value: "85%+", label: "Grant Success Rate" },
  { value: "~12", label: "Weeks to Funded" },
  { value: "2\u20133", label: "Projects per Quarter" },
  { value: "100%", label: "Milestone Accountability" },
];

export function EcosystemMetrics() {
  return (
    <Section className="bg-surface/30">
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">By the Numbers</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m) => (
          <AnimatedCounter key={m.label} value={m.value} label={m.label} />
        ))}
      </div>
    </Section>
  );
}
