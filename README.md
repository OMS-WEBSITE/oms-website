# OMS Software - The choice of TIC professionals and labs across the globe.

A professional Astro 5 theme built with React, TypeScript, and Tailwind CSS that transforms security auditing with AI-powered assessment tools, automated compliance checks, and comprehensive quality management workflows.

[**_Live Preview Here_**](https://audit.corytrimm.com/)

![OMS Software Preview](./preview.png)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/ctrimm/audit-pro.git
```

2. Navigate to the project directory:
```bash
cd audit-pro
```

3. Install the dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The development server will start at `http://localhost:4321`. Any changes you make to the code will be automatically reflected in the browser.

## Project Structure

The project structure is organized as follows:

```bash
audit-pro/
├── src/
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Header.jsx
│ │ │ └── Footer.jsx
│ │ ├── sections/
│ │ │ ├── HeroSection.jsx
│ │ │ ├── FeatureSection.jsx
│ │ │ ├── MatchFinder.jsx
│ │ │ ├── ManagementSection.jsx
│ │ │ ├── ProposalSection.jsx
│ │ │ ├── TestimonialsSection.jsx
│ │ │ ├── ScrollingLogos.jsx
│ │ │ ├── FundersSection.jsx
│ │ │ ├── PricingSection.jsx
│ │ │ └── CTASection.jsx
│ │ ├── auth/
│ │ │ ├── SignInForm.jsx
│ │ │ ├── SignUpForm.jsx
│ │ │ └── ForgotPasswordForm.jsx
│ │ └── ui/
│ │   ├── button.tsx
│ │   ├── card.tsx
│ │   └── dialog.tsx
│ ├── layouts/
│ │ └── main.astro
│ ├── pages/
│ │ ├── index.astro
│ │ ├── pricing.astro
│ │ ├── sign-in.astro
│ │ ├── sign-up.astro
│ │ └── forgot-password.astro
│ ├── styles/
│ │ └── global.css
│ └── lib/
│   └── utils.ts
├── public/
│ └── favicon.svg
├── tailwind.config.mjs
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

- `src/components/`: Contains all React components organized by category:
  - `layout/`: Header and Footer components
  - `sections/`: Main content sections for marketing pages
  - `auth/`: Authentication-related components
  - `ui/`: Reusable UI components
- `src/layouts/`: Contains the main layout component used across pages
- `src/pages/`: Contains all Astro pages that define the routes
- `src/styles/`: Global styles and CSS utilities
- `src/lib/`: Utility functions and shared code
- `public/`: Static assets
- Configuration files for Tailwind, Astro, TypeScript, etc.

## Key Features

1. **Marketing Pages**
   - Modern, responsive design
   - Interactive feature showcases
   - Animated section transitions
   - Social proof with testimonials and partner logos

2. **Authentication System**
   - Sign in/sign up flows
   - Password recovery
   - Google authentication integration
   - Form validation and error handling

3. **Pricing System**
   - Per-audit pricing model
   - Feature comparison
   - Multiple pricing tiers
   - Enterprise custom pricing

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by editing `tailwind.config.mjs`:

- Colors
- Typography
- Spacing
- Breakpoints
- Custom utilities

### Components

Components are built using React and can be customized by editing the corresponding files in `src/components/`. Each component is self-contained with its own styles and logic.

## Building for Production

To build the project for production:
```bash
npm run build
```

This generates optimized files in the `dist/` directory.

## Deployment

The project can be deployed to any static hosting platform:

1. Build the project
2. Deploy the `dist/` directory to your preferred platform:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3

## Learn More

- [Astro Documentation](https://docs.astro.build/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
