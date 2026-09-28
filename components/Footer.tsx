"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  const brandName = t("brand.name") as string;
  const phone = t("brand.phone") as string;
  const email = t("brand.email") as string;

  return (
    <footer className="bg-[hsl(204_45%_12%)] text-[hsl(0_0%_100%)] pt-16 pb-24 lg:pb-12 border-t border-[hsl(0_0%_100%/0.1)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[hsl(0_0%_100%/0.12)]">
          {/* Col 1: About */}
          <div>
            <div className="font-display font-extrabold text-2xl tracking-tight mb-3">
              {brandName}
            </div>
            <p className="text-xs text-[hsl(0_0%_100%/0.7)] leading-relaxed font-light mb-4">
              {t("footer.about") as string}
            </p>
            <div className="text-xs text-[hsl(158_64%_48%)] font-sans font-semibold mb-1">
              {t("brand.orgStatus") as string}
            </div>
            <div className="text-xs text-[hsl(0_0%_100%/0.5)] font-mono">
              {t("brand.orgNumber") as string}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_48%)] mb-4">
              {t("footer.navTitle") as string}
            </h4>
            <ul className="space-y-2 text-xs text-[hsl(0_0%_100%/0.75)]">
              <li>
                <a href="#services" className="hover:text-[hsl(0_0%_100%)]">
                  {t("nav.services") as string}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[hsl(0_0%_100%)]">
                  {t("nav.calculator") as string}
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[hsl(0_0%_100%)]">
                  {t("nav.packages") as string}
                </a>
              </li>
              <li>
                <a href="#guarantee" className="hover:text-[hsl(0_0%_100%)]">
                  {t("nav.guarantee") as string}
                </a>
              </li>
              <li>
                <a href="#hytta" className="hover:text-[hsl(0_0%_100%)]">
                  {t("nav.hytta") as string}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[hsl(0_0%_100%)]">
                  {t("nav.faq") as string}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_48%)] mb-4">
              {t("footer.contactTitle") as string}
            </h4>
            <div className="space-y-3 text-xs text-[hsl(0_0%_100%/0.75)]">
              <div>
                <span className="block text-[hsl(0_0%_100%/0.5)]">Телефон:</span>
                <a href={`tel:${phone}`} className="hover:text-[hsl(158_64%_48%)] font-bold text-sm">
                  {phone}
                </a>
              </div>
              <div>
                <span className="block text-[hsl(0_0%_100%/0.5)]">Електронна пошта:</span>
                <a href={`mailto:${email}`} className="hover:text-[hsl(158_64%_48%)]">
                  {email}
                </a>
              </div>
              <div>
                <span className="block text-[hsl(0_0%_100%/0.5)]">Локація:</span>
                <span>Notodden, Telemark, Norge</span>
              </div>
            </div>
          </div>

          {/* Col 4: Standards & Social Text Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_48%)] mb-4">
              {t("footer.legalTitle") as string}
            </h4>
            <ul className="space-y-2 text-xs text-[hsl(0_0%_100%/0.75)] mb-6">
              <li>• {t("footer.legal1") as string}</li>
              <li>• {t("footer.legal2") as string}</li>
              <li>• {t("footer.legal3") as string}</li>
              <li>• {t("footer.legal4") as string}</li>
            </ul>

            <div className="flex flex-wrap gap-3 text-xs font-sans font-semibold text-[hsl(158_64%_48%)]">
              <a href="#" className="hover:underline">Facebook</a>
              <span>·</span>
              <a href="#" className="hover:underline">Vipps Bedrift</a>
              <span>·</span>
              <a href="#" className="hover:underline">Gule Sider</a>
              <span>·</span>
              <a href="#" className="hover:underline">Mittanbud</a>
            </div>
          </div>
        </div>

        {/* Brand Voice Credit Meta-Line */}
        <div className="py-6 text-xs text-[hsl(0_0%_100%/0.65)] font-light border-b border-[hsl(0_0%_100%/0.08)]">
          {t("footer.brandVoiceCredit") as string}
        </div>

        {/* Legal Row & Studio Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[hsl(0_0%_100%/0.5)] gap-4">
          <div>
            © 2026 {brandName}. {t("footer.rights") as string}
          </div>
          <div>
            {t("footer.devCredit") as string}{" "}
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(158_64%_48%)] hover:underline font-semibold"
            >
              McRich.dev
            </a>
          </div>
        </div>
      </div>

      {/* Giant Full-Width Brand Wordmark Bleeding off Bottom */}
      <div
        aria-hidden="true"
        className="w-full overflow-hidden select-none pointer-events-none text-center pt-8 -mb-4 opacity-10"
      >
        <span className="font-display font-black text-[13vw] leading-none text-[hsl(0_0%_100%)] tracking-tighter whitespace-nowrap block">
          {t("footer.wordmark") as string}
        </span>
      </div>
      <div className="mt-4 text-center text-xs opacity-70"><a href="/privacy" className="underline hover:no-underline">Політика конфіденційності</a></div>
    </footer>
  );
}
