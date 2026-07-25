

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center">
      
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mx-auto mt-4 max-w-xl text-base text-soft">{description}</p>}
    </motion.div>);

}