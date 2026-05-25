"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function CoverageArea() {
  const { t } = useLocale();
  const areas = t("coverage.areas") as string[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2">
          <SectionHeading badge={t("coverage.badge")} title={t("coverage.title")} subtitle={t("coverage.subtitle")} centered={false} />
          
          <div className="grid grid-cols-2 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border-light bg-bg-light">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="font-medium text-text-main text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-xl border border-border-light relative bg-bg-light">
          {/* Placeholder for real Google Maps embed. Using a styled placeholder for preview. */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <svg className="w-16 h-16 text-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            <p className="text-text-muted font-medium">Google Maps Integration<br/>Centerted on Notodden, Norway</p>
          </div>
        </div>

      </div>
    </section>
  );
}
