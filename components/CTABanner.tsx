
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Button } from "./Shared";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--color-accent)_0%,_transparent_60%)]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t('ctaBanner.title')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('ctaBanner.subtitle')}</p>
            <Button href="#calculator" variant="primary" className="text-lg px-10 py-5">{t('ctaBanner.button')}</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
