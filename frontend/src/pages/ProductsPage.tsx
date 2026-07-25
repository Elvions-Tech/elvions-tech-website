
import React from 'react';
import { Products } from '../components/Products';
import { PageIntro } from '../components/common/PageIntro';

export function ProductsPage() {
  return (
    <>
      <PageIntro eyebrow="Products" title="Intelligent products, made practical." description="Explore the platforms and product foundations we use to turn signals into decisions and digital operations into an advantage." />
      <Products />
    </>);

}