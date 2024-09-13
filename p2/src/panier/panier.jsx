import React from "react";
import '../panier/panier.css';
import Navbar from "../navbar/navbar";
import AllInfoPanier from '../panier/all_info/all_info_panier';
import Footer from "../footer/footer";

const Panier = () => {
    return (
        <>  
            <Navbar />
            <AllInfoPanier />
            <Footer />
        </>
    );
}

export default Panier;