
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import Button from "./Button";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-primary shadow-2xl p-10 md:p-16 text-center"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-bg-white mb-6">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-xl text-bg-white/80 mb-10">
              {t('ctaBanner.subtitle')}
            </p>
            <Button variant="primary" className="scale-110" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              {t('ctaBanner.button')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
