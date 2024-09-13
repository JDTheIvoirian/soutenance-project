import React from "react";
import '../commande_vendeur/commande_vendeur.css';
import HeaderVendeur from "../header_vendeur/header_vendeur";
import CampaignTable from "./campaign_table/campaign_table";
import FilterBar from "./filter_bar/filter_bar";

const CommandeVendeur = () => {
    return (
        <div className="content">
            <HeaderVendeur />
            <FilterBar />
            <CampaignTable />
        </div>
    );
}

export default CommandeVendeur;