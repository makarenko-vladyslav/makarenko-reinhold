
"use client";
import { useLocale } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = t("hero.stats") as { value: string, label: string }[];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(199_89%_48%_/_0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(222_47%_18%_/_0.8),transparent_50%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Typography */}
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wide uppercase">{t("hero.badge")}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            {t("hero.title").split(' ').map((word: string, i: number) => (
              <span key={i} className={word.toLowerCase().includes('notodden') || word.toLowerCase().includes('precision') || word.toLowerCase().includes('presisjonsrenhold') ? "text-accent" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-inverse-muted mb-10 leading-relaxed max-w-xl"
          >
            {t("hero.subtitle")}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#calculator" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_hsl(199_89%_48%_/_0.3)]">
              {t("hero.ctaPrimary")}
            </a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </div>

        {/* Right: Bento Grid UI Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Card */}
          <div className="glass-panel-dark rounded-3xl p-8 w-full max-w-md relative z-20 shadow-2xl transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Flyttevask Garanti</h3>
                  <p className="text-xs text-white/60">Sjekkliste godkjent</p>
                </div>
              </div>
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">Aktiv</span>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8 + (i * 0.2), duration: 0.8 }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Badge 1 */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-20 glass-panel-dark p-4 rounded-2xl z-30 shadow-xl border border-white/10 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <span className="text-xl font-bold text-white">10M</span>
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Forsikring</p>
              <p className="text-sm font-bold text-white">Full Dekning</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 bottom-20 glass-panel-dark p-4 rounded-2xl z-30 shadow-xl border border-white/10 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">HMS-Kort</p>
              <p className="text-xs text-white/60">100% Lovlig</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Stats Strip */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-primary-light/50 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 text-center px-4">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
