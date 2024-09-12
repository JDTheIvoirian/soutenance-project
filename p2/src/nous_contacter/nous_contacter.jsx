import React from "react";
import '../nous_contacter/nous_contacter.css';
import Navbar from "../navbar/navbar";
import BoxContactPage from "./box_de_page_contact/box_page_contact";
import Footer from "../footer/footer";


const NousContacter = () => {
    return (
        <>
            <Navbar />
            <BoxContactPage />
            <Footer />
        </>
    );
}

export default NousContacter;