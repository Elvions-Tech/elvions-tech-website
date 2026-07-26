import type { Metadata } from 'next';
import { SpaceHero } from '@/components/home/SpaceHero';
import { Services } from '@/components/sections/Services';
import { Products } from '@/components/sections/Products';
import { About } from '@/components/sections/About';
import { News } from '@/components/sections/News';
import { Contact } from '@/components/sections/Contact';
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from '@/constants/site';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: { title: `${SITE_NAME} — ${SITE_TAGLINE}`, description: SITE_DESCRIPTION, url: '/' },
};

export default function HomePage() {
  return (
    <>
      <SpaceHero />
      <Services />
      <Products />
      <About />
      <News />
      <Contact />
    </>
  );
}
