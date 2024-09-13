import React from "react";
import '../all_info/all_info_panier.css';
import LivraisonInfo from '../livraison_info/livraison_info';
import CommandePanier from "../commande_panier/commande_panier";


const AllInfoPanier = () => {
    return (
        <div className="container">
            <LivraisonInfo />
            <CommandePanier />
            <div className="content">
            </div>
        </div>
    );
}

export default AllInfoPanier;