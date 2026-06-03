"use client";
import { useState } from "react";
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
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <SectionHeading 
              badge={t('contact.badge')}
              title={t('contact.title')}
              subtitle={t('contact.subtitle')}
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium mb-1">Telefon</div>
                  <a href="tel:+4796684393" className="text-xl font-bold text-primary hover:text-accent transition-colors">{t('contact.info.phone')}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium mb-1">E-post</div>
                  <a href="mailto:annadizhenko@gmail.com" className="text-xl font-bold text-primary hover:text-accent transition-colors">{t('contact.info.email')}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-text-muted font-medium mb-1">Åpningstider</div>
                  <div className="text-xl font-bold text-primary">{t('contact.info.hours')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Sendt!</h3>
                <p className="text-text-muted">{t('contact.form.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{t('contact.form.name')}</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-tint" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">{t('contact.form.phone')}</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-tint" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">{t('contact.form.email')}</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-tint" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{t('contact.form.service')}</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-tint appearance-none">
                    <option>Flyttevask</option>
                    <option>Regelmessig Vask</option>
                    <option>Kontorvask</option>
                    <option>Annet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{t('contact.form.message')}</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-tint resize-none"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl transition-colors disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sender...' : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
