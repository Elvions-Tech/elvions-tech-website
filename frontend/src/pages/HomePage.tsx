
import React from 'react';
import { SpaceHero } from '../components/home/SpaceHero';
import { About } from '../components/About';
import { News } from '../components/News';
import { Products } from '../components/Products';
import { Services } from '../components/Services';

export function HomePage() {
  return (
    <>
      <SpaceHero />
      <Services />
      <Products />
      <About />
      <News />
    </>);

}