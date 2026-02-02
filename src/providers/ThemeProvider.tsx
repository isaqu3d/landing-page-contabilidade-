'use client';

import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '@/styles';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <SCThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </SCThemeProvider>
  );
}
