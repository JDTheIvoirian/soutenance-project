import React from "react";
import '../footer/footer.css';
import tabby from '../../public/img/tabby.png';
import visa from '../../public/img/visa.jpg';
import tamara from '../../public/img/tamara.png';
import mastercard from '../../public/img/mastercard.jpg';
import yadubon from '../../public/img/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <div className="logo">
                        <img src={yadubon} alt="Yadubon Logo" />
                        <h3>Yadubon</h3>
                    </div>
                    <p>Permettre à tout un chacun d'avoir un produit naturel comme il le désir. Yadubon, au coeur de ce qui est bon pour vous</p>
                    <div className="accepted-payments">
                        <h4>Accepted Payments</h4>
                        <div className="payment-icons">
                            <img src={tabby} alt="Tabby" />
                            <img src={visa} alt="Visa" />
                            <img src={tamara} alt="Tamara" />
                            <img src={mastercard} alt="Mastercard" />
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Produits agricoles</h4>
                        <ul>
                            <li><a href="#">Céréales</a></li>
                            <li><a href="#">Agrumes</a></li>
                            <li><a href="#">Fruit</a></li>
                            <li><a href="#">Oléagineux</a></li>
                            <li><a href="#">Racines et tubercules</a></li>
                            <li><a href="#">Cultures sucrières</a></li>
                            <li><a href="#">Fruits secs et légumes</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Bétails</h4>
                        <ul>
                            <li><a href="#">Boeuf</a></li>
                            <li><a href="#">Poulet</a></li>
                            <li><a href="#">Mouton</a></li>
                            <li><a href="#">Porc</a></li>
                            <li><a href="#">Lapin</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">...</a></li>
                            <li><a href="#">Yadubon sur mobile</a></li>
                            <li><a href="#">Devenir vendeur</a></li>
                            <li><a href="#">...</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="#">...</a></li>
                            <li><a href="#">Recap. de vos commandes ?</a></li>
                            <li><a href="#">Questions ?</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;