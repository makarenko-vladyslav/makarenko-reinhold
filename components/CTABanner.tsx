
"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Calculator } from '@phosphor-icons/react';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('cta.title') as string}
            </h2>
            <p className="text-lg text-white/80 mb-10">
              {t('cta.desc') as string}
            </p>
            <a 
              href="#calculator" 
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all hover:-translate-y-1 shadow-lg shadow-accent/30"
            >
              <Calculator size={24} weight="duotone" />
              {t('cta.btn') as string}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
