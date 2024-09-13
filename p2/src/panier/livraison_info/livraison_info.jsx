import React from "react";
import '../livraison_info/livraison_info.css';

const LivraisonInfo = () => {
    return (
        <div className="delivery-info">
            <h2>Information sur la Livraison</h2>
            <div className="delivery-details">
                <p>Livré à:</p>
                <p>Numéro de téléphone: (+225) 01-02-03-04-05</p>
                <p>Abatta, Village</p>
                <a href="#" className="edit">Edit</a>
            </div>
        </div>
    );
}

export default LivraisonInfo;