import React from "react";
import '../all_produt_section_information/all_product_section_information.css'

const AllProductSectionInformation = () => {
    return(
        <div className="filter-section">
            <h2>Yadubon / Toutes les catégories</h2>
            <div className="filters">
                <button>Toutes les catégories</button>
                <button>Prix</button>
                <button>Mouton</button>
                <button>Porc</button>
                <button>Lapin</button>
                <button>Offres spéciales</button>
                <button>Racines et Tubrecules</button>
                <button>Céréales</button>
            </div>
        </div>
    );
}

export default AllProductSectionInformation;