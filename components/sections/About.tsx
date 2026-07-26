import { CheckIcon } from 'lucide-react';
import { MotionDiv } from '@/components/motion';

const POINTS = [
  'Senior talent across product, design, and engineering',
  'Lean delivery rhythms with visible progress',
  'Transparent collaboration from discovery to launch',
  'Long-term support for what comes after version one',
];

const VALUES = [
  { title: 'Precision', desc: 'Thoughtful execution in every detail that matters.' },
  { title: 'Momentum', desc: 'Progress without compromising on foundations.' },
  { title: 'Partnership', desc: 'Clear communication through every decision.' },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-soft py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <MotionDiv
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">About us</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A technology partner built around outcomes
          </h2>
          <p className="mt-4 text-base text-soft">
            Elvions Tech unites focused engineers, designers, and strategists to help ambitious organizations turn
            complex challenges into dependable digital products.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600/15 text-brand-500">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </MotionDiv>

        <div className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <MotionDiv
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-2xl p-6 ${i === 0 ? 'sm:col-span-2' : ''}`}
            >
              <div className="font-display text-4xl font-bold text-brand-500">0{i + 1}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-soft">{v.desc}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
