import React from "react";
import '../inscription/inscription_vendeur.css';
import { Link } from "react-router-dom";

const FormulaireInscriptionVendeurSuite = () => {
    const options = [
        {label: "Eleveur", value: "éleveur"},
        {label: "Agriculteur", value:"Agriculteur"},
    ]

    const optionsAnneExpertise = [
        {label: "Aucune", value: "0"},
        {label: "Débutant", value: "1 - 3 ans"},
        {label: "Intermédiaire", value: "3 - 6 ans"},
        {label: "Expert", value: "9 ans et +"},
    ]

    const optionAssociation = [
        {label: "Sans association", value: "non"},
        {label: "Avec une association", value: "oui"},
    ]

    const optionTechnologie = [
        {label: "Travail à l'ancienne", value: "non"},
        {label: "Travail moderne", value: "oui"},
    ]

    const optionsLieuResidence = [
        {label: "Abidjan", value: "Abidjan"},
        {label: "Yamoussokro", value:"Yamoussokro"},
        {label: "Bouaké", value: "Bouaké"},
        {label: "Toumodi", value: "Toumodi"},
        {label: "Tiassalé", value: "Tiassalé"},
        {label: "Bassam", value: "Bassam"},
        {label: "San Pédro", value: "San Pédro"},
        {label: "Assinie", value: "Assinie"},
        {label: "Man", value: "Man"},
        {label: "Khorogho", value: "Khorogho"},
    ]

    return (
        <div className="container">
            <div className="contact-form">
                <h1>Inscription Vendeur Suite</h1>
                <p>Bienvenue dans un montre de variété de produits culinaire</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="residence">Quel est votre Métier</label>
                        <select name="" id="residence">
                            {options.map(option => (
                                <option value={option.value}> {option.value} </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="residence">Combien d'année d'expertise avez-vous ?</label>
                        <select name="" id="residence">
                            {optionsAnneExpertise.map(option => (
                                <option value={option.value}> {option.value} </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="residence">Etes vous en partenariat avec une association ?</label>
                        <select name="" id="residence">
                            {optionAssociation.map(option => (
                                <option value={option.value}> {option.value} </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="residence">Quel est votre zone de résidence ?</label>
                        <select name="" id="residence">
                            {optionsLieuResidence.map(option => (
                                <option value={option.value}> {option.value} </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="residence">Utilisez-vous des outils technologiques ?</label>
                        <select name="" id="residence">
                            {optionTechnologie.map(option => (
                                <option value={option.value}> {option.value} </option>
                            ))}
                        </select>
                    </div>
                    <Link to="/dashboard_vendeur"><button type="submit">S'inscrire</button></Link>
                </form>
            </div>
        </div>
    );
}

export default FormulaireInscriptionVendeurSuite;