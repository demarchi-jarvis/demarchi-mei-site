import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

const experiencias = [
  { empresa: "Itaú", via: "via Stefanini", cargo: "Segurança da Informação", anos: "2022–atual" },
  { empresa: "Rede Globo", via: "", cargo: "Analista de Segurança", anos: "2021–2022" },
  { empresa: "Radix Engenharia", via: "", cargo: "Desenvolvedor .NET", anos: "2020–2021" },
];

const tecnologias = [
  ".NET Core", "C#", "AWS EC2", "AWS Lambda", "RDS/Aurora",
  "Docker", "Kubernetes", "Terraform", "CI/CD", "PostgreSQL",
  "React", "TypeScript", "RabbitMQ", "JWT/IAM", "LGPD",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
              Quem é Antonio Demarchi
            </span>
            <h2 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-3 mb-6 leading-tight">
              O padrão técnico do Itaú, acessível para a sua empresa em{" "}
              <span className="text-green-600">Vassouras e Barra do Piraí</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              Sou Engenheiro de Software com 8 anos de experiência prática construída nas trincheiras das maiores
              corporações do Brasil. Na Stefanini para o Itaú, aprendi que{" "}
              <strong className="text-slate-800">sistemas financeiros críticos não podem falhar</strong> — e trago
              esse mesmo rigor para proteger os sistemas da sua empresa.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Moro e atuo no Vale do Café. Conheço a realidade das PMEs locais: sistemas legados, falta de
              suporte técnico especializado e custos imprevisíveis em nuvem. Meu modelo de{" "}
              <strong className="text-slate-800">parceria técnica mensal fixa (R$&nbsp;1.600/mês)</strong> foi
              desenhado exatamente para resolver isso: você tem um Engenheiro Sênior no time sem pagar CLT.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-150 shadow-md shadow-green-700/20"
            >
              Agendar conversa gratuita
            </a>

            {/* Experiências */}
            <div className="mt-10 space-y-3">
              {experiencias.map((e) => (
                <div
                  key={e.empresa}
                  className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-lg px-4 py-3"
                >
                  <div>
                    <span className="font-semibold text-slate-800 text-sm">{e.empresa}</span>
                    {e.via && <span className="text-slate-400 text-xs"> {e.via}</span>}
                    <div className="text-slate-500 text-xs">{e.cargo}</div>
                  </div>
                  <span className="text-slate-400 text-xs font-mono">{e.anos}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tecnologias */}
          <div>
            <div className="bg-[#0f172a] rounded-2xl p-8 shadow-xl">
              <h3 className="font-jakarta text-white font-bold text-lg mb-6">
                Stack Técnica Completa
              </h3>
              <div className="flex flex-wrap gap-2">
                {tecnologias.map((t) => (
                  <span
                    key={t}
                    className="bg-slate-700/60 border border-slate-600 text-slate-200 text-xs font-mono px-3 py-1.5 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { n: "8+", l: "anos de experiência" },
                  { n: "100+", l: "projetos entregues" },
                  { n: "3", l: "formações completas" },
                  { n: "5", l: "grandes corporações" },
                ].map((s) => (
                  <div key={s.l} className="bg-slate-800 rounded-xl p-4 text-center">
                    <div className="font-jakarta text-green-400 font-bold text-2xl">{s.n}</div>
                    <div className="text-slate-400 text-xs mt-1">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-green-900/30 border border-green-700/40 rounded-xl p-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  <span className="font-semibold">Pós-Tech FIAP 2025–2026</span> em DevOps &amp; Arquitetura Cloud
                  — AWS, Kubernetes, IaC e Infraestrutura Escalável. Sempre atualizado com o que há de mais
                  avançado no mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
