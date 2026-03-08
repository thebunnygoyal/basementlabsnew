import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <Section className="pt-32">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <Badge variant="default" className="mb-4">Article</Badge>
        <h1 className="font-heading text-display-mobile md:text-h2 mb-4">
          {params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </h1>
        <p className="text-text-secondary text-body-lg mb-8">
          This article will be powered by Sanity CMS. Connect your Sanity project and create content to see it here.
        </p>

        <div className="glass rounded-xl p-8 text-center">
          <p className="text-text-secondary">\ud83d\udcdd Content from Sanity CMS will render here.</p>
          <p className="text-sm text-text-secondary mt-2">Set up your Sanity project and add articles to get started.</p>
        </div>
      </div>
    </Section>
  );
}
