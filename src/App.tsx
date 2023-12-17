import React from 'react';
import Header from './components/Header';
import About from './components/About';

const App: React.FC = () => {
  return (
      <div className="bg-black min-h-screen">
        <Header />
        <About />
      </div>
  );
}

export default App;
