import Link from "next/link";
import { CIDADES } from "@/lib/data";

export default function Localidades() {
  return (
    <section id="localidades" className="py-20 sm:py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">
            Onde atuamos
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Consultoria de TI no{" "}
            <span className="text-green-400">Sul Fluminense</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Atendimento presencial e remoto para empresas em toda a região do Vale do Café.
            Visitas técnicas sem custo adicional para parceiros com contrato ativo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CIDADES.map((c) => (
            <Link
              key={c.slug}
              href={`/consultoria-ti-${c.slug}`}
              className="group bg-slate-800/60 border border-slate-700 hover:border-green-500/50 rounded-2xl p-6 text-center transition-all duration-200 hover:bg-slate-800"
              aria-label={`Consultoria de TI em ${c.nome}, ${c.estado}`}
            >
              <div className="text-3xl mb-3" aria-hidden="true">📍</div>
              <h3 className="font-jakarta font-bold text-white text-lg mb-1 group-hover:text-green-400 transition-colors">
                {c.nome}
              </h3>
              <div className="text-slate-400 text-xs mb-3">{c.estado} · Vale do Café</div>
              <p className="text-slate-400 text-xs leading-relaxed">{c.descricao}</p>
              <div className="mt-4 text-green-400 text-xs font-semibold group-hover:underline">
                Ver consultoria local →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
