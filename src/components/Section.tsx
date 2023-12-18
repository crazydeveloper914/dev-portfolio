import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div>
    <h1 className='title text-xl'>{title}</h1>
    {children}
  </div>
);

export default Section;

