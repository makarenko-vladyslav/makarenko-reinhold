"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[80px] opacity-10 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                {t('ctaBanner.title')}
              </h2>
              <p className="text-white/80 text-lg">
                {t('ctaBanner.subtitle')}
              </p>
            </div>
            <div className="shrink-0">
              <a href="#contact" className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_hsl(150_75%_38%_/_0.3)] hover:-translate-y-1 whitespace-nowrap">
                {t('ctaBanner.button')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
