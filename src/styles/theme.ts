/**
 * Nourish Design System - Theme Tokens
 * Single source of truth for colors and typography
 *
 * NOTE: Only includes what's actually USED in the codebase
 */

// ============================================
// COLOR TOKENS
// ============================================

export const colorTokens = {
  // Brand Colors
  brand: {
    primary: '#006837',           // Nourish Green
    secondary: '#0a2e2d',         // Deep Teal
    secondaryDark: '#0d3d3c',     // Darker Teal variant
    accent: '#e29e58',            // Warm Orange
  },

  // Neutral Grays (replaces slate-*)
  neutral: {
    50: '#f8fafc',    // slate-50
    100: '#f1f5f9',   // slate-100
    200: '#e2e8f0',   // slate-200
    300: '#cbd5e1',   // slate-300
    400: '#94a3b8',   // slate-400
    600: '#475569',   // slate-600
    700: '#334155',   // slate-700
    800: '#1e293b',   // slate-800
    900: '#0f172a',   // slate-900
  },

  // Base Colors
  white: '#ffffff',
  black: '#000000',

  // Common Overlays (preserved from existing usage)
  overlay: {
    dark10: 'rgba(0, 0, 0, 0.1)',
    dark20: 'rgba(0, 0, 0, 0.2)',
    dark30: 'rgba(0, 0, 0, 0.3)',
    dark40: 'rgba(0, 0, 0, 0.4)',
    dark50: 'rgba(0, 0, 0, 0.5)',
    dark60: 'rgba(0, 0, 0, 0.6)',
    light40: 'rgba(255, 255, 255, 0.4)',
    light50: 'rgba(255, 255, 255, 0.5)',
    light70: 'rgba(255, 255, 255, 0.7)',
  },
} as const;

// ============================================
// TYPOGRAPHY TOKENS
// ============================================
// Used by Typography components in /components/ui/custom/typography.tsx

export const typography = {
  // Display (Hero headings)
  display: {
    fontSize: 'text-6xl',
    fontWeight: 'font-black',
    lineHeight: 'leading-tight',
  },

  // Heading 1 (Main section headings)
  h1: {
    fontSize: 'text-5xl',
    fontWeight: 'font-bold',
    lineHeight: 'leading-tight',
  },

  // Heading 2 (Sub-section headings)
  h2: {
    fontSize: 'text-4xl',
    fontWeight: 'font-bold',
    lineHeight: 'leading-snug',
  },

  // Heading 3 (Card/Component headings)
  h3: {
    fontSize: 'text-3xl',
    fontWeight: 'font-semibold',
    lineHeight: 'leading-snug',
  },

  // Heading 4 (Small headings)
  h4: {
    fontSize: 'text-2xl',
    fontWeight: 'font-semibold',
    lineHeight: 'leading-normal',
  },

  // Body Large (Hero descriptions, large text)
  bodyLarge: {
    fontSize: 'text-xl',
    fontWeight: 'font-normal',
    lineHeight: 'leading-relaxed',
  },

  // Body (Regular paragraphs)
  body: {
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    lineHeight: 'leading-relaxed',
  },

  // Body Small
  bodySmall: {
    fontSize: 'text-lg',
    fontWeight: 'font-normal',
    lineHeight: 'leading-relaxed',
  },

  // Caption (Small text, labels)
  caption: {
    fontSize: 'text-sm',
    fontWeight: 'font-medium',
    lineHeight: 'leading-normal',
  },

  // Overline (Uppercase labels)
  overline: {
    fontSize: 'text-xs',
    fontWeight: 'font-semibold',
    lineHeight: 'leading-normal',
    transform: 'uppercase',
    tracking: 'tracking-wider',
  },
} as const;

// ============================================
// TYPE EXPORTS
// ============================================

export type ColorToken = typeof colorTokens;
export type TypographyToken = typeof typography;
