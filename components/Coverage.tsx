"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Coverage() {
  const { t } = useLocale();
  const areas = t('coverage.areas') as string[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge={t('coverage.badge')}
              title={t('coverage.title')}
              subtitle={t('coverage.subtitle')}
            />
            
            <div className="grid sm:grid-cols-2 gap-4">
              {areas.map((area, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-bg-tint p-4 rounded-xl border border-gray-100"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-medium text-primary">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            {/* Embedded Google Map centered on Notodden */}
            <iframe 
              src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
