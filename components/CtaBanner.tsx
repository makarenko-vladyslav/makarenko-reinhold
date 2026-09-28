"use client";
import { useLocale } from "@/lib/i18n";

export default function CtaBanner() {
  const { t } = useLocale();

  const kicker = String(t("ctaBanner.kicker"));
  const title = String(t("ctaBanner.title"));
  const lede = String(t("ctaBanner.lede"));
  const phoneBtn = String(t("ctaBanner.phoneBtn"));
  const formBtn = String(t("ctaBanner.formBtn"));
  const trustLine = String(t("ctaBanner.trustLine"));
  const hours = (t("ctaBanner.hours") as Array<{ days: string; time: string }>) || [];

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          {/* Top accent hairline */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

          {/* Decorative giant watermark layer */}
          <div
            aria-hidden="true"
            className="absolute right-0 bottom-0 select-none pointer-events-none translate-x-12 translate-y-12"
          >
            <span className="font-display font-extrabold text-[12vw] text-white/[0.03] uppercase whitespace-nowrap">
              NOTODDEN
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-5 bg-accent" />
                <p className="text-xs font-bold tracking-widest uppercase text-accent font-display">
                  {kicker}
                </p>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-4">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-8 max-w-xl">
                {lede}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <a
                  href="tel:+4796684397"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded font-display font-bold text-xs uppercase tracking-wider bg-accent hover:bg-accent-dark text-white shadow-sm transition-colors text-center"
                >
                  {phoneBtn}
                </a>
                <a
                  href="#bestill"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded font-display font-semibold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-colors text-center"
                >
                  {formBtn}
                </a>
              </div>

              <p className="text-xs text-white/60 border-l border-accent/80 pl-3">
                {trustLine}
              </p>
            </div>

            {/* Right Column: Structured Opening Hours Mini-Table */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded backdrop-blur-sm">
              <h3 className="font-display font-bold text-sm text-accent uppercase tracking-wider mb-4">
                Telefontider & Vakt
              </h3>
              <div className="space-y-2 text-xs text-white/85">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">{h.days}:</span>
                    <span className="font-mono font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-[11px] text-white/60 leading-normal">
                Utenfor åpningstid besvares akutte oppdrag via SMS innen 30 minutter.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
