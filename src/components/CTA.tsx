import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

export default function CTA() {
  return (
    <section
      id="contato"
      className="py-20 sm:py-28 bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden"
      aria-label="Solicitar diagnóstico gratuito"
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-100 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" aria-hidden="true" />
          Sem compromisso · 100% gratuito
        </div>

        <h2 className="font-jakarta text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
          Descubra quanto sua empresa pode{" "}
          <span className="text-green-300">economizar em TI</span>{" "}
          ainda este mês
        </h2>

        <p className="text-green-100 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
          O Diagnóstico Gratuito é uma sessão de 45 minutos onde analisamos sua infraestrutura
          atual, identificamos riscos e calculamos o potencial de economia. Sem enrolação —
          você sai com um relatório real, mesmo que não contrate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-green-800 font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:bg-green-50 hover:scale-105 active:scale-100 transition-all duration-200"
            aria-label="Solicitar diagnóstico gratuito de TI via WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0 text-green-600" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.528 5.855L.057 23.882a.5.5 0 00.61.61l6.03-1.47A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.003-1.374l-.358-.214-3.713.904.924-3.63-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Quero meu Diagnóstico Gratuito
          </a>

          <a
            href="tel:+5524998435335"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200"
            aria-label="Ligar para Antonio Demarchi"
          >
            📞 (24) 99843-5335
          </a>
        </div>

        <p className="text-green-200/60 text-xs mt-6">
          Respondemos em até 2 horas em dias úteis · Atendimento em Vassouras, Barra do Piraí e região
        </p>
      </div>
    </section>
  );
}
