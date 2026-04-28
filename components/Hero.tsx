"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import Button from "./ui/Button";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src={t("hero.imageUrl")} 
          alt="Clean interior" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium tracking-wide">{t("hero.badge")}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#calculator" variant="primary">
              {t("hero.ctaPrimary")}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Button>
            <Button href="#services" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
              {t("hero.ctaSecondary")}
            </Button>
          </motion.div>
        </div>

        {/* Right Floating Card */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="glass-panel-dark rounded-3xl p-8 relative animate-float">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-transparent rounded-3xl blur-xl -z-10" />
            
            <h3 className="text-2xl font-display font-bold text-white mb-6">Premium Standard</h3>
            
            <div className="space-y-6">
              {(t("hero.stats") as any[]).map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</p>
                    <p className="text-white font-medium">Dokumentert trygghet</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Svanemerkede produkter</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80 mt-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Fastpris uten skjulte gebyrer</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
