"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();
  const data = t('footer') as any;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-display font-bold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none tracking-tight">Makarenko</span>
                <span className="text-xs font-medium tracking-widest uppercase opacity-80">Reinhold</span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm mb-8">
              {data.desc}
            </p>
            <div className="flex gap-4">
              <div className="px-3 py-1 border border-white/20 rounded text-xs font-bold text-white/80">HMS-KORT</div>
              <div className="px-3 py-1 border border-white/20 rounded text-xs font-bold text-white/80">SVANEMERKET</div>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">{data.links}</h4>
            <ul className="space-y-4">
              {['services', 'calculator', 'reviews', 'faq'].map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-white/70 hover:text-accent transition-colors">
                    {t(`nav.${key}`) as string}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">{data.legal}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Personvernerklæring</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Salgsbetingelser</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Garantivilkår</a></li>
              <li className="text-white/50 text-sm mt-4">Org.nr: 933 123 456</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} Makarenko Reinhold. {data.rights}</p>
          <p>Designet med presisjon i Norge.</p>
        </div>
      </div>
    </footer>
  );
}
