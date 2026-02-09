import { Suspense } from 'react';
import PricingClient from './PricingClient';

export default function Pricing() {
  return (
    <Suspense fallback={<PricingLoading />}>
      <PricingClient />
    </Suspense>
  );
}

function PricingLoading() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-card/50 to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">One-Time Payment. Lifetime Use. Works 100% offline — No cloud • No server</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-dark-card/50 border-2 border-primary/20 rounded-lg p-8 opacity-50">
            <div className="h-10 bg-primary/20 rounded animate-pulse mb-4"></div>
            <div className="h-16 bg-primary/20 rounded animate-pulse mb-4"></div>
            <div className="h-12 bg-primary/40 rounded animate-pulse mb-6"></div>
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 bg-primary/20 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary-dark/20 border-2 border-primary/40 rounded-lg p-8 opacity-50">
            <div className="h-10 bg-primary/40 rounded animate-pulse mb-4"></div>
            <div className="h-16 bg-primary/40 rounded animate-pulse mb-4"></div>
            <div className="h-12 bg-primary/60 rounded animate-pulse mb-6"></div>
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 bg-primary/30 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
