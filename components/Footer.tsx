
"use client";
import { useLocale } from "@/lib/i18n";
import { LogoMark } from "./Icons";

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight text-white mb-6">
              <LogoMark className="w-8 h-8 text-accent" />
              <span>Makarenko <span className="font-light">Renhold</span></span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Meny</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">{t("nav.services")}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-accent transition-colors">{t("nav.pricing")}</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-accent transition-colors">{t("nav.portfolio")}</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-accent transition-colors">{t("nav.faq")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li>{t("contact.info.address")}</li>
              <li><a href={`tel:${t("contact.info.phone").replace(/\s/g, '')}`} className="hover:text-accent transition-colors">{t("contact.info.phone")}</a></li>
              <li><a href={`mailto:${t("contact.info.email")}`} className="hover:text-accent transition-colors">{t("contact.info.email")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} Makarenko Renhold. {t("footer.rights")}</p>
          <div className="flex gap-4">
            <span>Org.nr: 933 123 456</span> {/* Placeholder */}
          </div>
        </div>
      </div>
    </footer>
  );
}
