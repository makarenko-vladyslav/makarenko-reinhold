"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function WhyUs() {
  const { t } = useLocale();
  const items = t("whyUs.items") as any[];

  return (
    <section className="py-24 bg-bg-light clip-diagonal-reverse pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
              {t("whyUs.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 text-balance">
              {t("whyUs.title")}
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-10" />
            
            <div className="space-y-8">
              {items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-accent mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/cleaning-equipment/800/1000" 
              alt="Professional Equipment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="glass-panel p-6 rounded-2xl">
                <div className="text-primary font-bold text-lg mb-1">Svanemerket Kvalitet</div>
                <div className="text-text-muted text-sm">Vi bruker kun godkjente midler som er trygge for barn og dyr.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}