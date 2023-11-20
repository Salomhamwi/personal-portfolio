// App.js
import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <main>
      <Sidebar />
      <Home id="home" />
      <About id="about" />
      <Services id="services" />
      <Portfolio id="projects" />
      <Contact id="contact" />
    </main>
  );
}

export default App;
