import React from "react";
import '../all_product_section/all_product_section.css';
import ProductCard from '../product_card/product_card';
import tomate from '../../public/img/tomate.png';
import avocat from '../../public/img/avocat.png';
import AllProductSectionInformation from "../all_produt_section_information/all_product_section_information";

const AllProductSection = () => {
    return (
        <main>

            <AllProductSectionInformation />

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