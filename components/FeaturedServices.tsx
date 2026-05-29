
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function FeaturedServices() {
  const { t } = useLocale();
  const items = t("featuredServices.items") as any[];

  // Custom SVG Icons mapped by ID
  const icons: Record<string, React.ReactNode> = {
    flyttevask: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10M2 10.5h20" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
    fastvask: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" strokeDasharray="4 4" strokeLinecap="round"/>
      </svg>
    ),
    kontorvask: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9h6M9 13h6M9 17h6M4 9h16" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    hyttevask: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12l10-9 10 9M4 10v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 22V12h4v10M14 8l4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("featuredServices.badge")}
          title={t("featuredServices.title")}
          subtitle={t("featuredServices.subtitle")}
          centered
        />

        {/* L-Shape Layout (Pattern 9) */}
        <div className="grid lg:grid-cols-12 gap-8 mt-16">
          
          {/* Large Featured Image Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden h-[400px] lg:h-auto"
          >
            <img 
              src={items[0].imageUrl} 
              alt={items[0].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                Mest Populær
              </span>
              <h3 className="text-3xl font-display font-bold text-white mb-2">{items[0].title}</h3>
              <p className="text-white/80">{items[0].description}</p>
            </div>
          </motion.div>

          {/* Cards Grid Right */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-light rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-accent/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  {icons[item.id]}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
