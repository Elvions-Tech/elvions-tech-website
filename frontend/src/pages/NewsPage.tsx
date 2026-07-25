
import React from 'react';
import { News } from '../components/News';
import { PageIntro } from '../components/common/PageIntro';

export function NewsPage() {
  return (
    <>
      <PageIntro eyebrow="News & updates" title="Ideas from the Elvions Tech team." description="Product thinking, engineering perspectives, and the people shaping the systems behind meaningful work." />
      <News />
    </>);

}