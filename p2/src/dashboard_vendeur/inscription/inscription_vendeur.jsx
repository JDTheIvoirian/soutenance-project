import React from "react";
import '../inscription/inscription_vendeur.css';
import { Link } from "react-router-dom";

const FormulaireInscriptionVendeur = () => {
    

    return (
        <div className="container">
            <div className="contact-form">
                <h1>Inscription Vendeur</h1>
                <p>Bienvenue dans un montre de variété de produits culinaire</p>
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
                        <label htmlFor="password">Mot de Passe</label>
                        <input type="password" id="password" placeholder="*fdfd*sd/sd51c" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Numéro de téléphone</label>
                        <input type="text" id="phoneNumber" placeholder="(+225) 01-02-03-04-05" />
                    </div>
                    <Link to="/inscription_vendeur_suite"><button type="submit">Suivant</button></Link>
                    <Link to="/connexion_vendeur" className="alreadyCompte"> Je possède déjà un compte</Link>
                </form>
            </div>
        </div>
    );
}

export default FormulaireInscriptionVendeur;