
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { SectionHeading, Button } from './Shared';
import { IconMapPin, IconPhone, IconMail, IconClock } from './Icons';

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t('contact.successMessage')}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t('contact.nameLabel')}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-light" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.phoneLabel')}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-light" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t('contact.emailLabel')}</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-light" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t('contact.messageLabel')}</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-bg-light resize-none"></textarea>
                </div>
                <Button type="submit" className="w-full" disabled={status === 'loading'}>
                  {status === 'loading' ? '...' : t('contact.submitButton')}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="bg-primary p-8 rounded-3xl text-white shadow-lg">
              <h3 className="text-xl font-bold mb-6">{t('contact.infoTitle')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <IconMapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.address')}</p>
                    <p className="text-white/60 text-sm">Telemark region</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <IconPhone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.phone')}</p>
                    <p className="text-white/60 text-sm">Direkte linje</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <IconMail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.email')}</p>
                    <p className="text-white/60 text-sm">Svarer innen 24t</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <IconClock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.hours')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
