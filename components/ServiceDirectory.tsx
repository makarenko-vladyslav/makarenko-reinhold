"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function ServiceDirectory() {
  const { t } = useLocale();
  const categories = t('directory.categories') as { name: string, services: string[] }[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <SectionHeading 
              badge={t('directory.badge')}
              title={t('directory.title')}
              subtitle={t('directory.subtitle')}
            />
            <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors">
              Forespør spesialvask
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {categories.map((cat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-display font-bold text-primary mb-6 pb-4 border-b border-gray-100">{cat.name}</h3>
                  <ul className="space-y-4">
                    {cat.services.map((service, j) => (
                      <li key={j} className="flex items-center gap-3 group cursor-default">
                        <svg className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-text-main group-hover:text-primary group-hover:font-medium transition-colors -ml-7 group-hover:ml-0">{service}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
