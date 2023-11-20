import React from 'react';
import "./about.css"
import Me2 from "../../images project/mekaram.jpg"
import html from "../../images project/html logo.png"
import css from "../../images project/css logo.png"
import js from "../../images project/js logo.png"
import reacticon from "../../images project/react logo.png"
import java from "../../images project/java icon.png"
import arduino from "../../images project/arduino logo.png"
import CV from "../../images project/CV.pdf"

const About = () => {
return (
    <section className="about container" id="about" data-loading="about">
    <h2 className="section__title">
        About me
    </h2>
    <div className="about__container grid">
        <div className="about__img-container">
            <img src={Me2} alt="" className="about__img" />
        </div>

        <div className="about__data">
            <div className="about__info">
                <p className="about_text">Ever since I was young, I have always thrived to develop and learn from more experienced people in the industry. My teamwork skills are astonishing as I always give my absolute best to make the job easier for my colleagues. I am always open to learning new skills, which has enabled me to develop a strong attitude towards teamwork and creativity. Let's work together!</p>
                <div className="centered-link"><a href={CV} className="btn">View My CV</a></div>
            </div>

            <div className="about__skills">
                <h3 className="skills__names">Coding Skills:</h3>
                <div className="skills__icons">
                    <div className="skill__circle"><img src={html} alt="" className="skill__html" /></div>
                    <div className="skill__circle"><img src={css} alt="" className="skill__css" /></div>
                    <div className="skill__circle"><img src={js} alt="" className="skill__js" /></div>
                    <div className="skill__circle"><img src={reacticon} alt="" className="skill__react" /></div>
                    <div className="skill__circle"><img src={java} alt="" className="skill_java" /></div>
                    <div className="skill__circle"><img src={arduino} alt="" className="skill_arduino" /></div>
                </div>
            </div>
        </div>
    </div>
</section>
);
}

export default About;