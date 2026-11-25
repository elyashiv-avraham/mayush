# Mayush (מאיוש) — Luxury Boutique Pâtisserie & Cake Studio

[![Deploy to GitHub Pages](https://github.com/elyashiv-avraham/mayush/actions/workflows/deploy.yml/badge.svg)](https://github.com/elyashiv-avraham/mayush/actions/workflows/deploy.yml)
[![React 18](https://img.shields.io/badge/React-18.3.1-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff.svg)](https://vitejs.dev/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA%20%2F%20IS%205568-brightgreen.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

A modern, production-ready client-side single-page application (SPA) built for **"Mayush"**, a luxury culinary pastry and artisan cake studio. Designed with high-end Parisian haute-pâtisserie aesthetics, full Hebrew RTL support, an interactive shopping cart with WhatsApp order dispatch, and an Israeli Standard 5568 / WCAG 2.1 AA accessibility suite.

🌐 **Live Website**: [https://elyashiv-avraham.github.io/mayush/](https://elyashiv-avraham.github.io/mayush/)

---

## ✨ Key Features

### 🍰 Boutique Visual Identity & Product Showcase
- **Warm Culinary Palette**: Rich espresso brown, subtle rose, warm blush pink, cream vanilla, and soft sage accents.
- **Card Aesthetics**: 1:1 square aspect ratio image containers, vignette overlays, smooth hover zoom (`scale(1.06)`), and floating gold/pink badges.
- **Editorial Typography**: Elegant headings styled with `Frank Ruhl Libre` paired with clean, readable `Heebo` body copy.
- **Separation of Concerns**: Product catalog (`src/data/menuData.js`) and business info (`src/data/config.js`) are decoupled from UI components for seamless integration with external APIs or Google Sheets.

### 🛍️ Dual-Action Catalog & Slide-Out Cart Drawer
- **Dual Buttons per Product**:
  - **"+ הוספה לסל" (+ Add to Cart)**: Adds product to reactive cart state and automatically opens the left-docked cart drawer.
  - **"בירור על המוצר" (Product Inquiry)**: Directly launches a pre-filled WhatsApp conversation asking about the specific item.
- **Left-Docked Slide-Out Cart**:
  - Smooth slide animation from the left with dark backdrop.
  - Quantity controls (`+` / `-`) with auto-removal at zero.
  - Fulfillment mode switch: **Self-Pickup (איסוף עצמי)** vs. **Home Delivery (משלוח עד הבית)**.
  - Comprehensive checkout form: Name, phone, preferred date, time slot, delivery address, entrance code, gift recipient, and allergen/dedication notes.
  - **WhatsApp Order Dispatch**: Generates an itemized order message with total price calculation and opens WhatsApp directly.

### 🧭 URL Routing (`HashRouter`)
- **Home View (`/#/`)**: Hero section with circular brand portrait, about bio, curated highlight rows ("הכי נמכרים" & "החדשים שלנו"), bespoke event builder, and studio hours.
- **Full Menu View (`/#/menu`)**: Standalone page with category filter pills ("הכל", "עוגות ראווה", "טארטים", "מארזים", "אירועים") and uniform grid layout.
- **SPA Compatibility**: Uses `HashRouter` to prevent 404 errors on static hosts like GitHub Pages on page refresh.

### 🎂 Bespoke Event Order Builder
- Interactive consultation form for custom event cakes, tiered wedding cakes, and dessert tables.
- Custom options for portion sizes, flavor profiles, dates, and design inspirations with one-click WhatsApp submission.

### ♿ Accessibility Suite (Israeli Standard 5568 / WCAG 2.1 AA)
- **High Contrast Dark Mode**: Pitch black background (`#000000`) with high-visibility safety yellow (`#ffff00`) text, buttons, and borders.
- **High Contrast Light Mode**: Clean pearl background (`#f5f5f7`), solid white cards, and sharp dark charcoal text (`#000000` / `#2d3748`) ensuring >7:1 contrast.
- **Font Scaling Stepper**: Dynamic root font-size scaling from 90% up to 150%.
- **Dyslexia-Friendly Readable Font**: Overrides decorative fonts with high-legibility sans-serif (`Arial, system-ui, sans-serif`).
- **Grayscale / Monochrome**: Root-level desaturation filter without layout shifts.
- **Heading & Link Highlighters**: Distinct backgrounds and underlines for quick scanning.
- **Keyboard Navigation**: Full Tab navigation, focus trapping inside dialogs, and visible `3px solid #00ffff` outline on `:focus-visible`.
- **Stop Motion**: Immediate reduction of all animations, transitions, and smooth scrolling.
- **Large Cursor**: High-contrast, high-visibility cursor.
- **Accessibility Statement Modal**: Detailed legal compliance statement and accessibility coordinator contact details.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI component architecture and reactive state management |
| **Vite 6** | Modern, blazing-fast bundler and development server |
| **React Router 7** | Client-side URL routing (`HashRouter`) |
| **Vanilla CSS** | Scoped CSS variables, responsive grids, and design tokens |
| **GitHub Actions** | Automated CI/CD deployment to GitHub Pages on push to `main` |

---

## 📂 Project Structure

```text
mayush-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── images/
│       └── logo.jpeg           # Brand logo and favicon
├── src/
│   ├── data/
│   │   ├── config.js           # Business details, about copy, time slots, a11y statement
│   │   └── menuData.js         # Categories and product catalog
│   ├── App.css                 # Master stylesheet & WCAG 2.1 AA accessibility rules
│   ├── App.jsx                 # Main application, views, drawer, and modals
│   └── main.jsx                # React root entry point wrapped in HashRouter
├── index.html                  # HTML template (RTL, fonts, favicon)
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration (subpath base: '/mayush/')
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/elyashiv-avraham/mayush.git
   cd mayush
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/mayush/](http://localhost:5173/mayush/) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production bundle will be generated in the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🚢 Deployment

The project is configured for automated continuous deployment to GitHub Pages via **GitHub Actions**.

- **Workflow File**: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- **Trigger**: Every `push` to the `main` branch.
- **Process**:
  1. Checks out the code.
  2. Sets up Node.js 20.
  3. Installs dependencies (`npm install`).
  4. Builds the production bundle (`npm run build`).
  5. Deploys `./dist` to GitHub Pages.

---

## 📞 Contact & Business Info

- **Brand**: מאיוש (Mayush) — Boutique Pâtisserie & Cake Studio
- **Phone**: 055-668-7271
- **WhatsApp**: [+972-55-668-7271](https://wa.me/972556687271)
- **Instagram**: [@mayush.food](https://www.instagram.com/mayush.food/)
- **Location**: Tel Aviv, Israel (Pickup & Deliveries by appointment)

---

## 📄 License

This project is proprietary and created for **Mayush**. All rights reserved.
