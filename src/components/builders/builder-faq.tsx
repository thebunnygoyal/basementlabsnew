"use client";

import { Section } from "@/components/layout/section";
import { FAQ_ITEMS } from "@/lib/constants";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function BuilderFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2-mobile md:text-h2">FAQs</h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-2">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="glass rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="font-heading text-sm font-medium pr-4">{item.question}</span>
              <ChevronDown
                size={18}
                className={cn(
                  "text-text-secondary shrink-0 transition-transform duration-200",
                  openIndex === i && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 pb-4 text-sm text-text-secondary">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
