import type { Metadata } from 'next';
import { Products } from '@/components/sections/Products';
import { PageIntro } from '@/components/common/PageIntro';

const TITLE = 'Products';
const DESCRIPTION =
  'Explore the platforms and product foundations we use to turn signals into decisions and digital operations into an advantage.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/products' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/products' },
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Intelligent products, made practical."
        description="Explore the platforms and product foundations we use to turn signals into decisions and digital operations into an advantage."
      />
      <Products />
    </>
  );
}
