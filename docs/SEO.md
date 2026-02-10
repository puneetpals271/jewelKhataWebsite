# SEO Configuration

This document outlines the SEO setup for the JewelKhata website.

## Overview

The website implements comprehensive SEO best practices including:

- Dynamic sitemap generation
- Structured data (JSON-LD)
- Open Graph meta tags
- Twitter Card meta tags
- Robots.txt configuration
- Canonical URLs
- Metadata optimization

## Files

### Core SEO Files

- **`src/lib/seo.ts`** - Central SEO configuration and utilities
- **`src/app/sitemap.ts`** - Dynamic XML sitemap
- **`src/app/robots.ts`** - Robots.txt configuration
- **`src/app/layout.tsx`** - Root layout with metadata and structured data
- **`public/manifest.json`** - PWA manifest for mobile SEO

### Configuration

The `seo.ts` file exports:

- `siteConfig` - Site-wide configuration
- `socialLinks` - Social media profile links
- `generatePageMetadata()` - Utility for page metadata
- `generateOrganizationSchema()` - Organization structured data
- `generateWebApplicationSchema()` - Software application structured data
- `generateBreadcrumbSchema()` - Breadcrumb navigation
- `generateFAQSchema()` - FAQ structured data
- `generateArticleSchema()` - Article/page structured data

## Usage

### Adding Metadata to a New Page

```typescript
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Your Page Title',
  description: 'Your page description',
  path: '/your-path',
  keywords: ['optional', 'custom', 'keywords'],
  noIndex: false, // Set to true to prevent indexing
});
```

### Adding Structured Data

```typescript
import { generateArticleSchema } from '@/lib/seo';

export default function YourPage() {
  const jsonLd = generateArticleSchema({
    title: 'Your Page Title',
    description: 'Your description',
    datePublished: '2026-02-09',
    dateModified: '2026-02-09',
    path: '/your-path',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Your page content */}
    </>
  );
}
```

### Adding FAQ Schema

```typescript
import { generateFAQSchema } from '@/lib/seo';

const faqs = [
  {
    question: 'What is JewelKhata?',
    answer: 'JewelKhata is an offline jewellery management app...',
  },
  // More FAQs
];

const jsonLd = generateFAQSchema(faqs);
```

## Sitemap

The sitemap is automatically generated at `/sitemap.xml` and includes:

- Homepage (priority: 1.0)
- Privacy Policy (priority: 0.5)
- Terms of Service (priority: 0.5)

To add new pages to the sitemap, edit `src/app/sitemap.ts`.

## Robots.txt

The robots.txt file allows all crawlers and references the sitemap. Configure at `src/app/robots.ts`.

## Structured Data

The website implements multiple structured data types:

1. **Organization** - Company information
2. **SoftwareApplication** - App details
3. **WebSite** - Website metadata with search action
4. **Article** - For static pages
5. **FAQPage** - For FAQ sections (ready to use)
6. **BreadcrumbList** - For navigation (ready to use)

## Best Practices

1. **Update lastModified dates** when content changes significantly
2. **Use descriptive titles** (50-60 characters)
3. **Write compelling descriptions** (150-160 characters)
4. **Include relevant keywords** naturally
5. **Set canonical URLs** to prevent duplicate content
6. **Test structured data** using Google's Rich Results Test
7. **Monitor sitemap** in Google Search Console

## Testing

### Sitemap
Visit: `http://localhost:3000/sitemap.xml`

### Robots
Visit: `http://localhost:3000/robots.txt`

### Meta Tags
Use browser DevTools or view page source

### Structured Data
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Performance Monitoring

Monitor SEO performance using:
- Google Search Console
- Google Analytics
- Bing Webmaster Tools
- Schema markup validators

## Maintenance

Review and update SEO configuration:
- **Quarterly**: Keyword relevance, meta descriptions
- **After major updates**: Sitemap, structured data
- **Monthly**: Search Console performance data
