# Alcaline Digital Agency Website

A modern, responsive, and high-performance digital agency website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases Alcaline's development process, services, and approach to building great software.

## 🚀 Features

- **Modern Design**: Clean, professional design with focus on user experience
- **Development Process Visualization**: Interactive flowchart showing 6-step development approach
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **SEO Ready**: Complete SEO setup with meta tags, structured data, and sitemap
- **Responsive**: Mobile-first design that works on all devices
- **Type Safe**: Built with TypeScript for better development experience
- **Component-Based**: Modular architecture with reusable components
- **Interactive Elements**: Engaging UI with smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React icons
- **Performance**: Built-in Next.js optimizations
- **SEO**: Next.js metadata API with structured data

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/JoY-BoY-e/ZaufLab-Figma-Design.git
cd ZaufLab-Figma-Design/frontend
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
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── loading.tsx         # Loading UI
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Sitemap generation
│   └── viewport.ts         # Viewport configuration
├── components/             # Feature components
│   ├── ui/                # Base UI components (Button, Card, Input)
│   ├── header.tsx         # Navigation header
│   ├── hero-section.tsx   # Hero section with CTA
│   ├── services-section.tsx      # Services overview
│   ├── work-section.tsx           # Portfolio showcase
│   ├── case-studies.tsx          # Case studies section
│   ├── client-section.tsx        # Client testimonials
│   ├── trust-section.tsx         # Trust indicators
│   ├── tech-section.tsx          # Technology stack
│   ├── great-software-section.tsx # Software development philosophy
│   ├── development-process-section.tsx # 6-step development process
│   ├── development-approch-section.tsx # Development approach
│   ├── testimonials-section.tsx  # Client feedback
│   ├── contact-section.tsx       # Contact form
│   ├── footer.tsx               # Site footer
│   └── structured-data.tsx      # SEO structured data
└── lib/
    └── utils.ts               # Utility functions (cn, etc.)
```

## 🎯 Key Sections

### Development Process
Interactive 6-step development workflow:
1. **Assemble the right team** - Team vetting and selection
2. **Sprint planning** - Collaborative roadmap planning
3. **Tech architecture** - Microservices and scalable design
4. **Standups & weekly demos** - Regular communication
5. **Code reviews** - Quality assurance process
6. **Iterative delivery** - Checkpoint-based development

### Services Showcase
- Custom software development
- Technology consulting
- Team augmentation
- Product development

## 🎨 Design System

The website uses a modern design system with:

- **Colors**: Pink accent (#EC4899) with gray scale palette
- **Typography**: Clean, readable font hierarchy
- **Spacing**: Consistent spacing scale with Tailwind utilities
- **Components**: Reusable UI components with consistent styling
- **Layout**: Grid-based responsive layouts
- **Interactive Elements**: Smooth hover effects and transitions

## ⚡ Performance Features

- **Component Optimization**: Efficient React component architecture
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Optimized web font loading
- **Minimal JavaScript**: Lightweight client-side code
- **Static Generation**: Pre-rendered pages for better performance

## 🔍 SEO Features

- **Meta Tags**: Complete OpenGraph and Twitter card support
- **Structured Data**: JSON-LD schema markup for better search visibility
- **Sitemap**: Auto-generated XML sitemap
- **robots.txt**: Search engine crawling directives
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Core Web Vitals**: Optimized for Google's performance metrics

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
NEXT_PUBLIC_SITE_URL=https://alcaline-agency.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Customization

1. **Colors**: Update the pink accent color in `tailwind.config.ts` and component styles
2. **Content**: Modify component content in respective section files
3. **SEO**: Update metadata in `layout.tsx` and `structured-data.tsx`
4. **Analytics**: Add tracking code in `layout.tsx`
5. **Development Process**: Update steps in `development-process-section.tsx`

## 🏢 About Alcaline

This website represents Alcaline's approach to software development, emphasizing:
- Team collaboration and communication
- Iterative development methodology
- Quality assurance through code reviews
- Scalable architecture design
- Client-focused delivery process

## 📄 License

This project is part of ZaufLabs entry test and is for demonstration purposes.

## 🤝 Contributing

This project is part of a ZaufLabs entry test. For any questions or suggestions:

1. Create an issue for bug reports or feature requests
2. Follow the existing code style and component patterns
3. Ensure TypeScript compliance
4. Test responsive design on multiple screen sizes

## 📞 Contact

For questions about this implementation or ZaufLabs opportunities:
- Repository: [ZaufLab-Figma-Design](https://github.com/JoY-BoY-e/ZaufLab-Figma-Design)
- Project: Digital Agency Website Frontend

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS for ZaufLabs Entry Test
