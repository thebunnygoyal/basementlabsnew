import { Section } from "@/components/layout/section";

export function Economics() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">The Economics</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">
          Clean, transparent splits. No ambiguity. Builders keep the majority.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Equity Table */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="bg-accent/20 px-6 py-3 border-b border-white/[0.06]">
            <h3 className="font-heading text-sm font-bold">Equity Split per Spinout</h3>
          </div>
          <div className="p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-2 text-text-secondary font-medium">Stakeholder</th>
                  <th className="text-right py-2 text-text-secondary font-medium">Share</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 text-text-primary">Builder(s)</td>
                  <td className="py-3 text-right text-accent font-bold">30\u201350%+</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 text-text-primary">Co-founder (Founding Member)</td>
                  <td className="py-3 text-right">15\u201325%</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 text-text-primary">Studio (Basement Labs)</td>
                  <td className="py-3 text-right">15\u201320%</td>
                </tr>
                <tr>
                  <td className="py-3 text-text-primary">Contributor Pool</td>
                  <td className="py-3 text-right">10\u201315%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Token Table */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="bg-accent/20 px-6 py-3 border-b border-white/[0.06]">
            <h3 className="font-heading text-sm font-bold">Token Allocation per Spinout</h3>
          </div>
          <div className="p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-2 text-text-secondary font-medium">Allocation</th>
                  <th className="text-right py-2 text-text-secondary font-medium">Share</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 text-text-primary">Builder(s)</td>
                  <td className="py-3 text-right text-accent font-bold">20\u201335%</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 text-text-primary">Founding Network</td>
                  <td className="py-3 text-right">10\u201315%</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 text-text-primary">Studio Treasury</td>
                  <td className="py-3 text-right">10\u201315%</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 text-text-primary">Ecosystem / Grants</td>
                  <td className="py-3 text-right">20\u201330%</td>
                </tr>
                <tr>
                  <td className="py-3 text-text-primary">Community / LP</td>
                  <td className="py-3 text-right">15\u201320%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}
