import Link from 'next/link';
import { ShoppingCartIcon, BotIcon, DatabaseIcon, SmartphoneIcon, CodeIcon, ArrowUpRightIcon } from 'lucide-react';
import { MotionDiv, MotionArticle } from '@/components/motion';
import { SectionHeading } from '@/components/sections/SectionHeading';

const SERVICES = [
  {
    icon: ShoppingCartIcon,
    title: 'E-commerce',
    desc: 'Conversion-optimized storefronts with lightning checkout, payments, and analytics baked in.',
  },
  {
    icon: BotIcon,
    title: 'AI Chatbots',
    desc: 'Context-aware assistants that automate support and drive engagement around the clock.',
  },
  {
    icon: DatabaseIcon,
    title: 'ERP Systems',
    desc: 'Unified operations — inventory, finance, and HR — in one reliable, real-time platform.',
  },
  {
    icon: SmartphoneIcon,
    title: 'Mobile Apps',
    desc: 'Native-feeling iOS & Android experiences that users love and keep coming back to.',
  },
  {
    icon: CodeIcon,
    title: 'Custom Software',
    desc: 'Bespoke tools engineered around your exact workflow, built to scale with your team.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Technology with a purpose"
          description="From your first product decision to continuous scale, Elvions Tech brings strategy, design, and engineering together."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <MotionArticle
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-600/10 ${
                i === 4 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20" />
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-600/10 text-brand-500 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="flex items-center justify-between font-display text-xl font-semibold">
                {s.title}
                <ArrowUpRightIcon className="h-5 w-5 text-soft opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{s.desc}</p>
            </MotionArticle>
          ))}

          <MotionDiv
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-brand-600 p-6 text-white"
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            <h3 className="relative font-display text-xl font-semibold">Have a bold idea?</h3>
            <p className="relative mt-2 text-sm text-white/80">
              Start with a focused discovery call and leave with a clear path to launch.
            </p>
            <Link
              href="/contact"
              className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 transition-transform hover:scale-[1.03]"
            >
              Book a call
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
