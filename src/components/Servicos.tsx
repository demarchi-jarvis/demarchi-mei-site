import Link from "next/link";
import { SERVICOS } from "@/lib/data";

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            O que entregamos
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-3 mb-4 leading-tight">
            Serviços de Consultoria de TI para{" "}
            <span className="text-green-600">empresas do Vale do Café</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Cada serviço é executado com o padrão exigido pelo setor financeiro —
            documentado, testado e com SLA claro para o seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICOS.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-200"
              aria-label={`Ver detalhes: ${s.titulo}`}
            >
              <div className="text-4xl mb-4" aria-hidden="true">{s.icone}</div>
              <h3 className="font-jakarta font-bold text-xl text-[#0f172a] mb-2 group-hover:text-green-700 transition-colors">
                {s.titulo}
              </h3>
              <p className="text-slate-500 text-sm font-medium mb-3">{s.subtitulo}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                {s.descricao}
              </p>
              <ul className="space-y-1.5" aria-label="Benefícios">
                {s.beneficios.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-1.5 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all">
                Saiba mais
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
