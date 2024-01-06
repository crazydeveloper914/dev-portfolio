import { useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');

  const setupSectionObserver = useCallback((id: string, ref: React.RefObject<HTMLElement>) => {
    const { inView } = useInView({
      threshold: 0.25,
      rootMargin: '-25% 0px -25% 0px',
      triggerOnce: false
    });

    if (inView) {
      setActiveSection(id);
    }

    return ref;
  }, []);

  return { activeSection, setupSectionObserver };
};

export default useActiveSection;
