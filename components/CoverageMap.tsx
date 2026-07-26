"use client";

import { useLocale } from "@/lib/i18n";

export default function CoverageMap() {
  const { t } = useLocale();

  const cities = t("coverage.cities") as Array<{ name: string; detail: string }>;

  return (
    <section id="dekning" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
            {String(t("coverage.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-2">
            {String(t("coverage.heading"))}
          </h2>
          <p className="text-base text-text-muted mt-3">
            {String(t("coverage.subheading"))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 space-y-3">
            {cities && cities.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-bg-light border border-border-light flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-text-main text-base">{c.name}</h4>
                  <p className="text-xs text-text-muted">{c.detail}</p>
                </div>
                <span className="text-[11px] font-mono font-bold text-accent bg-accent-soft px-2.5 py-1 rounded">
                  AKTIV
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border-light shadow-md min-h-[380px]">
            <iframe
              src="https://www.google.com/maps?q=Notodden,Norway&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              title="Notodden Coverage Map"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
