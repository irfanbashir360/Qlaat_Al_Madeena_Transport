# Qlaat Al Madeena Transport Website

Modern, professional, enterprise-grade website for Qlaat Al Madeena Transport L.L.C, a Dubai-based logistics and transportation company.

## Features

- **Modern Next.js 14** - Built with App Router for optimal performance
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system
- **Responsive Design** - Mobile-first approach, works on all devices
- **SEO Optimized** - Meta tags, structured data, and optimized content
- **Accessibility** - WCAG 2.1 AA compliant
- **Bilingual Ready** - Infrastructure for Arabic & English support
- **CMS Integration** - Sanity CMS for easy content management
- **Interactive Components** - Smooth animations and transitions
- **Multi-step Quote Form** - User-friendly quote request process

## Pages Included

1. **Homepage** - Hero, Services Overview, Why Choose Us, Stats, Testimonials, CTA
2. **About Us** - Company info, mission, vision, values, history timeline, certifications
3. **Services** - Detailed service sections for all three transport types
4. **Fleet** - Vehicle showcase with specifications and features
5. **Coverage** - UAE-wide coverage areas with interactive elements
6. **Industries** - Industries served with tailored solutions
7. **Get Quote** - Multi-step form for quote requests
8. **Contact** - Contact form, map integration, company details
9. **FAQ** - Comprehensive FAQ with accordion UI

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **CMS**: Sanity
- **Animations**: Framer Motion
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository** (or you're already in the project directory):

```bash
cd Qlaat_Al_Madeena_Transport
```

2. **Install dependencies** (already done, but if needed):

```bash
npm install
```

3. **Set up environment variables**:

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

4. **Run the development server**:

```bash
npm run dev
```

5. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
Qlaat_Al_Madeena_Transport/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── fleet/               # Fleet page
│   ├── coverage/            # Coverage areas page
│   ├── industries/          # Industries page
│   ├── quote/               # Quote request page
│   ├── contact/             # Contact page
│   ├── faq/                 # FAQ page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Section.tsx
│   │   └── ...
│   ├── sections/            # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   └── layout/              # Layout components
│       ├── Navigation.tsx
│       └── Footer.tsx
├── sanity/                  # Sanity CMS configuration
│   ├── lib/                 # Sanity client
│   └── schemas/             # Content schemas
├── public/                  # Static assets
├── styles/                  # Additional styles
└── ...config files

```

## Design System

### Colors

- **Primary**: Deep Blue (#0A2463) - Trust & professionalism
- **Secondary**: Orange (#FF6B35) - Energy & logistics
- **Accent**: Steel Gray (#2E4057) - Industrial strength

### Typography

- **Headings**: Montserrat (Bold, weights 400-800)
- **Body**: Inter (weights 300-700)
- **Arabic**: Cairo (for bilingual support)

### Components

All components are built with:
- Consistent spacing and sizing
- Smooth transitions and hover effects
- Accessibility features
- Mobile-responsive design

## Customization

### Update Company Information

Edit the content in individual page files:
- Contact details: `components/layout/Navigation.tsx` and `Footer.tsx`
- Company info: `app/about/page.tsx`
- Services: `app/services/page.tsx`

### Add Real Images

Replace placeholder images in:
- Hero section: `components/sections/Hero.tsx`
- Service images: `app/services/page.tsx`
- Fleet images: `app/fleet/page.tsx`

Store images in `public/images/` directory.

### Configure CMS

1. **Create a Sanity account** at [sanity.io](https://www.sanity.io/)

2. **Initialize Sanity Studio**:

```bash
npm install -g @sanity/cli
sanity init
```

3. **Update environment variables** with your Sanity project ID

4. **Deploy Sanity Studio**:

```bash
sanity deploy
```

### Google Maps Integration

Google Maps is already integrated! To use it:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Maps JavaScript API for your project
3. Add the API key to your `.env.local` file:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key-here
```

4. The maps will automatically appear on:
   - `app/about/page.tsx` - Company location map
   - `app/contact/page.tsx` - Contact page map
   - `app/coverage/page.tsx` - UAE coverage map

**Note:** If no API key is provided, a placeholder will be shown with instructions.

## Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

### Build for Production

```bash
npm run build
npm run start
```

## Performance Optimization

- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Font Optimization**: Google Fonts with next/font
- **Caching**: Implement caching strategies
- **CDN**: Use Vercel CDN or Cloudflare

## SEO Optimization

- Meta tags configured in all pages
- Structured data ready for implementation
- Sitemap generation (add `sitemap.ts` in app directory)
- robots.txt configuration
- Open Graph and Twitter Card tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## Future Enhancements

- [x] Implement actual Google Maps integration
- [ ] Add form submission backend integration
- [ ] Implement email notifications for quote requests
- [ ] Implement search functionality
- [ ] Add language switcher for Arabic
- [ ] Integrate analytics (Google Analytics, etc.)
- [ ] Add live chat support
- [ ] Implement progressive web app (PWA) features
- [ ] Add customer portal/login area

## Support & Maintenance

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Company Information

- **Company Name**: Qlaat Al Madeena Transport L.L.C S.O.C (قلعة المدينة للنقليات)
- **License No**: 1572603
- **Register No**: 2756051
- **Location**: Al-Khabeesi area, Dubai, UAE
- **Contact**: +971-54-7502525
- **Email**: Dubaiuaeproservices@gmail.com

## License

© 2024 Qlaat Al Madeena Transport L.L.C. All rights reserved.

## Contributing

For any issues, feature requests, or contributions, please contact the development team.

---

Built with ❤️ for Qlaat Al Madeena Transport L.L.C
