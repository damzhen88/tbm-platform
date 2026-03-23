# Design System Specification: Boutique Digital Concierge

This document defines the visual language and structural principles for the digital presence of Aureus Capital. It moves beyond standard institutional grids to create a "Boutique Digital Concierge" experience—one that feels elite, airy, and hyper-personalized.

---

## 1. Creative North Star: The Digital Curator
The objective of this design system is to evoke the feeling of a private wealth office in Zurich or Mayfair. It is not a "platform"; it is a curated service. We achieve this through **Organic Institutionalism**: combining the rigid trust of geometric clarity with the breathing room of a high-end editorial magazine.

**Key Principles:**
*   **Intentional Asymmetry:** Break the "bootstrap" look. Use generous, uneven whitespace to guide the eye toward focal points.
*   **Atmospheric Depth:** Replace hard lines with soft tonal shifts and glassmorphism.
*   **The "Silent" Interface:** UI elements should only appear when needed, maintaining a serene, uncluttered environment.

---

## 2. Color Strategy & Surface Logic

The palette is anchored in an "Airy Off-White" foundation, using the deep navy as a surgical accent to denote authority without feeling heavy.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be created through:
1.  **Tonal Shifts:** Placing a `surface-container-low` (#f1f4f6) section against a `background` (#f8f9fa).
2.  **Negative Space:** Utilizing the Spacing Scale (specifically `16` to `24`) to separate content blocks.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper and frosted glass.
*   **Base Layer:** `background` (#f8f9fa).
*   **In-Page Sections:** `surface-container-low` (#f1f4f6).
*   **Floating Cards/Modals:** `surface-container-lowest` (#ffffff) to create a "lifted" feel.
*   **Interactive Elements:** Use `surface-bright` for hover states to create a subtle glow rather than a color change.

### Glass & Gradient Rule
To achieve the "Concierge" feel, use **Glassmorphism** for navigation bars and floating action cards. 
*   **Formula:** `surface` color at 70% opacity + `backdrop-blur: 20px`.
*   **CTAs:** Use a subtle linear gradient from `primary` (#465f88) to `primary-dim` (#3a537b) to give buttons a "milled" premium texture rather than a flat digital fill.

---

## 3. Typography: The Lexend Scale

We use **Lexend** exclusively. Its expanded character width and geometric construction provide a "High-Trust" feel that is more modern than traditional serifs.

| Role | Token | Size | Weight | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | 3.5rem | 500 | Hero statements; low word count. |
| **Headline** | `headline-md` | 1.75rem | 400 | Section entries; editorial feel. |
| **Title** | `title-md` | 1.125rem | 600 | Card headings; structural clarity. |
| **Body** | `body-lg` | 1rem | 300 | Primary reading; high line-height. |
| **Label** | `label-md` | 0.75rem | 500 | All-caps; metadata; navigation. |

**Editorial Note:** Use `display-lg` with `primary-fixed-dim` (#c0d5ff) for background "watermark" text to create depth behind active content.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering**. Instead of drop shadows, nest `surface-container-high` (#e3e9ec) elements inside `surface-container-low` (#f1f4f6) areas. This creates a soft, architectural recess.

### Ambient Shadows
Where floating is required (e.g., a concierge chat bubble or a premium card), use:
*   **Blur:** 40px - 60px.
*   **Opacity:** 4% - 6%.
*   **Color:** Use a tint of `on-surface` (#2b3437) to simulate natural light.

### The "Ghost Border" Fallback
If a container requires a boundary for accessibility, use the `outline-variant` (#abb3b7) at **15% opacity**. High-contrast, 100% opaque borders are strictly forbidden as they "trap" the layout and break the airy aesthetic.

---

## 5. Component Guidelines

### Buttons (The "Jewelry")
*   **Primary:** Linear gradient (`primary` to `primary-dim`), `rounded-md`, with `on-primary` text.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Tertiary:** Text-only in `primary`, using `label-md` (All-caps) with 2px letter spacing.

### Inputs & Fields
*   **Styling:** Use `surface-container-lowest` with a "Ghost Border." 
*   **Focus State:** Transition the Ghost Border to `primary` (#465f88) at 40% opacity. 
*   **Error:** Use `error` (#9f403d) text, but keep the input background `error_container` (#fe8983) at 10% opacity for a soft warning.

### Cards & Lists (The "Anti-Grid")
*   **Prohibition:** No divider lines. Use `spacing-6` (2rem) as a vertical gutter between list items.
*   **Interaction:** On hover, a card should transition from `surface-container-low` to `surface-container-lowest` and gain a 4% Ambient Shadow.

### Bespoke Component: The Concierge HUD
A semi-transparent glass panel (`surface` at 60% + blur) that sits in the bottom-right corner. It houses high-frequency actions (Global Markets, Contact Advisor) using `label-sm` typography.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins (e.g., 10% left padding, 20% right padding) for hero sections to create an editorial look.
*   **Do** use `primary` (#465f88) only for meaningful interactions (links, buttons, active states).
*   **Do** lean on `surface-container-highest` (#dbe4e7) for subtle background decorations or geometric accents.

### Don't
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#2b3437).
*   **Don't** use the `DEFAULT` (0.25rem) radius for large containers. Use `xl` (0.75rem) to soften the institutional feel.
*   **Don't** cram content. If a section feels "full," increase the spacing token by two levels (e.g., move from `10` to `16`).