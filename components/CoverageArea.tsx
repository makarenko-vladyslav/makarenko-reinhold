
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function CoverageArea() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('coverage.badge') as string}
          title={t('coverage.title') as string}
          subtitle={t('coverage.subtitle') as string}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white"
        >
          <iframe 
            src={t('coverage.mapUrl') as string}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Coverage Map"
          />
        </motion.div>
      </div>
    </section>
  );
}
