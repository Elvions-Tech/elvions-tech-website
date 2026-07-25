

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon, StarIcon } from 'lucide-react';

const HERO_BG = "/1601f585-fd77-4957-a426-b9952a5cc965.jpg";


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const LOGOS = ['Enterprise-ready', 'AI-native', 'Cloud-first', 'Built to scale'];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <img src={HERO_BG} alt="" className="h-full w-full object-cover opacity-0 dark:opacity-60" />
        <div className="absolute inset-0 grid-bg opacity-40 dark:opacity-30" />
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-700/40 blur-[120px]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/80 via-slate-950/55 to-brand-800/30 dark:block" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-3xl text-center">
          <motion.div variants={item} className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            Now shipping AI-powered products
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            
            Technology built for
            <br />
            <span className="bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700 bg-clip-text text-transparent">
              what’s next
            </span>
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-base text-soft sm:text-lg">
            Elvions Tech designs and engineers reliable digital products — from e-commerce and AI chatbots to ERP systems, mobile apps, and bespoke platforms.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-600/30 transition-all hover:bg-brand-500 hover:shadow-brand-500/50">
              
              Start your project
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-brand-500 hover:text-brand-500">
              
              <PlayIcon className="h-4 w-4" />
              See our work
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex items-center justify-center gap-2 text-xs text-soft">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) =>
              <StarIcon key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              )}
            </span>
            Trusted by 200+ teams worldwide
          </motion.div>
        </motion.div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          
          {LOGOS.map((l) =>
          <span key={l} className="font-display text-lg font-semibold tracking-tight">
              {l}
            </span>
          )}
        </motion.div>
      </div>
    </section>);

}