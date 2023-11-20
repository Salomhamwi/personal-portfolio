import React from 'react';
import "./portfolio.css"
import hangim from "../../images project/hangim.png"
import searchbar from "../../images project/amazonsearchbar.png"
import cookiegame from "../../images project/cookiesgame.png"
import dodgearrows from "../../images project/dodgearrows.png"
import Roster from "../../images project/RosterScreenshot.png"
import gadgetgo from "../../images project/gadgetgo.png"
import LLtrigger from "../../images project/LLtrigger website showcase.png"

const Portfolio = () => {
return (
    <section className="portfolio container" id="projects" data-loading="projects">
        <h2 className="section__title">Projects</h2>

        <span className="project__item">
        <h3 className="item__title">Dragon Boat Roster Planner: K-Sync</h3>
        <a href="https://k-sync-final-project-salomhamwi.vercel.app/" className="item__link">
        <img src={Roster} alt="" className="item__screenshot" />
        </a>
        <p className="item__description">K-Sync, A social media platform that provides log-in, sign-up, and creating teams. all the user's information are stored on MongoDb database in the backend. the MVP of this project is Create a roster as the team Captain and making them as a post.</p>
        </span>

        <span className="project__item">
        <h3 className="item__title">GadgetGo E-commerce Website</h3>
    <a href="https://gadgetgo.vercel.app/" className="item__link">
        <img src={gadgetgo} alt="" className="item__screenshot" />
    </a>
    <p className="item__description">GadgetGo is a team project e-commerce website that features a functional e-commerce website in the database that simulates the user buying and selling electronics equipment. I worked hand in hand with my teammates through Github. We utilize the use of Branch and merging them. The database is a json file that is being fed to a MongoDb in the backend. You can also check out this <a href="https://github.com/Salomhamwi/GadgetGO-E-commerce-Readme.git" className="item__link">Readme .</a></p>
</span>

        <span className="project__item">
        <h3 className="item__title">Cookie generator game coming through!</h3>
        <a href="https://react-effects-salomhamwi.vercel.app/" className="item__link">
        <img src={cookiegame} alt="" className="item__screenshot" />
        </a>
        <p className="item__description">Cookie generator game coming through! with the combination of CSS HTML and react, I managed to make this game that generator cookies per second, and in order to increase your CPS, you would need to purchase the items! The goal of this game is to get as many cookies as possible.</p>
        </span>

        <span className="project__item">
        <h3 className="item__title">Dodge the Arrows Get high score!</h3>
        <a href="https://project-js-nyan-cat-salomhamwi.vercel.app/" className="item__link">
        <img src={dodgearrows} alt="" className="item__screenshot" />
        </a>
        
        <p className="item__description">Jump king theme inspired game! utilizing the DOM in javascript. Starting off with music in the menu, then cutscenes until the game starts utilising a smart combinations of intervals. with a score system and a health points system.</p>
        </span>

        <span className="project__item">
        <h3 className="item__title">Hang im! word game</h3>
        <a href="https://react-state-p1-salomhamwi.vercel.app/" className="item__link">
        <img src={hangim} alt="" className="item__screenshot" />
        </a>
        
        <p className="item__description">Inspired by the classic hang im! game, we utilize React propertize, in order to get the database and make different jsx componants in react. The user has up to 10 tries to get the word.</p>
        </span>

    </section>

);
}

export default Portfolio;