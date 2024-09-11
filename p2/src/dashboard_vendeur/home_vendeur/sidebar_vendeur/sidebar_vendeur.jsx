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
                    <Link to="/dashboard_vendeur">Acceuil</Link>
                    <a href="#">Commandes</a>
                    <Link to="commentaires" onClick={() => onContentChange("Commentaires Oui")}>Commentaires</Link>
                    <a href="#">Revenues</a>
                    <a href="#">Produits</a>
                    <a href="#">Services en dehors du site</a>
                    <a href="#">Paramètre</a>
                </nav>
                <div className="pro-access">
                    <button>Service Pro</button>
                </div>
            </aside>
        </>
    );
}

export default SidebarVendeur;