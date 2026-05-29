
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function CtaBanner() {
  const { t } = useLocale();
  const data = t("ctaBanner") as any;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {data.title}
            </h2>
            <p className="text-lg text-white/80 mb-10">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#calculator"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent/30 hover:-translate-y-1 w-full sm:w-auto"
              >
                {data.buttonText}
              </a>
              <span className="text-white/60 font-medium">
                {data.secondaryText}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
