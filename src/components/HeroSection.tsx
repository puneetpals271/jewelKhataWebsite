'use client';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg text-white py-12 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 right-10 w-72 h-72 bg-primary-dark rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Manage Your Jewelry Business Effortlessly
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-300 font-light">
              JewelKhata is a comprehensive jewelry management solution designed
              specifically for jewelry retailers, manufacturers, and traders. Track
              inventory, manage customers, analyze sales, and grow your business.
            </p>
            <p className="text-base md:text-lg mb-2 text-primary-light font-medium">
              Works 100% offline
            </p>
            <p className="text-sm md:text-base mb-8 text-gray-400">
              No cloud • No server
            </p>
            {/* Hero feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-sm font-medium">
                🎭 Decoy PIN (Safe Mode)
              </span>
              <span className="px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-sm font-medium">
                🔒 Encrypted Records
              </span>
              <span className="px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-sm font-medium">
                📒 Made for Jewellers
              </span>
              <span className="px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-light text-sm font-medium">
                💰 One-Time Payment. Lifetime Use.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('download')}
                className="bg-gradient-to-r from-primary-light to-primary text-dark-bg font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition transform hover:scale-105"
              >
                Download Now
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary-light font-bold px-8 py-3 rounded-lg hover:bg-primary/10 transition"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-primary/30 animate-fade-in w-full max-w-md">
              <p className="text-center text-primary-light font-semibold mb-4">Works 100% offline • No cloud • No server</p>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-lg p-5 border border-primary/40">
                  <div className="text-xl font-bold mb-1 text-primary-light">🎭 Decoy PIN (Safe Mode)</div>
                  <p className="text-sm text-gray-300">Real PIN → real records</p>
                  <p className="text-sm text-gray-300">Decoy PIN → safe / empty records</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-lg p-4 text-center border border-primary/40">
                    <div className="text-2xl font-bold text-primary-light">🔒</div>
                    <div className="text-xs text-gray-300">Encrypted Records</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-lg p-4 text-center border border-primary/40">
                    <div className="text-2xl font-bold text-primary-light">📒</div>
                    <div className="text-xs text-gray-300">Made for Jewellers</div>
                  </div>
                </div>
                <div className="text-center py-2 text-primary-light font-medium text-sm">
                  💰 One-Time Payment. Lifetime Use.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
