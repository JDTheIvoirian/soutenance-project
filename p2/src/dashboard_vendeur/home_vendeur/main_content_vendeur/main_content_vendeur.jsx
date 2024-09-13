import React from "react";
import '../main_content_vendeur/main_content_vendeur.css';
import { Link } from "react-router-dom";
import HeaderVendeur from "../header_vendeur/header_vendeur";
import InfluencerSectionVendeur from '../influencer_section_vendeur/influencer_section_vendeur';
import StatSectionVendeur from '../stat_section_vendeur/stat_section_vendeur';

const MainContentVendeur = ({chartRef1, chartRef2}) => {
    return (
        <>
            <main className="conten">
                <HeaderVendeur />
                <StatSectionVendeur />
                <InfluencerSectionVendeur chartRef1={chartRef1} chartRef2={chartRef2} />
            </main>
        </>
    );
}

export default MainContentVendeur;