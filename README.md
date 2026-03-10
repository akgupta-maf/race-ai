# RACE.AI - Retail Analytics Center Of Excellence

A modern, professional React + TypeScript application for retail analytics solutions.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript 5.3, React Router v6, and Vite
- **Type Safety**: Full TypeScript support with strict type checking
- **Professional UI**: Clean, responsive design with Bootstrap 5 and Framer Motion animations
- **Comprehensive Solutions**: Analytics pages for all retail needs including:
  - Business Insights & Boycott Analysis
  - Customer Segmentation & 360 Dashboard
  - Human Capital Analytics
  - Supplier Negotiation & Commodity Analysis
  - Category Optimization
  - Pricing & Promotion Effectiveness
  - Sustainability Analytics
  - RACE GPT (AI Assistant)
- **SEO Optimized**: React Helmet for meta tags and SEO
- **Smooth Animations**: Framer Motion for engaging user experience
- **Responsive Design**: Mobile-first, works on all devices

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

## 🚦 Running the Application

### Development Mode
```bash
npm run dev
```
The application will start at `http://localhost:3001` (or next available port)

### Type Checking
```bash
npm run type-check
```
Runs TypeScript compiler to check for type errors without emitting files

### Build for Production
```bash
npm run build
```
Runs type checking and builds the application for production

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components (.tsx)
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer
│   ├── Loader.tsx      # Loading spinner
│   ├── BackToTop.tsx   # Back to top button
│   ├── PageTemplate.tsx # Reusable page template
│   ├── ScrollToTop.tsx # Scroll to top on route change
│   └── ErrorBoundary.tsx # Error boundary component
├── pages/              # Page components (.tsx)
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Contact.tsx     # Contact page
│   ├── insights/       # Business insights pages
│   ├── customer/       # Customer analytics pages
│   ├── hr/            # HR & sustainability pages
│   ├── negotiation/   # Negotiation analytics pages
│   └── category/      # Category optimization pages
├── types/             # TypeScript type definitions
│   ├── index.ts       # Main type definitions
│   └── bootstrap.d.ts # Bootstrap module types
├── hooks/             # Custom React hooks
│   └── useBootstrap.ts # Bootstrap initialization
├── styles/            # CSS files
│   └── main.css       # Main stylesheet
├── App.tsx            # Main App component
└── main.tsx           # Entry point
```

## 🎨 Key Technologies

- **React 18** - UI library with hooks
- **TypeScript 5.3** - Static type checking
- **React Router v6** - Navigation and routing
- **Vite 5** - Lightning-fast build tool and dev server
- **Bootstrap 5** - CSS framework
- **Framer Motion** - Animation library
- **React Helmet Async** - SEO and meta tags

## 🌟 Features

### Navigation
- Sticky navigation with smooth scrolling
- Multi-level dropdown menus for all solutions
- Mobile-friendly responsive menu
- Active link highlighting

### Pages
All pages include:
- SEO-optimized meta tags
- Smooth animations on scroll
- Professional layouts
- Responsive design
- Call-to-action sections

### UI Components
- Professional loading spinner
- Back-to-top button
- Hover effects and transitions
- Interactive cards and buttons
- Custom scrollbar

## 📝 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Styling
- Global styles: `src/styles/main.css`
- Component-specific styles: Create `.css` file next to component
- CSS variables defined in `:root` in `main.css`

### Colors
Primary color: `#009CFF` (can be changed in `main.css`)

## 🚀 Deployment

Build and deploy the `dist` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## 📧 Contact

For questions or support, contact: race@mafcarrefour.com

## 📄 License

© 2024 RACE.AI - All Rights Reserved

---

Built with ❤️ by MAF Carrefour
