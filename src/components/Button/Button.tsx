import React from 'react';
import './Button.scss';
import '../../styles/main.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant = 'primary', href }) => {
  const buttonClass = `btn btn-${variant} ${className}`;

  return href ? (
    <a href={href} className={buttonClass} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

