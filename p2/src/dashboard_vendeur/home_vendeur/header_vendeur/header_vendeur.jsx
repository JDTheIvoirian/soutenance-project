import React from "react";
import '../header_vendeur/header_vendeur.css';
import { Link } from "react-router-dom";

const HeaderVendeur = () => {
    return (
        <>
            <header className="header">
                <div className="campaign-title">
                    <h2>Elevage Adjoukrou Land</h2>
                    <p>Ferme situé à Bouaké</p>
                </div>
                <div className="campaign-status">
                    <span className="status-active">Active</span>
                    <span>Créer le 20 Août 2024</span>
                </div>
            </header>
        </>
    );
}

export default HeaderVendeur;