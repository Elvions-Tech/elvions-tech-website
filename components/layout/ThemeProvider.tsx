'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Reads the class already applied by the pre-paint theme script in
 * app/layout.tsx, so this never needs a mount effect (and never disagrees
 * with what's already on screen). Defaults to 'dark' during SSR, matching
 * the script's own default.
 */
function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((current) => {
          const next: Theme = current === 'dark' ? 'light' : 'dark';
          document.documentElement.classList.toggle('dark', next === 'dark');
          window.localStorage.setItem('theme', next);
          return next;
        }),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeContext must be used within ThemeProvider.');
  return context;
}
