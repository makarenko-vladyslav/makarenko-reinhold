"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light clip-path-diagonal pointer-events-none" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              badge={t('contact.badge')}
              title={t('contact.title')}
              subtitle={t('contact.subtitle')}
              light
            />
            
            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-accent">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium mb-1">{t('contact.phone')}</p>
                  <a href={`tel:${t('contact.phoneVal').replace(/\s/g, '')}`} className="text-2xl font-display font-bold text-white hover:text-accent transition-colors">{t('contact.phoneVal')}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-accent">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium mb-1">{t('contact.email')}</p>
                  <a href={`mailto:${t('contact.emailVal')}`} className="text-xl font-display font-bold text-white hover:text-accent transition-colors">{t('contact.emailVal')}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-accent">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium mb-1">Lokasjon</p>
                  <p className="text-xl font-display font-bold text-white">{t('contact.address')}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Takk for din henvendelse!</h3>
                <p className="text-text-muted">Vi kontakter deg innen kort tid.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-accent font-bold hover:underline">Send ny melding</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t('contact.name')}</label>
                  <input required type="text" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.phone')}</label>
                    <input required type="tel" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.email')}</label>
                    <input required type="email" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t('contact.service')}</label>
                  <select className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none">
                    <option>Flyttevask</option>
                    <option>Regelmessig Vask</option>
                    <option>Kontorvask</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t('contact.message')}</label>
                  <textarea rows={4} className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-accent hover:bg-accent-hover text-white rounded-xl py-4 font-bold text-lg transition-all shadow-lg shadow-accent/20 flex items-center justify-center disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : (
                    t('contact.submit')
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
