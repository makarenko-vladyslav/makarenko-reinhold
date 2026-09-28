"use client";
import { useLocale } from "@/lib/i18n";

export default function Coverage() {
  const { t } = useLocale();

  const kicker = String(t("coverage.kicker"));
  const title = String(t("coverage.title"));
  const lede = String(t("coverage.lede"));
  const zones = (t("coverage.zones") as string[]) || [];
  const travelNotice = String(t("coverage.travelNotice"));

  return (
    <section className="py-20 bg-bg-light border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text and Zone Tags */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
              {kicker}
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-base text-text-muted leading-relaxed mb-6">
              {lede}
            </p>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {zones.map((zone, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded bg-white border border-gray-300 font-display font-semibold text-xs text-primary"
                >
                  {zone}
                </span>
              ))}
            </div>

            <p className="text-xs text-text-muted border-l-2 border-accent pl-3 italic">
              {travelNotice}
            </p>
          </div>

          {/* Visual Map Embed Placeholder */}
          <div className="lg:col-span-5">
            <div className="bg-white p-3 rounded-md border border-gray-200 shadow-sm">
              <iframe
                title="Dekningsområde Notodden og Telemark"
                src="https://www.google.com/maps?q=Notodden,Telemark,Norge&output=embed"
                className="w-full h-72 rounded border-0"
                loading="lazy"
              />
              <div className="p-3 text-center">
                <a
                  href="https://maps.google.com/?q=Notodden,Norge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-accent hover:underline uppercase tracking-wide"
                >
                  Åpne kart i Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
