import React from "react";
import "./Categories.css"; // Import the CSS file

const Categories = ({ onCategorySelect }) => {
  const categories = [
    "Wedding Collection",
    "Smart Watches",
    "Sports Watches",
    "Kids Collection",
    "More...",
  ];

  return (
    <div className="categories-container">
      <h1 className="categories-title">Watch Categories</h1>
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li
            key={index}
            className="category-item"
            onClick={() => onCategorySelect(category)} // Trigger callback when a category is clicked
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
