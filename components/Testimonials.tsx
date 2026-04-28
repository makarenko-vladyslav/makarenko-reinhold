
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as any[];

  return (
    <section id="reviews" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('testimonials.badge')}
          title={t('testimonials.title')}
          light
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel-dark p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="flex text-accent mb-6">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <p className="text-bg-white/90 text-lg leading-relaxed mb-8 flex-grow">"{item.text}"</p>
              
              <div className="flex items-center gap-4 border-t border-bg-white/10 pt-6">
                <img 
                  src={`https://picsum.photos/seed/${item.name.replace(' ', '')}/100/100`} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-bg-white/20"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-bg-white font-bold">{item.name}</h4>
                  <p className="text-bg-white/50 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
