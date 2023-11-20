import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`Container ${isOpen ? 'open' : ''}`}>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item" onClick={() => handleItemClick('home')}>
            <span className="nav__link">Home</span>
          </li>
          <li className="nav__item" onClick={() => handleItemClick('about')}>
            <span className="nav__link">About</span>
          </li>
          <li className="nav__item" onClick={() => handleItemClick('services')}>
            <span className="nav__link">Services</span>
          </li>
          <li className="nav__item" onClick={() => handleItemClick('projects')}>
            <span className="nav__link">Projects</span>
          </li>
          <li className="nav__item" onClick={() => handleItemClick('contact')}>
            <span className="nav__link">Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
