import React from 'react';

/* Apple logo - standard official shape */
function AppleIcon({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-1.18 1.62-2.54 3.24-4.55 3.24zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

/* Google Play icon - play triangle */
function GooglePlayIcon({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
    </svg>
  );
}

export default function DownloadSection() {
  return (
    <section id="download" className="py-16 md:py-24 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
            Download JewelKhata
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-2">
            Available on iOS and Android. Built for jewellery retailers and traders.
          </p>
          <p className="text-primary-light font-medium text-sm md:text-base">Works 100% offline — No cloud • No server</p>
          <p className="text-gray-400 text-sm mt-1">One-Time Payment. Lifetime Use.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          {/* App Store - Coming soon */}
          <div
            className="flex items-center gap-4 w-full sm:w-auto bg-dark-card/80 border border-primary/20 rounded-xl px-6 py-4 opacity-90 cursor-not-allowed min-w-[280px] sm:min-w-[260px]"
            aria-disabled="true"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center text-gray-500">
              <AppleIcon className="w-9 h-9" />
            </div>
            <div className="text-left flex-1 min-w-0">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Download on the</p>
              <p className="font-semibold text-white text-lg leading-tight">App Store</p>
              <p className="text-xs text-primary/90 mt-1 font-medium">Coming soon</p>
            </div>
          </div>

          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.jewelkhata.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full sm:w-auto bg-dark-card border border-primary/30 rounded-xl px-6 py-4 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group min-w-[280px] sm:min-w-[260px]"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center text-white group-hover:text-primary-light transition-colors">
              <GooglePlayIcon className="w-9 h-9" />
            </div>
            <div className="text-left flex-1 min-w-0">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Get it on</p>
              <p className="font-semibold text-white text-lg leading-tight">Google Play</p>
              <p className="text-xs text-gray-400 mt-1">Android</p>
            </div>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-primary-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
