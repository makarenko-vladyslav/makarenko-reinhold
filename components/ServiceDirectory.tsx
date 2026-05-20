"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function ServiceDirectory() {
  const { t } = useLocale();
  const title = t('services.directoryTitle') as string;
  const directory = t('services.directory') as string[];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">{title}</h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
            <p className="text-text-muted mb-8">
              Finner du ikke det du leter etter? Vi utfører alle typer renholdsoppdrag. Ta kontakt for spesialtilpasning.
            </p>
            <a href="#contact" className="text-accent font-bold hover:underline inline-flex items-center gap-2">
              Kontakt oss for spesialoppdrag
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {directory.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 8) * 0.05 }}
                  className="flex items-center gap-3 py-3 border-b border-gray-100 group"
                >
                  <svg className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-main font-medium group-hover:text-primary transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
