"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const { locale, t } = useLocale();
  const rawFaq = t('faq.items');
  const faqItems: FaqItem[] = Array.isArray(rawFaq) ? rawFaq : (locale === 'no' ? [
    {
      question: "Hva dekker 48-timers garantien?",
      answer: "Dersom utleier eller kjøper har anmerkninger til vasken ved overlevering, kommer vi tilbake og utbedrer dette helt kostnadsfritt innen 24 timer."
    },
    {
      question: "Er dere en godkjent renholdsbedrift?",
      answer: "Ja, vi er offentlig godkjent av Arbeidstilsynet. Det er lovpålagt for alle som kjøper renholdstjenester å sjekke at bedriften er registrert i renholdsregisteret."
    },
    {
      question: "Hvilke områder dekker dere?",
      answer: "Vi dekker Notodden, Kongsberg, Bø, Heddal, Sauland, Gvarv og Akkerhaugen uten ekstra kjøretillegg."
    },
    {
      question: "Bruker dere miljøvennlige produkter?",
      answer: "Vi benytter Svanemerket-sertifiserte produkter som er skånsomme mot både overflater, inneklima og miljøet."
    }
  ] : [
    {
      question: "What does the 48-hour guarantee cover?",
      answer: "If the landlord or buyer has comments on the cleaning at handover, we return and correct it free of charge within 24 hours."
    },
    {
      question: "Are you an approved cleaning company?",
      answer: "Yes, we are publicly approved by the Norwegian Labour Inspection Authority. It is legally required for buyers to verify registration."
    },
    {
      question: "Which areas do you cover?",
      answer: "We cover Notodden, Kongsberg, Bø, Heddal, Sauland, Gvarv, and Akkerhaugen without extra travel fees."
    },
    {
      question: "Do you use eco-friendly products?",
      answer: "We use Swan-labeled certified products that are gentle on both surfaces, the indoor climate, and the environment."
    }
  ]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const kicker = t('faq.kicker') === 'faq.kicker' ? (locale === 'no' ? 'Ofte stilte spørsmål' : 'Frequently Asked Questions') : t('faq.kicker');
  const title = t('faq.title') === 'faq.title' ? (locale === 'no' ? 'Svar på det du lurer på' : 'Answer to your questions') : t('faq.title');
  const subtitle = t('faq.subtitle') === 'faq.subtitle' ? (locale === 'no' ? 'Her finner du svar på de vanligste spørsmålene om våre tjenester.' : 'Here you will find answers to the most common questions.') : t('faq.subtitle');

  return (
    <section id="faq" className="py-12 lg:py-24 bg-bg-light relative overflow-hidden">
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

        {/* Accordions */}
        <div className="space-y-4 max-w-4xl">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-primary-light overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 px-8 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-text-main">
                    {item.question}
                  </span>
                  <span className={`text-xl transition-transform duration-300 text-accent font-bold ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 border-t border-primary-light/50' : 'max-h-0'
                  }`}
                >
                  <p className="p-8 text-text-muted text-sm sm:text-base font-light leading-relaxed bg-bg-light/40">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
