import React from 'react';
import "./portfolio.css"
import hangim from "../../images project/hangim.png"
import searchbar from "../../images project/amazonsearchbar.png"
import cookiegame from "../../images project/cookiesgame.png"
import fruits from "../../images project/fruitsshop.png"
import dodgearrows from "../../images project/dodgearrows.png"

const Portfolio = () => {
return (
    <section className="portfolio container" id="portfolio">
        <h2 className="section__title">My Projects *Hover Over images 😉*</h2>

        <span className="project__item">
        <h3 className="item__title">Cookie generator game coming through!</h3>
        <img src={cookiegame} alt="" className="item__screenshot" />
        <p className="item__description">Cookie generator game coming through! with the combination of CSS HTML and react, I managed to make this game that generator cookies per second, and in order to increase your CPS, you would need to purchase the items! The goal of this game is to get as many cookies as possible.</p>
        </span>

        <span className="project__item">
        <h3 className="item__title">Dodge the Arrows Get high score!</h3>
        <img src={dodgearrows} alt="" className="item__screenshot" />
        <p className="item__description">Jump king theme inspired game! utilizing the DOM in javascript. Starting off with music in the menu, then cutscenes until the game starts utilising a smart combinations of intervals. with a score system and a health points system.</p>
        </span>

        <span className="project__item">
        <h3 className="item__title">Hang im! word game</h3>
        <img src={hangim} alt="" className="item__screenshot" />
        <p className="item__description">Inspired by the classic hang im! game, we utilize React propertize, in order to get the database and make different jsx componants in react. The user has up to 10 tries to get the word.</p>
        </span>

        <span className="project__item">
        <h3 className="item__title">Search bar Amazon inspired</h3>
        <img src={searchbar} alt="" className="item__screenshot" />
        <p className="item__description">Inspired by Amazon search bar! This webpage searches into an existing small database, but it shares the same proportizes such as bold after the writing and keyboard functionallity in addition to mouse.</p>
        </span>

        <span className="project__item">
        <h3 className="item__title">Fruits Shop</h3>
        <img src={fruits} alt="" className="item__screenshot" />
        <p className="item__description">In this webpage, we have different fruits that can be sellable, and utilizes the use of links to travel inbetween the pages.</p>
        </span>

    </section>

);
}

export default Portfolio;