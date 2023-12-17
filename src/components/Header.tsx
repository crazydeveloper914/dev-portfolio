import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="Header">
      <header className="text-center p-4">
        <h1 className="main-title mb-2">
          Title <span>with span</span>
        </h1>
        <p className="text-m">Some text</p>
      </header>
    </div>
  );
}

export default Header;