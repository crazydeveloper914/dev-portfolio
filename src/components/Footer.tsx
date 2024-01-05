import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer flex justify-between py-6 border-t border-gray-700">
      <div className="footer-left text text-extra-small">
        © {new Date().getFullYear()} Ugne Adomaityte
      </div>
      <div className="footer-right text text-small space-x-4">
        <a href="https://www.linkedin.com/in/ugne-adomaityte/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="sm"/>
        </a>
        <a href="https://github.com/ugnead" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="sm"/>
        </a>
        <a href="https://substack.com/@ugneadomaityte" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPen} size="xs"/>
        </a>
        <a href="mailto:u.adomaityte98@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="sm"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
