
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./UI/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const { t } = useLocale();
  const data = t("process") as any;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="py-24 bg-bg-light relative">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
        />

        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent transform md:-translate-x-1/2 z-10" 
          />

          <div className="space-y-12 relative z-20">
            {data.steps.map((step: any, i: number) => (
              <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex-1 w-full md:w-1/2 ${i % 2 === 0 ? "md:text-left" : "md:text-right"} pl-20 md:pl-0`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-text-muted">{step.description}</p>
                  </div>
                </motion.div>

                {/* Node */}
                <div className="absolute left-8 md:static md:left-auto transform -translate-x-1/2 md:translate-x-0 w-10 h-10 rounded-full bg-white border-4 border-bg-light shadow-md flex items-center justify-center z-20 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
