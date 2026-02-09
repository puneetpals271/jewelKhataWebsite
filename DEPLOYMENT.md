# Deployment Guide for JewelKhata Website

This guide covers different deployment options for the JewelKhata marketing website.

## Quick Start - Vercel (Recommended)

Vercel is the optimal platform for Next.js applications with zero-config deployment.

### Steps:

1. **Push to GitHub**
   - Ensure your repository is pushed to GitHub
   - Repository should include `.git` directory

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

3. **Configure Environment Variables (Optional)**
   - In Vercel dashboard, go to "Settings" → "Environment Variables"
   - Add the following if using email notifications:
     ```
     SMTP_SERVICE=gmail
     SMTP_USER=your-email@example.com
     SMTP_PASSWORD=your-app-password
     FROM_EMAIL=noreply@jewelkhata.com
     CONTACT_EMAIL=support@jewelkhata.com
     ```

4. **Custom Domain**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

### Benefits:
- Free tier available
- Automatic deployments on push to main branch
- Built-in CDN and caching
- SSL certificates included
- Analytics and monitoring
- Serverless functions support

---

## Alternative: Netlify

### Steps:

1. **Connect Repository**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Netlify will build and deploy automatically
   - Your site will be live within 2-3 minutes

### Configuration:
- Environment variables in "Settings" → "Build & deploy" → "Environment"
- Deploy hooks for automated deployments

---

## Docker Deployment

### Create Docker Image

1. **Create Dockerfile** (already configured in project if available)

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

2. **Build Image**
```bash
docker build -t jewelkhata-web:latest .
```

3. **Run Container**
```bash
docker run -p 3000:3000 -e NODE_ENV=production jewelkhata-web:latest
```

### Container Registry Options:
- **Docker Hub**: Registry for images
- **Amazon ECR**: AWS container registry
- **Google Container Registry**: GCP option
- **GitHub Container Registry**: GitHub's registry

---

## Manual Deployment (VPS/Server)

### Prerequisites:
- Ubuntu/Debian Linux server
- Node.js 18+ installed
- npm installed
- PM2 for process management

### Steps:

1. **Clone Repository**
```bash
git clone <repository-url>
cd jewelkhatawebsite
```

2. **Install Dependencies**
```bash
npm install
```

3. **Build Project**
```bash
npm run build
```

4. **Install PM2**
```bash
npm install -g pm2
```

5. **Start Application**
```bash
pm2 start "npm start" --name "jewelkhata-web"
```

6. **Configure Nginx Reverse Proxy**

Create `/etc/nginx/sites-available/jewelkhata`:

```nginx
server {
    listen 80;
    server_name jewelkhata.com www.jewelkhata.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable configuration:
```bash
ln -s /etc/nginx/sites-available/jewelkhata /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

7. **SSL Certificate (Let's Encrypt)**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d jewelkhata.com -d www.jewelkhata.com
```

8. **Auto-restart on Crash**

```bash
pm2 startup
pm2 save
```

---

## AWS Deployment

### Option 1: Elastic Beanstalk (Easiest)

1. Install AWS EB CLI
2. Create `.ebextensions/nodecommand.config`:
```yaml
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    GIT_SSH_KEY: ""
commands:
  01_build:
    command: npm run build
    cwd: /var/app/staging
```

3. Deploy:
```bash
eb init
eb create
eb deploy
```

### Option 2: EC2 + Auto Scaling

1. Create EC2 instance (t3.micro for free tier)
2. Follow manual VPS deployment steps above
3. Create AMI from configured instance
4. Set up Auto Scaling Group
5. Load Balancer configuration

---

## GitHub Actions CI/CD

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: vercel --prod
```

---

## Performance Optimization

### Before Deployment:

1. **Enable Compression**
```javascript
// next.config.js already enabled
```

2. **Image Optimization**
   - Next.js automatically optimizes images
   - Use next/image component

3. **Code Splitting**
   - Next.js automatically splits code
   - Dynamic imports for large components

4. **Caching Headers**
   - Vercel and Netlify auto-configure optimal caching

### Monitoring:

- **Error Tracking**: Sentry integration recommended
- **Analytics**: Google Analytics, Vercel Analytics
- **Performance**: Lighthouse CI in GitHub Actions
- **Uptime**: UptimeRobot, StatusPage

---

## Cost Comparison

| Platform | Starter | Monthly | Maturity |
|----------|---------|---------|----------|
| **Vercel** | Free | $20-100 | ⭐⭐⭐⭐⭐ |
| **Netlify** | Free | $19-500 | ⭐⭐⭐⭐⭐ |
| **AWS EB** | ~$5-10 | $10-50+ | ⭐⭐⭐⭐⭐ |
| **Heroku** | Paid | $50+ | ⭐⭐⭐⭐ |
| **DigitalOcean** | $4-6 | $4-50+ | ⭐⭐⭐⭐ |

---

## Post-Deployment Checklist

- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Environment variables set
- [ ] Email notifications working
- [ ] Analytics configured
- [ ] Backups configured
- [ ] Monitor uptime
- [ ] Test contact form
- [ ] Performance metrics verified
- [ ] SEO metadata validated

---

## Troubleshooting

### Build Fails
- Check Node.js version: `node --version` (should be 18+)
- Clear cache: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`

### 404 Errors
- Check that all static files are in `public/` folder
- Verify environment variables are set

### Style Issues
- Run `npm run build` locally to test
- Check Tailwind CSS configuration
- Verify CSS imports in layout.tsx

### Performance Issues
- Check deployment region (select closest to users)
- Enable caching for static assets
- Use CDN for image delivery

---

For more help and updates, visit the deployment documentation:
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
