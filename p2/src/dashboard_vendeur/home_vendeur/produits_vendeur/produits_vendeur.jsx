import React from "react";
import '../produits_vendeur/produits_vendeur.css';
import HeaderVendeur from "../header_vendeur/header_vendeur";
import BoxAjoutProduit from "./box_ajout_produit/box_ajout_produit";

const ProduitsVendeur = () => {
    return (
        <div className="conten">
            <HeaderVendeur />
            <BoxAjoutProduit />
        </div>
    );
}

export default ProduitsVendeur;