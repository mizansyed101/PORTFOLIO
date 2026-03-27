# Design System: The Minimalist Tech Portfolio

## 1. Overview & Creative North Star
**Creative North Star: "Precision Clarity"**
This design system is a high-fidelity, editorial framework inspired by modern developer portfolios. It prioritizes extreme readability, professional craftsmanship, and technical authority through a dual-theme system (Dark/Light).

The UI treats the screen as a canvas for code and results. We use bracketed typography `{ }` and structural glass containers to highlight the "Engineered" nature of the work.

## 2. Colors & Surface Philosophy
The palette is a high-contrast study in deep voids and vibrant light.

### Dark Mode (Primary)
- **Background**: `#0D0D0D` (Deep Onyx)
- **Surface**: `#1A1A1A` (Elevation 1)
- **Primary Accent**: `#00A3FF` (Vibrant Sky Blue)
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A0A0A0`

### Light Mode
- **Background**: `#F8F9FA` (Soft Pearl)
- **Surface**: `#FFFFFF` (Elevation 1)
- **Primary Accent**: `#00A3FF` (Vibrant Sky Blue)
- **Text Primary**: `#0D0D0D`
- **Text Secondary**: `#6C757D`

### Glassmorphism Rule
For navigation and floating cards, use `40%` opacity background with a `20px` backdrop blur. This ensures the UI feels layered and modern.

## 3. Typography
- **Primary Font**: **Inter** (Sans-serif)
- **Display Weights**: Bold (700) for headlines, medium (500) for secondary headers.
- **Body Weights**: Regular (400) for descriptions.
- **Tech Accents**: Use Monospace for tech tags or bracketed headlines.

## 4. Components
- **Buttons**: `ROUND_EIGHT` rounding. Primary buttons use solid `#00A3FF` with white text. Secondary buttons use a transparent background with a 1px border.
- **Cards**: `ROUND_TWELVE` rounding. Subtle border (`1px solid rgba(255,255,255,0.1)`) in dark mode.
- **Inputs**: Clean, underlined or minimally boxed with accent focus states.

## 5. Layout
- **Navigation**: Sticky top bar with minimalist text logo and theme switcher.
- **Spacing**: Use a geometric spacing scale (base 4px). Large sections should have `120px` to `160px` vertical padding for "Breathing Room."
