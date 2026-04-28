"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import Button from "./ui/Button";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t("ctaBanner.title")}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {t("ctaBanner.subtitle")}
            </p>
            <Button href="#contact" variant="primary" className="text-lg px-10 py-5">
              {t("ctaBanner.button")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
