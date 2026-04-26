"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Coverage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge="Tjenesteområde"
              title="Lokalt i Notodden"
              subtitle="Vi er stolte av å være en lokal bedrift som kjenner området og menneskene her."
            />
            
            <ul className="space-y-4 mt-8">
              {["Notodden Sentrum", "Heddal", "Gransherad", "Lisleherad"].map((area, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-text-main font-medium">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {area}
                </li>
              ))}
            </ul>
            
            <p className="mt-8 text-text-muted italic">
              Bor du utenfor disse områdene? Ta kontakt, så finner vi en løsning.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-gray-100"
          >
            <iframe 
              src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
