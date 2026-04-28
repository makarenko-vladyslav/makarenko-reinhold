
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-primary text-bg-white pt-20 pb-10 border-t border-bg-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-bg-white text-primary flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16" />
                  <path d="M16 8L16 16L21.6569 21.6569" />
                  <circle cx="22" cy="10" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Makarenko<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-bg-white/60 mb-6 max-w-xs">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <a href="#" className="w-10 h-10 rounded-full bg-bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('nav.services')}</h4>
            <ul className="space-y-3 text-bg-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Flyttevask</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Regelmessig vask</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Kontorvask</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Visningsvask</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Selskap</h4>
            <ul className="space-y-3 text-bg-white/60">
              <li><a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">{t('nav.calculator')}</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">{t('nav.faq')}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Badges */}
          <div>
            <h4 className="font-bold text-lg mb-6">Sertifiseringer</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-bg-white/5 p-3 rounded-xl border border-bg-white/10">
                <div className="w-10 h-10 bg-bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">HMS</span>
                </div>
                <span className="text-sm font-medium">Godkjent HMS-kort</span>
              </div>
              <div className="flex items-center gap-3 bg-bg-white/5 p-3 rounded-xl border border-bg-white/10">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-bg-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <span className="text-sm font-medium">Svanemerket Bedrift</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-bg-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-bg-white/40">
          <p>© {new Date().getFullYear()} Makarenko Reinhold. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bg-white transition-colors">Personvern</a>
            <a href="#" className="hover:text-bg-white transition-colors">Vilkår for Garanti</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
