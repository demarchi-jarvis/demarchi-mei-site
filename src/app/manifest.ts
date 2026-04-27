import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Demarchi MEI — Consultoria de TI",
    short_name: "Demarchi TI",
    description:
      "Consultoria de TI especializada em Cloud AWS, .NET e DevOps para empresas em Vassouras e Barra do Piraí.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#16a34a",
    orientation: "portrait",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    categories: ["business", "productivity"],
    lang: "pt-BR",
  };
}
