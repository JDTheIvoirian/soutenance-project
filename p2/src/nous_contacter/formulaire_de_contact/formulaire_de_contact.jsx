import React from "react";
import '../formulaire_de_contact/formulaire_de_contact.css';

const FormulaireDeContact = () => {
    return (
        <div className="contact-form">
            <h1>Contact us</h1>
            <p>Our friendly team would love to hear from you!</p>
            <form>
                <div className="form-group">
                    <label htmlFor="first-name">Nom</label>
                    <input type="text" id="first-name" placeholder="Nom" />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Prénom</label>
                    <input type="text" id="last-name" placeholder="Prénom" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="jean@gmail.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number">Numéro de téléphone</label>
                    <input type="tel" id="phone-number" placeholder="+225 07-01-05-24-02" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Message"></textarea>
                </div>
                <button type="submit">Envoyez le message</button>
            </form>
        </div>
    );
}

export default FormulaireDeContact;