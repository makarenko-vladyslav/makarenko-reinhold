"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function CTABanner() {
  const { t } = useLocale();
  const ctaData = t('ctaBanner') as { title: string, subtitle: string, button: string };

  return (
    <section className="py-12 bg-white relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl -ml-20 -mb-20" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">{ctaData.title}</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">{ctaData.subtitle}</p>
            <a 
              href="#calculator" 
              className="inline-block px-10 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(175_80%_35%/0.4)] hover:shadow-[0_0_40px_hsl(175_80%_35%/0.6)] hover:-translate-y-1"
            >
              {ctaData.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
