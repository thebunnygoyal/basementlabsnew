import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { ValueProps } from "@/components/ecosystems/value-props";
import { GrantAlignment } from "@/components/ecosystems/grant-alignment";
import { PartnerLogos } from "@/components/ecosystems/partner-logos";
import { EcosystemMetrics } from "@/components/ecosystems/ecosystem-metrics";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Ecosystems \u2014 Partner With Basement Labs",
  description: "Higher grant ROI through studio-backed, pre-vetted Web3 projects with structured 3-month delivery.",
};

export default function ForEcosystemsPage() {
  return (
    <>
      <Section className="pt-32">
        <div className="text-center mb-12">
          <p className="text-sm text-accent tracking-widest uppercase mb-4 font-medium">For Ecosystems</p>
          <h1 className="font-heading text-display-mobile md:text-display">Partner With Us</h1>
          <p className="mt-4 text-text-secondary max-w-text mx-auto text-body-lg">
            Stop dispersing grants across hundreds of hackathon projects that will never scale. Get pre-vetted, studio-backed builders with structured delivery.
          </p>
        </div>
      </Section>
      <ValueProps />
      <div className="gradient-separator" />
      <GrantAlignment />
      <div className="gradient-separator" />
      <EcosystemMetrics />
      <div className="gradient-separator" />
      <PartnerLogos />
      <div className="gradient-separator" />
      <Section>
        <div className="text-center">
          <h2 className="font-heading text-h2-mobile md:text-h2 mb-4">Ready to Partner?</h2>
          <p className="text-text-secondary mb-8 max-w-text mx-auto">
            Let\u2019s discuss how Basement Labs can integrate with your grant program and deliver higher ROI on your ecosystem investments.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-accent-dark px-8 text-white font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(43,79,154,0.4)]"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </>
  );
}
