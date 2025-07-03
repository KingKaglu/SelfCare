import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details not-found">
        <h2>პროდუქტი ვერ მოიძებნა</h2>
        <button onClick={() => navigate(-1)}>← უკან დაბრუნება</button>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        <div className="image-section">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>

        <div className="info-section">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-category">კატეგორია: <strong>{product.category}</strong></p>
          <p className="product-price">ფასი: <span>{product.price} ₾</span></p>
          <p className="product-description">{product.description}</p>
          <button className="back-button" onClick={() => navigate(-1)}>← დაბრუნება</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
