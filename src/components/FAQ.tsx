'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about JewelKhata
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition bg-dark-card/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-dark-card/30 hover:bg-dark-card/60 transition text-left"
              >
                <h3 className="font-semibold text-primary-light">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-primary-light transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-primary/20 bg-dark-bg/50 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/20 via-primary-dark/20 to-primary/20 rounded-lg p-8 md:p-12 text-white text-center border border-primary/40">
          <h3 className="text-2xl font-bold mb-4 text-primary-light">Still have questions?</h3>
          <p className="text-lg mb-6 text-gray-300">
            Our support team is here to help. Reach out to us anytime.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary-light to-primary text-dark-bg font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
