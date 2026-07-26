"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = t("testimonials.reviews") as Array<{
    author: string;
    descriptor: string;
    text: string;
    rating: string;
    service: string;
  }>;

  if (!reviews || reviews.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading + Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              {String(t("testimonials.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-text-main mt-2">
              {String(t("testimonials.heading"))}
            </h2>
            <p className="text-base text-text-muted mt-3">
              {String(t("testimonials.subheading"))}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface border border-border-light shadow-sm shrink-0">
            <div className="text-sm font-mono font-bold text-primary">
              {String(t("testimonials.aggregateRating"))}
            </div>
            <div className="text-[11px] font-mono text-text-muted mt-1">
              Verifiserte kundeanmeldelser
            </div>
          </div>
        </div>

        {/* Interactive Swipeable Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) {
                  handleNext();
                } else if (info.offset.x > 40) {
                  handlePrev();
                }
              }}
              className="bg-surface p-8 sm:p-12 rounded-3xl border border-border-light shadow-lg relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
            >
              <span className="text-8xl font-serif text-accent/15 absolute -top-4 left-6 pointer-events-none select-none">
                «
              </span>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-accent bg-accent-soft px-3 py-1 rounded-lg">
                    {currentReview.service}
                  </span>
                  <span className="text-xs font-mono font-bold text-text-main bg-bg-light px-3 py-1 rounded-lg border border-border-light">
                    {currentReview.rating}
                  </span>
                </div>
                
                <p className=