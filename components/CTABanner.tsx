"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

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
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              {t("ctaBanner.title")}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              {t("ctaBanner.subtitle")}
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t("ctaBanner.btn")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
