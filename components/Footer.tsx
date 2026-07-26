"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  const companyPhone = String(t("company.phone"));

  return (
    <footer className="bg-bg-dark text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Giant Full-Width Brand Wordmark Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-[10vw] font-display font-extrabold uppercase tracking-tight text-white/10 leading-none whitespace-nowrap select-none">
          MAKARENKO REINHOLD
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center font-bold text-white text-sm">
                MR
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                {String(t("company.name"))}
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              {String(t("footer.aboutText"))}
            </p>
            <div className="inline-block px-3 py-1 rounded bg-accent/20 border border-accent/30 text-accent font-mono font-bold text-[10px]">
              {String(t("footer.godkjentBadge"))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider mb-4 text-accent">
              {String(t("footer.linksTitle"))}
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li><a href="#tjenester" className="hover:text-accent transition-colors">Fast renhold i hjemmet</a></li>
              <li><a href="#tjenester" className="hover:text-accent transition-colors">Flyttevask med garanti</a></li>
              <li><a href="#tjenester" className="hover:text-accent transition-colors">Hyttevask Lifjell & Sauland</a></li>
              <li><a href="#tjenester" className="hover:text-accent transition-colors">Hovedrengjøring / Storvask</a></li>
              <li><a href="#tjenester" className="hover:text-accent transition-colors">Kontor- og næringsrenhold</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider mb-4 text-accent">
              {String(t("footer.contactTitle"))}
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-mono">
              <li>Telefon: <a href={`tel:${companyPhone.replace(/\s+/g, "")}`} className="hover:underline">{companyPhone}</a></li>
              <li>E-post: <a href={`mailto:${String(t("company.email"))}`} className="hover:underline">{String(t("company.email"))}</a></li>
              <li>Adresse: {String(t("company.address"))}</li>
              <li>Åpningstider: {String(t("company.hours"))}</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider mb-4 text-accent">
              {String(t("footer.certificationTitle"))}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              Registrert hos Arbeidstilsynet. 100% hvitt og lovlig renhold med full ansvarsforsikring i Tryg.
            </p>
            
            {/* Social Text Links */}
            <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono font-bold text-accent">
              <a href="#" className="hover:underline">Facebook</a>
              <span>•</span>
              <a href="#" className="hover:underline">Instagram</a>
              <span>•</span>
              <a href="#" className="hover:underline">LinkedIn</a>
            </div>
          </div>

        </div>

        {/* Legal Row & Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4 font-mono">
          <div>
            © {currentYear} {String(t("company.name"))}. {String(t("footer.rights"))}
          </div>
          <div>
            {String(t("footer.developerCredit"))}{" "}
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-bold"
            >
              McRich.dev
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
