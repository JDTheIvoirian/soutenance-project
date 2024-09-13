import React from "react";
import '../information_prix_commande/information_prix_commande.css';

const InformationPrixCommande = ({ totalOrderPrice, deliveryPrice, totalWithDelivery }) => {
    return (
        <div className="order-summary">
            <h2>Information prix de la commande</h2>

            <div className="payment-method">
                <label>
                    <input type="radio" name="payment" checked /> Payer à la livraison
                </label>
            </div>

            <div className="promo">
                <input type="text" placeholder="Ajouter code promo" />
                <button>Ajouter</button>
            </div>

            <div className="summary-details">
                <p>Prix des commandes: {totalOrderPrice} fr</p> 
                <p>Prix de la Livraison: {deliveryPrice} fr</p>
                <p>Coupon: -48.00 fr</p> {/* This is an example, you can make this dynamic */}
                <p>Total: {totalWithDelivery} fr</p>
            </div>

            <button className="confirm">Valider commande</button>
        </div>
    );
};

export default InformationPrixCommande;
