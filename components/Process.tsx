"use client";

import { useLocale } from "@/lib/i18n";

export default function Process() {
  const { t } = useLocale();

  const steps = t("process.steps") as Array<{ step: string; title: string; desc: string }>;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
            {String(t("process.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-2">
            {String(t("process.heading"))}
          </h2>
          <p className="text-base text-text-muted mt-3">
            {String(t("process.subheading"))}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps && steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-surface p-8 rounded-2xl border border-border-light shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-accent bg-accent-soft px-3 py-1 rounded">
                  {s.step}
                </span>
                <h3 className="text-xl font-display font-bold text-text-main mt-4 mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
