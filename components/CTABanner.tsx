"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

export default function CTABanner() {
  const { t } = useLocale();
  const data = t('ctaBanner') as any;

  return (
    <section className="py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent rounded-3xl p-10 md:p-16 text-center shadow-accent relative overflow-hidden"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {data.title}
            </h2>
            <p className="text-xl text-white/90 mb-10">
              {data.desc}
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all group shadow-lg hover:shadow-xl hover:-translate-y-1">
              {data.btn}
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
