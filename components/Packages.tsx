"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Packages() {
  const { t } = useLocale();

  const kicker = String(t("packages.kicker"));
  const title = String(t("packages.title"));
  const lede = String(t("packages.lede"));
  const signatureLabel = String(t("packages.signatureLabel"));
  const signatureTitle = String(t("packages.signatureTitle"));
  const signaturePrice = String(t("packages.signaturePrice"));
  const signatureDesc = String(t("packages.signatureDesc"));
  const signatureCta = String(t("packages.signatureCta") || "Bestill med garanti");
  const footnote = String(t("packages.footnote"));
  const secondaryLink = String(t("packages.secondaryLink"));
  const categories = (t("packages.categories") as string[]) || [];
  const items = (t("packages.items") as Array<{
    cat: string;
    name: string;
    desc: string;
    price: string;
    tag: string;
  }>) || [];

  const [activeTab, setActiveTab] = useState("Alle oppdrag");

  const filteredItems = activeTab === "Alle oppdrag"
    ? items
    : items.filter((it) => it.cat === activeTab);

  return (
    <section id="pakker" className="py-20 bg-white border-t border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Split Layout with Sticky Left Rail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Sticky Left Rail: Section Title, Lede & Category Filters */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-5 bg-accent" />
              <p className="text-xs font-bold tracking-widest uppercase text-accent font-display">
                {kicker}
              </p>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
              {lede}
            </p>

            {/* Category Filter Group */}
            <div className="flex flex-wrap lg:flex-col gap-2 pt-2 border-t border-gray-100">
              <span className="text-[11px] font-display font-bold uppercase tracking-wider text-text-muted mb-1 block">
                Filtrer priser:
              </span>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 py-2 rounded text-xs font-display font-bold uppercase tracking-wider text-left transition-colors duration-150 ease-out ${
                    activeTab === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-bg-light text-text-muted border border-gray-200 hover:border-gray-400 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mini Trust Stamp in Rail */}
            <div className="hidden lg:block mt-8 p-4 bg-bg-light rounded border border-gray-200 text-xs text-text-muted">
              <p className="font-semibold text-primary mb-1">Depositumsgaranti inkludert</p>
              <p className="text-[11px] leading-relaxed">
                Ved eventuelle bemerkninger på flyttevask utbedrer vi kostnadsfritt innen 24 timer.
              </p>
            </div>
          </aside>

          {/* Right Rail: Signature Card + Master Item Breakdown */}
          <div className="lg:col-span-8 space-y-8">
            {/* Signature Package Highlight Box */}
            <div className="bg-primary text-white rounded-lg p-6 sm:p-8 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-accent" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-display">
                  {signatureLabel}
                </span>
                <span className="text-xs text-white/60">Fastpris 70 m²</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mb-2">
                {signatureTitle}
              </h3>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-accent mb-4 tabular-nums">
                {signaturePrice}
              </div>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 border-t border-white/15 pt-4">
                {signatureDesc}
              </p>
              <a
                href="#bestill"
                className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 rounded font-display font-bold text-xs uppercase tracking-wider bg-accent hover:bg-accent-dark text-white transition-colors duration-150 ease-out"
              >
                {signatureCta}
              </a>
            </div>

            {/* Master Price Rows with Dotted Leaders & Tabular Prices */}
            <div className="bg-bg-light rounded-lg p-6 sm:p-8 border border-gray-200">
              <div className="divide-y divide-gray-200/80">
                {filteredItems.map((item, i) => (
                  <div key={i} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-2 flex-grow pr-4">
                        <span className="font-display font-bold text-sm sm:text-base text-primary">
                          {item.name}
                        </span>
                        {item.tag && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/25">
                            {item.tag}
                          </span>
                        )}
                        <span className="hidden sm:inline-block flex-grow border-b border-dotted border-gray-300 mx-2" />
                      </div>
                      <span className="font-display font-extrabold text-sm sm:text-base text-primary whitespace-nowrap tabular-nums">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footnote Line and Secondary Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-text-muted">
              <p className="max-w-xl leading-relaxed">{footnote}</p>
              <a
                href="#kontakt"
                className="font-display font-bold text-accent hover:underline whitespace-nowrap transition-colors duration-150 ease-out"
              >
                {secondaryLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
