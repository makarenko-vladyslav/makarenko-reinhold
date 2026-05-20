
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function CTABanner() {
  const { t } = useLocale();
  const data = t("ctaBanner") as any;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-30" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-dark rounded-full blur-[100px] opacity-20" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{data.title}</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">{data.subtitle}</p>
            <a href="#contact" className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_hsl(199_89%_48%_/_0.3)]">
              {data.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
