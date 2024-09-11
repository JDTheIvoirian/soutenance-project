import React, { useState } from "react";
import { useEffect, useRef } from "react";
import '../dashboard_vendeur/dashboard_vendeur.css';
import { Outlet } from "react-router-dom";
import SidebarVendeur from "../dashboard_vendeur/home_vendeur/sidebar_vendeur/sidebar_vendeur";
import MainContentVendeur from '../dashboard_vendeur/home_vendeur/main_content_vendeur/main_content_vendeur';
import { createMonthChart, createYearChart} from '../dashboard_vendeur/home_vendeur/graphique/graphique';


const DashboardVendeur = () => {

    const [mainContent, setMainContent] = useState("Acceuil");

    
    const handleContentChange = (newContent) => {
        setMainContent(newContent)
    }
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);

    useEffect(() => {
        createMonthChart(chartRef1.current);
        createYearChart(chartRef2.current);
    }, []);
    
    return (
        <>
            <div className="dashboard">
                <SidebarVendeur onContentChange={handleContentChange} />
                <MainContentVendeur chartRef1={chartRef1} chartRef2={chartRef2} />
            </div>
            {mainContent ? <p>{mainContent}</p> : <Outlet />}
        </>
    );
}

export default DashboardVendeur;