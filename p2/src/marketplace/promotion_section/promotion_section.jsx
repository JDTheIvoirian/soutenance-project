import React from "react";
import '../promotion_section/promotion_section.css';
import porc1 from '../../../public/img/porc1.png';
import lapin1 from '../../../public/img/lapin1.png';
import poulet from '../../../public/img/poulet1.png';
import boeuf from '../../../public/img/boeuf.png';

const PromotionSection = () => {
    return(
        <section class="promotions">
            <a href="#">    
                <div class="promo-card">
                    <h2>C'est le moment</h2>
                    <p>Un boeuf, blanc pour le bohneur dans avoir, noir pour l'élégance de sa saveur</p>
                    <img src={boeuf} />
                </div>
            </a>
            <a href="#">
                <div class="promo-card">
                    <h2>-30% sur du porc</h2>
                    <p>Vous possédez un commerce ? vous avez d'une viande de porc saine et de qualité ?</p>
                    <img src={porc1} />
                </div>
            </a>
            <a href="#">
                <div class="promo-card">
                    <h2>-50% le lapin de pâques</h2>
                    <p>Celui qui apporte les oeufs de pâques est en réduction dans votre assiette.</p>
                    <img src={lapin1} />
                </div>
            </a>
            <a href="#">  
                <div class="promo-card">
                    <h2>Le Roi</h2>
                    <p>Le poulet est roi, le poulet est star, venez choisir le votre.</p>
                    <img src={poulet} />
                </div>
            </a>
        </section>
    );
}

export default PromotionSection;