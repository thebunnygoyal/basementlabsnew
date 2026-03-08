import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://basementlabs.xyz";

  const staticPages = [
    "",
    "/about",
    "/projects",
    "/for-builders",
    "/for-ecosystems",
    "/blog",
    "/contact",
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
