import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/shared/glass-card";

const alignmentPoints = [
  { step: "01", title: "Intake", description: "We share our current cohort pipeline with your grants team. You flag projects aligned with your ecosystem priorities." },
  { step: "02", title: "Milestone Mapping", description: "Each project\u2019s sprint milestones are mapped to your grant program\u2019s deliverable requirements. Full transparency." },
  { step: "03", title: "Structured Delivery", description: "Projects hit sprint exit gates on schedule. You receive progress reports at each milestone without chasing teams." },
  { step: "04", title: "Grant Disbursement", description: "Funding is released milestone-by-milestone. No upfront lump sums. Your capital is deployed only when value is delivered." },
];

export function GrantAlignment() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">Grant Alignment</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">
          We integrate directly with your existing grant program. Here\u2019s how it works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {alignmentPoints.map((point) => (
          <GlassCard key={point.step} className="flex gap-4">
            <div className="text-3xl font-heading font-bold text-accent/30">{point.step}</div>
            <div>
              <h3 className="font-heading text-base font-bold mb-1">{point.title}</h3>
              <p className="text-sm text-text-secondary">{point.description}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
