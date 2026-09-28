"use client";
import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();

  const [area, setArea] = useState<number>(65);
  const [serviceKey, setServiceKey] = useState<string>("moveout");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["windows"]);

  const services = pricingData.serviceRates as Record<
    string,
    { name: string; ratePerM2: number; baseHours: number; minPrice: number }
  >;

  const currentService = services[serviceKey] || services.regular;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const baseRaw = area * currentService.ratePerM2;
    const finalBase = Math.max(baseRaw, currentService.minPrice);

    let addonsSum = 0;
    pricingData.addons.forEach((addon) => {
      if (selectedAddons.includes(addon.id)) {
        addonsSum += addon.price;
      }
    });

    const totalNok = Math.round(finalBase + addonsSum);
    const vatNok = Math.round(totalNok * 0.2);
    const netNok = totalNok - vatNok;
    const estimatedHours = (currentService.baseHours + (area > 50 ? (area - 50) * 0.05 : 0)).toFixed(1);

    return { totalNok, vatNok, netNok, estimatedHours };
  }, [area, currentService, selectedAddons]);

  const formatNok = (val: number) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0") + " NOK";
  };

  return (
    <section id="calculator" className="scroll-mt-20 py-20 bg-[hsl(195_25%_98%)] border-t border-[hsl(204_20%_88%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
            {t("calculator.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
            {t("calculator.title") as string}
          </h2>
          <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed font-light">
            {t("calculator.subtitle") as string}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Side */}
          <div className="lg:col-span-7 bg-[hsl(0_0%_100%)] p-6 sm:p-8 rounded-2xl border border-[hsl(204_20%_88%)] shadow-sm space-y-8">
            {/* Service selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-sans font-bold text-[hsl(204_35%_15%)]">
                  {t("calculator.serviceLabel") as string}
                </label>
                <span className="text-xs text-[hsl(204_15%_50%)] font-sans">
                  {t("calculator.rateLabel") as string} {currentService.ratePerM2} NOK / м²
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(services).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setServiceKey(key)}
                    className={`p-3.5 text-left rounded-xl border text-sm transition-all ${
                      serviceKey === key
                        ? "border-[hsl(158_64%_38%)] bg-[hsl(158_50%_96%)] text-[hsl(204_35%_15%)] font-semibold shadow-xs"
                        : "border-[hsl(204_20%_88%)] bg-[hsl(195_25%_98%)] text-[hsl(204_15%_42%)] hover:bg-[hsl(0_0%_100%)]"
                    }`}
                  >
                    <div className="font-display font-bold text-base leading-snug">
                      {item.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-sans font-bold text-[hsl(204_35%_15%)]">
                  {t("calculator.areaLabel") as string}
                </label>
                <span className="font-display font-bold text-2xl text-[hsl(158_64%_38%)] tabular-nums">
                  {area} м²
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-[hsl(204_20%_90%)] rounded-lg appearance-none cursor-pointer accent-[hsl(158_64%_38%)]"
              />
              <div className="flex justify-between text-xs text-[hsl(204_15%_42%)] mt-2 font-sans">
                <span>20 м²</span>
                <span>80 м²</span>
                <span>150 м²</span>
                <span>250 м²</span>
              </div>
            </div>

            {/* Addons */}
            <div>
              <label className="block text-sm font-sans font-bold text-[hsl(204_35%_15%)] mb-3">
                {t("calculator.addonsLabel") as string}
              </label>
              <div className="space-y-2.5">
                {pricingData.addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-3 rounded-lg border text-left flex items-center justify-between text-sm transition-all ${
                        isChecked
                          ? "border-[hsl(158_64%_38%)] bg-[hsl(158_50%_96%)] text-[hsl(204_35%_15%)] font-medium"
                          : "border-[hsl(204_20%_88%)] bg-[hsl(195_25%_98%)] text-[hsl(204_15%_42%)] hover:bg-[hsl(0_0%_100%)]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                            isChecked
                              ? "bg-[hsl(158_64%_38%)] border-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] font-bold"
                              : "border-[hsl(204_20%_75%)] bg-[hsl(0_0%_100%)]"
                          }`}
                        >
                          {isChecked ? "OK" : ""}
                        </span>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-display font-bold text-[hsl(204_35%_15%)] tabular-nums">
                        +{formatNok(addon.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card Side */}
          <div className="lg:col-span-5 bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)] p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_48%)] mb-2">
                {t("calculator.summaryTitle") as string}
              </div>
              <h3 className="font-display font-extrabold text-2xl text-[hsl(0_0%_100%)] mb-6">
                {currentService.name}
              </h3>

              <div className="space-y-4 pb-6 border-b border-[hsl(0_0%_100%/0.15)] text-sm">
                <div className="flex justify-between text-[hsl(0_0%_100%/0.8)]">
                  <span>Розрахункова площа:</span>
                  <span className="font-bold text-[hsl(0_0%_100%)] tabular-nums">{area} м²</span>
                </div>
                <div className="flex justify-between text-[hsl(0_0%_100%/0.8)]">
                  <span>{t("calculator.hoursEstimate") as string}</span>
                  <span className="font-bold text-[hsl(0_0%_100%)] tabular-nums">
                    ~{calculation.estimatedHours} {t("calculator.hoursSuffix") as string}
                  </span>
                </div>
                <div className="flex justify-between text-[hsl(0_0%_100%/0.8)]">
                  <span>Чиста вартість (Netto):</span>
                  <span className="font-mono text-[hsl(0_0%_100%)] tabular-nums">{formatNok(calculation.netNok)}</span>
                </div>
                <div className="flex justify-between text-[hsl(0_0%_100%/0.8)]">
                  <span>MVA (ПДВ 25%):</span>
                  <span className="font-mono text-[hsl(0_0%_100%)] tabular-nums">{formatNok(calculation.vatNok)}</span>
                </div>
              </div>

              {/* Total Display */}
              <div className="py-6">
                <div className="text-xs text-[hsl(158_64%_55%)] font-sans uppercase tracking-wider mb-1">
                  {t("calculator.vatIncluded") as string}
                </div>
                <div className="font-display font-black text-4xl sm:text-5xl text-[hsl(0_0%_100%)] tracking-tight tabular-nums">
                  {formatNok(calculation.totalNok)}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="#contact"
                className="block w-full py-4 text-center rounded-xl bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] font-display font-bold text-lg hover:bg-[hsl(158_70%_32%)] transition-colors shadow-md shadow-[hsl(158_64%_38%/0.3)]"
              >
                {t("calculator.bookButton") as string}
              </a>
              <div className="text-center">
                <a
                  href={`tel:${t("brand.phone") as string}`}
                  className="text-xs text-[hsl(0_0%_100%/0.7)] hover:text-[hsl(0_0%_100%)] hover:underline"
                >
                  {t("calculator.secondaryLink") as string}
                </a>
              </div>
              <p className="text-xs text-[hsl(0_0%_100%/0.65)] leading-relaxed font-light">
                {t("calculator.note") as string}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
