import React from "react";
import '../navbar/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header-container">
            <div className="logo"> <Link to={`/`} className="link">Yadubon</Link> </div>
            <div className="search-bar">
                <input type="text" placeholder="Search for Grocery, Stores, Vegetable or Meat" />
                <button className="search-button">Rechercher</button>
            </div>
            <div className="order-info">
                <Link to={`/`} className="order-link">Acceuil</Link>
                <Link to={`/qui_sommes_nous`} className="order-link">Qui sommes nous ?</Link>
                <Link to={`/nous_contacter`} className="order-link">Nous contacter</Link>
                <Link to={`/marketplace`} className="order-link">Marketplace</Link>
            </div>
            <div className="profile-icon">
                {/* Profile Icon (can use an image or an icon) */}
            </div>
        </header>
    );
}

export default Navbar;