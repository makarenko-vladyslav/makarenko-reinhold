"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { PhoneIcon, MailIcon, MapPinIcon } from './Icons';

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
                <div className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Telefon</p>
                  <a href={`tel:${t('contact.info.phone')}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">
                    {t('contact.info.phone')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center shrink-0">
                  <MailIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">E-post</p>
                  <a href={`mailto:${t('contact.info.email')}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">
                    {t('contact.info.email')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Adresse</p>
                  <p className="text-xl font-bold text-primary">
                    {t('contact.info.address')}
                  </p>
                  <p className="text-text-muted mt-1">{t('contact.info.hours')}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-[0_8px_30px_hsl(215_60%_15%/0.08)] border border-gray-100 p-8 md:p-10"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Sendt!</h3>
                <p className="text-text-muted">{t('contact.form.success')}</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-accent font-semibold hover:underline">
                  Send en ny melding
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">{t('contact.form.name')}</label>
                    <input required type="text" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">{t('contact.form.phone')}</label>
                    <input required type="tel" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{t('contact.form.email')}</label>
                  <input required type="email" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{t('contact.form.service')}</label>
                  <select className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none">
                    <option>Flyttevask</option>
                    <option>Regelmessig vask</option>
                    <option>Kontorvask</option>
                    <option>Annet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{t('contact.form.message')}</label>
                  <textarea required rows={4} className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-primary-light text-white rounded-xl py-4 font-bold transition-colors disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sender...' : t('contact.form.submit')}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}