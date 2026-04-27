const valores = [
  {
    icone: "🤝",
    titulo: "Parceria Real",
    texto:
      "Não somos um fornecedor que some após a venda. Somos o parceiro técnico que participa das decisões estratégicas do seu negócio com total transparência.",
  },
  {
    icone: "⚡",
    titulo: "Entrega Disciplinada",
    texto:
      "Documentação completa, estimativas honestas e comprometimento com prazo. O mesmo nível de exigência aplicado nos projetos do Itaú, para a sua empresa.",
  },
  {
    icone: "🎯",
    titulo: "Foco em ROI",
    texto:
      "Toda decisão técnica é justificada pelo retorno financeiro. Não implementamos tecnologia por modismo — implementamos o que gera resultado mensurável.",
  },
  {
    icone: "🔐",
    titulo: "Segurança em Primeiro Lugar",
    texto:
      "Experiência em Blue Team na Globo. Seus dados e sistemas protegidos com os controles usados por empresas de alta criticidade — e conformidade com a LGPD.",
  },
  {
    icone: "🌱",
    titulo: "Evolução Contínua",
    texto:
      "Pós-Tech FIAP em DevOps & Cloud 2025–2026. Seu parceiro está sempre na fronteira do conhecimento técnico, trazendo inovação sem colocar o seu sistema em risco.",
  },
  {
    icone: "📍",
    titulo: "Presença Local",
    texto:
      "Baseado em Vassouras, conheço a realidade das empresas do Vale do Café. Atendimento presencial em Vassouras, Barra do Piraí, Mendes e Paulo de Frontin.",
  },
];

export default function Valores() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
            Nossa cultura
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-3 mb-4 leading-tight">
            Por que empresas do Vale do Café{" "}
            <span className="text-green-600">escolhem a Demarchi MEI</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Os pilares que guiam cada projeto e cada relacionamento com os nossos parceiros.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((v) => (
            <div
              key={v.titulo}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-200 hover:bg-green-50/30 transition-colors duration-200"
            >
              <div className="text-3xl mb-4" aria-hidden="true">{v.icone}</div>
              <h3 className="font-jakarta font-bold text-[#0f172a] text-lg mb-2">{v.titulo}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{v.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
