"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function ServiceDirectory() {
  const { t } = useLocale();
  const categories = t("directory.categories");

  return (
    <section className="py-24 bg-bg-alt relative border-t border-gray-200">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <SectionHeading 
                badge={t("directory.badge")}
                title={t("directory.title")}
                subtitle={t("directory.subtitle")}
              />
              <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors group">
                {t("nav.cta")}
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Directory List */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {categories.map((cat: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {cat.name}
                  </h3>
                  <ul className="space-y-4">
                    {cat.services.map((service: string, j: number) => (
                      <li key={j} className="flex items-center justify-between border-b border-gray-200 pb-4 group cursor-pointer hover:border-accent transition-colors">
                        <span className="text-text-main font-medium group-hover:text-accent transition-colors">{service}</span>
                        <svg className="w-4 h-4 text-gray-300 group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
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
