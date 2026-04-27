import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { SERVICOS, SITE_URL, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

export const revalidate = 60;

export async function generateStaticParams() {
  return SERVICOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const servico = SERVICOS.find((s) => s.slug === slug);
  if (!servico) return {};

  return {
    title: `${servico.titulo} | Demarchi MEI`,
    description: servico.descricao,
    keywords: servico.palavrasChave,
    alternates: { canonical: `${SITE_URL}/servicos/${slug}` },
    openGraph: {
      title: `${servico.titulo} — Consultoria de TI no Vale do Café`,
      description: servico.descricao,
      url: `${SITE_URL}/servicos/${slug}`,
    },
  };
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servico = SERVICOS.find((s) => s.slug === slug);
  if (!servico) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servico.titulo,
    description: servico.descricao,
    provider: {
      "@type": "ProfessionalService",
      name: "Demarchi MEI",
      url: SITE_URL,
    },
    areaServed: ["Vassouras", "Barra do Piraí", "Vale do Café", "Sul Fluminense"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero do serviço */}
        <section className="bg-[#0f172a] pt-28 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/#servicos" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Voltar aos serviços
            </Link>
            <div className="text-5xl mb-5" aria-hidden="true">{servico.icone}</div>
            <h1 className="font-jakarta text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              {servico.titulo}
            </h1>
            <p className="text-green-400 text-xl font-medium mb-6">{servico.subtitulo}</p>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">{servico.descricao}</p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all duration-150"
            >
              Solicitar Diagnóstico Gratuito
            </a>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-jakarta text-2xl font-bold text-[#0f172a] mb-8">
              O que está incluído
            </h2>
            <ul className="grid sm:grid-cols-2 gap-5">
              {servico.beneficios.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 bg-slate-50 rounded-xl p-5 border border-slate-100"
                >
                  <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-slate-700 font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Outros serviços */}
        <section className="py-16 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-jakarta text-xl font-bold text-[#0f172a] mb-6">
              Outros serviços disponíveis
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {SERVICOS.filter((s) => s.slug !== slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicos/${s.slug}`}
                  className="bg-white border border-slate-200 hover:border-green-400 rounded-xl p-5 transition-all duration-150 group"
                >
                  <div className="text-2xl mb-2" aria-hidden="true">{s.icone}</div>
                  <div className="font-semibold text-slate-800 text-sm group-hover:text-green-700 transition-colors">{s.titulo}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
