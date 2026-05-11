"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { Icons } from "./Icons";

export default function Advantages() {
  const { t } = useLocale();
  const data = t('advantages') as any;

  const getIcon = (name: string) => {
    switch(name) {
      case 'shield': return <Icons.Shield className="w-10 h-10" />;
      case 'insurance': return <Icons.Insurance className="w-10 h-10" />;
      case 'eco': return <Icons.Eco className="w-10 h-10" />;
      case 'check': return <Icons.Check className="w-10 h-10" />;
      default: return <Icons.Star className="w-10 h-10" />;
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bg-light rounded-3xl p-8 border border-gray-100 hover:border-accent/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent mb-6 shadow-sm relative z-10">
                {getIcon(item.icon)}
              </div>
              
              <h3 className="text-xl font-display font-bold text-primary mb-3 relative z-10">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
