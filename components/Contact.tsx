
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { Phone, EnvelopeSimple, MapPin, PaperPlaneRight } from '@phosphor-icons/react';

export default function Contact() {
  const { t } = useLocale();
  const content = t('contact') as any;
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
            <SectionHeading badge={content.badge} title={content.title} />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <Phone size={24} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Telefon</h4>
                  <a href="tel:+4796684393" className="text-text-muted hover:text-accent transition-colors text-lg">+47 966 84 393</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <EnvelopeSimple size={24} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">E-post</h4>
                  <a href="mailto:annadizhenko@gmail.com" className="text-text-muted hover:text-accent transition-colors text-lg">annadizhenko@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <MapPin size={24} weight="duotone" className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Hovedkontor</h4>
                  <p className="text-text-muted text-lg">Notodden, Telemark<br/>Norge</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-premium"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <PaperPlaneRight size={40} weight="duotone" className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{content.success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{content.name}</label>
                  <input required type="text" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">{content.email}</label>
                    <input required type="email" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">{content.phone}</label>
                    <input required type="tel" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{content.message}</label>
                  <textarea required rows={4} className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"></textarea>
                </div>
                <button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sender...' : content.submit}
                  <PaperPlaneRight size={20} weight="bold" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
