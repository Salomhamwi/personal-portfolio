import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
    <button className="toggle-button" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <main className={`main ${darkMode ? 'dark-mode' : ''}`}>
        <Sidebar darkMode={darkMode} />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
    </>
  );
}

export default App;
