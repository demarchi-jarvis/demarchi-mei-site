"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#localidades", label: "Localidades" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#0f172a]/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Demarchi MEI — página inicial">
          <span className="text-white font-jakarta font-bold text-lg leading-none">
            Demarchi<span className="text-green-400">.</span>tec
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150"
          aria-label="Solicitar diagnóstico gratuito via WhatsApp"
        >
          Diagnóstico Gratuito
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-200 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-slate-700 px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-white font-medium block py-1"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-4 py-3 rounded-lg w-full"
          >
            Diagnóstico Gratuito
          </a>
        </div>
      )}
    </header>
  );
}
