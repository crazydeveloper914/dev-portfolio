import React, { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  setActiveSection: (id: string | undefined) => void;
}

const Section: React.FC<SectionProps> = ({ id, title, children, setActiveSection }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  
  useEffect(() => {
    if (inView && id) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <section ref={ref} id={id} className='py-6'>
      <h1 className='title title-medium py-2'>{title}</h1>
      {children}
    </section>
  );
};

export default Section;

