
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-surface-alt px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-light rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-30 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-30 translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t('ctaBanner.title')}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {t('ctaBanner.subtitle')}
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(185_75%_40%_/_0.4)] hover:shadow-[0_0_40px_hsl(185_75%_40%_/_0.6)] hover:-translate-y-1"
          >
            {t('ctaBanner.button')}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
