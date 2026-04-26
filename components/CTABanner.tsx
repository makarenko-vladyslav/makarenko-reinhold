"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-bg-light px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-primary rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 text-balance">
            Klar for å komme hjem til rent hus?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            La oss ta oss av renholdet, slik at du kan bruke tiden din på det som virkelig betyr noe.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_hsl(185_80%_40%/0.4)] hover:-translate-y-1"
          >
            Få Gratis Prisoverslag
          </a>
        </div>
      </motion.div>
    </section>
  );
}
