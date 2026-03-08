import Link from "next/link";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface Article {
  title: string;
  excerpt: string;
  category: "announcement" | "thought-leadership" | "recap";
  publishedAt: string;
  slug: string;
}

const categoryColors: Record<string, "active" | "graduated" | "pipeline"> = {
  announcement: "active",
  "thought-leadership": "graduated",
  recap: "pipeline",
};

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.slug}`}>
      <GlassCard className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <Badge variant={categoryColors[article.category] || "default"}>
            {article.category.replace("-", " ")}
          </Badge>
          <span className="text-xs text-text-secondary">
            {formatDate(article.publishedAt)}
          </span>
        </div>
        <h3 className="font-heading text-base font-bold mb-2">{article.title}</h3>
        <p className="text-sm text-text-secondary flex-1">{article.excerpt}</p>
      </GlassCard>
    </Link>
  );
}
