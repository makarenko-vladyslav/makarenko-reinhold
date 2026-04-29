"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-grid-dark opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t("ctaBanner.title")}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {t("ctaBanner.subtitle")}
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-dark transition-all shadow-[0_0_30px_hsl(185_80%_40%_/_0.4)] hover:-translate-y-1"
            >
              {t("ctaBanner.button")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
