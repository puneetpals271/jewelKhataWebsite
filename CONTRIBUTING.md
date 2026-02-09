# Contributing & Development Guide

This guide outlines the development workflow for the JewelKhata website.

## Development Setup

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Git
- Code editor (VS Code recommended)

### Initial Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd jewelkhatawebsite
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

5. Open browser:
```
http://localhost:3000
```

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
└── components/                   # React components
    ├── Header.tsx                # Navigation
    ├── HeroSection.tsx           # Hero banner
    ├── Features.tsx              # Features grid
    ├── DownloadSection.tsx       # App store links
    ├── Customization.tsx         # Customization options
    ├── ContactForm.tsx           # Contact form
    ├── FAQ.tsx                   # FAQ content
    └── Footer.tsx                # Footer with links
```

## Code Style & Standards

### TypeScript
- Use strict mode (`"strict": true`)
- Import types properly: `import type { TypeName } from 'module'`
- Avoid `any` type

### React Components
- Use functional components with hooks
- Props must be typed with interfaces
- Use `'use client'` directive for client components
- Keep components focused and reusable

### CSS & Tailwind
- Use Tailwind classes for all styling
- Follow the breakpoint pattern:
  - `sm:` for small screens
  - `md:` for medium screens
  - `lg:` for large screens
- Avoid custom CSS unless necessary
- Use theme colors: primary, primary-dark, primary-light

### File Naming
- Components: PascalCase (e.g., `Header.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Types: camelCase (e.g., `types.ts`)

## Git Workflow

### Branch Naming
- Feature: `feature/component-name`
- Bug fix: `fix/issue-description`
- Enhancement: `enhance/feature-name`

### Commit Messages
Follow conventional commits:
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Code formatting
refactor: Code restructuring
test: Add/update tests
chore: Maintenance tasks
```

### Pull Request Process
1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes and commit
3. Push to remote: `git push origin feature/my-feature`
4. Create pull request with description
5. Request code review
6. Address feedback
7. Merge to main

## Development Commands

### Build & Development
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Check TypeScript
npm run type-check

# ESLint checks
npm run lint
```

### Code Quality
```bash
# Format code with Prettier
npm run format

# Check for TypeScript errors
npm run type-check

# Run all checks
npm run lint && npm run type-check
```

## Adding New Features

### Adding a New Component

1. Create component file in `src/components/`:
```typescript
'use client';

import React from 'react';

interface Props {
  // Define props
}

export default function ComponentName({ ...props }: Props) {
  return (
    <div>
      {/* Component content */}
    </div>
  );
}
```

2. Add to appropriate section in `src/app/page.tsx`

3. Import and include in your section

### Adding a New API Route

1. Create directory: `src/app/api/endpoint-name/`
2. Create `route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Handle request
    return NextResponse.json({ data: 'success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process' },
      { status: 500 }
    );
  }
}
```

### Adding Styles

1. **Component-specific Tailwind classes:**
```typescript
<div className="flex items-center justify-between gap-4 md:gap-8">
  {/* Content */}
</div>
```

2. **Animations in globals.css:**
```css
@keyframes customAnimation {
  from { /* styles */ }
  to { /* styles */ }
}

.animate-custom {
  animation: customAnimation 0.6s ease-out;
}
```

## Email Integration

To enable email notifications on contact form submissions:

1. **Choose Email Provider:**
   - SendGrid
   - Mailgun
   - AWS SES
   - Gmail SMTP
   - Custom SMTP

2. **Update `.env.local`:**
```env
SMTP_SERVICE=gmail
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=noreply@jewelkhata.com
CONTACT_EMAIL=support@jewelkhata.com
```

3. **Uncomment email code in `src/app/api/contact/route.ts`**

4. **Install dependencies if needed:**
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

## Performance Considerations

### Image Optimization
- Use Next.js Image component: `<Image src="" alt="" />`
- Provide `width` and `height` props
- Use appropriate sizes for different viewports

### Code Splitting
- Use dynamic imports for large components:
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'));
```

### SEO Best Practices
- Meta tags in `layout.tsx`
- Semantic HTML elements
- Proper heading hierarchy (H1 → H2 → H3)
- Image alt text
- Internal linking

## Testing

### Browser Testing
- Test on Chrome, Firefox, Safari, Edge
- Test mobile responsiveness (DevTools device mode)
- Test touch interactions on mobile devices

### Accessibility
- Use semantic HTML
- Provide alt text for images
- Test keyboard navigation (Tab key)
- Check color contrast ratios

### Performance
- Run Lighthouse audit (Chrome DevTools)
- Check Core Web Vitals
- Monitor bundle size

## Deployment Before & After Checklist

### Before Deployment
- [ ] Run `npm run build` locally
- [ ] Run `npm run type-check`
- [ ] Run `npm run lint`
- [ ] Test responsive design
- [ ] Test form submissions
- [ ] Check links are correct
- [ ] Verify environment variables

### After Deployment
- [ ] Visit production URL
- [ ] Test all interactive features
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify analytics loaded
- [ ] Check SSL certificate
- [ ] Monitor error logs

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process (if needed)
kill -9 <PID>
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Style Not Applying
- Ensure Tailwind class is spelled correctly
- Check if it's a valid Tailwind utility
- Verify component has `'use client'` if needed
- Rebuild: `npm run build`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)

## Getting Help

- Check existing documentation
- Search project issues
- Create new issue with clear description
- Include error messages and steps to reproduce
- Provide environment details (OS, Node version, etc.)

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create git tag: `git tag -a v1.0.0 -m "Release 1.0.0"`
4. Push tag: `git push origin v1.0.0`
5. Create GitHub release with notes
6. Deploy to production

---

Happy coding! 🎉
