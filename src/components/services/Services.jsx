import React from 'react';
import "./services.css"

const Services = () => {
return (
    <section className="services container" id="services" data-loading="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">

        <div className="services__card card-1">
            <i className="fa-solid fa-circle-exclamation fa-beat"></i>
            <h3 className="services__title">Problem-Solving</h3>
            <p className="services__description">Problem-solving skills that would always be an asset for solving problems and bugs.</p>
        </div>

        <div className="services__card card-2">
            <i className="fa-solid fa-cubes fa-flip"></i>
            <h3 className="services__title">Full-Stack Web Development</h3>
            <p className="services__description">Backend and frontend skills and willing to go further and beyond to learn your frameworks.</p>
        </div>

        <div className="services__card card-3">
            <i className="fa-solid fa-paintbrush fa-bounce"></i>
            <h3 className="services__title">UI-UX Design</h3>
            <p className="services__description">Simple and creative designs.</p>
        </div>

    </div>
</section>

);
}

export default Services;