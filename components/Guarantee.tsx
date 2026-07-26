"use client";

import { useLocale } from "@/lib/i18n";

export default function Guarantee() {
  const { t } = useLocale();

  const points = t("guarantee.points") as Array<{ number: string; title: string; desc: string }>;

  return (
    <section id="garanti" className="py-24 bg-bg-light border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-surface rounded-3xl p-8 sm:p-14 border border-border-light shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              {String(t("guarantee.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-2 leading-tight">
              {String(t("guarantee.heading"))}
            </h2>
            <p className="text-base text-text-muted mt-4 leading-relaxed">
              {String(t("guarantee.subheading"))}
            </p>
            
            <div className="mt-8 p-5 rounded-2xl bg-accent-soft border border-accent/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent text-white font-display font-extrabold text-2xl flex items-center justify-center shrink-0 shadow-md">
                100%
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">Ingen økonomisk risiko</h4>
                <p className="text-xs text-text-muted">Vi garanterer godkjent overtakelse eller utbedrer gratis.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {points && points.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-bg-light border border-border-light flex items-start gap-5">
                <span className="text-xs font-mono font-bold text-accent bg-surface px-3 py-1 rounded border border-border-light shrink-0">
                  {p.number}
                </span>
                <div>
                  <h3 className="text-lg font-display font-bold text-text-main mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
