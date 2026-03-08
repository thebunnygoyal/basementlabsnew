import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/contact/contact-form";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Github, Send, Twitter, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Basement Labs",
  description: "Get in touch \u2014 whether you're a builder with an idea or an ecosystem looking for quality projects.",
};

const iconMap: Record<string, React.ReactNode> = {
  twitter: <Twitter size={20} />,
  github: <Github size={20} />,
  send: <Send size={20} />,
  discord: <ExternalLink size={20} />,
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-32">
        <div className="text-center mb-12">
          <p className="text-sm text-accent tracking-widest uppercase mb-4 font-medium">Contact</p>
          <h1 className="font-heading text-display-mobile md:text-display">Get in Touch</h1>
          <p className="mt-4 text-text-secondary max-w-text mx-auto">
            Whether you\u2019re a builder with a hackathon MVP or an ecosystem looking for quality projects, we\u2019d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-6">
              <h3 className="font-heading text-base font-bold mb-4">Community</h3>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors"
                      aria-label={social.label}
                    >
                      {iconMap[social.icon]}
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="font-heading text-base font-bold mb-2">Direct Contact</h3>
              <p className="text-sm text-text-secondary">
                For urgent inquiries, email us at
              </p>
              <a
                href="mailto:hello@basementlabs.xyz"
                className="text-sm text-accent hover:underline"
              >
                hello@basementlabs.xyz
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
