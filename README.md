# Nourish Frontend

A premium, highly interactive agrifood ecosystem website built with **Next.js 15 (React 19)**, **TypeScript**, and **Tailwind CSS**. Designed to showcase Nourish's commitment to nourishing People, Place, and Planet through a fully integrated digital experience.

## 🚀 Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with native PostCSS support
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Physics-based, scroll-linked interactions)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/) primitives
- **Deployment**: Optimized for standard Vercel or Node.js environments

## ✨ Key Features

### 1. Interactive Agrifood Ecosystem
Detailed exploration of Nourish's business segments using physics-based expanding grids and sticky media layouts.

### 2. Standardized Hero System
A robust branding layer with two primary modes:
- **PageHero**: Immersive video/image backgrounds with multi-level text and responsive alignment.
- **BannerHero**: Vibrant, multi-color gradient headers for specialized inner pages (Contact, Careers).

### 3. "Our Story" Physics Timeline
A sophisticated vertical timeline that animates nodes and cards as the user scrolls, featuring a dynamic central spine and pixel-perfect responsiveness.

### 4. Expanding Grid Interactions
Premium horizontal expanding strips (ExpandingGrid) used for:
- **Sustainability Pillars**: Visualizing the "People, Place, Planet" mission.
- **Business Segments**: Offering a high-depth overview of corporate facilities.
- **Mobile optimization**: Automatically limits to 3 items on small screens for clarity.

### 5. Advanced Sticky Layouts (Content Blocks)
Highly interactive sections with sticky images that scale on scroll, paired with animated two-column text content.

### 6. Mobile-First Navigation
Specifically engineered mobile UX:
- **Independent Toggles**: Accordion chevrons work independently of parent links.
- **Clickable Parents**: Main category links route to pages while icons handle sub-menus.
- **Smart Spacing**: Adjusted heights and gaps for 100% legibility on small devices.

## 🛠️ Project Structure

```text
frontend/
├── src/
│   ├── app/                # Next.js App Router (Pages & Routing)
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, and Global wrappers
│   │   ├── features/       # Feature-specific parts (Home, About, Businesses, etc.)
│   │   └── ui/             # Atomic & Universal design system components
│   ├── data/
│   │   └── content/        # Data-driven content layer (Decoupled text/images)
│   ├── lib/                # Utility functions and shared helpers
│   └── styles/             # Global CSS variables and tailwind config
└── public/                 # Static assets (Videos, high-res images)
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ (Node 20 recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Philosophy

The project adheres to a **Premium, High-Depth** aesthetic:
- **Typography**: Precision use of Inter and specialized tracking for an industrial-modern feel.
- **Color Palette**: Deep Nourish Green (`#006837`) blended with slate tones and vibrant gradients.
- **Animations**: Avoids simple entrance fades in favor of scroll-linked scaling, parallax, and horizontal expansion for a "living" UI.

## 📄 License
This project is private and intended for Nourish corporate use.
