"use client";
import { useLocale } from '@/lib/i18n';

interface ChecklistZone {
  name: string;
  items: string[];
}

export default function Checklist() {
  const { locale, t } = useLocale();
  const rawZones = t('checklist.zones');
  const zones: ChecklistZone[] = Array.isArray(rawZones) ? rawZones : (locale === 'no' ? [
    {
      name: "Alle rom",
      items: [
        "Støvtørking og fjerning av spindelvev",
        "Vask av dører, lister, karmer og dørhåndtak",
        "Vask av stikkontakter og lysbrytere",
        "Støvsuging og vask av alle gulv",
        "Innvendig og utvendig vinduspuss"
      ]
    },
    {
      name: "Kjøkken",
      items: [
        "Rengjøring av kjøkkenskap innvendig og utvendig",
        "Grundig vask av kjøkkenbenk og vaskekum",
        "Innvendig og utvendig vask av stekeovn og ventilator",
        "Rengjøring bak komfyr og kjøleskap (om de er dratt ut)"
      ]
    },
    {
      name: "Bad og toalett",
      items: [
        "Avkalking og vask av fliser, dusj og badekar",
        "Rengjøring og desinfisering av toalett og servant",
        "Pussing av speil og glassflater",
        "Rengjøring av sluk og ventiler"
      ]
    }
  ] : [
    {
      name: "All Rooms",
      items: [
        "Dusting and removing cobwebs",
        "Washing doors, baseboards, frames, and handles",
        "Washing outlets and light switches",
        "Vacuuming and washing all floors",
        "Interior and exterior window cleaning"
      ]
    },
    {
      name: "Kitchen",
      items: [
        "Cleaning kitchen cabinets inside and out",
        "Thorough washing of countertops and sink",
        "Interior and exterior cleaning of oven and fan",
        "Cleaning behind stove and fridge (if pulled out)"
      ]
    },
    {
      name: "Bathroom & Toilet",
      items: [
        "De-scaling and washing of tiles, shower, and tub",
        "Cleaning and disinfecting of toilet and sink",
        "Polishing mirrors and glass surfaces",
        "Cleaning of drains and vents"
      ]
    }
  ]);

  const kicker = t('checklist.kicker') === 'checklist.kicker' ? (locale === 'no' ? 'VÅR STANDARD' : 'OUR STANDARD') : t('checklist.kicker');
  const title = t('checklist.title') === 'checklist.title' ? (locale === 'no' ? 'Hva er inkludert i flyttevasken?' : 'What is included in the move-out clean?') : t('checklist.title');
  const subtitle = t('checklist.subtitle') === 'checklist.subtitle' ? (locale === 'no' ? 'Vi vasker etter en grundig sjekkliste godkjent av utleiere og meglere i Telemark.' : 'We clean according to a thorough checklist approved by landlords and brokers in Telemark.') : t('checklist.subtitle');

  return (
    <section id="checklist" className="py-12 lg:py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-text-main mb-6 uppercase">
            {title}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Dynamic Checklist Accordion / Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {zones.map((zone, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-primary-light shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-3 mb-6 border-b border-primary-light/50 pb-4">
                  <span className="font-display font-black text-2xl text-accent/30 tracking-tight">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display font-bold text-lg text-text-main uppercase tracking-tight">
                    {zone.name}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {zone.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="text-accent text-xs font-bold select-none mt-1">—</span>
                      <span className="text-text-main/80 text-sm font-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
