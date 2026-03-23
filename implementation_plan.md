# Goal Description
Build a premium, "Awwwards" winning "Scrollytelling" e-commerce site for "Dum Biryani". The site uses Next.js 14+ (App Router), TypeScript, Tailwind CSS, and Framer Motion. The defining feature is a scroll-controlled canvas animation (25 image sequence) paired with cinematic text reveals.

## Proposed Changes

### Setup and Config
- Use `create-next-app` to set up standard App Router architecture.
- Install `framer-motion`.

#### [MODIFY] next.config.mjs
Configure for static export (`output: 'export'`) and unoptimized images.

#### [MODIFY] tailwind.config.ts
Standard Tailwind setup with custom theme colors if needed.

#### [MODIFY] app/globals.css
Implement custom warm biryani gradient background: `linear-gradient(135deg, #8B5E3C 0%, #D4A373 100%)`. Include custom scrollbar and selection styles.

### Layout & Data Layer
#### [MODIFY] app/layout.tsx
Import and apply the 'Outfit' Google Font.

#### [NEW] data/products.ts
Store the structured content for the Biryani details as outlined in the requirements.

### Components
#### [NEW] components/ProductBottleScroll.tsx
- A sticky wrapper containing an HTML5 Canvas.
- Logic to preload 25 images and draw the appropriate frame to the canvas based on scroll progress.

#### [NEW] components/ProductTextOverlays.tsx
- Four text sections displaying features.
- Fades in/out using `framer-motion`.

#### [NEW] components/Navbar.tsx
- Fixed top navigation, backdrop-blur-xl, with action button.

#### [NEW] components/Footer.tsx
- Standard dark footer.

### Page Orchestration
#### [MODIFY] app/page.tsx
- Brings together all components.
- Manages current item state (currentIndex) with `<AnimatePresence>`.
- Layout comprises the scroll sequence, details section, freshness section, and buy now section.

## Verification Plan
### Automated Tests
- Run `npm run build` to ensure the static export works correctly.
- Verify `next.config.mjs` parses correctly.

### Manual Verification
- Run `npm run dev` and test scroll events.
- Check canvas frame synchronization and text fade ins.
- Verify that responsive scaling keeps the canvas centered and appropriate.
