import React from 'react';
import './Navigation.scss';

interface NavigationProps {
  activeSection: string | undefined;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const handleNavLinkClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 150;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="navigation">
      <ul className="flex justify-center space-x-2 sm:space-x-8 title title-small">
        <li className={`nav-item ${activeSection === 'header' ? 'active-nav-item' : ''}`} onClick={() => handleNavLinkClick('header')}>Home</li>
        <li className={`nav-item ${activeSection === 'about' ? 'active-nav-item' : ''}`} onClick={() => handleNavLinkClick('about')}>About</li>
        <li className={`nav-item ${activeSection === 'projects' ? 'active-nav-item' : ''}`} onClick={() => handleNavLinkClick('projects')}>Projects</li>
        <li className={`nav-item ${activeSection === 'posts' ? 'active-nav-item' : ''}`} onClick={() => handleNavLinkClick('posts')}>Posts</li>
      </ul>
    </nav>
  );
};

export default Navigation;
