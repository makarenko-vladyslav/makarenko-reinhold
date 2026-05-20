"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/seed/clean-living-room/1920/1080" 
          alt="Clean interior" 
          className="w-full h-full object-cover"
        />
        {/* Single gradient overlay as per rules */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white text-sm font-semibold tracking-wide uppercase">
                {t("hero.badge")}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              {t("hero.title").split('100%').map((part: string, i: number, arr: any[]) => 
                i === arr.length - 1 ? part : <span key={i}>{part}<span className="text-accent italic">100%</span></span>
              )}
            </h1>
            
            <p className="text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#calculator" className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(185_80%_35%/0.4)] hover:shadow-[0_0_40px_hsl(185_80%_45%/0.6)] hover:-translate-y-1">
                {t("hero.ctaPrimary")}
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                {t("hero.ctaSecondary")}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats / Floating Card */}
        <div className="lg:col-span-5 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            style={{ perspective: 1000 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse-glow" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transform rotate-y-[-5deg]">
              <div className="space-y-8">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shrink-0 shadow-lg">
                      <span className="text-2xl font-display font-bold text-white">
                        {num === 1 ? "🛡️" : num === 2 ? "✨" : "🤝"}
                      </span>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-white mb-1">
                        {t(`hero.stat${num}Value`)}
                      </div>
                      <div className="text-white/70 font-medium">
                        {t(`hero.stat${num}Label`)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Flush bottom edge - no rounded corners or gradients bleeding into next section */}
    </section>
  );
}
