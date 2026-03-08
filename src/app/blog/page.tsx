import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { ArticleCard } from "@/components/blog/article-card";

export const metadata: Metadata = {
  title: "Blog \u2014 Basement Labs Updates & Insights",
  description: "Thought leadership, announcements, and recaps from the Basement Labs venture studio.",
};

const placeholderArticles = [
  {
    title: "Introducing the Basement Sprint System",
    excerpt: "How we take hackathon MVPs from \u22121 to 0 in 12 weeks with a structured 4-sprint process.",
    category: "announcement" as const,
    publishedAt: "2026-02-15",
    slug: "introducing-sprint-system",
  },
  {
    title: "Why Grant-First Beats VC-First for Builder Protocols",
    excerpt: "The economics of grant funding vs equity rounds for early-stage Web3 projects \u2014 and why we chose grants.",
    category: "thought-leadership" as const,
    publishedAt: "2026-02-01",
    slug: "grant-first-vs-vc-first",
  },
  {
    title: "Q1 2026 Cohort Recap: 3 Projects, 2 Grants, 1 Graduation",
    excerpt: "A look back at our first quarter \u2014 what shipped, what didn\u2019t, and what we learned.",
    category: "recap" as const,
    publishedAt: "2026-03-01",
    slug: "q1-2026-recap",
  },
];

export default function BlogPage() {
  return (
    <Section className="pt-32">
      <div className="text-center mb-12">
        <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">Blog</p>
        <h1 className="font-heading text-display-mobile md:text-display">Updates & Insights</h1>
        <p className="mt-4 text-text-secondary max-w-text mx-auto">
          Thought leadership, announcements, and recaps from the studio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {placeholderArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
}
