
import { useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as Theme | null;
    setTheme(stored ?? 'dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');else
    root.classList.remove('dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => t === 'dark' ? 'light' : 'dark');
  }, []);

  return { theme, toggle };
}