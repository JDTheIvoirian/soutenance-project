import React from "react";
import '../all_product_section/all_product_section.css';
import ProductCard from '../product_card/product_card';
import tomate from '../../public/img/tomate.png';
import avocat from '../../public/img/avocat.png';

const AllProductSection = () => {
    return (
        <main>
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

            <div className="product-grid">
                <ProductCard imageSrc={tomate} title="Tomate" description="500 gm." price="200fr" />
                <ProductCard imageSrc={avocat} title="Avocat" description="500 gm." price="350fr" />
                <ProductCard imageSrc={avocat} title="Avocat" description="500 gm." price="350fr" />
                <ProductCard imageSrc={avocat} title="Avocat" description="500 gm." price="350fr" />
                <ProductCard imageSrc={avocat} title="Avocat" description="500 gm." price="350fr" />
                <ProductCard imageSrc={avocat} title="Avocat" description="500 gm." price="350fr" />
                <ProductCard imageSrc={avocat} title="Avocat" description="500 gm." price="350fr" />
                <ProductCard imageSrc={avocat} title="Avocat" description="500 gm." price="350fr" />
                <ProductCard imageSrc={avocat} title="Avocat" description="500 gm." price="350fr" />
                <ProductCard imageSrc={avocat} title="Avocat" description="500 gm." price="350fr" />
                {/* Add more ProductCard components as needed */}
            </div>
        </main>
    );
}

export default AllProductSection;