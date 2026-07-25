
import React from 'react';
import { Contact } from '../components/Contact';
import { PageIntro } from '../components/common/PageIntro';

export function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let’s define the next move." description="Tell us what you are looking to make better, faster, or possible. We’ll help you find a clear route forward." />
      <Contact />
    </>);

}