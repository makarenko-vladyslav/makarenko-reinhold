"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { ArrowRight } from '@phosphor-icons/react';

export default function CTABanner() {
  const { t } = useLocale();
  const cta = t('ctaBanner') as { title: string, desc: string, btn: string };

  return (
    <section className="py-12 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl shadow-accent/20 relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{cta.title}</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">{cta.desc}</p>
            <a 
              href="#calculator" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl group"
            >
              {cta.btn}
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}