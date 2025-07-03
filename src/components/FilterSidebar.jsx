import React, { useState } from 'react';
import '../styles/FilterSidebar.css';

const FilterSidebar = ({ setCategory }) => {
  const categories = ['ყველა', 'შამპუნი', 'დუშგელი', 'კანის მოვლა'];
  const [activeCategory, setActiveCategory] = useState('ყველა');

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  return (
    <aside className="filter-sidebar">
      <h3 className="sidebar-title">📂 კატეგორიები</h3>
      <div className="category-list">
        {categories.map((c) => (
          <button
            key={c}
            className={`category-button ${activeCategory === c ? 'active' : ''}`}
            onClick={() => handleCategoryClick(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
