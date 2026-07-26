import type { Metadata } from 'next';
import { About } from '@/components/sections/About';
import { PageIntro } from '@/components/common/PageIntro';

const TITLE = 'About Us';
const DESCRIPTION =
  'We combine strategic perspective and hands-on craft to give growing organizations technology they can rely on.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Elvions"
        title="A focused team for high-consequence digital work."
        description="We combine strategic perspective and hands-on craft to give growing organizations technology they can rely on."
      />
      <About />
    </>
  );
}
