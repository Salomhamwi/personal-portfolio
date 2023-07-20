import React from 'react';
import "./home.css"
import Me from "../../images project/karam.jpg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
return (
    <section className="home container" id="home">
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Karam Salom Hamwi</h1>
            <span className="home__education">I am a full-stack web developer</span>
            <HeaderSocials />

            <a href="#contact" className="btn"> Hire me</a>
            
            <ScrollDown />
        </div>
    </section>
);
}

export default Home;