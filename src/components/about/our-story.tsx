import { Section } from "@/components/layout/section";

export function OurStory() {
  return (
    <Section className="pt-32">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
          Our Story
        </p>
        <h1 className="font-heading text-display-mobile md:text-display mb-8">
          The \u22121 \u2192 0 Infrastructure Layer
        </h1>
        <div className="space-y-6 text-text-secondary text-body-lg leading-relaxed">
          <p>
            Basement Labs was born from a simple observation: the Web3 ecosystem is drowning in ideas but starving for execution.
          </p>
          <p>
            Every month, thousands of builders ship brilliant MVPs at hackathons \u2014 then watch them die. Not because the ideas are bad, but because solo builders lack the scaffolding to turn prototypes into protocols.
          </p>
          <p>
            We built the \u22121 \u2192 0 infrastructure layer. A central studio engine with brand, legal frameworks, ecosystem partnerships, and a network of industry-recognized founding members. We take raw ideas from selection to grant-funded and launchpad-ready in 3 months.
          </p>
          <p className="text-text-primary font-medium">
            No capital required. Full control for builders. Perpetual upside for the founding network.
          </p>
        </div>
      </div>
    </Section>
  );
}
