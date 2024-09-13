import React from "react";
import { useState } from "react";
import '../navbar/navbar.css';
import { Link } from "react-router-dom";
import poulet from '../../public/img/poulet.png';
import tomate from '../../public/img/tomate.png';
import avocat from '../../public/img/avocat.png';
import maiis from '../../public/img/episDeMaiis.png';
import boeuf from '../../public/img/boeuf.png';
import user from '../../public/img/user_profile.png';
import panier from '../../public/img/panier1.png';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const products = [
        { name: "Poulet", price: "7000fr", image: {poulet} },
        { name: "Tomate", price: "250fr", image: {tomate} },
        { name: "Avocat", price: "500fr", image: {avocat} },
        { name: "Mais", price: "75fr", image: {maiis} },
        { name: "Boeuf", price: "250 000fr", image: {boeuf} },
    ];

    const suggestions = [
        { text: "Viande de la ferme" },
        { text: "Variété gustative" },
        { text: "Produits agricoles" },
    ];

    const stores = [
        { name: "Viande" },
    ];

    // Fonction pour mettre à jour les résultats lors de la recherche
    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        // Filtrage des produits et suggestions
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(term)
        );
        
        const filteredSuggestions = suggestions.filter(suggestion => 
            suggestion.text.toLowerCase().includes(term)
        );

        const filteredStores = stores.filter(store => 
            store.name.toLowerCase().includes(term)
        );

        setSearchResults({
            products: filteredProducts,
            suggestions: filteredSuggestions,
            stores: filteredStores
        });
    };

    // Fonction pour masquer les résultats de recherche
    const hideSearchResults = () => {
        setSearchResults(null);  // Réinitialiser les résultats
    };

    return (
        <header className="header-container">
            <div className="logo"> <Link to={`/`} className="link">Yadubon</Link> </div>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search for Grocery, Stores, Vegetable or Meat"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onBlur={hideSearchResults}
                    onFocus={handleSearchChange} />
                <button 
                    className="search-button"
                    onClick={hideSearchResults}>
                    Rechercher
                </button>
                {/* Afficher les résultats seulement si une recherche est effectuée */}
                {searchResults && (
                    <div className="search-results">
                        <div className="suggestions">
                            <h3>Suggestions</h3>
                            <ul>
                                {searchResults.suggestions.map((suggestion, index) => (
                                    <li key={index}>{suggestion.text}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="products">
                            <h3>Products</h3>
                            {searchResults.products.map((product, index) => (
                                <div key={index} className="product-item">
                                    <img src={product.image} alt={product.name} />
                                    <div>
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="stores">
                            <h3>Stores</h3>
                            <ul>
                                {searchResults.stores.map((store, index) => (
                                    <li key={index}>{store.name}</li>
                                ))}
                            </ul>
                            <Link to="/marketplace">Voir tout les résultats</Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="order-info">
                <Link to={`/`} className="order-link">Acceuil</Link>
                <Link to={`/qui_sommes_nous`} className="order-link">Qui sommes nous ?</Link>
                <Link to={`/nous_contacter`} className="order-link">Nous contacter</Link>
                <Link to={`/marketplace`} className="order-link">Marketplace</Link>
            </div>
            <div className="profile-icon">
                <Link to={`/panier`} className="order-link"><img src={panier} alt="" width="40px" height="40px" /></Link>
            </div>
            <div className="profile-icon">
                <Link to={`/marketplace`} className="order-link"><img src={user} alt="" width="50px" height="50px" /></Link>
            </div>
        </header>
    );
}

export default Navbar;