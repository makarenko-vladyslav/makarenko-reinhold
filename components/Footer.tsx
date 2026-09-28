"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  const wordmark = String(t("footer.wordmark"));
  const tagline = String(t("footer.tagline"));
  const regNumber = String(t("footer.regNumber"));
  const navTitle = String(t("footer.navTitle"));
  const contactTitle = String(t("footer.contactTitle"));
  const hoursTitle = String(t("footer.hoursTitle"));
  const businessTitle = String(t("footer.businessTitle"));
  const businessInsurance = String(t("footer.businessInsurance"));
  const weekdays = String(t("footer.hours.weekdays"));
  const saturday = String(t("footer.hours.saturday"));
  const sunday = String(t("footer.hours.sunday"));
  const location = String(t("footer.location"));
  const phone = String(t("footer.phone"));
  const email = String(t("footer.email"));
  const copyright = String(t("footer.copyright"));
  const creditPre = String(t("footer.creditPre"));
  const creditLink = String(t("footer.creditLink"));

  const linkServices = String(t("footer.links.services"));
  const linkPackages = String(t("footer.links.packages"));
  const linkCalculator = String(t("footer.links.calculator"));
  const linkResults = String(t("footer.links.results"));
  const linkAbout = String(t("footer.links.about"));
  const linkFaq = String(t("footer.links.faq"));
  const phoneLabel = String(t("footer.phoneLabel"));
  const emailLabel = String(t("footer.emailLabel"));
  const smsBadge = String(t("footer.smsBadge"));
  const emailInquiry = String(t("footer.emailInquiry"));
  const commercialNotice = String(t("footer.commercialNotice"));
  const subRegion = "Notodden & Telemark";

  return (
    <footer className="bg-bg-dark text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant full-width brand wordmark bleeding off */}
        <div className="border-b border-white/10 pb-10 mb-12">
          <p className="font-display font-extrabold text-3xl sm:text-5xl lg:text-7xl tracking-tighter text-white/95">
            {wordmark}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-3">
            <p className="text-xs sm:text-sm text-accent font-semibold tracking-wider uppercase">
              {tagline}
            </p>
            <span className="text-xs text-white/50">
              {subRegion}
            </span>
          </div>
        </div>

        {/* 4 Footer Dense Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-xs sm:text-sm">
          {/* Col 1: About & Approvals */}
          <div>
            <h3 className="font-display font-bold text-xs text-accent mb-3 uppercase tracking-wider">
              {businessTitle}
            </h3>
            <p className="text-white/70 leading-relaxed mb-3">
              {regNumber}
            </p>
            <p className="text-white/60 leading-relaxed">
              {businessInsurance}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-display font-bold text-xs text-accent mb-3 uppercase tracking-wider">
              {navTitle}
            </h3>
            <ul className="space-y-2 text-white/75">
              <li>
                <a href="#tjenester" className="hover:text-accent transition-colors duration-150 ease-out">{linkServices}</a>
              </li>
              <li>
                <a href="#pakker" className="hover:text-accent transition-colors duration-150 ease-out">{linkPackages}</a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-accent transition-colors duration-150 ease-out">{linkCalculator}</a>
              </li>
              <li>
                <a href="#resultater" className="hover:text-accent transition-colors duration-150 ease-out">{linkResults}</a>
              </li>
              <li>
                <a href="#om-oss" className="hover:text-accent transition-colors duration-150 ease-out">{linkAbout}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors duration-150 ease-out">{linkFaq}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Direct response */}
          <div>
            <h3 className="font-display font-bold text-xs text-accent mb-3 uppercase tracking-wider">
              {contactTitle}
            </h3>
            <p className="text-white/70 mb-2">{location}</p>
            <p className="mb-2">
              <span className="text-white/50 block text-[11px]">{phoneLabel}</span>
              <a href="tel:+4796684397" className="text-white font-bold hover:text-accent transition-colors duration-150 ease-out">
                {phone}
              </a>
            </p>
            <p className="mb-2">
              <span className="text-white/50 block text-[11px]">{emailLabel}</span>
              <a href={`mailto:${email}`} className="text-white/80 hover:text-accent transition-colors duration-150 ease-out">
                {email}
              </a>
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-white/60">
              <a href="tel:+4796684397" className="hover:underline text-accent font-semibold">
                {smsBadge}
              </a>
              <span>·</span>
              <a href={`mailto:${email}`} className="hover:underline">
                {emailInquiry}
              </a>
            </div>
          </div>

          {/* Col 4: Opening Hours */}
          <div>
            <h3 className="font-display font-bold text-xs text-accent mb-3 uppercase tracking-wider">
              {hoursTitle}
            </h3>
            <ul className="space-y-1.5 text-white/70">
              <li>{weekdays}</li>
              <li>{saturday}</li>
              <li>{sunday}</li>
            </ul>
            <div className="mt-4 p-3 bg-white/5 rounded border border-white/10 text-[11px] text-white/70">
              {commercialNotice}
            </div>
          </div>
        </div>

        {/* Legal Row with Studio Credit */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>{copyright}</p>
          <p>
            {creditPre}
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-accent underline transition-colors duration-150 ease-out"
            >
              {creditLink}
            </a>
          </p>
        </div>
      </div>
      <div className="mt-4 text-center text-xs opacity-70"><a href="/privacy" className="underline hover:no-underline">Personvernerklæring</a></div>
    </footer>
  );
}
