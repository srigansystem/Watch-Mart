"use client"
import React,{useContext} from "react";
import "./Categories.css"; // Import the CSS file
import DataContext from './context/dataContext'
const Categories = () => {
  const {selectedCategory,setSelectedCategory,dataset}=useContext(DataContext)
  const categories = [
    "Wedding Collection",
    "Smart Watches",
    "Sports Watches",
    "Kids Collection",
    "More...",
  ];
  const filteredWatches = dataset
    .filter((watch) => {
      const inCategories = selectedCategory === "All" || watch.category === selectedCategory;
      // const inBrand = selectedBrand === "All" || watch.brand === selectedBrand;
      // const inPriceRange = watch.price >= filters.minPrice && watch.price <= filters.maxPrice;
      // const inCaseMaterial = filters.caseMaterial.length === 0 || filters.caseMaterial.includes(watch.case);
      // const inStrapMaterial = filters.strapMaterial.length === 0 || filters.strapMaterial.includes(watch.strap);
      // const inStrapColor = filters.strapColor.length === 0 || filters.strapColor.includes(watch.strapColor);
      // const inCaseShape = filters.caseShape.length === 0 || filters.caseShape.includes(watch.caseShape);
      // const isWaterResistantDepth = watch.waterDepth >= filters.waterResistantDepth;
      return (
        inCategories
        // inBrand &&
        // inPriceRange &&
        // inCaseMaterial &&
        // inStrapMaterial &&
        // inStrapColor &&
        // inCaseShape &&
        // isWaterResistantDepth
      );
    })
  return (
    <div className="categories-container">
      <h1 className="categories-title">Watch Categories</h1>
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li
            key={index}
            className="category-item"
            onClick={() => setSelectedCategory(category)} // Trigger callback when a category is clicked
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
