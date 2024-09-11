import React from "react";
import { Link } from "react-router-dom";
import '../product_card/product_card.css';

const ProductCard = ({ imageSrc, title, description, price }) => {
    return (
        <div className="product-card">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="price">{price}</div>
            <button className="add-to-cart">
                <Link to={`/product_page_description`} className="link">+</Link>
                </ button>
        </div>
    );
}

export default ProductCard;