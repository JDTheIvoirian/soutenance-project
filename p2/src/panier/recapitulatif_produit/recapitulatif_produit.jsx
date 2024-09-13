import React from "react";
import '../recapitulatif_produit/recapitulatif_produit.css';
import Lapin from '../../../public/img/lapin.png';
import Poulet from '../../../public/img/poulet.png';

const RecapitulatifProduit = ({ lapinQuantity, pouletQuantity, lapinTotalPrice, pouletTotalPrice, increaseQuantity, decreaseQuantity }) => {
    return (
        <div className="review-store">
            <h2>Récapitulatif</h2>

            {/* Lapin Section */}
            <div className="store">
                <h3>Lapin</h3>
                <div className="item">
                    <img src={Lapin} alt="Lapin" width="50px" height="50px" />
                    <div className="item-details">
                        <p>Elevage AdjoukrouLand</p>
                        <p>2.5 kg</p>
                        <p>{lapinTotalPrice} fr</p>
                        <div className="quantity">
                            <button onClick={() => decreaseQuantity('lapin')}>-</button>
                            <span>{lapinQuantity}</span>
                            <button onClick={() => increaseQuantity('lapin')}>+</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Poulet Section */}
            <div className="store">
                <h3>Poulet</h3>
                <div className="item">
                    <img src={Poulet} alt="Poulet" width="50px" height="50px" />
                    <div className="item-details">
                        <p>Elevage AdjoukrouLand</p>
                        <p>2.5 kg</p>
                        <p>{pouletTotalPrice} fr</p>
                        <div className="quantity">
                            <button onClick={() => decreaseQuantity('poulet')}>-</button>
                            <span>{pouletQuantity}</span>
                            <button onClick={() => increaseQuantity('poulet')}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecapitulatifProduit;
