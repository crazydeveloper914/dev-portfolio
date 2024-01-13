import React, { ReactNode, forwardRef } from 'react';

export interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, title, children }, ref) => {
  return (
    <section id={id} ref={ref} className='py-6'>
      <h1 className='title title-medium py-2'>{title}</h1>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;


