import { useState, useEffect, RefObject } from 'react';

interface SectionRef {
  ref: RefObject<HTMLElement>;
  id: string;
}

const useActiveSection = (sectionRefs: SectionRef[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    sectionRefs.forEach(({ ref, id }) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      }, {
        threshold: 0.25,
        rootMargin: '-35% 0px -35% 0px',
      });

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, [sectionRefs]);

  return activeSection;
};

export default useActiveSection;
