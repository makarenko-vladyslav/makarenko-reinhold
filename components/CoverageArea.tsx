"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function CoverageArea() {
  const { t } = useLocale();
  const areas = t("coverage.areas") as string[];

  if (!areas || areas.length === 0) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading 
            badge={t("coverage.badge")}
            title={t("coverage.title")}
            subtitle={t("coverage.subtitle")}
          />
          
          <div className="flex flex-wrap gap-3 mt-8">
            {areas.map((area, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 bg-bg-light border border-gray-100 rounded-full text-primary font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {area}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-bg-light flex items-center justify-center"
        >
          {/* Map placeholder - using iframe for Google Maps */}
          <iframe 
            src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-80"
          ></iframe>
          <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
