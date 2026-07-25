
import React from 'react';
import { About } from '../components/About';
import { PageIntro } from '../components/common/PageIntro';

export function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About Elvions" title="A focused team for high-consequence digital work." description="We combine strategic perspective and hands-on craft to give growing organizations technology they can rely on." />
      <About />
    </>);

}