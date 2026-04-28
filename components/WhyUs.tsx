
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as any[];

  return (
    <section className="section-padding bg-bg-light relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
          <img 
            src="https://picsum.photos/seed/cleaning-details/800/1000" 
            alt="Cleaning details" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 glass-panel p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex text-accent">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <span className="font-bold text-primary">5.0</span>
            </div>
            <p className="text-sm font-medium text-text-main">Høyeste vurdering på MittAnbud i Notodden</p>
          </div>
        </div>

        <div>
          <SectionHeading 
            badge={t('whyUs.badge')}
            title={t('whyUs.title')}
          />
          
          <div className="space-y-6 mt-8">
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                  <span className="font-display font-bold text-xl">{i + 1}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
