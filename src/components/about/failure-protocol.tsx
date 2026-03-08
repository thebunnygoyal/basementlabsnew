import { Section } from "@/components/layout/section";

const killSystem = [
  { sprint: "S1", trigger: "No viable architecture or co-founder alignment", action: "Project returned to scouting pool" },
  { sprint: "S2", trigger: "MVP fails internal audit or no testnet deployment", action: "Wind-down initiated ($2\u20135K budget)" },
  { sprint: "S3", trigger: "Zero grant interest after 3+ ecosystem pitches", action: "Pivot assessment or graceful shutdown" },
  { sprint: "S4", trigger: "No funding secured by Week 12", action: "IP terms executed, builder retains learnings" },
];

export function FailureProtocol() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">Failure Protocol</h2>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">
          Not every project makes it. We plan for that with clear kill triggers and a $2\u20135K wind-down budget per project.
        </p>
      </div>

      <div className="max-w-3xl mx-auto glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-white/[0.06]">
                <th className="text-left px-6 py-3 font-mono text-accent font-medium">Sprint</th>
                <th className="text-left px-6 py-3 text-text-secondary font-medium">Kill Trigger</th>
                <th className="text-left px-6 py-3 text-text-secondary font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {killSystem.map((row) => (
                <tr key={row.sprint} className="border-b border-white/[0.06] last:border-b-0">
                  <td className="px-6 py-4 font-mono text-accent font-bold">{row.sprint}</td>
                  <td className="px-6 py-4 text-text-secondary">{row.trigger}</td>
                  <td className="px-6 py-4 text-text-primary">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
