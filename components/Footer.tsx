"use client";
import { useLocale } from "@/lib/i18n";
import Link from "next/link";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                  <path d="M16 4 L16 10 M16 22 L16 28 M4 16 L10 16 M22 16 L28 16 M7.5 7.5 L11.5 11.5 M20.5 20.5 L24.5 24.5 M7.5 24.5 L11.5 20.5 M20.5 11.5 L24.5 7.5" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="4" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Makarenko<span className="font-normal opacity-80">Reinhold</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-sm">
              {t("footer.description") as string}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Snarveier</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="text-white/70 hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#why-us" className="text-white/70 hover:text-accent transition-colors">Hvorfor velge oss</a></li>
              <li><a href="#process" className="text-white/70 hover:text-accent transition-colors">Slik fungerer det</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-3 text-white/70">
              <li>Notodden, Telemark, Norge</li>
              <li><a href="tel:+4796684393" className="hover:text-accent transition-colors">+47 966 84 393</a></li>
              <li><a href="mailto:annadizhenko@gmail.com" className="hover:text-accent transition-colors">annadizhenko@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Makarenko Reinhold. {t("footer.rights") as string}</p>
          <div className="flex gap-4">
            <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">Personvern</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">Vilkår</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
