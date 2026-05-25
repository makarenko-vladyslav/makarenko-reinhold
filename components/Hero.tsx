"use client";
import { useLocale } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const stats = t("hero.stats") as { value: string; label: string }[];

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img 
          src={t("hero.imageUrl")} 
          alt="Cleaning Service" 
          className="w-full h-full object-cover"
        />
        {/* Deep overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {t("hero.badge")}
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                {t("hero.title")} <br />
                <span className="text-accent">{t("hero.titleAccent")}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
                {t("hero.subtitle")}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#calculator"
                  className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(185_75%_40%_/_0.4)] hover:shadow-[0_0_40px_hsl(185_75%_40%_/_0.6)] hover:-translate-y-1 flex items-center gap-2"
                >
                  {t("hero.ctaPrimary")}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a 
                  href="#services"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  {t("hero.ctaSecondary")}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Floating Trust Card - Redesigned for Cleanliness */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="bg-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              {/* Decorative subtle background element */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-bg-tint rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary font-bold text-lg">Makarenko Garanti</h3>
                    <p className="text-text-muted text-sm">Din trygghet i fokus</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-text-main font-medium">{stat.label}</span>
                      <span className="text-2xl font-display font-bold text-accent">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
