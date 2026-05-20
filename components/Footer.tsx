
"use client";
import { useLocale } from '@/lib/i18n';
import { Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react';

export default function Footer() {
  const { t } = useLocale();
  const content = t('footer') as any;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-gray-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white font-display font-bold">MR</div>
            <div className="font-display font-bold text-lg text-white leading-tight">
              Makarenko<br/><span className="text-accent text-xs">Reinhold</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-6">{content.desc}</p>
          <div className="flex gap-2">
            <span className="bg-white/10 px-2 py-1 rounded text-xs">Offentlig Godkjent</span>
            <span className="bg-white/10 px-2 py-1 rounded text-xs">HMS-Kort</span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-6">{content.links}</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#services" className="hover:text-accent transition-colors">Tjenester</a></li>
            <li><a href="#calculator" className="hover:text-accent transition-colors">Priskalkulator</a></li>
            <li><a href="#why-us" className="hover:text-accent transition-colors">Om Oss</a></li>
            <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-6">{content.contact}</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
              <a href="tel:+4796684393" className="hover:text-accent transition-colors">+47 966 84 393</a>
            </li>
            <li className="flex items-start gap-3">
              <EnvelopeSimple size={18} className="text-accent flex-shrink-0 mt-0.5" />
              <a href="mailto:annadizhenko@gmail.com" className="hover:text-accent transition-colors">annadizhenko@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
              <span>Notodden, Telemark<br/>Norge</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-bold mb-6">{content.legal}</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Personvernerklæring</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Salgsbetingelser</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Informasjonskapsler</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
        &copy; {year} Makarenko Reinhold. {content.rights}
      </div>
    </footer>
  );
}
