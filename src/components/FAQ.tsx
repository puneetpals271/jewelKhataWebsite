'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is JewelKhata?',
    answer:
      'JewelKhata is a comprehensive jewelry management application designed specifically for jewelry retailers, manufacturers, and wholesalers. It helps you manage inventory, customers, sales, and business analytics all in one place.',
  },
  {
    question: 'Which platforms does JewelKhata support?',
    answer:
      'JewelKhata is available on both iOS (iPhone and iPad) and Android devices. You can download it from the App Store for iOS or Google Play Store for Android.',
  },
  {
    question: 'Is there a cost to use JewelKhata?',
    answer:
      'JewelKhata offers a free basic plan for small jewelry stores with up to 500 items. Premium plans start from $9.99/month and include advanced features like unlimited inventory, team collaboration, and advanced analytics.',
  },
  {
    question: 'Can I use JewelKhata for multiple locations?',
    answer:
      'Yes! Premium plans include multi-location support. You can manage inventory, staff, and sales across multiple stores from a single dashboard.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'Records are encrypted and unreadable without your PIN. Secure Mode includes Decoy PIN (Safe Mode): real PIN shows real records, decoy PIN shows safe or empty records. No cloud, no server—your data stays on your device.',
  },
  {
    question: 'Does JewelKhata work offline?',
    answer:
      'Yes. JewelKhata works 100% offline. No cloud, no server—your data stays on your device. Perfect for jewelry stores with inconsistent or no internet.',
  },
  {
    question: 'Can I import my existing inventory data?',
    answer:
      'Absolutely! We support bulk import from Excel, CSV, and other common formats. Our team can assist you with data migration at no additional cost.',
  },
  {
    question: 'What kind of support is available?',
    answer:
      'We provide 24/7 email support and live chat during business hours. Premium users also get priority support and access to our knowledge base and video tutorials.',
  },
  {
    question: 'Can JewelKhata be customized for my business?',
    answer:
      'Yes! We offer customization services including custom branding, business-specific workflows, API integration, and more. Contact us to discuss your requirements.',
  },
  {
    question: 'Is there a trial period?',
    answer:
      'Yes, all users get a 7-day free trial with full access to premium features. No credit card required to start your trial.',
  },
];

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
