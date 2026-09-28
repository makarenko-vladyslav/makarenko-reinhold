"use client";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  const metaKicker = String(t("hero.metaKicker"));
  const titlePre = String(t("hero.titlePre"));
  const titleAccent = String(t("hero.titleAccent"));
  const titlePost = String(t("hero.titlePost"));
  const lede = String(t("hero.lede"));
  const ctaPrimary = String(t("hero.ctaPrimary"));
  const ctaSecondary = String(t("hero.ctaSecondary"));
  const sealText = String(t("hero.sealText"));
  const flankLeft = String(t("hero.flankLeft"));
  const flankRight = String(t("hero.flankRight"));
  const scrollWord = String(t("hero.scrollWord"));
  const videoSrc = String(t("hero.videoSrc"));
  const videoPoster = String(t("hero.videoPoster"));
  const metaHours = String(t("hero.metaStrip.hours"));
  const metaCoverage = String(t("hero.metaStrip.coverage"));
  const metaRating = String(t("hero.metaStrip.rating"));

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-primary text-white pt-24 pb-6 sm:pt-28 sm:pb-8">
      {/* Layer 1: Ambient background grid and subtle noise scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-bg-dark/95" />
        <div className="max-w-7xl mx-auto h-full border-x border-white/[0.07]" />
      </div>

      {/* Layer 2: Giant decorative typography layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-start select-none pointer-events-none overflow-hidden"
      >
        <span className="font-display font-extrabold text-[22vw] tracking-tighter text-white/[0.025] uppercase whitespace-nowrap pl-4">
          TELEMARK
        </span>
      </div>

      {/* Layer 3: Asymmetrical Spatial Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Left Block: Offset editorial poster typography */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Real Metadata Kicker */}
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="h-px w-8 bg-accent" />
              <p className="text-xs font-semibold tracking-widest uppercase text-accent font-display">
                {metaKicker}
              </p>
            </div>

            {/* Poster H1 with deliberate negative tracking and italic serif accent */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.75rem] text-white tracking-tight leading-[1.04] mb-6 text-balance">
              {titlePre}{" "}
              <span className="font-serif italic font-normal text-accent underline decoration-white/30 decoration-1 underline-offset-8">
                {titleAccent}
              </span>{" "}
              {titlePost}
            </h1>

            {/* Editorial Lede */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-xl font-normal">
              {lede}
            </p>

            {/* CTA Group with concise action labels (<22 chars) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/20 transition-colors duration-150 ease-out text-center"
              >
                {ctaPrimary}
              </a>
              <a
                href="#pakker"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded font-display font-semibold text-xs sm:text-sm uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors duration-150 ease-out text-center"
              >
                {ctaSecondary}
              </a>
            </div>

            {/* Flanking Mini-Copy Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/15 max-w-xl text-xs text-white/75 leading-relaxed">
              <p className="border-l-2 border-accent/80 pl-3">{flankLeft}</p>
              <p className="border-l-2 border-white/30 pl-3">{flankRight}</p>
            </div>
          </div>

          {/* Right Column: Bleeding Media Portal & Rotating Text Seal */}
          <div className="lg:col-span-5 xl:col-span-5 relative mt-4 lg:mt-0">
            {/* Overlapping Video Container with angled crop */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-bg-dark">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={videoPoster}
                className="w-full h-full object-cover opacity-80"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30 pointer-events-none" />

              {/* In-video badge */}
              <div className="absolute bottom-4 left-4 z-10 bg-primary/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/15">
                <span className="text-[11px] font-display font-bold uppercase tracking-wider text-white">
                  Notodden & Telemark
                </span>
              </div>
            </div>

            {/* Rotating Circular Text Seal overlapping video edge */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-white/25 flex items-center justify-center p-2.5 bg-primary/95 backdrop-blur-md shadow-2xl z-20">
              <div className="absolute inset-0 animate-spin-slow flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <path
                    id="sealCurve"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-display font-bold uppercase tracking-[0.24em] fill-white/80">
                    <textPath href="#sealCurve" startOffset="0%">
                      {sealText}
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Seal Core */}
              <div className="text-center p-2 rounded-full bg-white/5 border border-white/15 w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center">
                <span className="font-display font-extrabold text-xs sm:text-sm text-accent tracking-tight leading-none block">
                  100 %
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-white/95 mt-1 block">
                  GARANTI
                </span>
                <span className="text-[8px] text-white/60 tracking-tight block">
                  Notodden
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 4: Bottom 3-Item Meta Strip */}
      <div className="relative z-10 w-full border-t border-white/15 bg-primary/90 backdrop-blur-md py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/85">
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">Åpningstid:</span>
            <span>{metaHours}</span>
          </div>
          <div className="hidden md:block text-white/30">―</div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">Dekning:</span>
            <span>{metaCoverage}</span>
          </div>
          <div className="hidden md:block text-white/30">―</div>
          <div className="flex items-center gap-2 font-mono">
            <span className="text-white/60">Vurdering:</span>
            <span className="text-white font-bold">{metaRating}</span>
          </div>
        </div>
      </div>

      {/* Layer 5: Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-2">
        <span className="text-[9px] font-display font-semibold tracking-[0.28em] uppercase text-white/50 mb-1">
          {scrollWord}
        </span>
        <div className="w-px h-5 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
}
