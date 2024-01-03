import React from 'react';
import './Navigation.scss';

interface NavigationProps {
  activeSection: string | undefined;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const handleNavLinkClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navigation">
      <ul className="flex justify-center space-x-8 title title-small">
        <li className={`${activeSection === 'about' ? 'active-nav-item' : ''}`} onClick={() => handleNavLinkClick('about')}>About</li>
        <li className={`${activeSection === 'skillset' ? 'active-nav-item' : ''}`} onClick={() => handleNavLinkClick('skillset')}>Skillset</li>
        <li className={`${activeSection === 'experience' ? 'active-nav-item' : ''}`} onClick={() => handleNavLinkClick('experience')}>Experience</li>
        <li className={`${activeSection === 'projects' ? 'active-nav-item' : ''}`} onClick={() => handleNavLinkClick('projects')}>Projects</li>
        <li className={`${activeSection === 'posts' ? 'active-nav-item' : ''}`} onClick={() => handleNavLinkClick('posts')}>Posts</li>
      </ul>
    </nav>
  );
};

export default Navigation;
