import type { Metadata, Viewport } from 'next';
import './globals.css';
import {
  siteConfig,
  generateOrganizationSchema,
  generateWebApplicationSchema,
} from '@/lib/seo';

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'JewelKhata – Jewellery Management App | Offline, Encrypted, Made for Jewellers',
    template: '%s | JewelKhata',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [siteConfig.author],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
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
      generateOrganizationSchema(),
      generateWebApplicationSchema(),
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en-IN',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/?s={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="author" href="/humans.txt" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="JewelKhata" />
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
