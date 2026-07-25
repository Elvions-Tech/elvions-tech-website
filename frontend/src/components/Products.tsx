


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { SectionHeading } from './Section';

const ANALYTICS = "/91255d09-34af-44f9-91dd-e095f5d0df93.jpg";

const AI = "/12e694b0-ff7e-46da-ad03-4e40f33a6f8a.jpg";


const PRODUCTS = [
{
  tag: 'Business intelligence',
  title: 'VisionOS',
  desc: 'An operational intelligence layer that turns your data into clear decisions, in real time.',
  img: ANALYTICS,
  span: 'lg:col-span-2'
},
{
  tag: 'AI automation',
  title: 'Elva',
  desc: 'A tailored conversational AI experience that meets customers wherever they are.',
  img: AI,
  span: 'lg:col-span-1'
}];


const STATS = [
{ value: '50+', label: 'Digital solutions delivered' },
{ value: '4.9/5', label: 'Client satisfaction' },
{ value: '99.9%', label: 'Reliability target' },
{ value: '24/7', label: 'Partnership mindset' }];


export function Products() {
  return (
    <section id="products" className="relative bg-soft py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Products"
          title="Built for ambitious teams"
          description="A look at the durable, intelligent platforms we craft for organizations ready to grow." />
        

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PRODUCTS.map((p, i) =>
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-3xl border border-[var(--border)] ${p.span}`}>
            
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                src={p.img}
                alt={`${p.title} product interface`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {p.tag}
                </span>
                <h3 className="mt-3 flex items-center gap-2 font-display text-2xl font-bold text-white">
                  {p.title}
                  <ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="mt-1 max-w-md text-sm text-white/80">{p.desc}</p>
              </div>
            </motion.article>
          )}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] sm:grid-cols-4">
          {STATS.map((s, i) =>
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-[var(--bg)] p-6 text-center">
            
              <div className="font-display text-3xl font-bold text-brand-500">{s.value}</div>
              <div className="mt-1 text-xs text-soft">{s.label}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}