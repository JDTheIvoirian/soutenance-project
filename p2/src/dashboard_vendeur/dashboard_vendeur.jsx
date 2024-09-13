import React, { useState } from "react";
import { useEffect, useRef } from "react";
import '../dashboard_vendeur/dashboard_vendeur.css';
import { Outlet } from "react-router-dom";
import SidebarVendeur from "../dashboard_vendeur/home_vendeur/sidebar_vendeur/sidebar_vendeur";
import CommentairesVendeur from "./home_vendeur/commentaires_vendeur/commentaires_vendeur";
import CommandeVendeur from './home_vendeur/commande_vendeur/commande_vendeur';
import RevenueVendeur from './home_vendeur/revenue_vendeur/revenue_vendeur';
import ProduitsVendeur from './home_vendeur/produits_vendeur/produits_vendeur';
import ServicesEnDehorsDuSite from './home_vendeur/services_en_dehors_du_site_vendeur/services_en_dehors_du_site';
import ParametreVendeur from './home_vendeur/parametre_vendeur/parametre_vendeur';
import MainContentVendeur from '../dashboard_vendeur/home_vendeur/main_content_vendeur/main_content_vendeur';
import { createMonthChart, createYearChart} from '../dashboard_vendeur/home_vendeur/graphique/graphique';


const DashboardVendeur = () => {

    const [mainContent, setMainContent] = useState("Acceuil");

    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);

    useEffect(() => {
        if (mainContent === "Acceuil") {
            createMonthChart(chartRef1.current);
            createYearChart(chartRef2.current);
        }
    }, [mainContent]);
    
    return (
        <>
            <div className="dashboard">
                <SidebarVendeur onContentChange={setMainContent} />
                {mainContent === "Acceuil" && <MainContentVendeur chartRef1={chartRef1} chartRef2={chartRef2} />}
                {mainContent === "Commentaires" && <CommentairesVendeur />}
                {mainContent === "Commandes" && <CommandeVendeur />}
                {mainContent === "Revenues" && <RevenueVendeur />}
                {mainContent === "Produits" && <ProduitsVendeur />}
                {mainContent === "Services" && <ServicesEnDehorsDuSite />}
                {mainContent === "Paramètre" && <ParametreVendeur />}
            </div>
            {mainContent ? <p>{mainContent}</p> : <Outlet />}
        </>
    );
}

export default DashboardVendeur;