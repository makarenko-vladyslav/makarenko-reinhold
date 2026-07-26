"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState("Alle tjenester");

  const categories = t("services.categories") as string[];
  const items = t("services.items") as Array<{
    id: string;
    category: string;
    tag: string;
    title: string;
    description: string;
    details: string[];
    price: string;
    priceUnit: string;
    isSignature: boolean;
  }>;

  const filteredItems = items ? items.filter(item => 
    activeCategory === "Alle tjenester" ? true : item.category === activeCategory
  ) : [];

  const signatureItem = filteredItems.find(i => i.isSignature) || filteredItems[0];
  const standardItems = filteredItems.filter(i => i.id !== signatureItem?.id);

  return (
    <section id="tjenester" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Editorial Header + Category Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-border-light">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              {String(t("services.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-text-main mt-2 leading-tight">
              {String(t("services.heading"))}
            </h2>
            <p className="text-base sm:text-lg text-text-muted mt-3 leading-relaxed">
              {String(t("services.subheading"))}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            {categories && categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface text-text-muted border border-border-light hover:bg-bg-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Composition: Signature Offer Hero + Dynamic Grid */}
        {signatureItem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-3xl bg-surface border-2 border-accent shadow-xl overflow-hidden relative grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Signature Left Column */}
            <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded bg-accent text-white font-mono text-xs font-bold uppercase tracking-wider">
                    {signatureItem.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-primary uppercase">
                    ANBEFALT HOVEDTJENESTE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-bold text-text-main leading-tight mb-4">
                  {signatureItem.title}
                </h3>

                <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mb-8">
                  {signatureItem.description}
                </p>

                {/* Details list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-border-light">
                  {signatureItem.details.map((detail, dIdx) => (
                    <div key={dIdx} className="text-xs text-text-main font-semibold flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature Right Column - Accent Side Callout */}
            <div className="lg:col-span-4 bg-primary text-white p-8 sm:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-primary-light">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold block mb-1">
                  Fast timepris eller fastpris
                </span>
                <div className="text-4xl font-display font-extrabold text-white mb-1">
                  {signatureItem.price}
                </div>
                <div className="text-xs font-mono text-white/70 mb-8">
                  {signatureItem.priceUnit}
                </div>

                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  Inkluderer faste sertifiserte renholdere, Svanemerkede kjemikalier og reisevei i Notodden.
                </p>
              </div>

              <a
                href="#kalkulator"
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-display font-bold text-center text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
              >
                Beregn din pris →
              </a>
            </div>
          </motion.div>
        )}

        {/* Secondary Services: Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {standardItems && standardItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-8 rounded-2xl bg-surface border border-border-light hover:border-accent/60 shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-accent-soft text-accent">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-text-main group-hover:text-accent transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-border-light/60">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="text-xs text-text-main font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border-light flex items-center justify-between gap-4">
                <div>
                  <div className="text-xl font-display font-extrabold text-primary">{item.price}</div>
                  <div className="text-[10px] font-mono text-text-muted">{item.priceUnit}</div>
                </div>

                <a
                  href="#kalkulator"
                  className="px-4 py-2 rounded-xl bg-primary hover:bg-accent text-white font-display font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Bestill →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote & Secondary Link */}
        <div className="p-6 rounded-2xl bg-surface border border-border-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-text-muted leading-relaxed">
            {String(t("services.footnote"))}
          </p>
          <a
            href="#kontakt"
            className="text-xs font-display font-bold text-accent hover:underline uppercase tracking-wider whitespace-nowrap"
          >
            Trenger du bedriftsavtale? Kontakt oss →
          </a>
        </div>

      </div>
    </section>
  );
}