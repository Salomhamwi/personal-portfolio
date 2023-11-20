import React from 'react';
import "./contact.css"
//General comment on the forms: Filling out the form and clicking on send message, will get the information data getform.io server
const Contact = () => {
return (
    <section className="contact container section" id="contact" data-loading="contact">
        <h2 className="section__title">Get In Touch</h2>

        <div className="contact__container grid">
            <div className="contact__info">
                <h3>
                    Let's talk about everything!
                </h3>
                <p className="contact__details">Don't like forms? Send me an email! 😉 at: Karamhamwiva@gmail.com</p>
            </div>

            <form method="POST" action="https://getform.io/f/682ec0bc-8771-4234-8668-c358ab0f296b" className="contact__form">
                <div className="contact__form-group">

                    <div className="contact__form-div">
                        <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" />
                    </div>

                    <div className="contact__form-div">
                        <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" />
                    </div>

                    <div className="contact__form-div">
                        <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder='Write your message'></textarea>
                    </div>
                
                <button className='btn'>Send Message</button>
                </div>
            </form>
        </div>
    </section>
);
}

export default Contact;