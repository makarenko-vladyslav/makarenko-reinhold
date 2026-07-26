"use client";

import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();

  const reviews = t("testimonials.reviews") as Array<{
    author: string;
    descriptor: string;
    text: string;
    rating: string;
    service: string;
  }>;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading + Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              {String(t("testimonials.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-text-main mt-2">
              {String(t("testimonials.heading"))}
            </h2>
            <p className="text-base text-text-muted mt-3">
              {String(t("testimonials.subheading"))}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface border border-border-light shadow-sm shrink-0">
            <div className="text-sm font-mono font-bold text-primary">
              {String(t("testimonials.aggregateRating"))}
            </div>
            <div className="text-[11px] font-mono text-text-muted mt-1">
              Verifiserte kundeanmeldelser
            </div>
          </div>
        </div>

        {/* Quote Grid with Oversized Quotation Marks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {reviews && reviews.map((r, i) => (
            <div key={i} className="bg-surface p-8 rounded-2xl border border-border-light shadow-sm flex flex-col justify-between relative overflow-hidden">
              <span className="text-7xl font-serif text-accent/15 absolute -top-2 left-4 pointer-events-none select-none">
                «
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-accent bg-accent-soft px-2.5 py-1 rounded">
                    {r.service}
                  </span>
                  <span className="text-xs font-mono font-bold text-text-main">{r.rating}</span>
                </div>
                <p className="text-sm text-text-main leading-relaxed italic mb-8">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-border-light relative z-10">
                <h4 className="font-display font-bold text-text-main text-base">{r.author}</h4>
                <span className="text-xs text-text-muted block mt-0.5">{r.descriptor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Counter affordance */}
        <div className="text-center text-xs font-mono text-text-muted">
          Kundeomtale 01 - 03 av verifiserte huseiere i Telemark
        </div>

      </div>
    </section>
  );
}
