# RACE.AI - Deployment Guide

## 🚀 Deploying Your React Application

This guide covers multiple deployment options for your RACE.AI React application.

## Option 1: Vercel (Recommended - Easiest)

### Why Vercel?
- ✅ Free for hobby projects
- ✅ Automatic deployments from Git
- ✅ Fast global CDN
- ✅ Zero configuration needed
- ✅ Perfect for React/Vite apps

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - React conversion"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Import Project in Vercel**
   - Click "New Project"
   - Import your Git repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

4. **Done!** Your site will be live at `your-project.vercel.app`

### Custom Domain
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

## Option 2: Netlify

### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with Git provider

2. **Create `netlify.toml` Configuration**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy via Git**
   - Connect your repository
   - Netlify will auto-build and deploy

Or **Deploy via Drag & Drop**:
   ```bash
   npm run build
   ```
   Then drag the `dist` folder to Netlify

---

## Option 3: GitHub Pages

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/RACE_SITE",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/RACE_SITE/',
     // ... rest of config
   });
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

---

## Option 4: Traditional Web Server (Apache/Nginx)

### Build the Project
```bash
npm run build
```

This creates a `dist` folder with all static files.

### Apache Configuration

Create `.htaccess` in `dist` folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Upload Files
- Upload all files from `dist` folder to your web server
- Ensure `.htaccess` or nginx config is in place

---

## Option 5: AWS S3 + CloudFront

### Steps:

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Configure CloudFront**
   - Create distribution pointing to S3 bucket
   - Set error pages to redirect to `/index.html`

4. **Update DNS** to point to CloudFront distribution

---

## Option 6: Firebase Hosting

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Set public directory to: `dist`
   - Configure as single-page app: `Yes`
   - Don't overwrite index.html

3. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Environment Variables

If you need environment variables:

### Create `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=RACE.AI
```

### Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Set in hosting platforms:
- **Vercel/Netlify**: Add in project settings
- **Others**: Set before build command

---

## Pre-Deployment Checklist

- [ ] Test all pages and links locally
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test forms and interactions
- [ ] Run production build locally: `npm run build && npm run preview`
- [ ] Check browser console for errors
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Optimize images if needed
- [ ] Update meta tags and SEO information
- [ ] Set up Google Analytics (optional)

---

## Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Compress images in `/public/img/`
   - Use modern formats (WebP)

2. **Code Splitting** (Already configured in Vite)
   - Vite automatically splits code

3. **Enable Compression**
   - Most hosting platforms auto-enable gzip/brotli

4. **CDN Assets**
   - Font Awesome, Bootstrap, Google Fonts already using CDN

---

## Monitoring & Analytics

### Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html` or use `react-ga4`:
   ```bash
   npm install react-ga4
   ```

### Add to App.jsx:
```javascript
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');
```

---

## Troubleshooting

### Blank Page After Deployment
- Check browser console for errors
- Verify `base` path in `vite.config.js` matches deployment path
- Ensure all routes configured correctly

### 404 on Page Refresh
- Add redirect rules (see hosting-specific sections above)
- Ensure server redirects all routes to index.html

### Images Not Loading
- Check image paths are correct (should be relative to public folder)
- Verify images uploaded to hosting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## Need Help?

- **Documentation**: Check README.md
- **Issues**: Review console logs in browser
- **Support**: Contact development team

---

## 🎉 Congratulations!

Once deployed, your RACE.AI application will be live and accessible worldwide!

**Remember:**
- Keep dependencies updated
- Monitor performance
- Gather user feedback
- Iterate and improve

Good luck with your deployment! 🚀
