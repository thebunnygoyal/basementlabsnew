import { Section } from "@/components/layout/section";

const placeholderPartners = [
  "Solana", "Base", "Arbitrum", "BNB Chain", "Polygon", "Optimism",
];

export function PartnerLogos() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">Ecosystem Partners</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">
          Building relationships across the leading blockchain ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {placeholderPartners.map((name) => (
          <div
            key={name}
            className="glass rounded-xl p-6 flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <span className="font-heading text-sm font-medium text-text-secondary">{name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
