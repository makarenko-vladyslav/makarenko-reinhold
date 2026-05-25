"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">{t("ctaBanner.title")}</h2>
            <p className="text-xl text-white/80 mb-10">{t("ctaBanner.subtitle")}</p>
            <a href="#calculator" className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(195_85%_45%/0.4)] hover:shadow-[0_0_40px_hsl(195_85%_45%/0.6)] hover:-translate-y-1">
              {t("ctaBanner.button")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
