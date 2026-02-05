export const theme = {
  colors: {
    primary: {
      main: '#2BBE41', // P500
      light: '#83E87C', // P200
      lighter: '#D4FFD1', // P50
    },
    secondary: '#2B7ADF',
    neutral: {
      white: '#FFFFFF', // N0
      light: '#E0E1E2', // N100
      medium: '#C6C8CB', // N200
    },
    background: '#FFFFFF',
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
      tertiary: '#41484E',
      dark: '#1E2124',
      light: '#999999',
      inverse: '#FFFFFF',
    },
    border: '#E0E1E2',
  },
  fonts: {
    family: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    size: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '2.5rem', // 40px
    '3xl': '3rem', // 48px
    '4xl': '4rem', // 64px
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  breakpoints: {
    mobile: '360px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
} as const;

export type Theme = typeof theme;
