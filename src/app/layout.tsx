import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://jewelkhata.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'JewelKhata – Jewellery Management App | Offline, Encrypted, Made for Jewellers',
    template: '%s | JewelKhata',
  },
  description:
    'Jewellery management app for retailers & traders. Works 100% offline, no cloud, no server. Encrypted records, Decoy PIN (Safe Mode), one-time payment, lifetime use. iOS & Android.',
  keywords: [
    'jewellery management',
    'jewelry inventory app',
    'jewellery business software',
    'offline jewellery app',
    'jewellery ledger',
    'ring size tracking',
    'jewellery retailer app',
    'encrypted jewellery records',
    'Decoy PIN',
    'Safe Mode jewellery',
    'JewelKhata',
  ],
  authors: [{ name: 'JewelKhata', url: siteUrl }],
  creator: 'JewelKhata',
  publisher: 'JewelKhata',
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'JewelKhata',
    title: 'JewelKhata – Jewellery Management App | Offline, Encrypted',
    description:
      'Works 100% offline. No cloud, no server. Encrypted records, Decoy PIN (Safe Mode). One-time payment, lifetime use. Made for jewellers.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'JewelKhata – Jewellery Management App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JewelKhata – Jewellery Management App | Offline, Encrypted',
    description:
      'Works 100% offline. No cloud, no server. Encrypted records, Decoy PIN. One-time payment, lifetime use.',
    images: ['/logo.png'],
  },
  alternates: { canonical: siteUrl },
  category: 'business',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'JewelKhata',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        description:
          'Jewellery management app for retailers and traders. Works 100% offline with encrypted records and Decoy PIN (Safe Mode).',
      },
      {
        '@type': 'WebApplication',
        name: 'JewelKhata',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'iOS, Android',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        description:
          'Jewellery management app. Works 100% offline, no cloud, no server. Encrypted records, Decoy PIN (Safe Mode). One-time payment, lifetime use. Made for jewellers.',
        url: siteUrl,
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
