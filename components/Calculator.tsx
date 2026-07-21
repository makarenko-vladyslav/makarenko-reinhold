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
        {/* Section Heading */}
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

        {/* Real Interactive Calculator Container */}
        <div className="max-w-4xl mx-auto bg-bg-light rounded-3xl p-6 sm:p-10 border border-primary-light shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Controls */}
            <div className="space-y-8 flex flex-col justify-between">
              {/* Type Switcher */}
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

              {/* Slider for size */}
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

              {/* Extras checklist */}
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

                  <button 
                    type="button"
                    onClick={() => setExtras({...extras, balcony: !extras.balcony})}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                      extras.balcony ? 'bg-primary-light/40 border-primary text-text-main' : 'bg-white border-primary-light/40 text-text-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold ${extras.balcony ? 'text-accent' : 'text-text-muted/30'}`}>
                        {extras.balcony ? '—' : '+'}
                      </span>
                      <span className="text-xs font-semibold text-text-main">{t('calculator.extraBalcony')}</span>
                    </div>
                    <span className="text-xs font-display font-extrabold text-primary">+{pricingData.extras.balcony} kr</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Price Output Display Area */}
            <div className="bg-primary text-white p-8 rounded-2xl flex flex-col justify-between shadow-inner relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-accent/15 pointer-events-none"></div>

              <div>
                <span className="text-[10px] tracking-widest font-extrabold uppercase font-display text-accent block mb-2">
                  {t('calculator.noTravelFee')}
                </span>
                <span className="text-white/60 text-xs font-semibold block mb-8 uppercase tracking-wider">
                  {t('calculator.priceEstimate')}
                </span>

                <div className="mb-2">
                  <span className="text-5xl sm:text-6xl font-display font-black tracking-tight tabular-nums">
                    {totalEstimate}
                  </span>
                  <span className="text-xl font-bold ml-1">kr</span>
                </div>
                <span className="text-white/70 text-[9px] uppercase tracking-widest font-semibold block">
                  {t('calculator.taxIncluded')}
                </span>
              </div>

              <div className="mt-12 relative z-10">
                <button 
                  onClick={handleScrollToContact}
                  className="cursor-pointer w-full py-4.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-bold tracking-wider uppercase text-xs transition-colors glow-glow"
                >
                  {t('calculator.cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
