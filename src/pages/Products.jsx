import React, { useState } from 'react';
import productsData from '../data/products';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  const [category, setCategory] = useState('ყველა');

  const filtered = category === 'ყველა'
    ? productsData
    : productsData.filter(p => p.category === category);

  return (
    <div className="products-page">
      <FilterSidebar setCategory={setCategory} />
      <div className="products-grid">
        {filtered.length > 0 ? (
          filtered.map(p => <ProductCard key={p.id} product={p} />)
        ) : (
          <div className="empty-state">
            პროდუქტი ვერ მოიძებნა ამ კატეგორიაში.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
