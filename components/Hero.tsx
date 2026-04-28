"use client";
import { useLocale } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/Button";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Stagger variants for left content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden bg-primary">
      {/* Premium Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated glowing orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent/30 rounded-full blur-[150px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-blue-500/20 rounded-full blur-[150px] mix-blend-screen" 
        />
        
        {/* Subtle Tech/Premium Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl pt-10 lg:pt-0"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-bg-white/5 border border-bg-white/10 backdrop-blur-md mb-8 shadow-[0_0_20px_hsl(185_75%_40%/0.1)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-bg-white">{t('hero.badge')}</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-bg-white leading-[1.05] mb-6 tracking-tight"
          >
            {String(t('hero.title')).split('<br/>').map((part, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 && arr.length > 1 ? <span className="text-gradient">{part}</span> : part}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-bg-white/70 leading-relaxed mb-10 max-w-lg font-light"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <Button onClick={() => document.getElementById('calculator')?.scrollIntoView()} className="h-14 px-8 text-lg">
              {t('hero.ctaPrimary')}
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg border-bg-white/20 text-bg-white hover:bg-bg-white hover:text-primary" onClick={() => document.getElementById('services')?.scrollIntoView()}>
              {t('hero.ctaSecondary')}
            </Button>
          </motion.div>

          {/* Trust Anchor */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-6 border-t border-bg-white/10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/avatar${i}/100/100`}
                  alt="Customer"
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-primary bg-bg-white/10 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-bg-white">
                +500
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-accent text-sm">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <span className="text-sm text-bg-white/60 font-medium mt-0.5">Fornøyde kunder i Telemark</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Dynamic Visual Showcase */}
        <motion.div 
          style={{ y, opacity }}
          className="relative h-[500px] lg:h-[650px] w-full mt-10 lg:mt-0"
        >
          {/* Main Tall Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden border border-bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
          >
            <img 
              src="https://picsum.photos/seed/luxury-clean-living-room/800/1000" 
              alt="Pristine living room" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          </motion.div>

          {/* Secondary Overlapping Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="absolute bottom-[5%] left-0 w-[60%] h-[40%] rounded-[2rem] overflow-hidden border-4 border-primary shadow-2xl z-20 hidden md:block"
          >
            <img 
              src="https://picsum.photos/seed/clean-kitchen-surface/600/400" 
              alt="Sparkling clean surface" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          </motion.div>

          {/* Floating Guarantee Card (Redesigned) */}
          <motion.div 
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] -left-[5%] lg:-left-[15%] z-30 w-72"
          >
            <div className="glass-panel-dark p-6 rounded-3xl border border-bg-white/10 shadow-[0_10px_40px_hsl(185_75%_40%/0.15)] relative overflow-hidden group">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bg-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              
              <div className="flex items-center gap-5 mb-4">
                {/* Animated Progress Ring */}
                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-bg-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <motion.path 
                      initial={{ strokeDasharray: "0, 100" }}
                      animate={{ strokeDasharray: "100, 100" }}
                      transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                      className="text-accent" 
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-lg font-display font-bold text-bg-white">{t('hero.floatingCard.stat')}</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-bg-white leading-tight mb-1">{t('hero.floatingCard.title')}</h3>
                  <p className="text-xs text-bg-white/60">{t('hero.floatingCard.desc')}</p>
                </div>
              </div>
              
              <div className="bg-bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-bg-white/5">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span className="text-sm font-medium text-bg-white/90">{t('hero.floatingCard.statLabel')}</span>
              </div>
            </div>
          </motion.div>

          {/* Decorative Sparkle Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 right-10 z-30 w-24 h-24 bg-bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] hidden md:flex"
          >
            <div className="absolute inset-1 border border-dashed border-primary/20 rounded-full" />
            <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
