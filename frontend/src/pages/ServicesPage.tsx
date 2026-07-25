
import React from 'react';
import { Services } from '../components/Services';
import { PageIntro } from '../components/common/PageIntro';

export function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Capabilities" title="Technology that makes complexity feel simple." description="Strategy, experience design, and software engineering brought together to give your business durable momentum." />
      <Services />
    </>);

}