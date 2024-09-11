import React from "react";
import '../banner/banner.css'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-content">
                <h2>Obtener 10% de remise sur votre achat à partir de 50 000fr</h2>
                <p>Permettre à tout un chacun d'avoir un produit naturel comme il le désir. Yadubon, au coeur de ce qui est bon pour vous</p>
                <button className="learn-more-button">En savoir plus</button>
            </div>
            <div className="banner-image">
                {/* Image here */}
            </div>
        </section>
    );
}

export default Banner;