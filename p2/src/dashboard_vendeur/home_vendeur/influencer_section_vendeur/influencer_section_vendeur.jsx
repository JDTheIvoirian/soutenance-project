import React from "react";
import '../influencer_section_vendeur/influencer_section_vendeur.css';
import { Link } from "react-router-dom";

const InfluencerSectionVendeur = ({chartRef1, chartRef2}) => {
    return (
        <>
            <section className="influencer-section">
                <div className="age-gender-chart">
                    <h3>Statistique du mois</h3>
                    <canvas id="StatistiqueDumois" ref={chartRef1}></canvas>
                </div>
                <div className="interest-chart">
                    <h3>Statistique de l'année</h3>
                    <canvas id="StatistiqueDeLannee" ref={chartRef2}></canvas>
                </div>
            </section>
        </>
    );
}

export default InfluencerSectionVendeur;