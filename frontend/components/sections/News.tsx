import { ArrowRightIcon } from 'lucide-react';
import { MotionArticle } from '@/components/motion';

const POSTS = [
  {
    category: 'AI',
    date: 'Jul 18, 2026',
    title: 'Designing AI assistants that make support feel effortless',
    read: '4 min read',
  },
  {
    category: 'Engineering',
    date: 'Jul 09, 2026',
    title: 'The architecture behind high-performance ERP workflows',
    read: '6 min read',
  },
  {
    category: 'Company',
    date: 'Jun 28, 2026',
    title: 'Why Elvions Tech is built for long-term product partnership',
    read: '3 min read',
  },
];

export function News() {
  return (
    <section id="news" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">News & Updates</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The latest from the studio
            </h2>
          </div>
          <a href="#news" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
            View all posts
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <MotionArticle
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex cursor-pointer flex-col rounded-2xl border border-[var(--border)] bg-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50"
            >
              <div className="flex items-center gap-3 text-xs text-soft">
                <span className="rounded-full bg-brand-600/10 px-2.5 py-1 font-medium text-brand-500">
                  {p.category}
                </span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-brand-500">
                {p.title}
              </h3>
              <div className="mt-6 flex items-center justify-between text-sm text-soft">
                <span>{p.read}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}
