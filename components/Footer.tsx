
"use client";
import { useLocale } from "@/lib/i18n";
import { LogoMark } from "./Shared";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-primary text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight text-white mb-6">
              <LogoMark className="w-8 h-8 text-accent" />
              <span>Makarenko<span className="text-accent">Reinhold</span></span>
            </a>
            <p className="max-w-sm text-white/60 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-white/90">
                Godkjent renholdsbedrift
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Навігація</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-accent transition-colors">Послуги</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Ціни</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Відгуки</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Контакти</h4>
            <ul className="space-y-4 text-white/60">
              <li>Notodden, Norway</li>
              <li>+47 966 84 393</li>
              <li>annadizhenko@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <div>&copy; {new Date().getFullYear()} Makarenko Reinhold. {t('footer.rights')}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
