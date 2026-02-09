import React from 'react';

const customizationOptions = [
  {
    title: 'Business Branding',
    items: [
      'Custom logo and brand colors',
      'Custom receipts and invoices',
      'Your business name on all reports',
      'Personalized welcome screens',
    ],
  },
  {
    title: 'Workflow Customization',
    items: [
      'Custom inventory categories',
      'Configurable reporting templates',
      'Personalized dashboard widgets',
      'Custom data fields and attributes',
    ],
  },
  {
    title: 'Integration Options',
    items: [
      'Cloud storage synchronization',
      'Multi-location management',
      'Team collaboration features',
      'Import/Export capabilities',
    ],
  },
  {
    title: 'Advanced Features',
    items: [
      'API access for developers',
      'Custom business rules',
      'Advanced user roles & permissions',
      'Batch operations & automation',
    ],
  },
];

export default function Customization() {
  return (
    <section id="customize" className="py-16 md:py-24 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
            Fully Customizable for Your Needs
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tailor JewelKhata to match your business requirements and workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {customizationOptions.map((section, index) => (
            <div
              key={index}
              className="bg-dark-card/50 border border-primary/20 hover:border-primary/40 rounded-lg p-8 transition"
            >
              <h3 className="text-xl font-bold text-primary-light mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-r from-primary-light to-primary text-dark-bg rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/20 via-primary-dark/20 to-primary/20 rounded-lg p-8 md:p-12 text-white text-center border border-primary/40">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-light">
            Need Custom Development?
          </h3>
          <p className="text-lg mb-8 text-gray-300">
            Our team can help you build custom features and integrations tailored to
            your specific business needs
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary-light to-primary text-dark-bg font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition"
          >
            Request Custom Features
          </a>
        </div>
      </div>
    </section>
  );
}
