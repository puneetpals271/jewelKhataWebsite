'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-dark-bg via-dark-card to-dark-bg shadow-2xl border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition p-1">
              <Image
                src="/logo.png"
                alt="JewelKhata logo"
                width={32}
                height={32}
                className="rounded-md object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">JewelKhata</span>
              <span className="text-xs text-primary/60 font-medium">Smart Jewelry Management</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-primary-light transition font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="text-gray-300 hover:text-primary-light transition font-medium"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('customize')}
              className="text-gray-300 hover:text-primary-light transition font-medium"
            >
              Customize
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-primary-light transition font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-primary-dark text-dark-bg px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition font-bold"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary-light hover:text-primary transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 bg-dark-card/50 rounded-lg p-4 border border-primary/20">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-primary-light font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-primary-light font-medium"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('customize')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-primary-light font-medium"
            >
              Customize
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-primary-light font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-dark-bg rounded-lg font-bold"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
