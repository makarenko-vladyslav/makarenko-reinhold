
"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { ShieldCheck, CheckCircle } from '@phosphor-icons/react';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-bg-dark">
      {/* Background Image with Parallax & Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/scandinavian-cleaning/1920/1080" 
          alt="Clean home" 
          className="w-full h-full object-cover opacity-40"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent mix-blend-multiply" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <ShieldCheck size={18} weight="duotone" className="text-accent" />
            {t('hero.badge') as string}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance"
          >
            {t('hero.title') as string}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
            {t('hero.subtitle') as string}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#calculator" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-medium text-lg text-center transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1">
              {t('hero.ctaPrimary') as string}
            </a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-medium text-lg text-center transition-all">
              {t('hero.ctaSecondary') as string}
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {(t('hero.trust') as string[]).map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                <CheckCircle size={18} weight="fill" className="text-accent" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Floating Card (USP) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 ml-auto max-w-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck size={28} weight="duotone" className="text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-2">100% Garanti</h3>
            <p className="text-text-muted mb-6">Vi følger eiendomsmeglernes strenge krav for flyttevask. Godkjent eller vi vasker på nytt gratis.</p>
            <div className="space-y-3">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-full" />
              </div>
              <div className="flex justify-between text-sm font-medium text-primary">
                <span>Kvalitetssikret</span>
                <span className="text-accent">100%</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
