
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { ShieldIcon, ClipboardIcon, ClockIcon, LeafIcon } from "./Icons";

const iconMap: Record<string, React.ReactNode> = {
  shield: <ShieldIcon />,
  clipboard: <ClipboardIcon />,
  clock: <ClockIcon />,
  leaf: <LeafIcon />
};

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as Array<{title: string, description: string, icon: string}>;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('whyUs.badge') as string}
          title={t('whyUs.title') as string}
          subtitle={t('whyUs.subtitle') as string}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 relative z-10">
                <div className="w-6 h-6">
                  {iconMap[item.icon]}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed relative z-10">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
