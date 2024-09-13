import React from "react";
import '../sidebar_vendeur/sidebar_vendeur.css';
import { Link } from "react-router-dom";

const SidebarVendeur = ({onContentChange}) => {
    return (
        <>
            <aside className="sidebar">
                <div className="user-info">
                    <img src="user.png" alt="User Profile" />
                    <h3>Fodjo Boris Junior</h3>
                    <p>borisFodjo@gmail.com</p>
                </div>
                <nav className="menu">
                    <Link to="/dashboard_vendeur" onClick={() => onContentChange("Acceuil")}>Acceuil</Link>
                    <Link to="commande" onClick={() => onContentChange("Commandes")}>Commande</Link>
                    <Link to="commentaires" onClick={() => onContentChange("Commentaires")}>Commentaires</Link>
                    <Link to="revenue" onClick={() => onContentChange("Revenues")}>Revenues</Link>
                    <Link to="produits" onClick={() => onContentChange("Produits")}>Produits</Link>
                    <Link to="serivce_en_dehors_du_site" onClick={() => onContentChange("Services")}>Services en dehors du site</Link>
                    <Link to="paramètre_vendeur" onClick={() => onContentChange("Paramètre")}>Paramètre</Link>
                </nav>
                <div className="pro-access">
                    <button>Service Pro</button>
                </div>
            </aside>
        </>
    );
}

export default SidebarVendeur;