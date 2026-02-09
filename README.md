# JewelKhata Marketing Website

A modern, professional marketing website for the JewelKhata jewelry management app. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section** - Eye-catching introduction with key statistics
- **Features Showcase** - Comprehensive display of app capabilities
- **Download Section** - Easy access to iOS and Android download links
- **Customization Info** - Information about custom development options
- **Contact Form** - Professional contact form with validation
- **FAQ Section** - Comprehensive frequently asked questions
- **Mobile Responsive** - Perfect viewing on all devices
- **SEO Optimized** - Meta tags and structured data
- **Vercel Ready** - One-click deployment to Vercel

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** Built-in React hooks
- **Deployment:** Vercel Ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jewelkhatawebsite
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration (optional for local development)

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Header.tsx                # Navigation header
│   ├── HeroSection.tsx           # Hero banner
│   ├── Features.tsx              # Features showcase
│   ├── DownloadSection.tsx       # Download links
│   ├── Customization.tsx         # Customization info
│   ├── ContactForm.tsx           # Contact form
│   ├── FAQ.tsx                   # FAQ section
│   └── Footer.tsx                # Footer
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind config
├── postcss.config.js             # PostCSS config
└── next.config.js                # Next.js config
```

## Configuration

### Environment Variables

Create a `.env.local` file with the following (optional):

```env
# Email Configuration (for contact form)
SMTP_SERVICE=gmail
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
FROM_EMAIL=noreply@jewelkhata.com
CONTACT_EMAIL=support@jewelkhata.com

# Vercel Configuration
NEXT_PUBLIC_SITE_URL=https://jewelkhata.com
```

## Contact Form Integration

The contact form is set up to accept submissions. To enable email notifications:

1. Uncomment the nodemailer integration in `src/app/api/contact/route.ts`
2. Configure your email service credentials in `.env.local`
3. Use any email service provider:
   - SendGrid
   - Mailgun
   - AWS SES
   - Gmail SMTP
   - Custom SMTP server

## Deployment

### Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure build settings
5. Click "Deploy"

### Deploy to Other Platforms

**Netlify:**
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish folder: `.next`

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#YOUR_COLOR',
  'primary-dark': '#YOUR_DARK_COLOR',
  'primary-light': '#YOUR_LIGHT_COLOR',
}
```

### Content

- Update app store links in `src/components/DownloadSection.tsx`
- Modify features in `src/components/Features.tsx`
- Edit FAQs in `src/components/FAQ.tsx`
- Update contact info in `src/components/ContactForm.tsx`

### Social Links

Update social media links in `src/components/Footer.tsx`

## Performance

- **Next.js Image Optimization** - Images are automatically optimized
- **Code Splitting** - Automatic code splitting by route
- **CSS Optimization** - Tailwind purges unused styles
- **Core Web Vitals** - Optimized for Lighthouse scores

## SEO

- Meta tags and Open Graph tags configured
- Sitemap auto-generation (optional)
- Mobile-first responsive design
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing

Run ESLint:
```bash
npm run lint
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions about JewelKhata, visit:
- Email: support@jewelkhata.com
- Website: https://jewelkhata.com
- Phone: +1 (555) 123-4567

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for jewelry businesses worldwide
