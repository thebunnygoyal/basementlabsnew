export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  chain: string;
  status: "active" | "graduated" | "pipeline";
  description: string;
  logo?: any;
  links?: { label: string; url: string }[];
  featured?: boolean;
}

export interface SanityArticle {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body?: any[];
  category: "announcement" | "thought-leadership" | "recap";
  publishedAt: string;
  featuredImage?: any;
  author?: { name: string; avatar?: any; bio?: string };
}
