"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center text-white">
                <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M16 6L18.5 13.5L26 16L18.5 18.5L16 26L13.5 18.5L6 16L13.5 13.5L16 6Z" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">Makarenko</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t("footer.links")}</h4>
            <ul className="space-y-3">
              {["services", "calculator", "about", "reviews"].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-white/60 hover:text-accent transition-colors">
                    {t(`nav.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Personvernerklæring</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Salgsbetingelser</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">HMS-policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm">
            © {year} Makarenko Reinhold. {t("footer.rights")}
          </div>
          <div className="text-white/40 text-sm">
            Org.nr: 932 849 201
          </div>
        </div>
      </div>
    </footer>
  );
}