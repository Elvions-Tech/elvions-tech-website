




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon, LoaderIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { useScreenInit } from '../useScreenInit.js';
import { submitContact } from '../services/contactService';
import { SectionHeading } from './Section';

type Status = 'idle' | 'loading' | 'success' | 'error';

const CONTACT_INFO = [
{ icon: MailIcon, label: 'hello@elvionstech.com' },
{ icon: PhoneIcon, label: 'Project consultations available worldwide' },
{ icon: MapPinIcon, label: 'Remote-first, serving global teams' }];


export function Contact() {
  const screenInit = useScreenInit() as {status?: Status;};
  const [status, setStatus] = useState<Status>(screenInit.status === 'success' ? 'success' : 'idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitContact(form);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Share your vision and the Elvions Tech team will get back to you within one business day." />
        

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2">
            
            <h3 className="font-display text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-soft">
              Prefer email or a quick call? We're easy to reach and quick to reply.
            </p>
            <ul className="mt-6 space-y-4">
              {CONTACT_INFO.map((c) =>
              <li key={c.label} className="flex items-center gap-3 text-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600/10 text-brand-500">
                    <c.icon className="h-5 w-5" />
                  </span>
                  {c.label}
                </li>
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-6 sm:p-8 lg:col-span-3">
            
            {status === 'success' ?
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                
                  <CheckCircle2Icon className="h-8 w-8" />
                </motion.div>
                <h3 className="mt-5 font-display text-xl font-semibold">Message sent!</h3>
                <p className="mt-2 max-w-xs text-sm text-soft">
                  Thanks {form.name || 'there'} — we'll be in touch within one business day.
                </p>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' &&
              <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 px-3 py-2 text-sm text-red-600 dark:text-red-300">
                    We couldn’t send your message right now. Please try again shortly.
                  </p>
              }
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Doe"
                    className="input" />
                  
                  </Field>
                  <Field label="Email">
                    <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jane@company.com"
                    className="input" />
                  
                  </Field>
                </div>
                <Field label="Project details">
                  <textarea
                  required
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  placeholder="Tell us what you're building…"
                  className="input resize-none" />
                
                </Field>
                <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:bg-brand-500 disabled:opacity-70">
                
                  {status === 'loading' ?
                <>
                      <LoaderIcon className="h-4 w-4 animate-spin" />
                      Sending…
                    </> :

                'Send message'
                }
                </button>
              </form>
            }
          </motion.div>
        </div>
      </div>

    </section>);

}

function Field({ label, children }: {label: string;children: React.ReactNode;}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-soft">{label}</span>
      {children}
    </label>);

}