"use client";

import { useLocale } from "@/lib/i18n";

export default function WhyUs() {
  const { t } = useLocale();

  const cards = t("whyUs.cards") as Array<{ stat: string; title: string; desc: string }>;
  const stats = t("whyUs.stats") as Array<{ value: string; label: string }>;

  return (
    <section id="hvorfor-oss" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Editorial Layout: Sticky Left Brand Story + Staggered Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Brand Story & Founder Quote */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              {String(t("whyUs.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-text-main mt-2 leading-tight">
              {String(t("whyUs.heading"))}
            </h2>
            <p className="text-base text-text-muted mt-4 leading-relaxed mb-8">
              {String(t("whyUs.subheading"))}
            </p>

            {/* Founder Quote Card */}
            <div className="p-8 rounded-3xl bg-bg-light border border-border-light relative shadow-sm mb-8">
              <span className="text-6xl font-serif text-accent/20 absolute -top-3 left-4 select-none pointer-events-none">
                «
              </span>
              <blockquote className="text-base sm:text-lg font-serif italic text-text-main leading-relaxed mb-6 relative z-10">
                "{String(t("whyUs.quote"))}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-display font-bold text-base flex items-center justify-center shrink-0">
                  AM
                </div>
                <div>
                  <div className="font-display font-bold text-text-main text-sm">
                    {String(t("whyUs.founderName"))}
                  </div>
                  <div className="text-xs text-text-muted">
                    {String(t("whyUs.founderRole"))}
                  </div>
                </div>
              </div>
            </div>

            {/* Photographic Overlay Layer */}
            <div className="relative rounded-2xl overflow-hidden border border-border-light shadow-lg">
              <img
                src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sertifisert renhold Notodden"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono text-white/90">
                  {String(t("whyUs.photoCaption"))}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Bar + Asymmetrical Feature Grid */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 4 Stat Numerals Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-primary text-white shadow-lg">
              {stats && stats.map((st, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-accent">{st.value}</div>
                  <div className="text-[11px] text-white/80 mt-1 font-mono">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Asymmetrical Staggered Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards && cards.map((c, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-2xl bg-bg-light border border-border-light hover:border-accent/60 transition-all duration-300 flex flex-col justify-between shadow-sm ${
                    i % 2 === 1 ? "sm:translate-y-4" : ""
                  }`}
                >
                  <div>
                    <div className="text-2xl sm:text-3xl font-display font-extrabold text-accent mb-4">
                      {c.stat}
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-text-main mb-3">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-light/60 text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                    Sertifisert i Norge
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
