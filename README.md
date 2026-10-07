# LandSlide Trading & Contracting — Astro Website

A modern, high-performance static website for **LandSlide Trading and Contracting Company** (Doha, Qatar), converted from WordPress to [Astro](https://astro.build/).

## 🚀 Features

- **Blazing Fast**: Static generation with Astro, delivering sub-second load times and zero client-side JavaScript bloat.
- **Enterprise Design System**: Tailored corporate engineering styling with responsive layouts, modern typography, and branded navy & gold aesthetics.
- **Participated Projects Showcase**: Interactive catalog featuring 9 flagship capital megaprojects in Qatar:
  - *Qatar Petroleum District* (Oil & Gas)
  - *Doha Metro* (Construction)
  - *Msheireb Downtown Doha* (Construction)
  - *Doha Souq Development* (Construction)
  - *Place Vendôme Mall* (Construction)
  - *Doha Festival City* (Construction)
  - *North Gate Mall* (Construction)
  - *Lusail City Development* (Marine & Infrastructure)
  - *Salwa Beach Resort* (Marine & Hospitality)
- **100% Backward Compatible Permalinks**: Preserves original WordPress URL paths and permalinks.
- **Interactive Forms**: Responsive Contact and Careers / Resume submission forms.
- **Mobile First**: Fluid navigation with a slide-out mobile drawer menu.

## 🛠️ Project Structure

```text
├── public/                 # Static assets (logo, favicon, project media)
│   └── images/             # Optimized project and industry imagery
├── src/
│   ├── components/         # Header, Footer, ProjectCard
│   ├── layouts/            # Base Layout with SEO, OpenGraph & meta tags
│   ├── pages/              # Astro pages (Home, About, Projects, Careers, Contact)
│   ├── data/               # Structured site info & project data
│   └── styles/             # Global CSS design tokens & utilities
├── astro.config.mjs        # Astro configuration
└── package.json            # Scripts and dependencies
```

---

## 📦 Getting Started Locally

### Prerequisites

- Node.js `v18.14.1` or higher (recommended: Node 20+)
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to view the live development server.

### Production Build

```bash
npm run build
```

This compiles your entire website into pure static HTML, CSS, JS, and image assets located in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

Serves the generated `dist/` directory locally to verify before uploading or deploying.

---

## 🌐 Deployment Guide

### Option 1: Modern Static Web Hosting Services (Recommended)

Modern static platforms offer global edge CDNs, automated SSL certificates, DDoS protection, and continuous deployment directly from GitHub.

#### 1. Cloudflare Pages
- **Manual CLI Deploy:**
  ```bash
  npm run build
  npx wrangler pages deploy dist --project-name=land-slide-net
  ```
- **Automated GitHub Integration:**
  1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
  2. Select `nirzaf/land-slide.net`.
  3. Set build settings:
     - **Framework preset:** `Astro`
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
  4. Click **Save and Deploy**. Cloudflare will automatically build and deploy every push to `main`.

#### 2. Vercel
- **CLI:** `npx vercel --prod`
- **Dashboard:** Import the GitHub repo. Vercel automatically detects Astro (`Build: npm run build`, `Output: dist`).

#### 3. Netlify
- **CLI:** `npx netlify deploy --prod --dir=dist`
- **Dashboard:** Import GitHub repo (`Build: npm run build`, `Publish directory: dist`).

---

### Option 2: Traditional Shared Hosting via FTP / cPanel (e.g. Bluehost, Hostinger, GoDaddy, Namecheap)

If you are hosting on traditional cPanel / Linux shared hosting with Apache or NGINX and publish files via FTP or File Manager:

#### Step 1: Generate the Static Site
Run the build command on your machine:
```bash
npm run build
```
This generates the self-contained static site inside the `dist/` folder.

#### Step 2: Upload Files via FTP / SFTP
You can use an FTP client such as **FileZilla**, **WinSCP**, or the **cPanel File Manager**:

1. **Connect to your server:**
   - **Host:** `ftp.land-slide.net` (or your server IP)
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** `21` (FTP) or `22` (SFTP)
2. **Navigate to the web root:**
   - Open your hosting document root folder, typically `/public_html/` or `/www/`.
   - If old WordPress files exist in `/public_html/`, back them up or delete them so they do not conflict with the new static files.
3. **Upload the contents of `dist/`:**
   - **Important:** Upload the **contents** inside `dist/` (NOT the `dist` folder itself).
   - Your `/public_html/` should look like this:
     ```text
     /public_html/
     ├── index.html
     ├── about/
     │   └── index.html
     ├── projects/
     │   └── index.html
     ├── careers/
     │   └── index.html
     ├── contact/
     │   └── index.html
     ├── images/
     │   ├── projects/
     │   └── industries/
     ├── _astro/
     ├── favicon.png
     ├── logo.png
     └── .htaccess (optional)
     ```

#### Step 3: Configure `.htaccess` for Apache (Optional but Recommended)
If your host runs Apache (standard on cPanel), upload an `.htaccess` file to `/public_html/` for clean URLs, HTTPS redirection, Gzip compression, and caching:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On

  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Redirect /index.html to /
  RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /.*index\.html\ HTTP/
  RewriteRule ^(.*)index\.html$ /$1 [R=301,L]

  # Clean URLs for directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)/?$ $1/index.html [L]
</IfModule>

# Browser Caching for Assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

### Option 3: Automated FTP Deployment via GitHub Actions

If you want pushes to GitHub to automatically upload to your FTP server:

1. Create a GitHub Actions workflow file: `.github/workflows/ftp-deploy.yml`:
   ```yaml
   name: Deploy via FTP

   on:
     push:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout repository
           uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20

         - name: Install dependencies
           run: npm install

         - name: Build static site
           run: npm run build

         - name: Sync files via FTP
           uses: SamKirkland/FTP-Deploy-Action@v4.3.5
           with:
             server: ${{ secrets.FTP_SERVER }}
             username: ${{ secrets.FTP_USERNAME }}
             password: ${{ secrets.FTP_PASSWORD }}
             local-dir: ./dist/
             server-dir: /public_html/
   ```
2. In GitHub, go to **Settings** > **Secrets and variables** > **Actions** and add:
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`

Whenever you push code to GitHub, your FTP website updates automatically with zero manual file transfers.

---

### Option 4: Pre-built Static Site Included in the Repository (`dist/`)

The repository includes the compiled static site ready for immediate publishing:

1. **Direct FTP Deployment without Node.js:**
   - The compiled static site is saved in the [`dist/`](dist/) folder in this repository.
   - It includes all compiled HTML files, optimized WebP images, CSS/JS bundles, and a production-ready [`.htaccess`](dist/.htaccess).
   - You can download or clone this repository and immediately upload the contents of `dist/` to your `/public_html/` folder using FTP—no Node.js build step needed.

2. **Rebuilding the Static Site:**
   - Whenever you edit content or templates in `src/`, rebuild and commit:
     ```bash
     npm run build
     git add dist/
     git commit -m "Update static site build"
     git push origin main
     ```

---

## 📄 License

Proprietary — LandSlide Trading and Contracting Company.
