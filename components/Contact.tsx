"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Contact() {
  const { t } = useLocale();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 lg:py-24 bg-primary-light/60 relative z-20">
      <div className="absolute top-0 right-10 w-48 h-48 rounded-full border border-primary/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
              {t('contact.kicker')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-text-main mb-6 uppercase">
              La oss ta vaskeansvaret
            </h2>
            <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed mb-10">
              {t('contact.subtitle')}
            </p>

            <div className="border-t border-b border-primary/15 py-6 mb-8">
              <span className="text-[10px] tracking-widest font-extrabold uppercase font-display text-text-muted block mb-4">
                ÅPNINGSTIDER & TELEFONTID
              </span>
              <div className="space-y-3 font-display font-semibold text-xs text-text-main">
                <div className="flex justify-between">
                  <span>MANDAG – FREDAG</span>
                  <span>08:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>LØRDAG</span>
                  <span>09:00 – 15:00</span>
                </div>
                <div className="flex justify-between text-text-muted/60">
                  <span>SØNDAG</span>
                  <span>STENGT (AKUTTE HENV. RING)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs font-display font-bold">
              <div>
                <span className="text-[9px] tracking-widest uppercase text-text-muted block mb-1">E-post</span>
                <a href="mailto:annadizhenko@gmail.com" className="text-accent hover:underline text-sm font-semibold">
                  annadizhenko@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[9px] tracking-widest uppercase text-text-muted block mb-1">Telefon</span>
                <a href="tel:+4796684397" className="text-accent hover:underline text-sm font-semibold">
                  +47 966 84 397
                </a>
              </div>
              <div>
                <span className="text-[9px] tracking-widest uppercase text-text-muted block mb-1">Adresse</span>
                <span className="text-text-main block text-sm">
                  Notodden, Telemark
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-primary-light shadow-md">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  ✓
                </div>
                <h3 className="font-display font-bold text-2xl text-text-main mb-3">
                  Innsending vellykket
                </h3>
                <p className="text-text-muted font-light">
                  {t('contact.success')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-text-muted font-display mb-2">
                      {t('contact.name')}
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ola Nordmann"
                      className="w-full p-4 rounded-xl border border-primary-light/80 bg-white text-sm text-text-main placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-text-muted font-display mb-2">
                      {t('contact.phone')}
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+47 000 00 000"
                      className="w-full p-4 rounded-xl border border-primary-light/80 bg-white text-sm text-text-main placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-text-muted font-display mb-2">
                      {t('contact.email')}
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="ola@example.no"
                      className="w-full p-4 rounded-xl border border-primary-light/80 bg-white text-sm text-text-main placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-text-muted font-display mb-2">
                      {t('contact.size')}
                    </label>
                    <input 
                      id="contact-size"
                      type="number" 
                      required
                      placeholder="f.eks. 80"
                      className="w-full p-4 rounded-xl border border-primary-light/80 bg-white text-sm text-text-main placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-text-muted font-display mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full p-4 rounded-xl border border-primary-light/80 bg-white text-sm text-text-main placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none"
                    placeholder="Skriv din melding her..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-xl bg-primary hover:bg-accent text-white font-bold tracking-wider uppercase text-xs transition-all duration-300 shadow-lg disabled:opacity-50"
                >
                  {isSending ? 'Sender...' : t('contact.cta')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
