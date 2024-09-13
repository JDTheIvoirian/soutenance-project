import React, { useState, useEffect } from 'react';
import Navbar from "../navbar/navbar";
import '../product_page_description/product_page_description.css';
import mouton1 from '../../public/img/mouton1.jpg';
import mouton2 from '../../public/img/mouton2.jpg';
import tomate from '../../public/img/tomate.png';
import avocat from '../../public/img/avocat.png';

const ProductPageDescription = () => {
    const [mainImage, setMainImage] = useState(mouton1);
    const [timeLeft, setTimeLeft] = useState(270 * 3600 + 13 * 60 + 10); // initial time in seconds
  
    // Function to change the main image when a thumbnail is clicked
    const changeImage = (src) => {
      setMainImage(src);
    };
  
    // Timer countdown function
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    // Format the time left
    const formatTime = (seconds) => {
      const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      const secs = String(seconds % 60).padStart(2, '0');
      return `${hours} : ${minutes} : ${secs}`;
    };
  
    // Function for adding item to wishlist
    const addToWishlist = (event) => {
      event.preventDefault();
      alert('Item added to your wishlist!');
    };
  
    return (
      <div className="container">
        <Navbar />
        <header>
          <h1>Bétails / Moutons / Moutons Africain</h1>
        </header>
  
        <section className="product-details">
          <div className="product-images">
            <img id="mainImage" src={mainImage} alt="Bobs red mill whole wheat organic flour" className="main-image" />
            <div className="thumbnail-images">
              <img src={mouton2} alt="Thumbnail 1" onClick={() => changeImage(mouton2)} />
              <img src={mouton1} alt="Thumbnail 2" onClick={() => changeImage(mouton1)} />
              <img src={mouton2} alt="Thumbnail 3" onClick={() => changeImage(mouton2)} />
              <img src={mouton1} alt="Thumbnail 4" onClick={() => changeImage(mouton1)} />
              <img src={mouton2} alt="Thumbnail 5" onClick={() => changeImage(mouton2)} />
            </div>
          </div>
  
          <div className="product-info">
            <div className="delivery-info">
              <span className="free-delivery">Livraison Gratuite</span>
              <span id="timer" className="timer">{formatTime(timeLeft)}</span>
            </div>
  
            <h2>Le Mouton Ivoirien de Qualité</h2>
            <div className="rating">
              <span className="stars">⭐ 4.5 / 5</span>
              <a href="#">(15 Avis)</a>
            </div>
  
            <div className="price">
              <span className="amount">29.12$</span>
            </div>
  
            <div className="payment-options">
              <p>Uniquement achetable en paiement unique</p>
            </div>
  
            <div className="buttons">
              <button className="add-to-bucket">Ajouter au panier</button>
              <button className="buy-now">Acheter maintenant</button>
            </div>
  
            <div className="additional-options">
              <a href="#" id="wishlistButton" onClick={addToWishlist}>Ajouter à ma liste de souhait</a>
              <a href="#">Comparer le produits à d'autres</a>
            </div>
  
            <div className="product-meta">
              <p>SKU: MB3442</p>
              <p>Categories: Bétails, Mouton, Mouton Africain</p>
            </div>
  
            <div className="popularity">
              <span>🔥 100 vendus au cours des 35 dernières heures</span>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
export default ProductPageDescription;
