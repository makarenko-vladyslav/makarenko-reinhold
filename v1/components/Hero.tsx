"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { ArrowRightIcon, CheckIcon, ShieldIcon } from "./Icons";
import { Button } from "./Shared";

export default function Hero() {
  const { t } = useLocale();
  const stats = t("hero.stats") as { value: string; label: string }[];

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 pb-12 overflow-hidden bg-bg-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(215_40%_20%),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(150_60%_20%_/_0.2),transparent_40%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-sm font-semibold mb-6 backdrop-blur-sm">
              <ShieldIcon className="w-4 h-4 text-accent" />
              {t("hero.badge")}
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {t("hero.title").split('.')[0]}.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">
                {t("hero.titleHighlight")}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#calculator" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full group text-lg px-8 py-4">
                  {t("hero.ctaPrimary")}
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/5 text-lg px-8 py-4">
                  {t("hero.ctaSecondary")}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Bento Grid Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {/* Main Image Card */}
            <div className="col-span-2 relative rounded-3xl overflow-hidden h-64 sm:h-80 shadow-2xl group">
              <img 
                src="https://picsum.photos/seed/clean-living/800/600" 
                alt="Clean home" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel-dark rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">Flyttevask</p>
                    <p className="text-white/70 text-sm">100% Godkjent garanti</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Cards */}
            {stats.slice(0,2).map((stat, i) => (
              <div key={i} className="glass-panel-dark rounded-3xl p-6 flex flex-col justify-center border border-white/5 hover:border-accent/30 transition-colors">
                <span className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">{stat.value}</span>
                <span className="text-sm text-white/60">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
      
      {/* Bottom curved edge overlap */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-bg-light rounded-t-[3rem] translate-y-1" />
    </section>
  );
}
