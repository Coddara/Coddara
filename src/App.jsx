

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Canvas from './components/Canvas';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 2 seconds before setting isLoading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <div className="circle"></div>
          
        </div>
      ) : (
        <>
          <Canvas />
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
}


export default App;