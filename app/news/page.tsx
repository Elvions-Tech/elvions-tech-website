import type { Metadata } from 'next';
import { News } from '@/components/sections/News';
import { PageIntro } from '@/components/common/PageIntro';

const TITLE = 'News & Updates';
const DESCRIPTION =
  'Product thinking, engineering perspectives, and the people shaping the systems behind meaningful work.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/news' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/news' },
};

export default function NewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="News & updates"
        title="Ideas from the Elvions Tech team."
        description="Product thinking, engineering perspectives, and the people shaping the systems behind meaningful work."
      />
      <News />
    </>
  );
}
