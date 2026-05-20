"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6L6 14v10a2 2 0 002 2h16a2 2 0 002-2V14L16 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M16 14l-3 3m0 0l3 3m-3-3h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="12" r="1" fill="currentColor"/>
                  <circle cx="23" cy="15" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Makarenko<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4 mt-8">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Snarveier</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/60 hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="text-white/60 hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#trust" className="text-white/60 hover:text-accent transition-colors">Om Oss</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-3">
              <li className="text-white/60">{t('contact.address')}</li>
              <li><a href={`tel:${t('contact.phoneVal').replace(/\s/g, '')}`} className="text-white/60 hover:text-accent transition-colors">{t('contact.phoneVal')}</a></li>
              <li><a href={`mailto:${t('contact.emailVal')}`} className="text-white/60 hover:text-accent transition-colors">{t('contact.emailVal')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {year} Makarenko Reinhold. {t('footer.rights')}</p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Personvern</a>
            <a href="#" className="hover:text-white transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
