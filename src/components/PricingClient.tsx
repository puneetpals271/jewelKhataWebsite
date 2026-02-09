'use client';

import { usePricing } from '@/hooks/usePricing';

export default function PricingClient() {
  const { pricing, country } = usePricing();

  const plans = [
    {
      name: 'Basic Ledger',
      price: pricing?.basic || '$12.99',
      type: 'Lifetime',
      description: 'Perfect for getting started',
      features: [
        'Unlimited customers & orders',
        'Jewelry details & ring sizes',
        'Photo attachments',
        'PDF export & printing',
        'Advanced filtering',
        'Simple PIN lock',
        'Works 100% offline (No cloud • No server)',
        '3-day free trial',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Lifetime Secure Mode',
      price: pricing?.pro || '$24.99',
      type: 'Lifetime',
      description: 'Full security & encryption',
      features: [
        'Everything in Basic',
        'Encrypted records (unreadable without PIN)',
        'Decoy PIN (Safe Mode)',
        'Manual encrypted backup',
        'Archive old records',
        'Advanced security controls',
        'Priority support',
        'Extra security features',
      ],
      cta: 'Upgrade to Pro',
      highlighted: true,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-card/50 to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">One-Time Payment. Lifetime Use.</p>
          <p className="text-primary-light font-medium mt-2">Works 100% offline — No cloud • No server</p>
          {country !== 'DEFAULT' && pricing && (
            <p className="text-sm text-primary/80 mt-4">
              Prices displayed in {pricing.currency}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition transform hover:scale-105 border ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary/20 to-primary-dark/20 border-primary/60 shadow-2xl shadow-primary/20'
                  : 'bg-dark-card/50 border-primary/20 hover:border-primary/40'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-primary-light' : 'text-primary'}`}>{plan.price}</span>
                <span className={`ml-2 ${plan.highlighted ? 'text-primary/80' : 'text-gray-400'}`}>
                  {plan.type}
                </span>
              </div>
              <p className={`mb-6 ${plan.highlighted ? 'text-gray-200' : 'text-gray-400'}`}>
                {plan.description}
              </p>

              <button
                className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-dark-bg hover:shadow-lg hover:shadow-primary/50'
                    : 'bg-primary/20 text-primary-light hover:bg-primary/30 border border-primary/40'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-gray-300">
                    <span className="text-primary-light mr-3 text-lg">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400">
          <p className="text-sm">
            All plans include 3-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
