import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='Container'>
      <nav className={`nav`}>
        <div className={`nav__menu`}>
          <ul className={`nav__list`}>
            <li className={`nav__item`}>
              <a href="#home" className={`nav__link`}>
                <i className="icon-home"></i>
              </a>
            </li>

            <li className={`nav__item`}>
              <a href="#about" className={`nav__link`}>
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className={`nav__item`}>
              <a href="#services" className={`nav__link`}>
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className={`nav__item`}>
              <a href="#portfolio" className={`nav__link`}>
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className={`nav__item`}>
              <a href="#contact" className={`nav__link`}>
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
