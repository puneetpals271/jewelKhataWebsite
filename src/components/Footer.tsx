import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-dark-card to-dark-bg text-gray-300 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-lg p-1">
                <Image
                  src="/logo.png"
                  alt="JewelKhata logo"
                  width={32}
                  height={32}
                  className="rounded-md object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">JewelKhata</span>
                <span className="text-xs text-primary/60 font-medium">Smart Jewelry Management</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Made for jewellers. Works 100% offline — No cloud • No server. One-Time Payment. Lifetime Use.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-primary-light mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-primary-light transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-primary-light transition">
                  Download
                </a>
              </li>
              <li>
                <a href="#customize" className="hover:text-primary-light transition">
                  Customization
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-light mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-light transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/support/recover-data" className="hover:text-primary-light transition">
                  Recover data (Decoy backup)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-light transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-primary-light mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-light transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-primary-light transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-primary-light transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} JewelKhata. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-primary-light transition text-gray-400 transform hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-primary-light transition text-gray-400 transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 10-5.25 0 0 1 2 2 4 4 0 0-1 3 1 4 0 0 0 3-1 4 4 0 0 1-3 1" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-primary-light transition text-gray-400 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-primary-light transition text-gray-400 transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.205.625c-.7.27-1.438.72-1.49 1.52-.04.887-.041 1.183-.041 3.51 0 2.325.001 2.621.041 3.509.045.783.707 1.25 1.49 1.52.3.119.566.18.855.233.16.027.321.027.481.027 1.012 0 1.962.015 2.921.015 1.96 0 3.92.015 5.88.015 1.96 0 3.92-.015 5.88-.015.96 0 1.91-.015 2.92-.015.16 0 .321 0 .481-.027.29-.053.555-.114.855-.233.783-.27 1.461-.737 1.489-1.52.04-.888.041-1.184.041-3.51 0-2.326-.001-2.622-.041-3.51-.045-.783-.707-1.25-1.49-1.52-.3-.119-.566-.18-.855-.233-.16-.027-.321-.027-.481-.027-1.012 0-1.962-.015-2.921-.015-1.96 0-3.92-.015-5.88-.015-1.96 0-3.92.015-5.88.015-.96 0-1.91.015-2.92.015-.16 0-.321 0-.481.027-.29.053-.555.114-.855.233-.783.27-1.461.737-1.489 1.52-.04.888-.041 1.184-.041 3.51 0 2.326.001 2.622.041 3.51.045.783.707 1.25 1.49 1.52.3.119.566.18.855.233.16.027.321.027.481.027 1.012 0 1.962.015 2.921.015 1.96 0 3.92.015 5.88.015 1.96 0 3.92-.015 5.88-.015.96 0 1.91-.015 2.92-.015.16 0 .321 0 .481-.027.29-.053.555-.114.855-.233.783-.27 1.461-.737 1.489-1.52.04-.888.041-1.184.041-3.51 0-2.326-.001-2.622-.041-3.51-.028-.802-.706-1.25-1.49-1.52-.3-.119-.566-.18-.855-.233-.16-.027-.321-.027-.481-.027-1.012 0-1.962-.015-2.921-.015-1.96 0-3.92-.015-5.88-.015V0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
