# Ice Age Heating and AC - Website

A modern, SEO-optimized website for Ice Age Heating and AC, a professional HVAC service provider serving Southern Wisconsin and Northern Illinois.

## 🏠 About

Ice Age Heating and AC provides reliable heating and cooling solutions for residential customers. This website showcases their services including maintenance, repairs, installations, and ductwork services.

## ✨ Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD)
- **Responsive Design**: Mobile-first design built with Tailwind CSS
- **Static Site Generation**: Pre-rendered for optimal performance and SEO
- **Smooth Navigation**: Smooth scrolling between sections
- **Contact Integration**: Direct phone and email links for easy customer contact
- **Service Areas**: Clear display of service locations (Southern Wisconsin & Northern Illinois)
- **Modern UI**: Clean, professional design with dark mode support

## 🛠️ Tech Stack

- **[Nuxt 4](https://nuxt.com/)** - Vue.js framework for static site generation
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## 📋 Prerequisites

- Node.js 18+ (recommended: Node.js 20+)
- npm, pnpm, yarn, or bun package manager

## 🚀 Getting Started

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <repository-url>
cd ice-age

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development

Start the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun run dev
```

The site will be available at `http://localhost:3000`

### Build

Build the application for production:

```bash
npm run build
```

### Generate Static Site

Generate static files for deployment:

```bash
npm run generate
```

Static files will be output to `.output/public/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
ice-age/
├── app/
│   ├── app.vue          # Root component
│   └── pages/
│       └── index.vue    # Home page
├── public/
│   ├── favicon.ico      # Site favicon
│   ├── IceAgeLogo.svg   # Company logo
│   ├── robots.txt       # SEO robots file
│   └── .nojekyll        # GitHub Pages config
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment workflow
├── nuxt.config.ts       # Nuxt configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## 🌐 Deployment

### GitHub Pages (Automated)

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

#### Setup Steps:

1. **Enable GitHub Pages:**
   - Navigate to your repository on GitHub
   - Go to **Settings** → **Pages**
   - Under **"Source"**, select **"GitHub Actions"**
   - Save the changes

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow
   - Once complete, your site will be live

#### Configuration Options:

- **Custom Domain**: Add `NUXT_PUBLIC_SITE_URL` repository secret with your domain
- **Project Pages**: If deploying to a project page (not user/organization), set `NUXT_APP_BASE_URL` in `nuxt.config.ts`

### Other Hosting Options

The static files in `.output/public/` can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `.output/public` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the static files to an S3 bucket
- **Any static host**: Upload the contents of `.output/public/`

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory (optional):

```env
NUXT_PUBLIC_SITE_URL=https://iceageheatingandac.com
NUXT_APP_BASE_URL=/
```

### Site Configuration

Update contact information and site details in `app/pages/index.vue`:

```typescript
const phoneNumber = '+1 (608) 561-7954'
const emailAddress = 'sam@iceageheatingandac.com'
const siteUrl = 'https://iceageheatingandac.com'
```

## 📱 Features Breakdown

### SEO Features
- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD) for local business
- Semantic HTML structure
- Optimized for search engines

### User Experience
- Smooth scroll navigation
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Fast page loads (static generation)
- Accessible design

### Business Features
- Service area display
- Direct contact links (phone/email)
- Service descriptions
- Call-to-action buttons
- Company information

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

### Code Style

This project uses:
- TypeScript for type safety
- ESLint for code linting (if configured)
- Tailwind CSS for styling

## 📝 License

This project is private and proprietary.

## 📞 Contact

**Ice Age Heating and AC**

- **Phone**: +1 (608) 561-7954
- **Email**: sam@iceageheatingandac.com
- **Service Areas**: Southern Wisconsin & Northern Illinois

## 🙏 Acknowledgments

- Built with [Nuxt](https://nuxt.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

**Last Updated**: 2025
# ice-age-nuxt
