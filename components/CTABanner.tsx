
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { IconPhone } from "./Icons";

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
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t("ctaBanner.title")}
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              {t("ctaBanner.subtitle")}
            </p>
            <a 
              href="tel:+4796684393" 
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(185_75%_45%/0.4)] hover:shadow-[0_0_40px_hsl(185_75%_45%/0.6)] hover:-translate-y-1"
            >
              <IconPhone className="w-5 h-5" />
              {t("ctaBanner.button")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
