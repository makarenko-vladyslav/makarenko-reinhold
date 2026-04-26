"use client";
import { useLocale } from "@/lib/i18n";
import { LogoMark } from "./Icons";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-accent text-white">
                <LogoMark className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Makarenko<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Tjenester</h4>
            <ul className="space-y-4">
              {["Standard Vask", "Hovedrengjøring", "Flyttevask", "Vindusvask"].map((item, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/60 hover:text-accent transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Selskap */}
          <div>
            <h4 className="font-bold text-lg mb-6">Selskap</h4>
            <ul className="space-y-4">
              {["Om Oss", "Priser", "Anmeldelser", "Kontakt"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>{t("contact.info.address")}</li>
              <li>{t("contact.info.phone")}</li>
              <li>{t("contact.info.email")}</li>
              <li className="pt-2 text-accent">{t("contact.info.hours")}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Makarenko Reinhold. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Personvern</a>
            <a href="#" className="hover:text-white transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
