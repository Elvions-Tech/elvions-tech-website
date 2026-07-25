import type { Metadata } from 'next';
import { Services } from '@/components/sections/Services';
import { PageIntro } from '@/components/common/PageIntro';

const TITLE = 'Services';
const DESCRIPTION =
  'Strategy, experience design, and software engineering brought together to give your business durable momentum.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/services' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capabilities"
        title="Technology that makes complexity feel simple."
        description="Strategy, experience design, and software engineering brought together to give your business durable momentum."
      />
      <Services />
    </>
  );
}
