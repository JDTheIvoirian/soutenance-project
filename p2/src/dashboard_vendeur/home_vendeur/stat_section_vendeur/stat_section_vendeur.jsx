import React from "react";
import '../stat_section_vendeur/stat_section_vendeur.css';

const StatSectionVendeur = () => {
    return (
        <>
            <section className="stats-section">
                <div className="stats">
                    <div className="stat">
                        <h3>Nombres de Likes</h3>
                        <p>350,809</p>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <h3>Nombres de Commentaires</h3>
                        <p>186,072</p>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <h3>Nombres de recommandations</h3>
                        <p>120,043</p>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <h3>Pourcentages de nouveau clients</h3>
                        <p>48.07%</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default StatSectionVendeur;