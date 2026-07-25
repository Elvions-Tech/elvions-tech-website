import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const stars = [
{ id: 1, left: '13%', top: '19%' },
{ id: 2, left: '82%', top: '26%' },
{ id: 3, left: '73%', top: '61%' },
{ id: 4, left: '22%', top: '52%' }];


export function SpaceHero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStar, setActiveStar] = useState<number | null>(null);

  return (
    <section className="relative isolate min-h-[940px] overflow-hidden bg-black pt-28 text-white sm:min-h-[1060px]">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(30,58,138,0.42),transparent_64%)]" />
        <div className="absolute bottom-[-33rem] left-1/2 h-[62rem] w-[105rem] -translate-x-1/2 rounded-[50%] border border-blue-200/[0.10] bg-[radial-gradient(ellipse_at_48%_12%,rgba(125,172,218,0.72)_0%,rgba(37,79,121,0.62)_19%,rgba(10,25,46,0.88)_48%,#000_72%)] shadow-[0_-28px_100px_rgba(30,58,138,0.45)] sm:bottom-[-39rem]" />
        <div className="absolute bottom-[-21rem] left-1/2 h-[45rem] w-[90rem] -translate-x-1/2 rounded-[50%] border border-white/[0.05] bg-[radial-gradient(ellipse_at_50%_20%,rgba(148,163,184,0.11),transparent_46%)]" />
      </div>

      <div className="absolute inset-0 z-10" aria-label="Interactive constellation">
        {stars.map((star) => {
          const isActive = activeStar === star.id;
          return (
            <motion.button
              key={star.id}
              type="button"
              aria-label={`Illuminate star ${star.id}`}
              aria-pressed={isActive}
              onClick={() => setActiveStar(star.id)}
              className="absolute grid h-7 w-7 place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-blue-100 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{ left: star.left, top: star.top }}
              animate={isActive ? { scale: shouldReduceMotion ? 1.15 : [1, 1.8, 1.25] } : { opacity: shouldReduceMotion ? 0.55 : [0.25, 0.8, 0.25] }}
              transition={isActive ? { duration: 0.45 } : { duration: 3.2, repeat: Infinity, delay: star.id * 0.45 }}>
              
              <span className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.9),0_0_38px_14px_rgba(59,130,246,0.9)]' : 'bg-slate-300 shadow-[0_0_8px_rgba(255,255,255,0.55)]'}`} />
            </motion.button>);

        })}
      </div>

      <div className="relative z-20 mx-auto flex min-h-[940px] max-w-6xl flex-col items-center px-4 text-center sm:min-h-[1060px] sm:px-6">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col items-center sm:mt-20">
          
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -5, 0], opacity: [0.82, 1, 0.82] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative grid h-12 w-12 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff_0%,#e2e8f0_32%,#94a3b8_62%,#475569_100%)] shadow-[0_0_18px_rgba(255,255,255,0.65),0_0_50px_rgba(96,165,250,0.22)]"
            aria-hidden="true">
            
            <span className="absolute left-[29%] top-[31%] h-2 w-2 rounded-full bg-slate-400/45 blur-[1px]" />
            <span className="absolute bottom-[25%] right-[23%] h-1.5 w-1.5 rounded-full bg-slate-500/45 blur-[1px]" />
          </motion.div>
          <p className="mt-10 text-sm leading-6 text-slate-300 sm:text-base">
            This story is about
            <br />
            technology moving your business forward.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-auto pb-28 sm:pb-36">
          
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Elvions Tech</p>
          <h1 className="mt-6 font-display text-[clamp(3.5rem,11vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.075em] text-white/85">
            Innovate.
            <span className="block text-white/72">Build.</span>
            <span className="block text-brand-300">Transform.</span>
          </h1>
          <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.42em] text-slate-300 sm:text-xs">
            Intelligent software for forward-thinking teams
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact" className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-200">
              Start a project
            </Link>
            <Link to="/services" className="rounded-full px-6 py-3 text-sm font-semibold text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-200">
              Explore services
            </Link>
          </div>
          <a href="#services" className="mx-auto mt-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:border-brand-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-200" aria-label="Scroll to services">
            <ArrowDownIcon className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>);

}