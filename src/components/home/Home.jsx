import React from 'react';
import "./home.css"
import Me from "../../images project/karam.jpg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
return (
    <section className="home container loaded" id="home" data-loading="home">
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Karam Salom Hamwi</h1>
            <span className="home__education">Welcome to my Portfolio! I am Karam, Full-Stack Web Developer, ready to take on any challenges and deliver web solutions. </span>
            <HeaderSocials />

            <a href="#contact" className="btn"> Contact me 😄</a>
            
            <ScrollDown />
        </div>
    </section>
);
}

export default Home;