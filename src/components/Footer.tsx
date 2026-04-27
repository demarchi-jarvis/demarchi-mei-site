import Link from "next/link";
import { SERVICOS, CIDADES, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#050f1c] text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-jakarta font-bold text-white text-xl mb-3">
              Demarchi<span className="text-green-400">.</span>tec
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Consultoria de TI de alto nível para PMEs do Vale do Café.
              Tecnologia corporativa com presença local.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Serviços */}
          <nav aria-label="Serviços">
            <h3 className="font-semibold text-white text-sm mb-4">Serviços</h3>
            <ul className="space-y-2.5">
              {SERVICOS.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicos/${s.slug}`} className="text-slate-500 hover:text-white text-sm transition-colors">
                    {s.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Localidades */}
          <nav aria-label="Localidades atendidas">
            <h3 className="font-semibold text-white text-sm mb-4">Localidades</h3>
            <ul className="space-y-2.5">
              {CIDADES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/consultoria-ti-${c.slug}`} className="text-slate-500 hover:text-white text-sm transition-colors">
                    Consultoria de TI em {c.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <address className="not-italic" aria-label="Contato">
            <h3 className="font-semibold text-white text-sm mb-4">Contato</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+5524998435335" className="text-slate-500 hover:text-white transition-colors">
                  (24) 99843-5335
                </a>
              </li>
              <li>
                <a href="mailto:contato@demarchi.tec.br" className="text-slate-500 hover:text-white transition-colors">
                  contato@demarchi.tec.br
                </a>
              </li>
              <li className="text-slate-500">Vassouras, RJ — Vale do Café</li>
              <li className="pt-2">
                <a
                  href="https://linkedin.com/in/demarchi1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Demarchi MEI — CNPJ em processo de abertura. Todos os direitos reservados.</p>
          <p>
            Consultoria de TI em Vassouras e Barra do Piraí · Vale do Café · Sul Fluminense · RJ
          </p>
        </div>
      </div>
    </footer>
  );
}
