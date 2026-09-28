"use client";
import { useState, useId } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();
  const areaInputId = useId();

  const [serviceType, setServiceType] = useState<"regular" | "moveout" | "deep">("moveout");
  const [area, setArea] = useState<number>(75);
  const [addOven, setAddOven] = useState(false);
  const [addFridge, setAddFridge] = useState(false);
  const [addWindows, setAddWindows] = useState(false);
  const [addBalcony, setAddBalcony] = useState(false);

  // Price arithmetic (in Norwegian kr format without toLocaleString)
  const calculateTotal = (): number => {
    let base = 0;
    if (serviceType === "moveout") {
      base = pricingData.moveOutBasePrice;
      if (area > pricingData.moveOutBaseSqm) {
        base += (area - pricingData.moveOutBaseSqm) * pricingData.moveOutSqmRate;
      }
    } else if (serviceType === "regular") {
      const hoursPerVisit = Math.max(2.5, Math.round((area / 35) * 10) / 10);
      base = Math.round(hoursPerVisit * 2 * pricingData.hourlyRate);
    } else {
      const hours = Math.max(4, Math.round((area / 20) * 10) / 10);
      base = Math.round(hours * pricingData.hourlyRate);
    }

    if (addOven) base += pricingData.additions.oven;
    if (addFridge) base += pricingData.additions.fridge;
    if (addWindows) base += pricingData.additions.windows;
    if (addBalcony) base += pricingData.additions.balcony;

    return Math.round(base);
  };

  const totalPrice = calculateTotal();
  const formattedPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");

  const kicker = String(t("calculator.kicker"));
  const title = String(t("calculator.title"));
  const lede = String(t("calculator.lede"));
  const step1Label = String(t("calculator.step1Label"));
  const step2Label = String(t("calculator.step2Label"));
  const step3Label = String(t("calculator.step3Label"));
  const sliderMinLabel = String(t("calculator.sliderMinLabel"));
  const sliderMidLabel = String(t("calculator.sliderMidLabel"));
  const sliderMaxLabel = String(t("calculator.sliderMaxLabel"));
  const sliderAriaLabel = String(t("calculator.sliderAriaLabel"));
  const currency = String(t("calculator.currency"));
  const optionMoveout = String(t("calculator.options.moveout"));
  const optionRegular = String(t("calculator.options.regular"));
  const optionDeep = String(t("calculator.options.deep"));
  const addonOven = String(t("calculator.addonOven"));
  const addonFridge = String(t("calculator.addonFridge"));
  const addonWindows = String(t("calculator.addonWindows"));
  const addonBalcony = String(t("calculator.addonBalcony"));
  const estimatedPriceLabel = String(t("calculator.estimatedPriceLabel"));
  const includedVat = String(t("calculator.includedVat"));
  const ctaBookCalculated = String(t("calculator.ctaBookCalculated"));
  const calculatedNote = String(t("calculator.calculatedNote"));

  return (
    <section id="kalkulator" className="py-20 bg-bg-light border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Split Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Sticky Left Rail Header */}
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

            {/* Quick Guarantees Box */}
            <div className="p-5 bg-white rounded-md border border-gray-200 space-y-3 text-xs text-text-muted">
              <div className="flex items-center gap-2 font-semibold text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Ingen skjulte kjøretillegg i Notodden
              </div>
              <div className="flex items-center gap-2 font-semibold text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                100 % garanti for godkjent overtakelse
              </div>
              <div className="flex items-center gap-2 font-semibold text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                SMS-bekreftelse innen 15 minutter
              </div>
            </div>
          </aside>

          {/* Right Rail: Interactive Calculator Console */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sm:p-10">
              {/* Step 1: Select Service */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  {step1Label}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setServiceType("moveout")}
                    className={`py-3 px-4 rounded text-xs sm:text-sm font-display font-bold text-center border transition-colors duration-150 ease-out ${
                      serviceType === "moveout"
                        ? "bg-primary text-white border-primary shadow-sm"
                        : "bg-bg-light text-primary border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {optionMoveout}
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType("regular")}
                    className={`py-3 px-4 rounded text-xs sm:text-sm font-display font-bold text-center border transition-colors duration-150 ease-out ${
                      serviceType === "regular"
                        ? "bg-primary text-white border-primary shadow-sm"
                        : "bg-bg-light text-primary border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {optionRegular}
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType("deep")}
                    className={`py-3 px-4 rounded text-xs sm:text-sm font-display font-bold text-center border transition-colors duration-150 ease-out ${
                      serviceType === "deep"
                        ? "bg-primary text-white border-primary shadow-sm"
                        : "bg-bg-light text-primary border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {optionDeep}
                  </button>
                </div>
              </div>

              {/* Step 2: Area Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor={areaInputId} className="text-xs font-bold uppercase tracking-wider text-primary">
                    {step2Label}
                  </label>
                  <span className="font-display font-extrabold text-xl text-accent tabular-nums">
                    {area} m²
                  </span>
                </div>
                <input
                  id={areaInputId}
                  type="range"
                  min="20"
                  max="280"
                  step="5"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-accent"
                  aria-label={sliderAriaLabel}
                />
                <div className="flex justify-between text-[11px] text-text-muted mt-2">
                  <span>{sliderMinLabel}</span>
                  <span>{sliderMidLabel}</span>
                  <span>{sliderMaxLabel}</span>
                </div>
              </div>

              {/* Step 3: Add-on Checkboxes */}
              <div className="mb-8 border-t border-gray-100 pt-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  {step3Label}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center space-x-3 p-3 rounded border border-gray-200 bg-bg-light cursor-pointer hover:bg-gray-100/50 transition-colors duration-150 ease-out">
                    <input
                      type="checkbox"
                      checked={addOven}
                      onChange={(e) => setAddOven(e.target.checked)}
                      className="w-4 h-4 text-accent rounded border-gray-300 focus:ring-accent"
                    />
                    <span className="text-xs text-text-main font-medium">
                      {addonOven}
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 p-3 rounded border border-gray-200 bg-bg-light cursor-pointer hover:bg-gray-100/50 transition-colors duration-150 ease-out">
                    <input
                      type="checkbox"
                      checked={addFridge}
                      onChange={(e) => setAddFridge(e.target.checked)}
                      className="w-4 h-4 text-accent rounded border-gray-300 focus:ring-accent"
                    />
                    <span className="text-xs text-text-main font-medium">
                      {addonFridge}
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 p-3 rounded border border-gray-200 bg-bg-light cursor-pointer hover:bg-gray-100/50 transition-colors duration-150 ease-out">
                    <input
                      type="checkbox"
                      checked={addWindows}
                      onChange={(e) => setAddWindows(e.target.checked)}
                      className="w-4 h-4 text-accent rounded border-gray-300 focus:ring-accent"
                    />
                    <span className="text-xs text-text-main font-medium">
                      {addonWindows}
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 p-3 rounded border border-gray-200 bg-bg-light cursor-pointer hover:bg-gray-100/50 transition-colors duration-150 ease-out">
                    <input
                      type="checkbox"
                      checked={addBalcony}
                      onChange={(e) => setAddBalcony(e.target.checked)}
                      className="w-4 h-4 text-accent rounded border-gray-300 focus:ring-accent"
                    />
                    <span className="text-xs text-text-main font-medium">
                      {addonBalcony}
                    </span>
                  </label>
                </div>
              </div>

              {/* Calculation Result Box */}
              <div className="bg-bg-surface rounded-lg p-6 sm:p-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block">
                    {estimatedPriceLabel}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight tabular-nums">
                      {formattedPrice} {currency}
                    </span>
                    <span className="text-xs text-text-muted font-medium">
                      {includedVat}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-1">
                    {calculatedNote}
                  </p>
                </div>

                <a
                  href={`#bestill?areal=${area}&type=${serviceType}&pris=${totalPrice}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded font-display font-bold text-xs uppercase tracking-wider bg-accent hover:bg-accent-dark text-white shadow-sm transition-colors duration-150 ease-out whitespace-nowrap"
                >
                  {ctaBookCalculated}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
