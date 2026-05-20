"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function CtaBanner() {
  const { t } = useLocale();
  const content = t("ctaBanner");

  return (
    <section className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-50" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent-light rounded-full blur-[120px] opacity-30" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {content.title}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {content.subtitle}
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_hsl(185_80%_35%/0.4)] hover:shadow-[0_0_40px_hsl(185_80%_45%/0.6)] hover:-translate-y-1"
            >
              {content.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
