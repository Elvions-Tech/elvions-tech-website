
import React from 'react';
import { motion } from 'framer-motion';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#000_5%,#0f172a_55%,#1e3a8a_145%)] pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.11)_1px,transparent_1px)] [background-size:54px_54px]" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
      </motion.div>
    </section>);

}