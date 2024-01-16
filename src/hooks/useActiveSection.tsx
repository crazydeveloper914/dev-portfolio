import { useState, useEffect, RefObject } from 'react';

interface SectionRef {
  ref: RefObject<HTMLElement>;
  id: string;
}

const useActiveSection = (sectionRefs: SectionRef[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  const getRootMargin = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      return "-40% 0px -40% 0px";
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      return "-30% 0px -30% 0px";
    }
    return "-25% 0px -25% 0px";
  };

  useEffect(() => {
    const updateRootMargin = () => {
      const rootMargin = getRootMargin();

      sectionRefs.forEach(({ ref, id }) => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        }, {
          threshold: 0.25,
          rootMargin: rootMargin,
        });

        observer.observe(ref.current);

        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      });
    };

    updateRootMargin();

    const handleResize = () => {
      updateRootMargin();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sectionRefs]);

  return activeSection;
};

export default useActiveSection;


