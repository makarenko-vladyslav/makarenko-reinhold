"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function ServiceDirectory() {
  const { t } = useLocale();
  const directoryItems = t('services.directoryItems') as string[];
  const title = t('services.directoryTitle') as string;

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-display font-bold text-primary mb-4">{title}</h3>
            <div className="w-12 h-1 bg-accent rounded-full mb-6" />
            <p className="text-text-muted mb-8">Vi utfører også en rekke spesialiserte renholdstjenester. Finner du ikke det du leter etter? Ta kontakt for en skreddersydd løsning.</p>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors">
              Spør oss om spesialoppdrag
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {directoryItems.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 8) * 0.05 }}
                  className="flex items-center gap-3 py-3 border-b border-gray-100 group"
                >
                  <svg className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span className="text-primary font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
