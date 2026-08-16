# Home Page Overrides

> **PROJECT:** Ehsan Ehrari Portfolio
> **Generated:** 2026-07-29 17:16:06
> **Page Type:** Landing / Marketing

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Page-Specific Rules

### Layout Overrides

- **Max Width:** 1200px (standard)
- **Layout:** Full-width sections, centered content
- **Sections:** 1. Hero (Configurator), 2. Feature Highlight (synced), 3. Price/Specs, 4. Purchase

### Spacing Overrides

- No overrides — use Master spacing

### Typography Overrides

- No overrides — use Master typography

### Color Overrides

- **Strategy:** Neutral studio background. Product: Realistic materials. UI: Minimal overlay.

### Component Overrides

- Avoid: Jump directly without transition
- Avoid: Load 50MB textures
- Avoid: Content wider than viewport

---

## Page-Specific Components

- No unique components for this page

---

## Recommendations

- Effects: Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions
- Navigation: Use scroll-behavior: smooth on html element
- Sustainability: Compress and lazy load 3D models
- Responsive: Ensure content fits viewport width
- CTA Placement: Inside Configurator UI + Sticky Bottom Bar
