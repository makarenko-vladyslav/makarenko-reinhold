"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as { name: string; role: string; text: string; rating: number }[];

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('testimonials.badge')}
          title={t('testimonials.title')}
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(item.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-text-main text-lg italic mb-8 grow">"{item.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={`https://picsum.photos/seed/${item.name.replace(' ', '')}/100/100`} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-primary">{item.name}</h4>
                  <p className="text-sm text-text-muted">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
