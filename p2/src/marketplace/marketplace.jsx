import React from "react";
import '../marketplace/marketplace.css';
import Navbar from "../navbar/navbar";
import PromotionSection from "./promotion_section/promotion_section";
import AllProductSection from "../all_product_section/all_product_section";
import Banner from "../banner/banner";
import Footer from "../footer/footer";

const Marketplace = () => {
    return (
        <>
            <Navbar />
            <PromotionSection />
            <AllProductSection />
            <Banner />
            <AllProductSection />
            <Footer />
        </>
    );
}

export default Marketplace;