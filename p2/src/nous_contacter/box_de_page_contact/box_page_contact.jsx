import React from "react";
import '../box_de_page_contact/box_page_contact.css';
import FormulaireDeContact from "../formulaire_de_contact/formulaire_de_contact";
import MapComposant from "../map/map";

const BoxContactPage = () => {
    return(
        <div className="container">
            <FormulaireDeContact />
            <MapComposant />
        </div>
    );
}

export default BoxContactPage;