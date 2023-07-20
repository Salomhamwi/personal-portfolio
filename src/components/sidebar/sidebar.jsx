import React, { useState } from 'react';
import './sidebar.css';
import logo from '../../images project/logo.png';
import hamburger from '../../images project/hamburger.png';

const Sidebar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Container'>
      <div className={`hamburger-container ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <img src={hamburger} alt="Hamburger Menu" className= "hamburger" />
      </div>

      <aside className={`aside ${isOpen ? 'open' : '' } ${darkMode ? 'dark-mode' : ''}`}>

        <a href="#home" className={`nav__logo ${isOpen ? '' : 'closed'}`}>
          <img src={logo} alt="" />
        </a>

        <nav className={`nav ${isOpen ? '' : 'closed'}`}>
          <div className={`nav__menu ${isOpen ? '' : 'closed'}`}>
            <ul className={`nav__list ${isOpen ? '' : 'closed'}`}>
              <li className={`nav__item ${isOpen ? '' : 'closed'}`}>
                <a href="#home" className={`nav__link ${isOpen ? '' : 'closed'}`}>
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className={`nav__item ${isOpen ? '' : 'closed'}`}>
                <a href="#about" className={`nav__link ${isOpen ? '' : 'closed'}`}>
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className={`nav__item ${isOpen ? '' : 'closed'}`}>
                <a href="#services" className={`nav__link ${isOpen ? '' : 'closed'}`}>
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className={`nav__item ${isOpen ? '' : 'closed'}`}>
                <a href="#portfolio" className={`nav__link ${isOpen ? '' : 'closed'}`}>
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className={`nav__item ${isOpen ? '' : 'closed'}`}>
                <a href="#contact" className={`nav__link ${isOpen ? '' : 'closed'}`}>
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className={`nav__footer ${isOpen ? '' : 'closed'}`}>
          <span className={`copyright ${isOpen ? '' : 'closed'}`}> &copy; 2022 - 2023.</span>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
