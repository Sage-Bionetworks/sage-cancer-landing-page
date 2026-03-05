# Project Context: Cancer Landing Page

## Overview
This project is a modern, responsive landing page focused on cancer-related information and resources. It is designed to be highly performant, accessible, and maintainable using a minimal but effective toolchain.

## Tech Stack
- **Bundler:** Parcel (configured for HMR and production builds).
- **Styling:** Stylus (CSS preprocessor) with a mobile-first responsive strategy and smooth scrolling.
- **Icons:** Material UI Icons (loaded via Google Fonts CDN).
- **Typography:** DM Sans (loaded via Google Fonts).
- **Entry Points:** 
    - HTML: `src/index.html`
    - JS: `src/index.js` (using ES Modules)
    - Stylus: `src/style.styl` (imported via JS)

## Design Tokens
- **Colors:**
    - `black`: `#0E101A`
    - `brand-dark`: `#1F3042`
- **Layout:**
    - `slat-horizontal-margin`: `16px` (mobile), `40px` (desktop)
    - `slat-vertical-margin`: `48px` (mobile), `128px` (desktop)

## Project Structure
```
cancer landing page/
├── src/
│   ├── assets/
│   │   └── images/    # Project images and graphics
│   ├── index.html     # Main entry point & HTML structure
│   ├── index.js       # JS entry point & CSS imports
│   └── style.styl      # Responsive styles & breakpoints
├── package.json       # Project scripts and dependencies
└── README.md          # Human-readable documentation
```

## CSS Architecture
The project uses a mobile-first approach. Styles are structured as follows:
1.  **Base/Reset Styles:** General normalization.
2.  **Mobile Styles:** Default styles (applied to all screens).
3.  **Tablet Breakpoint:** `@media (min-width: 768px)`
4.  **Desktop Breakpoint:** `@media (min-width: 1024px)`

## Development Workflow
- **Start Dev Server:** `npm start` (Runs Parcel with HMR on `localhost:1234`).
- **Build for Production:** `npm run build` (Outputs optimized files to `dist/`).
- **Adding Assets:** Place assets in `src/` and import them directly into JS or reference them in HTML.
- **Navigation:** Supports anchor linking (e.g., `#overview`) with smooth scroll behavior.

## AI Instructions
- Use the `.slat` class for section containers (e.g., `<section id="overview" class="slat">`) to ensure consistent horizontal and vertical padding.
- The Overview section (`#overview`) is configured as a hero slat with a background image (`src/assets/images/overview-bg.png`) aligned to the bottom right.
- When adding new components, ensure they follow the established media query pattern in `style.styl`.
- Use Material Icon class names (e.g., `<span class="material-icons">icon_name</span>`) for iconography.
- Maintain the clean separation of concerns: logic in `.js`, structure in `.html`, and presentation in `.styl`.