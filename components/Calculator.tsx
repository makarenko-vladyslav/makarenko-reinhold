"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();
  const [propertyType, setPropertyType] = useState<'apartment' | 'house' | 'office'>('apartment');
  const [size, setSize] = useState<number>(60);
  const [extras, setExtras] = useState({
    windows: false,
    oven: false,
    balcony: false
  });

  const basePricePerSqm = pricingData.basePrices[propertyType];
  let extraCost = 0;
  if (extras.windows) extraCost += pricingData.extras.windows;
  if (extras.oven) extraCost += pricingData.extras.oven;
  if (extras.balcony) extraCost += pricingData.extras.balcony;

  const totalEstimate = (size * basePricePerSqm) + extraCost;

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const sizeInput = document.getElementById('contact-size') as HTMLInputElement;
      if (sizeInput) {
        sizeInput.value = size.toString();
      }
    }
  };

  return (
    <section id="calculator" className="py-12 lg:py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
            {t('calculator.kicker')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-text-main mb-6 uppercase">
            {t('calculator.title')}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {t('calculator.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-bg-light rounded-3xl p-6 sm:p-10 border border-primary-light shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="space-y-8 flex flex-col justify-between">
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-text-muted font-display mb-3">
                  {t('calculator.labelType')}
                </label>
                <div className="grid grid-cols-3 gap-2 bg-white p-1 rounded-xl border border-primary-light">
                  <button 
                    onClick={() => setPropertyType('apartment')}
                    className={`cursor-pointer py-2 px-3 rounded-lg text-xs font-bold font-display transition-all ${
                      propertyType === 'apartment' ? 'bg-primary text-white shadow-sm' : 'text-text-main hover:bg-primary-light/50'
                    }`}
                  >
                    {t('calculator.optionApartment')}
                  </button>
                  <button 
                    onClick={() => setPropertyType('house')}
                    className={`cursor-pointer py-2 px-3 rounded-lg text-xs font-bold font-display transition-all ${
                      propertyType === 'house' ? 'bg-primary text-white shadow-sm' : 'text-text-main hover:bg-primary-light/50'
                    }`}
                  >
                    {t('calculator.optionHouse')}
                  </button>
                  <button 
                    onClick={() => setPropertyType('office')}
                    className={`cursor-pointer py-2 px-3 rounded-lg text-xs font-bold font-display transition-all ${
                      propertyType === 'office' ? 'bg-primary text-white shadow-sm' : 'text-text-main hover:bg-primary-light/50'
                    }`}
                  >
                    {t('calculator.optionOffice')}
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-text-muted font-display">
                    {t('calculator.labelSize')}
                  </label>
                  <span className="text-xl font-display font-black text-primary">
                    {size} m²
                  </span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="250" 
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-primary-light rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-[9px] text-text-muted font-bold font-display mt-2">
                  <span>20 m²</span>
                  <span>250 m²</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-text-muted font-display mb-3">
                  {t('calculator.labelExtra')}
                </label>
                <div className="space-y-2">
                  <button 
                    type="button"
                    onClick={() => setExtras({...extras, windows: !extras.windows})}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                      extras.windows ? 'bg-primary-light/40 border-primary text-text-main' : 'bg-white border-primary-light/40 text-text-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold ${extras.windows ? 'text-accent' : 'text-text-muted/30'}`}>
                        {extras.windows ? '—' : '+'}
                      </span>
                      <span className="text-xs font-semibold text-text-main">{t('calculator.extraWindows')}</span>
                    </div>
                    <span className="text-xs font-display font-extrabold text-primary">+{pricingData.extras.windows} kr</span>
                  </button>

                  <button 
                    type="button"
                    onClick={() => setExtras({...extras, oven: !extras.oven})}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                      extras.oven ? 'bg-primary-light/40 border-primary text-text-main' : 'bg-white border-primary-light/40 text-text-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold ${extras.oven ? 'text-accent' : 'text-text-muted/30'}`}>
                        {extras.oven ? '—' : '+'}
                      </span>
                      <span className="text-xs font-semibold text-text-main">{t('calculator.extraOven')}</span>
                    </div>
                    <span className="text-xs font-display font-extrabold text-primary">+{pricingData.extras.oven} kr</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary-light flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-text-muted font-display block mb-4">
                  {t('calculator.priceEstimate')}
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-display font-black text-primary tabular-nums">
                    {totalEstimate.toLocaleString('no-NO')}
                  </span>
                  <span className="text-lg font-display font-bold text-primary">kr</span>
                </div>
                <p className="text-[10px] text-text-muted font-medium uppercase tracking-widest">
                  {t('calculator.taxIncluded')}
                </p>
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-text-main/70">
                    <span className="text-accent">✓</span>
                    <span>{t('calculator.noTravelFee')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-main/70">
                    <span className="text-accent">✓</span>
                    <span>Svanemerket kjemikalier inkludert</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-main/70">
                    <span className="text-accent">✓</span>
                    <span>Betaling via Vipps eller faktura</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button 
                  onClick={handleScrollToContact}
                  className="w-full py-4 rounded-xl bg-accent hover:bg-accent-dark text-white font-bold tracking-wider uppercase text-xs transition-all duration-300 glow-glow"
                >
                  {t('calculator.cta')}
                </button>
                <div className="flex items-center justify-center gap-4 mt-4 opacity-40 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Vipps_logo.svg" alt="Vipps" className="h-4" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Sikker betaling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}