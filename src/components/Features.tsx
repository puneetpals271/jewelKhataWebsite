import React from 'react';

const features = [
  {
    icon: '📦',
    title: 'Inventory Management',
    description:
      'Track jewelry items with detailed specifications including weight, purity, color, and current location.',
  },
  {
    icon: '👥',
    title: 'Customer Management',
    description:
      'Maintain comprehensive customer profiles with purchase history, preferences, and contact information.',
  },
  {
    icon: '📊',
    title: 'Sales Analytics',
    description:
      'Get insights into sales trends, profit margins, peak selling seasons, and customer preferences.',
  },
  {
    icon: '🗂️',
    title: 'Smart Categorization',
    description:
      'Organize jewelry by type, material, purity, and custom categories for easy searching and management.',
  },
  {
    icon: '🔍',
    title: 'Advanced Search',
    description:
      'Find items instantly using multiple filters including weight, price, material, and custom attributes.',
  },
  {
    icon: '💳',
    title: 'Payment Integration',
    description:
      'Support for multiple payment methods including cash, card, and digital payments with receipt generation.',
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    description:
      'Seamless experience across all devices - manage your business on the go from your smartphone.',
  },
  {
    icon: '🔐',
    title: 'Encrypted Records (Unreadable Without PIN)',
    description:
      'Your data is encrypted and unreadable without your PIN. No cloud, no server—your records stay on your device.',
  },
  {
    icon: '📒',
    title: 'Made for Jewellers (Not Generic Software)',
    description:
      'Built for jewelry retailers, manufacturers, and traders—ring sizes, purity, weight, and workflows that match how you work.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Everything you need to manage your jewelry business efficiently and
            professionally
          </p>
          <p className="text-primary-light font-medium mb-2">Works 100% offline</p>
          <p className="text-gray-400 text-sm mb-8">No cloud • No server</p>
        </div>

        {/* Hero feature: Decoy PIN */}
        <div className="mb-12 p-6 md:p-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary-dark/20 border-2 border-primary/50 text-center">
          <div className="text-4xl mb-3">🎭</div>
          <h3 className="text-2xl font-bold text-primary-light mb-2">Decoy PIN (Safe Mode)</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-4">
            Almost no competitor has this. Real PIN shows your real records; Decoy PIN shows safe or empty records—so only you know what’s real.
          </p>
          <p className="text-sm text-primary/90">
            Real PIN → real records &nbsp;•&nbsp; Decoy PIN → safe / empty records
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-primary/20 rounded-lg hover:border-primary/60 bg-dark-card/50 hover:shadow-lg hover:shadow-primary/20 transition hover:-translate-y-1 duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary-light mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
