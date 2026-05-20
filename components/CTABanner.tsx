"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-light rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {t('ctaBanner.subtitle')}
            </p>
            <a 
              href="#contact" 
              className="inline-block px-10 py-5 bg-accent hover:bg-accent-light text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(185_75%_35%/0.4)] hover:shadow-[0_0_40px_hsl(185_75%_35%/0.6)] hover:-translate-y-1"
            >
              {t('ctaBanner.button')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
