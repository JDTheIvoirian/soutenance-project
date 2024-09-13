import React, { useState } from "react";
import RecapitulatifProduit from "../recapitulatif_produit/recapitulatif_produit";
import InformationPrixCommande from "../information_prix_commande/information_prix_commande";

const CommandePanier = () => {
    // State for quantities
    const [lapinQuantity, setLapinQuantity] = useState(1);
    const [pouletQuantity, setPouletQuantity] = useState(2);

    // Prices per kg
    const lapinPricePerKg = 12000; // 12 000 fr
    const pouletPricePerKg = 7000;  // 7 000 fr
    const deliveryPrice = 1600; // 16.00 fr

    // Calculate total prices
    const lapinTotalPrice = lapinQuantity * lapinPricePerKg;
    const pouletTotalPrice = pouletQuantity * pouletPricePerKg;

    const totalOrderPrice = lapinTotalPrice + pouletTotalPrice;
    const totalWithDelivery = totalOrderPrice + deliveryPrice;

    // Handle quantity changes
    const increaseQuantity = (product) => {
        if (product === 'lapin') setLapinQuantity(lapinQuantity + 1);
        if (product === 'poulet') setPouletQuantity(pouletQuantity + 1);
    };

    const decreaseQuantity = (product) => {
        if (product === 'lapin' && lapinQuantity > 0) setLapinQuantity(lapinQuantity - 1);
        if (product === 'poulet' && pouletQuantity > 0) setPouletQuantity(pouletQuantity - 1);
    };

    return (
        <div className="content">
            <RecapitulatifProduit
                lapinQuantity={lapinQuantity}
                pouletQuantity={pouletQuantity}
                lapinTotalPrice={lapinTotalPrice}
                pouletTotalPrice={pouletTotalPrice}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
            />
            <InformationPrixCommande
                totalOrderPrice={totalOrderPrice}
                deliveryPrice={deliveryPrice}
                totalWithDelivery={totalWithDelivery}
            />
        </div>
    );
};

export default CommandePanier;
