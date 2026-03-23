/**
 * Design System Tokens
 * ThaiCommerce - Responsive Design System
 */

// Colors
export const colors = {
  // Primary
  primary: '#00288e',
  primaryLight: '#1e40af',
  primaryContainer: '#1e40af',
  primaryFixed: '#dde1ff',
  
  // Secondary
  secondary: '#006a61',
  secondaryContainer: '#86f2e4',
  secondaryFixed: '#89f5e7',
  
  // Surface
  surface: '#f7f9fb',
  surfaceContainerLow: '#f2f4f6',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerHigh: '#e6e8ea',
  surfaceContainerHighest: '#e0e3e5',
  
  // Text
  onSurface: '#191c1e',
  onSurfaceVariant: '#444653',
  onPrimary: '#ffffff',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#006f66',
  
  // Other
  outline: '#757684',
  outlineVariant: '#c4c5d5',
  error: '#ba1a1a',
  tertiary: '#4c2e00',
  tertiaryFixed: '#ffddb8',
};

// Typography
export const typography = {
  fontFamily: {
    headline: 'Manrope, sans-serif',
    body: 'Inter, sans-serif',
    label: 'Inter, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

// Spacing
export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
};

// Border Radius
export const borderRadius = {
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  custom: '0 20px 50px -12px rgba(0, 40, 142, 0.08)',
};

// Breakpoints
export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1280px',
};

// Z-index
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
};

export default tokens;