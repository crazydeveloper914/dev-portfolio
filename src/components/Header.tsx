import React from 'react';

const Header: React.FC = () => {
  return (
    
      <header className="flex flex-col items-center justify-center h-screen">
        <h1 className="main-title">
          Title <span>with span</span>
        </h1>
        <p className="text medium">Some text</p>
      </header>
  
  );
}

export default Header;