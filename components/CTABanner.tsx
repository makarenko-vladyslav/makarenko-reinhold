"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-20 text-center"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-accent) 0%, transparent 70%)' }} />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {t("ctaBanner.title") as string}
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              {t("ctaBanner.subtitle") as string}
            </p>
            <a 
              href="#contact" 
              className="inline-block px-10 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-accent/30"
            >
              {t("ctaBanner.button") as string}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
