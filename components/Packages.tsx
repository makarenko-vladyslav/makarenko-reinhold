"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface PriceRow {
  category: "residential" | "moving" | "cabin";
  name: string;
  price: string;
  desc: string;
  tag: string;
}

export default function Packages() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<"all" | "residential" | "moving" | "cabin">("all");

  const items = (t("packages.items") as PriceRow[]) || [];

  const filteredItems =
    activeTab === "all"
      ? items
      : items.filter((row) => row.category === activeTab);

  return (
    <section id="packages" className="scroll-mt-20 py-20 bg-[hsl(0_0%_100%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
            {t("packages.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
            {t("packages.title") as string}
          </h2>
          <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed font-light">
            {t("packages.subtitle") as string}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-3 border-b border-[hsl(204_20%_90%)]">
          {[
            { id: "all", label: "Усі позиції" },
            { id: "residential", label: t("packages.tabResidential") as string },
            { id: "moving", label: t("packages.tabMoving") as string },
            { id: "cabin", label: t("packages.tabCabin") as string },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
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

        {/* Signature Featured Item Container */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)] border-2 border-[hsl(158_64%_45%)] shadow-xl relative overflow-hidden">
          <div className="inline-block bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {t("packages.signatureBadge") as string}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[hsl(0_0%_100%)] mb-3 leading-snug">
                {t("packages.signatureTitle") as string}
              </h3>
              <p className="text-sm text-[hsl(0_0%_100%/0.8)] leading-relaxed font-light mb-4 max-w-2xl">
                {t("packages.signatureDesc") as string}
              </p>
              <div className="text-xs text-[hsl(158_64%_55%)] font-sans font-medium">
                {t("packages.signatureNote") as string}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-4 border-t lg:border-t-0 lg:border-l border-[hsl(0_0%_100%/0.15)] pt-4 lg:pt-0 lg:pl-8">
              <div>
                <span className="text-xs text-[hsl(0_0%_100%/0.6)] uppercase tracking-wider block font-sans">
                  Фіксована ставка
                </span>
                <span className="font-display font-black text-3xl sm:text-4xl text-[hsl(158_64%_48%)]">
                  {t("packages.signaturePrice") as string}
                </span>
              </div>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] font-display font-bold text-sm tracking-wide hover:bg-[hsl(158_70%_32%)] transition-colors text-center shadow-md"
              >
                Замовити Flyttevask
              </a>
            </div>
          </div>
        </div>

        {/* 10-Item Structured Table with Dotted Leaders */}
        <div className="space-y-4 mb-10">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[hsl(195_25%_98%)] border border-[hsl(204_20%_88%)] hover:border-[hsl(158_64%_38%/0.5)] transition-all group flex flex-col gap-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-display font-bold text-lg text-[hsl(204_35%_15%)] group-hover:text-[hsl(158_64%_38%)] transition-colors">
                    {item.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[hsl(158_50%_94%)] text-[hsl(158_64%_35%)] text-[11px] font-sans font-semibold">
                    {item.tag}
                  </span>
                </div>
                <div className="hidden sm:block flex-1 border-b border-dotted border-[hsl(204_20%_75%)] mx-2 relative -top-1" />
                <span className="font-display font-black text-xl text-[hsl(204_35%_15%)] sm:text-right whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-xs text-[hsl(204_15%_42%)] leading-relaxed font-light max-w-3xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote & Secondary CTA Pair */}
        <div className="pt-6 border-t border-[hsl(204_20%_90%)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[hsl(204_15%_45%)] max-w-xl font-light">
            {t("packages.footnote") as string}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#calculator"
              className="font-display font-bold text-sm text-[hsl(158_64%_38%)] hover:text-[hsl(158_70%_32%)] transition-colors"
            >
              Розрахувати за площею →
            </a>
            <a
              href={`tel:${t("brand.phone") as string}`}
              className="text-xs font-sans text-[hsl(204_35%_25%)] hover:underline"
            >
              Уточнити телефоном
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
