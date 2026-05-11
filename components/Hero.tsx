
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src={t("hero.imageUrl")} 
          alt="Clean interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/90 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white text-sm font-medium">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
            >
              {t("hero.title")} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                {t("hero.titleAccent")}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#calculator" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(185_80%_40%_/_0.3)] hover:shadow-[0_0_40px_hsl(185_80%_40%_/_0.5)] hover:-translate-y-1 flex items-center gap-2">
                {t("hero.ctaPrimary")}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1">
                {t("hero.ctaSecondary")}
              </a>
            </motion.div>
          </div>

          {/* Floating Trust Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="hidden lg:block relative perspective-1000"
          >
            <div className="glass-panel-dark p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden animate-float">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">100% Garanti</h3>
                  <p className="text-white/70 text-sm">På all flyttevask</p>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-accent w-[85%]" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex -space-x-3">
                  <img src="https://picsum.photos/seed/user1/100/100" className="w-10 h-10 rounded-full border-2 border-primary" alt="User" />
                  <img src="https://picsum.photos/seed/user2/100/100" className="w-10 h-10 rounded-full border-2 border-primary" alt="User" />
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-accent flex items-center justify-center text-white text-xs font-bold">+500</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">5.0 ★★★★★</div>
                  <div className="text-white/60 text-xs">Fornøyde kunder</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom Wave/Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.9,122.2,192.31,109.28C237.7,99.71,280.89,76.62,321.39,56.44Z" fill="var(--color-surface)"></path>
        </svg>
      </div>
    </section>
  );
}
