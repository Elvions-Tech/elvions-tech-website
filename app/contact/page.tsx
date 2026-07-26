import type { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';
import { PageIntro } from '@/components/common/PageIntro';

const TITLE = 'Contact';
const DESCRIPTION = 'Tell us what you are looking to make better, faster, or possible. We will help you find a clear route forward.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s define the next move."
        description="Tell us what you are looking to make better, faster, or possible. We’ll help you find a clear route forward."
      />
      <Contact />
    </>
  );
}
