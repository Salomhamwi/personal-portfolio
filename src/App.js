// App.js

import React, { useEffect, useRef } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () => {
  const sections = useRef([]);

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-loading]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            section.classList.add('loaded');
            
            // Fade out other sections when scrolling to a new section
            sections.current.forEach((otherSection) => {
              if (otherSection !== section) {
                otherSection.classList.remove('loaded');
              }
            });
          }
        });
      },
      {
        rootMargin: '0px 0px -50% 0px',
      }
    );

    sections.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  

  return (
    <main>
      <Sidebar />
      <Home id="home" data-loading="home" className="loaded" />
      <About id="about" data-loading="about" />
      <Services id="services" data-loading="services" />
      <Portfolio id="projects" data-loading="portfolio" />
      <Contact id="contact" data-loading="contact" />
    </main>
  );
};

export default App;
