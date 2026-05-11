"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Icons } from "./Icons";
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
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={t('hero.image')} 
          alt="Cleaning Service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/90" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {t('hero.badge')}
            </span>
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#calculator"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_30px_hsl(173_80%_40%/0.4)] hover:shadow-[0_0_40px_hsl(173_80%_40%/0.6)] hover:-translate-y-1 flex items-center gap-2"
              >
                {t('hero.ctaPrimary')}
                <Icons.ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/10 transition-all"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>

            {/* Trust List */}
            <div className="flex flex-col sm:flex-row gap-6">
              {(t('hero.trustList') as string[]).map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Icons.Check className="w-3 h-3" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Floating Card (Bento Style) */}
        <div className="lg:col-span-5 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="glass-panel-dark rounded-3xl p-8 relative"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-white font-display font-bold text-xl mb-1">Flyttevask Garanti</h3>
                <p className="text-white/60 text-sm">100% godkjent overtakelse</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Icons.Shield className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-white/80">Pris fra</span>
                <span className="text-white font-bold text-xl">550 NOK/t</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-white/80">Forsikring</span>
                <span className="text-white font-bold">10 Mill. NOK</span>
              </div>
            </div>

            <a 
              href="#calculator"
              className="w-full block text-center bg-white text-primary py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Start Priskalkulator
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
