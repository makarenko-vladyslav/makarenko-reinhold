
"use client";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-surface mb-6">Klar for et plettfritt hjem?</h2>
            <p className="text-surface/80 text-lg mb-8 max-w-2xl mx-auto">
              Bruk vår priskalkulator for å få et umiddelbart estimat, eller kontakt oss for en uforpliktende prat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#calculator" className="bg-accent text-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
                Beregn Pris Nå
              </a>
              <a href="tel:+4796684393" className="bg-surface/10 text-surface border border-surface/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-surface/20 transition-colors">
                Ring +47 966 84 393
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
