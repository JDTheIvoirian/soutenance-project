import React from "react";
import '../all_info/all_info_panier.css';
import LivraisonInfo from '../livraison_info/livraison_info';
import RecapitulatifProduit from '../recapitulatif_produit/recapitulatif_produit';
import InformationPrixCommande from '../information_prix_commande/information_prix_commande';
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