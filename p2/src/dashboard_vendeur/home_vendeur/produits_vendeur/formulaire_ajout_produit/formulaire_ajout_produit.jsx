import React from "react";
import '../formulaire_ajout_produit/formulaire_ajout_produit.css';

const FormulaireAjoutProduit = () => {
    return (
        <div className="contact-form">
            <h1>Ajouter un produit</h1>
            <p>Faites découvrir quelques choses d'unique à vos clients</p>
            <form>
                <div className="form-group">
                    <label htmlFor="first-name">Nom du Produits</label>
                    <input type="text" id="first-name" placeholder="Nom" />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Espèces</label>
                    <input type="text" id="last-name" placeholder="Espèces" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Stocks de départ</label>
                    <input type="number" id="number" placeholder="nombre en stocks" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number">Qualité du Produits</label>
                    <input type="text" id="product_quality" placeholder="Exemple: A5 ->Pour la viande / B -> pour les produits agricoles" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Description</label>
                    <textarea id="message" placeholder="Décrire le produit"></textarea>
                </div>
                <button type="submit">Ajouter le Produits</button>
            </form>
        </div>
    );
}

export default FormulaireAjoutProduit;