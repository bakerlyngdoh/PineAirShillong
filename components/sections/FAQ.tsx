"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/app/data/faq";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-pine-bone">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-pine-charcoal mb-6 uppercase tracking-tight">Frequently Asked Questions</h2>
          <div className="w-12 h-px bg-pine-accent mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-pine-primary/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-md" : "bg-white/50 hover:bg-white"}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-pine-charcoal pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-pine-accent/10 text-pine-accent rotate-180" : "bg-pine-mist text-pine-gray"}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1200px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="text-pine-gray font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
