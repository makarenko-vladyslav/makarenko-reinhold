
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLocale();
  const content = t('ctaBanner') as any;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">{content.title}</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">{content.desc}</p>
          
          <a href="#contact" className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10">
            {content.btn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
