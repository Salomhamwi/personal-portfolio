import React from 'react';
import "./portfolio.css"
import cookiegame from "../../images project/cookiesgame.png"
import Roster from "../../images project/RosterScreenshot.png"
import gadgetgo from "../../images project/gadgetgo.png"
import SocialEcho from "../../images project/SocialEcho Preview.PNG"

const Portfolio = () => {
return (
    <section className="portfolio container" id="projects" data-loading="projects">
        <h2 className="section__title">Projects</h2>

        <span className="project__item">
        <h3 className="item__title">Social Media app: SocialEcho</h3>
        <a href="https://github.com/Salomhamwi/SocialEcho" className="item__link">
        <img src={SocialEcho} alt="" className="item__screenshot" />
        </a>
        <p className="item__description">*Work in progress* Leverging JSX HTML FRAMER MOTION REACT GIT INSOMNIA NODEJS EXPRESS BCRYPT. <a href="https://github.com/Salomhamwi/SocialEcho" className="item__link">GitHub .</a> </p>
        </span>

        <span className="project__item">
        <h3 className="item__title">Dragon Boat Roster Planner: K-Sync</h3>
        <a href="https://k-sync-final-project-salomhamwi.vercel.app/" className="item__link">
        <img src={Roster} alt="" className="item__screenshot" />
        </a>
        <p className="item__description">Leverging : JSX HTML CSSTAILWIND REACT GIT INSOMNIA NODEJS EXPRESS BCRYPT. <a href="https://github.com/Salomhamwi/k-sync-final-project" className="item__link">GitHub .</a></p>
        </span>

        <span className="project__item">
        <h3 className="item__title">GadgetGo E-commerce Website</h3>
    <a href="https://gadgetgo.vercel.app/" className="item__link">
        <img src={gadgetgo} alt="" className="item__screenshot" />
    </a>
    <p className="item__description">Leverging JSX MongoDB HTML CSS REACT GIT INSOMNIA NODEJS EXPRESS. Team Leader of the group Project resolving conflicts on github and handling (merging and pulling): <a href="https://github.com/Salomhamwi/GadgetGO-E-commerce-Readme.git" className="item__link">GitHub .</a></p>
</span>

        <span className="project__item">
        <h3 className="item__title">Cookie generator game</h3>
        <a href="https://react-effects-salomhamwi.vercel.app/" className="item__link">
        <img src={cookiegame} alt="" className="item__screenshot" />
        </a>
        <p className="item__description">Leverging JSX HTML CSS REACT Basic DOM elements.</p>
        </span>

    </section>

);
}

export default Portfolio;