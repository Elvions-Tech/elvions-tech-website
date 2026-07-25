import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { SkipLink } from '../components/layout/SkipLink';
import { useThemeContext } from '../context/ThemeContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function RootLayout() {
  const { theme, toggleTheme } = useThemeContext();
  useScrollToTop();

  return (
    <div className="min-h-screen w-full bg-[var(--bg)] font-sans text-[var(--text)]">
      <SkipLink />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>);

}