---
name: Neo-Kino Cinematic System
colors:
  surface: '#151217'
  surface-dim: '#151217'
  surface-bright: '#3b383d'
  surface-container-lowest: '#100d11'
  surface-container-low: '#1d1b1f'
  surface-container: '#211f23'
  surface-container-high: '#2c292d'
  surface-container-highest: '#373438'
  on-surface: '#e7e0e7'
  on-surface-variant: '#cdc3d0'
  inverse-surface: '#e7e0e7'
  inverse-on-surface: '#322f34'
  outline: '#968e99'
  outline-variant: '#4b454f'
  surface-tint: '#dcb8ff'
  primary: '#f0dbff'
  on-primary: '#3f225e'
  primary-container: '#dcb8ff'
  on-primary-container: '#634583'
  inverse-primary: '#6f518f'
  secondary: '#ffb3b2'
  on-secondary: '#512122'
  secondary-container: '#6d3737'
  on-secondary-container: '#eca2a1'
  tertiary: '#d4e4f7'
  on-tertiary: '#233240'
  tertiary-container: '#b8c8da'
  on-tertiary-container: '#455463'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#efdbff'
  primary-fixed-dim: '#dcb8ff'
  on-primary-fixed: '#290947'
  on-primary-fixed-variant: '#573976'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b2'
  on-secondary-fixed: '#370d0f'
  on-secondary-fixed-variant: '#6d3737'
  tertiary-fixed: '#d4e4f7'
  tertiary-fixed-dim: '#b8c8da'
  on-tertiary-fixed: '#0d1d2a'
  on-tertiary-fixed-variant: '#394857'
  background: '#151217'
  on-background: '#e7e0e7'
  surface-variant: '#373438'
  vibrant-violet: '#dcb8ff'
  crimson-accent: '#ffb3b2'
  deep-charcoal: '#131313'
  soft-slate: '#b8c8da'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for a high-octane discovery experience, blending the kinetic energy of modern anime aesthetics with the polished sophistication of premium streaming platforms. The brand personality is immersive, authoritative, and forward-leaning.

The design style utilizes **Glassmorphism** as its core structural principle, set against a dark, cinematic canvas. It prioritizes high-energy visual feedback through glowing interactive states and vibrant gradients, ensuring that the interface feels alive. The target audience expects a fast, fluid, and visually rich experience that mirrors the high production value of the media they consume.

## Colors

The palette is rooted in a deep charcoal base to allow content imagery to recede and pop effectively. This design system focuses on a high-contrast, neon-influenced hierarchy where violet takes center stage.

- **Primary (Electric Violet):** The dominant brand color. Reserved for major UI actions, selected states, and brand-identifying flourishes. It represents the "neon pulse" of the interface.
- **Secondary (Neon Crimson):** Used as a high-impact accent for critical indicators, "Live" statuses, and specific call-to-action highlights.
- **Tertiary (Soft Slate):** Applied to metadata, borders, and non-essential icons to maintain legibility without competing for attention.
- **Neutral:** A deep, multi-layered charcoal system that prevents pure black "crushing" of shadows and provides the foundation for glass effects.

Interactive elements should utilize a subtle outer glow (bloom effect) using the Primary Electric Violet color to simulate a neon light source.

## Typography

The typography strategy balances expressive impact with technical precision, creating a "Head-Up Display" (HUD) aesthetic.

- **Headlines:** Set in **Syne** for its modern, architectural feel. Letter spacing should remain tight to maintain a cinematic, poster-like quality.
- **Body:** **Hanken Grotesk** provides a clean, contemporary feel that remains legible during long browsing sessions.
- **Technical Data:** **JetBrains Mono** is used for runtimes, release years, and technical specs to evoke a futuristic, data-driven vibe.

Ensure all text on dark backgrounds maintains a minimum contrast ratio of 4.5:1. Use the "Soft Slate" tertiary color for secondary body text to establish a clear hierarchy.

## Layout & Spacing

The layout follows a **Fluid Grid** system with heavy emphasis on horizontal scrolling for discovery categories, mimicking a premium theater experience.

- **Desktop:** 12-column grid with 64px side margins. Large-scale hero sections should bleed to the edges of the viewport.
- **Tablet:** 8-column grid with 32px margins. 
- **Mobile:** 4-column grid with 16px margins. 

Spacing follows an 8px base unit. Use `lg` (48px) spacing between distinct content sections and `md` (24px) for spacing within card groups. Horizontal carousels must allow the "next" card to partially peek from the edge to signify scrollability.

## Elevation & Depth

Depth is achieved through **Backdrop Blurs** and **Z-axis layering** rather than traditional drop shadows.

1.  **Floor (0dp):** The deep charcoal background surface.
2.  **Surface (1dp):** Glassmorphic panels with a 12px backdrop blur and a 1px semi-transparent border.
3.  **Hover/Focus (2dp):** Increased border opacity and the addition of a 4px Electric Violet outer glow (bloom).
4.  **Overlays (3dp):** Full-screen modals or dropdowns with a 20px backdrop blur, significantly darkening the content beneath.

Avoid using black shadows; instead, use colored glows that match the Primary (Violet) accent to simulate ambient light emitters within the interface.

## Shapes

The shape language is sleek and modern, utilizing a "Rounded" (0.5rem) base to soften the intensity of the high-contrast colors while maintaining a structured feel.

- **Cards & Containers:** Use `rounded-lg` (1rem) to create a premium, polished feel for media posters.
- **Buttons:** Use `rounded-xl` (1.5rem) or full pill-shapes for primary calls to action to make them distinct from content containers.
- **Inputs:** Use `rounded-sm` (0.25rem) to maintain a sense of precision and technical integrity.

## Components

- **Discovery Cards:** The central UI element. Use a vertical 2:3 aspect ratio. On hover, the card scales (1.05x) and gains an Electric Violet glowing border.
- **Glass Buttons:** Primary buttons use a solid Electric Violet fill. Secondary buttons use a glass background with a white border and a Neon Crimson hover state.
- **Category Chips:** Small, pill-shaped elements with JetBrains Mono labels. Use Soft Slate outlines, switching to an Electric Violet fill when selected.
- **Glow Inputs:** Dark, semi-transparent backgrounds. Upon focus, the border transitions to Electric Violet with a subtle 4px glow effect.
- **Rating Badges:** Compact badges using the Neon Crimson secondary color, placed in the top-right corner of movie posters for high visibility.
- **Progress Bars:** For "Continue Watching," use a 4px height bar with an Electric Violet fill and a Neon Crimson "current position" head to highlight the most important data point.