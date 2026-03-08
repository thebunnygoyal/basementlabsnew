"use client";

import { Section } from "@/components/layout/section";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { STATS } from "@/lib/constants";

export function ByTheNumbers() {
  return (
    <Section className="bg-surface/30">
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">
          By the Numbers
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </Section>
  );
}
