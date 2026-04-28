
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function ServiceDirectory() {
  const { t } = useLocale();
  const items = t('directory.items') as string[];

  return (
    <section className="section-padding bg-bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-16">
        <div className="sticky top-32 self-start">
          <SectionHeading 
            badge={t('directory.badge')}
            title={t('directory.title')}
          />
          <p className="text-text-muted mb-8">
            Finner du ikke det du leter etter? Vi skreddersyr løsninger for spesielle behov.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
            Kontakt oss for spesialoppdrag <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.05 }}
              className="flex items-center gap-3 py-4 border-b border-gray-100 group"
            >
              <svg className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium text-text-main group-hover:text-primary transition-colors">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
