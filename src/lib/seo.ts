export const siteConfig = {
  name: 'JewelKhata',
  url: 'https://jewelkhata.app',
  description:
    'Jewellery management app for retailers & traders. Works 100% offline, no cloud, no server. Encrypted records, Decoy PIN (Safe Mode), one-time payment, lifetime use. iOS & Android.',
  keywords: [
    'jewellery management',
    'jewelry inventory app',
    'jewellery business software',
    'offline jewellery app',
    'jewellery ledger',
    'jewelry billing software',
    'ring size tracking',
    'jewellery retailer app',
    'encrypted jewellery records',
    'Decoy PIN',
    'Safe Mode jewellery',
    'JewelKhata',
    'jewelry POS system',
    'jewelry shop management',
    'gold jewellery management',
    'diamond inventory tracking',
  ],
  author: {
    name: 'JewelKhata',
    url: 'https://jewelkhata.app',
  },
  creator: 'JewelKhata',
  locale: 'en_IN',
  alternateLangauges: ['en_US', 'hi_IN'],
};

export const socialLinks = {
  twitter: '@jewelkhata',
  facebook: 'https://facebook.com/jewelkhata',
  instagram: 'https://instagram.com/jewelkhata',
  linkedin: 'https://linkedin.com/company/jewelkhata',
};

export const generatePageMetadata = ({
  title,
  description,
  path = '',
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}) => {
  const url = `${siteConfig.url}${path}`;
  
  return {
    title,
    description,
    keywords: keywords || siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}/logo.png`,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}/logo.png`],
      creator: socialLinks.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};

// Structured data generators
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    socialLinks.twitter,
    socialLinks.facebook,
    socialLinks.instagram,
    socialLinks.linkedin,
  ],
});

export const generateWebApplicationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: siteConfig.name,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: 'Free',
    priceCurrency: 'INR',
  },
  description: siteConfig.description,
  url: siteConfig.url,
  featureList: [
    'Offline jewellery inventory management',
    'Encrypted customer records',
    'Decoy PIN (Safe Mode)',
    'Ring size tracking',
    'Photo management',
    'Multi-currency support',
    'Business analytics',
    'Backup and restore',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1000',
  },
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.url}`,
  })),
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateArticleSchema = ({
  title,
  description,
  datePublished,
  dateModified,
  path,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  path: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  datePublished,
  dateModified,
  author: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
    },
  },
  url: `${siteConfig.url}${path}`,
});
