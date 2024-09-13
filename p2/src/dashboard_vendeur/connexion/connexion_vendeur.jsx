import React from "react";
import '../connexion/connexion_vendeur.css';
import { Link } from "react-router-dom";

const FormulaireConnexionVendeur = () => {
    

    return (
        <div className="container">
            <div className="contact-form">
                <h1>Connexion vendeur</h1>
                <p>Bienvenue dans un montre de variété de produits culinaire</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Numéro de téléphone</label>
                        <input type="text" id="phoneNumber" placeholder="(+225) 01-02-03-04-05" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de Passe</label>
                        <input type="password" id="password" placeholder="*fdfd*sd/sd51c" />
                    </div>
                    <Link to="#"><button type="submit">Se connecter</button></Link>
                    <Link to="/inscription_vendeur" className="alreadyCompte"> Je n'ai pas de compte</Link>
                </form>
            </div>
        </div>
    );
}

export default FormulaireConnexionVendeur;