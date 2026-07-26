"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  const metaStrip = t("hero.metaStrip") as string[];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-bg-dark text-white">
      
      {/* 1. Background Media Stack with Dark Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/4238760/pexels-photo-4238760.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 filter brightness-75"
        >
          <source
            src="https://videos.pexels.com/video-files/4238760/4238760-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Layer 2: Deep HSL Tinted Scrim Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/85 to-bg-dark/65" />
      </div>

      {/* 2. Giant Watermark Word Layer */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none text-center w-full overflow-hidden">
        <span className="text-[14vw] font-display font-extrabold uppercase tracking-widest text-white/5 whitespace-nowrap leading-none block">
          NOTODDEN
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Crisp Editorial Kicker Line (No badge-pill slop) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 mb-6 font-mono text-xs font-semibold tracking-wider text-accent uppercase"
        >
          <span>{String(t("hero.kickerMeta"))}</span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-white/80 font-normal hidden sm:inline">{String(t("hero.badge"))}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            {/* Multi-line Poster H1 with Serif Italic Accent Word */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.08] mb-6">
              {String(t("hero.titleLine1"))}{" "}
              <span className="font-serif italic font-normal text-accent underline decoration-accent/40 underline-offset-8">
                {String(t("hero.titleAccent"))}
              </span>{" "}
              {String(t("hero.titleLine2"))}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-8">
              {String(t("hero.subtitle"))}
            </p>

            {/* CTA Button Pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl shadow-2xl transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                {String(t("hero.ctaPrimary"))} →
              </a>
              <a
                href={`tel:${String(t("company.phone")).replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-md transition-all whitespace-nowrap"
              >
                {String(t("hero.ctaSecondary"))}
              </a>
            </div>

            {/* 3-Item Meta Strip with Hairline Separators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 w-full max-w-3xl">
              {metaStrip && metaStrip.map((meta, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{meta}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating Text Badge & Crisp Solid Dark Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 relative"
          >
            {/* Rotating Circular Text Seal */}
            <div className="absolute -top-6 -right-4 z-20 w-24 h-24 rounded-full border border-accent/40 bg-bg-dark flex items-center justify-center p-2 text-center shadow-xl">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-accent leading-tight">
                GODKJENT • RENHOLD • NOTODDEN
              </span>
            </div>

            {/* Solid Dark Surface Card (Replacing glassmorphism slop) */}
            <div className="bg-bg-card-dark rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-white/10">
              <div className="text-xs uppercase tracking-widest text-accent font-bold mb-1">
                Garantert Fastpris
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Sertifisert Kvalitet Notodden
              </h3>

              <div className="space-y-3 mb-6 pt-3 border-t border-white/10">
                <div className="flex justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-white/70">Arbeidstilsynet:</span>
                  <span className="font-mono font-bold text-accent">GODKJENT</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-white/70">Flyttevask garanti:</span>
                  <span className="font-mono font-bold text-white">100% GARANTI</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-white/70">Kjemikalier:</span>
                  <span className="font-mono font-bold text-white">SVANEMERKET</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-white/70">Ansvarsforsikring:</span>
                  <span className="font-mono font-bold text-white">10.000.000 KR</span>
                </div>
              </div>

              {/* Two Flanking Mini-Copy Columns */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-[11px] text-white/70 leading-snug">
                <div>{String(t("hero.flankingLeft"))}</div>
                <div>{String(t("hero.flankingRight"))}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Classic Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 opacity-80 pt-6 pb-2">
        <span className="text-[9px] tracking-widest text-white/70 uppercase font-mono">SCROLL</span>
        <div className="w-0.5 h-6 bg-gradient-to-b from-accent to-transparent rounded-full animate-pulse" />
      </div>

      {/* Hero Base Ticker Strip */}
      <div className="relative z-10 w-full bg-primary/90 py-2.5 border-t border-white/10 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-xs font-mono tracking-wider text-white/90">
          <span className="mx-4">{String(t("hero.tickerText"))}</span>
          <span className="mx-4">{String(t("hero.tickerText"))}</span>
        </div>
      </div>

    </section>
  );
}