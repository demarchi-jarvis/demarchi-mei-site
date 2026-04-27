import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-600/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-600/30 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            Consultoria de TI · Vassouras e Barra do Piraí
          </div>

          <h1 className="font-jakarta text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            Tecnologia de{" "}
            <span className="text-green-400">grande empresa</span>
            {" "}para o seu negócio no{" "}
            <span className="text-green-400">Vale do Café</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
            Antonio Demarchi — Engenheiro de Software com passagem por{" "}
            <strong className="text-white">Itaú, Rede Globo e nstech</strong> — traz o
            padrão técnico das maiores corporações do Brasil para sua empresa em
            Vassouras, Barra do Piraí e região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg shadow-green-700/30 transition-all duration-200 hover:shadow-green-500/40 hover:scale-105 active:scale-100"
              aria-label="Solicitar diagnóstico gratuito de TI via WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.528 5.855L.057 23.882a.5.5 0 00.61.61l6.03-1.47A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.003-1.374l-.358-.214-3.713.904.924-3.63-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Solicitar Diagnóstico Gratuito
            </a>

            <Link
              href="/#servicos"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200"
            >
              Ver Serviços
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 mt-10 pt-10 border-t border-slate-700/60">
            {[
              { valor: "8+", label: "Anos de Experiência" },
              { valor: "Itaú · Globo", label: "Empresas Referência" },
              { valor: "100+", label: "Projetos Entregues" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-white font-jakarta font-bold text-xl">{s.valor}</div>
                <div className="text-slate-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="hidden md:block" aria-hidden="true">
          <div className="relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-slate-400 text-xs font-mono">diagnóstico.sh</span>
            </div>
            <pre className="text-sm font-mono text-left leading-relaxed">
              <code>
                <span className="text-slate-500">$ </span>
                <span className="text-green-400">demarchi</span>
                <span className="text-white"> audit --infra aws</span>
                {"\n\n"}
                <span className="text-slate-400">✓ </span>
                <span className="text-white">Analisando 47 recursos AWS...</span>
                {"\n"}
                <span className="text-slate-400">✓ </span>
                <span className="text-white">Verificando custos mensais...</span>
                {"\n"}
                <span className="text-slate-400">✓ </span>
                <span className="text-white">Auditando permissões IAM...</span>
                {"\n"}
                <span className="text-slate-400">✓ </span>
                <span className="text-white">Checando vulnerabilidades...</span>
                {"\n\n"}
                <span className="text-yellow-400">⚠ </span>
                <span className="text-white">Economia potencial: </span>
                <span className="text-green-400 font-bold">R$ 847/mês</span>
                {"\n"}
                <span className="text-red-400">✗ </span>
                <span className="text-white">3 falhas de segurança críticas</span>
                {"\n\n"}
                <span className="text-slate-400">Relatório enviado para seu e-mail.</span>
                {"\n"}
                <span className="text-green-400">Diagnóstico concluído. </span>
                <span className="text-slate-400 animate-pulse">▊</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
