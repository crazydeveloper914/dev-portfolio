import React, { forwardRef } from 'react';

interface HeaderProps {
  id?: string;
}

const Header = forwardRef<HTMLElement, HeaderProps>(({ id }, ref) => (
  <header id={id} ref={ref} className="flex flex-col items-center justify-center h-screen">
    <h1 className="main-title">
      Title <span>with span</span>
    </h1>
    <p className="text text-medium">Some text</p>
  </header>
));

Header.displayName = 'Header';

export default Header;
