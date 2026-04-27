import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/servicos/", "/consultoria-ti-"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
