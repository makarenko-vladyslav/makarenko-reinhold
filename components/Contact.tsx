"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useLocale();
  const contactData = t('contact') as any;
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
              badge={contactData.badge}
              title={contactData.title}
              subtitle={contactData.subtitle}
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-accent">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Telefon</h4>
                  <a href={`tel:${contactData.info.phone.replace(/\s/g, '')}`} className="text-text-muted hover:text-accent transition-colors">{contactData.info.phone}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-accent">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">E-post</h4>
                  <a href={`mailto:${contactData.info.email}`} className="text-text-muted hover:text-accent transition-colors">{contactData.info.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-accent">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Åpningstider</h4>
                  <p className="text-text-muted">{contactData.info.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Suksess!</h3>
                <p className="text-text-muted">{contactData.successMessage}</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-accent font-bold">Send ny melding</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{contactData.nameLabel}</label>
                  <input required type="text" className="w-full p-4 rounded-xl border border-gray-200 bg-bg-light focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{contactData.phoneLabel}</label>
                    <input required type="tel" className="w-full p-4 rounded-xl border border-gray-200 bg-bg-light focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{contactData.emailLabel}</label>
                    <input required type="email" className="w-full p-4 rounded-xl border border-gray-200 bg-bg-light focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{contactData.messageLabel}</label>
                  <textarea required rows={4} className="w-full p-4 rounded-xl border border-gray-200 bg-bg-light focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sender...' : contactData.submitButton}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
