import { Section } from "@/components/layout/section";

export function BuilderEconomics() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">The Economics</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto font-mono">
          // You keep the majority. Here\u2019s exactly how it breaks down.
        </p>
      </div>

      <div className="max-w-2xl mx-auto glass rounded-xl overflow-hidden">
        <div className="bg-accent/20 px-6 py-3 border-b border-white/[0.06]">
          <h3 className="font-heading text-sm font-bold">Builder Equity &amp; Token Split</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left py-2 text-text-secondary font-medium">Stakeholder</th>
                <th className="text-right py-2 text-text-secondary font-medium">Equity</th>
                <th className="text-right py-2 text-text-secondary font-medium">Tokens</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              <tr className="border-b border-white/[0.06] bg-accent/5">
                <td className="py-3 text-accent font-bold">You (Builder)</td>
                <td className="py-3 text-right text-accent font-bold">30\u201350%+</td>
                <td className="py-3 text-right text-accent font-bold">20\u201335%</td>
              </tr>
              <tr className="border-b border-white/[0.06]">
                <td className="py-3">Co-founder</td>
                <td className="py-3 text-right">15\u201325%</td>
                <td className="py-3 text-right">10\u201315%</td>
              </tr>
              <tr className="border-b border-white/[0.06]">
                <td className="py-3">Studio</td>
                <td className="py-3 text-right">15\u201320%</td>
                <td className="py-3 text-right">10\u201315%</td>
              </tr>
              <tr className="border-b border-white/[0.06]">
                <td className="py-3">Contributor Pool</td>
                <td className="py-3 text-right">10\u201315%</td>
                <td className="py-3 text-right">\u2014</td>
              </tr>
              <tr>
                <td className="py-3">Ecosystem / Community</td>
                <td className="py-3 text-right">\u2014</td>
                <td className="py-3 text-right">35\u201350%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
