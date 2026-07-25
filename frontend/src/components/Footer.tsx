




import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import { brandAssets } from '../assets/brand';

const COLUMNS = [
{ title: 'Services', links: [{ label: 'E-commerce', to: '/services' }, { label: 'AI Chatbots', to: '/services' }, { label: 'ERP Systems', to: '/services' }, { label: 'Mobile Apps', to: '/services' }, { label: 'Custom Software', to: '/services' }] },
{ title: 'Company', links: [{ label: 'About', to: '/about' }, { label: 'Products', to: '/products' }, { label: 'News', to: '/news' }, { label: 'Contact', to: '/contact' }] },
{ title: 'Resources', links: [{ label: 'Product insights', to: '/news' }, { label: 'Contact support', to: '/contact' }, { label: 'Privacy', to: '/contact' }] }];


const SOCIALS = [TwitterIcon, GithubIcon, LinkedinIcon];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold" aria-label="Elvions Tech home">
              <span className="flex h-8 w-11 items-center overflow-hidden rounded-md bg-white px-1 shadow-sm">
                <img src={brandAssets.logo} alt="" className="h-full w-full object-contain" />
              </span>
              <span>Elvions <span className="text-brand-500">Tech</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-soft">
              We architect reliable software and digital experiences for the businesses shaping tomorrow.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((Icon, i) =>
              <a
                key={i}
                href="#top"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] text-soft transition-colors hover:border-brand-500 hover:text-brand-500">
                
                  <Icon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {COLUMNS.map((col) =>
          <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) =>
              <li key={link.label}>
                    <Link to={link.to} className="text-sm text-soft transition-colors hover:text-brand-500">
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-sm text-soft sm:flex-row">
          <span>© {new Date().getFullYear()} Elvions Tech. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/contact" className="transition-colors hover:text-brand-500">Terms</Link>
            <Link to="/contact" className="transition-colors hover:text-brand-500">Privacy</Link>
            <Link to="/contact" className="transition-colors hover:text-brand-500">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>);

}