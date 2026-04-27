
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { ArrowRightIcon, ShieldIcon } from "./Icons";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              {t('ctaBanner.title') as string}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              {t('ctaBanner.subtitle') as string}
            </p>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-lg transition-all hover:bg-accent-light hover:scale-105 shadow-[0_0_20px_hsl(175_80%_35%/0.3)] mb-6"
            >
              {t('ctaBanner.button') as string}
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm font-medium">
              <ShieldIcon className="w-4 h-4 text-accent" />
              {t('ctaBanner.guarantee') as string}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
