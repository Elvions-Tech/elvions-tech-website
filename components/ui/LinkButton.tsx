import Link from 'next/link';
import type { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function LinkButton({ href, children, className = '' }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2 focus:ring-offset-slate-950 ${className}`}
    >
      {children}
    </Link>
  );
}
