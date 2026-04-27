import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { SITE_URL } from "@/lib/data";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { UtmTracker } from "@/components/UtmTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Demarchi MEI | Consultoria de TI em Vassouras e Barra do Piraí",
    template: "%s | Demarchi MEI",
  },
  description:
    "Consultoria de TI especializada em Cloud AWS, .NET e DevOps para empresas em Vassouras, Barra do Piraí e Vale do Café. Antonio Demarchi — ex-Itaú, Globo, 8 anos de experiência. Diagnóstico gratuito.",
  keywords: [
    "consultoria de TI Vassouras",
    "consultoria de TI Barra do Piraí",
    "especialista AWS Vassouras",
    "suporte TI empresas Vale do Café",
    "desenvolvimento .NET Sul Fluminense",
    "DevOps AWS Vassouras RJ",
    "segurança de dados LGPD",
    "Demarchi MEI",
  ],
  authors: [{ name: "Antonio Demarchi", url: SITE_URL }],
  creator: "Antonio Demarchi",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Demarchi MEI — Consultoria de TI",
    title: "Demarchi MEI | Consultoria de TI em Vassouras e Barra do Piraí",
    description:
      "Tecnologia de alto nível para PMEs do Vale do Café. Cloud AWS, .NET, DevOps e Segurança. Diagnóstico gratuito.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Demarchi MEI Consultoria de TI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demarchi MEI | Consultoria de TI Vassouras e Barra do Piraí",
    description: "Tecnologia corporativa acessível para PMEs do Vale do Café.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": SITE_URL,
  name: "Demarchi MEI — Consultoria de TI",
  alternateName: "Demarchi MEI",
  description:
    "Consultoria especializada em Cloud AWS, desenvolvimento .NET, DevOps e Segurança de Dados para pequenas e médias empresas do Vale do Café.",
  url: SITE_URL,
  telephone: "+55-24-99843-5335",
  email: "contato@demarchi.tec.br",
  founder: {
    "@type": "Person",
    name: "Antonio Demarchi",
    jobTitle: "Engenheiro de Software Sênior",
    sameAs: [
      "https://linkedin.com/in/demarchi1",
      "https://github.com/DemarchiWorking",
      "https://portfoliodemarchi.com.br/",
    ],
    knowsAbout: [
      ".NET Core", "C#", "Amazon AWS", "Cloud Computing", "DevOps",
      "Kubernetes", "Docker", "Terraform", "CI/CD", "Segurança da Informação",
      "LGPD", "Microsserviços", "RabbitMQ", "PostgreSQL", "Angular", "React",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vassouras",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -22.4033,
    longitude: -43.6622,
  },
  areaServed: [
    { "@type": "City", name: "Vassouras", containedInPlace: { "@type": "State", name: "Rio de Janeiro" } },
    { "@type": "City", name: "Barra do Piraí", containedInPlace: { "@type": "State", name: "Rio de Janeiro" } },
    { "@type": "City", name: "Mendes", containedInPlace: { "@type": "State", name: "Rio de Janeiro" } },
    { "@type": "City", name: "Paulo de Frontin", containedInPlace: { "@type": "State", name: "Rio de Janeiro" } },
    { "@type": "AdministrativeArea", name: "Vale do Café" },
    { "@type": "AdministrativeArea", name: "Sul Fluminense" },
  ],
  priceRange: "R$ 1.600/mês",
  serviceType: [
    "Consultoria de TI", "Cloud Computing AWS", "Desenvolvimento de Software .NET",
    "DevOps e Automação", "Segurança de Dados", "LGPD"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Consultoria de TI",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Computing AWS" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desenvolvimento Backend .NET" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DevOps e Automação AWS" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Segurança de Dados e LGPD" } },
    ],
  },
  sameAs: [
    "https://linkedin.com/in/demarchi1",
    "https://github.com/DemarchiWorking",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-XXXXXXX"} />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter antialiased bg-white text-slate-800 min-h-screen flex flex-col">
        <UtmTracker />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
