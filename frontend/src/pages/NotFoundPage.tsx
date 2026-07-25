
import React from 'react';
import { LinkButton } from '../components/ui/LinkButton';

export function NotFoundPage() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-[linear-gradient(135deg,#000,#0f172a,#1e3a8a)] px-4 pt-24 text-center text-white">
      <div>
        <span className="text-sm font-semibold tracking-[0.24em] text-brand-300">404</span>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">This path hasn’t been charted.</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-300">The page you are looking for does not exist or may have moved.</p>
        <LinkButton to="/" className="mt-8">Return home</LinkButton>
      </div>
    </section>);

}