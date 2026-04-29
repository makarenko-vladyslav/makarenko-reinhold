
"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as Array<{title: string, description: string}>;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <SectionHeading 
              badge={t('whyUs.badge')}
              title={t('whyUs.title')}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/cleaning-details-pro/800/1000" alt="Cleaning details" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8"
              >
                {/* Custom list marker */}
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent" />
                <div className="absolute left-[3px] top-3 bottom-0 w-px bg-gray-100" />
                
                <h3 className="text-xl font-display font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
