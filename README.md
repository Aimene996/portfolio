# My Portfolio - Professional Freelancer Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🎯 Project Goal
Build a professional, modern portfolio website matching the chosen design - split layout with hero section, navigation, and visual elements.

## 🎨 Design Reference
**Style**: Modern split-layout portfolio with pink/orange color scheme
- **Layout**: Two-column split (Left: Content, Right: Visual/Hero image)
- **Colors**: Pink (#FF6B9D or similar), Orange (#FFB347 or similar), White, Black
- **Typography**: Bold headlines, clean sans-serif
- **Key Elements**: Navigation bar, hero section, CTA button, social icons, decorative shapes

## 📋 Development Plan & Tasks

### Phase 1: Project Structure ✅
- [x] Initialize Next.js project with Tailwind CSS
- [ ] Create component folder structure
  - [ ] `components/Navigation.tsx` - Header with logo and nav links
  - [ ] `components/Hero.tsx` - Main hero section (left content + right visual)
  - [ ] `components/About.tsx` - About section (for About page)
  - [ ] `components/Portfolio.tsx` - Portfolio projects grid
  - [ ] `components/Contact.tsx` - Contact form section
  - [ ] `components/SocialIcons.tsx` - Reusable social media icons
  - [ ] `components/DecorativeShapes.tsx` - Geometric shapes for visual section

### Phase 2: Navigation & Header
- [ ] Create Navigation component
  - [ ] Logo/Name on left ("PortX" or your name)
  - [ ] Nav links on right: Home, About, Portfolio, Contact
  - [ ] Sticky/fixed header (optional)
  - [ ] Mobile hamburger menu (responsive)

### Phase 3: Hero Section (Main Focus)
- [ ] Left Content Area:
  - [ ] Small tagline text (e.g., "UI UX Designer" or your role) - pink color
  - [ ] "Hello, I am" text - large, bold, black
  - [ ] Your name - extra large, bold, pink
  - [ ] Description paragraph - regular text, black
  - [ ] "Hire me" CTA button - pink background, white text, rounded
  - [ ] Social media icons row at bottom (Facebook, Dribbble, Behance, LinkedIn)
  
- [ ] Right Visual Area:
  - [ ] Large circular/semi-circular orange background shape
  - [ ] Your profile image (or placeholder) positioned in center
  - [ ] Decorative geometric shapes (triangle, circle, rounded square)
  - [ ] Floating social media icons around the image
  - [ ] Proper positioning and z-index layering

### Phase 4: Styling & Design
- [ ] Set up color palette in Tailwind config:
  - [ ] Primary pink color
  - [ ] Orange accent color
  - [ ] Black text
  - [ ] White background
- [ ] Typography setup:
  - [ ] Large bold fonts for name
  - [ ] Medium fonts for headings
  - [ ] Regular fonts for body text
- [ ] Layout implementation:
  - [ ] Two-column grid layout (responsive)
  - [ ] Proper spacing and padding
  - [ ] Mobile responsive breakpoints
- [ ] Decorative elements:
  - [ ] Orange semi-circular background shape
  - [ ] Geometric shapes (triangle, circle, square)
  - [ ] Floating social icons with positioning

### Phase 5: Additional Sections
- [ ] About Section:
  - [ ] Personal introduction
  - [ ] Skills and expertise
  - [ ] Why work with you
- [ ] Portfolio Section:
  - [ ] Project cards grid
  - [ ] Project images
  - [ ] Project descriptions
  - [ ] Links to live projects
- [ ] Contact Section:
  - [ ] Contact form
  - [ ] Email/phone information
  - [ ] Social links

### Phase 6: Responsive Design
- [ ] Mobile layout (stack columns vertically)
- [ ] Tablet layout adjustments
- [ ] Desktop layout (split view)
- [ ] Test on multiple screen sizes
- [ ] Adjust font sizes for mobile
- [ ] Mobile navigation menu

### Phase 7: Content & Personalization
- [ ] Replace placeholder text with your content:
  - [ ] Your name
  - [ ] Your role/title
  - [ ] Your bio/description
  - [ ] Your profile image
- [ ] Update social media links
- [ ] Add your projects to portfolio
- [ ] Customize colors if needed

### Phase 8: Polish & Optimization
- [ ] Add smooth scroll animations
- [ ] Hover effects on buttons and links
- [ ] Image optimization (Next.js Image component)
- [ ] SEO metadata (title, description)
- [ ] Accessibility (alt text, ARIA labels)
- [ ] Performance optimization
- [ ] Cross-browser testing

### Phase 9: Deployment
- [ ] Final review and testing
- [ ] Deploy to Vercel/Netlify
- [ ] Set up custom domain (optional)
- [ ] Test live site
- [ ] Share portfolio link

## 📁 Project Structure

```
app/
  ├── page.tsx                    # Home page with Hero
  ├── about/
  │   └── page.tsx                # About page
  ├── portfolio/
  │   └── page.tsx                # Portfolio page
  ├── contact/
  │   └── page.tsx                # Contact page
  ├── layout.tsx                  # Root layout
  ├── globals.css                 # Global styles
  └── components/
      ├── Navigation.tsx          # Header navigation
      ├── Hero.tsx                # Hero section (split layout)
      ├── About.tsx               # About section
      ├── Portfolio.tsx           # Portfolio grid
      ├── Contact.tsx             # Contact form
      ├── SocialIcons.tsx         # Social media icons
      └── DecorativeShapes.tsx    # Geometric shapes
```

## 🎨 Design Specifications

### Color Palette
- **Primary Pink**: `#FF6B9D` or `#FF69B4` (for name, tagline, button)
- **Orange Accent**: `#FFB347` or `#FFA07A` (for background shape)
- **Black**: `#000000` or `#1a1a1a` (for text)
- **White**: `#FFFFFF` (for background)

### Typography
- **Name**: Extra large, bold (4xl-6xl), pink color
- **Tagline**: Small-medium, bold, pink color
- **Headings**: Large, bold, black
- **Body**: Regular, black/gray

### Layout
- **Desktop**: 60% left (content) / 40% right (visual) or similar split
- **Mobile**: Stack vertically, full width

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Implementation Notes

- Use Tailwind CSS for all styling
- Use Next.js Image component for optimized images
- Create reusable components for social icons
- Use CSS transforms/positioning for decorative shapes
- Implement smooth scroll for navigation links
- Ensure mobile-first responsive design

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Lucide Icons](https://lucide.dev/) or [React Icons](https://react-icons.github.io/react-icons/) for social icons

## 📦 Deployment

Deploy your Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
