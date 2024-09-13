import React from "react";
import '../box_ajout_produit/box_ajout_produit.css';
import FormulaireAjoutProduit from '../formulaire_ajout_produit/formulaire_ajout_produit';
import ImageUpload from '../image_upload_zone/image_upload';

const BoxAjoutProduit = () => {
    return (
        <div className="box-ajout-produit-container">
            <FormulaireAjoutProduit />
            <ImageUpload />
        </div>
    );
}

export default BoxAjoutProduit;