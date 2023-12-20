import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className='py-6'>
    <h1 className='title medium py-2'>{title}</h1>
    {children}
  </section>
);

export default Section;

