
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { Certificate, IdentificationCard, Leaf, ShieldCheck } from '@phosphor-icons/react';

export default function TrustBar() {
  const { t } = useLocale();
  const items = t('trustBar') as { title: string; desc: string }[];
  const icons = [Certificate, IdentificationCard, Leaf, ShieldCheck];

  return (
    <section className="bg-white border-b border-gray-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-premium">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {items.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 flex items-center gap-4 group hover:bg-gray-50 transition-colors first:rounded-t-2xl lg:first:rounded-l-2xl lg:first:rounded-tr-none last:rounded-b-2xl lg:last:rounded-r-2xl lg:last:rounded-bl-none"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon size={24} weight="duotone" className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm md:text-base">{item.title}</h4>
                <p className="text-xs md:text-sm text-text-muted">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
