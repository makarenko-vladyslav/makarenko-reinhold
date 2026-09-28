"use client";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  const videoSrc = t("hero.videoSrc") as string;
  const videoPoster = t("hero.videoPoster") as string;
  const tickerItems = (t("hero.tickerItems") as string[]) || [];

  const metaHours = t("hero.metaHours") as string;
  const metaAddress = t("hero.metaAddress") as string;
  const metaRating = t("hero.metaRating") as string;

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-0 overflow-hidden bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)]">
      {/* Layer 1: Background Video with Dark Tinted Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={videoPoster}
          className="w-full h-full object-cover opacity-65"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(204_45%_12%/0.95)] via-[hsl(204_40%_16%/0.85)] to-[hsl(204_45%_12%/0.8)]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            {/* Layer 3: Kicker with REAL Meta */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[hsl(158_64%_38%/0.25)] border border-[hsl(158_64%_45%/0.4)] text-[hsl(158_60%_80%)] text-xs font-sans font-semibold tracking-wider uppercase mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(158_64%_48%)] shrink-0" />
              <span>{t("hero.kickerMeta") as string}</span>
            </div>

            {/* Layer 4: Multi-line Poster H1 with Italic Accent */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[hsl(0_0%_100%)] leading-[1.08] tracking-tight mb-5 text-balance">
              <span>{t("hero.titleLead") as string} </span>{" "}
              <span className="text-[hsl(158_64%_48%)] italic font-medium">
                {t("hero.titleAccent") as string}
              </span>{" "}
              <span>{t("hero.titleTail") as string}</span>
            </h1>

            {/* Layer 5: Subtitle / Lede */}
            <p className="text-base sm:text-lg text-[hsl(0_0%_100%/0.88)] leading-relaxed mb-8 max-w-2xl font-light">
              {t("hero.subtitle") as string}
            </p>

            {/* Layer 6: CTA Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] font-display font-bold text-lg tracking-wide hover:bg-[hsl(158_70%_32%)] transition-colors shadow-lg shadow-[hsl(158_64%_38%/0.25)] text-center"
              >
                {t("hero.primaryCta") as string}
              </a>
              <a
                href={`tel:${t("brand.phone") as string}`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-[hsl(0_0%_100%/0.3)] bg-[hsl(0_0%_100%/0.08)] backdrop-blur-sm text-[hsl(0_0%_100%)] font-display font-semibold text-base hover:bg-[hsl(0_0%_100%/0.18)] transition-colors text-center"
              >
                {t("hero.secondaryCta") as string}
              </a>
            </div>

            {/* Layer 7: 3-Item Meta Strip (with conditional rendering) */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3 px-4 rounded-xl bg-[hsl(0_0%_100%/0.06)] border border-[hsl(0_0%_100%/0.12)] max-w-2xl text-xs text-[hsl(0_0%_100%/0.85)] font-sans">
              {Boolean(metaHours) && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(158_64%_48%)] shrink-0" />
                  <span>{metaHours}</span>
                </div>
              )}
              {Boolean(metaAddress) && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(158_64%_48%)] shrink-0" />
                  <span>{metaAddress}</span>
                </div>
              )}
              {Boolean(metaRating) && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(158_64%_48%)] shrink-0" />
                  <span className="font-semibold text-[hsl(158_60%_80%)]">{metaRating}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Flanking Micro-Copy & Rotating Text Seal */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-start lg:items-end">
            {/* Layer 8: Rotating Circular Text Seal */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg
                viewBox="0 0 160 160"
                className="w-full h-full animate-[spin_25s_linear_infinite]"
                aria-hidden="true"
              >
                <path
                  id="sealCircle"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
                <text className="text-[10.5px] font-sans font-bold uppercase tracking-[0.22em] fill-[hsl(158_64%_55%)]">
                  <textPath href="#sealCircle" startOffset="0%">
                    {t("hero.sealText") as string}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 rounded-full border border-[hsl(158_64%_48%/0.3)] bg-[hsl(204_45%_12%/0.75)] backdrop-blur-sm pointer-events-none">
                <span className="font-display font-black text-xl text-[hsl(0_0%_100%)] leading-none">
                  2021
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[hsl(158_64%_60%)] font-sans mt-0.5">
                  Telemark
                </span>
              </div>
            </div>

            {/* Layer 9: Two Flanking Mini-Copy Blocks */}
            <div className="w-full max-w-sm space-y-3">
              <div className="p-3.5 rounded-xl bg-[hsl(0_0%_100%/0.06)] border border-[hsl(0_0%_100%/0.12)] text-left backdrop-blur-sm">
                <div className="text-xs uppercase tracking-wider font-sans font-bold text-[hsl(158_64%_50%)] mb-1">
                  {t("hero.flankLeftTitle") as string}
                </div>
                <div className="text-xs text-[hsl(0_0%_100%/0.75)] leading-relaxed font-light">
                  {t("hero.flankLeftText") as string}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[hsl(0_0%_100%/0.06)] border border-[hsl(0_0%_100%/0.12)] text-left backdrop-blur-sm">
                <div className="text-xs uppercase tracking-wider font-sans font-bold text-[hsl(158_64%_50%)] mb-1">
                  {t("hero.flankRightTitle") as string}
                </div>
                <div className="text-xs text-[hsl(0_0%_100%/0.75)] leading-relaxed font-light">
                  {t("hero.flankRightText") as string}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 10: Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center pb-2 select-none pointer-events-none">
        <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.25em] text-[hsl(0_0%_100%/0.45)] mb-1">
          {t("hero.scrollWord") as string}
        </span>
        <div className="w-px h-6 bg-gradient-to-b from-[hsl(158_64%_48%)] to-transparent" />
      </div>

      {/* Thin Marquee Ticker at Hero Base */}
      <div className="relative z-20 w-full overflow-hidden bg-[hsl(204_45%_12%/0.95)] border-t border-[hsl(0_0%_100%/0.12)] py-2.5">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 mx-6 text-xs text-[hsl(0_0%_100%/0.8)] font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(158_64%_48%)] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
