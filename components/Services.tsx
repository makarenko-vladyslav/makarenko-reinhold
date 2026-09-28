"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  details: string;
  tag: string;
  image: string;
}

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState("all");

  const items = (t("servicesSection.items") as ServiceItem[]) || [];

  const filteredItems =
    activeTab === "all"
      ? items
      : items.filter((item) => item.category === activeTab);

  return (
    <section id="services" className="scroll-mt-20 py-20 bg-[hsl(0_0%_100%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
            {t("servicesSection.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
            {t("servicesSection.title") as string}
          </h2>
          <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed font-light">
            {t("servicesSection.subtitle") as string}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-[hsl(204_20%_90%)]">
          {[
            { id: "all", label: t("servicesSection.tabAll") as string },
            { id: "home", label: t("servicesSection.tabHome") as string },
            { id: "moving", label: t("servicesSection.tabMoving") as string },
            { id: "cabin", label: t("servicesSection.tabCabin") as string },
            { id: "b2b", label: t("servicesSection.tabB2B") as string },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-sans text-xs font-semibold tracking-wider transition-all uppercase ${
                activeTab === tab.id
                  ? "bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)] shadow-sm"
                  : "bg-[hsl(195_25%_98%)] text-[hsl(204_35%_25%)] hover:bg-[hsl(196_45%_92%)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((service) => (
            <article
              key={service.id}
              className="flex flex-col bg-[hsl(195_25%_98%)] border border-[hsl(204_20%_88%)] rounded-xl overflow-hidden hover:border-[hsl(158_64%_38%/0.5)] transition-all group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[hsl(204_20%_90%)]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] px-2.5 py-0.5 rounded text-[11px] font-sans font-semibold">
                  {service.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-[hsl(204_40%_16%/0.88)] backdrop-blur-sm text-[hsl(0_0%_100%)] px-3 py-1 rounded text-xs font-display font-bold">
                  {service.price}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-[hsl(204_35%_15%)] leading-snug mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[hsl(204_15%_42%)] leading-relaxed mb-6 font-light flex-1">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[hsl(204_20%_88%)] flex items-center justify-between">
                  <span className="text-xs text-[hsl(158_64%_35%)] font-sans font-medium">
                    {service.details}
                  </span>
                  <a
                    href="#calculator"
                    className="text-xs font-display font-bold uppercase tracking-wider text-[hsl(204_40%_16%)] hover:text-[hsl(158_64%_38%)]"
                  >
                    Замовити →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Marginalia & Footnote */}
        <div className="pt-6 border-t border-[hsl(204_20%_90%)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-[hsl(204_15%_45%)] font-light">
            {t("servicesSection.footnote") as string}
          </span>
          <a
            href="#contact"
            className="font-display font-bold text-sm text-[hsl(158_64%_38%)] hover:underline"
          >
            {t("servicesSection.secondaryLink") as string} →
          </a>
        </div>
      </div>
    </section>
  );
}
