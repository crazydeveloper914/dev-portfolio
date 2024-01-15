import React, { forwardRef } from 'react';
import './Header.scss';

interface HeaderProps {
  id?: string;
}

const Header = forwardRef<HTMLElement, HeaderProps>(({ id }, ref) => (
  <header id={id} ref={ref} className="flex flex-col items-center justify-center h-[93vh]">
    <div className="typewriter">
      <h1 className="main-title px-3">
        Hi, <span>I&apos;m Ugne</span>
      </h1>
    </div>
    <p className="delayedText text text-medium text-center">A Passionate Full Stack Developer</p>
  </header>
));

Header.displayName = 'Header';

export default Header;
