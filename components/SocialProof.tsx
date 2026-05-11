
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  
  const partners = [
    "Arbeidstilsynet", "Svanemerket", "Gjensidige Forsikring", "Telemark Eiendom", "Notodden Kommune"
  ];

  return (
    <section className="py-12 bg-bg-light border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-widest mb-8">
          {t('socialProof.title')}
        </p>
        
        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-light to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-light to-transparent z-10" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex whitespace-nowrap gap-16 items-center"
          >
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-sm" />
                </div>
                <span className="font-display font-bold text-xl text-primary">{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
