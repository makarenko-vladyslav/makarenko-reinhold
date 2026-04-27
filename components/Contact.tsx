"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

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
        <SectionHeading 
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          centered
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-16">
          {/* Info & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6">{t('footer.contactTitle')}</h3>
              
              <div className="space-y-6">
                <a href={`tel:${t('contact.info.phone')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Telefon</p>
                    <p className="font-bold text-primary group-hover:text-accent transition-colors">{t('contact.info.phone')}</p>
                  </div>
                </a>
                
                <a href={`mailto:${t('contact.info.email')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">E-post</p>
                    <p className="font-bold text-primary group-hover:text-accent transition-colors">{t('contact.info.email')}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center text-accent">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Åpningstider</p>
                    <p className="font-bold text-primary">{t('contact.info.hours')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              {status === 'success' ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{t('contact.form.success')}</h3>
                  <button onClick={() => setStatus('idle')} className="text-accent font-bold mt-4 hover:underline">Send ny melding</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.name')}</label>
                      <input required type="text" className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.phone')}</label>
                      <input required type="tel" className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.email')}</label>
                    <input required type="email" className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.service')}</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none">
                      <option>Flyttevask</option>
                      <option>Daglig Renhold</option>
                      <option>Kontorvask</option>
                      <option>Annet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.form.message')}</label>
                    <textarea required rows={4} className="w-full px-5 py-4 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"></textarea>
                  </div>

                  <button 
                    disabled={status === 'loading'}
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-light text-white py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    {status === 'loading' ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
