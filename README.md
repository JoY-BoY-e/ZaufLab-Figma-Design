# Digital Agency Website

A modern, responsive, and high-performance digital agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Pixel-perfect implementation based on Figma design
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **SEO Ready**: Complete SEO setup with meta tags, structured data, and sitemap
- **Responsive**: Mobile-first design that works on all devices
- **Type Safe**: Built with TypeScript for better development experience
- **Accessible**: WCAG compliant components
- **Animation**: Smooth scroll animations and micro-interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Heroicons & Custom SVGs
- **Performance**: Built-in Next.js optimizations
- **SEO**: Next.js metadata API with structured data

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd digital-agency
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── loading.tsx     # Loading UI
│   ├── error.tsx       # Error boundary
│   ├── not-found.tsx   # 404 page
│   ├── sitemap.ts      # Sitemap generation
│   └── viewport.ts     # Viewport configuration
├── components/         # Reusable components
│   ├── ui/            # Base UI components
│   ├── header.tsx     # Navigation header
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   ├── work-section.tsx
│   ├── testimonials-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── animated-section.tsx
│   └── structured-data.tsx
└── lib/
    └── utils.ts       # Utility functions
```

## 🎨 Design System

The website uses a comprehensive design system with:

- **Colors**: Custom color palette with light/dark mode support
- **Typography**: Modern font stack with proper hierarchy
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components
- **Animations**: Smooth transitions and hover effects

## ⚡ Performance Features

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Lazy Loading**: Components load when needed
- **Font Optimization**: Preloaded Google Fonts
- **Caching**: Proper cache headers for static assets

## 🔍 SEO Features

- **Meta Tags**: Complete OpenGraph and Twitter card support
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated XML sitemap
- **robots.txt**: Search engine directives
- **Performance**: Core Web Vitals optimized

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Breakpoints**: Tailored for all screen sizes
- **Touch Friendly**: Optimized for touch interactions
- **Fast**: Minimal JavaScript for better mobile performance

## 🚦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdigitalagency.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Customization

1. **Colors**: Update colors in `tailwind.config.ts` and `globals.css`
2. **Content**: Modify component content in respective files
3. **SEO**: Update metadata in `layout.tsx`
4. **Analytics**: Add tracking code in `layout.tsx`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, please contact [your-email@example.com](mailto:your-email@example.com)

---

Built with ❤️ using Next.js and Tailwind CSS
