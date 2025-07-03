import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <div className="product-card-component">
        <div className="product-card-image-wrapper">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-card-details">
          <h4>{product.name}</h4>
          <p className="product-card-category">{product.category}</p>
          <p className="product-card-price">{product.price}₾</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
