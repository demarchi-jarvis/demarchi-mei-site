import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { SERVICOS, SITE_URL, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";
import type { CIDADES } from "@/lib/data";

type Cidade = (typeof CIDADES)[number];

export function buildMetadata(cidade: Cidade): Metadata {
  return {
    title: `Consultoria de TI em ${cidade.nome} | Demarchi MEI`,
    description: `Especialista em Cloud AWS, .NET e DevOps para empresas em ${cidade.nome}, ${cidade.estado}. ${cidade.descricao} Antonio Demarchi — ex-Itaú, Rede Globo. Diagnóstico gratuito.`,
    keywords: [
      `consultoria de TI ${cidade.nome}`,
      `especialista AWS ${cidade.nome}`,
      `suporte TI empresas ${cidade.nome}`,
      `desenvolvimento software ${cidade.nome}`,
      `segurança de dados ${cidade.nome} ${cidade.estado}`,
      `DevOps ${cidade.nome} Sul Fluminense`,
    ],
    alternates: { canonical: `${SITE_URL}/consultoria-ti-${cidade.slug}` },
    openGraph: {
      title: `Consultoria de TI em ${cidade.nome} — Demarchi MEI`,
      description: `Cloud AWS, .NET, DevOps e Segurança para empresas em ${cidade.nome}. Atendimento local. Diagnóstico gratuito.`,
      url: `${SITE_URL}/consultoria-ti-${cidade.slug}`,
    },
  };
}

export default function CidadePageTemplate({ cidade }: { cidade: Cidade }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Demarchi MEI — Consultoria de TI em ${cidade.nome}`,
    description: `Consultoria especializada em Cloud AWS, .NET, DevOps e Segurança de Dados para empresas em ${cidade.nome}, ${cidade.estado}.`,
    url: `${SITE_URL}/consultoria-ti-${cidade.slug}`,
    telephone: "+55-24-99843-5335",
    address: {
      "@type": "PostalAddress",
      addressLocality: cidade.nome,
      addressRegion: cidade.estado,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: cidade.lat,
      longitude: cidade.lng,
    },
    areaServed: [
      cidade.nome,
      ...cidade.bairros.map((b) => `${b}, ${cidade.nome}`),
    ],
    priceRange: "R$ 1.600/mês",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0f172a] pt-28 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Início
            </Link>

            <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-600/30 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              📍 {cidade.referencia}
            </div>

            <h1 className="font-jakarta text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Consultoria de TI em{" "}
              <span className="text-green-400">{cidade.nome}</span>
              {" "}— Padrão Corporativo para PMEs do Vale do Café
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8">
              {cidade.descricao} Antonio Demarchi, Engenheiro de Software com experiência no Itaú
              e Rede Globo, atende presencialmente e remotamente empresas em{" "}
              {cidade.bairros.join(", ")} e toda a região.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all duration-150"
            >
              Diagnóstico Gratuito para empresa em {cidade.nome}
            </a>
          </div>
        </section>

        {/* Serviços para a cidade */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-jakarta text-2xl font-bold text-[#0f172a] mb-3">
              Serviços disponíveis em {cidade.nome}
            </h2>
            <p className="text-slate-500 mb-8">
              Todos os serviços com atendimento presencial — sem custo adicional de deslocamento
              para parceiros com contrato ativo na região.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {SERVICOS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicos/${s.slug}`}
                  className="group flex items-start gap-4 bg-slate-50 hover:bg-white border border-slate-100 hover:border-green-400 rounded-2xl p-6 transition-all duration-150"
                  aria-label={`${s.titulo} em ${cidade.nome}`}
                >
                  <div className="text-3xl shrink-0" aria-hidden="true">{s.icone}</div>
                  <div>
                    <h3 className="font-jakarta font-bold text-[#0f172a] text-base mb-1 group-hover:text-green-700 transition-colors">
                      {s.titulo} em {cidade.nome}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{s.subtitulo}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Por que contratar local */}
        <section className="py-16 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-jakarta text-2xl font-bold text-[#0f172a] mb-8">
              Por que contratar um consultor de TI{" "}
              <span className="text-green-600">em {cidade.nome}</span>?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icone: "⚡",
                  titulo: "Resposta imediata em emergências",
                  texto: `Quando seu sistema cai em pleno horário comercial, um consultor baseado em ${cidade.nome} pode estar no seu escritório em minutos.`,
                },
                {
                  icone: "🤝",
                  titulo: "Conhece a realidade local",
                  texto: `Entendo as necessidades específicas das empresas do Vale do Café: sazonalidade, perfil do cliente, fornecedores regionais e restrições orçamentárias das PMEs.`,
                },
                {
                  icone: "💰",
                  titulo: "Sem taxa de deslocamento",
                  texto: `Parceiros com contrato ativo recebem visitas técnicas sem custo adicional em ${cidade.nome} e municípios vizinhos.`,
                },
              ].map((i) => (
                <div key={i.titulo} className="bg-white rounded-2xl p-6 border border-slate-100">
                  <div className="text-3xl mb-3" aria-hidden="true">{i.icone}</div>
                  <h3 className="font-jakarta font-bold text-[#0f172a] text-base mb-2">{i.titulo}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{i.texto}</p>
                </div>
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
