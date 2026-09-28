"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);

  const kicker = String(t("beforeAfter.kicker"));
  const title = String(t("beforeAfter.title"));
  const lede = String(t("beforeAfter.lede"));
  const labelBefore = String(t("beforeAfter.labelBefore"));
  const labelAfter = String(t("beforeAfter.labelAfter"));
  const caseOneTitle = String(t("beforeAfter.caseOneTitle"));
  const caseOneDesc = String(t("beforeAfter.caseOneDesc"));

  return (
    <section id="resultater" className="py-20 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
            {kicker}
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            {lede}
          </p>
        </div>

        {/* Large Interactive Comparison Card */}
        <div className="bg-bg-light rounded-md border border-gray-200 overflow-hidden shadow-sm p-4 sm:p-6">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded overflow-hidden select-none">
            {/* "After" Image (Clean) */}
            <img
              src="https://images.pexels.com/photos/10567236/pexels-photo-10567236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Etter grundig renhold"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-10 bg-primary/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded">
              {labelAfter}
            </div>

            {/* "Before" Image (Filtered/Grayscale to illustrate soiled state cleanly) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="https://images.pexels.com/photos/10567236/pexels-photo-10567236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Før renhold"
                className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-125 sepia"
                style={{ width: "100%", maxWidth: "none" }}
              />
              <div className="absolute top-4 left-4 z-10 bg-black/80 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                {labelBefore}
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md">
                ↔
              </div>
            </div>

            {/* Invisible Range Slider over the visual */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Før og etter sammenligning"
              className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            />
          </div>

          {/* Description Row below slider */}
          <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200/80 pt-4">
            <div>
              <h3 className="font-display font-bold text-base text-primary">
                {caseOneTitle}
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                {caseOneDesc}
              </p>
            </div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider whitespace-nowrap">
              Dra for å sammenligne
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
