'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from '@/components/motion';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
import { brandAssets } from '@/data/brand';
import { navigationItems } from '@/data/navigation';
import { useThemeContext } from '@/components/layout/ThemeProvider';

export function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? 'glass shadow-lg shadow-black/5' : 'border border-transparent'
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight sm:text-lg"
          aria-label="Elvions Tech home"
        >
          <span className="relative flex h-8 w-11 items-center overflow-hidden rounded-md bg-white px-1 shadow-sm">
            <Image src={brandAssets.logo} alt="" fill sizes="44px" className="object-contain p-1" priority />
          </span>
          <span>
            Elvions <span className="text-brand-500">Tech</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-500' : 'text-soft hover:text-brand-500'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            suppressHydrationWarning
            className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] text-soft transition-colors hover:text-brand-500"
          >
            {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-500 hover:shadow-brand-500/40 sm:block"
          >
            Get started
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] text-soft md:hidden"
          >
            {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass absolute inset-x-4 top-20 z-40 rounded-2xl p-2 md:hidden"
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-brand-600/10 text-brand-500' : 'text-soft hover:bg-brand-600/10 hover:text-brand-500'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
