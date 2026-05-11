
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function WhyUs() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('whyUs.badge')}
          title={t('whyUs.title')}
          subtitle={t('whyUs.subtitle')}
          align="center"
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-6 px-6">
            <div className="col-span-1"></div>
            <div className="col-span-1 text-center font-display font-bold text-xl text-primary">Makarenko</div>
            <div className="col-span-1 text-center font-display font-bold text-xl text-text-muted">Andre</div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Offentlig Godkjent (Arbeidstilsynet)", us: true, them: false },
              { label: "Svanemerkede Produkter", us: true, them: false },
              { label: "Online Priskalkulator", us: true, them: false },
              { label: "10M Ansvarsforsikring", us: true, them: "Delvis" },
              { label: "Fast Sjekkliste for Flyttevask", us: true, them: "Varierer" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 items-center p-6 rounded-2xl bg-bg-light border border-border hover:border-accent/30 transition-colors">
                <div className="col-span-1 font-bold text-primary text-sm md:text-base">{row.label}</div>
                
                <div className="col-span-1 flex justify-center">
                  {row.us === true ? (
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  ) : (
                    <span className="font-bold text-primary">{row.us}</span>
                  )}
                </div>

                <div className="col-span-1 flex justify-center opacity-50">
                  {row.them === true ? (
                    <div className="w-8 h-8 rounded-full bg-text-muted/20 flex items-center justify-center text-text-muted">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  ) : row.them === false ? (
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  ) : (
                    <span className="font-bold text-text-muted">{row.them}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
