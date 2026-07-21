"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative giant full-width wordmark bleeding off the bottom edge */}
      <div className="absolute -bottom-10 inset-x-0 text-center pointer-events-none select-none opacity-[0.02] leading-none z-0">
        <span className="font-display font-extrabold text-[12vw] tracking-tighter uppercase whitespace-nowrap">
          MAKARENKO REINHOLD
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-12">
          
          {/* Logo & Statement Column */}
          <div className="md:col-span-2">
            <span className="font-display font-extrabold text-2xl tracking-tight block mb-2 text-white">
              MAKARENKO <span className="text-accent">REINHOLD</span>
            </span>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm mb-6">
              Offentlig godkjent renholdsbedrift stasjonert i Notodden. Vi leverer grundig renhold og full overtakelsesgaranti i hele Telemark-regionen.
            </p>
            <div className="text-[10px] tracking-wider uppercase font-bold text-accent bg-accent/10 border border-accent/20 px-4 py-2 rounded">
              ARBEIDSTILSYNET GODKJENT
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-accent mb-6">
              Navigasjon
            </h4>
            <ul className="space-y-3 text-sm font-light text-white/70">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent cursor-pointer text-left">[ TJENESTER ]</button></li>
              <li><button onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent cursor-pointer text-left">[ PRISKALKULATOR ]</button></li>
              <li><button onClick={() => document.getElementById('checklist')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent cursor-pointer text-left">[ SJEKKLISTE ]</button></li>
              <li><button onClick={() => document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent cursor-pointer text-left">[ TRYGGHET ]</button></li>
            </ul>
          </div>

          {/* Contact Column (Separate lines for maximum NAP structured data) */}
          <div>
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-accent mb-6">
              KONTAKT & ADRESSE
            </h4>
            <ul className="space-y-3 text-sm font-light text-white/70">
              <li className="font-semibold text-white">MAKARENKO REINHOLD</li>
              <li>Notodden, Telemark</li>
              <li>Tlf: <a href="tel:+4796684397" className="hover:text-accent font-semibold transition-colors">+47 966 84 397</a></li>
              <li>E-post: <a href="mailto:annadizhenko@gmail.com" className="hover:text-accent transition-colors">annadizhenko@gmail.com</a></li>
              <li className="text-[10px] text-white/40">Org.nr: 934 069 663 MVA</li>
            </ul>
          </div>

        </div>

        {/* Lower row & Legal Metadata */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-white/40 font-light pt-4">
          <div className="space-y-1">
            <span>
              &copy; {new Date().getFullYear()} Makarenko Reinhold. Med enerett.
            </span>
            <p className="text-[10px] text-white/30 tracking-wider">
              Godkjent av Arbeidstilsynet. Trygt, hvitvasket arbeid for Telemark.
            </p>
          </div>

          {/* Social Row as Text links */}
          <div className="flex items-center gap-6 text-[10px] tracking-widest uppercase font-bold">
            <a href="#" className="hover:text-accent transition-colors">[ INSTAGRAM ]</a>
            <a href="#" className="hover:text-accent transition-colors">[ FACEBOOK ]</a>
          </div>

          <span>
            Utviklet av <a href="https://makarich.framer.website" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent font-semibold transition-colors">McRich.dev</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
