"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { ShieldCheck } from "./Icons";

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src={t('hero.imageUrl')} 
          alt="Clean interior" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlay - Single layer, multiply blend for rich color without muddying */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 pt-20">
        
        {/* Text Content */}
        <div className="flex-1 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10"
          >
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold tracking-wide uppercase">{t('hero.badge')}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 drop-shadow-lg"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#calculator" className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full font-bold text-center transition-all shadow-[0_0_30px_hsl(185_75%_35%/0.4)] hover:shadow-[0_0_40px_hsl(185_75%_35%/0.6)] hover:-translate-y-1">
              {t('hero.cta1')}
            </a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center transition-all">
              {t('hero.cta2')}
            </a>
          </motion.div>
        </div>

        {/* Floating Trust Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="hidden lg:block w-72 bg-white rounded-3xl p-6 shadow-2xl shadow-black/50 relative animate-float"
        >
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-6">
            {(t('hero.stats') as any[]).map((stat, i) => (
              <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
