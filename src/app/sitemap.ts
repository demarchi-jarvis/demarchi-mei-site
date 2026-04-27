import type { MetadataRoute } from "next";
import { SERVICOS, CIDADES, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicoUrls = SERVICOS.map((s) => ({
    url: `${SITE_URL}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const cidadeUrls = CIDADES.map((c) => ({
    url: `${SITE_URL}/consultoria-ti-${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }));

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...cidadeUrls,
    ...servicoUrls,
  ];
}
