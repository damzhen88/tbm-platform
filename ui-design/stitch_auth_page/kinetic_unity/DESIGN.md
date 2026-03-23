# Design System Specification: The Architectural Matchmaker

## 1. Overview & Creative North Star
**Creative North Star: "The Editorial Bridge"**

This design system moves away from the "data-heavy portal" aesthetic common in B2B platforms and toward a high-end editorial experience. We are not just building a database; we are building a prestigious venue for Thai commerce. 

The "Editorial Bridge" concept balances the structural authority of **Deep Blue** with the fluid, modern energy of **Teal**. We break the "standard grid" through **intentional asymmetry**—using generous white space (the `surface` tokens) to let content breathe, while employing high-contrast typography scales to guide the eye. The interface should feel like a premium business journal: authoritative, curated, and intentionally spaced.

---

## 2. Colors & Surface Philosophy
The palette is rooted in Thai professional excellence, utilizing deep navies and vibrant teals to signify both tradition and innovation.

### Palette Highlights
*   **Primary (`#00288e` / `#1e40af`):** The foundation of trust. Use for primary actions and high-level navigation.
*   **Secondary (`#006a61`):** The color of growth and synergy. Used for verification badges and secondary conversion points.
*   **Tertiary/Accent (`#4c2e00` / `#6b4200`):** Used sparingly for "VIP" or "Premium Match" indicators.

### The "No-Line" Rule
Standard B2B UIs are often cluttered with 1px borders. **In this system, 1px solid borders are prohibited for sectioning.** 
Boundaries must be defined through:
1.  **Tonal Shifts:** Placing a `surface-container-low` section against a `surface` background.
2.  **Negative Space:** Using the `12` (3rem) or `16` (4rem) spacing tokens to create mental separation without visual noise.

### The "Glass & Gradient" Rule
To prevent the UI from feeling "flat," use **Glassmorphism** for floating elements (like filter bars or navigation headers). 
*   **Formula:** `surface-container-lowest` at 80% opacity + `backdrop-blur-md`.
*   **Signature Texture:** Use a subtle linear gradient (from `primary` to `primary-container`) for Hero CTAs to provide a "lit-from-within" professional polish.

---

## 3. Typography
We use a dual-typeface system to create an editorial rhythm.

*   **Display & Headlines (Manrope):** A modern geometric sans-serif that feels architectural and confident. Use `display-lg` for hero statements to create a "Signature" look.
*   **Body & Labels (Inter):** A highly legible workhorse for data-heavy business matching.

**Hierarchy as Identity:**
- **Authority:** Use `headline-lg` (Manrope) in `on-surface` for section titles.
- **Clarity:** Use `body-md` (Inter) in `on-surface-variant` for descriptions.
- **Trust:** Verification labels must always use `label-md` (Inter) in All Caps with 0.05em letter spacing.

---

## 4. Elevation & Depth: Tonal Layering
Instead of shadows that look like "software," we use light and layering to mimic "fine paper."

*   **The Layering Principle:** 
    *   **Base:** `surface` (The foundation).
    *   **Sectioning:** `surface-container-low` (Subtle areas like sidebar backgrounds).
    *   **Cards:** `surface-container-lowest` (The "white" sheet sitting on top).
*   **Ambient Shadows:** For floating modals, use a custom shadow: `0 20px 50px -12px rgba(0, 40, 142, 0.08)`. This tints the shadow with our `primary` blue, making it feel integrated into the brand environment.
*   **The Ghost Border:** If a boundary is required for accessibility, use `outline-variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons: The Signature Action
*   **Primary:** `bg-primary` text `on-primary` with a `rounded-md` (0.375rem) corner. Use a subtle inner shadow (top white 10%) to give it a "pressed" high-end feel.
*   **Secondary (The Teal Match):** `bg-secondary-container` text `on-secondary-container`. No border.
*   **Tertiary:** Ghost style. No background, `text-primary`, bold weight.

### Cards & Business Profiles
*   **The Rule:** **No Dividers.**
*   Separate the company logo, description, and "Verify" badge using vertical spacing (`spacing-4` and `spacing-6`).
*   **Verification Badges:** Use `secondary` (Teal) containers with `label-sm` text. This is our primary trust-building element.

### Inputs & Search
*   **Surface:** `surface-container-highest` with a `none` border. 
*   **Focus State:** Shift to `surface-container-lowest` and add a 2px `primary` "Ghost Border" (20% opacity).

### Floating Action Bar (Unique to Platform)
A glassmorphic bar at the bottom of the screen for "Selected Matches." 
*   **Style:** `bg-surface-lowest/80` + `backdrop-blur-xl` + `rounded-xl`. It floats 2rem from the bottom edge.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Place a headline on the left and start the body text in the middle column to create an editorial feel.
*   **Do** use `primary-fixed-dim` for background accents in data visualizations to keep the "Deep Blue" DNA present but soft.
*   **Do** prioritize "Breathing Room." If in doubt, increase the spacing token by one level.

### Don’t:
*   **Don’t** use black (`#000000`). Use `on-surface` (`#191c1e`) for all text to maintain a sophisticated tonal range.
*   **Don’t** use 100% opaque dividers. They "cut" the user's flow. Use `surface-container` shifts instead.
*   **Don’t** use default Tailwind shadows. They are too "dirty." Always use our Blue-tinted Ambient Shadow.
*   **Don’t** use "Alert Red" for everything. For B2B, use `error-container` (soft pink) with `on-error-container` (deep red) to keep the experience calm even during errors.

---
**Director's Closing Note:**
*This system is designed to feel like a high-end concierge service. Every interaction should feel intentional, every surface should feel layered, and every piece of data should feel curated. You are not just building a platform; you are designing the future of Thai-international business relations.*