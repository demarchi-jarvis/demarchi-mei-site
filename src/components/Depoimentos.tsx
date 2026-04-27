import { DEPOIMENTOS } from "@/lib/data";

export default function Depoimentos() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Resultados reais
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-3 mb-4">
            O que dizem os{" "}
            <span className="text-green-600">parceiros da região</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((d) => (
            <figure
              key={d.nome}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4" aria-label={`${d.estrelas} de 5 estrelas`}>
                {Array.from({ length: d.estrelas }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote>
                <p className="text-slate-600 text-sm leading-relaxed italic mb-5">
                  &ldquo;{d.texto}&rdquo;
                </p>
              </blockquote>
              <figcaption>
                <div className="font-semibold text-slate-800 text-sm">{d.nome}</div>
                <div className="text-slate-400 text-xs mt-0.5">{d.empresa}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
